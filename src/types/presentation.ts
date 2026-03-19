// ============ Slide & Presentation Types ============

export interface SlideElement {
  id: string;
  type: 'title' | 'subtitle' | 'body' | 'image' | 'chart' | 'quote' | 'list' | 'icon';
  content: string;
  x: number;
  y: number;
  width: number;
  height: number;
  style?: Record<string, string>;
}

export interface Slide {
  id: string;
  layout: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  image?: string;
  notes?: string;
  elements?: SlideElement[];
  background?: string;
  backgroundImage?: string;
}

export interface ThemeTokens {
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
  };
  typography: {
    titleFont: string;
    bodyFont: string;
    titleSize: number;
    bodySize: number;
  };
  radii: string;
  shadows: string;
}

export interface PresentationTheme {
  id: string;
  name: string;
  category: string;
  tokens: ThemeTokens;
  previewColors: string[];
}

export interface Presentation {
  id: string;
  title: string;
  slides: Slide[];
  theme: PresentationTheme;
  createdAt: string;
  updatedAt: string;
}

export type ContentSource = 'paste' | 'upload' | 'ai';

export type WizardStep = 'template' | 'content' | 'generating' | 'editor';
