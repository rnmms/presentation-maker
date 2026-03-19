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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4 , \cf5 \strokec5 LayoutGroup\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 TemplateGallery\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/slideai/TemplateGallery'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 MagicWizard\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/slideai/MagicWizard'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 AlchemistLoader\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/slideai/AlchemistLoader'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 CinemaEditor\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/slideai/CinemaEditor'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 SlideAI\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [step, setStep] = useState(\cf6 \strokec6 'gallery'\cf0 \strokec4 ); \cf7 \cb3 \strokec7 // gallery | wizard | loading | editor\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [selectedTemplate, setSelectedTemplate] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [wizardData, setWizardData] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [presentation, setPresentation] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleTemplateSelect = (template) => \{\cb1 \
\cb3     setSelectedTemplate(template);\cb1 \
\cb3     setTimeout(() => setStep(\cf6 \strokec6 'wizard'\cf0 \strokec4 ), \cf8 \cb3 \strokec8 600\cf0 \cb3 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleWizardComplete = (data) => \{\cb1 \
\cb3     setWizardData(data);\cb1 \
\cb3     setStep(\cf6 \strokec6 'loading'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleLoadingComplete = (generatedPresentation) => \{\cb1 \
\cb3     setPresentation(generatedPresentation);\cb1 \
\cb3     setStep(\cf6 \strokec6 'editor'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleBackToGallery = () => \{\cb1 \
\cb3     setSelectedTemplate(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3     setStep(\cf6 \strokec6 'gallery'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-[#030305] text-white overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf7 \cb3 \strokec7 /* Ambient background */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "fixed inset-0 pointer-events-none"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute inset-0 bg-gradient-to-b from-transparent via-[#030305]/50 to-[#030305]"\cf0 \strokec4  />\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <\cf5 \strokec5 LayoutGroup\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3           \{step === \cf6 \strokec6 'gallery'\cf0 \strokec4  && (\cb1 \
\cb3             <\cf5 \strokec5 TemplateGallery\cf0 \cb1 \strokec4 \
\cb3               key=\cf6 \strokec6 "gallery"\cf0 \cb1 \strokec4 \
\cb3               onSelect=\{handleTemplateSelect\}\cb1 \
\cb3               selectedTemplate=\{selectedTemplate\}\cb1 \
\cb3             />\cb1 \
\cb3           )\}\cb1 \
\
\cb3           \{step === \cf6 \strokec6 'wizard'\cf0 \strokec4  && (\cb1 \
\cb3             <\cf5 \strokec5 MagicWizard\cf0 \cb1 \strokec4 \
\cb3               key=\cf6 \strokec6 "wizard"\cf0 \cb1 \strokec4 \
\cb3               template=\{selectedTemplate\}\cb1 \
\cb3               onComplete=\{handleWizardComplete\}\cb1 \
\cb3               onBack=\{handleBackToGallery\}\cb1 \
\cb3             />\cb1 \
\cb3           )\}\cb1 \
\
\cb3           \{step === \cf6 \strokec6 'loading'\cf0 \strokec4  && (\cb1 \
\cb3             <\cf5 \strokec5 AlchemistLoader\cf0 \cb1 \strokec4 \
\cb3               key=\cf6 \strokec6 "loading"\cf0 \cb1 \strokec4 \
\cb3               template=\{selectedTemplate\}\cb1 \
\cb3               wizardData=\{wizardData\}\cb1 \
\cb3               onComplete=\{handleLoadingComplete\}\cb1 \
\cb3             />\cb1 \
\cb3           )\}\cb1 \
\
\cb3           \{step === \cf6 \strokec6 'editor'\cf0 \strokec4  && (\cb1 \
\cb3             <\cf5 \strokec5 CinemaEditor\cf0 \cb1 \strokec4 \
\cb3               key=\cf6 \strokec6 "editor"\cf0 \cb1 \strokec4 \
\cb3               presentation=\{presentation\}\cb1 \
\cb3               template=\{selectedTemplate\}\cb1 \
\cb3               onBack=\{() => setStep(\cf6 \strokec6 'gallery'\cf0 \strokec4 )\}\cb1 \
\cb3             />\cb1 \
\cb3           )\}\cb1 \
\cb3         </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3       </\cf5 \strokec5 LayoutGroup\cf0 \strokec4 >\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}