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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useRef \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Upload\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 ChevronRight\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 FileUp\cf0 \strokec4 , \cf5 \strokec5 X\cf0 \strokec4 , \cf5 \strokec5 Loader2\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 Lightbulb\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 StepIndicator\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './StepIndicator'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  promptSuggestions = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf6 \strokec6 "A pitch deck for my AI startup that automates customer support"\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 "Quarterly sales report for Q4 2024 with key metrics"\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 "Product launch presentation for a new mobile app"\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 "Team onboarding guide for new employees"\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 "Marketing strategy for social media campaign"\cf0 \cb1 \strokec4 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  audiences = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ id: \cf6 \strokec6 'Team'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55357 \u56404 '\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'Clients'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55358 \u56605 '\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'Students'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55356 \u57235 '\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'Investors'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55357 \u56508 '\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'General'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55356 \u57101 '\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  tones = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ id: \cf6 \strokec6 'Formal'\cf0 \strokec4 , color: \cf6 \strokec6 'from-slate-500 to-slate-600'\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'Neutral'\cf0 \strokec4 , color: \cf6 \strokec6 'from-blue-500 to-cyan-500'\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'Friendly'\cf0 \strokec4 , color: \cf6 \strokec6 'from-amber-500 to-orange-500'\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'Playful'\cf0 \strokec4 , color: \cf6 \strokec6 'from-pink-500 to-rose-500'\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 MagicWizard\cf0 \strokec4 (\{ template, onComplete, onBack \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [contentMode, setContentMode] = useState(\cf6 \strokec6 'ai'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [topic, setTopic] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [uploadedFile, setUploadedFile] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isUploading, setIsUploading] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [audience, setAudience] = useState(\cf6 \strokec6 'Team'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tone, setTone] = useState(\cf6 \strokec6 'Neutral'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [slideCount, setSlideCount] = useState(\cf7 \strokec7 10\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  fileInputRef = useRef(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleFileUpload = \cf2 \strokec2 async\cf0 \strokec4  (e) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  file = e.target.files?.[\cf7 \strokec7 0\cf0 \strokec4 ];\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!file) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     setIsUploading(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  \{ file_url \} = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf5 \strokec5 Core\cf0 \strokec4 .\cf5 \strokec5 UploadFile\cf0 \strokec4 (\{ file \});\cb1 \
\cb3       setUploadedFile(\{ name: file.name, url: file_url \});\cb1 \
\cb3       setContentMode(\cf6 \strokec6 'upload'\cf0 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       console.error(\cf6 \strokec6 'Upload failed'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     setIsUploading(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  canGenerate = contentMode === \cf6 \strokec6 'ai'\cf0 \strokec4  ? topic.trim().length > \cf7 \strokec7 10\cf0 \strokec4  : uploadedFile;\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3       exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "min-h-screen relative z-10"\cf0 \cb1 \strokec4 \
\cb3     >\cb1 \
\cb3       \{\cf8 \strokec8 /* Background - Same style as Entry */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "fixed inset-0 z-0 overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  style=\{\{ animationDelay: \cf6 \strokec6 '1s'\cf0 \strokec4  \}\} />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px]"\cf0 \strokec4  />\cb1 \
\cb3         \{template?.cover && (\cb1 \
\cb3           <img src=\{template.cover\} alt=\cf6 \strokec6 ""\cf0 \strokec4  className=\cf6 \strokec6 "absolute inset-0 w-full h-full object-cover opacity-5 blur-2xl scale-110"\cf0 \strokec4  />\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Header */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "sticky top-0 z-30 bg-[#030305]/80 backdrop-blur-xl border-b border-white/5"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-4xl mx-auto px-6 py-4"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 StepIndicator\cf0 \strokec4  currentStep=\{\cf7 \strokec7 2\cf0 \strokec4 \} />\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Content */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "relative z-10 max-w-4xl mx-auto px-6 py-8"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf8 \strokec8 /* Back */\cf0 \strokec4 \}\cb1 \
\cb3         <button onClick=\{onBack\} className=\cf6 \strokec6 "flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  /> \cf5 \strokec5 Back\cf0 \cb1 \strokec4 \
\cb3         </button>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Main card */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf8 \strokec8 /* Template preview + Title */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-4 mb-6 pb-6 border-b border-white/10"\cf0 \strokec4 >\cb1 \
\cb3             <img src=\{template?.cover\} alt=\cf6 \strokec6 ""\cf0 \strokec4  className=\cf6 \strokec6 "w-24 h-14 object-cover rounded-lg"\cf0 \strokec4  />\cb1 \
\cb3             <div>\cb1 \
\cb3               <h1 className=\cf6 \strokec6 "text-xl font-bold text-white"\cf0 \strokec4 >\cf5 \strokec5 What\cf6 \strokec6 's your story?</h1>\cf0 \cb1 \strokec4 \
\cb3               <p className=\cf6 \strokec6 "text-sm text-slate-400"\cf0 \strokec4 >\{template?.name\}</p>\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf8 \strokec8 /* MAIN FOCUS: Content input - Full width */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "mb-6"\cf0 \strokec4 >\cb1 \
\cb3             \{\cf8 \strokec8 /* Mode toggle - Full width */\cf0 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex gap-3 mb-4"\cf0 \strokec4 >\cb1 \
\cb3               <button\cb1 \
\cb3                 onClick=\{() => setContentMode(\cf6 \strokec6 'ai'\cf0 \strokec4 )\}\cb1 \
\cb3                 className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-medium transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                   contentMode === \cf6 \strokec6 'ai'\cf0 \cb1 \strokec4 \
\cb3                     ? \cf6 \strokec6 "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/50 text-white"\cf0 \cb1 \strokec4 \
\cb3                     : \cf6 \strokec6 "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"\cf0 \cb1 \strokec4 \
\cb3                 )\}\cb1 \
\cb3               >\cb1 \
\cb3                 <div className=\{cn(\cf6 \strokec6 "w-10 h-10 rounded-xl flex items-center justify-center"\cf0 \strokec4 , contentMode === \cf6 \strokec6 'ai'\cf0 \strokec4  ? \cf6 \strokec6 "bg-purple-500"\cf0 \strokec4  : \cf6 \strokec6 "bg-white/10"\cf0 \strokec4 )\}>\cb1 \
\cb3                   <\cf5 \strokec5 Wand2\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-white"\cf0 \strokec4  />\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "text-left"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-semibold"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4  writes it</p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-xs text-slate-400"\cf0 \strokec4 >\cf5 \strokec5 Describe\cf0 \strokec4  your topic</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </button>\cb1 \
\cb3               <button\cb1 \
\cb3                 onClick=\{() => setContentMode(\cf6 \strokec6 'upload'\cf0 \strokec4 )\}\cb1 \
\cb3                 className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "flex-1 flex items-center justify-center gap-3 py-4 rounded-xl text-sm font-medium transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                   contentMode === \cf6 \strokec6 'upload'\cf0 \cb1 \strokec4 \
\cb3                     ? \cf6 \strokec6 "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/50 text-white"\cf0 \cb1 \strokec4 \
\cb3                     : \cf6 \strokec6 "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"\cf0 \cb1 \strokec4 \
\cb3                 )\}\cb1 \
\cb3               >\cb1 \
\cb3                 <div className=\{cn(\cf6 \strokec6 "w-10 h-10 rounded-xl flex items-center justify-center"\cf0 \strokec4 , contentMode === \cf6 \strokec6 'upload'\cf0 \strokec4  ? \cf6 \strokec6 "bg-blue-500"\cf0 \strokec4  : \cf6 \strokec6 "bg-white/10"\cf0 \strokec4 )\}>\cb1 \
\cb3                   <\cf5 \strokec5 FileUp\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-white"\cf0 \strokec4  />\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "text-left"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-semibold"\cf0 \strokec4 >\cf5 \strokec5 Upload\cf0 \strokec4  file</p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-xs text-slate-400"\cf0 \strokec4 >\cf5 \strokec5 PDF\cf0 \strokec4 , \cf5 \strokec5 DOCX\cf0 \strokec4 , \cf5 \strokec5 TXT\cf0 \strokec4 </p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </button>\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf8 \strokec8 /* Input area - Full width */\cf0 \strokec4 \}\cb1 \
\cb3             <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3               \{contentMode === \cf6 \strokec6 'ai'\cf0 \strokec4  ? (\cb1 \
\cb3                 <motion.div key=\cf6 \strokec6 "ai"\cf0 \strokec4  initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\} animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4  \}\} exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}>\cb1 \
\cb3                   <textarea\cb1 \
\cb3                     value=\{topic\}\cb1 \
\cb3                     onChange=\{(e) => setTopic(e.target.value)\}\cb1 \
\cb3                     placeholder=\cf6 \strokec6 "Describe your presentation in detail...&#10;&#10;Include: main topic, key points you want to cover, specific data or examples..."\cf0 \cb1 \strokec4 \
\cb3                     className=\cf6 \strokec6 "w-full h-36 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50 resize-none text-sm"\cf0 \cb1 \strokec4 \
\cb3                   />\cb1 \
\cb3                   \cb1 \
\cb3                   \{\cf8 \strokec8 /* Prompt suggestions */\cf0 \strokec4 \}\cb1 \
\cb3                   <div className=\cf6 \strokec6 "mt-3"\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\cf6 \strokec6 "flex items-center gap-2 text-xs text-slate-400 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Lightbulb\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  />\cb1 \
\cb3                       <span>\cf5 \strokec5 Try\cf0 \strokec4  one \cf2 \strokec2 of\cf0 \strokec4  these:</span>\cb1 \
\cb3                     </div>\cb1 \
\cb3                     <div className=\cf6 \strokec6 "flex flex-wrap gap-2"\cf0 \strokec4 >\cb1 \
\cb3                       \{promptSuggestions.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 3\cf0 \strokec4 ).map((suggestion, idx) => (\cb1 \
\cb3                         <button\cb1 \
\cb3                           key=\{idx\}\cb1 \
\cb3                           onClick=\{() => setTopic(suggestion)\}\cb1 \
\cb3                           className=\cf6 \strokec6 "px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 hover:bg-purple-500/20 hover:border-purple-500/30 hover:text-white transition-all"\cf0 \cb1 \strokec4 \
\cb3                         >\cb1 \
\cb3                           \{suggestion.length > \cf7 \strokec7 40\cf0 \strokec4  ? suggestion.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 40\cf0 \strokec4 ) + \cf6 \strokec6 '...'\cf0 \strokec4  : suggestion\}\cb1 \
\cb3                         </button>\cb1 \
\cb3                       ))\}\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </motion.div>\cb1 \
\cb3               ) : (\cb1 \
\cb3                 <motion.div key=\cf6 \strokec6 "upload"\cf0 \strokec4  initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\} animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4  \}\} exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}>\cb1 \
\cb3                   <input ref=\{fileInputRef\} type=\cf6 \strokec6 "file"\cf0 \strokec4  accept=\cf6 \strokec6 ".pdf,.docx,.txt"\cf0 \strokec4  onChange=\{handleFileUpload\} className=\cf6 \strokec6 "hidden"\cf0 \strokec4  />\cb1 \
\cb3                   \{uploadedFile ? (\cb1 \
\cb3                     <div className=\cf6 \strokec6 "h-36 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3                       <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \
\cb3                         <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-10 h-10 text-green-400 mx-auto mb-2"\cf0 \strokec4  />\cb1 \
\cb3                         <p className=\cf6 \strokec6 "text-white font-medium"\cf0 \strokec4 >\{uploadedFile.name\}</p>\cb1 \
\cb3                         <button onClick=\{() => setUploadedFile(\cf2 \strokec2 null\cf0 \strokec4 )\} className=\cf6 \strokec6 "text-xs text-slate-400 mt-2 hover:text-red-400"\cf0 \strokec4 >\cf5 \strokec5 Remove\cf0 \strokec4  file</button>\cb1 \
\cb3                       </div>\cb1 \
\cb3                     </div>\cb1 \
\cb3                   ) : (\cb1 \
\cb3                     <button\cb1 \
\cb3                       onClick=\{() => fileInputRef.current?.click()\}\cb1 \
\cb3                       className=\cf6 \strokec6 "w-full h-36 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center hover:border-purple-500/50 hover:bg-purple-500/5 transition-all"\cf0 \cb1 \strokec4 \
\cb3                     >\cb1 \
\cb3                       \{isUploading ? (\cb1 \
\cb3                         <\cf5 \strokec5 Loader2\cf0 \strokec4  className=\cf6 \strokec6 "w-8 h-8 text-purple-400 animate-spin"\cf0 \strokec4  />\cb1 \
\cb3                       ) : (\cb1 \
\cb3                         <>\cb1 \
\cb3                           <\cf5 \strokec5 Upload\cf0 \strokec4  className=\cf6 \strokec6 "w-8 h-8 text-slate-400 mb-3"\cf0 \strokec4  />\cb1 \
\cb3                           <p className=\cf6 \strokec6 "text-white font-medium"\cf0 \strokec4 >\cf5 \strokec5 Drop\cf0 \strokec4  your file here</p>\cb1 \
\cb3                           <p className=\cf6 \strokec6 "text-xs text-slate-500 mt-1"\cf0 \strokec4 >or click to browse</p>\cb1 \
\cb3                         </>\cb1 \
\cb3                       )\}\cb1 \
\cb3                     </button>\cb1 \
\cb3                   )\}\cb1 \
\cb3                 </motion.div>\cb1 \
\cb3               )\}\cb1 \
\cb3             </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf8 \strokec8 /* Options - Compact row */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "grid grid-cols-3 gap-4 pt-4 border-t border-white/10"\cf0 \strokec4 >\cb1 \
\cb3             \{\cf8 \strokec8 /* Audience */\cf0 \strokec4 \}\cb1 \
\cb3             <div>\cb1 \
\cb3               <label className=\cf6 \strokec6 "text-xs text-slate-400 mb-2 block"\cf0 \strokec4 >\cf5 \strokec5 Audience\cf0 \strokec4 </label>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex flex-wrap gap-1.5"\cf0 \strokec4 >\cb1 \
\cb3                 \{audiences.map(a => (\cb1 \
\cb3                   <button\cb1 \
\cb3                     key=\{a.id\}\cb1 \
\cb3                     onClick=\{() => setAudience(a.id)\}\cb1 \
\cb3                     className=\{cn(\cb1 \
\cb3                       \cf6 \strokec6 "px-2 py-1 rounded-lg text-xs transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                       audience === a.id\cb1 \
\cb3                         ? \cf6 \strokec6 "bg-purple-500/30 text-white"\cf0 \cb1 \strokec4 \
\cb3                         : \cf6 \strokec6 "bg-white/5 text-slate-400 hover:text-white"\cf0 \cb1 \strokec4 \
\cb3                     )\}\cb1 \
\cb3                   >\cb1 \
\cb3                     \{a.emoji\} \{a.id\}\cb1 \
\cb3                   </button>\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf8 \strokec8 /* Tone */\cf0 \strokec4 \}\cb1 \
\cb3             <div>\cb1 \
\cb3               <label className=\cf6 \strokec6 "text-xs text-slate-400 mb-2 block"\cf0 \strokec4 >\cf5 \strokec5 Tone\cf0 \strokec4 </label>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex gap-1.5"\cf0 \strokec4 >\cb1 \
\cb3                 \{tones.map(t => (\cb1 \
\cb3                   <button\cb1 \
\cb3                     key=\{t.id\}\cb1 \
\cb3                     onClick=\{() => setTone(t.id)\}\cb1 \
\cb3                     className=\{cn(\cb1 \
\cb3                       \cf6 \strokec6 "flex-1 py-1.5 rounded-lg text-xs font-medium transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                       tone === t.id\cb1 \
\cb3                         ? \cf6 \strokec6 `bg-gradient-to-r \cf0 \strokec4 $\{t.color\}\cf6 \strokec6  text-white`\cf0 \cb1 \strokec4 \
\cb3                         : \cf6 \strokec6 "bg-white/5 text-slate-400 hover:text-white"\cf0 \cb1 \strokec4 \
\cb3                     )\}\cb1 \
\cb3                   >\cb1 \
\cb3                     \{t.id\}\cb1 \
\cb3                   </button>\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf8 \strokec8 /* Slides */\cf0 \strokec4 \}\cb1 \
\cb3             <div>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-center justify-between mb-2"\cf0 \strokec4 >\cb1 \
\cb3                 <label className=\cf6 \strokec6 "text-xs text-slate-400"\cf0 \strokec4 >\cf5 \strokec5 Slides\cf0 \strokec4 </label>\cb1 \
\cb3                 <span className=\cf6 \strokec6 "text-xs font-bold text-purple-400"\cf0 \strokec4 >\{slideCount\}</span>\cb1 \
\cb3               </div>\cb1 \
\cb3               <input\cb1 \
\cb3                 type=\cf6 \strokec6 "range"\cf0 \cb1 \strokec4 \
\cb3                 min=\{\cf7 \strokec7 5\cf0 \strokec4 \}\cb1 \
\cb3                 max=\{\cf7 \strokec7 20\cf0 \strokec4 \}\cb1 \
\cb3                 value=\{slideCount\}\cb1 \
\cb3                 onChange=\{(e) => setSlideCount(parseInt(e.target.value))\}\cb1 \
\cb3                 className=\cf6 \strokec6 "w-full accent-purple-500"\cf0 \cb1 \strokec4 \
\cb3               />\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf8 \strokec8 /* Generate button */\cf0 \strokec4 \}\cb1 \
\cb3           <motion.button\cb1 \
\cb3             whileHover=\{\{ scale: canGenerate ? \cf7 \strokec7 1.01\cf0 \strokec4  : \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3             whileTap=\{\{ scale: canGenerate ? \cf7 \strokec7 0.99\cf0 \strokec4  : \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3             onClick=\{() => onComplete(\{ topic, audience, tone, slideCount, contentMode, fileUrl: uploadedFile?.url \})\}\cb1 \
\cb3             disabled=\{!canGenerate\}\cb1 \
\cb3             className=\{cn(\cb1 \
\cb3               \cf6 \strokec6 "w-full mt-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"\cf0 \strokec4 ,\cb1 \
\cb3               canGenerate\cb1 \
\cb3                 ? \cf6 \strokec6 "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"\cf0 \cb1 \strokec4 \
\cb3                 : \cf6 \strokec6 "bg-white/10 text-slate-500 cursor-not-allowed"\cf0 \cb1 \strokec4 \
\cb3             )\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3             \cf5 \strokec5 Generate\cf0 \strokec4  \cf5 \strokec5 Presentation\cf0 \cb1 \strokec4 \
\cb3             <\cf5 \strokec5 ChevronRight\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3           </motion.button>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}