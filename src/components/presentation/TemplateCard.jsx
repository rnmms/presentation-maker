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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Badge\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Check\cf0 \strokec4 , \cf5 \strokec5 Eye\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 TemplateCard\cf0 \strokec4 (\{ template, isSelected, onSelect \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [isHovered, setIsHovered] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 20\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       whileHover=\{\{ y: -\cf7 \strokec7 4\cf0 \strokec4  \}\}\cb1 \
\cb3       whileTap=\{\{ scale: \cf7 \strokec7 0.98\cf0 \strokec4  \}\}\cb1 \
\cb3       transition=\{\{ duration: \cf7 \strokec7 0.2\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\{cn(\cb1 \
\cb3         \cf6 \strokec6 "group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"\cf0 \strokec4 ,\cb1 \
\cb3         isSelected \cb1 \
\cb3           ? \cf6 \strokec6 "ring-2 sm:ring-4 ring-indigo-500 ring-offset-1 sm:ring-offset-2 shadow-xl sm:shadow-2xl shadow-indigo-500/20"\cf0 \strokec4  \cb1 \
\cb3           : \cf6 \strokec6 "shadow-md sm:shadow-lg hover:shadow-xl"\cf0 \cb1 \strokec4 \
\cb3       )\}\cb1 \
\cb3       onClick=\{() => onSelect(template)\}\cb1 \
\cb3       onMouseEnter=\{() => setIsHovered(\cf2 \strokec2 true\cf0 \strokec4 )\}\cb1 \
\cb3       onMouseLeave=\{() => setIsHovered(\cf2 \strokec2 false\cf0 \strokec4 )\}\cb1 \
\cb3     >\cb1 \
\cb3       \{\cf8 \strokec8 /* Image Container */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "relative aspect-[16/9] overflow-hidden bg-slate-100"\cf0 \strokec4 >\cb1 \
\cb3         <img\cb1 \
\cb3           src=\{template.cover\}\cb1 \
\cb3           alt=\{template.name\}\cb1 \
\cb3           className=\{cn(\cb1 \
\cb3             \cf6 \strokec6 "w-full h-full object-cover transition-transform duration-500"\cf0 \strokec4 ,\cb1 \
\cb3             isHovered && \cf6 \strokec6 "scale-110"\cf0 \cb1 \strokec4 \
\cb3           )\}\cb1 \
\cb3         />\cb1 \
\cb3         \cb1 \
\cb3         \{\cf8 \strokec8 /* Gradient Overlay - Always visible on mobile for selected */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\{cn(\cb1 \
\cb3           \cf6 \strokec6 "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300"\cf0 \strokec4 ,\cb1 \
\cb3           isHovered || isSelected ? \cf6 \strokec6 "opacity-100"\cf0 \strokec4  : \cf6 \strokec6 "opacity-0 sm:opacity-0"\cf0 \cb1 \strokec4 \
\cb3         )\} />\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Hover Actions - Hidden on mobile */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\{cn(\cb1 \
\cb3           \cf6 \strokec6 "absolute inset-0 hidden sm:flex items-center justify-center gap-3 transition-opacity duration-300"\cf0 \strokec4 ,\cb1 \
\cb3           isHovered ? \cf6 \strokec6 "opacity-100"\cf0 \strokec4  : \cf6 \strokec6 "opacity-0"\cf0 \cb1 \strokec4 \
\cb3         )\}>\cb1 \
\cb3           <button className=\cf6 \strokec6 "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg hover:scale-110 transition-transform"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Eye\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5 text-slate-700"\cf0 \strokec4  />\cb1 \
\cb3           </button>\cb1 \
\cb3         </div>\cb1 \
\cb3         \cb1 \
\cb3         \{\cf8 \strokec8 /* Selected Badge */\cf0 \strokec4 \}\cb1 \
\cb3         \{isSelected && (\cb1 \
\cb3           <motion.div \cb1 \
\cb3             initial=\{\{ scale: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Check\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 sm:w-4 sm:h-4 text-white"\cf0 \strokec4  />\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         )\}\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Category Badge - Hidden on very small screens */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-2 left-2 sm:top-3 sm:left-3 hidden sm:block"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Badge\cf0 \strokec4  className=\cf6 \strokec6 "bg-white/90 backdrop-blur text-slate-700 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5"\cf0 \strokec4 >\cb1 \
\cb3             \{template.category\}\cb1 \
\cb3           </\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Info Section */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "p-2.5 sm:p-4 bg-white"\cf0 \strokec4 >\cb1 \
\cb3         <h3 className=\{cn(\cb1 \
\cb3           \cf6 \strokec6 "font-semibold text-slate-800 text-xs sm:text-base mb-1 sm:mb-2 line-clamp-1 transition-colors"\cf0 \strokec4 ,\cb1 \
\cb3           isSelected && \cf6 \strokec6 "text-indigo-600"\cf0 \cb1 \strokec4 \
\cb3         )\}>\cb1 \
\cb3           \{template.name\}\cb1 \
\cb3         </h3>\cb1 \
\cb3         <div className=\cf6 \strokec6 "hidden sm:flex flex-wrap gap-1.5"\cf0 \strokec4 >\cb1 \
\cb3           \{template.tags.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 3\cf0 \strokec4 ).map((tag, idx) => (\cb1 \
\cb3             <span \cb1 \
\cb3               key=\{idx\}\cb1 \
\cb3               className=\cf6 \strokec6 "text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               \{tag\}\cb1 \
\cb3             </span>\cb1 \
\cb3           ))\}\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Selection indicator line */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\{cn(\cb1 \
\cb3         \cf6 \strokec6 "absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform duration-300"\cf0 \strokec4 ,\cb1 \
\cb3         isSelected ? \cf6 \strokec6 "scale-x-100"\cf0 \strokec4  : \cf6 \strokec6 "scale-x-0"\cf0 \cb1 \strokec4 \
\cb3       )\} />\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}