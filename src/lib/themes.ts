import { PresentationTheme } from '@/types/presentation';

export const THEME_CATALOG: PresentationTheme[] = [
  {
    id: 'electric-field',
    name: 'Electric Field',
    category: 'Education',
    tokens: {
      palette: { primary: '#3b82f6', secondary: '#60a5fa', accent: '#fbbf24', bg: '#0f172a', text: '#f8fafc' },
      typography: { titleFont: 'Montserrat', bodyFont: 'Inter', titleSize: 42, bodySize: 24 },
      radii: '16px',
      shadows: 'lg',
    },
    previewColors: ['#3b82f6', '#60a5fa', '#fbbf24', '#0f172a'],
  },
  {
    id: 'ethereal-aesthetic',
    name: 'Ethereal Aesthetic',
    category: 'Creative',
    tokens: {
      palette: { primary: '#a78bfa', secondary: '#ec4899', accent: '#f472b6', bg: '#faf5ff', text: '#1e1b4b' },
      typography: { titleFont: 'Montserrat', bodyFont: 'Inter', titleSize: 40, bodySize: 22 },
      radii: '24px',
      shadows: 'xl',
    },
    previewColors: ['#a78bfa', '#ec4899', '#f472b6', '#faf5ff'],
  },
  {
    id: 'startup-pitch',
    name: 'Startup Pitch Deck',
    category: 'Business',
    tokens: {
      palette: { primary: '#0284c7', secondary: '#06b6d4', accent: '#22d3ee', bg: '#f0f9ff', text: '#0c4a6e' },
      typography: { titleFont: 'Montserrat', bodyFont: 'Inter', titleSize: 44, bodySize: 24 },
      radii: '8px',
      shadows: 'md',
    },
    previewColors: ['#0284c7', '#06b6d4', '#22d3ee', '#f0f9ff'],
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    category: 'Technology',
    tokens: {
      palette: { primary: '#7c3aed', secondary: '#8b5cf6', accent: '#a78bfa', bg: '#faf5ff', text: '#2e1065' },
      typography: { titleFont: 'Montserrat', bodyFont: 'Inter', titleSize: 42, bodySize: 24 },
      radii: '16px',
      shadows: 'lg',
    },
    previewColors: ['#7c3aed', '#8b5cf6', '#a78bfa', '#faf5ff'],
  },
  {
    id: 'minimal-dark',
    name: 'Minimal Dark',
    category: 'Professional',
    tokens: {
      palette: { primary: '#f8fafc', secondary: '#94a3b8', accent: '#6366f1', bg: '#0f172a', text: '#f8fafc' },
      typography: { titleFont: 'Montserrat', bodyFont: 'Inter', titleSize: 48, bodySize: 24 },
      radii: '12px',
      shadows: 'none',
    },
    previewColors: ['#f8fafc', '#94a3b8', '#6366f1', '#0f172a'],
  },
  {
    id: 'warm-corporate',
    name: 'Warm Corporate',
    category: 'Business',
    tokens: {
      palette: { primary: '#dc2626', secondary: '#f97316', accent: '#fbbf24', bg: '#fffbeb', text: '#1c1917' },
      typography: { titleFont: 'Montserrat', bodyFont: 'Inter', titleSize: 40, bodySize: 22 },
      radii: '8px',
      shadows: 'md',
    },
    previewColors: ['#dc2626', '#f97316', '#fbbf24', '#fffbeb'],
  },
];

export function getThemeById(id: string): PresentationTheme | undefined {
  return THEME_CATALOG.find(t => t.id === id);
}
