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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect, useRef \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Image\cf0 \strokec4 , \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 Quote\cf0 \strokec4 , \cf5 \strokec5 ListChecks\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Layout\cf0 \strokec4 , \cf5 \strokec5 Type\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 FileText\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 PlusCircle\cf0 \strokec4 , \cf5 \strokec5 Trash2\cf0 \strokec4 , \cf5 \strokec5 Copy\cf0 \strokec4 , \cf5 \strokec5 ArrowUp\cf0 \strokec4 , \cf5 \strokec5 ArrowDown\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  commands = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{\cb1 \
\cb3     category: \cf6 \strokec6 'AI'\cf0 \strokec4 ,\cb1 \
\cb3     items: [\cb1 \
\cb3       \{ id: \cf6 \strokec6 'ai-enhance'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , label: \cf6 \strokec6 'Enhance with AI'\cf0 \strokec4 , description: \cf6 \strokec6 'Improve slide content'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'ai-expand'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'Expand content'\cf0 \strokec4 , description: \cf6 \strokec6 'Add more details'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'ai-image'\cf0 \strokec4 , icon: \cf5 \strokec5 Image\cf0 \strokec4 , label: \cf6 \strokec6 'Generate image'\cf0 \strokec4 , description: \cf6 \strokec6 'Create AI image'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'ai-rewrite'\cf0 \strokec4 , icon: \cf5 \strokec5 FileText\cf0 \strokec4 , label: \cf6 \strokec6 'Rewrite slide'\cf0 \strokec4 , description: \cf6 \strokec6 'Fresh perspective'\cf0 \strokec4  \},\cb1 \
\cb3     ]\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     category: \cf6 \strokec6 'Insert'\cf0 \strokec4 ,\cb1 \
\cb3     items: [\cb1 \
\cb3       \{ id: \cf6 \strokec6 'add-bullet'\cf0 \strokec4 , icon: \cf5 \strokec5 ListChecks\cf0 \strokec4 , label: \cf6 \strokec6 'Add bullet point'\cf0 \strokec4 , description: \cf6 \strokec6 'New content item'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'add-chart'\cf0 \strokec4 , icon: \cf5 \strokec5 BarChart3\cf0 \strokec4 , label: \cf6 \strokec6 'Add chart'\cf0 \strokec4 , description: \cf6 \strokec6 'Data visualization'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'add-quote'\cf0 \strokec4 , icon: \cf5 \strokec5 Quote\cf0 \strokec4 , label: \cf6 \strokec6 'Add quote'\cf0 \strokec4 , description: \cf6 \strokec6 'Inspirational quote'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'add-image'\cf0 \strokec4 , icon: \cf5 \strokec5 Image\cf0 \strokec4 , label: \cf6 \strokec6 'Add image'\cf0 \strokec4 , description: \cf6 \strokec6 'Upload or generate'\cf0 \strokec4  \},\cb1 \
\cb3     ]\cb1 \
\cb3   \},\cb1 \
\cb3   \{\cb1 \
\cb3     category: \cf6 \strokec6 'Slide'\cf0 \strokec4 ,\cb1 \
\cb3     items: [\cb1 \
\cb3       \{ id: \cf6 \strokec6 'new-slide'\cf0 \strokec4 , icon: \cf5 \strokec5 PlusCircle\cf0 \strokec4 , label: \cf6 \strokec6 'New slide'\cf0 \strokec4 , description: \cf6 \strokec6 'Add after current'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'duplicate'\cf0 \strokec4 , icon: \cf5 \strokec5 Copy\cf0 \strokec4 , label: \cf6 \strokec6 'Duplicate slide'\cf0 \strokec4 , description: \cf6 \strokec6 'Copy this slide'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'change-layout'\cf0 \strokec4 , icon: \cf5 \strokec5 Layout\cf0 \strokec4 , label: \cf6 \strokec6 'Change layout'\cf0 \strokec4 , description: \cf6 \strokec6 'Switch layout'\cf0 \strokec4  \},\cb1 \
\cb3       \{ id: \cf6 \strokec6 'delete-slide'\cf0 \strokec4 , icon: \cf5 \strokec5 Trash2\cf0 \strokec4 , label: \cf6 \strokec6 'Delete slide'\cf0 \strokec4 , description: \cf6 \strokec6 'Remove slide'\cf0 \strokec4 , danger: \cf2 \strokec2 true\cf0 \strokec4  \},\cb1 \
\cb3     ]\cb1 \
\cb3   \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlashCommandMenu\cf0 \strokec4 (\{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   isOpen, \cb1 \
\cb3   onClose, \cb1 \
\cb3   onCommand, \cb1 \
\cb3   position,\cb1 \
\cb3   searchQuery = \cf6 \strokec6 ''\cf0 \strokec4  \cb1 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedIndex, setSelectedIndex] = useState(\cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [filteredCommands, setFilteredCommands] = useState(commands);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  menuRef = useRef(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (searchQuery) \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  query = searchQuery.toLowerCase();\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  filtered = commands.map(category => (\{\cb1 \
\cb3         ...category,\cb1 \
\cb3         items: category.items.filter(\cb1 \
\cb3           item => \cb1 \
\cb3             item.label.toLowerCase().includes(query) || \cb1 \
\cb3             item.description.toLowerCase().includes(query)\cb1 \
\cb3         )\cb1 \
\cb3       \})).filter(category => category.items.length > \cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\cb3       setFilteredCommands(filtered);\cb1 \
\cb3       setSelectedIndex(\cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3       setFilteredCommands(commands);\cb1 \
\cb3     \}\cb1 \
\cb3   \}, [searchQuery]);\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  handleKeyDown = (e) => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (!isOpen) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\
\cb3       \cf2 \strokec2 const\cf0 \strokec4  allItems = filteredCommands.flatMap(c => c.items);\cb1 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 switch\cf0 \strokec4  (e.key) \{\cb1 \
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'ArrowDown'\cf0 \strokec4 :\cb1 \
\cb3           e.preventDefault();\cb1 \
\cb3           setSelectedIndex(prev => (prev + \cf7 \strokec7 1\cf0 \strokec4 ) % allItems.length);\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'ArrowUp'\cf0 \strokec4 :\cb1 \
\cb3           e.preventDefault();\cb1 \
\cb3           setSelectedIndex(prev => (prev - \cf7 \strokec7 1\cf0 \strokec4  + allItems.length) % allItems.length);\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'Enter'\cf0 \strokec4 :\cb1 \
\cb3           e.preventDefault();\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (allItems[selectedIndex]) \{\cb1 \
\cb3             onCommand(allItems[selectedIndex].id);\cb1 \
\cb3             onClose();\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'Escape'\cf0 \strokec4 :\cb1 \
\cb3           e.preventDefault();\cb1 \
\cb3           onClose();\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     window.addEventListener(\cf6 \strokec6 'keydown'\cf0 \strokec4 , handleKeyDown);\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => window.removeEventListener(\cf6 \strokec6 'keydown'\cf0 \strokec4 , handleKeyDown);\cb1 \
\cb3   \}, [isOpen, filteredCommands, selectedIndex, onCommand, onClose]);\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!isOpen) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 let\cf0 \strokec4  globalIndex = \cf7 \strokec7 0\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3       <motion.div\cb1 \
\cb3         ref=\{menuRef\}\cb1 \
\cb3         initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: -\cf7 \strokec7 10\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3         animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3         exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: -\cf7 \strokec7 10\cf0 \strokec4 , scale: \cf7 \strokec7 0.95\cf0 \strokec4  \}\}\cb1 \
\cb3         className=\cf6 \strokec6 "fixed z-50 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"\cf0 \cb1 \strokec4 \
\cb3         style=\{\{ \cb1 \
\cb3           left: position?.x || \cf6 \strokec6 '50%'\cf0 \strokec4 , \cb1 \
\cb3           top: position?.y || \cf6 \strokec6 '50%'\cf0 \strokec4 ,\cb1 \
\cb3           transform: position ? \cf6 \strokec6 'none'\cf0 \strokec4  : \cf6 \strokec6 'translate(-50%, -50%)'\cf0 \cb1 \strokec4 \
\cb3         \}\}\cb1 \
\cb3       >\cb1 \
\cb3         \{\cf8 \strokec8 /* Search indicator */\cf0 \strokec4 \}\cb1 \
\cb3         \{searchQuery && (\cb1 \
\cb3           <div className=\cf6 \strokec6 "px-3 py-2 border-b border-slate-100 bg-slate-50"\cf0 \strokec4 >\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-xs text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 Searching\cf0 \strokec4 : </span>\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-xs font-medium text-indigo-600"\cf0 \strokec4 >\{searchQuery\}</span>\cb1 \
\cb3           </div>\cb1 \
\cb3         )\}\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "max-h-80 overflow-y-auto py-2"\cf0 \strokec4 >\cb1 \
\cb3           \{filteredCommands.length === \cf7 \strokec7 0\cf0 \strokec4  ? (\cb1 \
\cb3             <div className=\cf6 \strokec6 "px-4 py-6 text-center text-slate-400 text-sm"\cf0 \strokec4 >\cb1 \
\cb3               \cf5 \strokec5 No\cf0 \strokec4  commands found\cb1 \
\cb3             </div>\cb1 \
\cb3           ) : (\cb1 \
\cb3             filteredCommands.map((category) => (\cb1 \
\cb3               <div key=\{category.category\}>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "px-3 py-1.5"\cf0 \strokec4 >\cb1 \
\cb3                   <span className=\cf6 \strokec6 "text-[10px] font-semibold text-slate-400 uppercase tracking-wider"\cf0 \strokec4 >\cb1 \
\cb3                     \{category.category\}\cb1 \
\cb3                   </span>\cb1 \
\cb3                 </div>\cb1 \
\cb3                 \{category.items.map((item) => \{\cb1 \
\cb3                   \cf2 \strokec2 const\cf0 \strokec4  currentIndex = globalIndex++;\cb1 \
\cb3                   \cf2 \strokec2 const\cf0 \strokec4  isSelected = currentIndex === selectedIndex;\cb1 \
\cb3                   \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = item.icon;\cb1 \
\cb3                   \cb1 \
\cb3                   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3                     <button\cb1 \
\cb3                       key=\{item.id\}\cb1 \
\cb3                       onClick=\{() => \{\cb1 \
\cb3                         onCommand(item.id);\cb1 \
\cb3                         onClose();\cb1 \
\cb3                       \}\}\cb1 \
\cb3                       className=\{\cf6 \strokec6 `w-full px-3 py-2 flex items-center gap-3 transition-colors \cf0 \strokec4 $\{\cb1 \
\cb3                         isSelected \cb1 \
\cb3                           ? \cf6 \strokec6 'bg-indigo-50 text-indigo-900'\cf0 \strokec4  \cb1 \
\cb3                           : \cf6 \strokec6 'hover:bg-slate-50 text-slate-700'\cf0 \cb1 \strokec4 \
\cb3                       \}\cf6 \strokec6  \cf0 \strokec4 $\{item.danger ? \cf6 \strokec6 'text-red-600 hover:bg-red-50'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3                     >\cb1 \
\cb3                       <div className=\{\cf6 \strokec6 `w-8 h-8 rounded-lg flex items-center justify-center \cf0 \strokec4 $\{\cb1 \
\cb3                         item.danger \cb1 \
\cb3                           ? \cf6 \strokec6 'bg-red-100'\cf0 \strokec4  \cb1 \
\cb3                           : isSelected \cb1 \
\cb3                             ? \cf6 \strokec6 'bg-indigo-100'\cf0 \strokec4  \cb1 \
\cb3                             : \cf6 \strokec6 'bg-slate-100'\cf0 \cb1 \strokec4 \
\cb3                       \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3                         <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{\cf6 \strokec6 `w-4 h-4 \cf0 \strokec4 $\{\cb1 \
\cb3                           item.danger ? \cf6 \strokec6 'text-red-600'\cf0 \strokec4  : isSelected ? \cf6 \strokec6 'text-indigo-600'\cf0 \strokec4  : \cf6 \strokec6 'text-slate-500'\cf0 \cb1 \strokec4 \
\cb3                         \}\cf6 \strokec6 `\cf0 \strokec4 \} />\cb1 \
\cb3                       </div>\cb1 \
\cb3                       <div className=\cf6 \strokec6 "flex-1 text-left"\cf0 \strokec4 >\cb1 \
\cb3                         <p className=\cf6 \strokec6 "text-sm font-medium"\cf0 \strokec4 >\{item.label\}</p>\cb1 \
\cb3                         <p className=\cf6 \strokec6 "text-xs text-slate-400"\cf0 \strokec4 >\{item.description\}</p>\cb1 \
\cb3                       </div>\cb1 \
\cb3                       \{isSelected && (\cb1 \
\cb3                         <span className=\cf6 \strokec6 "text-[10px] text-indigo-400 bg-indigo-100 px-1.5 py-0.5 rounded"\cf0 \strokec4 >\cb1 \
\cb3                           \cf5 \strokec5 Enter\cf0 \strokec4  \cf9 \strokec9 \uc0\u8629 \cf0 \cb1 \strokec4 \
\cb3                         </span>\cb1 \
\cb3                       )\}\cb1 \
\cb3                     </button>\cb1 \
\cb3                   );\cb1 \
\cb3                 \})\}\cb1 \
\cb3               </div>\cb1 \
\cb3             ))\cb1 \
\cb3           )\}\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "px-3 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2 text-[10px] text-slate-400"\cf0 \strokec4 >\cb1 \
\cb3             <span className=\cf6 \strokec6 "px-1.5 py-0.5 bg-slate-200 rounded"\cf0 \strokec4 >\cf9 \strokec9 \uc0\u8593 \u8595 \cf0 \strokec4 </span>\cb1 \
\cb3             <span>\cf5 \strokec5 Navigate\cf0 \strokec4 </span>\cb1 \
\cb3           </div>\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2 text-[10px] text-slate-400"\cf0 \strokec4 >\cb1 \
\cb3             <span className=\cf6 \strokec6 "px-1.5 py-0.5 bg-slate-200 rounded"\cf0 \strokec4 >\cf5 \strokec5 Esc\cf0 \strokec4 </span>\cb1 \
\cb3             <span>\cf5 \strokec5 Close\cf0 \strokec4 </span>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3       </motion.div>\cb1 \
\cb3     </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}