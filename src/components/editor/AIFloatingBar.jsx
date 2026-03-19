{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red15\green112\blue1;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;\cssrgb\c80392\c19216\c19216;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useRef, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Input\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Textarea\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/textarea"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 MessageSquare\cf0 \strokec4 , \cf5 \strokec5 Send\cf0 \strokec4 , \cf5 \strokec5 X\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Expand\cf0 \strokec4 , \cf5 \strokec5 Shrink\cf0 \strokec4 , \cf5 \strokec5 RefreshCw\cf0 \strokec4 , \cf5 \strokec5 Lightbulb\cf0 \strokec4 , \cf5 \strokec5 Mic\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 ArrowUp\cf0 \strokec4 , \cf5 \strokec5 PlusCircle\cf0 \strokec4 , \cf5 \strokec5 Image\cf0 \strokec4 , \cf5 \strokec5 BarChart3\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ toast \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'sonner'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 AIFloatingBar\cf0 \strokec4 (\{ slide, onUpdateSlide \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [isExpanded, setIsExpanded] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [prompt, setPrompt] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isProcessing, setIsProcessing] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [showSuggestions, setShowSuggestions] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  inputRef = useRef(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  quickActions = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'enhance'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'Enhance'\cf0 \strokec4 , color: \cf6 \strokec6 'text-purple-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'expand'\cf0 \strokec4 , icon: \cf5 \strokec5 Expand\cf0 \strokec4 , label: \cf6 \strokec6 'Expand'\cf0 \strokec4 , color: \cf6 \strokec6 'text-blue-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'shorten'\cf0 \strokec4 , icon: \cf5 \strokec5 Shrink\cf0 \strokec4 , label: \cf6 \strokec6 'Shorten'\cf0 \strokec4 , color: \cf6 \strokec6 'text-green-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'regen'\cf0 \strokec4 , icon: \cf5 \strokec5 RefreshCw\cf0 \strokec4 , label: \cf6 \strokec6 'Regenerate'\cf0 \strokec4 , color: \cf6 \strokec6 'text-orange-600'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  suggestions = [\cb1 \
\cb3     \cf6 \strokec6 'Make this slide more persuasive'\cf0 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 'Add statistics to support my points'\cf0 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 'Suggest a powerful closing statement'\cf0 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 'Generate an image that represents this topic'\cf0 \strokec4 ,\cb1 \
\cb3     \cf6 \strokec6 'Add a relevant chart or graph'\cf0 \strokec4 ,\cb1 \
\cb3   ];\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (isExpanded && inputRef.current) \{\cb1 \
\cb3       inputRef.current.focus();\cb1 \
\cb3     \}\cb1 \
\cb3   \}, [isExpanded]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleQuickAction = \cf2 \strokec2 async\cf0 \strokec4  (actionId) => \{\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  prompts = \{\cb1 \
\cb3       enhance: \cf6 \strokec6 `Improve and enhance this slide content to be more professional and impactful. Title: \cf0 \strokec4 $\{slide.title\}\cf6 \strokec6 . Content: \cf0 \strokec4 $\{slide.content?.join(\cf6 \strokec6 ', '\cf0 \strokec4 )\}\cf6 \strokec6 `\cf0 \strokec4 ,\cb1 \
\cb3       expand: \cf6 \strokec6 `Expand and add more detail to this slide content. Title: \cf0 \strokec4 $\{slide.title\}\cf6 \strokec6 . Content: \cf0 \strokec4 $\{slide.content?.join(\cf6 \strokec6 ', '\cf0 \strokec4 )\}\cf6 \strokec6 `\cf0 \strokec4 ,\cb1 \
\cb3       shorten: \cf6 \strokec6 `Make this slide content more concise and to the point. Title: \cf0 \strokec4 $\{slide.title\}\cf6 \strokec6 . Content: \cf0 \strokec4 $\{slide.content?.join(\cf6 \strokec6 ', '\cf0 \strokec4 )\}\cf6 \strokec6 `\cf0 \strokec4 ,\cb1 \
\cb3       regen: \cf6 \strokec6 `Completely regenerate this slide with fresh content about the same topic. Title: \cf0 \strokec4 $\{slide.title\}\cf6 \strokec6 . Content: \cf0 \strokec4 $\{slide.content?.join(\cf6 \strokec6 ', '\cf0 \strokec4 )\}\cf6 \strokec6 `\cf0 \cb1 \strokec4 \
\cb3     \};\cb1 \
\
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  result = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf5 \strokec5 Core\cf0 \strokec4 .\cf5 \strokec5 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3         prompt: prompts[actionId],\cb1 \
\cb3         response_json_schema: \{\cb1 \
\cb3           type: \cf6 \strokec6 "object"\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             title: \{ type: \cf6 \strokec6 "string"\cf0 \strokec4  \},\cb1 \
\cb3             content: \{ type: \cf6 \strokec6 "array"\cf0 \strokec4 , items: \{ type: \cf6 \strokec6 "string"\cf0 \strokec4  \} \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\
\cb3       onUpdateSlide(\{\cb1 \
\cb3         ...slide,\cb1 \
\cb3         title: result.title || slide.title,\cb1 \
\cb3         content: result.content || slide.content\cb1 \
\cb3       \});\cb1 \
\cb3       toast.success(\cf6 \strokec6 'Slide updated!'\cf0 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Failed to update slide'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleCustomPrompt = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!prompt.trim()) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  result = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf5 \strokec5 Core\cf0 \strokec4 .\cf5 \strokec5 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3         prompt: \cf6 \strokec6 `\cf0 \strokec4 $\{prompt\}\cf6 \strokec6 . Current slide - Title: \cf0 \strokec4 $\{slide.title\}\cf6 \strokec6 . Content: \cf0 \strokec4 $\{slide.content?.join(\cf6 \strokec6 ', '\cf0 \strokec4 )\}\cf6 \strokec6 `\cf0 \strokec4 ,\cb1 \
\cb3         response_json_schema: \{\cb1 \
\cb3           type: \cf6 \strokec6 "object"\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             title: \{ type: \cf6 \strokec6 "string"\cf0 \strokec4  \},\cb1 \
\cb3             content: \{ type: \cf6 \strokec6 "array"\cf0 \strokec4 , items: \{ type: \cf6 \strokec6 "string"\cf0 \strokec4  \} \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\
\cb3       onUpdateSlide(\{\cb1 \
\cb3         ...slide,\cb1 \
\cb3         title: result.title || slide.title,\cb1 \
\cb3         content: result.content || slide.content\cb1 \
\cb3       \});\cb1 \
\cb3       toast.success(\cf6 \strokec6 'Slide updated!'\cf0 \strokec4 );\cb1 \
\cb3       setPrompt(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3       setIsExpanded(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Failed to update slide'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     \cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30"\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3         \{isExpanded ? (\cb1 \
\cb3           <motion.div\cb1 \
\cb3             key=\cf6 \strokec6 "expanded"\cf0 \cb1 \strokec4 \
\cb3             initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 20\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3             exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 20\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden w-[560px]"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             \{\cf8 \strokec8 /* Header */\cf0 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-white"\cf0 \strokec4  />\cb1 \
\cb3                 <span className=\cf6 \strokec6 "font-semibold text-white"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4  \cf5 \strokec5 Assistant\cf0 \strokec4 </span>\cb1 \
\cb3               </div>\cb1 \
\cb3               <button\cb1 \
\cb3                 onClick=\{() => setIsExpanded(\cf2 \strokec2 false\cf0 \strokec4 )\}\cb1 \
\cb3                 className=\cf6 \strokec6 "text-white/70 hover:text-white transition-colors"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3               </button>\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf8 \strokec8 /* Suggestions */\cf0 \strokec4 \}\cb1 \
\cb3             \{showSuggestions && !prompt && (\cb1 \
\cb3               <motion.div\cb1 \
\cb3                 initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , height: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                 animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , height: \cf6 \strokec6 'auto'\cf0 \strokec4  \}\}\cb1 \
\cb3                 className=\cf6 \strokec6 "border-b border-slate-100 p-3"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <p className=\cf6 \strokec6 "text-xs text-slate-500 mb-2"\cf0 \strokec4 >\cf5 \strokec5 Try\cf0 \strokec4  asking:</p>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex flex-wrap gap-2"\cf0 \strokec4 >\cb1 \
\cb3                   \{suggestions.map((suggestion, idx) => (\cb1 \
\cb3                     <button\cb1 \
\cb3                       key=\{idx\}\cb1 \
\cb3                       onClick=\{() => \{\cb1 \
\cb3                         setPrompt(suggestion);\cb1 \
\cb3                         setShowSuggestions(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3                       \}\}\cb1 \
\cb3                       className=\cf6 \strokec6 "text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full transition-colors"\cf0 \cb1 \strokec4 \
\cb3                     >\cb1 \
\cb3                       \{suggestion\}\cb1 \
\cb3                     </button>\cb1 \
\cb3                   ))\}\cb1 \
\cb3                 </div>\cb1 \
\cb3               </motion.div>\cb1 \
\cb3             )\}\cb1 \
\cb3             \cb1 \
\cb3             \{\cf8 \strokec8 /* Input area */\cf0 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "p-4"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex gap-2 mb-4"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex-1 relative"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 Textarea\cf0 \cb1 \strokec4 \
\cb3                     ref=\{inputRef\}\cb1 \
\cb3                     value=\{prompt\}\cb1 \
\cb3                     onChange=\{(e) => setPrompt(e.target.value)\}\cb1 \
\cb3                     onFocus=\{() => setShowSuggestions(\cf2 \strokec2 true\cf0 \strokec4 )\}\cb1 \
\cb3                     placeholder=\cf6 \strokec6 "Tell AI what you want to change..."\cf0 \cb1 \strokec4 \
\cb3                     className=\cf6 \strokec6 "min-h-[60px] max-h-[120px] resize-none pr-10 text-sm"\cf0 \cb1 \strokec4 \
\cb3                     onKeyDown=\{(e) => \{\cb1 \
\cb3                       \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'Enter'\cf0 \strokec4  && !e.shiftKey) \{\cb1 \
\cb3                         e.preventDefault();\cb1 \
\cb3                         handleCustomPrompt();\cb1 \
\cb3                       \}\cb1 \
\cb3                     \}\}\cb1 \
\cb3                     disabled=\{isProcessing\}\cb1 \
\cb3                   />\cb1 \
\cb3                   <button\cb1 \
\cb3                     onClick=\{handleCustomPrompt\}\cb1 \
\cb3                     disabled=\{isProcessing || !prompt.trim()\}\cb1 \
\cb3                     className=\cf6 \strokec6 "absolute right-2 bottom-2 w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white disabled:opacity-50 transition-opacity"\cf0 \cb1 \strokec4 \
\cb3                   >\cb1 \
\cb3                     \{isProcessing ? (\cb1 \
\cb3                       <div className=\cf6 \strokec6 "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"\cf0 \strokec4  />\cb1 \
\cb3                     ) : (\cb1 \
\cb3                       <\cf5 \strokec5 ArrowUp\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3                     )\}\cb1 \
\cb3                   </button>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\
\cb3               \{\cf8 \strokec8 /* Quick actions grid */\cf0 \strokec4 \}\cb1 \
\cb3               <div className=\cf6 \strokec6 "grid grid-cols-4 gap-2"\cf0 \strokec4 >\cb1 \
\cb3                 \{quickActions.map((action) => (\cb1 \
\cb3                   <button\cb1 \
\cb3                     key=\{action.id\}\cb1 \
\cb3                     onClick=\{() => handleQuickAction(action.id)\}\cb1 \
\cb3                     disabled=\{isProcessing\}\cb1 \
\cb3                     className=\cf6 \strokec6 "flex flex-col items-center gap-1 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors disabled:opacity-50"\cf0 \cb1 \strokec4 \
\cb3                   >\cb1 \
\cb3                     <action.icon className=\{\cf6 \strokec6 `w-5 h-5 \cf0 \strokec4 $\{action.color\}\cf6 \strokec6 `\cf0 \strokec4 \} />\cb1 \
\cb3                     <span className=\cf6 \strokec6 "text-xs font-medium text-slate-700"\cf0 \strokec4 >\{action.label\}</span>\cb1 \
\cb3                   </button>\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         ) : (\cb1 \
\cb3           <motion.button\cb1 \
\cb3             key=\cf6 \strokec6 "collapsed"\cf0 \cb1 \strokec4 \
\cb3             initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 0.8\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3             exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 0.8\cf0 \strokec4  \}\}\cb1 \
\cb3             onClick=\{() => setIsExpanded(\cf2 \strokec2 true\cf0 \strokec4 )\}\cb1 \
\cb3             className=\cf6 \strokec6 "group flex items-center gap-3 bg-white text-slate-700 pl-4 pr-5 py-3 rounded-full shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:border-purple-300"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-white"\cf0 \strokec4  />\cb1 \
\cb3             </div>\cb1 \
\cb3             <div className=\cf6 \strokec6 "text-left"\cf0 \strokec4 >\cb1 \
\cb3               <span className=\cf6 \strokec6 "font-semibold text-slate-800 block"\cf0 \strokec4 >\cf5 \strokec5 Ask\cf0 \strokec4  \cf5 \strokec5 AI\cf0 \strokec4 </span>\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-xs text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 Press\cf0 \strokec4  to enhance \cf2 \strokec2 this\cf0 \strokec4  slide</span>\cb1 \
\cb3             </div>\cb1 \
\cb3             <div className=\cf6 \strokec6 "ml-2 px-2 py-1 rounded-md bg-slate-100 text-xs text-slate-500 font-mono"\cf0 \strokec4 >\cb1 \
\cb3               \cf9 \strokec9 \uc0\u8984 \cf5 \strokec5 K\cf0 \cb1 \strokec4 \
\cb3             </div>\cb1 \
\cb3           </motion.button>\cb1 \
\cb3         )\}\cb1 \
\cb3       </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}