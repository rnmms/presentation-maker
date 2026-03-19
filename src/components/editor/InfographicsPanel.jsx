{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Label\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/label"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 PieChart\cf0 \strokec4 , \cf5 \strokec5 TrendingUp\cf0 \strokec4 , \cf5 \strokec5 Users\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Target\cf0 \strokec4 , \cf5 \strokec5 Zap\cf0 \strokec4 , \cf5 \strokec5 CheckCircle\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4  \cb1 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  infographics = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ id: \cf6 \strokec6 'timeline'\cf0 \strokec4 , name: \cf6 \strokec6 'Timeline'\cf0 \strokec4 , icon: \cf5 \strokec5 ArrowRight\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'process'\cf0 \strokec4 , name: \cf6 \strokec6 'Process Flow'\cf0 \strokec4 , icon: \cf5 \strokec5 Zap\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'comparison'\cf0 \strokec4 , name: \cf6 \strokec6 'Comparison'\cf0 \strokec4 , icon: \cf5 \strokec5 Target\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'stats'\cf0 \strokec4 , name: \cf6 \strokec6 'Statistics'\cf0 \strokec4 , icon: \cf5 \strokec5 TrendingUp\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'team'\cf0 \strokec4 , name: \cf6 \strokec6 'Team Structure'\cf0 \strokec4 , icon: \cf5 \strokec5 Users\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'checklist'\cf0 \strokec4 , name: \cf6 \strokec6 'Checklist'\cf0 \strokec4 , icon: \cf5 \strokec5 CheckCircle\cf0 \strokec4  \},\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 InfographicsPanel\cf0 \strokec4 (\{ onAddInfographic \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-4"\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-sm font-semibold mb-3 block"\cf0 \strokec4 >\cf5 \strokec5 Add\cf0 \strokec4  \cf5 \strokec5 Infographic\cf0 \strokec4 </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3       <div className=\cf6 \strokec6 "grid grid-cols-2 gap-2"\cf0 \strokec4 >\cb1 \
\cb3         \{infographics.map((item) => \{\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = item.icon;\cb1 \
\cb3           \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3               key=\{item.id\}\cb1 \
\cb3               variant=\cf6 \strokec6 "outline"\cf0 \cb1 \strokec4 \
\cb3               className=\cf6 \strokec6 "h-auto flex-col gap-2 py-3"\cf0 \cb1 \strokec4 \
\cb3               onClick=\{() => onAddInfographic(item.id)\}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-6 h-6"\cf0 \strokec4  />\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-xs"\cf0 \strokec4 >\{item.name\}</span>\cb1 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           );\cb1 \
\cb3         \})\}\cb1 \
\cb3       </div>\cb1 \
\cb3     </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}