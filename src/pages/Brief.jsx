{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Input\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Label\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/label"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Select\cf0 \strokec4 , \cf5 \strokec5 SelectContent\cf0 \strokec4 , \cf5 \strokec5 SelectItem\cf0 \strokec4 , \cf5 \strokec5 SelectTrigger\cf0 \strokec4 , \cf5 \strokec5 SelectValue\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/select"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Slider\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/slider"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ArrowRight\cf0 \strokec4 , \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 Camera\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4 , useNavigate \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ProgressBar\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/presentation/ProgressBar'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Brief\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  navigate = useNavigate();\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [title, setTitle] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [goal, setGoal] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [audience, setAudience] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tone, setTone] = useState(\cf6 \strokec6 'Neutral'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [slideCount, setSlideCount] = useState([\cf7 \cb3 \strokec7 10\cf0 \cb3 \strokec4 ]);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [imageStyle, setImageStyle] = useState(\cf6 \strokec6 'photography'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedTemplate, setSelectedTemplate] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isGenerating, setIsGenerating] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  template = localStorage.getItem(\cf6 \strokec6 'selectedTemplate'\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (template) \{\cb1 \
\cb3       setSelectedTemplate(\cf5 \strokec5 JSON\cf0 \strokec4 .parse(template));\cb1 \
\cb3     \}\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  tones = [\cf6 \strokec6 'Formal'\cf0 \strokec4 , \cf6 \strokec6 'Neutral'\cf0 \strokec4 , \cf6 \strokec6 'Friendly'\cf0 \strokec4 , \cf6 \strokec6 'Playful'\cf0 \strokec4 ];\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  imageStyles = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'photography'\cf0 \strokec4 , name: \cf6 \strokec6 'Photography'\cf0 \strokec4 , icon: \cf5 \strokec5 Camera\cf0 \strokec4 , color: \cf6 \strokec6 'blue'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'illustration'\cf0 \strokec4 , name: \cf6 \strokec6 'Illustration'\cf0 \strokec4 , icon: \cf5 \strokec5 Palette\cf0 \strokec4 , color: \cf6 \strokec6 'purple'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 '3d'\cf0 \strokec4 , name: \cf6 \strokec6 '3D Render'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , color: \cf6 \strokec6 'pink'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'minimal'\cf0 \strokec4 , name: \cf6 \strokec6 'Minimal'\cf0 \strokec4 , icon: \cf5 \strokec5 Palette\cf0 \strokec4 , color: \cf6 \strokec6 'slate'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'abstract'\cf0 \strokec4 , name: \cf6 \strokec6 'Abstract'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , color: \cf6 \strokec6 'indigo'\cf0 \strokec4  \}\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleGenerate = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!title || !goal || !audience) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\
\cb3     setIsGenerating(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  contentSource = \cf5 \strokec5 JSON\cf0 \strokec4 .parse(localStorage.getItem(\cf6 \strokec6 'contentSource'\cf0 \strokec4 ) || \cf6 \strokec6 '\{\}'\cf0 \strokec4 );\cb1 \
\cb3       \cb1 \
\cb3       \cf8 \cb3 \strokec8 // Create presentation entity\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  presentation = \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .create(\{\cb1 \
\cb3         template_id: selectedTemplate?.id,\cb1 \
\cb3         template_name: selectedTemplate?.name,\cb1 \
\cb3         template_category: selectedTemplate?.category,\cb1 \
\cb3         content_source: contentSource.source,\cb1 \
\cb3         content_text: contentSource.content,\cb1 \
\cb3         title,\cb1 \
\cb3         goal,\cb1 \
\cb3         audience,\cb1 \
\cb3         tone,\cb1 \
\cb3         slide_count: slideCount[\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ],\cb1 \
\cb3         image_style: imageStyle,\cb1 \
\cb3         status: \cf6 \strokec6 'draft'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       \cf8 \cb3 \strokec8 // Generate slides with AI\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf6 \strokec6 `Create a presentation outline for: "\cf0 \strokec4 $\{title\}\cf6 \strokec6 "\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 Goal: \cf0 \strokec4 $\{goal\}\cb1 \
\cf6 \cb3 \strokec6 Audience: \cf0 \strokec4 $\{audience\}\cb1 \
\cf6 \cb3 \strokec6 Tone: \cf0 \strokec4 $\{tone\}\cb1 \
\cf6 \cb3 \strokec6 Number of slides: \cf0 \strokec4 $\{slideCount[\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ]\}\cb1 \
\cf6 \cb3 \strokec6 Content: \cf0 \strokec4 $\{contentSource.content\}\cb1 \
\
\cf6 \cb3 \strokec6 Generate a structured outline with slide titles and 2-4 bullet points per slide.`\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf0 \cb3       \cf2 \strokec2 const\cf0 \strokec4  aiResponse = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf5 \strokec5 Core\cf0 \strokec4 .\cf5 \strokec5 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3         prompt,\cb1 \
\cb3         response_json_schema: \{\cb1 \
\cb3           type: \cf6 \strokec6 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             slides: \{\cb1 \
\cb3               type: \cf6 \strokec6 'array'\cf0 \strokec4 ,\cb1 \
\cb3               items: \{\cb1 \
\cb3                 type: \cf6 \strokec6 'object'\cf0 \strokec4 ,\cb1 \
\cb3                 properties: \{\cb1 \
\cb3                   slide_number: \{ type: \cf6 \strokec6 'number'\cf0 \strokec4  \},\cb1 \
\cb3                   title: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \},\cb1 \
\cb3                   content: \{\cb1 \
\cb3                     type: \cf6 \strokec6 'array'\cf0 \strokec4 ,\cb1 \
\cb3                     items: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \}\cb1 \
\cb3                   \},\cb1 \
\cb3                   layout: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \}\cb1 \
\cb3                 \}\cb1 \
\cb3               \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\
\cb3       \cf8 \cb3 \strokec8 // Update presentation with generated slides\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .update(presentation.id, \{\cb1 \
\cb3         slides: aiResponse.slides,\cb1 \
\cb3         status: \cf6 \strokec6 'editing'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       \cf8 \cb3 \strokec8 // Navigate to editor\cf0 \cb1 \strokec4 \
\cb3       navigate(createPageUrl(\cf6 \strokec6 `Editor?id=\cf0 \strokec4 $\{presentation.id\}\cf6 \strokec6 `\cf0 \strokec4 ));\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       console.error(\cf6 \strokec6 'Error generating presentation:'\cf0 \strokec4 , error);\cb1 \
\cb3       setIsGenerating(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  canContinue = () => \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  title.trim() && goal && audience;\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-32"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf8 \cb3 \strokec8 /* Header */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-lg bg-white/90"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'ContentSource'\cf0 \strokec4 )\}>\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  size=\cf6 \strokec6 "sm"\cf0 \strokec4  className=\cf6 \strokec6 "gap-2"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Back\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "text-center flex-1"\cf0 \strokec4 >\cb1 \
\cb3             <h2 className=\cf6 \strokec6 "text-sm font-medium text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 Step\cf0 \strokec4  \cf7 \cb3 \strokec7 3\cf0 \cb3 \strokec4  \cf2 \strokec2 of\cf0 \strokec4  \cf7 \cb3 \strokec7 4\cf0 \cb3 \strokec4 </h2>\cb1 \
\cb3           </div>\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-20"\cf0 \strokec4  />\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "max-w-6xl mx-auto px-6 py-12"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 ProgressBar\cf0 \strokec4  currentStep=\{\cf7 \cb3 \strokec7 3\cf0 \cb3 \strokec4 \} />\cb1 \
\
\cb3         \{\cf8 \cb3 \strokec8 /* Title */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "text-center mb-12"\cf0 \strokec4 >\cb1 \
\cb3           <h1 className=\cf6 \strokec6 "text-5xl font-bold text-slate-900 mb-4"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Tell\cf0 \strokec4  us about your presentation\cb1 \
\cb3           </h1>\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-xl text-slate-600 max-w-2xl mx-auto"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 A\cf0 \strokec4  few quick details to help \cf5 \strokec5 AI\cf0 \strokec4  create the perfect structure.\cb1 \
\cb3           </p>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "grid lg:grid-cols-3 gap-8"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf8 \cb3 \strokec8 /* Left & Center - Form Fields */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "lg:col-span-2 space-y-6"\cf0 \strokec4 >\cb1 \
\cb3             \{\cf8 \cb3 \strokec8 /* Presentation Title */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Label\cf0 \strokec4  htmlFor=\cf6 \strokec6 "title"\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-semibold mb-3 block"\cf0 \strokec4 >\cb1 \
\cb3                 \cf5 \strokec5 Presentation\cf0 \strokec4  \cf5 \strokec5 Title\cf0 \strokec4  *\cb1 \
\cb3               </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Input\cf0 \cb1 \strokec4 \
\cb3                 id=\cf6 \strokec6 "title"\cf0 \cb1 \strokec4 \
\cb3                 placeholder=\cf6 \strokec6 "e.g., Marketing Strategy Q4 2024"\cf0 \cb1 \strokec4 \
\cb3                 className=\cf6 \strokec6 "h-12 text-lg"\cf0 \cb1 \strokec4 \
\cb3                 value=\{title\}\cb1 \
\cb3                 onChange=\{(e) => setTitle(e.target.value)\}\cb1 \
\cb3               />\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\
\cb3             \{\cf8 \cb3 \strokec8 /* Goal & Audience */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "grid md:grid-cols-2 gap-6"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-semibold mb-3 block"\cf0 \strokec4 >\cf5 \strokec5 Goal\cf0 \strokec4  *</\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Select\cf0 \strokec4  value=\{goal\} onValueChange=\{setGoal\}>\cb1 \
\cb3                   <\cf5 \strokec5 SelectTrigger\cf0 \strokec4  className=\cf6 \strokec6 "h-12 text-base"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectValue\cf0 \strokec4  placeholder=\cf6 \strokec6 "Select goal"\cf0 \strokec4  />\cb1 \
\cb3                   </\cf5 \strokec5 SelectTrigger\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 SelectContent\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Inform"\cf0 \strokec4 >\cf5 \strokec5 Inform\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Persuade"\cf0 \strokec4 >\cf5 \strokec5 Persuade\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Teach"\cf0 \strokec4 >\cf5 \strokec5 Teach\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Pitch"\cf0 \strokec4 >\cf5 \strokec5 Pitch\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Other"\cf0 \strokec4 >\cf5 \strokec5 Other\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                   </\cf5 \strokec5 SelectContent\cf0 \strokec4 >\cb1 \
\cb3                 </\cf5 \strokec5 Select\cf0 \strokec4 >\cb1 \
\cb3               </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\
\cb3               <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-semibold mb-3 block"\cf0 \strokec4 >\cf5 \strokec5 Audience\cf0 \strokec4  *</\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Select\cf0 \strokec4  value=\{audience\} onValueChange=\{setAudience\}>\cb1 \
\cb3                   <\cf5 \strokec5 SelectTrigger\cf0 \strokec4  className=\cf6 \strokec6 "h-12 text-base"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectValue\cf0 \strokec4  placeholder=\cf6 \strokec6 "Select audience"\cf0 \strokec4  />\cb1 \
\cb3                   </\cf5 \strokec5 SelectTrigger\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 SelectContent\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Students"\cf0 \strokec4 >\cf5 \strokec5 Students\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Clients"\cf0 \strokec4 >\cf5 \strokec5 Clients\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "Colleagues"\cf0 \strokec4 >\cf5 \strokec5 Colleagues\cf0 \strokec4 </\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 SelectItem\cf0 \strokec4  value=\cf6 \strokec6 "General audience"\cf0 \strokec4 >\cf5 \strokec5 General\cf0 \strokec4  audience</\cf5 \strokec5 SelectItem\cf0 \strokec4 >\cb1 \
\cb3                   </\cf5 \strokec5 SelectContent\cf0 \strokec4 >\cb1 \
\cb3                 </\cf5 \strokec5 Select\cf0 \strokec4 >\cb1 \
\cb3               </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf8 \cb3 \strokec8 /* Tone */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-semibold mb-4 block"\cf0 \strokec4 >\cf5 \strokec5 Tone\cf0 \strokec4 </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex flex-wrap gap-3"\cf0 \strokec4 >\cb1 \
\cb3                 \{tones.map(t => (\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                     key=\{t\}\cb1 \
\cb3                     variant=\{tone === t ? \cf6 \strokec6 'default'\cf0 \strokec4  : \cf6 \strokec6 'outline'\cf0 \strokec4 \}\cb1 \
\cb3                     className=\{\cf6 \strokec6 `px-6 py-5 text-base \cf0 \strokec4 $\{\cb1 \
\cb3                       tone === t ? \cf6 \strokec6 'bg-indigo-600 hover:bg-indigo-700'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \cb1 \strokec4 \
\cb3                     \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3                     onClick=\{() => setTone(t)\}\cb1 \
\cb3                   >\cb1 \
\cb3                     \{t\}\cb1 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\
\cb3             \{\cf8 \cb3 \strokec8 /* Slide Count */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-semibold mb-4 block"\cf0 \strokec4 >\cb1 \
\cb3                 \cf5 \strokec5 Number\cf0 \strokec4  \cf2 \strokec2 of\cf0 \strokec4  \cf5 \strokec5 Slides\cf0 \strokec4 : \{slideCount[\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ]\}\cb1 \
\cb3               </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Slider\cf0 \cb1 \strokec4 \
\cb3                 value=\{slideCount\}\cb1 \
\cb3                 onValueChange=\{setSlideCount\}\cb1 \
\cb3                 min=\{\cf7 \cb3 \strokec7 5\cf0 \cb3 \strokec4 \}\cb1 \
\cb3                 max=\{\cf7 \cb3 \strokec7 20\cf0 \cb3 \strokec4 \}\cb1 \
\cb3                 step=\{\cf7 \cb3 \strokec7 1\cf0 \cb3 \strokec4 \}\cb1 \
\cb3                 className=\cf6 \strokec6 "mb-2"\cf0 \cb1 \strokec4 \
\cb3               />\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex justify-between text-sm text-slate-500 mt-2"\cf0 \strokec4 >\cb1 \
\cb3                 <span>\cf7 \cb3 \strokec7 5\cf0 \cb3 \strokec4  slides</span>\cb1 \
\cb3                 <span>\cf7 \cb3 \strokec7 20\cf0 \cb3 \strokec4  slides</span>\cb1 \
\cb3               </div>\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\
\cb3             \{\cf8 \cb3 \strokec8 /* Image Style */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-semibold mb-4 block"\cf0 \strokec4 >\cf5 \strokec5 Image\cf0 \strokec4  \cf5 \strokec5 Style\cf0 \strokec4 </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "grid grid-cols-3 md:grid-cols-5 gap-3"\cf0 \strokec4 >\cb1 \
\cb3                 \{imageStyles.map(style => \{\cb1 \
\cb3                   \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = style.icon;\cb1 \
\cb3                   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3                     <button\cb1 \
\cb3                       key=\{style.id\}\cb1 \
\cb3                       className=\{\cf6 \strokec6 `p-4 rounded-xl border-2 transition-all duration-200 \cf0 \strokec4 $\{\cb1 \
\cb3                         imageStyle === style.id\cb1 \
\cb3                           ? \cf6 \strokec6 'border-indigo-600 bg-indigo-50 shadow-lg'\cf0 \cb1 \strokec4 \
\cb3                           : \cf6 \strokec6 'border-slate-200 hover:border-slate-300 bg-white'\cf0 \cb1 \strokec4 \
\cb3                       \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3                       onClick=\{() => setImageStyle(style.id)\}\cb1 \
\cb3                     >\cb1 \
\cb3                       <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{\cf6 \strokec6 `w-8 h-8 mx-auto mb-2 \cf0 \strokec4 $\{\cb1 \
\cb3                         imageStyle === style.id ? \cf6 \strokec6 'text-indigo-600'\cf0 \strokec4  : \cf6 \strokec6 'text-slate-400'\cf0 \cb1 \strokec4 \
\cb3                       \}\cf6 \strokec6 `\cf0 \strokec4 \} />\cb1 \
\cb3                       <p className=\{\cf6 \strokec6 `text-sm font-medium \cf0 \strokec4 $\{\cb1 \
\cb3                         imageStyle === style.id ? \cf6 \strokec6 'text-indigo-900'\cf0 \strokec4  : \cf6 \strokec6 'text-slate-600'\cf0 \cb1 \strokec4 \
\cb3                       \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3                         \{style.name\}\cb1 \
\cb3                       </p>\cb1 \
\cb3                     </button>\cb1 \
\cb3                   );\cb1 \
\cb3                 \})\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf8 \cb3 \strokec8 /* Right Sidebar - Template Preview */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "lg:sticky lg:top-32 h-fit"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-semibold mb-4 block"\cf0 \strokec4 >\cf5 \strokec5 Your\cf0 \strokec4  \cf5 \strokec5 Theme\cf0 \strokec4 </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3               \{selectedTemplate ? (\cb1 \
\cb3                 <>\cb1 \
\cb3                   <img\cb1 \
\cb3                     src=\{selectedTemplate.cover\}\cb1 \
\cb3                     alt=\{selectedTemplate.name\}\cb1 \
\cb3                     className=\cf6 \strokec6 "w-full rounded-lg shadow-lg mb-4"\cf0 \cb1 \strokec4 \
\cb3                   />\cb1 \
\cb3                   <h3 className=\cf6 \strokec6 "font-semibold text-slate-800 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                     \{selectedTemplate.name\}\cb1 \
\cb3                   </h3>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-slate-500 mb-4"\cf0 \strokec4 >\cb1 \
\cb3                     \{selectedTemplate.category\} template\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "outline"\cf0 \strokec4  className=\cf6 \strokec6 "w-full"\cf0 \strokec4  asChild>\cb1 \
\cb3                     <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'Templates'\cf0 \strokec4 )\}>\cb1 \
\cb3                       \cf5 \strokec5 Change\cf0 \strokec4  \cf5 \strokec5 Template\cf0 \cb1 \strokec4 \
\cb3                     </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </>\cb1 \
\cb3               ) : (\cb1 \
\cb3                 <div className=\cf6 \strokec6 "bg-slate-100 rounded-lg p-8 text-center"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 No\cf0 \strokec4  template selected</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               )\}\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \cb3 \strokec8 /* Bottom Navigation */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-6 px-6 backdrop-blur-lg bg-white/90"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "max-w-6xl mx-auto flex justify-end"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3               size=\cf6 \strokec6 "lg"\cf0 \cb1 \strokec4 \
\cb3               disabled=\{!canContinue() || isGenerating\}\cb1 \
\cb3               className=\cf6 \strokec6 "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg disabled:opacity-50"\cf0 \cb1 \strokec4 \
\cb3               onClick=\{handleGenerate\}\cb1 \
\cb3             >\cb1 \
\cb3               \{isGenerating ? (\cb1 \
\cb3                 <>\cb1 \
\cb3                   <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "mr-2 w-5 h-5 animate-spin"\cf0 \strokec4  />\cb1 \
\cb3                   \cf5 \strokec5 Generating\cf0 \strokec4 ...\cb1 \
\cb3                 </>\cb1 \
\cb3               ) : (\cb1 \
\cb3                 <>\cb1 \
\cb3                   \cf5 \strokec5 Generate\cf0 \strokec4  outline and slides\cb1 \
\cb3                   <\cf5 \strokec5 ArrowRight\cf0 \strokec4  className=\cf6 \strokec6 "ml-2 w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3                 </>\cb1 \
\cb3               )\}\cb1 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}