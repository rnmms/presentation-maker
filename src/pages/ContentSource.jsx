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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Textarea\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/textarea"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ArrowRight\cf0 \strokec4 , \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 FileText\cf0 \strokec4 , \cf5 \strokec5 Upload\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ProgressBar\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/presentation/ProgressBar'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ContentSource\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedSource, setSelectedSource] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [pastedText, setPastedText] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [uploadedFile, setUploadedFile] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [aiPrompt, setAiPrompt] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  sources = [\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf6 \strokec6 'paste'\cf0 \strokec4 ,\cb1 \
\cb3       icon: \cf5 \strokec5 FileText\cf0 \strokec4 ,\cb1 \
\cb3       title: \cf6 \strokec6 'Paste your text'\cf0 \strokec4 ,\cb1 \
\cb3       description: \cf6 \strokec6 'Paste your outline or script. We\\'ll turn it into slides.'\cf0 \strokec4 ,\cb1 \
\cb3       color: \cf6 \strokec6 'indigo'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf6 \strokec6 'upload'\cf0 \strokec4 ,\cb1 \
\cb3       icon: \cf5 \strokec5 Upload\cf0 \strokec4 ,\cb1 \
\cb3       title: \cf6 \strokec6 'Upload a file'\cf0 \strokec4 ,\cb1 \
\cb3       description: \cf6 \strokec6 'Upload DOCX, PDF or TXT. We\\'ll extract the key points.'\cf0 \strokec4 ,\cb1 \
\cb3       color: \cf6 \strokec6 'purple'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf6 \strokec6 'ai'\cf0 \strokec4 ,\cb1 \
\cb3       icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 ,\cb1 \
\cb3       title: \cf6 \strokec6 'Let AI write it'\cf0 \strokec4 ,\cb1 \
\cb3       description: \cf6 \strokec6 'Describe your topic; AI generates the content.'\cf0 \strokec4 ,\cb1 \
\cb3       color: \cf6 \strokec6 'pink'\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleFileUpload = (e) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  file = e.target.files[\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ];\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (file) \{\cb1 \
\cb3       setUploadedFile(file);\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleContinue = () => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  contentData = \{\cb1 \
\cb3       source: selectedSource,\cb1 \
\cb3       content: selectedSource === \cf6 \strokec6 'paste'\cf0 \strokec4  ? pastedText : selectedSource === \cf6 \strokec6 'ai'\cf0 \strokec4  ? aiPrompt : uploadedFile?.name\cb1 \
\cb3     \};\cb1 \
\cb3     localStorage.setItem(\cf6 \strokec6 'contentSource'\cf0 \strokec4 , \cf5 \strokec5 JSON\cf0 \strokec4 .stringify(contentData));\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  canContinue = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (selectedSource === \cf6 \strokec6 'paste'\cf0 \strokec4 ) \cf2 \strokec2 return\cf0 \strokec4  pastedText.trim().length > \cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (selectedSource === \cf6 \strokec6 'upload'\cf0 \strokec4 ) \cf2 \strokec2 return\cf0 \strokec4  uploadedFile !== \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (selectedSource === \cf6 \strokec6 'ai'\cf0 \strokec4 ) \cf2 \strokec2 return\cf0 \strokec4  aiPrompt.trim().length > \cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf8 \cb3 \strokec8 /* Header */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-lg bg-white/90"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'Templates'\cf0 \strokec4 )\}>\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  size=\cf6 \strokec6 "sm"\cf0 \strokec4  className=\cf6 \strokec6 "gap-2"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Back\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "text-center flex-1"\cf0 \strokec4 >\cb1 \
\cb3             <h2 className=\cf6 \strokec6 "text-sm font-medium text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 Step\cf0 \strokec4  \cf7 \cb3 \strokec7 2\cf0 \cb3 \strokec4  \cf2 \strokec2 of\cf0 \strokec4  \cf7 \cb3 \strokec7 4\cf0 \cb3 \strokec4 </h2>\cb1 \
\cb3           </div>\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-20"\cf0 \strokec4  />\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-6 py-12"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 ProgressBar\cf0 \strokec4  currentStep=\{\cf7 \cb3 \strokec7 2\cf0 \cb3 \strokec4 \} />\cb1 \
\
\cb3         \{\cf8 \cb3 \strokec8 /* Title */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "text-center mb-12"\cf0 \strokec4 >\cb1 \
\cb3           <h1 className=\cf6 \strokec6 "text-5xl font-bold text-slate-900 mb-4"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 How\cf0 \strokec4  \cf2 \strokec2 do\cf0 \strokec4  you want to add content?\cb1 \
\cb3           </h1>\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-xl text-slate-600 max-w-2xl mx-auto"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Choose\cf0 \strokec4  your preferred way to bring content into your presentation.\cb1 \
\cb3           </p>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-24"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf8 \cb3 \strokec8 /* Left Column - Source Options */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             \{sources.map(source => \{\cb1 \
\cb3               \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = source.icon;\cb1 \
\cb3               \cf2 \strokec2 const\cf0 \strokec4  isSelected = selectedSource === source.id;\cb1 \
\cb3               \cb1 \
\cb3               \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3                 <\cf5 \strokec5 Card\cf0 \cb1 \strokec4 \
\cb3                   key=\{source.id\}\cb1 \
\cb3                   className=\{\cf6 \strokec6 `p-6 cursor-pointer transition-all duration-300 hover:shadow-xl \cf0 \strokec4 $\{\cb1 \
\cb3                     isSelected\cb1 \
\cb3                       ? \cf6 \strokec6 'ring-4 ring-indigo-500 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50'\cf0 \cb1 \strokec4 \
\cb3                       : \cf6 \strokec6 'hover:ring-2 hover:ring-indigo-200'\cf0 \cb1 \strokec4 \
\cb3                   \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3                   onClick=\{() => setSelectedSource(source.id)\}\cb1 \
\cb3                 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "flex items-start gap-4"\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\{\cf6 \strokec6 `p-4 rounded-xl bg-\cf0 \strokec4 $\{source.color\}\cf6 \strokec6 -100 flex-shrink-0`\cf0 \strokec4 \}>\cb1 \
\cb3                       <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{\cf6 \strokec6 `w-8 h-8 text-\cf0 \strokec4 $\{source.color\}\cf6 \strokec6 -600`\cf0 \strokec4 \} />\cb1 \
\cb3                     </div>\cb1 \
\cb3                     <div className=\cf6 \strokec6 "flex-1"\cf0 \strokec4 >\cb1 \
\cb3                       <div className=\cf6 \strokec6 "flex items-center gap-2 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                         <h3 className=\cf6 \strokec6 "text-xl font-semibold text-slate-800"\cf0 \strokec4 >\{source.title\}</h3>\cb1 \
\cb3                         \{isSelected && (\cb1 \
\cb3                           <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-indigo-600"\cf0 \strokec4  />\cb1 \
\cb3                         )\}\cb1 \
\cb3                       </div>\cb1 \
\cb3                       <p className=\cf6 \strokec6 "text-slate-600"\cf0 \strokec4 >\{source.description\}</p>\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3               );\cb1 \
\cb3             \})\}\cb1 \
\cb3             \cb1 \
\cb3             <div className=\cf6 \strokec6 "mt-6 p-4 bg-blue-50 rounded-xl"\cf0 \strokec4 >\cb1 \
\cb3               <p className=\cf6 \strokec6 "text-sm text-blue-800"\cf0 \strokec4 >\cb1 \
\cb3                 \cf9 \cb3 \strokec9 \uc0\u55357 \u56481 \cf0 \cb3 \strokec4  <strong>\cf5 \strokec5 Tip\cf0 \strokec4 :</strong> \cf5 \strokec5 You\cf0 \strokec4  can edit all content later \cf2 \strokec2 in\cf0 \strokec4  the live editor.\cb1 \
\cb3               </p>\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf8 \cb3 \strokec8 /* Right Column - Input Area */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "lg:sticky lg:top-32 h-fit"\cf0 \strokec4 >\cb1 \
\cb3             \{selectedSource === \cf6 \strokec6 'paste'\cf0 \strokec4  && (\cb1 \
\cb3               <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6 h-full"\cf0 \strokec4 >\cb1 \
\cb3                 <h3 className=\cf6 \strokec6 "text-lg font-semibold text-slate-800 mb-4"\cf0 \strokec4 >\cf5 \strokec5 Paste\cf0 \strokec4  your content</h3>\cb1 \
\cb3                 <\cf5 \strokec5 Textarea\cf0 \cb1 \strokec4 \
\cb3                   placeholder=\cf6 \strokec6 "Paste your text, outline, or script here...&#10;&#10;Example:&#10;Title: Marketing Strategy Q4&#10;&#10;Introduction&#10;- Overview of Q4 goals&#10;- Team structure&#10;&#10;Market Analysis&#10;- Current trends&#10;- Competitor insights"\cf0 \cb1 \strokec4 \
\cb3                   className=\cf6 \strokec6 "min-h-96 text-base resize-none"\cf0 \cb1 \strokec4 \
\cb3                   value=\{pastedText\}\cb1 \
\cb3                   onChange=\{(e) => setPastedText(e.target.value)\}\cb1 \
\cb3                 />\cb1 \
\cb3                 <p className=\cf6 \strokec6 "text-sm text-slate-500 mt-4"\cf0 \strokec4 >\cb1 \
\cb3                   \{pastedText.length\} characters\cb1 \
\cb3                 </p>\cb1 \
\cb3               </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3             )\}\cb1 \
\
\cb3             \{selectedSource === \cf6 \strokec6 'upload'\cf0 \strokec4  && (\cb1 \
\cb3               <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6 h-full"\cf0 \strokec4 >\cb1 \
\cb3                 <h3 className=\cf6 \strokec6 "text-lg font-semibold text-slate-800 mb-4"\cf0 \strokec4 >\cf5 \strokec5 Upload\cf0 \strokec4  a file</h3>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "border-2 border-dashed border-slate-300 rounded-xl p-12 text-center hover:border-indigo-400 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3                   <input\cb1 \
\cb3                     type=\cf6 \strokec6 "file"\cf0 \cb1 \strokec4 \
\cb3                     id=\cf6 \strokec6 "file-upload"\cf0 \cb1 \strokec4 \
\cb3                     className=\cf6 \strokec6 "hidden"\cf0 \cb1 \strokec4 \
\cb3                     accept=\cf6 \strokec6 ".docx,.pdf,.txt"\cf0 \cb1 \strokec4 \
\cb3                     onChange=\{handleFileUpload\}\cb1 \
\cb3                   />\cb1 \
\cb3                   <label htmlFor=\cf6 \strokec6 "file-upload"\cf0 \strokec4  className=\cf6 \strokec6 "cursor-pointer"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Upload\cf0 \strokec4  className=\cf6 \strokec6 "w-16 h-16 text-slate-400 mx-auto mb-4"\cf0 \strokec4  />\cb1 \
\cb3                     <p className=\cf6 \strokec6 "text-lg font-medium text-slate-700 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                       \{uploadedFile ? uploadedFile.name : \cf6 \strokec6 'Click to upload or drag and drop'\cf0 \strokec4 \}\cb1 \
\cb3                     </p>\cb1 \
\cb3                     <p className=\cf6 \strokec6 "text-sm text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3                       \cf5 \strokec5 Supports\cf0 \strokec4  \cf5 \strokec5 DOCX\cf0 \strokec4 , \cf5 \strokec5 PDF\cf0 \strokec4 , \cf5 \strokec5 TXT\cf0 \strokec4  (max \cf7 \cb3 \strokec7 10\cf5 \cb3 \strokec5 MB\cf0 \strokec4 )\cb1 \
\cb3                     </p>\cb1 \
\cb3                   </label>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 \{uploadedFile && (\cb1 \
\cb3                   <div className=\cf6 \strokec6 "mt-4 p-4 bg-green-50 rounded-xl flex items-center gap-3"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-green-600"\cf0 \strokec4  />\cb1 \
\cb3                     <div>\cb1 \
\cb3                       <p className=\cf6 \strokec6 "font-medium text-green-800"\cf0 \strokec4 >\{uploadedFile.name\}</p>\cb1 \
\cb3                       <p className=\cf6 \strokec6 "text-sm text-green-600"\cf0 \strokec4 >\cf5 \strokec5 Ready\cf0 \strokec4  to process</p>\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 )\}\cb1 \
\cb3               </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3             )\}\cb1 \
\
\cb3             \{selectedSource === \cf6 \strokec6 'ai'\cf0 \strokec4  && (\cb1 \
\cb3               <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6 h-full"\cf0 \strokec4 >\cb1 \
\cb3                 <h3 className=\cf6 \strokec6 "text-lg font-semibold text-slate-800 mb-4"\cf0 \strokec4 >\cf5 \strokec5 Describe\cf0 \strokec4  your presentation</h3>\cb1 \
\cb3                 <\cf5 \strokec5 Textarea\cf0 \cb1 \strokec4 \
\cb3                   placeholder=\cf6 \strokec6 "Tell AI what your presentation is about...&#10;&#10;Example:&#10;Create a presentation about sustainable energy solutions for urban environments. Cover solar panels, wind energy, and battery storage. Target audience is city planners and government officials."\cf0 \cb1 \strokec4 \
\cb3                   className=\cf6 \strokec6 "min-h-96 text-base resize-none"\cf0 \cb1 \strokec4 \
\cb3                   value=\{aiPrompt\}\cb1 \
\cb3                   onChange=\{(e) => setAiPrompt(e.target.value)\}\cb1 \
\cb3                 />\cb1 \
\cb3                 <div className=\cf6 \strokec6 "mt-4 p-4 bg-purple-50 rounded-xl"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-purple-800"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 inline mr-1"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 The\cf0 \strokec4  more detail you provide, the better \cf5 \strokec5 AI\cf0 \strokec4  can structure your content.\cb1 \
\cb3                   </p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3             )\}\cb1 \
\
\cb3             \{!selectedSource && (\cb1 \
\cb3               <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-12 h-full flex items-center justify-center bg-slate-50"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 FileText\cf0 \strokec4  className=\cf6 \strokec6 "w-10 h-10 text-slate-400"\cf0 \strokec4  />\cb1 \
\cb3                   </div>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-500 text-lg"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Select\cf0 \strokec4  a content source to \cf2 \strokec2 get\cf0 \strokec4  started\cb1 \
\cb3                   </p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3             )\}\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \cb3 \strokec8 /* Bottom Navigation */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 py-6 px-6 backdrop-blur-lg bg-white/90"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "max-w-7xl mx-auto flex justify-end"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'Brief'\cf0 \strokec4 )\} onClick=\{handleContinue\}>\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                 size=\cf6 \strokec6 "lg"\cf0 \cb1 \strokec4 \
\cb3                 disabled=\{!canContinue()\}\cb1 \
\cb3                 className=\cf6 \strokec6 "bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg shadow-lg disabled:opacity-50"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 \cf5 \strokec5 Next\cf0 \strokec4 : \cf5 \strokec5 Brief\cf0 \strokec4  & length\cb1 \
\cb3                 <\cf5 \strokec5 ArrowRight\cf0 \strokec4  className=\cf6 \strokec6 "ml-2 w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}