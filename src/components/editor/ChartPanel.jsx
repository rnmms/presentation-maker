{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Label\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/label"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Input\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Textarea\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/textarea"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 LineChart\cf0 \strokec4 , \cf5 \strokec5 PieChart\cf0 \strokec4  as \cf5 \strokec5 PieChartIcon\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  chartTypes = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ id: \cf6 \strokec6 'bar'\cf0 \strokec4 , name: \cf6 \strokec6 'Bar Chart'\cf0 \strokec4 , icon: \cf5 \strokec5 BarChart3\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'line'\cf0 \strokec4 , name: \cf6 \strokec6 'Line Chart'\cf0 \strokec4 , icon: \cf5 \strokec5 LineChart\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'pie'\cf0 \strokec4 , name: \cf6 \strokec6 'Pie Chart'\cf0 \strokec4 , icon: \cf5 \strokec5 PieChartIcon\cf0 \strokec4  \},\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ChartPanel\cf0 \strokec4 (\{ onAddChart \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedType, setSelectedType] = useState(\cf6 \strokec6 'bar'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [chartData, setChartData] = useState(\cf6 \strokec6 'Product A, 30\\nProduct B, 45\\nProduct C, 25'\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAddChart = () => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  data = chartData.split(\cf6 \strokec6 '\\n'\cf0 \strokec4 ).map(line => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  [name, value] = line.split(\cf6 \strokec6 ','\cf0 \strokec4 ).map(s => s.trim());\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  \{ name, value: parseFloat(value) || \cf7 \strokec7 0\cf0 \strokec4  \};\cb1 \
\cb3     \});\cb1 \
\cb3     \cb1 \
\cb3     onAddChart(\{ type: selectedType, data \});\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-4 space-y-4"\cf0 \strokec4 >\cb1 \
\cb3       <div>\cb1 \
\cb3         <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-sm font-semibold mb-3 block"\cf0 \strokec4 >\cf5 \strokec5 Chart\cf0 \strokec4  \cf5 \strokec5 Type\cf0 \strokec4 </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "grid grid-cols-3 gap-2"\cf0 \strokec4 >\cb1 \
\cb3           \{chartTypes.map((chart) => \{\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = chart.icon;\cb1 \
\cb3             \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3               <button\cb1 \
\cb3                 key=\{chart.id\}\cb1 \
\cb3                 onClick=\{() => setSelectedType(chart.id)\}\cb1 \
\cb3                 className=\{\cf6 \strokec6 `p-3 rounded-lg border-2 transition-all \cf0 \strokec4 $\{\cb1 \
\cb3                   selectedType === chart.id\cb1 \
\cb3                     ? \cf6 \strokec6 'border-indigo-600 bg-indigo-50'\cf0 \cb1 \strokec4 \
\cb3                     : \cf6 \strokec6 'border-slate-200 hover:border-slate-300'\cf0 \cb1 \strokec4 \
\cb3                 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               >\cb1 \
\cb3                 <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-6 h-6 mx-auto mb-1"\cf0 \strokec4  />\cb1 \
\cb3                 <p className=\cf6 \strokec6 "text-xs"\cf0 \strokec4 >\{chart.name\}</p>\cb1 \
\cb3               </button>\cb1 \
\cb3             );\cb1 \
\cb3           \})\}\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div>\cb1 \
\cb3         <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-sm font-semibold mb-2 block"\cf0 \strokec4 >\cf5 \strokec5 Data\cf0 \strokec4  (\cf5 \strokec5 Label\cf0 \strokec4 , \cf5 \strokec5 Value\cf0 \strokec4 )</\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 Textarea\cf0 \cb1 \strokec4 \
\cb3           value=\{chartData\}\cb1 \
\cb3           onChange=\{(e) => setChartData(e.target.value)\}\cb1 \
\cb3           placeholder=\cf6 \strokec6 "Label, Value&#10;Product A, 30&#10;Product B, 45"\cf0 \cb1 \strokec4 \
\cb3           className=\cf6 \strokec6 "text-sm h-24"\cf0 \cb1 \strokec4 \
\cb3         />\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{handleAddChart\} className=\cf6 \strokec6 "w-full bg-indigo-600"\cf0 \strokec4 >\cb1 \
\cb3         \cf5 \strokec5 Add\cf0 \strokec4  \cf5 \strokec5 Chart\cf0 \cb1 \strokec4 \
\cb3       </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3     </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}