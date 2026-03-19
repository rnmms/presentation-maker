export interface TemplateDefinition {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  coverImage: string;
  slideImages: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
  };
  fonts: {
    title: string;
    body: string;
  };
  tags: string[];
  isPremium: boolean;
}

// Template definitions with real Slidesgo cover images
export const TEMPLATE_REGISTRY: TemplateDefinition[] = [
  {
    id: 'electric-field',
    name: 'Electric Field Concepts',
    slug: 'electric-field',
    category: 'Education',
    description: 'Modern educational template with bold blue accents',
    coverImage: 'https://media.slidesgo.com/storage/91583820/responsive-images/0-electric-field-concepts___media_library_original_1600_900.jpg',
    slideImages: [
      'https://media.slidesgo.com/storage/91583827/responsive-images/2-electric-field-concepts___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/91583834/responsive-images/3-electric-field-concepts___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/91583835/responsive-images/4-electric-field-concepts___media_library_original_1600_900.jpg',
    ],
    colors: { primary: '#3b82f6', secondary: '#1e40af', accent: '#fbbf24', bg: '#0f172a', text: '#f8fafc' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Science', 'Education', 'Professional'],
    isPremium: false,
  },
  {
    id: 'ethereal-aesthetic',
    name: 'Ethereal Aesthetic',
    slug: 'ethereal-aesthetic',
    category: 'Creative',
    description: 'Dreamy creative template with soft purple tones',
    coverImage: 'https://media.slidesgo.com/storage/92978467/responsive-images/0-ethereal-aesthetic___media_library_original_1600_900.jpg',
    slideImages: [
      'https://media.slidesgo.com/storage/92978477/responsive-images/2-ethereal-aesthetic___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/92978483/responsive-images/3-ethereal-aesthetic___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/92978488/responsive-images/4-ethereal-aesthetic___media_library_original_1600_900.jpg',
    ],
    colors: { primary: '#a78bfa', secondary: '#ec4899', accent: '#f472b6', bg: '#faf5ff', text: '#1e1b4b' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Creative', 'Modern', 'Marketing'],
    isPremium: false,
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    slug: 'ai-automation',
    category: 'Technology',
    description: 'Futuristic tech template with purple gradients',
    coverImage: 'https://media.slidesgo.com/storage/92133854/responsive-images/0-ai-automation___media_library_original_1600_900.jpg',
    slideImages: [
      'https://media.slidesgo.com/storage/92133868/responsive-images/2-ai-automation___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/92133872/responsive-images/3-ai-automation___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/92133877/responsive-images/4-ai-automation___media_library_original_1600_900.jpg',
    ],
    colors: { primary: '#7c3aed', secondary: '#8b5cf6', accent: '#a78bfa', bg: '#faf5ff', text: '#2e1065' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Technology', 'AI', 'Modern'],
    isPremium: false,
  },
  {
    id: 'startup-pitch',
    name: 'Startup Pitch Deck',
    slug: 'startup-pitch',
    category: 'Business',
    description: 'Clean professional deck for investor presentations',
    coverImage: 'https://media.slidesgo.com/storage/91064154/responsive-images/0-startup-pitch-deck___media_library_original_1600_900.jpg',
    slideImages: [
      'https://media.slidesgo.com/storage/91064158/responsive-images/2-startup-pitch-deck___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/91064163/responsive-images/3-startup-pitch-deck___media_library_original_1600_900.jpg',
    ],
    colors: { primary: '#0284c7', secondary: '#06b6d4', accent: '#22d3ee', bg: '#f0f9ff', text: '#0c4a6e' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Business', 'Startup', 'Professional'],
    isPremium: false,
  },
  {
    id: 'black-friday',
    name: 'Black Friday',
    slug: 'black-friday',
    category: 'Marketing',
    description: 'Bold dark marketing template with gold accents',
    coverImage: 'https://media.slidesgo.com/storage/92530411/responsive-images/0-black-friday___media_library_original_1600_900.jpg',
    slideImages: [
      'https://media.slidesgo.com/storage/92530439/responsive-images/3-black-friday___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/92530448/responsive-images/4-black-friday___media_library_original_1600_900.jpg',
    ],
    colors: { primary: '#000000', secondary: '#fbbf24', accent: '#f59e0b', bg: '#000000', text: '#ffffff' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Marketing', 'Sales', 'Bold'],
    isPremium: false,
  },
  {
    id: 'minimal-dark',
    name: 'Minimal Dark',
    slug: 'minimal-dark',
    category: 'Professional',
    description: 'Sleek dark theme with minimal design elements',
    coverImage: '',
    slideImages: [],
    colors: { primary: '#f8fafc', secondary: '#94a3b8', accent: '#6366f1', bg: '#0f172a', text: '#f8fafc' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Professional', 'Minimal', 'Dark'],
    isPremium: false,
  },
  {
    id: 'warm-corporate',
    name: 'Warm Corporate',
    slug: 'warm-corporate',
    category: 'Business',
    description: 'Warm professional template for corporate presentations',
    coverImage: '',
    slideImages: [],
    colors: { primary: '#dc2626', secondary: '#f97316', accent: '#fbbf24', bg: '#fffbeb', text: '#1c1917' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Business', 'Corporate', 'Warm'],
    isPremium: false,
  },
  {
    id: 'christmas-home',
    name: 'Home for Christmas',
    slug: 'christmas-home',
    category: 'Seasonal',
    description: 'Festive holiday template with classic Christmas colors',
    coverImage: 'https://media.slidesgo.com/storage/93236321/responsive-images/0-home-for-christmas___media_library_original_1600_900.jpg',
    slideImages: [
      'https://media.slidesgo.com/storage/93236332/responsive-images/2-home-for-christmas___media_library_original_1600_900.jpg',
      'https://media.slidesgo.com/storage/93236333/responsive-images/3-home-for-christmas___media_library_original_1600_900.jpg',
    ],
    colors: { primary: '#dc2626', secondary: '#166534', accent: '#fbbf24', bg: '#fef2f2', text: '#1c1917' },
    fonts: { title: 'Montserrat', body: 'Inter' },
    tags: ['Seasonal', 'Christmas', 'Holiday'],
    isPremium: false,
  },
];

export function getTemplateBySlug(slug: string): TemplateDefinition | undefined {
  return TEMPLATE_REGISTRY.find(t => t.slug === slug);
}

export function getTemplatesByCategory(category: string): TemplateDefinition[] {
  if (category === 'All') return TEMPLATE_REGISTRY;
  return TEMPLATE_REGISTRY.filter(t => t.category === category);
}

export function getAllCategories(): string[] {
  return ['All', ...new Set(TEMPLATE_REGISTRY.map(t => t.category))];
}

// Convert template definition to the PresentationTheme format used by the editor
export function templateToTheme(template: TemplateDefinition) {
  return {
    id: template.id,
    name: template.name,
    category: template.category,
    tokens: {
      palette: {
        primary: template.colors.primary,
        secondary: template.colors.secondary,
        accent: template.colors.accent,
        bg: template.colors.bg,
        text: template.colors.text,
      },
      typography: {
        titleFont: template.fonts.title,
        bodyFont: template.fonts.body,
        titleSize: 42,
        bodySize: 24,
      },
      radii: '16px',
      shadows: 'lg',
    },
    previewColors: [template.colors.primary, template.colors.secondary, template.colors.accent, template.colors.bg],
  };
}
