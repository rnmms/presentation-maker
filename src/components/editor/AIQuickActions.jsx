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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 Image\cf0 \strokec4 , \cf5 \strokec5 Layout\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Lightbulb\cf0 \strokec4 , \cf5 \strokec5 TrendingUp\cf0 \strokec4 , \cf5 \strokec5 MessageCircle\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Quick AI action buttons that appear on hover around slide elements\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 AIQuickActions\cf0 \strokec4 (\{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   position, \cb1 \
\cb3   onAction,\cb1 \
\cb3   type = \cf6 \strokec6 'content'\cf0 \strokec4  \cf7 \strokec7 // 'title', 'content', 'image', 'empty'\cf0 \cb1 \strokec4 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  getActionsForType = () => \{\cb1 \
\cb3     \cf2 \strokec2 switch\cf0 \strokec4  (type) \{\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'title'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  [\cb1 \
\cb3           \{ id: \cf6 \strokec6 'improve-title'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'Improve'\cf0 \strokec4 , color: \cf6 \strokec6 'purple'\cf0 \strokec4  \},\cb1 \
\cb3           \{ id: \cf6 \strokec6 'shorten-title'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , label: \cf6 \strokec6 'Shorten'\cf0 \strokec4 , color: \cf6 \strokec6 'blue'\cf0 \strokec4  \},\cb1 \
\cb3         ];\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'content'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  [\cb1 \
\cb3           \{ id: \cf6 \strokec6 'enhance'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'Enhance'\cf0 \strokec4 , color: \cf6 \strokec6 'purple'\cf0 \strokec4  \},\cb1 \
\cb3           \{ id: \cf6 \strokec6 'add-bullet'\cf0 \strokec4 , icon: \cf5 \strokec5 Lightbulb\cf0 \strokec4 , label: \cf6 \strokec6 'Add point'\cf0 \strokec4 , color: \cf6 \strokec6 'amber'\cf0 \strokec4  \},\cb1 \
\cb3         ];\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'empty'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  [\cb1 \
\cb3           \{ id: \cf6 \strokec6 'generate-content'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , label: \cf6 \strokec6 'Generate'\cf0 \strokec4 , color: \cf6 \strokec6 'purple'\cf0 \strokec4  \},\cb1 \
\cb3           \{ id: \cf6 \strokec6 'add-image'\cf0 \strokec4 , icon: \cf5 \strokec5 Image\cf0 \strokec4 , label: \cf6 \strokec6 'Add image'\cf0 \strokec4 , color: \cf6 \strokec6 'green'\cf0 \strokec4  \},\cb1 \
\cb3           \{ id: \cf6 \strokec6 'suggest-layout'\cf0 \strokec4 , icon: \cf5 \strokec5 Layout\cf0 \strokec4 , label: \cf6 \strokec6 'Suggest layout'\cf0 \strokec4 , color: \cf6 \strokec6 'blue'\cf0 \strokec4  \},\cb1 \
\cb3         ];\cb1 \
\cb3       \cf2 \strokec2 default\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  [\cb1 \
\cb3           \{ id: \cf6 \strokec6 'enhance'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , label: \cf6 \strokec6 'AI Magic'\cf0 \strokec4 , color: \cf6 \strokec6 'purple'\cf0 \strokec4  \},\cb1 \
\cb3         ];\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  actions = getActionsForType();\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!position) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  colorClasses = \{\cb1 \
\cb3     purple: \cf6 \strokec6 'bg-purple-100 text-purple-600 hover:bg-purple-200'\cf0 \strokec4 ,\cb1 \
\cb3     blue: \cf6 \strokec6 'bg-blue-100 text-blue-600 hover:bg-blue-200'\cf0 \strokec4 ,\cb1 \
\cb3     green: \cf6 \strokec6 'bg-green-100 text-green-600 hover:bg-green-200'\cf0 \strokec4 ,\cb1 \
\cb3     amber: \cf6 \strokec6 'bg-amber-100 text-amber-600 hover:bg-amber-200'\cf0 \strokec4 ,\cb1 \
\cb3     pink: \cf6 \strokec6 'bg-pink-100 text-pink-600 hover:bg-pink-200'\cf0 \strokec4 ,\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , scale: \cf8 \strokec8 0.8\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , scale: \cf8 \strokec8 1\cf0 \strokec4  \}\}\cb1 \
\cb3       exit=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , scale: \cf8 \strokec8 0.8\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "absolute z-30 flex items-center gap-1"\cf0 \cb1 \strokec4 \
\cb3       style=\{\{ left: position.x, top: position.y \}\}\cb1 \
\cb3     >\cb1 \
\cb3       \{actions.map((action, idx) => \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = action.icon;\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3           <motion.button\cb1 \
\cb3             key=\{action.id\}\cb1 \
\cb3             initial=\{\{ opacity: \cf8 \strokec8 0\cf0 \strokec4 , y: \cf8 \strokec8 5\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \strokec8 1\cf0 \strokec4 , y: \cf8 \strokec8 0\cf0 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ delay: idx * \cf8 \strokec8 0.05\cf0 \strokec4  \}\}\cb1 \
\cb3             onClick=\{() => onAction(action.id)\}\cb1 \
\cb3             className=\{\cf6 \strokec6 `flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium shadow-md transition-all \cf0 \strokec4 $\{colorClasses[action.color]\}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3             title=\{action.label\}\cb1 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-3.5 h-3.5"\cf0 \strokec4  />\cb1 \
\cb3             <span>\{action.label\}</span>\cb1 \
\cb3           </motion.button>\cb1 \
\cb3         );\cb1 \
\cb3       \})\}\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}