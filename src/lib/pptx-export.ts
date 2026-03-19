import PptxGenJS from 'pptxgenjs';
import { Presentation, Slide, PresentationTheme } from '@/types/presentation';

export async function exportToPptx(presentation: Presentation): Promise<void> {
  const pptx = new PptxGenJS();
  const { theme } = presentation;
  const { palette, typography } = theme.tokens;

  // Presentation metadata
  pptx.author = 'SlideAI';
  pptx.title = presentation.title;
  pptx.layout = 'LAYOUT_WIDE'; // 16:9

  // Define master slides
  pptx.defineSlideMaster({
    title: 'CONTENT_SLIDE',
    background: { color: palette.bg.replace('#', '') },
  });

  pptx.defineSlideMaster({
    title: 'DARK_SLIDE',
    background: { color: palette.primary.replace('#', '') },
  });

  // Generate slides
  for (const slide of presentation.slides) {
    addSlide(pptx, slide, theme);
  }

  // Download
  await pptx.writeFile({ fileName: `${sanitizeFilename(presentation.title)}.pptx` });
}

function addSlide(pptx: PptxGenJS, slide: Slide, theme: PresentationTheme): void {
  const { palette, typography } = theme.tokens;
  const primaryHex = palette.primary.replace('#', '');
  const secondaryHex = palette.secondary.replace('#', '');
  const textHex = palette.text.replace('#', '');
  const bgHex = palette.bg.replace('#', '');
  const accentHex = (palette.accent || palette.primary).replace('#', '');

  switch (slide.layout) {
    case 'cover':
      addCoverSlide(pptx, slide, { primaryHex, secondaryHex, textHex, bgHex, typography });
      break;
    case 'statement':
      addStatementSlide(pptx, slide, { primaryHex, secondaryHex, textHex, bgHex, typography });
      break;
    case 'closing':
      addClosingSlide(pptx, slide, { primaryHex, secondaryHex, textHex, bgHex, typography });
      break;
    case 'two-column':
      addTwoColumnSlide(pptx, slide, { primaryHex, secondaryHex, textHex, bgHex, accentHex, typography });
      break;
    default:
      addContentSlide(pptx, slide, { primaryHex, secondaryHex, textHex, bgHex, accentHex, typography });
  }
}

interface SlideColors {
  primaryHex: string;
  secondaryHex: string;
  textHex: string;
  bgHex: string;
  accentHex?: string;
  typography: { titleFont: string; bodyFont: string; titleSize: number; bodySize: number };
}

function addCoverSlide(pptx: PptxGenJS, slide: Slide, colors: SlideColors): void {
  const s = pptx.addSlide();

  // Gradient background bar at top
  s.addShape('rect', {
    x: 0, y: 0, w: '100%', h: 0.8,
    fill: { type: 'solid', color: colors.primaryHex },
  });

  // Accent bar
  s.addShape('rect', {
    x: 0, y: 0.8, w: '100%', h: 0.05,
    fill: { type: 'solid', color: colors.secondaryHex },
  });

  s.background = { color: colors.bgHex };

  // Title
  s.addText(slide.title || 'Untitled Presentation', {
    x: 0.8, y: 2.0, w: '85%', h: 1.5,
    fontSize: Math.round(colors.typography.titleSize * 0.85),
    fontFace: colors.typography.titleFont,
    color: colors.primaryHex,
    bold: true,
    align: 'center',
    valign: 'middle',
  });

  // Subtitle
  if (slide.subtitle) {
    s.addText(slide.subtitle, {
      x: 0.8, y: 3.5, w: '85%', h: 0.8,
      fontSize: Math.round(colors.typography.bodySize * 0.9),
      fontFace: colors.typography.bodyFont,
      color: colors.textHex,
      align: 'center',
      valign: 'middle',
    });
  }
}

function addContentSlide(pptx: PptxGenJS, slide: Slide, colors: SlideColors & { accentHex: string }): void {
  const s = pptx.addSlide();
  s.background = { color: colors.bgHex };

  // Colored left accent bar
  s.addShape('rect', {
    x: 0, y: 0, w: 0.06, h: '100%',
    fill: { type: 'solid', color: colors.primaryHex },
  });

  // Title
  s.addText(slide.title || '', {
    x: 0.5, y: 0.3, w: '90%', h: 0.8,
    fontSize: Math.round(colors.typography.titleSize * 0.7),
    fontFace: colors.typography.titleFont,
    color: colors.primaryHex,
    bold: true,
  });

  // Divider line
  s.addShape('rect', {
    x: 0.5, y: 1.1, w: 1.5, h: 0.04,
    fill: { type: 'solid', color: colors.accentHex },
  });

  let yPos = 1.4;

  // Body text
  if (slide.body) {
    s.addText(slide.body, {
      x: 0.5, y: yPos, w: '90%', h: 0.8,
      fontSize: Math.round(colors.typography.bodySize * 0.65),
      fontFace: colors.typography.bodyFont,
      color: colors.textHex,
      lineSpacingMultiple: 1.3,
    });
    yPos += 0.9;
  }

  // Bullets
  if (slide.bullets && slide.bullets.length > 0) {
    const bulletTexts = slide.bullets.map(b => ({
      text: b,
      options: {
        bullet: { code: '25CF', color: colors.accentHex },
        fontSize: Math.round(colors.typography.bodySize * 0.6),
        fontFace: colors.typography.bodyFont,
        color: colors.textHex,
        lineSpacingMultiple: 1.5,
        indentLevel: 0,
        paraSpaceAfter: 8,
      },
    }));

    s.addText(bulletTexts, {
      x: 0.5, y: yPos, w: '88%', h: 4.0 - yPos + 1,
      valign: 'top',
    });
  }
}

function addTwoColumnSlide(pptx: PptxGenJS, slide: Slide, colors: SlideColors & { accentHex: string }): void {
  const s = pptx.addSlide();
  s.background = { color: colors.bgHex };

  // Left accent bar
  s.addShape('rect', {
    x: 0, y: 0, w: 0.06, h: '100%',
    fill: { type: 'solid', color: colors.primaryHex },
  });

  // Title
  s.addText(slide.title || '', {
    x: 0.5, y: 0.3, w: '90%', h: 0.8,
    fontSize: Math.round(colors.typography.titleSize * 0.7),
    fontFace: colors.typography.titleFont,
    color: colors.primaryHex,
    bold: true,
  });

  // Divider
  s.addShape('rect', {
    x: 0.5, y: 1.1, w: 1.5, h: 0.04,
    fill: { type: 'solid', color: colors.accentHex },
  });

  // Left column - body
  if (slide.body) {
    s.addText(slide.body, {
      x: 0.5, y: 1.4, w: '44%', h: 3.5,
      fontSize: Math.round(colors.typography.bodySize * 0.6),
      fontFace: colors.typography.bodyFont,
      color: colors.textHex,
      lineSpacingMultiple: 1.3,
      valign: 'top',
    });
  }

  // Right column - bullets
  if (slide.bullets && slide.bullets.length > 0) {
    const bulletTexts = slide.bullets.map(b => ({
      text: b,
      options: {
        bullet: { code: '25CF', color: colors.accentHex },
        fontSize: Math.round(colors.typography.bodySize * 0.58),
        fontFace: colors.typography.bodyFont,
        color: colors.textHex,
        lineSpacingMultiple: 1.4,
        paraSpaceAfter: 6,
      },
    }));

    s.addText(bulletTexts, {
      x: '52%', y: 1.4, w: '44%', h: 3.5,
      valign: 'top',
    });
  }
}

function addStatementSlide(pptx: PptxGenJS, slide: Slide, colors: SlideColors): void {
  const s = pptx.addSlide();
  s.background = { color: colors.primaryHex };

  // Quote/statement text
  const text = slide.body || slide.title || '';
  s.addText(text, {
    x: 1, y: 1.5, w: '80%', h: 2.5,
    fontSize: Math.round(colors.typography.titleSize * 0.65),
    fontFace: colors.typography.titleFont,
    color: 'FFFFFF',
    bold: true,
    italic: true,
    align: 'center',
    valign: 'middle',
    lineSpacingMultiple: 1.3,
  });

  // Attribution
  if (slide.subtitle) {
    s.addText(slide.subtitle, {
      x: 1, y: 4.0, w: '80%', h: 0.5,
      fontSize: Math.round(colors.typography.bodySize * 0.7),
      fontFace: colors.typography.bodyFont,
      color: 'FFFFFF',
      align: 'center',
      italic: true,
    });
  }
}

function addClosingSlide(pptx: PptxGenJS, slide: Slide, colors: SlideColors): void {
  const s = pptx.addSlide();
  s.background = { color: colors.bgHex };

  // Accent bar
  s.addShape('rect', {
    x: '35%', y: 1.8, w: '30%', h: 0.05,
    fill: { type: 'solid', color: colors.primaryHex },
  });

  // Title
  s.addText(slide.title || 'Thank You', {
    x: 0.5, y: 2.0, w: '90%', h: 1.2,
    fontSize: Math.round(colors.typography.titleSize * 0.95),
    fontFace: colors.typography.titleFont,
    color: colors.primaryHex,
    bold: true,
    align: 'center',
    valign: 'middle',
  });

  // Subtitle
  if (slide.subtitle) {
    s.addText(slide.subtitle, {
      x: 0.5, y: 3.2, w: '90%', h: 0.6,
      fontSize: Math.round(colors.typography.bodySize * 0.8),
      fontFace: colors.typography.bodyFont,
      color: colors.textHex,
      align: 'center',
    });
  }

  // Contact / body
  if (slide.body) {
    s.addText(slide.body, {
      x: 0.5, y: 3.9, w: '90%', h: 0.5,
      fontSize: Math.round(colors.typography.bodySize * 0.65),
      fontFace: colors.typography.bodyFont,
      color: colors.secondaryHex,
      align: 'center',
    });
  }
}

function sanitizeFilename(name: string): string {
  return name
    .replace(/[^a-zA-Z0-9\s-_]/g, '')
    .replace(/\s+/g, '_')
    .slice(0, 50) || 'presentation';
}
