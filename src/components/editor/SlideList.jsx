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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Plus\cf0 \strokec4 , \cf5 \strokec5 Trash2\cf0 \strokec4 , \cf5 \strokec5 Copy\cf0 \strokec4 , \cf5 \strokec5 MoreVertical\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 DropdownMenu\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 DropdownMenuContent\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4 ,\cb1 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/dropdown-menu"\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Mini slide preview component\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlidePreview\cf0 \strokec4 (\{ slide, templateStyle, isActive \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div \cb1 \
\cb3       className=\{cn(\cb1 \
\cb3         \cf6 \strokec6 "w-full aspect-[16/9] rounded-md overflow-hidden"\cf0 \strokec4 ,\cb1 \
\cb3         \cf6 \strokec6 "bg-gradient-to-br from-white to-slate-50 shadow-sm"\cf0 \cb1 \strokec4 \
\cb3       )\}\cb1 \
\cb3       style=\{\{ \cb1 \
\cb3         fontFamily: templateStyle?.fontFamily || \cf6 \strokec6 'Inter, sans-serif'\cf0 \strokec4 ,\cb1 \
\cb3       \}\}\cb1 \
\cb3     >\cb1 \
\cb3       \{\cf7 \strokec7 /* Header bar */\cf0 \strokec4 \}\cb1 \
\cb3       <div \cb1 \
\cb3         className=\cf6 \strokec6 "h-[12%] px-2 flex items-center"\cf0 \cb1 \strokec4 \
\cb3         style=\{\{\cb1 \
\cb3           background: \cf6 \strokec6 `linear-gradient(135deg, \cf0 \strokec4 $\{templateStyle?.primaryColor || \cf6 \strokec6 '#4f46e5'\cf0 \strokec4 \}\cf6 \strokec6  0%, \cf0 \strokec4 $\{templateStyle?.secondaryColor || \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 \}\cf6 \strokec6  100%)`\cf0 \strokec4 ,\cb1 \
\cb3         \}\}\cb1 \
\cb3       >\cb1 \
\cb3         <div className=\cf6 \strokec6 "text-[6px] text-white font-medium truncate"\cf0 \strokec4 >\cb1 \
\cb3           \{slide.title || \cf6 \strokec6 'Untitled'\cf0 \strokec4 \}\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3       \cb1 \
\cb3       \{\cf7 \strokec7 /* Content preview */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "p-2 flex-1"\cf0 \strokec4 >\cb1 \
\cb3         \{slide.content && slide.content.length > \cf8 \strokec8 0\cf0 \strokec4  && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "space-y-0.5"\cf0 \strokec4 >\cb1 \
\cb3             \{slide.content.slice(\cf8 \strokec8 0\cf0 \strokec4 , \cf8 \strokec8 3\cf0 \strokec4 ).map((item, idx) => (\cb1 \
\cb3               <div key=\{idx\} className=\cf6 \strokec6 "flex items-start gap-1"\cf0 \strokec4 >\cb1 \
\cb3                 <div \cb1 \
\cb3                   className=\cf6 \strokec6 "w-0.5 h-0.5 rounded-full mt-0.5 flex-shrink-0"\cf0 \cb1 \strokec4 \
\cb3                   style=\{\{ backgroundColor: templateStyle?.primaryColor || \cf6 \strokec6 '#4f46e5'\cf0 \strokec4  \}\}\cb1 \
\cb3                 />\cb1 \
\cb3                 <div className=\cf6 \strokec6 "text-[4px] text-slate-600 line-clamp-1"\cf0 \strokec4 >\cb1 \
\cb3                   \{item\}\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             ))\}\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\cb3         \cb1 \
\cb3         \{\cf7 \strokec7 /* Image placeholder if has images */\cf0 \strokec4 \}\cb1 \
\cb3         \{slide.images && slide.images.length > \cf8 \strokec8 0\cf0 \strokec4  && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "mt-1 grid grid-cols-2 gap-0.5"\cf0 \strokec4 >\cb1 \
\cb3             \{slide.images.slice(\cf8 \strokec8 0\cf0 \strokec4 , \cf8 \strokec8 2\cf0 \strokec4 ).map((img, idx) => (\cb1 \
\cb3               <img \cb1 \
\cb3                 key=\{idx\} \cb1 \
\cb3                 src=\{img\} \cb1 \
\cb3                 alt=\cf6 \strokec6 ""\cf0 \strokec4  \cb1 \
\cb3                 className=\cf6 \strokec6 "w-full h-4 object-cover rounded-sm"\cf0 \cb1 \strokec4 \
\cb3               />\cb1 \
\cb3             ))\}\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlideList\cf0 \strokec4 (\{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   slides, \cb1 \
\cb3   currentSlide, \cb1 \
\cb3   onSlideSelect, \cb1 \
\cb3   onAddSlide,\cb1 \
\cb3   onDeleteSlide,\cb1 \
\cb3   onDuplicateSlide,\cb1 \
\cb3   templateStyle,\cb1 \
\cb3   isPresentationMode \cb1 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [hoveredSlide, setHoveredSlide] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isPresentationMode) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleDuplicate = (idx, e) => \{\cb1 \
\cb3     e.stopPropagation();\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (onDuplicateSlide) \{\cb1 \
\cb3       onDuplicateSlide(idx);\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleDelete = (idx, e) => \{\cb1 \
\cb3     e.stopPropagation();\cb1 \
\cb3     onDeleteSlide(idx);\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "w-64 bg-slate-50 border-r border-slate-200 flex flex-col overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf7 \strokec7 /* Header */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "p-4 border-b border-slate-200 flex-shrink-0 bg-white"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center justify-between mb-3"\cf0 \strokec4 >\cb1 \
\cb3           <span className=\cf6 \strokec6 "text-sm font-semibold text-slate-700"\cf0 \strokec4 >\cf5 \strokec5 Slides\cf0 \strokec4 </span>\cb1 \
\cb3           <span className=\cf6 \strokec6 "text-xs text-slate-400"\cf0 \strokec4 >\{slides.length\}</span>\cb1 \
\cb3         </div>\cb1 \
\cb3         <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3           onClick=\{onAddSlide\}\cb1 \
\cb3           className=\cf6 \strokec6 "w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md"\cf0 \cb1 \strokec4 \
\cb3           size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <\cf5 \strokec5 Plus\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3           \cf5 \strokec5 Add\cf0 \strokec4  \cf5 \strokec5 Slide\cf0 \cb1 \strokec4 \
\cb3         </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Slides list */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex-1 overflow-y-auto p-3 space-y-3"\cf0 \strokec4 >\cb1 \
\cb3         \{slides.map((slide, idx) => (\cb1 \
\cb3           <div\cb1 \
\cb3             key=\{idx\}\cb1 \
\cb3             className=\{cn(\cb1 \
\cb3               \cf6 \strokec6 "group relative rounded-xl transition-all duration-200 cursor-pointer"\cf0 \strokec4 ,\cb1 \
\cb3               currentSlide === idx\cb1 \
\cb3                 ? \cf6 \strokec6 "ring-2 ring-indigo-600 ring-offset-2 shadow-lg scale-[1.02]"\cf0 \cb1 \strokec4 \
\cb3                 : \cf6 \strokec6 "hover:shadow-md hover:scale-[1.01]"\cf0 \cb1 \strokec4 \
\cb3             )\}\cb1 \
\cb3             onClick=\{() => onSlideSelect(idx)\}\cb1 \
\cb3             onMouseEnter=\{() => setHoveredSlide(idx)\}\cb1 \
\cb3             onMouseLeave=\{() => setHoveredSlide(\cf2 \strokec2 null\cf0 \strokec4 )\}\cb1 \
\cb3           >\cb1 \
\cb3             \{\cf7 \strokec7 /* Slide number badge */\cf0 \strokec4 \}\cb1 \
\cb3             <div className=\{cn(\cb1 \
\cb3               \cf6 \strokec6 "absolute -left-1 -top-1 z-10 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shadow-md"\cf0 \strokec4 ,\cb1 \
\cb3               currentSlide === idx \cb1 \
\cb3                 ? \cf6 \strokec6 "bg-indigo-600 text-white"\cf0 \strokec4  \cb1 \
\cb3                 : \cf6 \strokec6 "bg-white text-slate-600 border border-slate-200"\cf0 \cb1 \strokec4 \
\cb3             )\}>\cb1 \
\cb3               \{idx + \cf8 \strokec8 1\cf0 \strokec4 \}\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf7 \strokec7 /* Actions menu */\cf0 \strokec4 \}\cb1 \
\cb3             <div className=\{cn(\cb1 \
\cb3               \cf6 \strokec6 "absolute right-1 top-1 z-10 transition-opacity"\cf0 \strokec4 ,\cb1 \
\cb3               hoveredSlide === idx || currentSlide === idx ? \cf6 \strokec6 "opacity-100"\cf0 \strokec4  : \cf6 \strokec6 "opacity-0"\cf0 \cb1 \strokec4 \
\cb3             )\}>\cb1 \
\cb3               <\cf5 \strokec5 DropdownMenu\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4  asChild>\cb1 \
\cb3                   <button className=\cf6 \strokec6 "w-6 h-6 rounded-full bg-white/90 backdrop-blur shadow-sm flex items-center justify-center hover:bg-white"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 MoreVertical\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3                   </button>\cb1 \
\cb3                 </\cf5 \strokec5 DropdownMenuTrigger\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 DropdownMenuContent\cf0 \strokec4  align=\cf6 \strokec6 "end"\cf0 \strokec4  className=\cf6 \strokec6 "w-40"\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4  onClick=\{(e) => handleDuplicate(idx, e)\}>\cb1 \
\cb3                     <\cf5 \strokec5 Copy\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Duplicate\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4  \cb1 \
\cb3                     onClick=\{(e) => handleDelete(idx, e)\}\cb1 \
\cb3                     className=\cf6 \strokec6 "text-red-600 focus:text-red-600"\cf0 \cb1 \strokec4 \
\cb3                     disabled=\{slides.length <= \cf8 \strokec8 1\cf0 \strokec4 \}\cb1 \
\cb3                   >\cb1 \
\cb3                     <\cf5 \strokec5 Trash2\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                     \cf5 \strokec5 Delete\cf0 \cb1 \strokec4 \
\cb3                   </\cf5 \strokec5 DropdownMenuItem\cf0 \strokec4 >\cb1 \
\cb3                 </\cf5 \strokec5 DropdownMenuContent\cf0 \strokec4 >\cb1 \
\cb3               </\cf5 \strokec5 DropdownMenu\cf0 \strokec4 >\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf7 \strokec7 /* Slide preview */\cf0 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 SlidePreview\cf0 \strokec4  \cb1 \
\cb3                 slide=\{slide\} \cb1 \
\cb3                 templateStyle=\{templateStyle\}\cb1 \
\cb3                 isActive=\{currentSlide === idx\}\cb1 \
\cb3               />\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf7 \strokec7 /* Slide title */\cf0 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "mt-2 px-1"\cf0 \strokec4 >\cb1 \
\cb3               <p className=\cf6 \strokec6 "text-xs font-medium text-slate-700 truncate"\cf0 \strokec4 >\cb1 \
\cb3                 \{slide.title || \cf6 \strokec6 `Slide \cf0 \strokec4 $\{idx + \cf8 \strokec8 1\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               </p>\cb1 \
\cb3               \{slide.layout && (\cb1 \
\cb3                 <p className=\cf6 \strokec6 "text-[10px] text-slate-400 capitalize"\cf0 \strokec4 >\cb1 \
\cb3                   \{slide.layout.replace(\cf6 \strokec6 '-'\cf0 \strokec4 , \cf6 \strokec6 ' '\cf0 \strokec4 )\}\cb1 \
\cb3                 </p>\cb1 \
\cb3               )\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\cb3         ))\}\cb1 \
\
\cb3         \{\cf7 \strokec7 /* AI suggest slide */\cf0 \strokec4 \}\cb1 \
\cb3         <button \cb1 \
\cb3           onClick=\{onAddSlide\}\cb1 \
\cb3           className=\cf6 \strokec6 "w-full aspect-[16/9] rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 hover:border-indigo-400 hover:bg-indigo-50/50 transition-all group"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-indigo-600"\cf0 \strokec4  />\cb1 \
\cb3           </div>\cb1 \
\cb3           <span className=\cf6 \strokec6 "text-xs text-slate-500 group-hover:text-indigo-600"\cf0 \strokec4 >\cb1 \
\cb3             \cf5 \strokec5 Add\cf0 \strokec4  \cf2 \strokec2 with\cf0 \strokec4  \cf5 \strokec5 AI\cf0 \cb1 \strokec4 \
\cb3           </span>\cb1 \
\cb3         </button>\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}