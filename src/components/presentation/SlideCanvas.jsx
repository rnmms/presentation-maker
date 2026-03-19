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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlideCanvas\cf0 \strokec4 (\{ slide, templateStyle, onUpdate \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [editingField, setEditingField] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tempTitle, setTempTitle] = useState(slide.title);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tempContent, setTempContent] = useState(slide.content);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleTitleBlur = () => \{\cb1 \
\cb3     onUpdate(slide.slide_number, \{ ...slide, title: tempTitle \});\cb1 \
\cb3     setEditingField(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleContentBlur = (index) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newContent = [...tempContent];\cb1 \
\cb3     onUpdate(slide.slide_number, \{ ...slide, content: newContent \});\cb1 \
\cb3     setEditingField(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleContentChange = (index, value) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newContent = [...tempContent];\cb1 \
\cb3     newContent[index] = value;\cb1 \
\cb3     setTempContent(newContent);\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "w-full aspect-[16/9] bg-white shadow-2xl overflow-hidden flex flex-col"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf7 \strokec7 /* Slide Header - Template-styled */\cf0 \strokec4 \}\cb1 \
\cb3       <div\cb1 \
\cb3         className=\cf6 \strokec6 "h-24 px-12 flex items-center"\cf0 \cb1 \strokec4 \
\cb3         style=\{\{\cb1 \
\cb3           background: templateStyle?.headerGradient || \cf6 \strokec6 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'\cf0 \strokec4 ,\cb1 \
\cb3         \}\}\cb1 \
\cb3       >\cb1 \
\cb3         \{editingField === \cf6 \strokec6 'title'\cf0 \strokec4  ? (\cb1 \
\cb3           <input\cb1 \
\cb3             type=\cf6 \strokec6 "text"\cf0 \cb1 \strokec4 \
\cb3             value=\{tempTitle\}\cb1 \
\cb3             onChange=\{(e) => setTempTitle(e.target.value)\}\cb1 \
\cb3             onBlur=\{handleTitleBlur\}\cb1 \
\cb3             className=\cf6 \strokec6 "w-full text-3xl font-bold text-white bg-transparent border-2 border-white/50 rounded px-3 py-2 focus:outline-none focus:border-white"\cf0 \cb1 \strokec4 \
\cb3             autoFocus\cb1 \
\cb3           />\cb1 \
\cb3         ) : (\cb1 \
\cb3           <h1\cb1 \
\cb3             className=\cf6 \strokec6 "text-3xl font-bold text-white cursor-text hover:opacity-80 transition-opacity"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{() => setEditingField(\cf6 \strokec6 'title'\cf0 \strokec4 )\}\cb1 \
\cb3           >\cb1 \
\cb3             \{slide.title\}\cb1 \
\cb3           </h1>\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Slide Content */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex-1 px-12 py-8 overflow-auto"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3           \{slide.content && slide.content.map((item, idx) => (\cb1 \
\cb3             <div key=\{idx\} className=\cf6 \strokec6 "flex items-start gap-3"\cf0 \strokec4 >\cb1 \
\cb3               <div\cb1 \
\cb3                 className=\cf6 \strokec6 "w-2 h-2 rounded-full mt-2 flex-shrink-0"\cf0 \cb1 \strokec4 \
\cb3                 style=\{\{ backgroundColor: templateStyle?.accentColor || \cf6 \strokec6 '#667eea'\cf0 \strokec4  \}\}\cb1 \
\cb3               />\cb1 \
\cb3               \{editingField === \cf6 \strokec6 `content-\cf0 \strokec4 $\{idx\}\cf6 \strokec6 `\cf0 \strokec4  ? (\cb1 \
\cb3                 <textarea\cb1 \
\cb3                   value=\{tempContent[idx]\}\cb1 \
\cb3                   onChange=\{(e) => handleContentChange(idx, e.target.value)\}\cb1 \
\cb3                   onBlur=\{() => handleContentBlur(idx)\}\cb1 \
\cb3                   className=\cf6 \strokec6 "flex-1 text-lg text-slate-700 border-2 border-indigo-200 rounded px-3 py-2 focus:outline-none focus:border-indigo-400 resize-none"\cf0 \cb1 \strokec4 \
\cb3                   rows=\{\cf8 \strokec8 2\cf0 \strokec4 \}\cb1 \
\cb3                   autoFocus\cb1 \
\cb3                 />\cb1 \
\cb3               ) : (\cb1 \
\cb3                 <p\cb1 \
\cb3                   className=\cf6 \strokec6 "flex-1 text-lg text-slate-700 cursor-text hover:bg-slate-50 rounded px-3 py-2 transition-colors -mx-3 -my-2"\cf0 \cb1 \strokec4 \
\cb3                   onClick=\{() => setEditingField(\cf6 \strokec6 `content-\cf0 \strokec4 $\{idx\}\cf6 \strokec6 `\cf0 \strokec4 )\}\cb1 \
\cb3                 >\cb1 \
\cb3                   \{item\}\cb1 \
\cb3                 </p>\cb1 \
\cb3               )\}\cb1 \
\cb3             </div>\cb1 \
\cb3           ))\}\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf7 \strokec7 /* Slide Footer */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "h-12 px-12 flex items-center justify-between border-t border-slate-100"\cf0 \strokec4 >\cb1 \
\cb3         <span className=\cf6 \strokec6 "text-sm text-slate-400"\cf0 \strokec4 >\{templateStyle?.name || \cf6 \strokec6 'Slidesgo Template'\cf0 \strokec4 \}</span>\cb1 \
\cb3         <span className=\cf6 \strokec6 "text-sm text-slate-400"\cf0 \strokec4 >\cf5 \strokec5 Slide\cf0 \strokec4  \{slide.slide_number\}</span>\cb1 \
\cb3       </div>\cb1 \
\cb3     </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}