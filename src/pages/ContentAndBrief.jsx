{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red19\green118\blue70;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c3529\c52549\c34510;\cssrgb\c80392\c19216\c19216;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Input\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Label\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/label"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Textarea\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/textarea"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Slider\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/slider"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ArrowRight\cf0 \strokec4 , \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 FileText\cf0 \strokec4 , \cf5 \strokec5 Upload\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 Users\cf0 \strokec4 , \cf5 \strokec5 Target\cf0 \strokec4 , \cf5 \strokec5 MessageSquare\cf0 \strokec4 , \cf5 \strokec5 Layers\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4 , useNavigate \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ProgressBar\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/presentation/ProgressBar'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 GeneratingAnimation\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/presentation/GeneratingAnimation'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ generateDeck \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/ai/PresentationAIService'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ContentAndBrief\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  navigate = useNavigate();\cb1 \
\cb3   \cb1 \
\cb3   \cf7 \cb3 \strokec7 // Content source\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedSource, setSelectedSource] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [pastedText, setPastedText] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [uploadedFile, setUploadedFile] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [aiPrompt, setAiPrompt] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cb1 \
\cb3   \cf7 \cb3 \strokec7 // Brief\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [goal, setGoal] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [audience, setAudience] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tone, setTone] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [slideCount, setSlideCount] = useState([\cf8 \cb3 \strokec8 10\cf0 \cb3 \strokec4 ]);\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedTemplate, setSelectedTemplate] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isGenerating, setIsGenerating] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  template = localStorage.getItem(\cf6 \strokec6 'selectedTemplate'\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (template) \{\cb1 \
\cb3       setSelectedTemplate(\cf5 \strokec5 JSON\cf0 \strokec4 .parse(template));\cb1 \
\cb3     \}\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  sources = [\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf6 \strokec6 'ai'\cf0 \strokec4 ,\cb1 \
\cb3       icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 ,\cb1 \
\cb3       title: \cf6 \strokec6 'AI generates it'\cf0 \strokec4 ,\cb1 \
\cb3       description: \cf6 \strokec6 'Just describe your topic'\cf0 \strokec4 ,\cb1 \
\cb3       color: \cf6 \strokec6 'from-purple-500 to-indigo-600'\cf0 \strokec4 ,\cb1 \
\cb3       recommended: \cf2 \strokec2 true\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf6 \strokec6 'paste'\cf0 \strokec4 ,\cb1 \
\cb3       icon: \cf5 \strokec5 FileText\cf0 \strokec4 ,\cb1 \
\cb3       title: \cf6 \strokec6 'Paste your text'\cf0 \strokec4 ,\cb1 \
\cb3       description: \cf6 \strokec6 'Paste outline or script'\cf0 \strokec4 ,\cb1 \
\cb3       color: \cf6 \strokec6 'from-blue-500 to-cyan-600'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf6 \strokec6 'upload'\cf0 \strokec4 ,\cb1 \
\cb3       icon: \cf5 \strokec5 Upload\cf0 \strokec4 ,\cb1 \
\cb3       title: \cf6 \strokec6 'Upload a file'\cf0 \strokec4 ,\cb1 \
\cb3       description: \cf6 \strokec6 'DOCX, PDF or TXT'\cf0 \strokec4 ,\cb1 \
\cb3       color: \cf6 \strokec6 'from-emerald-500 to-teal-600'\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  goals = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Inform'\cf0 \strokec4 , icon: \cf5 \strokec5 FileText\cf0 \strokec4 , label: \cf6 \strokec6 'Inform'\cf0 \strokec4 , description: \cf6 \strokec6 'Share knowledge'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Persuade'\cf0 \strokec4 , icon: \cf5 \strokec5 Target\cf0 \strokec4 , label: \cf6 \strokec6 'Persuade'\cf0 \strokec4 , description: \cf6 \strokec6 'Convince audience'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Teach'\cf0 \strokec4 , icon: \cf5 \strokec5 Users\cf0 \strokec4 , label: \cf6 \strokec6 'Teach'\cf0 \strokec4 , description: \cf6 \strokec6 'Educational content'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Pitch'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , label: \cf6 \strokec6 'Pitch'\cf0 \strokec4 , description: \cf6 \strokec6 'Sell an idea'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  audiences = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Colleagues'\cf0 \strokec4 , label: \cf6 \strokec6 'Colleagues'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55357 \u56404 '\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Clients'\cf0 \strokec4 , label: \cf6 \strokec6 'Clients'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55358 \u56605 '\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Students'\cf0 \strokec4 , label: \cf6 \strokec6 'Students'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55356 \u57235 '\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'General audience'\cf0 \strokec4 , label: \cf6 \strokec6 'General'\cf0 \strokec4 , emoji: \cf6 \strokec6 '\uc0\u55356 \u57101 '\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  tones = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Formal'\cf0 \strokec4 , label: \cf6 \strokec6 'Formal'\cf0 \strokec4 , color: \cf6 \strokec6 'bg-slate-100 text-slate-700 border-slate-200'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Neutral'\cf0 \strokec4 , label: \cf6 \strokec6 'Neutral'\cf0 \strokec4 , color: \cf6 \strokec6 'bg-blue-50 text-blue-700 border-blue-200'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Friendly'\cf0 \strokec4 , label: \cf6 \strokec6 'Friendly'\cf0 \strokec4 , color: \cf6 \strokec6 'bg-amber-50 text-amber-700 border-amber-200'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Playful'\cf0 \strokec4 , label: \cf6 \strokec6 'Playful'\cf0 \strokec4 , color: \cf6 \strokec6 'bg-pink-50 text-pink-700 border-pink-200'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleFileUpload = (e) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  file = e.target.files[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ];\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (file) \{\cb1 \
\cb3       setUploadedFile(file);\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleGenerate = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!goal || !audience || !selectedSource) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\
\cb3     setIsGenerating(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  contentText = selectedSource === \cf6 \strokec6 'paste'\cf0 \strokec4  ? pastedText : \cb1 \
\cb3                          selectedSource === \cf6 \strokec6 'ai'\cf0 \strokec4  ? aiPrompt : \cb1 \
\cb3                          uploadedFile?.name || \cf6 \strokec6 ''\cf0 \strokec4 ;\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Create presentation\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  presentation = \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .create(\{\cb1 \
\cb3         template_id: \cf5 \strokec5 String\cf0 \strokec4 (selectedTemplate?.id),\cb1 \
\cb3         template_name: selectedTemplate?.name,\cb1 \
\cb3         template_category: selectedTemplate?.category,\cb1 \
\cb3         content_source: selectedSource,\cb1 \
\cb3         content_text: contentText,\cb1 \
\cb3         title: \cf6 \strokec6 `\cf0 \strokec4 $\{goal\}\cf6 \strokec6  Presentation`\cf0 \strokec4 ,\cb1 \
\cb3         goal,\cb1 \
\cb3         audience,\cb1 \
\cb3         tone: tone || \cf6 \strokec6 'Neutral'\cf0 \strokec4 ,\cb1 \
\cb3         slide_count: slideCount[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ],\cb1 \
\cb3         status: \cf6 \strokec6 'draft'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Use the AI service to generate slides with design-first principles\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  aiResponse = \cf2 \strokec2 await\cf0 \strokec4  generateDeck(\{\cb1 \
\cb3         topic: contentText,\cb1 \
\cb3         goal,\cb1 \
\cb3         audience,\cb1 \
\cb3         tone: tone || \cf6 \strokec6 'Neutral'\cf0 \strokec4 ,\cb1 \
\cb3         slidesCount: slideCount[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ],\cb1 \
\cb3         templateId: selectedTemplate?.id,\cb1 \
\cb3         templateName: selectedTemplate?.name,\cb1 \
\cb3         language: \cf6 \strokec6 'en'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .update(presentation.id, \{\cb1 \
\cb3         slides: aiResponse.slides,\cb1 \
\cb3         status: \cf6 \strokec6 'editing'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       navigate(createPageUrl(\cf6 \strokec6 `Editor?id=\cf0 \strokec4 $\{presentation.id\}\cf6 \strokec6 `\cf0 \strokec4 ));\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       console.error(\cf6 \strokec6 'Error generating presentation:'\cf0 \strokec4 , error);\cb1 \
\cb3       alert(\cf6 \strokec6 'Error generating presentation: '\cf0 \strokec4  + error.message);\cb1 \
\cb3       setIsGenerating(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  canContinue = () => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  hasContent = selectedSource === \cf6 \strokec6 'paste'\cf0 \strokec4  ? pastedText.trim().length > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  :\cb1 \
\cb3                       selectedSource === \cf6 \strokec6 'upload'\cf0 \strokec4  ? uploadedFile !== \cf2 \strokec2 null\cf0 \strokec4  :\cb1 \
\cb3                       selectedSource === \cf6 \strokec6 'ai'\cf0 \strokec4  ? aiPrompt.trim().length > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  : \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  goal && audience && hasContent;\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isGenerating) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 GeneratingAnimation\cf0 \strokec4  slideCount=\{slideCount[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ]\} />;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-slate-50 pb-28 sm:pb-32"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf7 \cb3 \strokec7 /* Header */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white border-b border-slate-200 sticky top-0 z-40"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 ProgressBar\cf0 \strokec4  currentStep=\{\cf8 \cb3 \strokec8 2\cf0 \cb3 \strokec4 \} />\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf7 \cb3 \strokec7 /* Page Title */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "text-center mb-8 sm:mb-12"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <h1 className=\cf6 \strokec6 "text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Tell\cf0 \strokec4  us about your presentation\cb1 \
\cb3           </h1>\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-sm sm:text-lg text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 We\cf6 \strokec6 'll create the perfect slides for you\cf0 \cb1 \strokec4 \
\cb3           </p>\cb1 \
\cb3         </motion.div>\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "space-y-8 sm:space-y-10"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf7 \cb3 \strokec7 /* Content Source Selection */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <motion.section\cb1 \
\cb3             initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ delay: \cf8 \cb3 \strokec8 0.1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs sm:text-sm font-bold text-indigo-600"\cf0 \strokec4 >\cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 </div>\cb1 \
\cb3               <h2 className=\cf6 \strokec6 "text-base sm:text-lg font-semibold text-slate-800"\cf0 \strokec4 >\cf5 \strokec5 How\cf0 \strokec4  \cf2 \strokec2 do\cf0 \strokec4  you want to add content?</h2>\cb1 \
\cb3             </div>\cb1 \
\cb3             \cb1 \
\cb3             <div className=\cf6 \strokec6 "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"\cf0 \strokec4 >\cb1 \
\cb3               \{sources.map(source => \{\cb1 \
\cb3                 \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = source.icon;\cb1 \
\cb3                 \cf2 \strokec2 const\cf0 \strokec4  isSelected = selectedSource === source.id;\cb1 \
\cb3                 \cb1 \
\cb3                 \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3                   <motion.button\cb1 \
\cb3                     key=\{source.id\}\cb1 \
\cb3                     whileTap=\{\{ scale: \cf8 \cb3 \strokec8 0.98\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                     className=\{cn(\cb1 \
\cb3                       \cf6 \strokec6 "relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 transition-all text-left"\cf0 \strokec4 ,\cb1 \
\cb3                       isSelected\cb1 \
\cb3                         ? \cf6 \strokec6 "border-indigo-600 bg-indigo-50 shadow-lg shadow-indigo-500/10"\cf0 \cb1 \strokec4 \
\cb3                         : \cf6 \strokec6 "border-slate-200 bg-white hover:border-slate-300"\cf0 \cb1 \strokec4 \
\cb3                     )\}\cb1 \
\cb3                     onClick=\{() => setSelectedSource(source.id)\}\cb1 \
\cb3                   >\cb1 \
\cb3                     \{source.recommended && (\cb1 \
\cb3                       <div className=\cf6 \strokec6 "absolute -top-2.5 sm:-top-3 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] sm:text-xs font-medium rounded-full"\cf0 \strokec4 >\cb1 \
\cb3                         \cf5 \strokec5 Recommended\cf0 \cb1 \strokec4 \
\cb3                       </div>\cb1 \
\cb3                     )\}\cb1 \
\cb3                     <div className=\cf6 \strokec6 "flex sm:block items-center gap-3"\cf0 \strokec4 >\cb1 \
\cb3                       <div className=\{cn(\cb1 \
\cb3                         \cf6 \strokec6 "w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center sm:mb-4 flex-shrink-0"\cf0 \strokec4 ,\cb1 \
\cb3                         isSelected ? \cf6 \strokec6 `bg-gradient-to-r \cf0 \strokec4 $\{source.color\}\cf6 \strokec6 `\cf0 \strokec4  : \cf6 \strokec6 "bg-slate-100"\cf0 \cb1 \strokec4 \
\cb3                       )\}>\cb1 \
\cb3                         <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{cn(\cf6 \strokec6 "w-5 h-5 sm:w-6 sm:h-6"\cf0 \strokec4 , isSelected ? \cf6 \strokec6 "text-white"\cf0 \strokec4  : \cf6 \strokec6 "text-slate-500"\cf0 \strokec4 )\} />\cb1 \
\cb3                       </div>\cb1 \
\cb3                       <div className=\cf6 \strokec6 "min-w-0"\cf0 \strokec4 >\cb1 \
\cb3                         <h3 className=\{cn(\cb1 \
\cb3                           \cf6 \strokec6 "font-semibold text-sm sm:text-base mb-0.5 sm:mb-1"\cf0 \strokec4 ,\cb1 \
\cb3                           isSelected ? \cf6 \strokec6 "text-indigo-900"\cf0 \strokec4  : \cf6 \strokec6 "text-slate-800"\cf0 \cb1 \strokec4 \
\cb3                         )\}>\cb1 \
\cb3                           \{source.title\}\cb1 \
\cb3                         </h3>\cb1 \
\cb3                         <p className=\cf6 \strokec6 "text-xs sm:text-sm text-slate-500"\cf0 \strokec4 >\{source.description\}</p>\cb1 \
\cb3                       </div>\cb1 \
\cb3                     </div>\cb1 \
\cb3                     \cb1 \
\cb3                     \{isSelected && (\cb1 \
\cb3                       <motion.div\cb1 \
\cb3                         initial=\{\{ scale: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                         animate=\{\{ scale: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                         className=\cf6 \strokec6 "absolute top-3 sm:top-4 right-3 sm:right-4 w-5 h-5 sm:w-6 sm:h-6 bg-indigo-600 rounded-full flex items-center justify-center"\cf0 \cb1 \strokec4 \
\cb3                       >\cb1 \
\cb3                         <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 sm:w-4 sm:h-4 text-white"\cf0 \strokec4  />\cb1 \
\cb3                       </motion.div>\cb1 \
\cb3                     )\}\cb1 \
\cb3                   </motion.button>\cb1 \
\cb3                 );\cb1 \
\cb3               \})\}\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf7 \cb3 \strokec7 /* Content Input */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3               \{selectedSource && (\cb1 \
\cb3                 <motion.div\cb1 \
\cb3                   key=\{selectedSource\}\cb1 \
\cb3                   initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , height: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                   animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , height: \cf6 \strokec6 'auto'\cf0 \strokec4  \}\}\cb1 \
\cb3                   exit=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , height: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "mt-6"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   \{selectedSource === \cf6 \strokec6 'ai'\cf0 \strokec4  && (\cb1 \
\cb3                     <div className=\cf6 \strokec6 "bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 border border-indigo-100"\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-base font-semibold mb-3 block text-indigo-900"\cf0 \strokec4 >\cb1 \
\cb3                         \cf5 \strokec5 What\cf6 \strokec6 's your presentation about?\cf0 \cb1 \strokec4 \
\cb3                       </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Textarea\cf0 \cb1 \strokec4 \
\cb3                         placeholder=\cf6 \strokec6 "Example: A pitch deck for my AI startup that helps small businesses automate their customer support. Include market opportunity, our solution, team, and funding ask..."\cf0 \cb1 \strokec4 \
\cb3                         className=\cf6 \strokec6 "min-h-40 text-base resize-none bg-white border-indigo-200 focus:border-indigo-400"\cf0 \cb1 \strokec4 \
\cb3                         value=\{aiPrompt\}\cb1 \
\cb3                         onChange=\{(e) => setAiPrompt(e.target.value)\}\cb1 \
\cb3                       />\cb1 \
\cb3                       <p className=\cf6 \strokec6 "text-sm text-indigo-600 mt-2"\cf0 \strokec4 >\cb1 \
\cb3                         \cf9 \cb3 \strokec9 \uc0\u55357 \u56481 \cf0 \cb3 \strokec4  \cf5 \strokec5 Tip\cf0 \strokec4 : \cf5 \strokec5 The\cf0 \strokec4  more details you provide, the better your presentation will be\cb1 \
\cb3                       </p>\cb1 \
\cb3                     </div>\cb1 \
\cb3                   )\}\cb1 \
\
\cb3                   \{selectedSource === \cf6 \strokec6 'paste'\cf0 \strokec4  && (\cb1 \
\cb3                     <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-base font-semibold mb-3 block"\cf0 \strokec4 >\cf5 \strokec5 Your\cf0 \strokec4  content</\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Textarea\cf0 \cb1 \strokec4 \
\cb3                         placeholder=\cf6 \strokec6 "Paste your text, outline, or script here..."\cf0 \cb1 \strokec4 \
\cb3                         className=\cf6 \strokec6 "min-h-40 text-base resize-none"\cf0 \cb1 \strokec4 \
\cb3                         value=\{pastedText\}\cb1 \
\cb3                         onChange=\{(e) => setPastedText(e.target.value)\}\cb1 \
\cb3                       />\cb1 \
\cb3                     </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3                   )\}\cb1 \
\
\cb3                   \{selectedSource === \cf6 \strokec6 'upload'\cf0 \strokec4  && (\cb1 \
\cb3                     <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6"\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-base font-semibold mb-3 block"\cf0 \strokec4 >\cf5 \strokec5 Upload\cf0 \strokec4  file</\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3                       <div className=\cf6 \strokec6 "border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-indigo-400 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3                         <input\cb1 \
\cb3                           type=\cf6 \strokec6 "file"\cf0 \cb1 \strokec4 \
\cb3                           id=\cf6 \strokec6 "file-upload"\cf0 \cb1 \strokec4 \
\cb3                           className=\cf6 \strokec6 "hidden"\cf0 \cb1 \strokec4 \
\cb3                           accept=\cf6 \strokec6 ".docx,.pdf,.txt"\cf0 \cb1 \strokec4 \
\cb3                           onChange=\{handleFileUpload\}\cb1 \
\cb3                         />\cb1 \
\cb3                         <label htmlFor=\cf6 \strokec6 "file-upload"\cf0 \strokec4  className=\cf6 \strokec6 "cursor-pointer"\cf0 \strokec4 >\cb1 \
\cb3                           <\cf5 \strokec5 Upload\cf0 \strokec4  className=\cf6 \strokec6 "w-12 h-12 text-slate-400 mx-auto mb-4"\cf0 \strokec4  />\cb1 \
\cb3                           <p className=\cf6 \strokec6 "text-lg font-medium text-slate-700"\cf0 \strokec4 >\cb1 \
\cb3                             \{uploadedFile ? uploadedFile.name : \cf6 \strokec6 'Click to upload'\cf0 \strokec4 \}\cb1 \
\cb3                           </p>\cb1 \
\cb3                           <p className=\cf6 \strokec6 "text-sm text-slate-500 mt-2"\cf0 \strokec4 >\cf5 \strokec5 DOCX\cf0 \strokec4 , \cf5 \strokec5 PDF\cf0 \strokec4 , \cf5 \strokec5 TXT\cf0 \strokec4  (max \cf8 \cb3 \strokec8 10\cf5 \cb3 \strokec5 MB\cf0 \strokec4 )</p>\cb1 \
\cb3                         </label>\cb1 \
\cb3                       </div>\cb1 \
\cb3                     </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3                   )\}\cb1 \
\cb3                 </motion.div>\cb1 \
\cb3               )\}\cb1 \
\cb3             </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3           </motion.section>\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* Goal Selection */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <motion.section\cb1 \
\cb3             initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ delay: \cf8 \cb3 \strokec8 0.2\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs sm:text-sm font-bold text-indigo-600"\cf0 \strokec4 >\cf8 \cb3 \strokec8 2\cf0 \cb3 \strokec4 </div>\cb1 \
\cb3               <h2 className=\cf6 \strokec6 "text-base sm:text-lg font-semibold text-slate-800"\cf0 \strokec4 >\cf5 \strokec5 What\cf6 \strokec6 's the goal?</h2>\cf0 \cb1 \strokec4 \
\cb3             </div>\cb1 \
\cb3             \cb1 \
\cb3             <div className=\cf6 \strokec6 "grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3"\cf0 \strokec4 >\cb1 \
\cb3               \{goals.map(g => \{\cb1 \
\cb3                 \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = g.icon;\cb1 \
\cb3                 \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3                   <button\cb1 \
\cb3                     key=\{g.id\}\cb1 \
\cb3                     onClick=\{() => setGoal(g.id)\}\cb1 \
\cb3                     className=\{cn(\cb1 \
\cb3                       \cf6 \strokec6 "p-3 sm:p-4 rounded-xl border-2 text-left transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                       goal === g.id\cb1 \
\cb3                         ? \cf6 \strokec6 "border-indigo-600 bg-indigo-50"\cf0 \cb1 \strokec4 \
\cb3                         : \cf6 \strokec6 "border-slate-200 bg-white hover:border-slate-300"\cf0 \cb1 \strokec4 \
\cb3                     )\}\cb1 \
\cb3                   >\cb1 \
\cb3                     <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{cn(\cb1 \
\cb3                       \cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5 mb-1.5 sm:mb-2"\cf0 \strokec4 ,\cb1 \
\cb3                       goal === g.id ? \cf6 \strokec6 "text-indigo-600"\cf0 \strokec4  : \cf6 \strokec6 "text-slate-400"\cf0 \cb1 \strokec4 \
\cb3                     )\} />\cb1 \
\cb3                     <div className=\cf6 \strokec6 "font-medium text-sm sm:text-base text-slate-800"\cf0 \strokec4 >\{g.label\}</div>\cb1 \
\cb3                     <div className=\cf6 \strokec6 "text-[10px] sm:text-xs text-slate-500 hidden sm:block"\cf0 \strokec4 >\{g.description\}</div>\cb1 \
\cb3                   </button>\cb1 \
\cb3                 );\cb1 \
\cb3               \})\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.section>\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* Audience Selection */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <motion.section\cb1 \
\cb3             initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ delay: \cf8 \cb3 \strokec8 0.3\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs sm:text-sm font-bold text-indigo-600"\cf0 \strokec4 >\cf8 \cb3 \strokec8 3\cf0 \cb3 \strokec4 </div>\cb1 \
\cb3               <h2 className=\cf6 \strokec6 "text-base sm:text-lg font-semibold text-slate-800"\cf0 \strokec4 >\cf5 \strokec5 Who\cf6 \strokec6 's your audience?</h2>\cf0 \cb1 \strokec4 \
\cb3             </div>\cb1 \
\cb3             \cb1 \
\cb3             <div className=\cf6 \strokec6 "grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3"\cf0 \strokec4 >\cb1 \
\cb3               \{audiences.map(a => (\cb1 \
\cb3                 <button\cb1 \
\cb3                   key=\{a.id\}\cb1 \
\cb3                   onClick=\{() => setAudience(a.id)\}\cb1 \
\cb3                   className=\{cn(\cb1 \
\cb3                     \cf6 \strokec6 "px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border-2 font-medium transition-all flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-base"\cf0 \strokec4 ,\cb1 \
\cb3                     audience === a.id\cb1 \
\cb3                       ? \cf6 \strokec6 "border-indigo-600 bg-indigo-50 text-indigo-900"\cf0 \cb1 \strokec4 \
\cb3                       : \cf6 \strokec6 "border-slate-200 bg-white text-slate-600 hover:border-slate-300"\cf0 \cb1 \strokec4 \
\cb3                   )\}\cb1 \
\cb3                 >\cb1 \
\cb3                   <span>\{a.emoji\}</span>\cb1 \
\cb3                   \{a.label\}\cb1 \
\cb3                 </button>\cb1 \
\cb3               ))\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.section>\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* Tone & Slides */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <motion.section\cb1 \
\cb3             initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ delay: \cf8 \cb3 \strokec8 0.4\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "grid sm:grid-cols-2 gap-6 sm:gap-8"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs sm:text-sm font-bold text-indigo-600"\cf0 \strokec4 >\cf8 \cb3 \strokec8 4\cf0 \cb3 \strokec4 </div>\cb1 \
\cb3                 <h2 className=\cf6 \strokec6 "text-base sm:text-lg font-semibold text-slate-800"\cf0 \strokec4 >\cf5 \strokec5 Tone\cf0 \strokec4  (optional)</h2>\cb1 \
\cb3               </div>\cb1 \
\cb3               \cb1 \
\cb3               <div className=\cf6 \strokec6 "flex flex-wrap gap-2"\cf0 \strokec4 >\cb1 \
\cb3                 \{tones.map(t => (\cb1 \
\cb3                   <button\cb1 \
\cb3                     key=\{t.id\}\cb1 \
\cb3                     onClick=\{() => setTone(tone === t.id ? \cf6 \strokec6 ''\cf0 \strokec4  : t.id)\}\cb1 \
\cb3                     className=\{cn(\cb1 \
\cb3                       \cf6 \strokec6 "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                       tone === t.id\cb1 \
\cb3                         ? \cf6 \strokec6 "border-indigo-600 bg-indigo-50 text-indigo-700"\cf0 \cb1 \strokec4 \
\cb3                         : t.color\cb1 \
\cb3                     )\}\cb1 \
\cb3                   >\cb1 \
\cb3                     \{t.label\}\cb1 \
\cb3                   </button>\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\
\cb3             <div>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs sm:text-sm font-bold text-indigo-600"\cf0 \strokec4 >\cf8 \cb3 \strokec8 5\cf0 \cb3 \strokec4 </div>\cb1 \
\cb3                 <h2 className=\cf6 \strokec6 "text-base sm:text-lg font-semibold text-slate-800"\cf0 \strokec4 >\cf5 \strokec5 Number\cf0 \strokec4  \cf2 \strokec2 of\cf0 \strokec4  slides</h2>\cb1 \
\cb3               </div>\cb1 \
\cb3               \cb1 \
\cb3               <div className=\cf6 \strokec6 "bg-white rounded-xl p-4 sm:p-6 border border-slate-200"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex items-center justify-between mb-3 sm:mb-4"\cf0 \strokec4 >\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-2xl sm:text-3xl font-bold text-indigo-600"\cf0 \strokec4 >\{slideCount[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ]\}</span>\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-xs sm:text-sm text-slate-500"\cf0 \strokec4 >slides</span>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <\cf5 \strokec5 Slider\cf0 \cb1 \strokec4 \
\cb3                   value=\{slideCount\}\cb1 \
\cb3                   onValueChange=\{setSlideCount\}\cb1 \
\cb3                   min=\{\cf8 \cb3 \strokec8 5\cf0 \cb3 \strokec4 \}\cb1 \
\cb3                   max=\{\cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4 \}\cb1 \
\cb3                   step=\{\cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 \}\cb1 \
\cb3                   className=\cf6 \strokec6 "w-full"\cf0 \cb1 \strokec4 \
\cb3                 />\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex justify-between text-xs text-slate-400 mt-2"\cf0 \strokec4 >\cb1 \
\cb3                   <span>\cf8 \cb3 \strokec8 5\cf0 \cb3 \strokec4 </span>\cb1 \
\cb3                   <span>\cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4 </span>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.section>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \cb3 \strokec7 /* Bottom Navigation */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 py-3 sm:py-4 px-4 sm:px-6 shadow-2xl shadow-slate-900/10 safe-area-bottom"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-5xl mx-auto flex items-center justify-between gap-3"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'Templates'\cf0 \strokec4 )\}>\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  size=\cf6 \strokec6 "sm"\cf0 \strokec4  className=\cf6 \strokec6 "gap-1 sm:gap-2 px-2 sm:px-4"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "hidden sm:inline"\cf0 \strokec4 >\cf5 \strokec5 Back\cf0 \strokec4 </span>\cb1 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3           \cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-3 sm:gap-4"\cf0 \strokec4 >\cb1 \
\cb3             \{selectedTemplate && (\cb1 \
\cb3               <div className=\cf6 \strokec6 "hidden lg:flex items-center gap-3 text-sm text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3                 <img src=\{selectedTemplate.cover\} alt=\cf6 \strokec6 ""\cf0 \strokec4  className=\cf6 \strokec6 "w-12 h-8 object-cover rounded"\cf0 \strokec4  />\cb1 \
\cb3                 <span>\{selectedTemplate.name\}</span>\cb1 \
\cb3               </div>\cb1 \
\cb3             )\}\cb1 \
\cb3             \cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3               size=\cf6 \strokec6 "lg"\cf0 \cb1 \strokec4 \
\cb3               disabled=\{!canContinue() || isGenerating\}\cb1 \
\cb3               className=\cf6 \strokec6 "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-xl shadow-lg disabled:opacity-50 transition-all hover:shadow-xl gap-1.5 sm:gap-2"\cf0 \cb1 \strokec4 \
\cb3               onClick=\{handleGenerate\}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "hidden sm:inline"\cf0 \strokec4 >\cf5 \strokec5 Generate\cf0 \strokec4  \cf5 \strokec5 Presentation\cf0 \strokec4 </span>\cb1 \
\cb3               <span className=\cf6 \strokec6 "sm:hidden"\cf0 \strokec4 >\cf5 \strokec5 Generate\cf0 \strokec4 </span>\cb1 \
\cb3               <\cf5 \strokec5 ArrowRight\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5"\cf0 \strokec4  />\cb1 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}