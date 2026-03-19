import React from 'react';
import { motion } from 'framer-motion';
import { Palette, FileText, Sparkles, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  { id: 1, name: 'Template', icon: Palette },
  { id: 2, name: 'Content', icon: FileText },
  { id: 3, name: 'Create', icon: Sparkles },
];

interface Props {
  currentStep: number;
}

export default function StepIndicator({ currentStep }: Props) {
  return (
    <div className="flex items-center justify-center gap-0">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const isComplete = currentStep > step.id;
        const isCurrent = currentStep === step.id;
        const isUpcoming = currentStep < step.id;

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  'w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative',
                  isComplete && 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/20',
                  isCurrent && 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 scale-110',
                  isUpcoming && 'bg-white/5 border border-white/10'
                )}
              >
                {isComplete ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <Icon className={cn('w-5 h-5', isCurrent ? 'text-white' : 'text-slate-500')} />
                )}
                {isCurrent && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl bg-purple-500/30"
                  />
                )}
              </motion.div>
              <span className={cn(
                'mt-2 text-xs font-medium',
                isComplete && 'text-green-400',
                isCurrent && 'text-white',
                isUpcoming && 'text-slate-500'
              )}>
                {step.name}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="w-20 h-0.5 mx-2 mb-6 relative">
                <div className="absolute inset-0 bg-white/10 rounded-full" />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isComplete ? '100%' : '0%' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
