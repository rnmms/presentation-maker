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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Type\cf0 \strokec4 , \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 Layout\cf0 \strokec4  as \cf5 \strokec5 LayoutIcon\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Image\cf0 \strokec4  as \cf5 \strokec5 ImageIcon\cf0 \strokec4 , \cf5 \strokec5 Shapes\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 X\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 LayoutPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './LayoutPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 TypographyPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './TypographyPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ColorThemePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ColorThemePanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ImagePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ImagePanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ChartPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ChartPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 InfographicsPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './InfographicsPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 AIEnhancePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './AIEnhancePanel'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 CompactRightPanel\cf0 \strokec4 (\{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   slide,\cb1 \
\cb3   onUpdateSlide,\cb1 \
\cb3   currentLayout,\cb1 \
\cb3   onLayoutChange,\cb1 \
\cb3   currentFont,\cb1 \
\cb3   onFontChange,\cb1 \
\cb3   currentTheme,\cb1 \
\cb3   onThemeChange,\cb1 \
\cb3   onAddInfographic,\cb1 \
\cb3   onAddChart,\cb1 \
\cb3   onAddImage,\cb1 \
\cb3   presentationId\cb1 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [activePanel, setActivePanel] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  tools = [\cb1 \
\cb3     \{ \cb1 \
\cb3       id: \cf6 \strokec6 'ai'\cf0 \strokec4 , \cb1 \
\cb3       icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cb1 \
\cb3       label: \cf6 \strokec6 'AI'\cf0 \strokec4 ,\cb1 \
\cb3       shortcut: \cf6 \strokec6 'A'\cf0 \strokec4 ,\cb1 \
\cb3       highlight: \cf2 \strokec2 true\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{ \cb1 \
\cb3       id: \cf6 \strokec6 'layout'\cf0 \strokec4 , \cb1 \
\cb3       icon: \cf5 \strokec5 LayoutIcon\cf0 \strokec4 , \cb1 \
\cb3       label: \cf6 \strokec6 'Layout'\cf0 \strokec4 ,\cb1 \
\cb3       shortcut: \cf6 \strokec6 'L'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{ \cb1 \
\cb3       id: \cf6 \strokec6 'text'\cf0 \strokec4 , \cb1 \
\cb3       icon: \cf5 \strokec5 Type\cf0 \strokec4 , \cb1 \
\cb3       label: \cf6 \strokec6 'Text'\cf0 \strokec4 ,\cb1 \
\cb3       shortcut: \cf6 \strokec6 'T'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{ \cb1 \
\cb3       id: \cf6 \strokec6 'theme'\cf0 \strokec4 , \cb1 \
\cb3       icon: \cf5 \strokec5 Palette\cf0 \strokec4 , \cb1 \
\cb3       label: \cf6 \strokec6 'Theme'\cf0 \strokec4 ,\cb1 \
\cb3       shortcut: \cf6 \strokec6 'C'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{ \cb1 \
\cb3       id: \cf6 \strokec6 'image'\cf0 \strokec4 , \cb1 \
\cb3       icon: \cf5 \strokec5 ImageIcon\cf0 \strokec4 , \cb1 \
\cb3       label: \cf6 \strokec6 'Media'\cf0 \strokec4 ,\cb1 \
\cb3       shortcut: \cf6 \strokec6 'M'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{ \cb1 \
\cb3       id: \cf6 \strokec6 'chart'\cf0 \strokec4 , \cb1 \
\cb3       icon: \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cb1 \
\cb3       label: \cf6 \strokec6 'Chart'\cf0 \strokec4 ,\cb1 \
\cb3       shortcut: \cf6 \strokec6 'D'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{ \cb1 \
\cb3       id: \cf6 \strokec6 'shapes'\cf0 \strokec4 , \cb1 \
\cb3       icon: \cf5 \strokec5 Shapes\cf0 \strokec4 , \cb1 \
\cb3       label: \cf6 \strokec6 'Shapes'\cf0 \strokec4 ,\cb1 \
\cb3       shortcut: \cf6 \strokec6 'S'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderPanel = () => \{\cb1 \
\cb3     \cf2 \strokec2 switch\cf0 \strokec4  (activePanel) \{\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'ai'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 AIEnhancePanel\cf0 \strokec4  slide=\{slide\} onUpdateSlide=\{onUpdateSlide\} onClose=\{() => setActivePanel(\cf2 \strokec2 null\cf0 \strokec4 )\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'text'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 TypographyPanel\cf0 \strokec4  currentFont=\{currentFont\} onFontChange=\{onFontChange\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'theme'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 ColorThemePanel\cf0 \strokec4  currentTheme=\{currentTheme\} onThemeChange=\{onThemeChange\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'layout'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 LayoutPanel\cf0 \strokec4  currentLayout=\{currentLayout\} onLayoutChange=\{onLayoutChange\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'image'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 ImagePanel\cf0 \strokec4  onAddImage=\{onAddImage\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'chart'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 ChartPanel\cf0 \strokec4  onAddChart=\{onAddChart\} />;\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'shapes'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  <\cf5 \strokec5 InfographicsPanel\cf0 \strokec4  onAddInfographic=\{onAddInfographic\} />;\cb1 \
\cb3       \cf2 \strokec2 default\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <>\cb1 \
\cb3       \{\cf7 \strokec7 /* Vertical Toolbar */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "w-14 bg-white border-l border-slate-200 flex flex-col items-center py-4 gap-1 flex-shrink-0"\cf0 \strokec4 >\cb1 \
\cb3         \{tools.map((tool) => \{\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = tool.icon;\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  isActive = activePanel === tool.id;\cb1 \
\cb3           \cb1 \
\cb3           \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3             <button\cb1 \
\cb3               key=\{tool.id\}\cb1 \
\cb3               onClick=\{() => setActivePanel(activePanel === tool.id ? \cf2 \strokec2 null\cf0 \strokec4  : tool.id)\}\cb1 \
\cb3               className=\{\cf6 \strokec6 `relative w-10 h-10 rounded-lg flex items-center justify-center transition-all group \cf0 \strokec4 $\{\cb1 \
\cb3                 isActive \cb1 \
\cb3                   ? \cf6 \strokec6 'bg-indigo-100 text-indigo-600'\cf0 \strokec4  \cb1 \
\cb3                   : tool.highlight \cb1 \
\cb3                     ? \cf6 \strokec6 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'\cf0 \cb1 \strokec4 \
\cb3                     : \cf6 \strokec6 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'\cf0 \cb1 \strokec4 \
\cb3               \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               title=\{\cf6 \strokec6 `\cf0 \strokec4 $\{tool.label\}\cf6 \strokec6  (\cf0 \strokec4 $\{tool.shortcut\}\cf6 \strokec6 )`\cf0 \strokec4 \}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3               \cb1 \
\cb3               \{\cf7 \strokec7 /* Tooltip */\cf0 \strokec4 \}\cb1 \
\cb3               <div className=\cf6 \strokec6 "absolute right-full mr-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"\cf0 \strokec4 >\cb1 \
\cb3                 \{tool.label\}\cb1 \
\cb3                 <span className=\cf6 \strokec6 "ml-1 text-slate-400"\cf0 \strokec4 >\{tool.shortcut\}</span>\cb1 \
\cb3               </div>\cb1 \
\cb3             </button>\cb1 \
\cb3           );\cb1 \
\cb3         \})\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Expandable Panel */\cf0 \strokec4 \}\cb1 \
\cb3       <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         \{activePanel && (\cb1 \
\cb3           <>\cb1 \
\cb3             <motion.div \cb1 \
\cb3               initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3               exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "fixed inset-0 z-40"\cf0 \cb1 \strokec4 \
\cb3               onClick=\{() => setActivePanel(\cf2 \strokec2 null\cf0 \strokec4 )\}\cb1 \
\cb3             />\cb1 \
\cb3             <motion.div\cb1 \
\cb3               initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , x: \cf8 \strokec8 20\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , x: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3               exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , x: \cf8 \strokec8 20\cf0 \strokec4  \}\}\cb1 \
\cb3               transition=\{\{ type: \cf6 \strokec6 'spring'\cf0 \strokec4 , damping: \cf8 \strokec8 25\cf0 \strokec4 , stiffness: \cf8 \strokec8 300\cf0 \strokec4  \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "fixed right-14 top-[53px] bottom-0 w-72 bg-white border-l border-slate-200 shadow-xl overflow-y-auto z-50"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <div className=\cf6 \strokec6 "sticky top-0 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between z-10"\cf0 \strokec4 >\cb1 \
\cb3                 <h3 className=\cf6 \strokec6 "font-semibold text-slate-800"\cf0 \strokec4 >\cb1 \
\cb3                   \{tools.find(t => t.id === activePanel)?.label\}\cb1 \
\cb3                 </h3>\cb1 \
\cb3                 <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                   variant=\cf6 \strokec6 "ghost"\cf0 \cb1 \strokec4 \
\cb3                   size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3                   onClick=\{() => setActivePanel(\cf2 \strokec2 null\cf0 \strokec4 )\}\cb1 \
\cb3                   className=\cf6 \strokec6 "h-8 w-8 p-0"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   <\cf5 \strokec5 X\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3                 </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3               </div>\cb1 \
\cb3               <div className=\cf6 \strokec6 "p-4"\cf0 \strokec4 >\cb1 \
\cb3                 \{renderPanel()\}\cb1 \
\cb3               </div>\cb1 \
\cb3             </motion.div>\cb1 \
\cb3           </>\cb1 \
\cb3         )\}\cb1 \
\cb3       </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3     </>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}