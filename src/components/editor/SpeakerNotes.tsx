import React, { useState } from 'react';
import { ChevronUp, ChevronDown, StickyNote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  notes: string;
  onChange: (notes: string) => void;
}

export default function SpeakerNotes({ notes, onChange }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={cn(
      'border-t border-slate-200 bg-white transition-all duration-200',
      isExpanded ? 'h-40' : 'h-10'
    )}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full h-10 px-4 flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 hover:bg-slate-50 transition-colors"
      >
        <StickyNote className="w-3.5 h-3.5" />
        <span className="font-medium">Speaker Notes</span>
        {isExpanded ? <ChevronDown className="w-3.5 h-3.5 ml-auto" /> : <ChevronUp className="w-3.5 h-3.5 ml-auto" />}
      </button>
      {isExpanded && (
        <textarea
          value={notes}
          onChange={e => onChange(e.target.value)}
          placeholder="Add speaker notes for this slide..."
          className="w-full h-[calc(100%-2.5rem)] px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 bg-slate-50 resize-none focus:outline-none"
        />
      )}
    </div>
  );
}
