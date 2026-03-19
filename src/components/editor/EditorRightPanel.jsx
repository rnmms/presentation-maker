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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Tabs\cf0 \strokec4 , \cf5 \strokec5 TabsContent\cf0 \strokec4 , \cf5 \strokec5 TabsList\cf0 \strokec4 , \cf5 \strokec5 TabsTrigger\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/tabs"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Type\cf0 \strokec4 , \cf5 \strokec5 Image\cf0 \strokec4  as \cf5 \strokec5 ImageIcon\cf0 \strokec4 , \cf5 \strokec5 BarChart3\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Layout\cf0 \strokec4  as \cf5 \strokec5 LayoutIcon\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 MessageSquare\cf0 \strokec4  \cb1 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 AIPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './AIPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 LayoutPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './LayoutPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 TypographyPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './TypographyPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ColorThemePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ColorThemePanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 InfographicsPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './InfographicsPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ChartPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ChartPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ImagePanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './ImagePanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 CommentsPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './CommentsPanel'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 EditorRightPanel\cf0 \strokec4 (\{\cb1 \
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
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "w-80 bg-white border-l border-slate-200 overflow-y-auto"\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 Tabs\cf0 \strokec4  defaultValue=\cf6 \strokec6 "design"\cf0 \strokec4  className=\cf6 \strokec6 "w-full"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 TabsList\cf0 \strokec4  className=\cf6 \strokec6 "w-full grid grid-cols-4 sticky top-0 z-10 bg-white"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 TabsTrigger\cf0 \strokec4  value=\cf6 \strokec6 "design"\cf0 \strokec4  className=\cf6 \strokec6 "flex flex-col items-center gap-1 py-3"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 LayoutIcon\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-xs"\cf0 \strokec4 >\cf5 \strokec5 Design\cf0 \strokec4 </span>\cb1 \
\cb3           </\cf5 \strokec5 TabsTrigger\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 TabsTrigger\cf0 \strokec4  value=\cf6 \strokec6 "media"\cf0 \strokec4  className=\cf6 \strokec6 "flex flex-col items-center gap-1 py-3"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 ImageIcon\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-xs"\cf0 \strokec4 >\cf5 \strokec5 Media\cf0 \strokec4 </span>\cb1 \
\cb3           </\cf5 \strokec5 TabsTrigger\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 TabsTrigger\cf0 \strokec4  value=\cf6 \strokec6 "ai"\cf0 \strokec4  className=\cf6 \strokec6 "flex flex-col items-center gap-1 py-3"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-xs"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4 </span>\cb1 \
\cb3           </\cf5 \strokec5 TabsTrigger\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 TabsTrigger\cf0 \strokec4  value=\cf6 \strokec6 "comments"\cf0 \strokec4  className=\cf6 \strokec6 "flex flex-col items-center gap-1 py-3"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 MessageSquare\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-xs"\cf0 \strokec4 >\cf5 \strokec5 Comments\cf0 \strokec4 </span>\cb1 \
\cb3           </\cf5 \strokec5 TabsTrigger\cf0 \strokec4 >\cb1 \
\cb3         </\cf5 \strokec5 TabsList\cf0 \strokec4 >\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "p-4 space-y-4"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 TabsContent\cf0 \strokec4  value=\cf6 \strokec6 "design"\cf0 \strokec4  className=\cf6 \strokec6 "mt-0 space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 LayoutPanel\cf0 \strokec4  \cb1 \
\cb3               currentLayout=\{currentLayout\} \cb1 \
\cb3               onLayoutChange=\{onLayoutChange\} \cb1 \
\cb3             />\cb1 \
\cb3             <\cf5 \strokec5 TypographyPanel\cf0 \strokec4  \cb1 \
\cb3               currentFont=\{currentFont\}\cb1 \
\cb3               onFontChange=\{onFontChange\}\cb1 \
\cb3             />\cb1 \
\cb3             <\cf5 \strokec5 ColorThemePanel\cf0 \strokec4  \cb1 \
\cb3               currentTheme=\{currentTheme\}\cb1 \
\cb3               onThemeChange=\{onThemeChange\}\cb1 \
\cb3             />\cb1 \
\cb3           </\cf5 \strokec5 TabsContent\cf0 \strokec4 >\cb1 \
\
\cb3           <\cf5 \strokec5 TabsContent\cf0 \strokec4  value=\cf6 \strokec6 "media"\cf0 \strokec4  className=\cf6 \strokec6 "mt-0 space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 ImagePanel\cf0 \strokec4  onAddImage=\{onAddImage\} />\cb1 \
\cb3             <\cf5 \strokec5 ChartPanel\cf0 \strokec4  onAddChart=\{onAddChart\} />\cb1 \
\cb3             <\cf5 \strokec5 InfographicsPanel\cf0 \strokec4  onAddInfographic=\{onAddInfographic\} />\cb1 \
\cb3           </\cf5 \strokec5 TabsContent\cf0 \strokec4 >\cb1 \
\
\cb3           <\cf5 \strokec5 TabsContent\cf0 \strokec4  value=\cf6 \strokec6 "ai"\cf0 \strokec4  className=\cf6 \strokec6 "mt-0 space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 AIPanel\cf0 \strokec4  slide=\{slide\} onUpdateSlide=\{onUpdateSlide\} />\cb1 \
\cb3           </\cf5 \strokec5 TabsContent\cf0 \strokec4 >\cb1 \
\
\cb3           <\cf5 \strokec5 TabsContent\cf0 \strokec4  value=\cf6 \strokec6 "comments"\cf0 \strokec4  className=\cf6 \strokec6 "mt-0 space-y-4"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 CommentsPanel\cf0 \strokec4  presentationId=\{presentationId\} />\cb1 \
\cb3           </\cf5 \strokec5 TabsContent\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </\cf5 \strokec5 Tabs\cf0 \strokec4 >\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}