import "@supabase/functions-js/edge-runtime.d.ts";

const ANTHROPIC_API_KEY = Deno.env.get("ANTHROPIC_API_KEY");

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `You are an expert presentation designer and content writer. Your job is to generate professional presentation slides from a user's prompt.

RULES:
- Generate between 5 and 15 slides depending on the "length" parameter
- Each slide must have a "type": one of "title", "content", "two-column", "statement", "closing"
- The first slide MUST be type "title" (cover slide)
- The last slide MUST be type "closing" (thank you slide)
- Include 1-2 "statement" slides with impactful quotes or key takeaways
- Body text should be informative, specific, and professional
- Bullets should be concise (1-2 lines each), 3-5 per content slide
- Write in the same language the user uses in their prompt
- Adapt the tone based on the "tone" parameter

RESPOND ONLY WITH VALID JSON matching this schema:
{
  "title": "Presentation title",
  "slides": [
    {
      "type": "title",
      "title": "Main Title",
      "subtitle": "Subtitle or tagline",
      "body": "",
      "bullets": [],
      "notes": "Speaker notes for this slide"
    },
    {
      "type": "content",
      "title": "Slide Title",
      "subtitle": "",
      "body": "Optional paragraph text",
      "bullets": ["Point 1", "Point 2", "Point 3"],
      "notes": "Speaker notes"
    }
  ]
}`;

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }

  try {
    if (!ANTHROPIC_API_KEY) {
      throw new Error("ANTHROPIC_API_KEY not configured");
    }

    const { prompt, length = "informative", tone = "professional", audience = "general" } = await req.json();

    if (!prompt || prompt.length < 3) {
      return new Response(
        JSON.stringify({ error: "Prompt must be at least 3 characters" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    const slideCount = length === "short" ? "5-7" : length === "detailed" ? "12-15" : "8-10";

    const userMessage = `Create a presentation with ${slideCount} slides.

Prompt: ${prompt}
Tone: ${tone}
Audience: ${audience}

Generate the slides JSON now.`;

    // Call Claude API
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 4096,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Anthropic API error:", error);
      throw new Error(`Anthropic API error: ${response.status}`);
    }

    const result = await response.json();
    const content = result.content[0]?.text;

    if (!content) {
      throw new Error("Empty response from Claude");
    }

    // Extract JSON from response (Claude might wrap it in markdown code blocks)
    let jsonStr = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1].trim();
    }

    const presentation = JSON.parse(jsonStr);

    // Add UUIDs to slides
    presentation.slides = presentation.slides.map((slide: Record<string, unknown>) => ({
      ...slide,
      id: crypto.randomUUID().slice(0, 9),
    }));

    return new Response(
      JSON.stringify(presentation),
      { headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
});
