{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 FileText\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  steps = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ id: \cf7 \strokec7 1\cf0 \strokec4 , name: \cf6 \strokec6 'Template'\cf0 \strokec4 , icon: \cf5 \strokec5 Palette\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf7 \strokec7 2\cf0 \strokec4 , name: \cf6 \strokec6 'Content'\cf0 \strokec4 , icon: \cf5 \strokec5 FileText\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf7 \strokec7 3\cf0 \strokec4 , name: \cf6 \strokec6 'Create'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 StepIndicator\cf0 \strokec4 (\{ currentStep \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "flex items-center justify-center gap-0"\cf0 \strokec4 >\cb1 \
\cb3       \{steps.map((step, idx) => \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = step.icon;\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  isComplete = currentStep > step.id;\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  isCurrent = currentStep === step.id;\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  isUpcoming = currentStep < step.id;\cb1 \
\
\cb3         \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3           <\cf5 \strokec5 React\cf0 \strokec4 .\cf5 \strokec5 Fragment\cf0 \strokec4  key=\{step.id\}>\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex flex-col items-center"\cf0 \strokec4 >\cb1 \
\cb3               <motion.div\cb1 \
\cb3                 initial=\{\{ scale: \cf7 \strokec7 0.8\cf0 \strokec4 , opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                 animate=\{\{ scale: \cf7 \strokec7 1\cf0 \strokec4 , opacity: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3                 transition=\{\{ delay: idx * \cf7 \strokec7 0.1\cf0 \strokec4  \}\}\cb1 \
\cb3                 className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 relative"\cf0 \strokec4 ,\cb1 \
\cb3                   isComplete && \cf6 \strokec6 "bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/20"\cf0 \strokec4 ,\cb1 \
\cb3                   isCurrent && \cf6 \strokec6 "bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 scale-110"\cf0 \strokec4 ,\cb1 \
\cb3                   isUpcoming && \cf6 \strokec6 "bg-white/5 border border-white/10"\cf0 \cb1 \strokec4 \
\cb3                 )\}\cb1 \
\cb3               >\cb1 \
\cb3                 \{isComplete ? (\cb1 \
\cb3                   <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-white"\cf0 \strokec4  />\cb1 \
\cb3                 ) : (\cb1 \
\cb3                   <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{cn(\cb1 \
\cb3                     \cf6 \strokec6 "w-5 h-5"\cf0 \strokec4 ,\cb1 \
\cb3                     isCurrent ? \cf6 \strokec6 "text-white"\cf0 \strokec4  : \cf6 \strokec6 "text-slate-500"\cf0 \cb1 \strokec4 \
\cb3                   )\} />\cb1 \
\cb3                 )\}\cb1 \
\cb3                 \cb1 \
\cb3                 \{isCurrent && (\cb1 \
\cb3                   <motion.div\cb1 \
\cb3                     animate=\{\{ scale: [\cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.2\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 ], opacity: [\cf7 \strokec7 0.5\cf0 \strokec4 , \cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 0.5\cf0 \strokec4 ] \}\}\cb1 \
\cb3                     transition=\{\{ duration: \cf7 \strokec7 2\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4  \}\}\cb1 \
\cb3                     className=\cf6 \strokec6 "absolute inset-0 rounded-2xl bg-purple-500/30"\cf0 \cb1 \strokec4 \
\cb3                   />\cb1 \
\cb3                 )\}\cb1 \
\cb3               </motion.div>\cb1 \
\cb3               \cb1 \
\cb3               <span className=\{cn(\cb1 \
\cb3                 \cf6 \strokec6 "mt-2 text-xs font-medium"\cf0 \strokec4 ,\cb1 \
\cb3                 isComplete && \cf6 \strokec6 "text-green-400"\cf0 \strokec4 ,\cb1 \
\cb3                 isCurrent && \cf6 \strokec6 "text-white"\cf0 \strokec4 ,\cb1 \
\cb3                 isUpcoming && \cf6 \strokec6 "text-slate-500"\cf0 \cb1 \strokec4 \
\cb3               )\}>\cb1 \
\cb3                 \{step.name\}\cb1 \
\cb3               </span>\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{idx < steps.length - \cf7 \strokec7 1\cf0 \strokec4  && (\cb1 \
\cb3               <div className=\cf6 \strokec6 "w-20 h-0.5 mx-2 mb-6 relative"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "absolute inset-0 bg-white/10 rounded-full"\cf0 \strokec4  />\cb1 \
\cb3                 <motion.div\cb1 \
\cb3                   initial=\{\{ width: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                   animate=\{\{ width: isComplete ? \cf6 \strokec6 '100%'\cf0 \strokec4  : \cf6 \strokec6 '0%'\cf0 \strokec4  \}\}\cb1 \
\cb3                   transition=\{\{ duration: \cf7 \strokec7 0.5\cf0 \strokec4 , delay: \cf7 \strokec7 0.2\cf0 \strokec4  \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "absolute inset-y-0 left-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"\cf0 \cb1 \strokec4 \
\cb3                 />\cb1 \
\cb3               </div>\cb1 \
\cb3             )\}\cb1 \
\cb3           </\cf5 \strokec5 React\cf0 \strokec4 .\cf5 \strokec5 Fragment\cf0 \strokec4 >\cb1 \
\cb3         );\cb1 \
\cb3       \})\}\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}