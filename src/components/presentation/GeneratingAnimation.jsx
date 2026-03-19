{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 FileText\cf0 \strokec4 , \cf5 \strokec5 Layout\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 GeneratingAnimation\cf0 \strokec4 (\{ slideCount = \cf7 \strokec7 10\cf0 \strokec4  \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [currentStep, setCurrentStep] = useState(\cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [generatedSlides, setGeneratedSlides] = useState([]);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [currentSlideContent, setCurrentSlideContent] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  steps = [\cb1 \
\cb3     \{ icon: \cf5 \strokec5 FileText\cf0 \strokec4 , label: \cf6 \strokec6 'Analyzing content'\cf0 \strokec4 , color: \cf6 \strokec6 'indigo'\cf0 \strokec4  \},\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Layout\cf0 \strokec4 , label: \cf6 \strokec6 'Creating structure'\cf0 \strokec4 , color: \cf6 \strokec6 'purple'\cf0 \strokec4  \},\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Palette\cf0 \strokec4 , label: \cf6 \strokec6 'Applying design'\cf0 \strokec4 , color: \cf6 \strokec6 'pink'\cf0 \strokec4  \},\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , label: \cf6 \strokec6 'Generating slides'\cf0 \strokec4 , color: \cf6 \strokec6 'emerald'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  durations = [\cf7 \strokec7 1500\cf0 \strokec4 , \cf7 \strokec7 1500\cf0 \strokec4 , \cf7 \strokec7 1500\cf0 \strokec4 , \cf7 \strokec7 4000\cf0 \strokec4 ];\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  timer = setTimeout(() => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (currentStep < steps.length - \cf7 \strokec7 1\cf0 \strokec4 ) \{\cb1 \
\cb3         setCurrentStep(currentStep + \cf7 \strokec7 1\cf0 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \}, durations[currentStep]);\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => clearTimeout(timer);\cb1 \
\cb3   \}, [currentStep]);\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (currentStep === \cf7 \strokec7 3\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  slideTitles = [\cb1 \
\cb3         \cf6 \strokec6 'Introduction'\cf0 \strokec4 , \cf6 \strokec6 'Overview'\cf0 \strokec4 , \cf6 \strokec6 'Key Points'\cf0 \strokec4 , \cf6 \strokec6 'Analysis'\cf0 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 'Solution'\cf0 \strokec4 , \cf6 \strokec6 'Features'\cf0 \strokec4 , \cf6 \strokec6 'Benefits'\cf0 \strokec4 , \cf6 \strokec6 'Case Study'\cf0 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 'Results'\cf0 \strokec4 , \cf6 \strokec6 'Next Steps'\cf0 \strokec4 , \cf6 \strokec6 'Timeline'\cf0 \strokec4 , \cf6 \strokec6 'Team'\cf0 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 'Budget'\cf0 \strokec4 , \cf6 \strokec6 'Q&A'\cf0 \strokec4 , \cf6 \strokec6 'Thank You'\cf0 \cb1 \strokec4 \
\cb3       ];\cb1 \
\
\cb3       \cf2 \strokec2 const\cf0 \strokec4  interval = setInterval(() => \{\cb1 \
\cb3         setGeneratedSlides(prev => \{\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (prev.length < slideCount) \{\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  newSlideNum = prev.length + \cf7 \strokec7 1\cf0 \strokec4 ;\cb1 \
\cb3             setCurrentSlideContent(slideTitles[newSlideNum - \cf7 \strokec7 1\cf0 \strokec4 ] || \cf6 \strokec6 `Slide \cf0 \strokec4 $\{newSlideNum\}\cf6 \strokec6 `\cf0 \strokec4 );\cb1 \
\cb3             \cf2 \strokec2 return\cf0 \strokec4  [...prev, \{ num: newSlideNum, title: slideTitles[newSlideNum - \cf7 \strokec7 1\cf0 \strokec4 ] || \cf6 \strokec6 `Slide \cf0 \strokec4 $\{newSlideNum\}\cf6 \strokec6 `\cf0 \strokec4  \}];\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 return\cf0 \strokec4  prev;\cb1 \
\cb3         \});\cb1 \
\cb3       \}, \cf7 \strokec7 350\cf0 \strokec4 );\cb1 \
\
\cb3       \cf2 \strokec2 return\cf0 \strokec4  () => clearInterval(interval);\cb1 \
\cb3     \}\cb1 \
\cb3   \}, [currentStep, slideCount]);\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 flex items-center justify-center p-6"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf8 \strokec8 /* Animated background */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "absolute inset-0 overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  style=\{\{ animationDelay: \cf6 \strokec6 '1s'\cf0 \strokec4  \}\} />\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "relative z-10 w-full max-w-4xl"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf8 \strokec8 /* Logo */\cf0 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: -\cf7 \strokec7 20\cf0 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "flex items-center justify-center gap-3 mb-16"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Wand2\cf0 \strokec4  className=\cf6 \strokec6 "w-6 h-6 text-white"\cf0 \strokec4  />\cb1 \
\cb3           </div>\cb1 \
\cb3           <span className=\cf6 \strokec6 "text-2xl font-bold text-white"\cf0 \strokec4 >\cf5 \strokec5 Creating\cf0 \strokec4  your presentation</span>\cb1 \
\cb3         </motion.div>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Progress Steps */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center justify-center gap-4 mb-16"\cf0 \strokec4 >\cb1 \
\cb3           \{steps.map((step, idx) => \{\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = step.icon;\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  isCompleted = idx < currentStep;\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  isCurrent = idx === currentStep;\cb1 \
\
\cb3             \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3               <\cf5 \strokec5 React\cf0 \strokec4 .\cf5 \strokec5 Fragment\cf0 \strokec4  key=\{idx\}>\cb1 \
\cb3                 <motion.div\cb1 \
\cb3                   initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 0.8\cf0 \strokec4  \}\}\cb1 \
\cb3                   animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3                   transition=\{\{ delay: idx * \cf7 \strokec7 0.1\cf0 \strokec4  \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "flex flex-col items-center"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   <div className=\{\cf6 \strokec6 `\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6                     w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500\cf0 \cb1 \strokec4 \
\cf6 \cb3 \strokec6                     \cf0 \strokec4 $\{isCompleted ? \cf6 \strokec6 'bg-emerald-500 shadow-lg shadow-emerald-500/30'\cf0 \strokec4  : \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3                       isCurrent ? \cf6 \strokec6 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30 scale-110'\cf0 \strokec4  : \cb1 \
\cb3                       \cf6 \strokec6 'bg-white/10'\cf0 \strokec4 \}\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6                   `\cf0 \strokec4 \}>\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3                     \{isCompleted ? (\cb1 \
\cb3                       <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-6 h-6 text-white"\cf0 \strokec4  />\cb1 \
\cb3                     ) : (\cb1 \
\cb3                       <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{\cf6 \strokec6 `w-6 h-6 \cf0 \strokec4 $\{isCurrent ? \cf6 \strokec6 'text-white animate-pulse'\cf0 \strokec4  : \cf6 \strokec6 'text-white/40'\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \} />\cb1 \
\cb3                     )\}\cb1 \
\cb3                   </div>\cb1 \
\cb3                   <span className=\{\cf6 \strokec6 `text-sm mt-3 font-medium \cf0 \strokec4 $\{\cb1 \
\cb3                     isCurrent ? \cf6 \strokec6 'text-white'\cf0 \strokec4  : isCompleted ? \cf6 \strokec6 'text-emerald-400'\cf0 \strokec4  : \cf6 \strokec6 'text-white/40'\cf0 \cb1 \strokec4 \
\cb3                   \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3                     \{step.label\}\cb1 \
\cb3                   </span>\cb1 \
\cb3                 </motion.div>\cb1 \
\cb3                 \cb1 \
\cb3                 \{idx < steps.length - \cf7 \strokec7 1\cf0 \strokec4  && (\cb1 \
\cb3                   <div className=\cf6 \strokec6 "w-16 h-1 rounded-full bg-white/10 relative overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3                     <motion.div\cb1 \
\cb3                       initial=\{\{ width: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                       animate=\{\{ width: isCompleted ? \cf6 \strokec6 '100%'\cf0 \strokec4  : \cf6 \strokec6 '0%'\cf0 \strokec4  \}\}\cb1 \
\cb3                       transition=\{\{ duration: \cf7 \strokec7 0.5\cf0 \strokec4  \}\}\cb1 \
\cb3                       className=\cf6 \strokec6 "absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-emerald-400"\cf0 \cb1 \strokec4 \
\cb3                     />\cb1 \
\cb3                   </div>\cb1 \
\cb3                 )\}\cb1 \
\cb3               </\cf5 \strokec5 React\cf0 \strokec4 .\cf5 \strokec5 Fragment\cf0 \strokec4 >\cb1 \
\cb3             );\cb1 \
\cb3           \})\}\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Main Content Area */\cf0 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 20\cf0 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           \{currentStep < \cf7 \strokec7 3\cf0 \strokec4  ? (\cb1 \
\cb3             \cf8 \strokec8 /* Pre-generation animation */\cf0 \cb1 \strokec4 \
\cb3             <div className=\cf6 \strokec6 "aspect-[16/9] flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3               <motion.div\cb1 \
\cb3                 animate=\{\{ \cb1 \
\cb3                   scale: [\cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.1\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 ],\cb1 \
\cb3                   rotate: [\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 5\cf0 \strokec4 , -\cf7 \strokec7 5\cf0 \strokec4 , \cf7 \strokec7 0\cf0 \strokec4 ]\cb1 \
\cb3                 \}\}\cb1 \
\cb3                 transition=\{\{ duration: \cf7 \strokec7 2\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4  \}\}\cb1 \
\cb3                 className=\cf6 \strokec6 "text-center"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30"\cf0 \strokec4 >\cb1 \
\cb3                   \{\cf5 \strokec5 React\cf0 \strokec4 .createElement(steps[currentStep].icon, \{ className: \cf6 \strokec6 "w-12 h-12 text-white"\cf0 \strokec4  \})\}\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <h3 className=\cf6 \strokec6 "text-2xl font-bold text-white mb-2"\cf0 \strokec4 >\{steps[currentStep].label\}</h3>\cb1 \
\cb3                 <p className=\cf6 \strokec6 "text-white/60"\cf0 \strokec4 >\cf5 \strokec5 This\cf0 \strokec4  will only take a moment...</p>\cb1 \
\cb3               </motion.div>\cb1 \
\cb3             </div>\cb1 \
\cb3           ) : (\cb1 \
\cb3             \cf8 \strokec8 /* Slide generation view */\cf0 \cb1 \strokec4 \
\cb3             <div>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-center justify-between mb-6"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex items-center gap-3"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-6 h-6 text-purple-400"\cf0 \strokec4  />\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-xl font-bold text-white"\cf0 \strokec4 >\cf5 \strokec5 Generating\cf0 \strokec4  slides</span>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "text-right"\cf0 \strokec4 >\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-3xl font-bold text-white"\cf0 \strokec4 >\{generatedSlides.length\}</span>\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-white/40 text-lg"\cf0 \strokec4 > / \{slideCount\}</span>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\
\cb3               \{\cf8 \strokec8 /* Current slide preview */\cf0 \strokec4 \}\cb1 \
\cb3               \{generatedSlides.length > \cf7 \strokec7 0\cf0 \strokec4  && (\cb1 \
\cb3                 <motion.div\cb1 \
\cb3                   key=\{generatedSlides[generatedSlides.length - \cf7 \strokec7 1\cf0 \strokec4 ]?.num\}\cb1 \
\cb3                   initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3                   animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "aspect-[16/9] bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 mb-6 relative overflow-hidden"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   \{\cf8 \strokec8 /* Slide header bar */\cf0 \strokec4 \}\cb1 \
\cb3                   <div className=\cf6 \strokec6 "h-2 w-32 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mb-6"\cf0 \strokec4  />\cb1 \
\cb3                   \cb1 \
\cb3                   <motion.h2\cb1 \
\cb3                     initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 10\cf0 \strokec4  \}\}\cb1 \
\cb3                     animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                     className=\cf6 \strokec6 "text-3xl font-bold text-slate-900 mb-6"\cf0 \cb1 \strokec4 \
\cb3                   >\cb1 \
\cb3                     \{currentSlideContent\}\cb1 \
\cb3                   </motion.h2>\cb1 \
\cb3                   \cb1 \
\cb3                   \{\cf8 \strokec8 /* Placeholder content */\cf0 \strokec4 \}\cb1 \
\cb3                   <div className=\cf6 \strokec6 "space-y-3"\cf0 \strokec4 >\cb1 \
\cb3                     \{[\cf7 \strokec7 0.8\cf0 \strokec4 , \cf7 \strokec7 0.6\cf0 \strokec4 , \cf7 \strokec7 0.7\cf0 \strokec4 ].map((width, i) => (\cb1 \
\cb3                       <motion.div\cb1 \
\cb3                         key=\{i\}\cb1 \
\cb3                         initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , x: -\cf7 \strokec7 10\cf0 \strokec4  \}\}\cb1 \
\cb3                         animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , x: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                         transition=\{\{ delay: i * \cf7 \strokec7 0.1\cf0 \strokec4  \}\}\cb1 \
\cb3                         className=\cf6 \strokec6 "flex items-center gap-3"\cf0 \cb1 \strokec4 \
\cb3                       >\cb1 \
\cb3                         <div className=\cf6 \strokec6 "w-2 h-2 rounded-full bg-indigo-600"\cf0 \strokec4  />\cb1 \
\cb3                         <div \cb1 \
\cb3                           className=\cf6 \strokec6 "h-3 bg-slate-200 rounded animate-pulse"\cf0 \cb1 \strokec4 \
\cb3                           style=\{\{ width: \cf6 \strokec6 `\cf0 \strokec4 $\{width * \cf7 \strokec7 100\cf0 \strokec4 \}\cf6 \strokec6 %`\cf0 \strokec4  \}\}\cb1 \
\cb3                         />\cb1 \
\cb3                       </motion.div>\cb1 \
\cb3                     ))\}\cb1 \
\cb3                   </div>\cb1 \
\
\cb3                   \{\cf8 \strokec8 /* Slide number */\cf0 \strokec4 \}\cb1 \
\cb3                   <div className=\cf6 \strokec6 "absolute bottom-4 right-4 text-slate-400 text-sm font-medium"\cf0 \strokec4 >\cb1 \
\cb3                     \{generatedSlides.length\}\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </motion.div>\cb1 \
\cb3               )\}\cb1 \
\
\cb3               \{\cf8 \strokec8 /* Slide thumbnails */\cf0 \strokec4 \}\cb1 \
\cb3               <div className=\cf6 \strokec6 "grid grid-cols-6 gap-3 mb-6"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3                   \{generatedSlides.map((slide) => (\cb1 \
\cb3                     <motion.div\cb1 \
\cb3                       key=\{slide.num\}\cb1 \
\cb3                       initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                       animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3                       className=\cf6 \strokec6 "aspect-[16/9] bg-white/10 rounded-lg flex items-center justify-center border border-white/10"\cf0 \cb1 \strokec4 \
\cb3                     >\cb1 \
\cb3                       <span className=\cf6 \strokec6 "text-xs text-white/60 font-medium"\cf0 \strokec4 >\{slide.num\}</span>\cb1 \
\cb3                     </motion.div>\cb1 \
\cb3                   ))\}\cb1 \
\cb3                 </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3               </div>\cb1 \
\
\cb3               \{\cf8 \strokec8 /* Progress bar */\cf0 \strokec4 \}\cb1 \
\cb3               <div className=\cf6 \strokec6 "h-2 bg-white/10 rounded-full overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3                 <motion.div\cb1 \
\cb3                   initial=\{\{ width: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                   animate=\{\{ width: \cf6 \strokec6 `\cf0 \strokec4 $\{(generatedSlides.length / slideCount) * \cf7 \strokec7 100\cf0 \strokec4 \}\cf6 \strokec6 %`\cf0 \strokec4  \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "h-full bg-gradient-to-r from-indigo-500 to-purple-500"\cf0 \cb1 \strokec4 \
\cb3                 />\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3           )\}\cb1 \
\cb3         </motion.div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}