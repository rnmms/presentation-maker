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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 X\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Maximize2\cf0 \strokec4 , \cf5 \strokec5 Minimize2\cf0 \strokec4 , \cf5 \strokec5 RefreshCw\cf0 \strokec4 , \cf5 \strokec5 Lightbulb\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 InlineAIPopup\cf0 \strokec4 (\{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   selectedText, \cb1 \
\cb3   position, \cb1 \
\cb3   onApply, \cb1 \
\cb3   onClose \cb1 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isProcessing, setIsProcessing] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [suggestion, setSuggestion] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [activeAction, setActiveAction] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  actions = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'improve'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'Improve'\cf0 \strokec4 , color: \cf6 \strokec6 'text-purple-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'expand'\cf0 \strokec4 , icon: \cf5 \strokec5 Maximize2\cf0 \strokec4 , label: \cf6 \strokec6 'Expand'\cf0 \strokec4 , color: \cf6 \strokec6 'text-blue-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'shorten'\cf0 \strokec4 , icon: \cf5 \strokec5 Minimize2\cf0 \strokec4 , label: \cf6 \strokec6 'Shorten'\cf0 \strokec4 , color: \cf6 \strokec6 'text-green-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'rewrite'\cf0 \strokec4 , icon: \cf5 \strokec5 RefreshCw\cf0 \strokec4 , label: \cf6 \strokec6 'Rewrite'\cf0 \strokec4 , color: \cf6 \strokec6 'text-orange-600'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAction = \cf2 \strokec2 async\cf0 \strokec4  (actionId) => \{\cb1 \
\cb3     setActiveAction(actionId);\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 const\cf0 \strokec4  prompts = \{\cb1 \
\cb3       improve: \cf6 \strokec6 `Improve this text to be more professional and impactful: "\cf0 \strokec4 $\{selectedText\}\cf6 \strokec6 "`\cf0 \strokec4 ,\cb1 \
\cb3       expand: \cf6 \strokec6 `Expand this text with more details and examples: "\cf0 \strokec4 $\{selectedText\}\cf6 \strokec6 "`\cf0 \strokec4 ,\cb1 \
\cb3       shorten: \cf6 \strokec6 `Make this text more concise while keeping the key message: "\cf0 \strokec4 $\{selectedText\}\cf6 \strokec6 "`\cf0 \strokec4 ,\cb1 \
\cb3       rewrite: \cf6 \strokec6 `Completely rewrite this text with a fresh perspective: "\cf0 \strokec4 $\{selectedText\}\cf6 \strokec6 "`\cf0 \strokec4 ,\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  result = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf5 \strokec5 Core\cf0 \strokec4 .\cf5 \strokec5 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3         prompt: prompts[actionId],\cb1 \
\cb3         response_json_schema: \{\cb1 \
\cb3           type: \cf6 \strokec6 "object"\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             text: \{ type: \cf6 \strokec6 "string"\cf0 \strokec4  \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\cb3       setSuggestion(result.text);\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       console.error(\cf6 \strokec6 'AI error:'\cf0 \strokec4 , error);\cb1 \
\cb3     \}\cb1 \
\
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleApply = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (suggestion) \{\cb1 \
\cb3       onApply(suggestion);\cb1 \
\cb3       onClose();\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!position) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3       <motion.div\cb1 \
\cb3         initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 10\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3         animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3         exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 10\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3         className=\cf6 \strokec6 "fixed z-50 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden w-80"\cf0 \cb1 \strokec4 \
\cb3         style=\{\{ \cb1 \
\cb3           left: position.x - \cf7 \strokec7 160\cf0 \strokec4 , \cb1 \
\cb3           top: position.y + \cf7 \strokec7 10\cf0 \strokec4  \cb1 \
\cb3         \}\}\cb1 \
\cb3       >\cb1 \
\cb3         \{\cf8 \strokec8 /* Header */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "px-3 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-white"\cf0 \strokec4  />\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-xs font-medium text-white"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4  \cf5 \strokec5 Edit\cf0 \strokec4 </span>\cb1 \
\cb3           </div>\cb1 \
\cb3           <button onClick=\{onClose\} className=\cf6 \strokec6 "text-white/70 hover:text-white"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3           </button>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Selected text preview */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "px-3 py-2 bg-slate-50 border-b border-slate-100"\cf0 \strokec4 >\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-xs text-slate-500 mb-1"\cf0 \strokec4 >\cf5 \strokec5 Selected\cf0 \strokec4 :</p>\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-sm text-slate-700 line-clamp-2"\cf0 \strokec4 >\{selectedText\}</p>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Actions */\cf0 \strokec4 \}\cb1 \
\cb3         \{!suggestion && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "p-2 flex flex-wrap gap-1"\cf0 \strokec4 >\cb1 \
\cb3             \{actions.map(action => (\cb1 \
\cb3               <button\cb1 \
\cb3                 key=\{action.id\}\cb1 \
\cb3                 onClick=\{() => handleAction(action.id)\}\cb1 \
\cb3                 disabled=\{isProcessing\}\cb1 \
\cb3                 className=\{\cf6 \strokec6 `flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all \cf0 \strokec4 $\{\cb1 \
\cb3                   activeAction === action.id && isProcessing\cb1 \
\cb3                     ? \cf6 \strokec6 'bg-slate-100 text-slate-400'\cf0 \cb1 \strokec4 \
\cb3                     : \cf6 \strokec6 `hover:bg-slate-100 \cf0 \strokec4 $\{action.color\}\cf6 \strokec6 `\cf0 \cb1 \strokec4 \
\cb3                 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               >\cb1 \
\cb3                 \{activeAction === action.id && isProcessing ? (\cb1 \
\cb3                   <div className=\cf6 \strokec6 "w-3 h-3 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"\cf0 \strokec4  />\cb1 \
\cb3                 ) : (\cb1 \
\cb3                   <action.icon className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  />\cb1 \
\cb3                 )\}\cb1 \
\cb3                 \{action.label\}\cb1 \
\cb3               </button>\cb1 \
\cb3             ))\}\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Suggestion */\cf0 \strokec4 \}\cb1 \
\cb3         \{suggestion && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "p-3"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex items-start gap-2 mb-3"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Lightbulb\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5"\cf0 \strokec4  />\cb1 \
\cb3               <p className=\cf6 \strokec6 "text-sm text-slate-700"\cf0 \strokec4 >\{suggestion\}</p>\cb1 \
\cb3             </div>\cb1 \
\cb3             \cb1 \
\cb3             <div className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                 size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3                 className=\cf6 \strokec6 "flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"\cf0 \cb1 \strokec4 \
\cb3                 onClick=\{handleApply\}\cb1 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 mr-1"\cf0 \strokec4  />\cb1 \
\cb3                 \cf5 \strokec5 Apply\cf0 \cb1 \strokec4 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                 size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3                 variant=\cf6 \strokec6 "outline"\cf0 \cb1 \strokec4 \
\cb3                 onClick=\{() => \{\cb1 \
\cb3                   setSuggestion(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3                   setActiveAction(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3                 \}\}\cb1 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 RefreshCw\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 mr-1"\cf0 \strokec4  />\cb1 \
\cb3                 \cf5 \strokec5 Try\cf0 \strokec4  again\cb1 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\cb3       </motion.div>\cb1 \
\cb3     </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}