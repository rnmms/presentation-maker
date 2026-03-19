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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect, useCallback, useMemo \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Wand2\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Layout\cf0 \strokec4 , \cf5 \strokec5 Type\cf0 \strokec4 , \cf5 \strokec5 CheckCircle2\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 StepIndicator\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 './StepIndicator'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  stages = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ id: \cf6 \strokec6 'analyze'\cf0 \strokec4 , label: \cf6 \strokec6 'Analyzing your content'\cf0 \strokec4 , icon: \cf5 \strokec5 Wand2\cf0 \strokec4 , duration: \cf7 \strokec7 2500\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'structure'\cf0 \strokec4 , label: \cf6 \strokec6 'Structuring your story'\cf0 \strokec4 , icon: \cf5 \strokec5 Layout\cf0 \strokec4 , duration: \cf7 \strokec7 2000\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'design'\cf0 \strokec4 , label: \cf6 \strokec6 'Applying design magic'\cf0 \strokec4 , icon: \cf5 \strokec5 Palette\cf0 \strokec4 , duration: \cf7 \strokec7 2500\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'content'\cf0 \strokec4 , label: \cf6 \strokec6 'Writing slides'\cf0 \strokec4 , icon: \cf5 \strokec5 Type\cf0 \strokec4 , duration: \cf7 \strokec7 3000\cf0 \strokec4  \},\cb1 \
\cb3   \{ id: \cf6 \strokec6 'polish'\cf0 \strokec4 , label: \cf6 \strokec6 'Final touches'\cf0 \strokec4 , icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , duration: \cf7 \strokec7 2000\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // Floating star particle - More visible and spectacular\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Star\cf0 \strokec4 (\{ delay, size = \cf7 \strokec7 2\cf0 \strokec4  \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  startX = \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 100\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  startY = \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 100\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  duration = \cf7 \strokec7 8\cf0 \strokec4  + \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 12\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  moveX = (\cf5 \strokec5 Math\cf0 \strokec4 .random() - \cf7 \strokec7 0.5\cf0 \strokec4 ) * \cf7 \strokec7 50\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  moveY = (\cf5 \strokec5 Math\cf0 \strokec4 .random() - \cf7 \strokec7 0.5\cf0 \strokec4 ) * \cf7 \strokec7 50\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  isLarge = size > \cf7 \strokec7 3\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  color = \cf5 \strokec5 Math\cf0 \strokec4 .random() > \cf7 \strokec7 0.5\cf0 \strokec4  ? \cf6 \strokec6 '168,85,247'\cf0 \strokec4  : \cf6 \strokec6 '236,72,153'\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , scale: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{\cb1 \
\cb3         opacity: [\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 0.8\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 0.8\cf0 \strokec4 , \cf7 \strokec7 0\cf0 \strokec4 ],\cb1 \
\cb3         scale: [\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 1.2\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.2\cf0 \strokec4 , \cf7 \strokec7 0\cf0 \strokec4 ],\cb1 \
\cb3         x: [\cf7 \strokec7 0\cf0 \strokec4 , moveX * \cf7 \strokec7 0.5\cf0 \strokec4 , moveX, moveX * \cf7 \strokec7 1.5\cf0 \strokec4 , moveX * \cf7 \strokec7 2\cf0 \strokec4 ],\cb1 \
\cb3         y: [\cf7 \strokec7 0\cf0 \strokec4 , moveY * \cf7 \strokec7 0.5\cf0 \strokec4 , moveY, moveY * \cf7 \strokec7 1.5\cf0 \strokec4 , moveY * \cf7 \strokec7 2\cf0 \strokec4 ],\cb1 \
\cb3       \}\}\cb1 \
\cb3       transition=\{\{\cb1 \
\cb3         duration,\cb1 \
\cb3         delay,\cb1 \
\cb3         repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 ,\cb1 \
\cb3         ease: \cf6 \strokec6 "easeInOut"\cf0 \cb1 \strokec4 \
\cb3       \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "absolute rounded-full pointer-events-none"\cf0 \cb1 \strokec4 \
\cb3       style=\{\{\cb1 \
\cb3         left: \cf6 \strokec6 `\cf0 \strokec4 $\{startX\}\cf6 \strokec6 %`\cf0 \strokec4 ,\cb1 \
\cb3         top: \cf6 \strokec6 `\cf0 \strokec4 $\{startY\}\cf6 \strokec6 %`\cf0 \strokec4 ,\cb1 \
\cb3         width: size,\cb1 \
\cb3         height: size,\cb1 \
\cb3         background: isLarge \cb1 \
\cb3           ? \cf6 \strokec6 `radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(\cf0 \strokec4 $\{color\}\cf6 \strokec6 ,1) 40%, transparent 70%)`\cf0 \cb1 \strokec4 \
\cb3           : \cf6 \strokec6 `radial-gradient(circle, rgba(\cf0 \strokec4 $\{color\}\cf6 \strokec6 ,1) 0%, rgba(\cf0 \strokec4 $\{color\}\cf6 \strokec6 ,0.5) 50%, transparent 100%)`\cf0 \strokec4 ,\cb1 \
\cb3         boxShadow: isLarge \cb1 \
\cb3           ? \cf6 \strokec6 `0 0 \cf0 \strokec4 $\{size * \cf7 \strokec7 6\cf0 \strokec4 \}\cf6 \strokec6 px \cf0 \strokec4 $\{size * \cf7 \strokec7 2\cf0 \strokec4 \}\cf6 \strokec6 px rgba(\cf0 \strokec4 $\{color\}\cf6 \strokec6 ,0.6), 0 0 \cf0 \strokec4 $\{size * \cf7 \strokec7 10\cf0 \strokec4 \}\cf6 \strokec6 px \cf0 \strokec4 $\{size * \cf7 \strokec7 3\cf0 \strokec4 \}\cf6 \strokec6 px rgba(\cf0 \strokec4 $\{color\}\cf6 \strokec6 ,0.3)`\cf0 \cb1 \strokec4 \
\cb3           : \cf6 \strokec6 `0 0 \cf0 \strokec4 $\{size * \cf7 \strokec7 4\cf0 \strokec4 \}\cf6 \strokec6 px \cf0 \strokec4 $\{size\}\cf6 \strokec6 px rgba(\cf0 \strokec4 $\{color\}\cf6 \strokec6 ,0.5)`\cf0 \cb1 \strokec4 \
\cb3       \}\}\cb1 \
\cb3     />\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // Twinkling star - static position with twinkle effect\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 TwinklingStar\cf0 \strokec4 (\{ x, y, size, delay \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       animate=\{\{\cb1 \
\cb3         opacity: [\cf7 \strokec7 0.2\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 0.2\cf0 \strokec4 ],\cb1 \
\cb3         scale: [\cf7 \strokec7 0.8\cf0 \strokec4 , \cf7 \strokec7 1.2\cf0 \strokec4 , \cf7 \strokec7 0.8\cf0 \strokec4 ],\cb1 \
\cb3       \}\}\cb1 \
\cb3       transition=\{\{\cb1 \
\cb3         duration: \cf7 \strokec7 2\cf0 \strokec4  + \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 2\cf0 \strokec4 ,\cb1 \
\cb3         delay,\cb1 \
\cb3         repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 ,\cb1 \
\cb3         ease: \cf6 \strokec6 "easeInOut"\cf0 \cb1 \strokec4 \
\cb3       \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "absolute rounded-full pointer-events-none"\cf0 \cb1 \strokec4 \
\cb3       style=\{\{\cb1 \
\cb3         left: \cf6 \strokec6 `\cf0 \strokec4 $\{x\}\cf6 \strokec6 %`\cf0 \strokec4 ,\cb1 \
\cb3         top: \cf6 \strokec6 `\cf0 \strokec4 $\{y\}\cf6 \strokec6 %`\cf0 \strokec4 ,\cb1 \
\cb3         width: size,\cb1 \
\cb3         height: size,\cb1 \
\cb3         background: \cf6 \strokec6 'white'\cf0 \strokec4 ,\cb1 \
\cb3         boxShadow: \cf6 \strokec6 `0 0 \cf0 \strokec4 $\{size * \cf7 \strokec7 3\cf0 \strokec4 \}\cf6 \strokec6 px \cf0 \strokec4 $\{size\}\cf6 \strokec6 px rgba(255,255,255,0.5), 0 0 \cf0 \strokec4 $\{size * \cf7 \strokec7 6\cf0 \strokec4 \}\cf6 \strokec6 px \cf0 \strokec4 $\{size * \cf7 \strokec7 2\cf0 \strokec4 \}\cf6 \strokec6 px rgba(168,85,247,0.3)`\cf0 \cb1 \strokec4 \
\cb3       \}\}\cb1 \
\cb3     />\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // Orbiting particle\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 OrbitParticle\cf0 \strokec4 (\{ index, total, radius \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  angle = (index / total) * \cf5 \strokec5 Math\cf0 \strokec4 .\cf5 \strokec5 PI\cf0 \strokec4  * \cf7 \strokec7 2\cf0 \strokec4 ;\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       animate=\{\{ rotate: \cf7 \strokec7 360\cf0 \strokec4  \}\}\cb1 \
\cb3       transition=\{\{ duration: \cf7 \strokec7 8\cf0 \strokec4  + index, repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , ease: \cf6 \strokec6 "linear"\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "absolute inset-0"\cf0 \cb1 \strokec4 \
\cb3       style=\{\{ transformOrigin: \cf6 \strokec6 'center'\cf0 \strokec4  \}\}\cb1 \
\cb3     >\cb1 \
\cb3       <motion.div\cb1 \
\cb3         animate=\{\{ scale: [\cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.5\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 ], opacity: [\cf7 \strokec7 0.6\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 0.6\cf0 \strokec4 ] \}\}\cb1 \
\cb3         transition=\{\{ duration: \cf7 \strokec7 2\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , delay: index * \cf7 \strokec7 0.2\cf0 \strokec4  \}\}\cb1 \
\cb3         className=\cf6 \strokec6 "absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"\cf0 \cb1 \strokec4 \
\cb3         style=\{\{\cb1 \
\cb3           left: \cf6 \strokec6 `calc(50% + \cf0 \strokec4 $\{\cf5 \strokec5 Math\cf0 \strokec4 .cos(angle) * radius\}\cf6 \strokec6 px)`\cf0 \strokec4 ,\cb1 \
\cb3           top: \cf6 \strokec6 `calc(50% + \cf0 \strokec4 $\{\cf5 \strokec5 Math\cf0 \strokec4 .sin(angle) * radius\}\cf6 \strokec6 px)`\cf0 \strokec4 ,\cb1 \
\cb3           transform: \cf6 \strokec6 'translate(-50%, -50%)'\cf0 \strokec4 ,\cb1 \
\cb3           boxShadow: \cf6 \strokec6 '0 0 15px 3px rgba(168,85,247,0.5)'\cf0 \cb1 \strokec4 \
\cb3         \}\}\cb1 \
\cb3       />\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf8 \cb3 \strokec8 // Shooting star\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ShootingStar\cf0 \strokec4 (\{ delay \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ x: \cf6 \strokec6 '-10%'\cf0 \strokec4 , y: \cf6 \strokec6 '0%'\cf0 \strokec4 , opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{ x: \cf6 \strokec6 '110%'\cf0 \strokec4 , y: \cf6 \strokec6 '100%'\cf0 \strokec4 , opacity: [\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 0\cf0 \strokec4 ] \}\}\cb1 \
\cb3       transition=\{\{ duration: \cf7 \strokec7 2\cf0 \strokec4 , delay, repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , repeatDelay: \cf7 \strokec7 5\cf0 \strokec4  + \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 5\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "absolute w-1 h-1 bg-white rounded-full"\cf0 \cb1 \strokec4 \
\cb3       style=\{\{\cb1 \
\cb3         top: \cf6 \strokec6 `\cf0 \strokec4 $\{\cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 50\cf0 \strokec4 \}\cf6 \strokec6 %`\cf0 \strokec4 ,\cb1 \
\cb3         boxShadow: \cf6 \strokec6 '0 0 6px 2px rgba(255,255,255,0.8), -20px 0 15px 2px rgba(168,85,247,0.5)'\cf0 \cb1 \strokec4 \
\cb3       \}\}\cb1 \
\cb3     />\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 AlchemistLoader\cf0 \strokec4 (\{ template, wizardData, onComplete \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [currentStage, setCurrentStage] = useState(\cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [progress, setProgress] = useState(\cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\
\cb3   \cf8 \strokec8 // Generate stars once - More stars, more variety\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  floatingStars = useMemo(() => \cb1 \
\cb3     [...\cf5 \strokec5 Array\cf0 \strokec4 (\cf7 \strokec7 80\cf0 \strokec4 )].map((_, i) => (\{\cb1 \
\cb3       delay: i * \cf7 \strokec7 0.2\cf0 \strokec4 ,\cb1 \
\cb3       size: \cf7 \strokec7 1\cf0 \strokec4  + \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 4\cf0 \cb1 \strokec4 \
\cb3     \})), []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  twinklingStars = useMemo(() =>\cb1 \
\cb3     [...\cf5 \strokec5 Array\cf0 \strokec4 (\cf7 \strokec7 50\cf0 \strokec4 )].map((_, i) => (\{\cb1 \
\cb3       x: \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 100\cf0 \strokec4 ,\cb1 \
\cb3       y: \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 100\cf0 \strokec4 ,\cb1 \
\cb3       size: \cf7 \strokec7 1\cf0 \strokec4  + \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 2\cf0 \strokec4 ,\cb1 \
\cb3       delay: \cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 3\cf0 \cb1 \strokec4 \
\cb3     \})), []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  shootingStars = useMemo(() =>\cb1 \
\cb3     [...\cf5 \strokec5 Array\cf0 \strokec4 (\cf7 \strokec7 8\cf0 \strokec4 )].map((_, i) => (\{ delay: i * \cf7 \strokec7 2\cf0 \strokec4  \})), []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  generatePresentation = useCallback(\cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  presentation = \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .create(\{\cb1 \
\cb3         template_id: template?.id,\cb1 \
\cb3         template_name: template?.name,\cb1 \
\cb3         content_text: wizardData?.topic,\cb1 \
\cb3         title: \cf6 \strokec6 'New Presentation'\cf0 \strokec4 ,\cb1 \
\cb3         audience: wizardData?.audience,\cb1 \
\cb3         tone: wizardData?.tone,\cb1 \
\cb3         slide_count: wizardData?.slideCount || \cf7 \strokec7 10\cf0 \strokec4 ,\cb1 \
\cb3         status: \cf6 \strokec6 'draft'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf5 \strokec5 Core\cf0 \strokec4 .\cf5 \strokec5 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3         prompt: \cf6 \strokec6 `Create a presentation about: "\cf0 \strokec4 $\{wizardData?.topic\}\cf6 \strokec6 "\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 Audience: \cf0 \strokec4 $\{wizardData?.audience\}\cf6 \strokec6 , Tone: \cf0 \strokec4 $\{wizardData?.tone\}\cf6 \strokec6 , Slides: \cf0 \strokec4 $\{wizardData?.slideCount || \cf7 \strokec7 10\cf0 \strokec4 \}\cb1 \
\
\cf6 \cb3 \strokec6 Return JSON: \{"title": "...", "slides": [\{"slide_number": 1, "type": "cover", "title": "...", "content": ["..."]\}]\}`\cf0 \strokec4 ,\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3         response_json_schema: \{\cb1 \
\cb3           type: \cf6 \strokec6 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             title: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \},\cb1 \
\cb3             slides: \{ type: \cf6 \strokec6 'array'\cf0 \strokec4 , items: \{ type: \cf6 \strokec6 'object'\cf0 \strokec4 , properties: \{\cb1 \
\cb3               slide_number: \{ type: \cf6 \strokec6 'number'\cf0 \strokec4  \},\cb1 \
\cb3               type: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \},\cb1 \
\cb3               title: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \},\cb1 \
\cb3               content: \{ type: \cf6 \strokec6 'array'\cf0 \strokec4 , items: \{ type: \cf6 \strokec6 'string'\cf0 \strokec4  \} \}\cb1 \
\cb3             \}\}\}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\
\cb3       \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .update(presentation.id, \{\cb1 \
\cb3         title: response.title,\cb1 \
\cb3         slides: response.slides,\cb1 \
\cb3         status: \cf6 \strokec6 'editing'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\
\cb3       \cf2 \strokec2 return\cf0 \strokec4  \{ ...presentation, ...response \};\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  fallbackSlides = \cf5 \strokec5 Array\cf0 \strokec4 .\cf2 \strokec2 from\cf0 \strokec4 (\{ length: wizardData?.slideCount || \cf7 \strokec7 10\cf0 \strokec4  \}, (_, i) => (\{\cb1 \
\cb3         slide_number: i + \cf7 \strokec7 1\cf0 \strokec4 ,\cb1 \
\cb3         type: i === \cf7 \strokec7 0\cf0 \strokec4  ? \cf6 \strokec6 'cover'\cf0 \strokec4  : \cf6 \strokec6 'content'\cf0 \strokec4 ,\cb1 \
\cb3         title: i === \cf7 \strokec7 0\cf0 \strokec4  ? \cf6 \strokec6 'Your Presentation'\cf0 \strokec4  : \cf6 \strokec6 `Slide \cf0 \strokec4 $\{i + \cf7 \strokec7 1\cf0 \strokec4 \}\cf6 \strokec6 `\cf0 \strokec4 ,\cb1 \
\cb3         content: [\cf6 \strokec6 'Click to edit'\cf0 \strokec4 ]\cb1 \
\cb3       \}));\cb1 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .create(\{\cb1 \
\cb3         template_id: template?.id,\cb1 \
\cb3         title: \cf6 \strokec6 'Your Presentation'\cf0 \strokec4 ,\cb1 \
\cb3         slides: fallbackSlides,\cb1 \
\cb3         status: \cf6 \strokec6 'editing'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\cb3     \}\cb1 \
\cb3   \}, [template, wizardData]);\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  totalDuration = stages.reduce((sum, s) => sum + s.duration, \cf7 \strokec7 0\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 let\cf0 \strokec4  elapsed = \cf7 \strokec7 0\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf2 \strokec2 const\cf0 \strokec4  interval = setInterval(() => \{\cb1 \
\cb3       elapsed += \cf7 \strokec7 100\cf0 \strokec4 ;\cb1 \
\cb3       setProgress(\cf5 \strokec5 Math\cf0 \strokec4 .min((elapsed / totalDuration) * \cf7 \strokec7 100\cf0 \strokec4 , \cf7 \strokec7 99\cf0 \strokec4 ));\cb1 \
\
\cb3       \cf2 \strokec2 let\cf0 \strokec4  stageElapsed = \cf7 \strokec7 0\cf0 \strokec4 ;\cb1 \
\cb3       \cf2 \strokec2 for\cf0 \strokec4  (\cf2 \strokec2 let\cf0 \strokec4  i = \cf7 \strokec7 0\cf0 \strokec4 ; i < stages.length; i++) \{\cb1 \
\cb3         stageElapsed += stages[i].duration;\cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (elapsed < stageElapsed) \{\cb1 \
\cb3           setCurrentStage(i);\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}, \cf7 \strokec7 100\cf0 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => clearInterval(interval);\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     generatePresentation().then(result => \{\cb1 \
\cb3       setProgress(\cf7 \strokec7 100\cf0 \strokec4 );\cb1 \
\cb3       setCurrentStage(stages.length);\cb1 \
\cb3       setTimeout(() => onComplete(result), \cf7 \strokec7 800\cf0 \strokec4 );\cb1 \
\cb3     \});\cb1 \
\cb3   \}, [generatePresentation, onComplete]);\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3       exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       className=\cf6 \strokec6 "fixed inset-0 bg-[#030305] overflow-hidden"\cf0 \cb1 \strokec4 \
\cb3     >\cb1 \
\cb3       \{\cf8 \strokec8 /* Star field background - Spectacular */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "absolute inset-0 overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf8 \strokec8 /* Static twinkling stars */\cf0 \strokec4 \}\cb1 \
\cb3         \{twinklingStars.map((star, i) => (\cb1 \
\cb3           <\cf5 \strokec5 TwinklingStar\cf0 \strokec4  key=\{\cf6 \strokec6 `twinkle-\cf0 \strokec4 $\{i\}\cf6 \strokec6 `\cf0 \strokec4 \} x=\{star.x\} y=\{star.y\} size=\{star.size\} delay=\{star.delay\} />\cb1 \
\cb3         ))\}\cb1 \
\cb3         \{\cf8 \strokec8 /* Floating moving stars */\cf0 \strokec4 \}\cb1 \
\cb3         \{floatingStars.map((star, i) => (\cb1 \
\cb3           <\cf5 \strokec5 Star\cf0 \strokec4  key=\{\cf6 \strokec6 `float-\cf0 \strokec4 $\{i\}\cf6 \strokec6 `\cf0 \strokec4 \} delay=\{star.delay\} size=\{star.size\} />\cb1 \
\cb3         ))\}\cb1 \
\cb3         \{\cf8 \strokec8 /* Shooting stars */\cf0 \strokec4 \}\cb1 \
\cb3         \{shootingStars.map((s, i) => (\cb1 \
\cb3           <\cf5 \strokec5 ShootingStar\cf0 \strokec4  key=\{\cf6 \strokec6 `shoot-\cf0 \strokec4 $\{i\}\cf6 \strokec6 `\cf0 \strokec4 \} delay=\{s.delay\} />\cb1 \
\cb3         ))\}\cb1 \
\cb3         \{\cf8 \strokec8 /* Extra glow layer */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1)_0%,transparent_50%)]"\cf0 \strokec4  />\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Gradient orbs */\cf0 \strokec4 \}\cb1 \
\cb3       <motion.div\cb1 \
\cb3         animate=\{\{ scale: [\cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.3\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 ], opacity: [\cf7 \strokec7 0.2\cf0 \strokec4 , \cf7 \strokec7 0.4\cf0 \strokec4 , \cf7 \strokec7 0.2\cf0 \strokec4 ] \}\}\cb1 \
\cb3         transition=\{\{ duration: \cf7 \strokec7 4\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4  \}\}\cb1 \
\cb3         className=\cf6 \strokec6 "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/30 blur-[120px]"\cf0 \cb1 \strokec4 \
\cb3       />\cb1 \
\cb3       <motion.div\cb1 \
\cb3         animate=\{\{ scale: [\cf7 \strokec7 1.2\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.2\cf0 \strokec4 ], opacity: [\cf7 \strokec7 0.15\cf0 \strokec4 , \cf7 \strokec7 0.3\cf0 \strokec4 , \cf7 \strokec7 0.15\cf0 \strokec4 ] \}\}\cb1 \
\cb3         transition=\{\{ duration: \cf7 \strokec7 5\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , delay: \cf7 \strokec7 1\cf0 \strokec4  \}\}\cb1 \
\cb3         className=\cf6 \strokec6 "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-600/30 blur-[100px]"\cf0 \cb1 \strokec4 \
\cb3       />\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Header */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "relative z-20 pt-6"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "max-w-4xl mx-auto px-6"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 StepIndicator\cf0 \strokec4  currentStep=\{\cf7 \strokec7 3\cf0 \strokec4 \} />\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       \{\cf8 \strokec8 /* Main content */\cf0 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)]"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf8 \strokec8 /* Central animation */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "relative w-56 h-56 mb-10"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf8 \strokec8 /* Orbiting particles */\cf0 \strokec4 \}\cb1 \
\cb3           \{[...\cf5 \strokec5 Array\cf0 \strokec4 (\cf7 \strokec7 8\cf0 \strokec4 )].map((_, i) => (\cb1 \
\cb3             <\cf5 \strokec5 OrbitParticle\cf0 \strokec4  key=\{i\} index=\{i\} total=\{\cf7 \strokec7 8\cf0 \strokec4 \} radius=\{\cf7 \strokec7 90\cf0 \strokec4 \} />\cb1 \
\cb3           ))\}\cb1 \
\cb3           \{[...\cf5 \strokec5 Array\cf0 \strokec4 (\cf7 \strokec7 6\cf0 \strokec4 )].map((_, i) => (\cb1 \
\cb3             <\cf5 \strokec5 OrbitParticle\cf0 \strokec4  key=\{\cf6 \strokec6 `inner-\cf0 \strokec4 $\{i\}\cf6 \strokec6 `\cf0 \strokec4 \} index=\{i\} total=\{\cf7 \strokec7 6\cf0 \strokec4 \} radius=\{\cf7 \strokec7 60\cf0 \strokec4 \} />\cb1 \
\cb3           ))\}\cb1 \
\
\cb3           \{\cf8 \strokec8 /* Central icon */\cf0 \strokec4 \}\cb1 \
\cb3           <motion.div\cb1 \
\cb3             animate=\{\{ scale: [\cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.1\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 ], rotate: [\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 5\cf0 \strokec4 , -\cf7 \strokec7 5\cf0 \strokec4 , \cf7 \strokec7 0\cf0 \strokec4 ] \}\}\cb1 \
\cb3             transition=\{\{ duration: \cf7 \strokec7 3\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "absolute inset-0 flex items-center justify-center"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-purple-500/40"\cf0 \strokec4 >\cb1 \
\cb3               <motion.div animate=\{\{ rotate: \cf7 \strokec7 360\cf0 \strokec4  \}\} transition=\{\{ duration: \cf7 \strokec7 20\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , ease: \cf6 \strokec6 "linear"\cf0 \strokec4  \}\}>\cb1 \
\cb3                 <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-10 h-10 text-white"\cf0 \strokec4  />\cb1 \
\cb3               </motion.div>\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.div>\cb1 \
\
\cb3           \{\cf8 \strokec8 /* Rings */\cf0 \strokec4 \}\cb1 \
\cb3           <motion.div\cb1 \
\cb3             animate=\{\{ rotate: -\cf7 \strokec7 360\cf0 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ duration: \cf7 \strokec7 12\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , ease: \cf6 \strokec6 "linear"\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "absolute inset-0"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "absolute inset-6 rounded-full border border-purple-500/20"\cf0 \strokec4  />\cb1 \
\cb3           </motion.div>\cb1 \
\cb3           <motion.div\cb1 \
\cb3             animate=\{\{ rotate: \cf7 \strokec7 360\cf0 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ duration: \cf7 \strokec7 20\cf0 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , ease: \cf6 \strokec6 "linear"\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "absolute inset-0"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "absolute inset-0 rounded-full border border-dashed border-pink-500/20"\cf0 \strokec4  />\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Stage indicators */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center gap-3 mb-6"\cf0 \strokec4 >\cb1 \
\cb3           \{stages.map((stage, i) => \{\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = stage.icon;\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  isComplete = currentStage > i;\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  isCurrent = currentStage === i;\cb1 \
\cb3             \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3               <motion.div\cb1 \
\cb3                 key=\{stage.id\}\cb1 \
\cb3                 animate=\{isCurrent ? \{ scale: [\cf7 \strokec7 1\cf0 \strokec4 , \cf7 \strokec7 1.2\cf0 \strokec4 , \cf7 \strokec7 1\cf0 \strokec4 ] \} : \{\}\}\cb1 \
\cb3                 transition=\{\{ duration: \cf7 \strokec7 0.5\cf0 \strokec4 , repeat: isCurrent ? \cf5 \strokec5 Infinity\cf0 \strokec4  : \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3                 className=\{\cf6 \strokec6 `w-8 h-8 rounded-lg flex items-center justify-center \cf0 \strokec4 $\{\cb1 \
\cb3                   isComplete ? \cf6 \strokec6 'bg-green-500/20 text-green-400'\cf0 \strokec4  :\cb1 \
\cb3                   isCurrent ? \cf6 \strokec6 'bg-purple-500/30 text-purple-300'\cf0 \strokec4  :\cb1 \
\cb3                   \cf6 \strokec6 'bg-white/5 text-slate-600'\cf0 \cb1 \strokec4 \
\cb3                 \}\cf6 \strokec6 `\cf0 \strokec4 \}\cb1 \
\cb3               >\cb1 \
\cb3                 \{isComplete ? <\cf5 \strokec5 CheckCircle2\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  /> : <\cf5 \strokec5 Icon\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\}\cb1 \
\cb3               </motion.div>\cb1 \
\cb3             );\cb1 \
\cb3           \})\}\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Current stage text */\cf0 \strokec4 \}\cb1 \
\cb3         <\cf5 \strokec5 AnimatePresence\cf0 \strokec4  mode=\cf6 \strokec6 "wait"\cf0 \strokec4 >\cb1 \
\cb3           <motion.h2\cb1 \
\cb3             key=\{currentStage\}\cb1 \
\cb3             initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 10\cf0 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3             exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: -\cf7 \strokec7 10\cf0 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "text-xl font-semibold text-white mb-2"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             \{currentStage < stages.length ? stages[currentStage].label : \cf6 \strokec6 'Almost ready!'\cf0 \strokec4 \}\cb1 \
\cb3           </motion.h2>\cb1 \
\cb3         </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3         <p className=\cf6 \strokec6 "text-slate-400 text-sm mb-8"\cf0 \strokec4 >\cf5 \strokec5 Creating\cf0 \strokec4  your presentation \cf2 \strokec2 with\cf0 \strokec4  \cf5 \strokec5 AI\cf0 \strokec4  magic</p>\cb1 \
\
\cb3         \{\cf8 \strokec8 /* Progress bar */\cf0 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "w-72"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "h-1.5 bg-white/10 rounded-full overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3             <motion.div\cb1 \
\cb3               initial=\{\{ width: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ width: \cf6 \strokec6 `\cf0 \strokec4 $\{progress\}\cf6 \strokec6 %`\cf0 \strokec4  \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"\cf0 \cb1 \strokec4 \
\cb3               style=\{\{ boxShadow: \cf6 \strokec6 '0 0 20px rgba(168,85,247,0.6)'\cf0 \strokec4  \}\}\cb1 \
\cb3             />\cb1 \
\cb3           </div>\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex justify-between mt-2 text-xs"\cf0 \strokec4 >\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-slate-500"\cf0 \strokec4 >\cf5 \strokec5 Generating\cf0 \strokec4 ...</span>\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-purple-400 font-medium"\cf0 \strokec4 >\{\cf5 \strokec5 Math\cf0 \strokec4 .round(progress)\}%</span>\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}