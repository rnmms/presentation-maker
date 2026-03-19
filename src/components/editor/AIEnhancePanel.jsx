{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red191\green28\blue37;\red15\green112\blue1;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c80392\c19216\c19216;\cssrgb\c0\c50196\c0;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Textarea\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/textarea"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Image\cf0 \strokec4 , \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 Quote\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 CheckCircle\cf0 \strokec4 , \cf5 \strokec5 AlertTriangle\cf0 \strokec4 , \cf5 \strokec5 Loader2\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Expand\cf0 \strokec4 , \cf5 \strokec5 Shrink\cf0 \strokec4 , \cf5 \strokec5 RefreshCw\cf0 \strokec4 , \cf5 \strokec5 Lightbulb\cf0 \strokec4 , \cf5 \strokec5 Zap\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ toast \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'sonner'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ enhanceSlide, suggestVisuals, chartAssistant, suggestQuote, askAI \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../ai/PresentationAIService'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 AIEnhancePanel\cf0 \strokec4 (\{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   slide, \cb1 \
\cb3   onUpdateSlide, \cb1 \
\cb3   onClose \cb1 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [activeTab, setActiveTab] = useState(\cf6 \strokec6 'enhance'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isProcessing, setIsProcessing] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [result, setResult] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [customPrompt, setCustomPrompt] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  tabs = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'enhance'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'Enhance'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'visuals'\cf0 \strokec4 , icon: \cf5 \strokec5 Image\cf0 \strokec4 , label: \cf6 \strokec6 'Visuals'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'chart'\cf0 \strokec4 , icon: \cf5 \strokec5 BarChart3\cf0 \strokec4 , label: \cf6 \strokec6 'Chart'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'quote'\cf0 \strokec4 , icon: \cf5 \strokec5 Quote\cf0 \strokec4 , label: \cf6 \strokec6 'Quote'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'ask'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , label: \cf6 \strokec6 'Ask AI'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  quickActions = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'shorten'\cf0 \strokec4 , icon: \cf5 \strokec5 Shrink\cf0 \strokec4 , label: \cf6 \strokec6 'Shorten'\cf0 \strokec4 , color: \cf6 \strokec6 'text-blue-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'expand'\cf0 \strokec4 , icon: \cf5 \strokec5 Expand\cf0 \strokec4 , label: \cf6 \strokec6 'Expand'\cf0 \strokec4 , color: \cf6 \strokec6 'text-green-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'rewrite'\cf0 \strokec4 , icon: \cf5 \strokec5 RefreshCw\cf0 \strokec4 , label: \cf6 \strokec6 'Rewrite'\cf0 \strokec4 , color: \cf6 \strokec6 'text-purple-600'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'improve'\cf0 \strokec4 , icon: \cf5 \strokec5 Zap\cf0 \strokec4 , label: \cf6 \strokec6 'Improve'\cf0 \strokec4 , color: \cf6 \strokec6 'text-amber-600'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleEnhance = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  enhanceSlide(slide);\cb1 \
\cb3       setResult(\{ type: \cf6 \strokec6 'enhance'\cf0 \strokec4 , data: response \});\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Failed to enhance slide'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleSuggestVisuals = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  suggestVisuals(slide);\cb1 \
\cb3       setResult(\{ type: \cf6 \strokec6 'visuals'\cf0 \strokec4 , data: response \});\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Failed to get visual suggestions'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleChartAssistant = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  dataDesc = slide.content?.join(\cf6 \strokec6 '. '\cf0 \strokec4 ) || slide.title;\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  chartAssistant(dataDesc, \cf6 \strokec6 'compare'\cf0 \strokec4 );\cb1 \
\cb3       setResult(\{ type: \cf6 \strokec6 'chart'\cf0 \strokec4 , data: response \});\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Failed to get chart recommendation'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleSuggestQuote = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  suggestQuote(slide.title, slide.content?.join(\cf6 \strokec6 ' '\cf0 \strokec4 ));\cb1 \
\cb3       setResult(\{ type: \cf6 \strokec6 'quote'\cf0 \strokec4 , data: response \});\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Failed to find quotes'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAskAI = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!customPrompt.trim()) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  askAI(customPrompt, slide);\cb1 \
\cb3       setResult(\{ type: \cf6 \strokec6 'ask'\cf0 \strokec4 , data: response \});\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Failed to process request'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleQuickAction = \cf2 \strokec2 async\cf0 \strokec4  (actionId) => \{\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  prompts = \{\cb1 \
\cb3         shorten: \cf6 \strokec6 'Make this slide more concise. Keep only the essential points.'\cf0 \strokec4 ,\cb1 \
\cb3         expand: \cf6 \strokec6 'Add more detail and depth to this slide content.'\cf0 \strokec4 ,\cb1 \
\cb3         rewrite: \cf6 \strokec6 'Rewrite this slide with fresh, more engaging language.'\cf0 \strokec4 ,\cb1 \
\cb3         improve: \cf6 \strokec6 'Improve the clarity and impact of this slide.'\cf0 \cb1 \strokec4 \
\cb3       \};\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  askAI(prompts[actionId], slide);\cb1 \
\cb3       setResult(\{ type: \cf6 \strokec6 'quick'\cf0 \strokec4 , data: response \});\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Action failed'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3     setIsProcessing(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  applyEnhancement = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!result) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 let\cf0 \strokec4  updatedSlide = \{ ...slide \};\cb1 \
\
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (result.type === \cf6 \strokec6 'enhance'\cf0 \strokec4  && result.data.revised_slide) \{\cb1 \
\cb3       updatedSlide = \{\cb1 \
\cb3         ...slide,\cb1 \
\cb3         title: result.data.revised_slide.title || slide.title,\cb1 \
\cb3         content: result.data.revised_slide.content || slide.content,\cb1 \
\cb3         speaker_notes: result.data.revised_slide.speaker_notes || slide.speaker_notes\cb1 \
\cb3       \};\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (result.type === \cf6 \strokec6 'ask'\cf0 \strokec4  && result.data.result?.slide) \{\cb1 \
\cb3       updatedSlide = \{\cb1 \
\cb3         ...slide,\cb1 \
\cb3         title: result.data.result.slide.title || slide.title,\cb1 \
\cb3         content: result.data.result.slide.content || slide.content,\cb1 \
\cb3         speaker_notes: result.data.result.slide.speaker_notes || slide.speaker_notes\cb1 \
\cb3       \};\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (result.type === \cf6 \strokec6 'quick'\cf0 \strokec4  && result.data.result?.slide) \{\cb1 \
\cb3       updatedSlide = \{\cb1 \
\cb3         ...slide,\cb1 \
\cb3         title: result.data.result.slide.title || slide.title,\cb1 \
\cb3         content: result.data.result.slide.content || slide.content\cb1 \
\cb3       \};\cb1 \
\cb3     \}\cb1 \
\
\cb3     onUpdateSlide(updatedSlide);\cb1 \
\cb3     toast.success(\cf6 \strokec6 'Slide updated!'\cf0 \strokec4 );\cb1 \
\cb3     setResult(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderResult = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!result) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 switch\cf0 \strokec4  (result.type) \{\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'enhance'\cf0 \strokec4 :\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'quick'\cf0 \strokec4 :\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'ask'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  slideData = result.data.revised_slide || result.data.result?.slide;\cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (!slideData) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3           <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "bg-green-50 border border-green-200 rounded-xl p-4"\cf0 \strokec4 >\cb1 \
\cb3               <h4 className=\cf6 \strokec6 "font-semibold text-green-800 mb-2"\cf0 \strokec4 >\cf5 \strokec5 Suggested\cf0 \strokec4  \cf5 \strokec5 Changes\cf0 \strokec4 </h4>\cb1 \
\cb3               <div className=\cf6 \strokec6 "space-y-2 text-sm"\cf0 \strokec4 >\cb1 \
\cb3                 <div>\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-green-600 font-medium"\cf0 \strokec4 >\cf5 \strokec5 Title\cf0 \strokec4 :</span>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-green-900"\cf0 \strokec4 >\{slideData.title\}</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 \{slideData.content && (\cb1 \
\cb3                   <div>\cb1 \
\cb3                     <span className=\cf6 \strokec6 "text-green-600 font-medium"\cf0 \strokec4 >\cf5 \strokec5 Content\cf0 \strokec4 :</span>\cb1 \
\cb3                     <ul className=\cf6 \strokec6 "list-disc list-inside text-green-900"\cf0 \strokec4 >\cb1 \
\cb3                       \{slideData.content.map((item, i) => (\cb1 \
\cb3                         <li key=\{i\}>\{item\}</li>\cb1 \
\cb3                       ))\}\cb1 \
\cb3                     </ul>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 )\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3             \{result.data.changes_made && (\cb1 \
\cb3               <div className=\cf6 \strokec6 "text-xs text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3                 <strong>\cf5 \strokec5 Changes\cf0 \strokec4 :</strong> \{result.data.changes_made.join(\cf6 \strokec6 ', '\cf0 \strokec4 )\}\cb1 \
\cb3               </div>\cb1 \
\cb3             )\}\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{applyEnhancement\} className=\cf6 \strokec6 "w-full bg-green-600 hover:bg-green-700"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 CheckCircle\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Apply\cf0 \strokec4  \cf5 \strokec5 Changes\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         );\cb1 \
\
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'visuals'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3           <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <div>\cb1 \
\cb3               <h4 className=\cf6 \strokec6 "font-semibold text-slate-800 mb-2"\cf0 \strokec4 >\cf5 \strokec5 Image\cf0 \strokec4  \cf5 \strokec5 Suggestions\cf0 \strokec4 </h4>\cb1 \
\cb3               <div className=\cf6 \strokec6 "space-y-2"\cf0 \strokec4 >\cb1 \
\cb3                 \{result.data.image_options?.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 4\cf0 \strokec4 ).map((opt, i) => (\cb1 \
\cb3                   <div key=\{i\} className=\cf6 \strokec6 "bg-slate-50 rounded-lg p-3 text-sm"\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\cf6 \strokec6 "font-medium text-slate-700"\cf0 \strokec4 >\cf6 \strokec6 "\{opt.query\}"\cf0 \strokec4 </div>\cb1 \
\cb3                     <div className=\cf6 \strokec6 "text-xs text-slate-500 mt-1"\cf0 \strokec4 >\cb1 \
\cb3                       \{opt.composition\} \cf8 \strokec8 \'95\cf0 \strokec4  \{opt.why\}\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3             <div>\cb1 \
\cb3               <h4 className=\cf6 \strokec6 "font-semibold text-slate-800 mb-2"\cf0 \strokec4 >\cf5 \strokec5 Icon\cf0 \strokec4  \cf5 \strokec5 Suggestions\cf0 \strokec4 </h4>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex flex-wrap gap-2"\cf0 \strokec4 >\cb1 \
\cb3                 \{result.data.icon_options?.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 5\cf0 \strokec4 ).map((opt, i) => (\cb1 \
\cb3                   <span key=\{i\} className=\cf6 \strokec6 "bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs"\cf0 \strokec4 >\cb1 \
\cb3                     \{opt.query\}\cb1 \
\cb3                   </span>\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3             <div className=\cf6 \strokec6 "text-sm text-slate-600 bg-amber-50 p-3 rounded-lg"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Lightbulb\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 inline mr-1 text-amber-600"\cf0 \strokec4  />\cb1 \
\cb3               \{result.data.recommended_approach\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\cb3         );\cb1 \
\
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'chart'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3           <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "bg-blue-50 border border-blue-200 rounded-xl p-4"\cf0 \strokec4 >\cb1 \
\cb3               <h4 className=\cf6 \strokec6 "font-semibold text-blue-800 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                 \cf5 \strokec5 Recommended\cf0 \strokec4 : \{result.data.chart_type?.toUpperCase()\}\cb1 \
\cb3               </h4>\cb1 \
\cb3               <p className=\cf6 \strokec6 "text-sm text-blue-700"\cf0 \strokec4 >\{result.data.why\}</p>\cb1 \
\cb3               \{result.data.insight && (\cb1 \
\cb3                 <p className=\cf6 \strokec6 "text-sm text-blue-600 mt-2 italic"\cf0 \strokec4 >\cf6 \strokec6 "\{result.data.insight\}"\cf0 \strokec4 </p>\cb1 \
\cb3               )\}\cb1 \
\cb3             </div>\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3               onClick=\{() => \{\cb1 \
\cb3                 onUpdateSlide(\{\cb1 \
\cb3                   ...slide,\cb1 \
\cb3                   chart: \{\cb1 \
\cb3                     type: result.data.chart_type,\cb1 \
\cb3                     data: result.data.sample_data || []\cb1 \
\cb3                   \}\cb1 \
\cb3                 \});\cb1 \
\cb3                 toast.success(\cf6 \strokec6 'Chart added!'\cf0 \strokec4 );\cb1 \
\cb3               \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "w-full"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               \cf5 \strokec5 Add\cf0 \strokec4  \{result.data.chart_type\} \cf5 \strokec5 Chart\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         );\cb1 \
\
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'quote'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3           <div className=\cf6 \strokec6 "space-y-3"\cf0 \strokec4 >\cb1 \
\cb3             \{result.data.quotes?.map((q, i) => (\cb1 \
\cb3               <div key=\{i\} className=\cf6 \strokec6 "bg-slate-50 rounded-xl p-4 border border-slate-200"\cf0 \strokec4 >\cb1 \
\cb3                 <blockquote className=\cf6 \strokec6 "text-slate-700 italic mb-2"\cf0 \strokec4 >\cf6 \strokec6 "\{q.quote\}"\cf0 \strokec4 </blockquote>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "text-sm text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3                   \cf8 \strokec8 \'97\cf0 \strokec4  \{q.author\}, \{q.year\}\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3                   size=\cf6 \strokec6 "sm"\cf0 \strokec4  \cb1 \
\cb3                   variant=\cf6 \strokec6 "outline"\cf0 \strokec4  \cb1 \
\cb3                   className=\cf6 \strokec6 "mt-2"\cf0 \cb1 \strokec4 \
\cb3                   onClick=\{() => \{\cb1 \
\cb3                     onUpdateSlide(\{\cb1 \
\cb3                       ...slide,\cb1 \
\cb3                       content: [\cf6 \strokec6 `"\cf0 \strokec4 $\{q.quote\}\cf6 \strokec6 " \'97 \cf0 \strokec4 $\{q.author\}\cf6 \strokec6 `\cf0 \strokec4 ]\cb1 \
\cb3                     \});\cb1 \
\cb3                     toast.success(\cf6 \strokec6 'Quote added!'\cf0 \strokec4 );\cb1 \
\cb3                   \}\}\cb1 \
\cb3                 >\cb1 \
\cb3                   \cf5 \strokec5 Use\cf0 \strokec4  \cf2 \strokec2 this\cf0 \strokec4  quote\cb1 \
\cb3                 </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3               </div>\cb1 \
\cb3             ))\}\cb1 \
\cb3             \{result.data.verification_note && (\cb1 \
\cb3               <p className=\cf6 \strokec6 "text-xs text-amber-600"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 AlertTriangle\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 inline mr-1"\cf0 \strokec4  />\cb1 \
\cb3                 \{result.data.verification_note\}\cb1 \
\cb3               </p>\cb1 \
\cb3             )\}\cb1 \
\cb3           </div>\cb1 \
\cb3         );\cb1 \
\
\cb3       \cf2 \strokec2 default\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "h-full flex flex-col"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf9 \strokec9 /* Tabs */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex gap-1 p-2 bg-slate-100 rounded-xl mb-4"\cf0 \strokec4 >\cb1 \
\cb3         \{tabs.map(tab => \{\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = tab.icon;\cb1 \
\cb3           \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3             <button\cb1 \
\cb3               key=\{tab.id\}\cb1 \
\cb3               onClick=\{() => \{\cb1 \
\cb3                 setActiveTab(tab.id);\cb1 \
\cb3                 setResult(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3               \}\}\cb1 \
\cb3               className=\{\cf6 \strokec6 `flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-all \cf0 \strokec4 $\{\cb1 \
\cb3                 activeTab === tab.id\cb1 \
\cb3                   ? \cf6 \strokec6 'bg-white text-indigo-600 shadow-sm'\cf0 \cb1 \strokec4 \
\cb3                   : \cf6 \strokec6 'text-slate-500 hover:text-slate-700'\cf0 \cb1 \strokec4 \
\cb3               \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-3.5 h-3.5"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "hidden sm:inline"\cf0 \strokec4 >\{tab.label\}</span>\cb1 \
\cb3             </button>\cb1 \
\cb3           );\cb1 \
\cb3         \})\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf9 \strokec9 /* Content */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex-1 overflow-y-auto"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3           \{isProcessing ? (\cb1 \
\cb3             <motion.div\cb1 \
\cb3               key=\cf6 \strokec6 "loading"\cf0 \cb1 \strokec4 \
\cb3               initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3               exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "flex flex-col items-center justify-center py-12"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Loader2\cf0 \strokec4  className=\cf6 \strokec6 "w-8 h-8 text-indigo-600 animate-spin mb-3"\cf0 \strokec4  />\cb1 \
\cb3               <p className=\cf6 \strokec6 "text-sm text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4  is working...</p>\cb1 \
\cb3             </motion.div>\cb1 \
\cb3           ) : result ? (\cb1 \
\cb3             <motion.div\cb1 \
\cb3               key=\cf6 \strokec6 "result"\cf0 \cb1 \strokec4 \
\cb3               initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 10\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3               exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: -\cf7 \strokec7 10\cf0 \strokec4  \}\}\cb1 \
\cb3             >\cb1 \
\cb3               \{renderResult()\}\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3                 variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  \cb1 \
\cb3                 size=\cf6 \strokec6 "sm"\cf0 \strokec4  \cb1 \
\cb3                 onClick=\{() => setResult(\cf2 \strokec2 null\cf0 \strokec4 )\}\cb1 \
\cb3                 className=\cf6 \strokec6 "mt-4 w-full"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 \cf5 \strokec5 Try\cf0 \strokec4  again\cb1 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </motion.div>\cb1 \
\cb3           ) : (\cb1 \
\cb3             <motion.div\cb1 \
\cb3               key=\cf6 \strokec6 "actions"\cf0 \cb1 \strokec4 \
\cb3               initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3               exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3             >\cb1 \
\cb3               \{activeTab === \cf6 \strokec6 'enhance'\cf0 \strokec4  && (\cb1 \
\cb3                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-slate-600"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Improve\cf0 \strokec4  \cf2 \strokec2 this\cf0 \strokec4  slide\cf6 \strokec6 's clarity, impact, and adherence to design principles.\cf0 \cb1 \strokec4 \
\cb3                   </p>\cb1 \
\cb3                   <div className=\cf6 \strokec6 "grid grid-cols-2 gap-2"\cf0 \strokec4 >\cb1 \
\cb3                     \{quickActions.map(action => \{\cb1 \
\cb3                       \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = action.icon;\cb1 \
\cb3                       \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3                         <button\cb1 \
\cb3                           key=\{action.id\}\cb1 \
\cb3                           onClick=\{() => handleQuickAction(action.id)\}\cb1 \
\cb3                           className=\cf6 \strokec6 "flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left"\cf0 \cb1 \strokec4 \
\cb3                         >\cb1 \
\cb3                           <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{\cf6 \strokec6 `w-4 h-4 \cf0 \strokec4 $\{action.color\}\cf6 \strokec6 `\cf0 \strokec4 \} />\cb1 \
\cb3                           <span className=\cf6 \strokec6 "text-sm font-medium text-slate-700"\cf0 \strokec4 >\{action.label\}</span>\cb1 \
\cb3                         </button>\cb1 \
\cb3                       );\cb1 \
\cb3                     \})\}\cb1 \
\cb3                   </div>\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{handleEnhance\} className=\cf6 \strokec6 "w-full"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Wand2\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Full\cf0 \strokec4  \cf5 \strokec5 Enhancement\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               )\}\cb1 \
\
\cb3               \{activeTab === \cf6 \strokec6 'visuals'\cf0 \strokec4  && (\cb1 \
\cb3                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-slate-600"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Get\cf0 \strokec4  \cf5 \strokec5 AI\cf0 \strokec4  suggestions \cf2 \strokec2 for\cf0 \strokec4  images, icons, and illustrations that support your message.\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{handleSuggestVisuals\} className=\cf6 \strokec6 "w-full"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Image\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Get\cf0 \strokec4  \cf5 \strokec5 Visual\cf0 \strokec4  \cf5 \strokec5 Suggestions\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               )\}\cb1 \
\
\cb3               \{activeTab === \cf6 \strokec6 'chart'\cf0 \strokec4  && (\cb1 \
\cb3                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-slate-600"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 AI\cf0 \strokec4  will analyze your content and recommend the best chart type \cf2 \strokec2 for\cf0 \strokec4  your data.\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{handleChartAssistant\} className=\cf6 \strokec6 "w-full"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 BarChart3\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Get\cf0 \strokec4  \cf5 \strokec5 Chart\cf0 \strokec4  \cf5 \strokec5 Recommendation\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               )\}\cb1 \
\
\cb3               \{activeTab === \cf6 \strokec6 'quote'\cf0 \strokec4  && (\cb1 \
\cb3                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-slate-600"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Find\cf0 \strokec4  relevant, verified quotes \cf2 \strokec2 from\cf0 \strokec4  real sources to support your message.\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{handleSuggestQuote\} className=\cf6 \strokec6 "w-full"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Quote\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Find\cf0 \strokec4  \cf5 \strokec5 Quotes\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               )\}\cb1 \
\
\cb3               \{activeTab === \cf6 \strokec6 'ask'\cf0 \strokec4  && (\cb1 \
\cb3                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-slate-600"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Tell\cf0 \strokec4  \cf5 \strokec5 AI\cf0 \strokec4  what you want to change or improve about \cf2 \strokec2 this\cf0 \strokec4  slide.\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Textarea\cf0 \cb1 \strokec4 \
\cb3                     value=\{customPrompt\}\cb1 \
\cb3                     onChange=\{(e) => setCustomPrompt(e.target.value)\}\cb1 \
\cb3                     placeholder=\cf6 \strokec6 "e.g., Make this more persuasive, add statistics, simplify the language..."\cf0 \cb1 \strokec4 \
\cb3                     className=\cf6 \strokec6 "min-h-24"\cf0 \cb1 \strokec4 \
\cb3                   />\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3                     onClick=\{handleAskAI\} \cb1 \
\cb3                     disabled=\{!customPrompt.trim()\}\cb1 \
\cb3                     className=\cf6 \strokec6 "w-full"\cf0 \cb1 \strokec4 \
\cb3                   >\cb1 \
\cb3                     <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Apply\cf0 \strokec4  \cf5 \strokec5 Changes\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               )\}\cb1 \
\cb3             </motion.div>\cb1 \
\cb3           )\}\cb1 \
\cb3         </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}