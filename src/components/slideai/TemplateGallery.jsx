{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useMemo \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Search\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 ChevronRight\cf0 \strokec4 , \cf5 \strokec5 ChevronDown\cf0 \strokec4 , \cf5 \strokec5 Target\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Eye\cf0 \strokec4 , \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 ArrowUpDown\cf0 \strokec4 , \cf5 \strokec5 X\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 StepIndicator\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './StepIndicator'\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Real Slidesgo templates with extended metadata\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  templates = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'electric-field'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Electric Field Concepts'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf6 \strokec6 'Education'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/91583820/responsive-images/0-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/91583827/responsive-images/2-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/91583834/responsive-images/3-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/91583835/responsive-images/4-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \cb1 \strokec4 \
\cb3     ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#3b82f6'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#1e40af'\cf0 \strokec4  \},\cb1 \
\cb3     tags: [\cf6 \strokec6 'Science'\cf0 \strokec4 , \cf6 \strokec6 'Professional'\cf0 \strokec4 ],\cb1 \
\cb3     \cf7 \strokec7 // Extended metadata\cf0 \cb1 \strokec4 \
\cb3     goals: [\cf6 \strokec6 'teach'\cf0 \strokec4 , \cf6 \strokec6 'inform'\cf0 \strokec4 ],\cb1 \
\cb3     tone: \cf6 \strokec6 'formal'\cf0 \strokec4 ,\cb1 \
\cb3     style: [\cf6 \strokec6 'modern'\cf0 \strokec4 , \cf6 \strokec6 'minimalist'\cf0 \strokec4 ],\cb1 \
\cb3     aspect_ratio: \cf6 \strokec6 '16:9'\cf0 \strokec4 ,\cb1 \
\cb3     industry: [\cf6 \strokec6 'education'\cf0 \strokec4 , \cf6 \strokec6 'technology'\cf0 \strokec4 ],\cb1 \
\cb3     accessibility: \{ aa_ready: \cf2 \strokec2 true\cf0 \strokec4  \},\cb1 \
\cb3     data_capacity: \{ score: \cf8 \strokec8 85\cf0 \strokec4  \},\cb1 \
\cb3     brand_fit: \{ palette_overridable: \cf2 \strokec2 true\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'ethereal-dreams'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Ethereal Aesthetic'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf6 \strokec6 'Creative'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92978467/responsive-images/0-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92978477/responsive-images/2-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92978483/responsive-images/3-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92978488/responsive-images/4-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \cb1 \strokec4 \
\cb3     ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#a78bfa'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#7c3aed'\cf0 \strokec4  \},\cb1 \
\cb3     tags: [\cf6 \strokec6 'Creative'\cf0 \strokec4 , \cf6 \strokec6 'Modern'\cf0 \strokec4 ],\cb1 \
\cb3     goals: [\cf6 \strokec6 'persuade'\cf0 \strokec4 , \cf6 \strokec6 'pitch'\cf0 \strokec4 ],\cb1 \
\cb3     tone: \cf6 \strokec6 'friendly'\cf0 \strokec4 ,\cb1 \
\cb3     style: [\cf6 \strokec6 'playful'\cf0 \strokec4 , \cf6 \strokec6 'illustrated'\cf0 \strokec4 ],\cb1 \
\cb3     aspect_ratio: \cf6 \strokec6 '16:9'\cf0 \strokec4 ,\cb1 \
\cb3     industry: [\cf6 \strokec6 'marketing'\cf0 \strokec4 ],\cb1 \
\cb3     accessibility: \{ aa_ready: \cf2 \strokec2 true\cf0 \strokec4  \},\cb1 \
\cb3     brand_fit: \{ palette_overridable: \cf2 \strokec2 true\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'home-christmas'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Home for Christmas'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf6 \strokec6 'Seasonal'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/93236321/responsive-images/0-home-for-christmas___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/93236332/responsive-images/2-home-for-christmas___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/93236333/responsive-images/3-home-for-christmas___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/93236338/responsive-images/4-home-for-christmas___media_library_original_1600_900.jpg'\cf0 \cb1 \strokec4 \
\cb3     ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#dc2626'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#166534'\cf0 \strokec4  \},\cb1 \
\cb3     tags: [\cf6 \strokec6 'Seasonal'\cf0 \strokec4 , \cf6 \strokec6 'Playful'\cf0 \strokec4 ],\cb1 \
\cb3     goals: [\cf6 \strokec6 'inform'\cf0 \strokec4 ],\cb1 \
\cb3     tone: \cf6 \strokec6 'playful'\cf0 \strokec4 ,\cb1 \
\cb3     style: [\cf6 \strokec6 'playful'\cf0 \strokec4 , \cf6 \strokec6 'illustrated'\cf0 \strokec4 ],\cb1 \
\cb3     aspect_ratio: \cf6 \strokec6 '16:9'\cf0 \strokec4 ,\cb1 \
\cb3     industry: [\cf6 \strokec6 'marketing'\cf0 \strokec4 ],\cb1 \
\cb3     accessibility: \{ aa_ready: \cf2 \strokec2 true\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'black-friday'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Black Friday'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf6 \strokec6 'Marketing'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92530411/responsive-images/0-black-friday___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92530439/responsive-images/3-black-friday___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92530448/responsive-images/4-black-friday___media_library_original_1600_900.jpg'\cf0 \cb1 \strokec4 \
\cb3     ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#000000'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#fbbf24'\cf0 \strokec4  \},\cb1 \
\cb3     tags: [\cf6 \strokec6 'Marketing'\cf0 \strokec4 , \cf6 \strokec6 'Bold'\cf0 \strokec4 ],\cb1 \
\cb3     goals: [\cf6 \strokec6 'persuade'\cf0 \strokec4 , \cf6 \strokec6 'pitch'\cf0 \strokec4 ],\cb1 \
\cb3     tone: \cf6 \strokec6 'neutral'\cf0 \strokec4 ,\cb1 \
\cb3     style: [\cf6 \strokec6 'dark'\cf0 \strokec4 , \cf6 \strokec6 'modern'\cf0 \strokec4 ],\cb1 \
\cb3     aspect_ratio: \cf6 \strokec6 '16:9'\cf0 \strokec4 ,\cb1 \
\cb3     industry: [\cf6 \strokec6 'marketing'\cf0 \strokec4 ],\cb1 \
\cb3     accessibility: \{ aa_ready: \cf2 \strokec2 true\cf0 \strokec4  \},\cb1 \
\cb3     data_capacity: \{ score: \cf8 \strokec8 70\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'ai-automation'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'AI Automation'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf6 \strokec6 'Technology'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92133854/responsive-images/0-ai-automation___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92133868/responsive-images/2-ai-automation___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92133872/responsive-images/3-ai-automation___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/92133877/responsive-images/4-ai-automation___media_library_original_1600_900.jpg'\cf0 \cb1 \strokec4 \
\cb3     ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#6d28d9'\cf0 \strokec4  \},\cb1 \
\cb3     tags: [\cf6 \strokec6 'Technology'\cf0 \strokec4 , \cf6 \strokec6 'Modern'\cf0 \strokec4 ],\cb1 \
\cb3     goals: [\cf6 \strokec6 'pitch'\cf0 \strokec4 , \cf6 \strokec6 'inform'\cf0 \strokec4 ],\cb1 \
\cb3     tone: \cf6 \strokec6 'formal'\cf0 \strokec4 ,\cb1 \
\cb3     style: [\cf6 \strokec6 'modern'\cf0 \strokec4 , \cf6 \strokec6 'dark'\cf0 \strokec4 ],\cb1 \
\cb3     aspect_ratio: \cf6 \strokec6 '16:9'\cf0 \strokec4 ,\cb1 \
\cb3     industry: [\cf6 \strokec6 'technology'\cf0 \strokec4 ],\cb1 \
\cb3     accessibility: \{ aa_ready: \cf2 \strokec2 true\cf0 \strokec4  \},\cb1 \
\cb3     data_capacity: \{ score: \cf8 \strokec8 90\cf0 \strokec4  \},\cb1 \
\cb3     brand_fit: \{ palette_overridable: \cf2 \strokec2 true\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'startup-pitch'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Startup Pitch Deck'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf6 \strokec6 'Business'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/91064154/responsive-images/0-startup-pitch-deck___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/91064158/responsive-images/2-startup-pitch-deck___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       \cf6 \strokec6 'https://media.slidesgo.com/storage/91064163/responsive-images/3-startup-pitch-deck___media_library_original_1600_900.jpg'\cf0 \cb1 \strokec4 \
\cb3     ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#0ea5e9'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#0284c7'\cf0 \strokec4  \},\cb1 \
\cb3     tags: [\cf6 \strokec6 'Business'\cf0 \strokec4 , \cf6 \strokec6 'Professional'\cf0 \strokec4 ],\cb1 \
\cb3     goals: [\cf6 \strokec6 'pitch'\cf0 \strokec4 , \cf6 \strokec6 'persuade'\cf0 \strokec4 ],\cb1 \
\cb3     tone: \cf6 \strokec6 'formal'\cf0 \strokec4 ,\cb1 \
\cb3     style: [\cf6 \strokec6 'corporate'\cf0 \strokec4 , \cf6 \strokec6 'minimalist'\cf0 \strokec4 ],\cb1 \
\cb3     aspect_ratio: \cf6 \strokec6 '16:9'\cf0 \strokec4 ,\cb1 \
\cb3     industry: [\cf6 \strokec6 'technology'\cf0 \strokec4 , \cf6 \strokec6 'finance'\cf0 \strokec4 ],\cb1 \
\cb3     accessibility: \{ aa_ready: \cf2 \strokec2 true\cf0 \strokec4  \},\cb1 \
\cb3     data_capacity: \{ score: \cf8 \strokec8 95\cf0 \strokec4  \},\cb1 \
\cb3     brand_fit: \{ palette_overridable: \cf2 \strokec2 true\cf0 \strokec4  \}\cb1 \
\cb3   \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Filter options\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  goalOptions = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ value: \cf6 \strokec6 'inform'\cf0 \strokec4 , label: \cf6 \strokec6 'Inform'\cf0 \strokec4  \},\cb1 \
\cb3   \{ value: \cf6 \strokec6 'persuade'\cf0 \strokec4 , label: \cf6 \strokec6 'Persuade'\cf0 \strokec4  \},\cb1 \
\cb3   \{ value: \cf6 \strokec6 'pitch'\cf0 \strokec4 , label: \cf6 \strokec6 'Pitch'\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  styleOptions = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ value: \cf6 \strokec6 'minimalist'\cf0 \strokec4 , label: \cf6 \strokec6 'Minimal'\cf0 \strokec4  \},\cb1 \
\cb3   \{ value: \cf6 \strokec6 'dark'\cf0 \strokec4 , label: \cf6 \strokec6 'Dark'\cf0 \strokec4  \},\cb1 \
\cb3   \{ value: \cf6 \strokec6 'corporate'\cf0 \strokec4 , label: \cf6 \strokec6 'Corporate'\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Dropdown Pill Component\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 FilterPill\cf0 \strokec4 (\{ icon: \cf5 \strokec5 Icon\cf0 \strokec4 , label, value, options, onChange \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [isOpen, setIsOpen] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  selectedOption = options.find(o => o.value === value);\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "relative"\cf0 \strokec4 >\cb1 \
\cb3       <button\cb1 \
\cb3         onClick=\{() => setIsOpen(!isOpen)\}\cb1 \
\cb3         className=\{cn(\cb1 \
\cb3           \cf6 \strokec6 "h-8 px-3 flex items-center gap-2 rounded-md text-xs font-medium transition-all border"\cf0 \strokec4 ,\cb1 \
\cb3           value \cb1 \
\cb3             ? \cf6 \strokec6 "bg-purple-500/15 border-purple-500/30 text-purple-300"\cf0 \strokec4  \cb1 \
\cb3             : \cf6 \strokec6 "bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/20"\cf0 \cb1 \strokec4 \
\cb3         )\}\cb1 \
\cb3       >\cb1 \
\cb3         <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-3.5 h-3.5"\cf0 \strokec4  />\cb1 \
\cb3         <span>\{selectedOption?.label || label\}</span>\cb1 \
\cb3         <\cf5 \strokec5 ChevronDown\cf0 \strokec4  className=\{cn(\cf6 \strokec6 "w-3 h-3 opacity-50 transition-transform"\cf0 \strokec4 , isOpen && \cf6 \strokec6 "rotate-180"\cf0 \strokec4 )\} />\cb1 \
\cb3       </button>\cb1 \
\
\cb3       <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         \{isOpen && (\cb1 \
\cb3           <>\cb1 \
\cb3             <div className=\cf6 \strokec6 "fixed inset-0 z-40"\cf0 \strokec4  onClick=\{() => setIsOpen(\cf2 \strokec2 false\cf0 \strokec4 )\} />\cb1 \
\cb3             <motion.div\cb1 \
\cb3               initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 4\cf0 \strokec4 , scale: \cf8 \strokec8 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , y: \cf8 \strokec8 0\cf0 \strokec4 , scale: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3               exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 4\cf0 \strokec4 , scale: \cf8 \strokec8 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3               transition=\{\{ duration: \cf8 \strokec8 0.15\cf0 \strokec4  \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "absolute top-full left-0 mt-1.5 min-w-[120px] bg-slate-900 border border-white/10 rounded-lg shadow-2xl z-[100] py-1"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               \{value && (\cb1 \
\cb3                 <button\cb1 \
\cb3                   onClick=\{() => \{ onChange(\cf2 \strokec2 null\cf0 \strokec4 ); setIsOpen(\cf2 \strokec2 false\cf0 \strokec4 ); \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "w-full px-3 py-1.5 text-left text-xs text-slate-500 hover:text-slate-300 hover:bg-white/5"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   \cf5 \strokec5 Clear\cf0 \cb1 \strokec4 \
\cb3                 </button>\cb1 \
\cb3               )\}\cb1 \
\cb3               \{options.map(opt => (\cb1 \
\cb3                 <button\cb1 \
\cb3                   key=\{opt.value\}\cb1 \
\cb3                   onClick=\{() => \{ onChange(opt.value); setIsOpen(\cf2 \strokec2 false\cf0 \strokec4 ); \}\}\cb1 \
\cb3                   className=\{cn(\cb1 \
\cb3                     \cf6 \strokec6 "w-full px-3 py-1.5 text-left text-xs flex items-center justify-between transition-colors"\cf0 \strokec4 ,\cb1 \
\cb3                     value === opt.value \cb1 \
\cb3                       ? \cf6 \strokec6 "text-purple-300 bg-purple-500/10"\cf0 \strokec4  \cb1 \
\cb3                       : \cf6 \strokec6 "text-slate-300 hover:bg-white/5"\cf0 \cb1 \strokec4 \
\cb3                   )\}\cb1 \
\cb3                 >\cb1 \
\cb3                   \{opt.label\}\cb1 \
\cb3                   \{value === opt.value && <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 text-purple-400"\cf0 \strokec4  />\}\cb1 \
\cb3                 </button>\cb1 \
\cb3               ))\}\cb1 \
\cb3             </motion.div>\cb1 \
\cb3           </>\cb1 \
\cb3         )\}\cb1 \
\cb3       </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Toggle Chip Component\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ToggleChip\cf0 \strokec4 (\{ icon: \cf5 \strokec5 Icon\cf0 \strokec4 , label, active, onChange \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <button\cb1 \
\cb3       onClick=\{() => onChange(!active)\}\cb1 \
\cb3       className=\{cn(\cb1 \
\cb3         \cf6 \strokec6 "h-8 px-3 flex items-center gap-2 rounded-md text-xs font-medium transition-all border"\cf0 \strokec4 ,\cb1 \
\cb3         active \cb1 \
\cb3           ? \cf6 \strokec6 "bg-purple-500/20 border-purple-500/40 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]"\cf0 \strokec4  \cb1 \
\cb3           : \cf6 \strokec6 "bg-transparent border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20"\cf0 \cb1 \strokec4 \
\cb3       )\}\cb1 \
\cb3     >\cb1 \
\cb3       <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-3.5 h-3.5"\cf0 \strokec4  />\cb1 \
\cb3       <span>\{label\}</span>\cb1 \
\cb3     </button>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Template badges - minimal style\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 TemplateBadges\cf0 \strokec4 (\{ template \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  badges = [];\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (template.accessibility?.aa_ready !== \cf2 \strokec2 false\cf0 \strokec4 ) \{\cb1 \
\cb3     badges.push(\{ label: \cf6 \strokec6 'AA'\cf0 \strokec4 , color: \cf6 \strokec6 'text-emerald-400'\cf0 \strokec4  \});\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (template.data_capacity?.score >= \cf8 \strokec8 70\cf0 \strokec4 ) \{\cb1 \
\cb3     badges.push(\{ icon: \cf5 \strokec5 BarChart3\cf0 \strokec4 , color: \cf6 \strokec6 'text-blue-400'\cf0 \strokec4  \});\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (badges.length === \cf8 \strokec8 0\cf0 \strokec4 ) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "flex gap-1.5"\cf0 \strokec4 >\cb1 \
\cb3       \{badges.map((badge, idx) => (\cb1 \
\cb3         <div\cb1 \
\cb3           key=\{idx\}\cb1 \
\cb3           className=\{cn(\cf6 \strokec6 "text-[10px] font-semibold flex items-center gap-0.5"\cf0 \strokec4 , badge.color)\}\cb1 \
\cb3         >\cb1 \
\cb3           \{badge.icon && <badge.icon className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  />\}\cb1 \
\cb3           \{badge.label\}\cb1 \
\cb3         </div>\cb1 \
\cb3       ))\}\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Template Card with 16:9 aspect ratio\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 TemplateCard\cf0 \strokec4 (\{ template, isSelected, onSelect \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [isHovering, setIsHovering] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [currentSlide, setCurrentSlide] = useState(\cf8 \strokec8 0\cf0 \strokec4 );\cb1 \
\
\cb3   \cf5 \strokec5 React\cf0 \strokec4 .useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!isHovering) \{\cb1 \
\cb3       setCurrentSlide(\cf8 \strokec8 0\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  interval = setInterval(() => \{\cb1 \
\cb3       setCurrentSlide(prev => (prev + \cf8 \strokec8 1\cf0 \strokec4 ) % (template.slides.length + \cf8 \strokec8 1\cf0 \strokec4 ));\cb1 \
\cb3     \}, \cf8 \strokec8 1000\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => clearInterval(interval);\cb1 \
\cb3   \}, [isHovering, template.slides.length]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  displayImage = currentSlide === \cf8 \strokec8 0\cf0 \strokec4  ? template.cover : template.slides[currentSlide - \cf8 \strokec8 1\cf0 \strokec4 ];\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.button\cb1 \
\cb3       layout\cb1 \
\cb3       whileHover=\{\{ y: -\cf8 \strokec8 6\cf0 \strokec4  \}\}\cb1 \
\cb3       onHoverStart=\{() => setIsHovering(\cf2 \strokec2 true\cf0 \strokec4 )\}\cb1 \
\cb3       onHoverEnd=\{() => setIsHovering(\cf2 \strokec2 false\cf0 \strokec4 )\}\cb1 \
\cb3       onClick=\{() => onSelect(template)\}\cb1 \
\cb3       className=\{cn(\cb1 \
\cb3         \cf6 \strokec6 "relative group rounded-xl overflow-hidden transition-all duration-300"\cf0 \strokec4 ,\cb1 \
\cb3         isSelected \cb1 \
\cb3           ? \cf6 \strokec6 "ring-2 ring-purple-500 ring-offset-2 ring-offset-[#0a0a0c] shadow-xl shadow-purple-500/25"\cf0 \strokec4  \cb1 \
\cb3           : \cf6 \strokec6 "hover:shadow-xl hover:shadow-purple-500/10"\cf0 \cb1 \strokec4 \
\cb3       )\}\cb1 \
\cb3     >\cb1 \
\cb3       \{\cf7 \strokec7 /* 16:9 aspect ratio container */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "aspect-video relative overflow-hidden bg-slate-900"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3           <motion.img\cb1 \
\cb3             key=\{displayImage\}\cb1 \
\cb3             src=\{displayImage\}\cb1 \
\cb3             alt=\{template.name\}\cb1 \
\cb3             initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3             exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ duration: \cf8 \strokec8 0.2\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \cb1 \strokec4 \
\cb3           />\cb1 \
\cb3         </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         \cb1 \
\cb3         \{\cf7 \strokec7 /* Gradient overlay */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"\cf0 \strokec4  />\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Slide indicators on hover */\cf0 \strokec4 \}\cb1 \
\cb3         \{isHovering && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1"\cf0 \strokec4 >\cb1 \
\cb3             \{[template.cover, ...template.slides].slice(\cf8 \strokec8 0\cf0 \strokec4 , \cf8 \strokec8 4\cf0 \strokec4 ).map((_, idx) => (\cb1 \
\cb3               <div \cb1 \
\cb3                 key=\{idx\}\cb1 \
\cb3                 className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "h-1 rounded-full transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                   currentSlide === idx ? \cf6 \strokec6 "w-4 bg-white"\cf0 \strokec4  : \cf6 \strokec6 "w-1 bg-white/50"\cf0 \cb1 \strokec4 \
\cb3                 )\}\cb1 \
\cb3               />\cb1 \
\cb3             ))\}\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Selected check */\cf0 \strokec4 \}\cb1 \
\cb3         \{isSelected && (\cb1 \
\cb3           <motion.div\cb1 \
\cb3             initial=\{\{ scale: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ scale: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "absolute top-2 right-2 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shadow-lg"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-white"\cf0 \strokec4  />\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Info */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "p-3 bg-slate-900/80 backdrop-blur-sm"\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex items-center justify-between gap-2"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "min-w-0 flex-1"\cf0 \strokec4 >\cb1 \
\cb3           <h3 className=\cf6 \strokec6 "font-medium text-white text-sm truncate"\cf0 \strokec4 >\{template.name\}</h3>\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2 mt-0.5"\cf0 \strokec4 >\cb1 \
\cb3             <p className=\cf6 \strokec6 "text-xs text-slate-400"\cf0 \strokec4 >\{template.category\}</p>\cb1 \
\cb3             <\cf5 \strokec5 TemplateBadges\cf0 \strokec4  template=\{template\} />\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex gap-1 flex-shrink-0"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf5 \strokec5 Object\cf0 \strokec4 .values(template.colors).map((color, idx) => (\cb1 \
\cb3             <div key=\{idx\} className=\cf6 \strokec6 "w-3 h-3 rounded-full ring-1 ring-white/20"\cf0 \strokec4  style=\{\{ backgroundColor: color \}\} />\cb1 \
\cb3           ))\}\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3       </div>\cb1 \
\cb3       </motion.button>\cb1 \
\cb3       );\cb1 \
\cb3       \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 TemplateGallery\cf0 \strokec4 (\{ onSelect, selectedTemplate \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [search, setSearch] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [goal, setGoal] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [style, setStyle] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [aaReadable, setAaReadable] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [dataHeavy, setDataHeavy] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [sortOpen, setSortOpen] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  hasFilters = goal || style || aaReadable || dataHeavy;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  filteredTemplates = useMemo(() => \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  templates.filter(t => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (search && !t.name.toLowerCase().includes(search.toLowerCase())) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (goal && !t.goals?.includes(goal)) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (style && !t.style?.includes(style)) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (aaReadable && !t.accessibility?.aa_ready) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (dataHeavy && (!t.data_capacity?.score || t.data_capacity.score < \cf8 \strokec8 70\cf0 \strokec4 )) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 true\cf0 \strokec4 ;\cb1 \
\cb3     \});\cb1 \
\cb3   \}, [search, goal, style, aaReadable, dataHeavy]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  clearFilters = () => \{ \cb1 \
\cb3     setGoal(\cf2 \strokec2 null\cf0 \strokec4 ); \cb1 \
\cb3     setStyle(\cf2 \strokec2 null\cf0 \strokec4 ); \cb1 \
\cb3     setAaReadable(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     setDataHeavy(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3       exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "min-h-screen relative z-10"\cf0 \cb1 \strokec4 \
\cb3     >\cb1 \
\cb3       \{\cf7 \strokec7 /* Animated background like Entry */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "fixed inset-0 overflow-hidden pointer-events-none"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  style=\{\{ animationDelay: \cf6 \strokec6 '1s'\cf0 \strokec4  \}\} />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px]"\cf0 \strokec4  />\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Header with step indicator */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "sticky top-0 z-30 bg-[#030305]/80 backdrop-blur-xl border-b border-white/5"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-6xl mx-auto px-6 py-4"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 StepIndicator\cf0 \strokec4  currentStep=\{\cf8 \strokec8 1\cf0 \strokec4 \} />\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Content */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "max-w-6xl mx-auto px-6 py-8"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf7 \strokec7 /* Title */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "mb-6"\cf0 \strokec4 >\cb1 \
\cb3           <h1 className=\cf6 \strokec6 "text-2xl font-bold text-white"\cf0 \strokec4 >\cf5 \strokec5 Pick\cf0 \strokec4  your template</h1>\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-slate-400 text-sm mt-1"\cf0 \strokec4 >\cf5 \strokec5 Choose\cf0 \strokec4  a design that fits your story</p>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Filter Toolbar - Single line, glassmorphism */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center gap-3 mb-6 p-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl relative z-50"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf7 \strokec7 /* Search */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "relative flex-shrink-0"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Search\cf0 \strokec4  className=\cf6 \strokec6 "absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500"\cf0 \strokec4  />\cb1 \
\cb3             <input\cb1 \
\cb3               type=\cf6 \strokec6 "text"\cf0 \cb1 \strokec4 \
\cb3               placeholder=\cf6 \strokec6 "Search templates..."\cf0 \cb1 \strokec4 \
\cb3               value=\{search\}\cb1 \
\cb3               onChange=\{(e) => setSearch(e.target.value)\}\cb1 \
\cb3               className=\cf6 \strokec6 "w-44 h-8 pl-8 pr-3 bg-white/5 border border-white/10 rounded-md text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/40"\cf0 \cb1 \strokec4 \
\cb3             />\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf7 \strokec7 /* Divider */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-px h-5 bg-white/10"\cf0 \strokec4  />\cb1 \
\
\cb3           \{\cf7 \strokec7 /* Dropdown Pills */\cf0 \strokec4 \}\cb1 \
\cb3           <\cf5 \strokec5 FilterPill\cf0 \strokec4  \cb1 \
\cb3             icon=\{\cf5 \strokec5 Target\cf0 \strokec4 \} \cb1 \
\cb3             label=\cf6 \strokec6 "Goal"\cf0 \strokec4  \cb1 \
\cb3             value=\{goal\} \cb1 \
\cb3             options=\{goalOptions\} \cb1 \
\cb3             onChange=\{setGoal\} \cb1 \
\cb3           />\cb1 \
\cb3           <\cf5 \strokec5 FilterPill\cf0 \strokec4  \cb1 \
\cb3             icon=\{\cf5 \strokec5 Palette\cf0 \strokec4 \} \cb1 \
\cb3             label=\cf6 \strokec6 "Style"\cf0 \strokec4  \cb1 \
\cb3             value=\{style\} \cb1 \
\cb3             options=\{styleOptions\} \cb1 \
\cb3             onChange=\{setStyle\} \cb1 \
\cb3           />\cb1 \
\
\cb3           \{\cf7 \strokec7 /* Divider */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-px h-5 bg-white/10"\cf0 \strokec4  />\cb1 \
\
\cb3           \{\cf7 \strokec7 /* Toggle Chips */\cf0 \strokec4 \}\cb1 \
\cb3           <\cf5 \strokec5 ToggleChip\cf0 \strokec4  \cb1 \
\cb3             icon=\{\cf5 \strokec5 Eye\cf0 \strokec4 \} \cb1 \
\cb3             label=\cf6 \strokec6 "AA Readable"\cf0 \strokec4  \cb1 \
\cb3             active=\{aaReadable\} \cb1 \
\cb3             onChange=\{setAaReadable\} \cb1 \
\cb3           />\cb1 \
\cb3           <\cf5 \strokec5 ToggleChip\cf0 \strokec4  \cb1 \
\cb3             icon=\{\cf5 \strokec5 BarChart3\cf0 \strokec4 \} \cb1 \
\cb3             label=\cf6 \strokec6 "Data Heavy"\cf0 \strokec4  \cb1 \
\cb3             active=\{dataHeavy\} \cb1 \
\cb3             onChange=\{setDataHeavy\} \cb1 \
\cb3           />\cb1 \
\
\cb3           \{\cf7 \strokec7 /* Spacer */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex-1"\cf0 \strokec4  />\cb1 \
\
\cb3           \{\cf7 \strokec7 /* Clear filters */\cf0 \strokec4 \}\cb1 \
\cb3           \{hasFilters && (\cb1 \
\cb3             <button\cb1 \
\cb3               onClick=\{clearFilters\}\cb1 \
\cb3               className=\cf6 \strokec6 "h-8 px-2 flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Clear\cf0 \cb1 \strokec4 \
\cb3             </button>\cb1 \
\cb3           )\}\cb1 \
\
\cb3           \{\cf7 \strokec7 /* Sort */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "relative"\cf0 \strokec4 >\cb1 \
\cb3             <button \cb1 \
\cb3               onClick=\{() => setSortOpen(!sortOpen)\}\cb1 \
\cb3               className=\cf6 \strokec6 "h-8 px-3 flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 ArrowUpDown\cf0 \strokec4  className=\cf6 \strokec6 "w-3.5 h-3.5"\cf0 \strokec4  />\cb1 \
\cb3               <span>\cf5 \strokec5 Recommended\cf0 \strokec4 </span>\cb1 \
\cb3             </button>\cb1 \
\cb3             <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3               \{sortOpen && (\cb1 \
\cb3                 <>\cb1 \
\cb3                   <div className=\cf6 \strokec6 "fixed inset-0 z-40"\cf0 \strokec4  onClick=\{() => setSortOpen(\cf2 \strokec2 false\cf0 \strokec4 )\} />\cb1 \
\cb3                   <motion.div\cb1 \
\cb3                     initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 4\cf0 \strokec4  \}\}\cb1 \
\cb3                     animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , y: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3                     exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 4\cf0 \strokec4  \}\}\cb1 \
\cb3                     className=\cf6 \strokec6 "absolute top-full right-0 mt-1.5 min-w-[130px] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl z-50 py-1"\cf0 \cb1 \strokec4 \
\cb3                   >\cb1 \
\cb3                     \{[\cf6 \strokec6 'Recommended'\cf0 \strokec4 , \cf6 \strokec6 'Popular'\cf0 \strokec4 , \cf6 \strokec6 'Recent'\cf0 \strokec4 ].map(opt => (\cb1 \
\cb3                       <button\cb1 \
\cb3                         key=\{opt\}\cb1 \
\cb3                         onClick=\{() => setSortOpen(\cf2 \strokec2 false\cf0 \strokec4 )\}\cb1 \
\cb3                         className=\cf6 \strokec6 "w-full px-3 py-1.5 text-left text-xs text-slate-300 hover:bg-white/5"\cf0 \cb1 \strokec4 \
\cb3                       >\cb1 \
\cb3                         \{opt\}\cb1 \
\cb3                       </button>\cb1 \
\cb3                     ))\}\cb1 \
\cb3                   </motion.div>\cb1 \
\cb3                 </>\cb1 \
\cb3               )\}\cb1 \
\cb3             </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Results count */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center justify-between mb-4"\cf0 \strokec4 >\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-xs text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3             \{filteredTemplates.length\} template\{filteredTemplates.length !== \cf8 \strokec8 1\cf0 \strokec4  ? \cf6 \strokec6 's'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \strokec4 \}\cb1 \
\cb3           </p>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Template Grid - 16:9 cards */\cf0 \strokec4 \}\cb1 \
\cb3         <motion.div layout className=\cf6 \strokec6 "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "popLayout"\cf0 \strokec4 >\cb1 \
\cb3             \{filteredTemplates.map(template => (\cb1 \
\cb3               <\cf5 \strokec5 TemplateCard\cf0 \cb1 \strokec4 \
\cb3                 key=\{template.id\}\cb1 \
\cb3                 template=\{template\}\cb1 \
\cb3                 isSelected=\{selectedTemplate?.id === template.id\}\cb1 \
\cb3                 onSelect=\{onSelect\}\cb1 \
\cb3               />\cb1 \
\cb3             ))\}\cb1 \
\cb3           </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         </motion.div>\cb1 \
\
\cb3         \{filteredTemplates.length === \cf8 \strokec8 0\cf0 \strokec4  && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "text-center py-16"\cf0 \strokec4 >\cb1 \
\cb3             <p className=\cf6 \strokec6 "text-slate-400"\cf0 \strokec4 >\cf5 \strokec5 No\cf0 \strokec4  templates found</p>\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Bottom CTA */\cf0 \strokec4 \}\cb1 \
\cb3       <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         \{selectedTemplate && (\cb1 \
\cb3           <motion.div\cb1 \
\cb3             initial=\{\{ y: \cf8 \strokec8 100\cf0 \strokec4 , opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ y: \cf8 \strokec8 0\cf0 \strokec4 , opacity: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3             exit=\{\{ y: \cf8 \strokec8 100\cf0 \strokec4 , opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "fixed bottom-0 left-0 right-0 bg-[#0a0a0c]/95 backdrop-blur-xl border-t border-white/10 py-4 px-6 z-40"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "max-w-6xl mx-auto flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-center gap-4"\cf0 \strokec4 >\cb1 \
\cb3                 <img\cb1 \
\cb3                   src=\{selectedTemplate.cover\}\cb1 \
\cb3                   alt=\cf6 \strokec6 ""\cf0 \cb1 \strokec4 \
\cb3                   className=\cf6 \strokec6 "w-16 h-9 object-cover rounded-lg ring-2 ring-purple-500"\cf0 \cb1 \strokec4 \
\cb3                 />\cb1 \
\cb3                 <div>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-medium text-white text-sm"\cf0 \strokec4 >\{selectedTemplate.name\}</p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-xs text-slate-400"\cf0 \strokec4 >\cf5 \strokec5 Selected\cf0 \strokec4 </p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3               \cb1 \
\cb3               <motion.button\cb1 \
\cb3                 whileHover=\{\{ scale: \cf8 \strokec8 1.02\cf0 \strokec4  \}\}\cb1 \
\cb3                 whileTap=\{\{ scale: \cf8 \strokec8 0.98\cf0 \strokec4  \}\}\cb1 \
\cb3                 onClick=\{() => onSelect(selectedTemplate)\}\cb1 \
\cb3                 className=\cf6 \strokec6 "px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/25 flex items-center gap-2"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 \cf5 \strokec5 Continue\cf0 \cb1 \strokec4 \
\cb3                 <\cf5 \strokec5 ChevronRight\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3               </motion.button>\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         )\}\cb1 \
\cb3       </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}