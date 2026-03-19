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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect, useRef \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 Plus\cf0 \strokec4 , \cf5 \strokec5 Play\cf0 \strokec4 , \cf5 \strokec5 Share2\cf0 \strokec4 , \cf5 \strokec5 Download\cf0 \strokec4 , \cf5 \strokec5 Type\cf0 \strokec4 , \cf5 \strokec5 Image\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 ChevronLeft\cf0 \strokec4 , \cf5 \strokec5 ChevronRight\cf0 \strokec4 , \cf5 \strokec5 Trash2\cf0 \strokec4 , \cf5 \strokec5 Copy\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 X\cf0 \strokec4 , \cf5 \strokec5 Save\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Link2\cf0 \strokec4 , \cf5 \strokec5 Mail\cf0 \strokec4 , \cf5 \strokec5 FileDown\cf0 \strokec4 , \cf5 \strokec5 Loader2\cf0 \strokec4 , \cf5 \strokec5 CheckCircle2\cf0 \strokec4 , \cf5 \strokec5 LayoutGrid\cf0 \strokec4 , \cf5 \strokec5 Shapes\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 AlignLeft\cf0 \strokec4 , \cf5 \strokec5 AlignCenter\cf0 \strokec4 , \cf5 \strokec5 AlignRight\cf0 \strokec4 , \cf5 \strokec5 Bold\cf0 \strokec4 , \cf5 \strokec5 Italic\cf0 \strokec4 , \cf5 \strokec5 Underline\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 List\cf0 \strokec4 , \cf5 \strokec5 ListOrdered\cf0 \strokec4 , \cf5 \strokec5 Quote\cf0 \strokec4 , \cf5 \strokec5 Heading1\cf0 \strokec4 , \cf5 \strokec5 Heading2\cf0 \strokec4 , \cf5 \strokec5 ImagePlus\cf0 \strokec4 , \cf5 \strokec5 Table\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 PieChart\cf0 \strokec4 , \cf5 \strokec5 TrendingUp\cf0 \strokec4 , \cf5 \strokec5 Undo\cf0 \strokec4 , \cf5 \strokec5 Redo\cf0 \strokec4 , \cf5 \strokec5 ZoomIn\cf0 \strokec4 , \cf5 \strokec5 ZoomOut\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Maximize2\cf0 \strokec4 , \cf5 \strokec5 Grid\cf0 \strokec4 , \cf5 \strokec5 Layers\cf0 \strokec4 , \cf5 \strokec5 Settings\cf0 \strokec4 , \cf5 \strokec5 Eye\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ toast \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'sonner'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Templates with real Slidesgo images\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  templateThemes = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'electric-field'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Electric Field'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/91583820/responsive-images/0-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cf6 \strokec6 'https://media.slidesgo.com/storage/91583827/responsive-images/2-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \strokec4 , \cf6 \strokec6 'https://media.slidesgo.com/storage/91583834/responsive-images/3-electric-field-concepts___media_library_original_1600_900.jpg'\cf0 \strokec4 ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#3b82f6'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#1e40af'\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'ethereal-dreams'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Ethereal Dreams'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92978467/responsive-images/0-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cf6 \strokec6 'https://media.slidesgo.com/storage/92978477/responsive-images/2-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 , \cf6 \strokec6 'https://media.slidesgo.com/storage/92978483/responsive-images/3-ethereal-aesthetic___media_library_original_1600_900.jpg'\cf0 \strokec4 ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#a78bfa'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#7c3aed'\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'ai-automation'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'AI Automation'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92133854/responsive-images/0-ai-automation___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cf6 \strokec6 'https://media.slidesgo.com/storage/92133868/responsive-images/2-ai-automation___media_library_original_1600_900.jpg'\cf0 \strokec4 , \cf6 \strokec6 'https://media.slidesgo.com/storage/92133872/responsive-images/3-ai-automation___media_library_original_1600_900.jpg'\cf0 \strokec4 ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#6d28d9'\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'black-friday'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Black Friday'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/92530411/responsive-images/0-black-friday___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cf6 \strokec6 'https://media.slidesgo.com/storage/92530439/responsive-images/3-black-friday___media_library_original_1600_900.jpg'\cf0 \strokec4 ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#fbbf24'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#000000'\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     id: \cf6 \strokec6 'home-christmas'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf6 \strokec6 'Christmas'\cf0 \strokec4 ,\cb1 \
\cb3     cover: \cf6 \strokec6 'https://media.slidesgo.com/storage/93236321/responsive-images/0-home-for-christmas___media_library_original_1600_900.jpg'\cf0 \strokec4 ,\cb1 \
\cb3     slides: [\cf6 \strokec6 'https://media.slidesgo.com/storage/93236332/responsive-images/2-home-for-christmas___media_library_original_1600_900.jpg'\cf0 \strokec4 ],\cb1 \
\cb3     colors: \{ primary: \cf6 \strokec6 '#dc2626'\cf0 \strokec4 , secondary: \cf6 \strokec6 '#166534'\cf0 \strokec4  \}\cb1 \
\cb3   \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Editable text\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 EditableText\cf0 \strokec4 (\{ value, onChange, className, placeholder, as = \cf6 \strokec6 'p'\cf0 \strokec4  \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [isEditing, setIsEditing] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [temp, setTemp] = useState(value);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  ref = useRef(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   useEffect(() => \{ setTemp(value); \}, [value]);\cb1 \
\cb3   useEffect(() => \{ \cf2 \strokec2 if\cf0 \strokec4  (isEditing && ref.current) \{ ref.current.focus(); ref.current.select(); \} \}, [isEditing]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleBlur = () => \{ setIsEditing(\cf2 \strokec2 false\cf0 \strokec4 ); \cf2 \strokec2 if\cf0 \strokec4  (temp !== value) onChange(temp); \};\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isEditing) \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Tag\cf0 \strokec4  = as === \cf6 \strokec6 'h1'\cf0 \strokec4  ? \cf6 \strokec6 'input'\cf0 \strokec4  : \cf6 \strokec6 'textarea'\cf0 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 Tag\cf0 \strokec4  ref=\{ref\} value=\{temp\} onChange=\{e => setTemp(e.target.value)\} onBlur=\{handleBlur\}\cb1 \
\cb3       onKeyDown=\{e => \{ \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'Enter'\cf0 \strokec4  && as === \cf6 \strokec6 'h1'\cf0 \strokec4 ) handleBlur(); \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'Escape'\cf0 \strokec4 ) \{ setTemp(value); setIsEditing(\cf2 \strokec2 false\cf0 \strokec4 ); \}\}\}\cb1 \
\cb3       className=\{cn(className, \cf6 \strokec6 "bg-white/10 rounded-lg px-2 py-1 outline-none ring-2 ring-purple-500/50 w-full"\cf0 \strokec4 )\} rows=\{\cf8 \strokec8 2\cf0 \strokec4 \} />;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Tag\cf0 \strokec4  = as;\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 Tag\cf0 \strokec4  onClick=\{() => setIsEditing(\cf2 \strokec2 true\cf0 \strokec4 )\} className=\{cn(className, \cf6 \strokec6 "cursor-text hover:bg-white/5 rounded px-1 transition-colors"\cf0 \strokec4 )\}>\cb1 \
\cb3     \{value || <span className=\cf6 \strokec6 "text-white/30"\cf0 \strokec4 >\{placeholder\}</span>\}\cb1 \
\cb3   </\cf5 \strokec5 Tag\cf0 \strokec4 >;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Slide thumbnail with actions\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlideThumbnail\cf0 \strokec4 (\{ slide, index, isActive, onClick, theme, onDuplicate, onDelete, totalSlides \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [showActions, setShowActions] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  bg = index === \cf8 \strokec8 0\cf0 \strokec4  ? theme.cover : theme.slides[index % theme.slides.length] || theme.cover;\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       whileHover=\{\{ scale: \cf8 \strokec8 1.02\cf0 \strokec4  \}\}\cb1 \
\cb3       onHoverStart=\{() => setShowActions(\cf2 \strokec2 true\cf0 \strokec4 )\}\cb1 \
\cb3       onHoverEnd=\{() => setShowActions(\cf2 \strokec2 false\cf0 \strokec4 )\}\cb1 \
\cb3       className=\cf6 \strokec6 "relative group"\cf0 \cb1 \strokec4 \
\cb3     >\cb1 \
\cb3       <button\cb1 \
\cb3         onClick=\{onClick\}\cb1 \
\cb3         className=\{cn(\cb1 \
\cb3           \cf6 \strokec6 "relative w-full aspect-video rounded-xl overflow-hidden transition-all border-2"\cf0 \strokec4 ,\cb1 \
\cb3           isActive \cb1 \
\cb3             ? \cf6 \strokec6 "border-purple-500 shadow-lg shadow-purple-500/30"\cf0 \strokec4  \cb1 \
\cb3             : \cf6 \strokec6 "border-transparent hover:border-white/20"\cf0 \cb1 \strokec4 \
\cb3         )\}\cb1 \
\cb3       >\cb1 \
\cb3         <img src=\{bg\} alt=\cf6 \strokec6 ""\cf0 \strokec4  className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-1 left-1.5 right-1.5"\cf0 \strokec4 >\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-[8px] font-semibold text-white truncate"\cf0 \strokec4 >\{slide.title\}</p>\cb1 \
\cb3         </div>\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-1 left-1.5 px-1.5 py-0.5 rounded bg-black/50 text-[8px] font-bold text-white"\cf0 \strokec4 >\cb1 \
\cb3           \{index + \cf8 \strokec8 1\cf0 \strokec4 \}\cb1 \
\cb3         </div>\cb1 \
\cb3         \{isActive && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "absolute top-1 right-1 w-2 h-2 rounded-full bg-purple-500 animate-pulse"\cf0 \strokec4  />\cb1 \
\cb3         )\}\cb1 \
\cb3       </button>\cb1 \
\cb3       \cb1 \
\cb3       \{\cf7 \strokec7 /* Hover actions */\cf0 \strokec4 \}\cb1 \
\cb3       <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         \{showActions && (\cb1 \
\cb3           <motion.div\cb1 \
\cb3             initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 5\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , y: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3             exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 5\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-1 bg-slate-900/95 backdrop-blur rounded-lg p-1 border border-white/10 shadow-xl z-10"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <button\cb1 \
\cb3               onClick=\{(e) => \{ e.stopPropagation(); onDuplicate(index); \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "p-1.5 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"\cf0 \cb1 \strokec4 \
\cb3               title=\cf6 \strokec6 "Duplicate"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Copy\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3             \{totalSlides > \cf8 \strokec8 1\cf0 \strokec4  && (\cb1 \
\cb3               <button\cb1 \
\cb3                 onClick=\{(e) => \{ e.stopPropagation(); onDelete(index); \}\}\cb1 \
\cb3                 className=\cf6 \strokec6 "p-1.5 rounded-md hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"\cf0 \cb1 \strokec4 \
\cb3                 title=\cf6 \strokec6 "Delete"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 Trash2\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  />\cb1 \
\cb3               </button>\cb1 \
\cb3             )\}\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         )\}\cb1 \
\cb3       </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Slide canvas - Better contrast\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlideCanvas\cf0 \strokec4 (\{ slide, index, theme, onUpdate, isPresenting \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  bg = index === \cf8 \strokec8 0\cf0 \strokec4  ? theme.cover : theme.slides[index % theme.slides.length] || theme.cover;\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div \cb1 \
\cb3       key=\{index\} \cb1 \
\cb3       initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , scale: \cf8 \strokec8 0.98\cf0 \strokec4  \}\} \cb1 \
\cb3       animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , scale: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3       transition=\{\{ duration: \cf8 \strokec8 0.3\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"\cf0 \cb1 \strokec4 \
\cb3     >\cb1 \
\cb3       <img src=\{bg\} alt=\cf6 \strokec6 ""\cf0 \strokec4  className=\cf6 \strokec6 "absolute inset-0 w-full h-full object-cover"\cf0 \strokec4  />\cb1 \
\cb3       <div className=\cf6 \strokec6 "absolute inset-0 bg-black/30"\cf0 \strokec4  />\cb1 \
\cb3       <div className=\cf6 \strokec6 "absolute inset-0 p-6 md:p-10 flex flex-col justify-center"\cf0 \strokec4 >\cb1 \
\cb3         \{index === \cf8 \strokec8 0\cf0 \strokec4  ? (\cb1 \
\cb3           <div className=\cf6 \strokec6 "text-center max-w-2xl mx-auto"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 EditableText\cf0 \strokec4  value=\{slide.title\} onChange=\{v => onUpdate(\{ ...slide, title: v \})\} as=\cf6 \strokec6 "h1"\cf0 \strokec4  className=\cf6 \strokec6 "text-2xl md:text-4xl font-bold text-white mb-3"\cf0 \strokec4  placeholder=\cf6 \strokec6 "Title..."\cf0 \strokec4  />\cb1 \
\cb3             \{slide.content?.[\cf8 \strokec8 0\cf0 \strokec4 ] !== \cf2 \strokec2 undefined\cf0 \strokec4  && <\cf5 \strokec5 EditableText\cf0 \strokec4  value=\{slide.content[\cf8 \strokec8 0\cf0 \strokec4 ]\} onChange=\{v => onUpdate(\{ ...slide, content: [v] \})\} className=\cf6 \strokec6 "text-base md:text-lg text-white/70"\cf0 \strokec4  placeholder=\cf6 \strokec6 "Subtitle..."\cf0 \strokec4  />\}\cb1 \
\cb3           </div>\cb1 \
\cb3         ) : (\cb1 \
\cb3           <>\cb1 \
\cb3             <\cf5 \strokec5 EditableText\cf0 \strokec4  value=\{slide.title\} onChange=\{v => onUpdate(\{ ...slide, title: v \})\} as=\cf6 \strokec6 "h1"\cf0 \strokec4  className=\cf6 \strokec6 "text-xl md:text-2xl font-bold text-white mb-4"\cf0 \strokec4  placeholder=\cf6 \strokec6 "Title..."\cf0 \strokec4  />\cb1 \
\cb3             <div className=\cf6 \strokec6 "space-y-2"\cf0 \strokec4 >\cb1 \
\cb3               \{slide.content?.map((item, idx) => (\cb1 \
\cb3                 <div key=\{idx\} className=\cf6 \strokec6 "flex items-start gap-2 group"\cf0 \strokec4 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "w-1.5 h-1.5 rounded-full mt-2"\cf0 \strokec4  style=\{\{ backgroundColor: theme.colors.primary \}\} />\cb1 \
\cb3                   <\cf5 \strokec5 EditableText\cf0 \strokec4  value=\{item\} onChange=\{v => \{ \cf2 \strokec2 const\cf0 \strokec4  c = [...slide.content]; c[idx] = v; onUpdate(\{ ...slide, content: c \}); \}\} className=\cf6 \strokec6 "text-sm md:text-base text-white/90 flex-1"\cf0 \strokec4  />\cb1 \
\cb3                   \{!isPresenting && <button onClick=\{() => onUpdate(\{ ...slide, content: slide.content.filter((_, i) => i !== idx) \})\} className=\cf6 \strokec6 "opacity-0 group-hover:opacity-100 text-red-400 text-xs"\cf0 \strokec4 >\cf9 \cb3 \strokec9 \'d7\cf0 \cb3 \strokec4 </button>\}\cb1 \
\cb3                 </div>\cb1 \
\cb3               ))\}\cb1 \
\cb3               \{!isPresenting && (slide.content?.length || \cf8 \strokec8 0\cf0 \strokec4 ) < \cf8 \strokec8 6\cf0 \strokec4  && (\cb1 \
\cb3                 <button onClick=\{() => onUpdate(\{ ...slide, content: [...(slide.content || []), \cf6 \strokec6 'New point'\cf0 \strokec4 ] \})\} className=\cf6 \strokec6 "flex items-center gap-1 text-white/40 hover:text-white/70 text-sm mt-2"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 Plus\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  /> \cf5 \strokec5 Add\cf0 \cb1 \strokec4 \
\cb3                 </button>\cb1 \
\cb3               )\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </>\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\cb3       \{!isPresenting && (\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-4 right-4 px-3 py-1.5 rounded-full bg-purple-500/30 border border-purple-500/40 text-xs text-white font-medium backdrop-blur-sm"\cf0 \strokec4 >\cb1 \
\cb3           \cf9 \cb3 \strokec9 \uc0\u9999 \u65039 \cf0 \cb3 \strokec4  \cf5 \strokec5 Click\cf0 \strokec4  to edit\cb1 \
\cb3         </div>\cb1 \
\cb3       )\}\cb1 \
\cb3       <div className=\cf6 \strokec6 "absolute bottom-4 right-5 px-2 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-sm font-bold text-white/80"\cf0 \strokec4 >\{index + \cf8 \strokec8 1\cf0 \strokec4 \}</div>\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Share modal\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ShareModal\cf0 \strokec4 (\{ isOpen, onClose, presentationId \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [tab, setTab] = useState(\cf6 \strokec6 'share'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [copied, setCopied] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [exporting, setExporting] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  url = \cf6 \strokec6 `\cf0 \strokec4 $\{window.location.origin\}\cf6 \strokec6 /present/\cf0 \strokec4 $\{presentationId\}\cf6 \strokec6 `\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  copy = () => \{ navigator.clipboard.writeText(url); setCopied(\cf2 \strokec2 true\cf0 \strokec4 ); setTimeout(() => setCopied(\cf2 \strokec2 false\cf0 \strokec4 ), \cf8 \strokec8 2000\cf0 \strokec4 ); toast.success(\cf6 \strokec6 'Copied!'\cf0 \strokec4 ); \};\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  exportTo = \cf2 \strokec2 async\cf0 \strokec4  (f) => \{ setExporting(\cf2 \strokec2 true\cf0 \strokec4 ); \cf2 \strokec2 await\cf0 \strokec4  \cf2 \strokec2 new\cf0 \strokec4  \cf5 \strokec5 Promise\cf0 \strokec4 (r => setTimeout(r, \cf8 \strokec8 1500\cf0 \strokec4 )); toast.success(\cf6 \strokec6 `Exported to \cf0 \strokec4 $\{f\}\cf6 \strokec6 `\cf0 \strokec4 ); setExporting(\cf2 \strokec2 false\cf0 \strokec4 ); \};\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!isOpen) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"\cf0 \strokec4  onClick=\{onClose\}>\cb1 \
\cb3       <motion.div initial=\{\{ scale: \cf8 \strokec8 0.95\cf0 \strokec4  \}\} animate=\{\{ scale: \cf8 \strokec8 1\cf0 \strokec4  \}\} onClick=\{e => e.stopPropagation()\} className=\cf6 \strokec6 "w-full max-w-sm bg-slate-900 border border-white/10 rounded-xl overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex border-b border-white/10"\cf0 \strokec4 >\cb1 \
\cb3           \{[\{ id: \cf6 \strokec6 'share'\cf0 \strokec4 , icon: \cf5 \strokec5 Share2\cf0 \strokec4  \}, \{ id: \cf6 \strokec6 'export'\cf0 \strokec4 , icon: \cf5 \strokec5 Download\cf0 \strokec4  \}].map(t => (\cb1 \
\cb3             <button key=\{t.id\} onClick=\{() => setTab(t.id)\} className=\{cn(\cf6 \strokec6 "flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2"\cf0 \strokec4 , tab === t.id ? \cf6 \strokec6 "text-white border-b-2 border-purple-500"\cf0 \strokec4  : \cf6 \strokec6 "text-slate-400"\cf0 \strokec4 )\}>\cb1 \
\cb3               <t.icon className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\{t.id.charAt(\cf8 \strokec8 0\cf0 \strokec4 ).toUpperCase() + t.id.slice(\cf8 \strokec8 1\cf0 \strokec4 )\}\cb1 \
\cb3             </button>\cb1 \
\cb3           ))\}\cb1 \
\cb3           <button onClick=\{onClose\} className=\cf6 \strokec6 "p-3 text-slate-400"\cf0 \strokec4 ><\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  /></button>\cb1 \
\cb3         </div>\cb1 \
\cb3         <div className=\cf6 \strokec6 "p-4"\cf0 \strokec4 >\cb1 \
\cb3           \{tab === \cf6 \strokec6 'share'\cf0 \strokec4  && (\cb1 \
\cb3             <div className=\cf6 \strokec6 "space-y-3"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex gap-2"\cf0 \strokec4 >\cb1 \
\cb3                 <input value=\{url\} readOnly className=\cf6 \strokec6 "flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white"\cf0 \strokec4  />\cb1 \
\cb3                 <button onClick=\{copy\} className=\{cn(\cf6 \strokec6 "px-3 py-2 rounded-lg text-sm"\cf0 \strokec4 , copied ? \cf6 \strokec6 "bg-green-500 text-white"\cf0 \strokec4  : \cf6 \strokec6 "bg-purple-500 text-white"\cf0 \strokec4 )\}>\cb1 \
\cb3                   \{copied ? <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  /> : <\cf5 \strokec5 Link2\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\}\cb1 \
\cb3                 </button>\cb1 \
\cb3               </div>\cb1 \
\cb3               <button className=\cf6 \strokec6 "w-full flex items-center gap-2 p-3 bg-white/5 rounded-lg text-sm text-white"\cf0 \strokec4 ><\cf5 \strokec5 Mail\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-slate-400"\cf0 \strokec4  />\cf5 \strokec5 Email\cf0 \strokec4  invite</button>\cb1 \
\cb3             </div>\cb1 \
\cb3           )\}\cb1 \
\cb3           \{tab === \cf6 \strokec6 'export'\cf0 \strokec4  && (\cb1 \
\cb3             <div className=\cf6 \strokec6 "space-y-2"\cf0 \strokec4 >\cb1 \
\cb3               \{[\cf6 \strokec6 'PPTX'\cf0 \strokec4 , \cf6 \strokec6 'PDF'\cf0 \strokec4 , \cf6 \strokec6 'PNG'\cf0 \strokec4 ].map(f => (\cb1 \
\cb3                 <button key=\{f\} onClick=\{() => exportTo(f)\} disabled=\{exporting\} className=\cf6 \strokec6 "w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg disabled:opacity-50"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 FileDown\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-purple-400"\cf0 \strokec4  />\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-sm text-white"\cf0 \strokec4 >\{f\}</span>\cb1 \
\cb3                   \{exporting && <\cf5 \strokec5 Loader2\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 animate-spin ml-auto text-purple-400"\cf0 \strokec4  />\}\cb1 \
\cb3                 </button>\cb1 \
\cb3               ))\}\cb1 \
\cb3             </div>\cb1 \
\cb3           )\}\cb1 \
\cb3         </div>\cb1 \
\cb3       </motion.div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Theme panel\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ThemePanel\cf0 \strokec4 (\{ current, onSelect, onClose \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , x: \cf8 \strokec8 20\cf0 \strokec4  \}\} animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , x: \cf8 \strokec8 0\cf0 \strokec4  \}\} exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , x: \cf8 \strokec8 20\cf0 \strokec4  \}\} className=\cf6 \strokec6 "absolute right-2 top-16 bottom-16 w-56 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-3 overflow-auto z-50"\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex items-center justify-between mb-3"\cf0 \strokec4 >\cb1 \
\cb3         <span className=\cf6 \strokec6 "text-white text-sm font-medium"\cf0 \strokec4 >\cf5 \strokec5 Themes\cf0 \strokec4 </span>\cb1 \
\cb3         <button onClick=\{onClose\} className=\cf6 \strokec6 "text-slate-400"\cf0 \strokec4 ><\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  /></button>\cb1 \
\cb3       </div>\cb1 \
\cb3       <div className=\cf6 \strokec6 "space-y-2"\cf0 \strokec4 >\cb1 \
\cb3         \{templateThemes.map(t => (\cb1 \
\cb3           <button key=\{t.id\} onClick=\{() => \{ onSelect(t); toast.success(t.name); \}\} className=\{cn(\cf6 \strokec6 "w-full rounded-lg overflow-hidden"\cf0 \strokec4 , current.id === t.id && \cf6 \strokec6 "ring-2 ring-purple-500"\cf0 \strokec4 )\}>\cb1 \
\cb3             <img src=\{t.cover\} alt=\cf6 \strokec6 ""\cf0 \strokec4  className=\cf6 \strokec6 "w-full aspect-video object-cover"\cf0 \strokec4  />\cb1 \
\cb3             <div className=\cf6 \strokec6 "p-2 bg-black/60 flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-[10px] text-white"\cf0 \strokec4 >\{t.name\}</span>\cb1 \
\cb3               \{current.id === t.id && <\cf5 \strokec5 CheckCircle2\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 text-purple-400"\cf0 \strokec4  />\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </button>\cb1 \
\cb3         ))\}\cb1 \
\cb3       </div>\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // AI panel\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 AIPanel\cf0 \strokec4 (\{ slide, onEnhance, onClose \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [loading, setLoading] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  actions = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'improve'\cf0 \strokec4 , label: \cf6 \strokec6 'Improve'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'shorten'\cf0 \strokec4 , label: \cf6 \strokec6 'Shorten'\cf0 \strokec4 , icon: \cf5 \strokec5 AlignCenter\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'expand'\cf0 \strokec4 , label: \cf6 \strokec6 'Expand'\cf0 \strokec4 , icon: \cf5 \strokec5 List\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'formal'\cf0 \strokec4 , label: \cf6 \strokec6 'Formal'\cf0 \strokec4 , icon: \cf5 \strokec5 Heading1\cf0 \strokec4  \}\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  run = \cf2 \strokec2 async\cf0 \strokec4  (id) => \{\cb1 \
\cb3     setLoading(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  r = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf5 \strokec5 Core\cf0 \strokec4 .\cf5 \strokec5 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3         prompt: \cf6 \strokec6 `\cf0 \strokec4 $\{id === \cf6 \strokec6 'improve'\cf0 \strokec4  ? \cf6 \strokec6 'Improve'\cf0 \strokec4  : id === \cf6 \strokec6 'shorten'\cf0 \strokec4  ? \cf6 \strokec6 'Shorten to 3 points max'\cf0 \strokec4  : id === \cf6 \strokec6 'expand'\cf0 \strokec4  ? \cf6 \strokec6 'Expand with details'\cf0 \strokec4  : \cf6 \strokec6 'Make formal'\cf0 \strokec4 \}\cf6 \strokec6 : Title: \cf0 \strokec4 $\{slide.title\}\cf6 \strokec6 , Content: \cf0 \strokec4 $\{slide.content?.join(\cf6 \strokec6 ', '\cf0 \strokec4 )\}\cf6 \strokec6 . Return JSON: \{"title":"...","content":["..."]\}`\cf0 \strokec4 ,\cb1 \
\cb3         response_json_schema: \{ type: \cf6 \strokec6 'object'\cf0 \strokec4 , properties: \{ title: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \}, content: \{ type: \cf6 \strokec6 'array'\cf0 \strokec4 , items: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \} \} \} \}\cb1 \
\cb3       \});\cb1 \
\cb3       onEnhance(r);\cb1 \
\cb3       toast.success(\cf6 \strokec6 'Enhanced!'\cf0 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  \{ toast.error(\cf6 \strokec6 'Failed'\cf0 \strokec4 ); \}\cb1 \
\cb3     setLoading(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 20\cf0 \strokec4  \}\} animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , y: \cf8 \strokec8 0\cf0 \strokec4  \}\} exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 20\cf0 \strokec4  \}\} className=\cf6 \strokec6 "absolute left-1/2 -translate-x-1/2 bottom-20 w-72 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-3 z-50"\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex items-center justify-between mb-3"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec4 ><\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-purple-400"\cf0 \strokec4  /><span className=\cf6 \strokec6 "text-white text-sm"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4  \cf5 \strokec5 Enhance\cf0 \strokec4 </span></div>\cb1 \
\cb3         <button onClick=\{onClose\} className=\cf6 \strokec6 "text-slate-400"\cf0 \strokec4 ><\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  /></button>\cb1 \
\cb3       </div>\cb1 \
\cb3       <div className=\cf6 \strokec6 "grid grid-cols-2 gap-2"\cf0 \strokec4 >\cb1 \
\cb3         \{actions.map(a => (\cb1 \
\cb3           <button key=\{a.id\} onClick=\{() => run(a.id)\} disabled=\{loading\} className=\cf6 \strokec6 "p-2 rounded-lg bg-white/5 hover:bg-white/10 text-left disabled:opacity-50"\cf0 \strokec4 >\cb1 \
\cb3             <a.icon className=\cf6 \strokec6 "w-4 h-4 text-purple-400 mb-1"\cf0 \strokec4  />\cb1 \
\cb3             <p className=\cf6 \strokec6 "text-xs text-white"\cf0 \strokec4 >\{a.label\}</p>\cb1 \
\cb3           </button>\cb1 \
\cb3         ))\}\cb1 \
\cb3       </div>\cb1 \
\cb3       \{loading && <div className=\cf6 \strokec6 "absolute inset-0 bg-black/60 rounded-xl flex items-center justify-center"\cf0 \strokec4 ><\cf5 \strokec5 Loader2\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-purple-400 animate-spin"\cf0 \strokec4  /></div>\}\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Main editor\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 CinemaEditor\cf0 \strokec4 (\{ presentation, template, onBack \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [slides, setSlides] = useState(presentation?.slides || []);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [current, setCurrent] = useState(\cf8 \strokec8 0\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [theme, setTheme] = useState(templateThemes.find(t => t.id === template?.id) || templateThemes[\cf8 \strokec8 0\cf0 \strokec4 ]);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tool, setTool] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [presenting, setPresenting] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [changed, setChanged] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [shareOpen, setShareOpen] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [title, setTitle] = useState(presentation?.title || \cf6 \strokec6 'Untitled'\cf0 \strokec4 );\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  fn = (e) => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'ArrowRight'\cf0 \strokec4  && current < slides.length - \cf8 \strokec8 1\cf0 \strokec4 ) setCurrent(c => c + \cf8 \strokec8 1\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'ArrowLeft'\cf0 \strokec4  && current > \cf8 \strokec8 0\cf0 \strokec4 ) setCurrent(c => c - \cf8 \strokec8 1\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'Escape'\cf0 \strokec4  && presenting) setPresenting(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \};\cb1 \
\cb3     window.addEventListener(\cf6 \strokec6 'keydown'\cf0 \strokec4 , fn);\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => window.removeEventListener(\cf6 \strokec6 'keydown'\cf0 \strokec4 , fn);\cb1 \
\cb3   \}, [current, slides.length, presenting]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  update = (s) => \{ \cf2 \strokec2 const\cf0 \strokec4  n = [...slides]; n[current] = s; setSlides(n); setChanged(\cf2 \strokec2 true\cf0 \strokec4 ); \};\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  add = () => \{ setSlides([...slides, \{ slide_number: slides.length + \cf8 \strokec8 1\cf0 \strokec4 , type: \cf6 \strokec6 'content'\cf0 \strokec4 , title: \cf6 \strokec6 'New Slide'\cf0 \strokec4 , content: [\cf6 \strokec6 'Add content'\cf0 \strokec4 ] \}]); setCurrent(slides.length); setChanged(\cf2 \strokec2 true\cf0 \strokec4 ); \};\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  dup = () => \{ \cf2 \strokec2 const\cf0 \strokec4  n = [...slides]; n.splice(current + \cf8 \strokec8 1\cf0 \strokec4 , \cf8 \strokec8 0\cf0 \strokec4 , \{ ...slides[current] \}); setSlides(n); setCurrent(current + \cf8 \strokec8 1\cf0 \strokec4 ); setChanged(\cf2 \strokec2 true\cf0 \strokec4 ); \};\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  del = () => \{ \cf2 \strokec2 if\cf0 \strokec4  (slides.length <= \cf8 \strokec8 1\cf0 \strokec4 ) \cf2 \strokec2 return\cf0 \strokec4 ; setSlides(slides.filter((_, i) => i !== current)); \cf2 \strokec2 if\cf0 \strokec4  (current >= slides.length - \cf8 \strokec8 1\cf0 \strokec4 ) setCurrent(slides.length - \cf8 \strokec8 2\cf0 \strokec4 ); setChanged(\cf2 \strokec2 true\cf0 \strokec4 ); \};\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  save = \cf2 \strokec2 async\cf0 \strokec4  () => \{ \cf2 \strokec2 if\cf0 \strokec4  (presentation?.id) \{ \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .update(presentation.id, \{ slides, title \}); setChanged(\cf2 \strokec2 false\cf0 \strokec4 ); toast.success(\cf6 \strokec6 'Saved!'\cf0 \strokec4 ); \} \};\cb1 \
\
\cb3   \cf7 \strokec7 // Toolbar tools\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  tools = [\cb1 \
\cb3     \{ id: \cf6 \strokec6 'ai'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'AI'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'theme'\cf0 \strokec4 , icon: \cf5 \strokec5 Palette\cf0 \strokec4 , label: \cf6 \strokec6 'Theme'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'layout'\cf0 \strokec4 , icon: \cf5 \strokec5 LayoutGrid\cf0 \strokec4 , label: \cf6 \strokec6 'Layout'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'text'\cf0 \strokec4 , icon: \cf5 \strokec5 Type\cf0 \strokec4 , label: \cf6 \strokec6 'Text'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'image'\cf0 \strokec4 , icon: \cf5 \strokec5 ImagePlus\cf0 \strokec4 , label: \cf6 \strokec6 'Image'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'shapes'\cf0 \strokec4 , icon: \cf5 \strokec5 Shapes\cf0 \strokec4 , label: \cf6 \strokec6 'Shapes'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'chart'\cf0 \strokec4 , icon: \cf5 \strokec5 BarChart3\cf0 \strokec4 , label: \cf6 \strokec6 'Chart'\cf0 \strokec4  \},\cb1 \
\cb3     \{ id: \cf6 \strokec6 'table'\cf0 \strokec4 , icon: \cf5 \strokec5 Table\cf0 \strokec4 , label: \cf6 \strokec6 'Table'\cf0 \strokec4  \}\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf7 \strokec7 // Presentation mode\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (presenting) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <motion.div initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\} animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4  \}\} className=\cf6 \strokec6 "fixed inset-0 bg-black z-50 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "w-full max-w-5xl px-6"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 SlideCanvas\cf0 \strokec4  slide=\{slides[current]\} index=\{current\} theme=\{theme\} onUpdate=\{() => \{\}\} isPresenting />\cb1 \
\cb3         </div>\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white/50 text-sm"\cf0 \strokec4 >\cb1 \
\cb3           <button onClick=\{() => setCurrent(c => \cf5 \strokec5 Math\cf0 \strokec4 .max(\cf8 \strokec8 0\cf0 \strokec4 , c - \cf8 \strokec8 1\cf0 \strokec4 ))\} className=\cf6 \strokec6 "p-2 hover:bg-white/10 rounded-lg"\cf0 \strokec4 ><\cf5 \strokec5 ChevronLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  /></button>\cb1 \
\cb3           <span>\{current + \cf8 \strokec8 1\cf0 \strokec4 \} / \{slides.length\}</span>\cb1 \
\cb3           <button onClick=\{() => setCurrent(c => \cf5 \strokec5 Math\cf0 \strokec4 .min(slides.length - \cf8 \strokec8 1\cf0 \strokec4 , c + \cf8 \strokec8 1\cf0 \strokec4 ))\} className=\cf6 \strokec6 "p-2 hover:bg-white/10 rounded-lg"\cf0 \strokec4 ><\cf5 \strokec5 ChevronRight\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  /></button>\cb1 \
\cb3           <button onClick=\{() => setPresenting(\cf2 \strokec2 false\cf0 \strokec4 )\} className=\cf6 \strokec6 "ml-4 px-3 py-1.5 bg-white/10 rounded-lg text-xs"\cf0 \strokec4 >\cf5 \strokec5 Exit\cf0 \strokec4 </button>\cb1 \
\cb3         </div>\cb1 \
\cb3       </motion.div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\} animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4  \}\} className=\cf6 \strokec6 "fixed inset-0 bg-slate-950 flex"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf7 \strokec7 /* Subtle ambient glow */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "fixed inset-0 overflow-hidden pointer-events-none z-0"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px]"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]"\cf0 \strokec4  />\cb1 \
\cb3       </div>\cb1 \
\cb3       \{\cf7 \strokec7 /* Sidebar - Better contrast */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "w-52 bg-slate-900/80 backdrop-blur-xl border-r border-white/10 flex flex-col relative z-10"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "p-4 border-b border-white/10"\cf0 \strokec4 >\cb1 \
\cb3           <button onClick=\{onBack\} className=\cf6 \strokec6 "flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3             \cf5 \strokec5 Back\cf0 \cb1 \strokec4 \
\cb3           </button>\cb1 \
\cb3         </div>\cb1 \
\cb3         \cb1 \
\cb3         \{\cf7 \strokec7 /* Custom scrollbar */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent hover:scrollbar-thumb-white/20"\cf0 \strokec4 >\cb1 \
\cb3           \{slides.map((s, i) => (\cb1 \
\cb3             <\cf5 \strokec5 SlideThumbnail\cf0 \strokec4  \cb1 \
\cb3               key=\{i\} \cb1 \
\cb3               slide=\{s\} \cb1 \
\cb3               index=\{i\} \cb1 \
\cb3               isActive=\{current === i\} \cb1 \
\cb3               onClick=\{() => setCurrent(i)\} \cb1 \
\cb3               theme=\{theme\}\cb1 \
\cb3               onDuplicate=\{dup\}\cb1 \
\cb3               onDelete=\{del\}\cb1 \
\cb3               totalSlides=\{slides.length\}\cb1 \
\cb3             />\cb1 \
\cb3           ))\}\cb1 \
\cb3           <button \cb1 \
\cb3             onClick=\{add\} \cb1 \
\cb3             className=\cf6 \strokec6 "w-full aspect-video rounded-xl border-2 border-dashed border-white/20 hover:border-purple-500 hover:bg-purple-500/10 flex flex-col items-center justify-center gap-1 transition-all group"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Plus\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-slate-500 group-hover:text-purple-400 transition-colors"\cf0 \strokec4  />\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-[10px] text-slate-500 group-hover:text-purple-400"\cf0 \strokec4 >\cf5 \strokec5 Add\cf0 \strokec4  slide</span>\cb1 \
\cb3           </button>\cb1 \
\cb3         </div>\cb1 \
\cb3         \cb1 \
\cb3         <div className=\cf6 \strokec6 "p-4 border-t border-white/10 bg-slate-900/50"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center justify-between text-sm"\cf0 \strokec4 >\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-slate-400"\cf0 \strokec4 >\cf5 \strokec5 Total\cf0 \strokec4 </span>\cb1 \
\cb3             <span className=\cf6 \strokec6 "font-bold text-white"\cf0 \strokec4 >\{slides.length\} slides</span>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Main */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex-1 flex flex-col relative z-10"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf7 \strokec7 /* Top bar - Larger icons, better visibility */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "h-14 px-5 flex items-center justify-between border-b border-white/10 bg-slate-900/50 backdrop-blur-xl"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-3"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-3 h-3 rounded-full shadow-lg"\cf0 \strokec4  style=\{\{ backgroundColor: theme.colors.primary, boxShadow: \cf6 \strokec6 `0 0 10px \cf0 \strokec4 $\{theme.colors.primary\}\cf6 \strokec6 `\cf0 \strokec4  \}\} />\cb1 \
\cb3             <input \cb1 \
\cb3               value=\{title\} \cb1 \
\cb3               onChange=\{e => \{ setTitle(e.target.value); setChanged(\cf2 \strokec2 true\cf0 \strokec4 ); \}\} \cb1 \
\cb3               className=\cf6 \strokec6 "bg-transparent text-white text-base font-semibold focus:outline-none border-b-2 border-transparent focus:border-purple-500 px-1 py-0.5 min-w-[200px]"\cf0 \strokec4  \cb1 \
\cb3             />\cb1 \
\cb3             \{changed && (\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-xs text-amber-400 bg-amber-400/20 px-2 py-1 rounded-full font-medium animate-pulse"\cf0 \strokec4 >\cb1 \
\cb3                 \cf5 \strokec5 Unsaved\cf0 \cb1 \strokec4 \
\cb3               </span>\cb1 \
\cb3             )\}\cb1 \
\cb3           </div>\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3             <button onClick=\{() => \{\}\} className=\cf6 \strokec6 "p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Undo\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3             <button onClick=\{() => \{\}\} className=\cf6 \strokec6 "p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Redo\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-px h-6 bg-white/10 mx-2"\cf0 \strokec4  />\cb1 \
\cb3             \{changed && (\cb1 \
\cb3               <button onClick=\{save\} className=\cf6 \strokec6 "p-2.5 rounded-lg text-green-400 hover:bg-green-500/20 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Save\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3               </button>\cb1 \
\cb3             )\}\cb1 \
\cb3             <button onClick=\{() => setShareOpen(\cf2 \strokec2 true\cf0 \strokec4 )\} className=\cf6 \strokec6 "p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Share2\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3             <button onClick=\{() => setShareOpen(\cf2 \strokec2 true\cf0 \strokec4 )\} className=\cf6 \strokec6 "p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Download\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3             <button \cb1 \
\cb3               onClick=\{() => setPresenting(\cf2 \strokec2 true\cf0 \strokec4 )\} \cb1 \
\cb3               className=\cf6 \strokec6 "ml-3 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Play\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Present\cf0 \cb1 \strokec4 \
\cb3             </button>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Canvas - Better background contrast */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex-1 flex items-center justify-center p-8 relative bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-900"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf7 \strokec7 /* Subtle grid pattern */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "absolute inset-0 opacity-[0.02]"\cf0 \strokec4  style=\{\{ backgroundImage: \cf6 \strokec6 'radial-gradient(circle, white 1px, transparent 1px)'\cf0 \strokec4 , backgroundSize: \cf6 \strokec6 '24px 24px'\cf0 \strokec4  \}\} />\cb1 \
\cb3           \cb1 \
\cb3           \{\cf7 \strokec7 /* Glow effect */\cf0 \strokec4 \}\cb1 \
\cb3           <motion.div \cb1 \
\cb3             animate=\{\{ opacity: [\cf8 \strokec8 0.3\cf0 \strokec4 , \cf8 \strokec8 0.5\cf0 \strokec4 , \cf8 \strokec8 0.3\cf0 \strokec4 ] \}\} \cb1 \
\cb3             transition=\{\{ duration: \cf8 \strokec8 4\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4  \}\} \cb1 \
\cb3             className=\cf6 \strokec6 "absolute inset-0 pointer-events-none"\cf0 \strokec4  \cb1 \
\cb3             style=\{\{ background: \cf6 \strokec6 `radial-gradient(ellipse at center, \cf0 \strokec4 $\{theme.colors.primary\}\cf6 \strokec6 15 0%, transparent 50%)`\cf0 \strokec4  \}\} \cb1 \
\cb3           />\cb1 \
\cb3           \cb1 \
\cb3           <div className=\cf6 \strokec6 "w-full max-w-5xl z-10"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3               \{slides[current] && <\cf5 \strokec5 SlideCanvas\cf0 \strokec4  key=\{current\} slide=\{slides[current]\} index=\{current\} theme=\{theme\} onUpdate=\{update\} isPresenting=\{\cf2 \strokec2 false\cf0 \strokec4 \} />\}\cb1 \
\cb3             </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3           \cb1 \
\cb3           \{\cf7 \strokec7 /* Navigation arrows - Larger */\cf0 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20"\cf0 \strokec4 >\cb1 \
\cb3             <button \cb1 \
\cb3               onClick=\{() => current > \cf8 \strokec8 0\cf0 \strokec4  && setCurrent(c => c - \cf8 \strokec8 1\cf0 \strokec4 )\} \cb1 \
\cb3               disabled=\{current === \cf8 \strokec8 0\cf0 \strokec4 \} \cb1 \
\cb3               className=\{cn(\cb1 \
\cb3                 \cf6 \strokec6 "p-3 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-white/10 pointer-events-auto transition-all hover:bg-slate-800 hover:border-white/20"\cf0 \strokec4 , \cb1 \
\cb3                 current === \cf8 \strokec8 0\cf0 \strokec4  && \cf6 \strokec6 "opacity-30 cursor-not-allowed"\cf0 \cb1 \strokec4 \
\cb3               )\}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 ChevronLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-6 h-6 text-white"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3             <button \cb1 \
\cb3               onClick=\{() => current < slides.length - \cf8 \strokec8 1\cf0 \strokec4  && setCurrent(c => c + \cf8 \strokec8 1\cf0 \strokec4 )\} \cb1 \
\cb3               disabled=\{current === slides.length - \cf8 \strokec8 1\cf0 \strokec4 \} \cb1 \
\cb3               className=\{cn(\cb1 \
\cb3                 \cf6 \strokec6 "p-3 rounded-xl bg-slate-900/80 backdrop-blur-sm border border-white/10 pointer-events-auto transition-all hover:bg-slate-800 hover:border-white/20"\cf0 \strokec4 , \cb1 \
\cb3                 current === slides.length - \cf8 \strokec8 1\cf0 \strokec4  && \cf6 \strokec6 "opacity-30 cursor-not-allowed"\cf0 \cb1 \strokec4 \
\cb3               )\}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 ChevronRight\cf0 \strokec4  className=\cf6 \strokec6 "w-6 h-6 text-white"\cf0 \strokec4  />\cb1 \
\cb3             </button>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Bottom toolbar - Larger, better visibility */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-6 left-1/2 -translate-x-1/2 z-30"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-1 p-2 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"\cf0 \strokec4 >\cb1 \
\cb3             \{tools.map(t => (\cb1 \
\cb3               <button \cb1 \
\cb3                 key=\{t.id\} \cb1 \
\cb3                 onClick=\{() => setTool(tool === t.id ? \cf2 \strokec2 null\cf0 \strokec4  : t.id)\} \cb1 \
\cb3                 className=\{cn(\cb1 \
\cb3                   \cf6 \strokec6 "p-3 rounded-xl transition-all group relative"\cf0 \strokec4 , \cb1 \
\cb3                   tool === t.id \cb1 \
\cb3                     ? \cf6 \strokec6 "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"\cf0 \strokec4  \cb1 \
\cb3                     : \cf6 \strokec6 "text-slate-400 hover:text-white hover:bg-white/10"\cf0 \cb1 \strokec4 \
\cb3                 )\}\cb1 \
\cb3               >\cb1 \
\cb3                 <t.icon className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3                 <span className=\cf6 \strokec6 "absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-white opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none border border-white/10 shadow-lg"\cf0 \strokec4 >\cb1 \
\cb3                   \{t.label\}\cb1 \
\cb3                 </span>\cb1 \
\cb3               </button>\cb1 \
\cb3             ))\}\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-px h-8 bg-white/10 mx-2"\cf0 \strokec4  />\cb1 \
\cb3             <button \cb1 \
\cb3               onClick=\{dup\} \cb1 \
\cb3               className=\cf6 \strokec6 "p-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 group relative transition-colors"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Copy\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-white opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none border border-white/10"\cf0 \strokec4 >\cf5 \strokec5 Duplicate\cf0 \strokec4 </span>\cb1 \
\cb3             </button>\cb1 \
\cb3             <button \cb1 \
\cb3               onClick=\{del\} \cb1 \
\cb3               className=\cf6 \strokec6 "p-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-500/10 group relative transition-colors"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Trash2\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-800 text-xs text-white opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none border border-white/10"\cf0 \strokec4 >\cf5 \strokec5 Delete\cf0 \strokec4 </span>\cb1 \
\cb3             </button>\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-px h-8 bg-white/10 mx-2"\cf0 \strokec4  />\cb1 \
\cb3             <div className=\cf6 \strokec6 "px-4 py-2 rounded-xl bg-white/5"\cf0 \strokec4 >\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-white font-bold text-sm"\cf0 \strokec4 >\{current + \cf8 \strokec8 1\cf0 \strokec4 \}</span>\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-slate-500 text-sm"\cf0 \strokec4 > / \{slides.length\}</span>\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf7 \strokec7 /* Panels */\cf0 \strokec4 \}\cb1 \
\cb3         <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3           \{tool === \cf6 \strokec6 'theme'\cf0 \strokec4  && <\cf5 \strokec5 ThemePanel\cf0 \strokec4  current=\{theme\} onSelect=\{setTheme\} onClose=\{() => setTool(\cf2 \strokec2 null\cf0 \strokec4 )\} />\}\cb1 \
\cb3           \{tool === \cf6 \strokec6 'ai'\cf0 \strokec4  && slides[current] && <\cf5 \strokec5 AIPanel\cf0 \strokec4  slide=\{slides[current]\} onEnhance=\{r => \{ update(\{ ...slides[current], ...r \}); setTool(\cf2 \strokec2 null\cf0 \strokec4 ); \}\} onClose=\{() => setTool(\cf2 \strokec2 null\cf0 \strokec4 )\} />\}\cb1 \
\cb3         </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <\cf5 \strokec5 ShareModal\cf0 \strokec4  isOpen=\{shareOpen\} onClose=\{() => setShareOpen(\cf2 \strokec2 false\cf0 \strokec4 )\} presentationId=\{presentation?.id\} />\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}