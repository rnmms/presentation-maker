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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 FileText\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ProgressBar\cf0 \strokec4 (\{ currentStep \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  steps = [\cb1 \
\cb3     \{ number: \cf7 \strokec7 1\cf0 \strokec4 , name: \cf6 \strokec6 'Template'\cf0 \strokec4 , icon: \cf5 \strokec5 Palette\cf0 \strokec4  \},\cb1 \
\cb3     \{ number: \cf7 \strokec7 2\cf0 \strokec4 , name: \cf6 \strokec6 'Content'\cf0 \strokec4 , icon: \cf5 \strokec5 FileText\cf0 \strokec4  \},\cb1 \
\cb3     \{ number: \cf7 \strokec7 3\cf0 \strokec4 , name: \cf6 \strokec6 'Create'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4  \}\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "w-full max-w-md mx-auto py-1 sm:py-2"\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex items-center justify-between relative"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf8 \strokec8 /* Progress line background */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 sm:h-1 bg-slate-200 rounded-full mx-8 sm:mx-12"\cf0 \strokec4  />\cb1 \
\cb3         \cb1 \
\cb3         \{\cf8 \strokec8 /* Animated progress line */\cf0 \strokec4 \}\cb1 \
\cb3         <div \cb1 \
\cb3           className=\cf6 \strokec6 "absolute left-0 top-1/2 -translate-y-1/2 h-0.5 sm:h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mx-8 sm:mx-12 transition-all duration-500"\cf0 \cb1 \strokec4 \
\cb3           style=\{\{ width: \cf6 \strokec6 `calc(\cf0 \strokec4 $\{((currentStep - \cf7 \strokec7 1\cf0 \strokec4 ) / (steps.length - \cf7 \strokec7 1\cf0 \strokec4 )) * \cf7 \strokec7 100\cf0 \strokec4 \}\cf6 \strokec6 % - \cf0 \strokec4 $\{currentStep === \cf7 \strokec7 1\cf0 \strokec4  ? \cf6 \strokec6 '4rem'\cf0 \strokec4  : \cf6 \strokec6 '5rem'\cf0 \strokec4 \}\cf6 \strokec6 )`\cf0 \strokec4  \}\}\cb1 \
\cb3         />\cb1 \
\cb3         \cb1 \
\cb3         \{steps.map((step, idx) => \{\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = step.icon;\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  isCompleted = currentStep > step.number;\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  isCurrent = currentStep === step.number;\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  isUpcoming = currentStep < step.number;\cb1 \
\
\cb3           \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3             <div \cb1 \
\cb3               key=\{step.number\}\cb1 \
\cb3               className=\{cn(\cb1 \
\cb3                 \cf6 \strokec6 "flex flex-col items-center relative z-10"\cf0 \strokec4 ,\cb1 \
\cb3                 isUpcoming && \cf6 \strokec6 "opacity-50"\cf0 \cb1 \strokec4 \
\cb3               )\}\cb1 \
\cb3             >\cb1 \
\cb3               <div \cb1 \
\cb3                 className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md sm:shadow-lg"\cf0 \strokec4 ,\cb1 \
\cb3                   isCompleted && \cf6 \strokec6 "bg-gradient-to-br from-green-500 to-emerald-600"\cf0 \strokec4 ,\cb1 \
\cb3                   isCurrent && \cf6 \strokec6 "bg-gradient-to-br from-indigo-600 to-purple-600 scale-105 sm:scale-110 shadow-indigo-500/40"\cf0 \strokec4 ,\cb1 \
\cb3                   isUpcoming && \cf6 \strokec6 "bg-white border-2 border-slate-200 shadow-none"\cf0 \cb1 \strokec4 \
\cb3                 )\}\cb1 \
\cb3               >\cb1 \
\cb3                 \{isCompleted ? (\cb1 \
\cb3                   <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5 text-white"\cf0 \strokec4  />\cb1 \
\cb3                 ) : (\cb1 \
\cb3                   <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{cn(\cb1 \
\cb3                     \cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5 transition-colors"\cf0 \strokec4 ,\cb1 \
\cb3                     isCurrent ? \cf6 \strokec6 "text-white"\cf0 \strokec4  : \cf6 \strokec6 "text-slate-400"\cf0 \cb1 \strokec4 \
\cb3                   )\} />\cb1 \
\cb3                 )\}\cb1 \
\cb3               </div>\cb1 \
\cb3               \cb1 \
\cb3               <div className=\cf6 \strokec6 "mt-1.5 sm:mt-2 text-center"\cf0 \strokec4 >\cb1 \
\cb3                 <span className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "text-[10px] sm:text-sm font-semibold block"\cf0 \strokec4 ,\cb1 \
\cb3                   isCurrent ? \cf6 \strokec6 "text-indigo-600"\cf0 \strokec4  : isCompleted ? \cf6 \strokec6 "text-green-600"\cf0 \strokec4  : \cf6 \strokec6 "text-slate-400"\cf0 \cb1 \strokec4 \
\cb3                 )\}>\cb1 \
\cb3                   \{step.name\}\cb1 \
\cb3                 </span>\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3           );\cb1 \
\cb3         \})\}\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}