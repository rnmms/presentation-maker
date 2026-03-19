import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TemplateGallery from '@/components/slideai/TemplateGallery';
import ContentStep from '@/components/slideai/ContentStep';
import GeneratingView from '@/components/slideai/GeneratingView';
import { PresentationTheme, Slide, WizardStep } from '@/types/presentation';
import { THEME_CATALOG } from '@/lib/themes';
import { createSampleSlides } from '@/lib/slide-utils';
import { useNavigate } from 'react-router-dom';

export default function SlideAIPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<WizardStep>('template');
  const [selectedTheme, setSelectedTheme] = useState<PresentationTheme | null>(null);
  const [contentText, setContentText] = useState('');

  const handleSelectTheme = (theme: PresentationTheme) => {
    setSelectedTheme(theme);
    setStep('content');
  };

  const handleGenerate = () => {
    setStep('generating');
    // Simulate generation delay, then navigate to editor
    setTimeout(() => {
      const slides = createSampleSlides();
      // Store in sessionStorage for the editor to pick up
      sessionStorage.setItem('presentation', JSON.stringify({
        id: Math.random().toString(36).substring(2, 11),
        title: contentText.slice(0, 50) || 'Untitled Presentation',
        slides,
        theme: selectedTheme || THEME_CATALOG[0],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }));
      navigate('/editor');
    }, 3000);
  };

  const handleBack = () => {
    if (step === 'content') setStep('template');
    else if (step === 'generating') setStep('content');
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {step === 'template' && (
          <motion.div
            key="template"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <TemplateGallery onSelect={handleSelectTheme} />
          </motion.div>
        )}
        {step === 'content' && (
          <motion.div
            key="content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentStep
              theme={selectedTheme!}
              contentText={contentText}
              onContentChange={setContentText}
              onGenerate={handleGenerate}
              onBack={handleBack}
            />
          </motion.div>
        )}
        {step === 'generating' && (
          <motion.div
            key="generating"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <GeneratingView theme={selectedTheme!} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
