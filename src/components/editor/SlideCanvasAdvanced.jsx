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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useRef, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 BarChart\cf0 \strokec4 , \cf5 \strokec5 Bar\cf0 \strokec4 , \cf5 \strokec5 LineChart\cf0 \strokec4 , \cf5 \strokec5 Line\cf0 \strokec4 , \cf5 \strokec5 PieChart\cf0 \strokec4 , \cf5 \strokec5 Pie\cf0 \strokec4 , \cf5 \strokec5 Cell\cf0 \strokec4 , \cf5 \strokec5 XAxis\cf0 \strokec4 , \cf5 \strokec5 YAxis\cf0 \strokec4 , \cf5 \strokec5 Tooltip\cf0 \strokec4 , \cf5 \strokec5 ResponsiveContainer\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'recharts'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 RichTextToolbar\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './RichTextToolbar'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 InlineAIPopup\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './InlineAIPopup'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ getBackgroundForSlide \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../ai/PresentationAIService'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 COLORS\cf0 \strokec4  = [\cf6 \strokec6 '#4f46e5'\cf0 \strokec4 , \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 , \cf6 \strokec6 '#ec4899'\cf0 \strokec4 , \cf6 \strokec6 '#f59e0b'\cf0 \strokec4 , \cf6 \strokec6 '#10b981'\cf0 \strokec4 ];\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlideCanvasAdvanced\cf0 \strokec4 (\{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   slide, \cb1 \
\cb3   templateStyle, \cb1 \
\cb3   onUpdate, \cb1 \
\cb3   isPresentationMode = \cf2 \strokec2 false\cf0 \strokec4 ,\cb1 \
\cb3   slideIndex = \cf7 \strokec7 0\cf0 \cb1 \strokec4 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [editingField, setEditingField] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tempTitle, setTempTitle] = useState(slide.title);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [tempContent, setTempContent] = useState(slide.content || []);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [toolbarPosition, setToolbarPosition] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedText, setSelectedText] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [aiPopupPosition, setAiPopupPosition] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedRange, setSelectedRange] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  contentRef = useRef(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cb1 \
\cb3   \cf8 \strokec8 // Get background for this slide\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  slideType = slide.type || (slideIndex === \cf7 \strokec7 0\cf0 \strokec4  ? \cf6 \strokec6 'cover'\cf0 \strokec4  : \cf6 \strokec6 'content'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  background = slide.background_ref ? \cf2 \strokec2 null\cf0 \strokec4  : getBackgroundForSlide(slideIndex, slideType);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  overlayStrength = slide.background_overlay || \cb1 \
\cb3     (background?.overlay_hint?.strength_range?.[\cf7 \strokec7 0\cf0 \strokec4 ] + background?.overlay_hint?.strength_range?.[\cf7 \strokec7 1\cf0 \strokec4 ]) / \cf7 \strokec7 2\cf0 \strokec4  || \cf7 \strokec7 0.4\cf0 \strokec4 ;\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  handleSelection = () => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  selection = window.getSelection();\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  text = selection.toString().trim();\cb1 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (text && text.length > \cf7 \strokec7 3\cf0 \strokec4  && contentRef.current && contentRef.current.contains(selection.anchorNode)) \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  range = selection.getRangeAt(\cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  rect = range.getBoundingClientRect();\cb1 \
\cb3         setToolbarPosition(\{\cb1 \
\cb3           x: rect.left + rect.width / \cf7 \strokec7 2\cf0 \strokec4 ,\cb1 \
\cb3           y: rect.top + window.scrollY\cb1 \
\cb3         \});\cb1 \
\cb3         setSelectedText(text);\cb1 \
\cb3         setSelectedRange(range.cloneRange());\cb1 \
\cb3         \cb1 \
\cb3         \cf8 \strokec8 // Show AI popup for longer selections\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (text.length > \cf7 \strokec7 10\cf0 \strokec4 ) \{\cb1 \
\cb3           setAiPopupPosition(\{\cb1 \
\cb3             x: rect.left + rect.width / \cf7 \strokec7 2\cf0 \strokec4 ,\cb1 \
\cb3             y: rect.bottom + window.scrollY\cb1 \
\cb3           \});\cb1 \
\cb3         \}\cb1 \
\cb3       \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3         setToolbarPosition(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3         setSelectedText(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     document.addEventListener(\cf6 \strokec6 'mouseup'\cf0 \strokec4 , handleSelection);\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => document.removeEventListener(\cf6 \strokec6 'mouseup'\cf0 \strokec4 , handleSelection);\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleFormat = (format) => \{\cb1 \
\cb3     \cf8 \strokec8 // Simple format handling - in a real app you'd use contentEditable or a rich text library\cf0 \cb1 \strokec4 \
\cb3     console.log(\cf6 \strokec6 'Format:'\cf0 \strokec4 , format, \cf6 \strokec6 'Text:'\cf0 \strokec4 , selectedText);\cb1 \
\cb3     setToolbarPosition(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAIApply = (newText) => \{\cb1 \
\cb3     \cf8 \strokec8 // Replace selected text in content\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (selectedText && tempContent.length > \cf7 \strokec7 0\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  newContent = tempContent.map(item => \cb1 \
\cb3         item.includes(selectedText) ? item.replace(selectedText, newText) : item\cb1 \
\cb3       );\cb1 \
\cb3       setTempContent(newContent);\cb1 \
\cb3       onUpdate(\{ ...slide, content: newContent \});\cb1 \
\cb3     \}\cb1 \
\cb3     setAiPopupPosition(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3     setSelectedText(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleTitleBlur = () => \{\cb1 \
\cb3     onUpdate(\{ ...slide, title: tempTitle \});\cb1 \
\cb3     setEditingField(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleContentChange = (index, value) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newContent = [...tempContent];\cb1 \
\cb3     newContent[index] = value;\cb1 \
\cb3     setTempContent(newContent);\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleContentBlur = (index) => \{\cb1 \
\cb3     onUpdate(\{ ...slide, content: tempContent \});\cb1 \
\cb3     setEditingField(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderChart = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!slide.chart) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \{ type, data \} = slide.chart;\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "w-full h-64 mt-4"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 ResponsiveContainer\cf0 \strokec4  width=\cf6 \strokec6 "100%"\cf0 \strokec4  height=\cf6 \strokec6 "100%"\cf0 \strokec4 >\cb1 \
\cb3           \{type === \cf6 \strokec6 'bar'\cf0 \strokec4  && (\cb1 \
\cb3             <\cf5 \strokec5 BarChart\cf0 \strokec4  data=\{data\}>\cb1 \
\cb3               <\cf5 \strokec5 XAxis\cf0 \strokec4  dataKey=\cf6 \strokec6 "name"\cf0 \strokec4  />\cb1 \
\cb3               <\cf5 \strokec5 YAxis\cf0 \strokec4  />\cb1 \
\cb3               <\cf5 \strokec5 Tooltip\cf0 \strokec4  />\cb1 \
\cb3               <\cf5 \strokec5 Bar\cf0 \strokec4  dataKey=\cf6 \strokec6 "value"\cf0 \strokec4  fill=\{templateStyle?.primaryColor || \cf6 \strokec6 '#4f46e5'\cf0 \strokec4 \} />\cb1 \
\cb3             </\cf5 \strokec5 BarChart\cf0 \strokec4 >\cb1 \
\cb3           )\}\cb1 \
\cb3           \{type === \cf6 \strokec6 'line'\cf0 \strokec4  && (\cb1 \
\cb3             <\cf5 \strokec5 LineChart\cf0 \strokec4  data=\{data\}>\cb1 \
\cb3               <\cf5 \strokec5 XAxis\cf0 \strokec4  dataKey=\cf6 \strokec6 "name"\cf0 \strokec4  />\cb1 \
\cb3               <\cf5 \strokec5 YAxis\cf0 \strokec4  />\cb1 \
\cb3               <\cf5 \strokec5 Tooltip\cf0 \strokec4  />\cb1 \
\cb3               <\cf5 \strokec5 Line\cf0 \strokec4  type=\cf6 \strokec6 "monotone"\cf0 \strokec4  dataKey=\cf6 \strokec6 "value"\cf0 \strokec4  stroke=\{templateStyle?.primaryColor || \cf6 \strokec6 '#4f46e5'\cf0 \strokec4 \} strokeWidth=\{\cf7 \strokec7 2\cf0 \strokec4 \} />\cb1 \
\cb3             </\cf5 \strokec5 LineChart\cf0 \strokec4 >\cb1 \
\cb3           )\}\cb1 \
\cb3           \{type === \cf6 \strokec6 'pie'\cf0 \strokec4  && (\cb1 \
\cb3             <\cf5 \strokec5 PieChart\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Pie\cf0 \cb1 \strokec4 \
\cb3                 data=\{data\}\cb1 \
\cb3                 cx=\cf6 \strokec6 "50%"\cf0 \cb1 \strokec4 \
\cb3                 cy=\cf6 \strokec6 "50%"\cf0 \cb1 \strokec4 \
\cb3                 labelLine=\{\cf2 \strokec2 false\cf0 \strokec4 \}\cb1 \
\cb3                 label=\{(\{ name, value \}) => \cf6 \strokec6 `\cf0 \strokec4 $\{name\}\cf6 \strokec6 : \cf0 \strokec4 $\{value\}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3                 outerRadius=\{\cf7 \strokec7 80\cf0 \strokec4 \}\cb1 \
\cb3                 fill=\cf6 \strokec6 "#8884d8"\cf0 \cb1 \strokec4 \
\cb3                 dataKey=\cf6 \strokec6 "value"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 \{data.map((entry, index) => (\cb1 \
\cb3                   <\cf5 \strokec5 Cell\cf0 \strokec4  key=\{\cf6 \strokec6 `cell-\cf0 \strokec4 $\{index\}\cf6 \strokec6 `\cf0 \strokec4 \} fill=\{\cf5 \strokec5 COLORS\cf0 \strokec4 [index % \cf5 \strokec5 COLORS\cf0 \strokec4 .length]\} />\cb1 \
\cb3                 ))\}\cb1 \
\cb3               </\cf5 \strokec5 Pie\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Tooltip\cf0 \strokec4  />\cb1 \
\cb3             </\cf5 \strokec5 PieChart\cf0 \strokec4 >\cb1 \
\cb3           )\}\cb1 \
\cb3         </\cf5 \strokec5 ResponsiveContainer\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderImages = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!slide.images || slide.images.length === \cf7 \strokec7 0\cf0 \strokec4 ) \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "grid grid-cols-2 gap-4 mt-4"\cf0 \strokec4 >\cb1 \
\cb3         \{slide.images.map((img, idx) => (\cb1 \
\cb3           <img\cb1 \
\cb3             key=\{idx\}\cb1 \
\cb3             src=\{img\}\cb1 \
\cb3             alt=\{\cf6 \strokec6 `Slide image \cf0 \strokec4 $\{idx + \cf7 \strokec7 1\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3             className=\cf6 \strokec6 "w-full h-48 object-cover rounded-lg"\cf0 \cb1 \strokec4 \
\cb3           />\cb1 \
\cb3         ))\}\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderTitleContent = () => (\cb1 \
\cb3     <>\cb1 \
\cb3       \{slide.content && slide.content.length > \cf7 \strokec7 0\cf0 \strokec4  && (\cb1 \
\cb3         <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3           \{slide.content.map((item, idx) => (\cb1 \
\cb3             <div key=\{idx\} className=\cf6 \strokec6 "flex items-start gap-3"\cf0 \strokec4 >\cb1 \
\cb3               <div\cb1 \
\cb3                 className=\cf6 \strokec6 "w-2 h-2 rounded-full mt-2 flex-shrink-0"\cf0 \cb1 \strokec4 \
\cb3                 style=\{\{ backgroundColor: templateStyle?.primaryColor || \cf6 \strokec6 '#4f46e5'\cf0 \strokec4  \}\}\cb1 \
\cb3               />\cb1 \
\cb3               \{editingField === \cf6 \strokec6 `content-\cf0 \strokec4 $\{idx\}\cf6 \strokec6 `\cf0 \strokec4  && !isPresentationMode ? (\cb1 \
\cb3                 <textarea\cb1 \
\cb3                   value=\{tempContent[idx]\}\cb1 \
\cb3                   onChange=\{(e) => handleContentChange(idx, e.target.value)\}\cb1 \
\cb3                   onBlur=\{() => handleContentBlur(idx)\}\cb1 \
\cb3                   className=\cf6 \strokec6 "flex-1 text-lg text-slate-700 border-2 border-indigo-200 rounded px-3 py-2 focus:outline-none focus:border-indigo-400 resize-none"\cf0 \cb1 \strokec4 \
\cb3                   rows=\{\cf7 \strokec7 2\cf0 \strokec4 \}\cb1 \
\cb3                   autoFocus\cb1 \
\cb3                 />\cb1 \
\cb3               ) : (\cb1 \
\cb3                 <p\cb1 \
\cb3                   className=\{\cf6 \strokec6 `flex-1 text-lg text-slate-700 \cf0 \strokec4 $\{!isPresentationMode ? \cf6 \strokec6 'cursor-text hover:bg-slate-50 rounded px-3 py-2'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3                   onClick=\{() => !isPresentationMode && setEditingField(\cf6 \strokec6 `content-\cf0 \strokec4 $\{idx\}\cf6 \strokec6 `\cf0 \strokec4 )\}\cb1 \
\cb3                 >\cb1 \
\cb3                   \{item\}\cb1 \
\cb3                 </p>\cb1 \
\cb3               )\}\cb1 \
\cb3             </div>\cb1 \
\cb3           ))\}\cb1 \
\cb3         </div>\cb1 \
\cb3       )\}\cb1 \
\cb3       \{renderChart()\}\cb1 \
\cb3       \{renderImages()\}\cb1 \
\cb3     </>\cb1 \
\cb3   );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderTwoColumn = () => (\cb1 \
\cb3     <div className=\cf6 \strokec6 "grid grid-cols-2 gap-8 h-full"\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3         \{slide.content?.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf5 \strokec5 Math\cf0 \strokec4 .ceil(slide.content.length / \cf7 \strokec7 2\cf0 \strokec4 )).map((item, idx) => (\cb1 \
\cb3           <div key=\{idx\} className=\cf6 \strokec6 "flex items-start gap-2"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-2 h-2 rounded-full mt-2"\cf0 \strokec4  style=\{\{ backgroundColor: templateStyle?.primaryColor \}\} />\cb1 \
\cb3             <p className=\cf6 \strokec6 "text-base text-slate-700"\cf0 \strokec4 >\{item\}</p>\cb1 \
\cb3           </div>\cb1 \
\cb3         ))\}\cb1 \
\cb3       </div>\cb1 \
\cb3       <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3         \{slide.content?.slice(\cf5 \strokec5 Math\cf0 \strokec4 .ceil(slide.content.length / \cf7 \strokec7 2\cf0 \strokec4 )).map((item, idx) => (\cb1 \
\cb3           <div key=\{idx\} className=\cf6 \strokec6 "flex items-start gap-2"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-2 h-2 rounded-full mt-2"\cf0 \strokec4  style=\{\{ backgroundColor: templateStyle?.primaryColor \}\} />\cb1 \
\cb3             <p className=\cf6 \strokec6 "text-base text-slate-700"\cf0 \strokec4 >\{item\}</p>\cb1 \
\cb3           </div>\cb1 \
\cb3         ))\}\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderTitleOnly = () => (\cb1 \
\cb3     <div className=\cf6 \strokec6 "flex items-center justify-center h-full"\cf0 \strokec4 >\cb1 \
\cb3       <h2 className=\cf6 \strokec6 "text-5xl font-bold text-center text-slate-900"\cf0 \strokec4 >\{slide.title\}</h2>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderContentOnly = () => (\cb1 \
\cb3     <div className=\cf6 \strokec6 "space-y-6"\cf0 \strokec4 >\cb1 \
\cb3       \{slide.content?.map((item, idx) => (\cb1 \
\cb3         <div key=\{idx\} className=\cf6 \strokec6 "text-slate-700 text-xl"\cf0 \strokec4 >\cb1 \
\cb3           \cf9 \strokec9 \'95\cf0 \strokec4  \{item\}\cb1 \
\cb3         </div>\cb1 \
\cb3       ))\}\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderImageText = () => (\cb1 \
\cb3     <div className=\cf6 \strokec6 "grid grid-cols-2 gap-8 h-full"\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "bg-slate-100 rounded-lg flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         \{slide.images && slide.images[\cf7 \strokec7 0\cf0 \strokec4 ] ? (\cb1 \
\cb3           <img src=\{slide.images[\cf7 \strokec7 0\cf0 \strokec4 ]\} alt=\cf6 \strokec6 "Slide"\cf0 \strokec4  className=\cf6 \strokec6 "w-full h-full object-cover rounded-lg"\cf0 \strokec4  />\cb1 \
\cb3         ) : (\cb1 \
\cb3           <span className=\cf6 \strokec6 "text-slate-400 text-lg"\cf0 \strokec4 >\cf5 \strokec5 Image\cf0 \strokec4  placeholder</span>\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\cb3       <div className=\cf6 \strokec6 "flex flex-col justify-center space-y-4"\cf0 \strokec4 >\cb1 \
\cb3         \{slide.content?.map((item, idx) => (\cb1 \
\cb3           <div key=\{idx\} className=\cf6 \strokec6 "flex items-start gap-2"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-2 h-2 rounded-full mt-2"\cf0 \strokec4  style=\{\{ backgroundColor: templateStyle?.primaryColor \}\} />\cb1 \
\cb3             <p className=\cf6 \strokec6 "text-base text-slate-700"\cf0 \strokec4 >\{item\}</p>\cb1 \
\cb3           </div>\cb1 \
\cb3         ))\}\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderThreeColumn = () => (\cb1 \
\cb3     <div className=\cf6 \strokec6 "grid grid-cols-3 gap-6 h-full"\cf0 \strokec4 >\cb1 \
\cb3       \{slide.content?.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 3\cf0 \strokec4 ).map((item, idx) => (\cb1 \
\cb3         <div key=\{idx\} className=\cf6 \strokec6 "bg-slate-50 rounded-lg p-6 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-center text-slate-700"\cf0 \strokec4 >\{item\}</p>\cb1 \
\cb3         </div>\cb1 \
\cb3       ))\}\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  renderLayout = () => \{\cb1 \
\cb3     \cf2 \strokec2 switch\cf0 \strokec4  (slide.layout) \{\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'two-column'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  renderTwoColumn();\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'title-only'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  renderTitleOnly();\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'content-only'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  renderContentOnly();\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'image-text'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  renderImageText();\cb1 \
\cb3       \cf2 \strokec2 case\cf0 \strokec4  \cf6 \strokec6 'three-column'\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  renderThreeColumn();\cb1 \
\cb3       \cf2 \strokec2 default\cf0 \strokec4 :\cb1 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  renderTitleContent();\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <>\cb1 \
\cb3       <\cf5 \strokec5 RichTextToolbar\cf0 \strokec4  position=\{toolbarPosition\} onFormat=\{handleFormat\} />\cb1 \
\cb3       \{aiPopupPosition && selectedText && (\cb1 \
\cb3         <\cf5 \strokec5 InlineAIPopup\cf0 \cb1 \strokec4 \
\cb3           selectedText=\{selectedText\}\cb1 \
\cb3           position=\{aiPopupPosition\}\cb1 \
\cb3           onApply=\{handleAIApply\}\cb1 \
\cb3           onClose=\{() => \{\cb1 \
\cb3             setAiPopupPosition(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3             setSelectedText(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3           \}\}\cb1 \
\cb3         />\cb1 \
\cb3       )\}\cb1 \
\cb3       <\cf5 \strokec5 Card\cf0 \strokec4  \cb1 \
\cb3         ref=\{contentRef\}\cb1 \
\cb3         className=\cf6 \strokec6 "w-full aspect-[16/9] overflow-hidden flex flex-col relative"\cf0 \cb1 \strokec4 \
\cb3         style=\{\{ \cb1 \
\cb3           backgroundColor: templateStyle?.backgroundColor || \cf6 \strokec6 '#ffffff'\cf0 \strokec4 ,\cb1 \
\cb3           fontFamily: templateStyle?.fontFamily || \cf6 \strokec6 'Inter, sans-serif'\cf0 \cb1 \strokec4 \
\cb3         \}\}\cb1 \
\cb3       >\cb1 \
\cb3         \{\cf8 \strokec8 /* Background Image */\cf0 \strokec4 \}\cb1 \
\cb3         \{background && (\cb1 \
\cb3           <>\cb1 \
\cb3             <div \cb1 \
\cb3               className=\cf6 \strokec6 "absolute inset-0 bg-cover bg-center"\cf0 \cb1 \strokec4 \
\cb3               style=\{\{ \cb1 \
\cb3                 backgroundImage: \cf6 \strokec6 `url(\cf0 \strokec4 $\{background.src\}\cf6 \strokec6 )`\cf0 \strokec4 ,\cb1 \
\cb3               \}\}\cb1 \
\cb3             />\cb1 \
\cb3             \{\cf8 \strokec8 /* Overlay for text readability */\cf0 \strokec4 \}\cb1 \
\cb3             <div \cb1 \
\cb3               className=\cf6 \strokec6 "absolute inset-0"\cf0 \cb1 \strokec4 \
\cb3               style=\{\{ \cb1 \
\cb3                 background: background.overlay_hint?.type === \cf6 \strokec6 'linear'\cf0 \strokec4  \cb1 \
\cb3                   ? \cf6 \strokec6 `linear-gradient(to bottom, rgba(0,0,0,\cf0 \strokec4 $\{overlayStrength\}\cf6 \strokec6 ) 0%, rgba(0,0,0,\cf0 \strokec4 $\{overlayStrength * \cf7 \strokec7 0.5\cf0 \strokec4 \}\cf6 \strokec6 ) 100%)`\cf0 \cb1 \strokec4 \
\cb3                   : \cf6 \strokec6 `rgba(0,0,0,\cf0 \strokec4 $\{overlayStrength\}\cf6 \strokec6 )`\cf0 \cb1 \strokec4 \
\cb3               \}\}\cb1 \
\cb3             />\cb1 \
\cb3           </>\cb1 \
\cb3         )\}\cb1 \
\cb3       \{\cf8 \strokec8 /* Header */\cf0 \strokec4 \}\cb1 \
\cb3       <div\cb1 \
\cb3         className=\cf6 \strokec6 "px-12 py-6 flex items-center relative z-10"\cf0 \cb1 \strokec4 \
\cb3         style=\{\{\cb1 \
\cb3           background: background \cb1 \
\cb3             ? \cf6 \strokec6 'transparent'\cf0 \strokec4  \cb1 \
\cb3             : \cf6 \strokec6 `linear-gradient(135deg, \cf0 \strokec4 $\{templateStyle?.primaryColor || \cf6 \strokec6 '#4f46e5'\cf0 \strokec4 \}\cf6 \strokec6  0%, \cf0 \strokec4 $\{templateStyle?.secondaryColor || \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 \}\cf6 \strokec6  100%)`\cf0 \strokec4 ,\cb1 \
\cb3         \}\}\cb1 \
\cb3       >\cb1 \
\cb3         \{editingField === \cf6 \strokec6 'title'\cf0 \strokec4  && !isPresentationMode ? (\cb1 \
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
\cb3             className=\{\cf6 \strokec6 `text-3xl font-bold text-white \cf0 \strokec4 $\{!isPresentationMode ? \cf6 \strokec6 'cursor-text hover:opacity-80'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3             onClick=\{() => !isPresentationMode && setEditingField(\cf6 \strokec6 'title'\cf0 \strokec4 )\}\cb1 \
\cb3           >\cb1 \
\cb3             \{slide.title\}\cb1 \
\cb3           </h1>\cb1 \
\cb3         )\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Content */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\{\cf6 \strokec6 `flex-1 px-12 py-8 overflow-auto relative z-10 \cf0 \strokec4 $\{background ? \cf6 \strokec6 'text-white'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3         \{renderLayout()\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Footer */\cf0 \strokec4 \}\cb1 \
\cb3       <div \cb1 \
\cb3         className=\{\cf6 \strokec6 `px-12 py-3 flex items-center justify-between relative z-10 \cf0 \strokec4 $\{background ? \cf6 \strokec6 'border-white/20'\cf0 \strokec4  : \cf6 \strokec6 'border-t'\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3         style=\{\{ borderColor: background ? \cf6 \strokec6 'rgba(255,255,255,0.2)'\cf0 \strokec4  : (templateStyle?.primaryColor + \cf6 \strokec6 '20'\cf0 \strokec4  || \cf6 \strokec6 '#4f46e520'\cf0 \strokec4 ) \}\}\cb1 \
\cb3       >\cb1 \
\cb3         <span className=\{\cf6 \strokec6 `text-sm \cf0 \strokec4 $\{background ? \cf6 \strokec6 'text-white/70'\cf0 \strokec4  : \cf6 \strokec6 'text-slate-400'\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3           \{templateStyle?.templateName || \cf6 \strokec6 'Slidesgo Template'\cf0 \strokec4 \}\cb1 \
\cb3         </span>\cb1 \
\cb3         <span className=\{\cf6 \strokec6 `text-sm \cf0 \strokec4 $\{background ? \cf6 \strokec6 'text-white/70'\cf0 \strokec4  : \cf6 \strokec6 'text-slate-400'\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3           \{slide.slide_number || slideIndex + \cf7 \strokec7 1\cf0 \strokec4 \}\cb1 \
\cb3         </span>\cb1 \
\cb3       </div>\cb1 \
\cb3       </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3     </>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}