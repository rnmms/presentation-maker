import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Check, ChevronRight, ChevronDown, Target, Palette, Eye, BarChart3, ArrowUpDown, X, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PresentationTheme } from '@/types/presentation';
import { THEME_CATALOG } from '@/lib/themes';
import StepIndicator from './StepIndicator';
import { useNavigate } from 'react-router-dom';

function ThemeCard({ theme, isSelected, onSelect }: { theme: PresentationTheme; isSelected: boolean; onSelect: (t: PresentationTheme) => void }) {
  return (
    <motion.button
      layout
      whileHover={{ y: -6 }}
      onClick={() => onSelect(theme)}
      className={cn(
        'relative group rounded-xl overflow-hidden transition-all duration-300 text-left w-full',
        isSelected
          ? 'ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0a0a0c] shadow-xl shadow-purple-500/25'
          : 'hover:shadow-xl hover:shadow-purple-500/10'
      )}
    >
      {/* Color preview */}
      <div className="aspect-video relative overflow-hidden bg-slate-900">
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-3 p-6"
          style={{ backgroundColor: theme.tokens.palette.bg }}
        >
          <div className="w-3/4 h-4 rounded-full" style={{ backgroundColor: theme.tokens.palette.primary }} />
          <div className="w-1/2 h-3 rounded-full opacity-60" style={{ backgroundColor: theme.tokens.palette.secondary }} />
          <div className="flex gap-2 mt-2">
            {theme.previewColors.map((c, i) => (
              <div key={i} className="w-6 h-6 rounded-full ring-1 ring-white/20" style={{ backgroundColor: c }} />
            ))}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Selected check */}
        {isSelected && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shadow-lg"
          >
            <Check className="w-4 h-4 text-white" />
          </motion.div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 bg-slate-900/80 backdrop-blur-sm">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-white text-sm truncate">{theme.name}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{theme.category}</p>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            {theme.previewColors.slice(0, 2).map((color, idx) => (
              <div key={idx} className="w-3 h-3 rounded-full ring-1 ring-white/20" style={{ backgroundColor: color }} />
            ))}
          </div>
        </div>
      </div>
    </motion.button>
  );
}

interface Props {
  onSelect: (theme: PresentationTheme) => void;
  selectedTheme?: PresentationTheme | null;
}

export default function TemplateGallery({ onSelect, selectedTheme }: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(THEME_CATALOG.map(t => t.category))];
    return cats;
  }, []);

  const filtered = useMemo(() => {
    return THEME_CATALOG.filter(t => {
      if (search && !t.name.toLowerCase().includes(search.toLowerCase())) return false;
      if (activeCategory !== 'All' && t.category !== activeCategory) return false;
      return true;
    });
  }, [search, activeCategory]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen relative z-10"
    >
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Header with step indicator */}
      <div className="sticky top-0 z-30 bg-[#030305]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <StepIndicator currentStep={1} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back + Title */}
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-white text-sm">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Pick your template</h1>
            <p className="text-slate-400 text-sm mt-1">Choose a design that fits your story</p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center gap-3 mb-6 p-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl">
          {/* Search */}
          <div className="relative flex-shrink-0">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-44 h-8 pl-8 pr-3 bg-white/5 border border-white/10 rounded-md text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/40"
            />
          </div>
          <div className="w-px h-5 bg-white/10" />
          {/* Category pills */}
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'h-8 px-3 flex items-center gap-2 rounded-md text-xs font-medium transition-all border',
                activeCategory === cat
                  ? 'bg-purple-500/15 border-purple-500/30 text-purple-300'
                  : 'bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-xs text-slate-500 mb-4">
          {filtered.length} template{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Template Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map(theme => (
              <ThemeCard
                key={theme.id}
                theme={theme}
                isSelected={selectedTheme?.id === theme.id}
                onSelect={onSelect}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-400">No templates found</p>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <AnimatePresence>
        {selectedTheme && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-[#0a0a0c]/95 backdrop-blur-xl border-t border-white/10 py-4 px-6 z-40"
          >
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-9 rounded-lg ring-2 ring-purple-500 flex items-center justify-center"
                  style={{ backgroundColor: selectedTheme.tokens.palette.bg }}
                >
                  <div className="w-8 h-1.5 rounded-full" style={{ backgroundColor: selectedTheme.tokens.palette.primary }} />
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{selectedTheme.name}</p>
                  <p className="text-xs text-slate-400">Selected</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(selectedTheme)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/25 flex items-center gap-2"
              >
                Continue
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
