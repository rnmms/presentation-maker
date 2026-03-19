{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Input\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Badge\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Search\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Grid3X3\cf0 \strokec4 , \cf5 \strokec5 LayoutGrid\cf0 \strokec4 , \cf5 \strokec5 X\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 TemplateCard\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/presentation/TemplateCard'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ProgressBar\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/presentation/ProgressBar'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Templates\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedTemplate, setSelectedTemplate] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [activeFilter, setActiveFilter] = useState(\cf6 \strokec6 'All'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [searchQuery, setSearchQuery] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [viewMode, setViewMode] = useState(\cf6 \strokec6 'grid'\cf0 \strokec4 ); \cf7 \cb3 \strokec7 // 'grid' or 'large'\cf0 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  categories = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'All'\cf0 \strokec4 , label: \cf6 \strokec6 'All'\cf0 \strokec4 , count: \cf8 \cb3 \strokec8 8\cf0 \cb3 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Business'\cf0 \strokec4 , label: \cf6 \strokec6 'Business'\cf0 \strokec4 , count: \cf8 \cb3 \strokec8 3\cf0 \cb3 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Education'\cf0 \strokec4 , label: \cf6 \strokec6 'Education'\cf0 \strokec4 , count: \cf8 \cb3 \strokec8 3\cf0 \cb3 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Marketing'\cf0 \strokec4 , label: \cf6 \strokec6 'Marketing'\cf0 \strokec4 , count: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'Creative'\cf0 \strokec4 , label: \cf6 \strokec6 'Creative'\cf0 \strokec4 , count: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  templates = [\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'Electric Field Concepts'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/91583820/responsive-images/0-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Education'\cf0 \strokec4 , \cf6 \strokec6 'Science'\cf0 \strokec4 , \cf6 \strokec6 'Professional'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Education'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 2\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'Ethereal Aesthetic'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92978467/responsive-images/0-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Creative'\cf0 \strokec4 , \cf6 \strokec6 'Design'\cf0 \strokec4 , \cf6 \strokec6 'Modern'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Creative'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 3\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'Group Project Strategies'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/89891212/responsive-images/0-group-project-strategies___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Business'\cf0 \strokec4 , \cf6 \strokec6 'Team'\cf0 \strokec4 , \cf6 \strokec6 'Strategy'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Business'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 4\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'AI Automation'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92133854/responsive-images/0-ai-automation___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Technology'\cf0 \strokec4 , \cf6 \strokec6 'Business'\cf0 \strokec4 , \cf6 \strokec6 'Modern'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Business'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 5\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'Brazil Biodiversity Report'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/91349636/responsive-images/0-brazil-biodiversity-report___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Education'\cf0 \strokec4 , \cf6 \strokec6 'Nature'\cf0 \strokec4 , \cf6 \strokec6 'Report'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Education'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 6\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'Startup Pitch Deck'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/91064154/responsive-images/0-startup-pitch-deck___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Business'\cf0 \strokec4 , \cf6 \strokec6 'Startup'\cf0 \strokec4 , \cf6 \strokec6 'Pitch'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Business'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 7\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'World Diabetes Day'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/90904820/responsive-images/0-world-diabetes-day___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Health'\cf0 \strokec4 , \cf6 \strokec6 'Education'\cf0 \strokec4 , \cf6 \strokec6 'Awareness'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Education'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf8 \cb3 \strokec8 8\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       name: \cf6 \strokec6 'Marketing Campaign'\cf0 \strokec4 ,\cb1 \
\cb3       cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92978467/responsive-images/0-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3       tags: [\cf6 \strokec6 'Marketing'\cf0 \strokec4 , \cf6 \strokec6 'Creative'\cf0 \strokec4 , \cf6 \strokec6 'Campaign'\cf0 \strokec4 ],\cb1 \
\cb3       category: \cf6 \strokec6 'Marketing'\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  filteredTemplates = templates.filter(template => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  matchesFilter = activeFilter === \cf6 \strokec6 'All'\cf0 \strokec4  || template.category === activeFilter;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||\cb1 \
\cb3                          template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  matchesFilter && matchesSearch;\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleContinue = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (selectedTemplate) \{\cb1 \
\cb3       localStorage.setItem(\cf6 \strokec6 'selectedTemplate'\cf0 \strokec4 , \cf5 \strokec5 JSON\cf0 \strokec4 .stringify(selectedTemplate));\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-slate-50"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf7 \cb3 \strokec7 /* Header with Progress */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white border-b border-slate-200 sticky top-0 z-40"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 ProgressBar\cf0 \strokec4  currentStep=\{\cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 \} />\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf7 \cb3 \strokec7 /* Title Section */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "text-center mb-6 sm:mb-10"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <h1 className=\cf6 \strokec6 "text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Choose\cf0 \strokec4  your template\cb1 \
\cb3           </h1>\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-sm sm:text-lg text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Pick\cf0 \strokec4  a design that matches your style\cb1 \
\cb3           </p>\cb1 \
\cb3         </motion.div>\cb1 \
\
\cb3         \{\cf7 \cb3 \strokec7 /* Filters and Search - Mobile optimized */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           transition=\{\{ delay: \cf8 \cb3 \strokec8 0.1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "space-y-3 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 mb-6 sm:mb-8"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           \{\cf7 \cb3 \strokec7 /* Category Filters - Horizontal scroll on mobile */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex gap-2 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide"\cf0 \strokec4 >\cb1 \
\cb3             \{categories.map(category => (\cb1 \
\cb3               <button\cb1 \
\cb3                 key=\{category.id\}\cb1 \
\cb3                 onClick=\{() => setActiveFilter(category.id)\}\cb1 \
\cb3                 className=\{\cf6 \strokec6 `px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 \cf0 \strokec4 $\{\cb1 \
\cb3                   activeFilter === category.id\cb1 \
\cb3                     ? \cf6 \strokec6 'bg-slate-900 text-white shadow-lg'\cf0 \cb1 \strokec4 \
\cb3                     : \cf6 \strokec6 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'\cf0 \cb1 \strokec4 \
\cb3                 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               >\cb1 \
\cb3                 \{category.label\}\cb1 \
\cb3                 <span className=\{\cf6 \strokec6 `ml-1 sm:ml-1.5 \cf0 \strokec4 $\{activeFilter === category.id ? \cf6 \strokec6 'text-slate-300'\cf0 \strokec4  : \cf6 \strokec6 'text-slate-400'\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3                   \{category.count\}\cb1 \
\cb3                 </span>\cb1 \
\cb3               </button>\cb1 \
\cb3             ))\}\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* Search - Full width on mobile */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-3"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "relative flex-1 sm:flex-none"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Search\cf0 \strokec4  className=\cf6 \strokec6 "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"\cf0 \strokec4  />\cb1 \
\cb3               <\cf5 \strokec5 Input\cf0 \cb1 \strokec4 \
\cb3                 placeholder=\cf6 \strokec6 "Search..."\cf0 \cb1 \strokec4 \
\cb3                 className=\cf6 \strokec6 "pl-10 w-full sm:w-48 md:w-64 h-9 sm:h-10 bg-white border-slate-200 focus:border-indigo-400 rounded-full text-sm"\cf0 \cb1 \strokec4 \
\cb3                 value=\{searchQuery\}\cb1 \
\cb3                 onChange=\{(e) => setSearchQuery(e.target.value)\}\cb1 \
\cb3               />\cb1 \
\cb3               \{searchQuery && (\cb1 \
\cb3                 <button \cb1 \
\cb3                   onClick=\{() => setSearchQuery(\cf6 \strokec6 ''\cf0 \strokec4 )\}\cb1 \
\cb3                   className=\cf6 \strokec6 "absolute right-3 top-1/2 -translate-y-1/2"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   <\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-slate-400 hover:text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3                 </button>\cb1 \
\cb3               )\}\cb1 \
\cb3             </div>\cb1 \
\cb3             <div className=\cf6 \strokec6 "hidden sm:flex bg-white border border-slate-200 rounded-lg p-1"\cf0 \strokec4 >\cb1 \
\cb3               <button\cb1 \
\cb3                 onClick=\{() => setViewMode(\cf6 \strokec6 'grid'\cf0 \strokec4 )\}\cb1 \
\cb3                 className=\{\cf6 \strokec6 `p-2 rounded-md transition-colors \cf0 \strokec4 $\{viewMode === \cf6 \strokec6 'grid'\cf0 \strokec4  ? \cf6 \strokec6 'bg-slate-100'\cf0 \strokec4  : \cf6 \strokec6 'hover:bg-slate-50'\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 Grid3X3\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3               </button>\cb1 \
\cb3               <button\cb1 \
\cb3                 onClick=\{() => setViewMode(\cf6 \strokec6 'large'\cf0 \strokec4 )\}\cb1 \
\cb3                 className=\{\cf6 \strokec6 `p-2 rounded-md transition-colors \cf0 \strokec4 $\{viewMode === \cf6 \strokec6 'large'\cf0 \strokec4  ? \cf6 \strokec6 'bg-slate-100'\cf0 \strokec4  : \cf6 \strokec6 'hover:bg-slate-50'\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 LayoutGrid\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3               </button>\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\cb3         </motion.div>\cb1 \
\
\cb3         \{\cf7 \cb3 \strokec7 /* Template Grid */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           layout\cb1 \
\cb3           className=\{\cf6 \strokec6 `grid gap-4 sm:gap-6 mb-28 sm:mb-32 \cf0 \strokec4 $\{\cb1 \
\cb3             viewMode === \cf6 \strokec6 'grid'\cf0 \strokec4  \cb1 \
\cb3               ? \cf6 \strokec6 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'\cf0 \strokec4  \cb1 \
\cb3               : \cf6 \strokec6 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'\cf0 \cb1 \strokec4 \
\cb3           \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3         >\cb1 \
\cb3           <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "popLayout"\cf0 \strokec4 >\cb1 \
\cb3             \{filteredTemplates.map((template, idx) => (\cb1 \
\cb3               <motion.div\cb1 \
\cb3                 key=\{template.id\}\cb1 \
\cb3                 layout\cb1 \
\cb3                 initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , scale: \cf8 \cb3 \strokec8 0.9\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                 animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , scale: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                 exit=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , scale: \cf8 \cb3 \strokec8 0.9\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                 transition=\{\{ delay: idx * \cf8 \cb3 \strokec8 0.05\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 TemplateCard\cf0 \cb1 \strokec4 \
\cb3                   template=\{template\}\cb1 \
\cb3                   isSelected=\{selectedTemplate?.id === template.id\}\cb1 \
\cb3                   onSelect=\{setSelectedTemplate\}\cb1 \
\cb3                 />\cb1 \
\cb3               </motion.div>\cb1 \
\cb3             ))\}\cb1 \
\cb3           </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         </motion.div>\cb1 \
\
\cb3         \{\cf7 \cb3 \strokec7 /* AI Template Suggestion */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           transition=\{\{ delay: \cf8 \cb3 \strokec8 0.3\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "text-center mb-8"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3             variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  \cb1 \
\cb3             className=\cf6 \strokec6 "gap-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 font-medium"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3             \cf5 \strokec5 Not\cf0 \strokec4  sure? \cf5 \strokec5 Let\cf0 \strokec4  \cf5 \strokec5 AI\cf0 \strokec4  pick \cf2 \strokec2 for\cf0 \strokec4  you\cb1 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </motion.div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \cb3 \strokec7 /* Bottom Navigation - Mobile optimized */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ y: \cf8 \cb3 \strokec8 100\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-slate-200 py-3 sm:py-4 px-4 sm:px-6 shadow-2xl shadow-slate-900/10 safe-area-bottom"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <div className=\cf6 \strokec6 "max-w-7xl mx-auto flex items-center justify-between gap-3"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3               \{selectedTemplate ? (\cb1 \
\cb3                 <motion.div \cb1 \
\cb3                   key=\cf6 \strokec6 "selected"\cf0 \cb1 \strokec4 \
\cb3                   initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , x: -\cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                   animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , x: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                   exit=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , x: -\cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-4 min-w-0 flex-1"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "relative flex-shrink-0"\cf0 \strokec4 >\cb1 \
\cb3                     <img\cb1 \
\cb3                       src=\{selectedTemplate.cover\}\cb1 \
\cb3                       alt=\{selectedTemplate.name\}\cb1 \
\cb3                       className=\cf6 \strokec6 "w-14 h-9 sm:w-20 sm:h-12 object-cover rounded-lg shadow-md"\cf0 \cb1 \strokec4 \
\cb3                     />\cb1 \
\cb3                     <div className=\cf6 \strokec6 "absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-indigo-600 rounded-full flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-2 h-2 sm:w-3 sm:h-3 text-white"\cf0 \strokec4  />\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                   <div className=\cf6 \strokec6 "min-w-0 hidden sm:block"\cf0 \strokec4 >\cb1 \
\cb3                     <p className=\cf6 \strokec6 "font-semibold text-slate-800 truncate"\cf0 \strokec4 >\{selectedTemplate.name\}</p>\cb1 \
\cb3                     <p className=\cf6 \strokec6 "text-sm text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 Ready\cf0 \strokec4  to customize</p>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </motion.div>\cb1 \
\cb3               ) : (\cb1 \
\cb3                 <motion.p \cb1 \
\cb3                   key=\cf6 \strokec6 "hint"\cf0 \cb1 \strokec4 \
\cb3                   initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                   animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                   className=\cf6 \strokec6 "text-slate-500 text-sm sm:text-base"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   \cf5 \strokec5 Select\cf0 \strokec4  a template\cb1 \
\cb3                 </motion.p>\cb1 \
\cb3               )\}\cb1 \
\cb3             </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3             \cb1 \
\cb3             <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'ContentAndBrief'\cf0 \strokec4 )\} onClick=\{handleContinue\} className=\cf6 \strokec6 "flex-shrink-0"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                 size=\cf6 \strokec6 "lg"\cf0 \cb1 \strokec4 \
\cb3                 disabled=\{!selectedTemplate\}\cb1 \
\cb3                 className=\cf6 \strokec6 "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-xl shadow-lg disabled:opacity-50 transition-all hover:shadow-xl disabled:shadow-none gap-2"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 \cf5 \strokec5 Continue\cf0 \cb1 \strokec4 \
\cb3                 <\cf5 \strokec5 ArrowRight\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5"\cf0 \strokec4  />\cb1 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </motion.div>\cb1 \
\cb3       </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}