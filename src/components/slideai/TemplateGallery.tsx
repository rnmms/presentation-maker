import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, ArrowLeft } from 'lucide-react';
import { PresentationTheme } from '@/types/presentation';
import { THEME_CATALOG } from '@/lib/themes';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

const categories = ['All', 'Business', 'Education', 'Creative', 'Technology', 'Professional'];

interface Props {
  onSelect: (theme: PresentationTheme) => void;
}

export default function TemplateGallery({ onSelect }: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = THEME_CATALOG.filter(t => {
    const matchSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || t.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">Choose a Template</h1>
          <p className="text-muted-foreground text-sm mt-1">Select a theme to get started</p>
        </div>
      </div>

      {/* Search + Categories */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <Badge
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              className={cn(
                'cursor-pointer transition-colors',
                activeCategory === cat ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(theme => (
          <button
            key={theme.id}
            onClick={() => onSelect(theme)}
            className="group text-left rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-md transition-all duration-200"
          >
            {/* Color preview */}
            <div className="h-40 relative overflow-hidden" style={{ backgroundColor: theme.tokens.palette.bg }}>
              <div className="absolute inset-0 flex items-center justify-center gap-3 p-6">
                {/* Mini slide preview */}
                <div
                  className="w-full h-full rounded-lg flex flex-col justify-center items-center gap-2 p-4"
                  style={{ backgroundColor: theme.tokens.palette.bg }}
                >
                  <div
                    className="w-3/4 h-3 rounded-full"
                    style={{ backgroundColor: theme.tokens.palette.primary }}
                  />
                  <div
                    className="w-1/2 h-2 rounded-full opacity-60"
                    style={{ backgroundColor: theme.tokens.palette.secondary }}
                  />
                  <div className="flex gap-2 mt-2">
                    {theme.previewColors.slice(0, 4).map((c, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-black/5"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Info */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {theme.name}
                </h3>
              </div>
              <Badge variant="outline" className="text-xs">{theme.category}</Badge>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
