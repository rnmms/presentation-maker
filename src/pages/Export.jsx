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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Checkbox\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/checkbox"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Download\cf0 \strokec4 , \cf5 \strokec5 FileText\cf0 \strokec4 , \cf5 \strokec5 Globe\cf0 \strokec4 , \cf5 \strokec5 Edit3\cf0 \strokec4 , \cf5 \strokec5 CheckCircle2\cf0 \strokec4 , \cf5 \strokec5 ArrowLeft\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ useQuery \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@tanstack/react-query'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Export\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [presentationId, setPresentationId] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [saveAsDefault, setSaveAsDefault] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [exportStatus, setExportStatus] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  params = \cf2 \strokec2 new\cf0 \strokec4  \cf5 \strokec5 URLSearchParams\cf0 \strokec4 (window.location.search);\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  id = params.\cf2 \strokec2 get\cf0 \strokec4 (\cf6 \strokec6 'id'\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (id) setPresentationId(id);\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ data: presentation, isLoading \} = useQuery(\{\cb1 \
\cb3     queryKey: [\cf6 \strokec6 'presentation'\cf0 \strokec4 , presentationId],\cb1 \
\cb3     queryFn: () => base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .filter(\{ id: presentationId \}),\cb1 \
\cb3     enabled: !!presentationId,\cb1 \
\cb3     select: (data) => data[\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ]\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleExport = \cf2 \strokec2 async\cf0 \strokec4  (format) => \{\cb1 \
\cb3     setExportStatus(\cf6 \strokec6 `Preparing \cf0 \strokec4 $\{format\}\cf6 \strokec6 ...`\cf0 \strokec4 );\cb1 \
\cb3     \cb1 \
\cb3     \cf8 \cb3 \strokec8 // Simulate export process\cf0 \cb1 \strokec4 \
\cb3     setTimeout(() => \{\cb1 \
\cb3       setExportStatus(\cf6 \strokec6 `\cf0 \strokec4 $\{format\}\cf6 \strokec6  ready!`\cf0 \strokec4 );\cb1 \
\cb3       \cb1 \
\cb3       \cf8 \cb3 \strokec8 // Update presentation status\cf0 \cb1 \strokec4 \
\cb3       base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .update(presentationId, \{\cb1 \
\cb3         status: \cf6 \strokec6 'completed'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       setTimeout(() => setExportStatus(\cf2 \strokec2 null\cf0 \strokec4 ), \cf7 \cb3 \strokec7 3000\cf0 \cb3 \strokec4 );\cb1 \
\cb3     \}, \cf7 \cb3 \strokec7 2000\cf0 \cb3 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isLoading) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         <p className=\cf6 \strokec6 "text-slate-600 text-xl"\cf0 \strokec4 >\cf5 \strokec5 Loading\cf0 \strokec4 ...</p>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!presentation) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-slate-600 text-xl"\cf0 \strokec4 >\cf5 \strokec5 Presentation\cf0 \strokec4  not found</p>\cb1 \
\cb3           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'Entry'\cf0 \strokec4 )\}>\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  className=\cf6 \strokec6 "mt-4"\cf0 \strokec4 >\cf5 \strokec5 Go\cf0 \strokec4  \cf5 \strokec5 Home\cf0 \strokec4 </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf8 \cb3 \strokec8 /* Header */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white border-b border-slate-200"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 `Editor?id=\cf0 \strokec4 $\{presentationId\}\cf6 \strokec6 `\cf0 \strokec4 )\}>\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  size=\cf6 \strokec6 "sm"\cf0 \strokec4  className=\cf6 \strokec6 "gap-2"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Back\cf0 \strokec4  to \cf5 \strokec5 Editor\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "max-w-6xl mx-auto px-6 py-16"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf8 \cb3 \strokec8 /* Success Header */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "text-center mb-12"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 CheckCircle2\cf0 \strokec4  className=\cf6 \strokec6 "w-10 h-10 text-green-600"\cf0 \strokec4  />\cb1 \
\cb3           </div>\cb1 \
\cb3           <h1 className=\cf6 \strokec6 "text-5xl font-bold text-slate-900 mb-4"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Your\cf0 \strokec4  presentation is ready!\cb1 \
\cb3           </h1>\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-xl text-slate-600"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Choose\cf0 \strokec4  how you\cf6 \strokec6 'd like to continue working on it.\cf0 \cb1 \strokec4 \
\cb3           </p>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "grid lg:grid-cols-2 gap-8 mb-12"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf8 \cb3 \strokec8 /* Left - Preview */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div>\cb1 \
\cb3             <h2 className=\cf6 \strokec6 "text-2xl font-semibold text-slate-900 mb-6"\cf0 \strokec4 >\{presentation.title\}</h2>\cb1 \
\cb3             \cb1 \
\cb3             <div className=\cf6 \strokec6 "grid grid-cols-2 gap-4 mb-6"\cf0 \strokec4 >\cb1 \
\cb3               \{presentation.slides?.slice(\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 , \cf7 \cb3 \strokec7 4\cf0 \cb3 \strokec4 ).map((slide, idx) => (\cb1 \
\cb3                 <\cf5 \strokec5 Card\cf0 \strokec4  key=\{idx\} className=\cf6 \strokec6 "overflow-hidden group hover:shadow-xl transition-shadow"\cf0 \strokec4 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "aspect-[4/3] bg-gradient-to-br from-indigo-100 to-purple-100 p-4 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \
\cb3                       <div className=\cf6 \strokec6 "bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg inline-block mb-2"\cf0 \strokec4 >\cb1 \
\cb3                         <span className=\cf6 \strokec6 "font-semibold text-sm"\cf0 \strokec4 >\cf5 \strokec5 Slide\cf0 \strokec4  \{slide.slide_number\}</span>\cb1 \
\cb3                       </div>\cb1 \
\cb3                       <p className=\cf6 \strokec6 "text-sm font-medium text-slate-700 line-clamp-2"\cf0 \strokec4 >\cb1 \
\cb3                         \{slide.title\}\cb1 \
\cb3                       </p>\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3               ))\}\cb1 \
\cb3             </div>\cb1 \
\
\cb3             <div className=\cf6 \strokec6 "bg-white rounded-xl p-6 border border-slate-200"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "grid grid-cols-2 gap-6 text-sm"\cf0 \strokec4 >\cb1 \
\cb3                 <div>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-500 mb-1"\cf0 \strokec4 >\cf5 \strokec5 Template\cf0 \strokec4 </p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-semibold text-slate-800"\cf0 \strokec4 >\{presentation.template_name\}</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-500 mb-1"\cf0 \strokec4 >\cf5 \strokec5 Slides\cf0 \strokec4 </p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-semibold text-slate-800"\cf0 \strokec4 >\{presentation.slides?.length || \cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 \}</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-500 mb-1"\cf0 \strokec4 >\cf5 \strokec5 Tone\cf0 \strokec4 </p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-semibold text-slate-800"\cf0 \strokec4 >\{presentation.tone\}</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-500 mb-1"\cf0 \strokec4 >\cf5 \strokec5 Image\cf0 \strokec4  \cf5 \strokec5 Style\cf0 \strokec4 </p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-semibold text-slate-800 capitalize"\cf0 \strokec4 >\{presentation.image_style\}</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf8 \cb3 \strokec8 /* Right - Export Options */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 hover:border-indigo-300"\cf0 \cb1 \strokec4 \
\cb3                   onClick=\{() => handleExport(\cf6 \strokec6 'PowerPoint'\cf0 \strokec4 )\}>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-start gap-6"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "bg-orange-100 rounded-2xl p-4 group-hover:scale-110 transition-transform"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 FileText\cf0 \strokec4  className=\cf6 \strokec6 "w-8 h-8 text-orange-600"\cf0 \strokec4  />\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex-1"\cf0 \strokec4 >\cb1 \
\cb3                   <h3 className=\cf6 \strokec6 "text-2xl font-bold text-slate-900 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Download\cf0 \strokec4  as \cf5 \strokec5 PowerPoint\cf0 \cb1 \strokec4 \
\cb3                   </h3>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-600 mb-4"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Get\cf0 \strokec4  a fully editable .pptx file you can open \cf2 \strokec2 in\cf0 \strokec4  \cf5 \strokec5 Microsoft\cf0 \strokec4  \cf5 \strokec5 PowerPoint\cf0 \strokec4  or compatible apps.\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  className=\cf6 \strokec6 "bg-orange-600 hover:bg-orange-700 text-white"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Download\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Download\cf0 \strokec4  .pptx\cb1 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 hover:border-blue-300"\cf0 \cb1 \strokec4 \
\cb3                   onClick=\{() => handleExport(\cf6 \strokec6 'Google Slides'\cf0 \strokec4 )\}>\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-start gap-6"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "bg-blue-100 rounded-2xl p-4 group-hover:scale-110 transition-transform"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 Globe\cf0 \strokec4  className=\cf6 \strokec6 "w-8 h-8 text-blue-600"\cf0 \strokec4  />\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex-1"\cf0 \strokec4 >\cb1 \
\cb3                   <h3 className=\cf6 \strokec6 "text-2xl font-bold text-slate-900 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Open\cf0 \strokec4  \cf2 \strokec2 in\cf0 \strokec4  \cf5 \strokec5 Google\cf0 \strokec4  \cf5 \strokec5 Slides\cf0 \cb1 \strokec4 \
\cb3                   </h3>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-600 mb-4"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Continue\cf0 \strokec4  editing \cf2 \strokec2 in\cf0 \strokec4  \cf5 \strokec5 Google\cf0 \strokec4  \cf5 \strokec5 Slides\cf0 \strokec4  \cf2 \strokec2 with\cf0 \strokec4  real-time collaboration features.\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Button\cf0 \strokec4  className=\cf6 \strokec6 "bg-blue-600 hover:bg-blue-700 text-white"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Globe\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Open\cf0 \strokec4  \cf2 \strokec2 in\cf0 \strokec4  \cf5 \strokec5 Google\cf0 \strokec4  \cf5 \strokec5 Slides\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-8 hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 hover:border-indigo-300"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-start gap-6"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "bg-indigo-100 rounded-2xl p-4 group-hover:scale-110 transition-transform"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 Edit3\cf0 \strokec4  className=\cf6 \strokec6 "w-8 h-8 text-indigo-600"\cf0 \strokec4  />\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex-1"\cf0 \strokec4 >\cb1 \
\cb3                   <h3 className=\cf6 \strokec6 "text-2xl font-bold text-slate-900 mb-2"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Continue\cf0 \strokec4  \cf2 \strokec2 in\cf0 \strokec4  \cf5 \strokec5 Slidesgo\cf0 \strokec4  \cf5 \strokec5 Editor\cf0 \cb1 \strokec4 \
\cb3                   </h3>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-slate-600 mb-4"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Keep\cf0 \strokec4  editing \cf2 \strokec2 with\cf0 \strokec4  our live editor and \cf5 \strokec5 AI\cf0 \strokec4  tools before exporting.\cb1 \
\cb3                   </p>\cb1 \
\cb3                   <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 `Editor?id=\cf0 \strokec4 $\{presentationId\}\cf6 \strokec6 `\cf0 \strokec4 )\}>\cb1 \
\cb3                     <\cf5 \strokec5 Button\cf0 \strokec4  className=\cf6 \strokec6 "bg-indigo-600 hover:bg-indigo-700 text-white"\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Edit3\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                       \cf5 \strokec5 Continue\cf0 \strokec4  \cf5 \strokec5 Editing\cf0 \cb1 \strokec4 \
\cb3                     </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3                   </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\
\cb3             \{\cf8 \cb3 \strokec8 /* Save Template Option */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-6 bg-slate-50 border-slate-200"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-start gap-3"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Checkbox\cf0 \cb1 \strokec4 \
\cb3                   id=\cf6 \strokec6 "save-default"\cf0 \cb1 \strokec4 \
\cb3                   checked=\{saveAsDefault\}\cb1 \
\cb3                   onCheckedChange=\{setSaveAsDefault\}\cb1 \
\cb3                   className=\cf6 \strokec6 "mt-1"\cf0 \cb1 \strokec4 \
\cb3                 />\cb1 \
\cb3                 <label htmlFor=\cf6 \strokec6 "save-default"\cf0 \strokec4  className=\cf6 \strokec6 "cursor-pointer flex-1"\cf0 \strokec4 >\cb1 \
\cb3                   <p className=\cf6 \strokec6 "font-medium text-slate-800"\cf0 \strokec4 >\cf5 \strokec5 Save\cf0 \strokec4  \cf2 \strokec2 this\cf0 \strokec4  template as my \cf2 \strokec2 default\cf0 \strokec4  style</p>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-slate-600 mt-1"\cf0 \strokec4 >\cb1 \
\cb3                     \cf5 \strokec5 Future\cf0 \strokec4  presentations will use \cf6 \strokec6 "\{presentation.template_name\}"\cf0 \strokec4  by \cf2 \strokec2 default\cf0 \cb1 \strokec4 \
\cb3                   </p>\cb1 \
\cb3                 </label>\cb1 \
\cb3               </div>\cb1 \
\cb3             </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \cb3 \strokec8 /* Export Status */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         \{exportStatus && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-2 h-2 bg-green-400 rounded-full animate-pulse"\cf0 \strokec4  />\cb1 \
\cb3             <p className=\cf6 \strokec6 "font-medium"\cf0 \strokec4 >\{exportStatus\}</p>\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\
\cb3         \{\cf8 \cb3 \strokec8 /* Tips Section */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-8 bg-blue-50 border-blue-200"\cf0 \strokec4 >\cb1 \
\cb3           <h3 className=\cf6 \strokec6 "font-semibold text-slate-800 mb-4 text-lg"\cf0 \strokec4 >\cf9 \cb3 \strokec9 \uc0\u55357 \u56481 \cf0 \cb3 \strokec4  \cf5 \strokec5 Pro\cf0 \strokec4  \cf5 \strokec5 Tips\cf0 \strokec4 </h3>\cb1 \
\cb3           <ul className=\cf6 \strokec6 "space-y-2 text-slate-700"\cf0 \strokec4 >\cb1 \
\cb3             <li className=\cf6 \strokec6 "flex items-start gap-2"\cf0 \strokec4 >\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-blue-600 font-bold"\cf0 \strokec4 >\cf9 \cb3 \strokec9 \'95\cf0 \cb3 \strokec4 </span>\cb1 \
\cb3               <span>\cf5 \strokec5 Most\cf0 \strokec4  users edit content \cf7 \cb3 \strokec7 1\cf0 \cb3 \strokec4 -\cf7 \cb3 \strokec7 2\cf0 \cb3 \strokec4  more times \cf2 \strokec2 in\cf0 \strokec4  \cf5 \strokec5 PowerPoint\cf0 \strokec4  before presenting</span>\cb1 \
\cb3             </li>\cb1 \
\cb3             <li className=\cf6 \strokec6 "flex items-start gap-2"\cf0 \strokec4 >\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-blue-600 font-bold"\cf0 \strokec4 >\cf9 \cb3 \strokec9 \'95\cf0 \cb3 \strokec4 </span>\cb1 \
\cb3               <span>\cf5 \strokec5 Add\cf0 \strokec4  speaker notes \cf2 \strokec2 for\cf0 \strokec4  each slide to guide your presentation</span>\cb1 \
\cb3             </li>\cb1 \
\cb3             <li className=\cf6 \strokec6 "flex items-start gap-2"\cf0 \strokec4 >\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-blue-600 font-bold"\cf0 \strokec4 >\cf9 \cb3 \strokec9 \'95\cf0 \cb3 \strokec4 </span>\cb1 \
\cb3               <span>\cf5 \strokec5 Preview\cf0 \strokec4  your slides \cf2 \strokec2 in\cf0 \strokec4  presentation mode to check timing and transitions</span>\cb1 \
\cb3             </li>\cb1 \
\cb3           </ul>\cb1 \
\cb3         </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}