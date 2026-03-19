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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4 , \cf5 \strokec5 ChevronLeft\cf0 \strokec4 , \cf5 \strokec5 ChevronRight\cf0 \strokec4 , \cf5 \strokec5 Plus\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 MoreHorizontal\cf0 \strokec4 , \cf5 \strokec5 Play\cf0 \strokec4 , \cf5 \strokec5 Download\cf0 \strokec4 , \cf5 \strokec5 Share2\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Layout\cf0 \strokec4 , \cf5 \strokec5 Type\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Image\cf0 \strokec4 , \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 Trash2\cf0 \strokec4 , \cf5 \strokec5 Copy\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Sheet\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SheetContent\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SheetHeader\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SheetTitle\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SheetTrigger\cf0 \strokec4 ,\cb1 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/sheet"\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 DropdownMenu\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 DropdownMenuContent\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4 ,\cb1 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/dropdown-menu"\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 SlideCanvasAdvanced\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './SlideCanvasAdvanced'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 LayoutPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './LayoutPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 TypographyPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './TypographyPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ColorThemePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ColorThemePanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ImagePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ImagePanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 AIEnhancePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './AIEnhancePanel'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 MobileEditor\cf0 \strokec4 (\{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   presentation,\cb1 \
\cb3   currentSlide,\cb1 \
\cb3   setCurrentSlide,\cb1 \
\cb3   templateStyle,\cb1 \
\cb3   onSlideUpdate,\cb1 \
\cb3   onAddSlide,\cb1 \
\cb3   onDeleteSlide,\cb1 \
\cb3   onDuplicateSlide,\cb1 \
\cb3   onLayoutChange,\cb1 \
\cb3   onFontChange,\cb1 \
\cb3   onThemeChange,\cb1 \
\cb3   onAddImage,\cb1 \
\cb3   onPresentationMode,\cb1 \
\cb3   onShare,\cb1 \
\cb3   onExport\cb1 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [activePanel, setActivePanel] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [showSlideStrip, setShowSlideStrip] = useState(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  slides = presentation?.slides || [];\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  currentSlideData = slides[currentSlide] || \{\};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  tools = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'layout'\cf0 \strokec4 , icon: \cf5 \strokec5 Layout\cf0 \strokec4 , label: \cf6 \strokec6 'Layout'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'text'\cf0 \strokec4 , icon: \cf5 \strokec5 Type\cf0 \strokec4 , label: \cf6 \strokec6 'Text'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'theme'\cf0 \strokec4 , icon: \cf5 \strokec5 Palette\cf0 \strokec4 , label: \cf6 \strokec6 'Theme'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'image'\cf0 \strokec4 , icon: \cf5 \strokec5 Image\cf0 \strokec4 , label: \cf6 \strokec6 'Image'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  nextSlide = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (currentSlide < slides.length - \cf7 \strokec7 1\cf0 \strokec4 ) \{\cb1 \
\cb3       setCurrentSlide(currentSlide + \cf7 \strokec7 1\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prevSlide = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (currentSlide > \cf7 \strokec7 0\cf0 \strokec4 ) \{\cb1 \
\cb3       setCurrentSlide(currentSlide - \cf7 \strokec7 1\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderPanel = () => \{\cb1 \
\cb3     \cf2 \strokec2 switch\cf0 \strokec4  (activePanel) \{\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'layout'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 LayoutPanel\cf0 \strokec4  currentLayout=\{currentSlideData.layout\} onLayoutChange=\{onLayoutChange\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'text'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 TypographyPanel\cf0 \strokec4  currentFont=\{templateStyle.fontFamily\} onFontChange=\{onFontChange\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'theme'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 ColorThemePanel\cf0 \strokec4  currentTheme=\{templateStyle\} onThemeChange=\{onThemeChange\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'image'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 ImagePanel\cf0 \strokec4  onAddImage=\{onAddImage\} />;\cb1 \
\cb3       \cf2 \strokec2 default\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "h-screen flex flex-col bg-slate-100 overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf8 \strokec8 /* Mobile Top Bar */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-between flex-shrink-0 safe-area-top"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'Entry'\cf0 \strokec4 )\}>\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  size=\cf6 \strokec6 "sm"\cf0 \strokec4  className=\cf6 \strokec6 "h-9 w-9 p-0"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 ChevronLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "max-w-[140px]"\cf0 \strokec4 >\cb1 \
\cb3             <h1 className=\cf6 \strokec6 "text-sm font-semibold text-slate-800 truncate"\cf0 \strokec4 >\cb1 \
\cb3               \{presentation?.title || \cf6 \strokec6 'Untitled'\cf0 \strokec4 \}\cb1 \
\cb3             </h1>\cb1 \
\cb3             <p className=\cf6 \strokec6 "text-[10px] text-slate-400"\cf0 \strokec4 >\cb1 \
\cb3               \cf5 \strokec5 Slide\cf0 \strokec4  \{currentSlide + \cf7 \strokec7 1\cf0 \strokec4 \} \cf2 \strokec2 of\cf0 \strokec4  \{slides.length\}\cb1 \
\cb3             </p>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "flex items-center gap-1"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3             variant=\cf6 \strokec6 "ghost"\cf0 \cb1 \strokec4 \
\cb3             size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3             className=\cf6 \strokec6 "h-9 w-9 p-0"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{onShare\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Share2\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 DropdownMenu\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4  asChild>\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  size=\cf6 \strokec6 "sm"\cf0 \strokec4  className=\cf6 \strokec6 "h-9 w-9 p-0"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Download\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 DropdownMenuContent\cf0 \strokec4  align=\cf6 \strokec6 "end"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4  onClick=\{() => onExport(\cf6 \strokec6 'pptx'\cf0 \strokec4 )\}>\cb1 \
\cb3                 \cf5 \strokec5 PowerPoint\cf0 \cb1 \strokec4 \
\cb3               </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4  onClick=\{() => onExport(\cf6 \strokec6 'pdf'\cf0 \strokec4 )\}>\cb1 \
\cb3                 \cf5 \strokec5 PDF\cf0 \cb1 \strokec4 \
\cb3               </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 DropdownMenuContent\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 DropdownMenu\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3             size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3             className=\cf6 \strokec6 "bg-indigo-600 hover:bg-indigo-700 h-9 px-3"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{onPresentationMode\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Play\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Main Canvas Area */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex-1 flex flex-col overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf8 \strokec8 /* Slide Canvas with swipe navigation */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex-1 flex items-center justify-center p-3 relative"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf8 \strokec8 /* Navigation arrows */\cf0 \strokec4 \}\cb1 \
\cb3           <button\cb1 \
\cb3             onClick=\{prevSlide\}\cb1 \
\cb3             disabled=\{currentSlide === \cf7 \strokec7 0\cf0 \strokec4 \}\cb1 \
\cb3             className=\{cn(\cb1 \
\cb3               \cf6 \strokec6 "absolute left-1 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center"\cf0 \strokec4 ,\cb1 \
\cb3               currentSlide === \cf7 \strokec7 0\cf0 \strokec4  ? \cf6 \strokec6 "opacity-30"\cf0 \strokec4  : \cf6 \strokec6 "active:scale-95"\cf0 \cb1 \strokec4 \
\cb3             )\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 ChevronLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3           </button>\cb1 \
\
\cb3           <button\cb1 \
\cb3             onClick=\{nextSlide\}\cb1 \
\cb3             disabled=\{currentSlide === slides.length - \cf7 \strokec7 1\cf0 \strokec4 \}\cb1 \
\cb3             className=\{cn(\cb1 \
\cb3               \cf6 \strokec6 "absolute right-1 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur shadow-lg flex items-center justify-center"\cf0 \strokec4 ,\cb1 \
\cb3               currentSlide === slides.length - \cf7 \strokec7 1\cf0 \strokec4  ? \cf6 \strokec6 "opacity-30"\cf0 \strokec4  : \cf6 \strokec6 "active:scale-95"\cf0 \cb1 \strokec4 \
\cb3             )\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 ChevronRight\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3           </button>\cb1 \
\
\cb3           \{\cf8 \strokec8 /* Slide Canvas */\cf0 \strokec4 \}\cb1 \
\cb3           <motion.div \cb1 \
\cb3             key=\{currentSlide\}\cb1 \
\cb3             initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "w-full max-w-md"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "bg-white rounded-xl shadow-xl overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 SlideCanvasAdvanced\cf0 \cb1 \strokec4 \
\cb3                 slide=\{currentSlideData\}\cb1 \
\cb3                 onUpdate=\{onSlideUpdate\}\cb1 \
\cb3                 templateStyle=\{templateStyle\}\cb1 \
\cb3                 isPresentationMode=\{\cf2 \strokec2 false\cf0 \strokec4 \}\cb1 \
\cb3               />\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Slide Strip (Horizontal scroll) */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "bg-white border-t border-slate-200 px-2 py-3 flex-shrink-0"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex gap-2 overflow-x-auto pb-1 scrollbar-hide"\cf0 \strokec4 >\cb1 \
\cb3             \{slides.map((slide, idx) => (\cb1 \
\cb3               <button\cb1 \
\cb3                 key=\{idx\}\cb1 \
\cb3                 onClick=\{() => setCurrentSlide(idx)\}\cb1 \
\cb3                 className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "flex-shrink-0 w-16 rounded-lg overflow-hidden border-2 transition-all"\cf0 \strokec4 ,\cb1 \
\cb3                   currentSlide === idx \cb1 \
\cb3                     ? \cf6 \strokec6 "border-indigo-600 shadow-lg scale-105"\cf0 \strokec4  \cb1 \
\cb3                     : \cf6 \strokec6 "border-transparent opacity-60"\cf0 \cb1 \strokec4 \
\cb3                 )\}\cb1 \
\cb3               >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "aspect-[16/9] bg-slate-100 relative"\cf0 \strokec4 >\cb1 \
\cb3                   <div \cb1 \
\cb3                     className=\cf6 \strokec6 "h-1 w-full"\cf0 \cb1 \strokec4 \
\cb3                     style=\{\{\cb1 \
\cb3                       background: \cf6 \strokec6 `linear-gradient(135deg, \cf0 \strokec4 $\{templateStyle?.primaryColor || \cf6 \strokec6 '#4f46e5'\cf0 \strokec4 \}\cf6 \strokec6  0%, \cf0 \strokec4 $\{templateStyle?.secondaryColor || \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 \}\cf6 \strokec6  100%)`\cf0 \strokec4 ,\cb1 \
\cb3                     \}\}\cb1 \
\cb3                   />\cb1 \
\cb3                   <div className=\cf6 \strokec6 "p-1"\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\cf6 \strokec6 "text-[5px] font-medium text-slate-700 truncate"\cf0 \strokec4 >\cb1 \
\cb3                       \{slide.title\}\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                   <div className=\cf6 \strokec6 "absolute bottom-0.5 right-0.5 text-[8px] font-bold text-slate-400"\cf0 \strokec4 >\cb1 \
\cb3                     \{idx + \cf7 \strokec7 1\cf0 \strokec4 \}\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </button>\cb1 \
\cb3             ))\}\cb1 \
\cb3             \cb1 \
\cb3             \{\cf8 \strokec8 /* Add slide button */\cf0 \strokec4 \}\cb1 \
\cb3             <button\cb1 \
\cb3               onClick=\{onAddSlide\}\cb1 \
\cb3               className=\cf6 \strokec6 "flex-shrink-0 w-16 aspect-[16/9] rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center hover:border-indigo-400 hover:bg-indigo-50 transition-colors"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Plus\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-slate-400"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Bottom Toolbar */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-white border-t border-slate-200 px-2 py-2 flex items-center justify-around flex-shrink-0 safe-area-bottom"\cf0 \strokec4 >\cb1 \
\cb3         \{tools.map((tool) => \{\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = tool.icon;\cb1 \
\cb3           \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3             <\cf5 \strokec5 Sheet\cf0 \strokec4  key=\{tool.id\}>\cb1 \
\cb3               <\cf5 \strokec5 SheetTrigger\cf0 \strokec4  asChild>\cb1 \
\cb3                 <button\cb1 \
\cb3                   className=\cf6 \strokec6 "flex flex-col items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-[10px] text-slate-500"\cf0 \strokec4 >\{tool.label\}</span>\cb1 \
\cb3                 </button>\cb1 \
\cb3               </\cf5 \strokec5 SheetTrigger\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 SheetContent\cf0 \strokec4  side=\cf6 \strokec6 "bottom"\cf0 \strokec4  className=\cf6 \strokec6 "h-[70vh] rounded-t-3xl"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 SheetHeader\cf0 \strokec4  className=\cf6 \strokec6 "pb-4"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 SheetTitle\cf0 \strokec4 >\{tool.label\}</\cf5 \strokec5 SheetTitle\cf0 \strokec4 >\cb1 \
\cb3                 </\cf5 \strokec5 SheetHeader\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "overflow-y-auto h-full pb-8"\cf0 \strokec4 >\cb1 \
\cb3                   \{tool.id === \cf6 \strokec6 'layout'\cf0 \strokec4  && <\cf5 \strokec5 LayoutPanel\cf0 \strokec4  currentLayout=\{currentSlideData.layout\} onLayoutChange=\{onLayoutChange\} />\}\cb1 \
\cb3                   \{tool.id === \cf6 \strokec6 'text'\cf0 \strokec4  && <\cf5 \strokec5 TypographyPanel\cf0 \strokec4  currentFont=\{templateStyle.fontFamily\} onFontChange=\{onFontChange\} />\}\cb1 \
\cb3                   \{tool.id === \cf6 \strokec6 'theme'\cf0 \strokec4  && <\cf5 \strokec5 ColorThemePanel\cf0 \strokec4  currentTheme=\{templateStyle\} onThemeChange=\{onThemeChange\} />\}\cb1 \
\cb3                   \{tool.id === \cf6 \strokec6 'image'\cf0 \strokec4  && <\cf5 \strokec5 ImagePanel\cf0 \strokec4  onAddImage=\{onAddImage\} />\}\cb1 \
\cb3                 </div>\cb1 \
\cb3               </\cf5 \strokec5 SheetContent\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 Sheet\cf0 \strokec4 >\cb1 \
\cb3           );\cb1 \
\cb3         \})\}\cb1 \
\
\cb3         \{\cf8 \strokec8 /* AI Button */\cf0 \strokec4 \}\cb1 \
\cb3         <\cf5 \strokec5 Sheet\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 SheetTrigger\cf0 \strokec4  asChild>\cb1 \
\cb3             <button\cb1 \
\cb3               className=\cf6 \strokec6 "flex flex-col items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 active:scale-95 transition-all"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-indigo-600"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-[10px] text-indigo-600 font-medium"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4 </span>\cb1 \
\cb3             </button>\cb1 \
\cb3           </\cf5 \strokec5 SheetTrigger\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 SheetContent\cf0 \strokec4  side=\cf6 \strokec6 "bottom"\cf0 \strokec4  className=\cf6 \strokec6 "h-[80vh] rounded-t-3xl"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 SheetHeader\cf0 \strokec4  className=\cf6 \strokec6 "pb-4"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 SheetTitle\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4  \cf5 \strokec5 Assistant\cf0 \strokec4 </\cf5 \strokec5 SheetTitle\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 SheetHeader\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "overflow-y-auto h-full pb-8"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 AIEnhancePanel\cf0 \strokec4  \cb1 \
\cb3                 slide=\{currentSlideData\} \cb1 \
\cb3                 onUpdateSlide=\{onSlideUpdate\}\cb1 \
\cb3                 onClose=\{() => \{\}\}\cb1 \
\cb3               />\cb1 \
\cb3             </div>\cb1 \
\cb3           </\cf5 \strokec5 SheetContent\cf0 \strokec4 >\cb1 \
\cb3         </\cf5 \strokec5 Sheet\cf0 \strokec4 >\cb1 \
\
\cb3         \{\cf8 \strokec8 /* More options */\cf0 \strokec4 \}\cb1 \
\cb3         <\cf5 \strokec5 DropdownMenu\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4  asChild>\cb1 \
\cb3             <button className=\cf6 \strokec6 "flex flex-col items-center gap-1 px-4 py-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 MoreHorizontal\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-[10px] text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 More\cf0 \strokec4 </span>\cb1 \
\cb3             </button>\cb1 \
\cb3           </\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 DropdownMenuContent\cf0 \strokec4  align=\cf6 \strokec6 "end"\cf0 \strokec4  className=\cf6 \strokec6 "w-48"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4  onClick=\{() => onDuplicateSlide(currentSlide)\}>\cb1 \
\cb3               <\cf5 \strokec5 Copy\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Duplicate\cf0 \strokec4  \cf5 \strokec5 Slide\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4  \cb1 \
\cb3               onClick=\{() => onDeleteSlide(currentSlide)\}\cb1 \
\cb3               className=\cf6 \strokec6 "text-red-600"\cf0 \cb1 \strokec4 \
\cb3               disabled=\{slides.length <= \cf7 \strokec7 1\cf0 \strokec4 \}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Trash2\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Delete\cf0 \strokec4  \cf5 \strokec5 Slide\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 DropdownMenuContent\cf0 \strokec4 >\cb1 \
\cb3         </\cf5 \strokec5 DropdownMenu\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}