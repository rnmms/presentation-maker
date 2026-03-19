import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Presentation } from '@/types/presentation';

export function useSavePresentation() {
  const [saving, setSaving] = useState(false);

  const save = async (presentation: Presentation) => {
    setSaving(true);
    try {
      const { data, error } = await supabase
        .from('presentations')
        .upsert({
          id: presentation.id === 'default' ? undefined : presentation.id,
          title: presentation.title,
          slides: presentation.slides,
          theme: presentation.theme,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'id' })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Failed to save presentation:', err);
      throw err;
    } finally {
      setSaving(false);
    }
  };

  return { save, saving };
}

export function useLoadPresentation(id: string | null) {
  const [presentation, setPresentation] = useState<Presentation | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    supabase
      .from('presentations')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (!error && data) {
          setPresentation({
            id: data.id,
            title: data.title,
            slides: data.slides,
            theme: data.theme,
            createdAt: data.created_at,
            updatedAt: data.updated_at,
          });
        }
        setLoading(false);
      });
  }, [id]);

  return { presentation, loading };
}
