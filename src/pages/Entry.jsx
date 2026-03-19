{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;\red19\green118\blue70;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c3529\c52549\c34510;\cssrgb\c80392\c19216\c19216;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ArrowRight\cf0 \strokec4 , \cf5 \strokec5 Sparkles\cf0 \strokec4 , \cf5 \strokec5 Palette\cf0 \strokec4 , \cf5 \strokec5 Edit3\cf0 \strokec4 , \cf5 \strokec5 Zap\cf0 \strokec4 , \cf5 \strokec5 Clock\cf0 \strokec4 , \cf5 \strokec5 Users\cf0 \strokec4 , \cf5 \strokec5 Download\cf0 \strokec4 , \cf5 \strokec5 Github\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/utils'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'framer-motion'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Entry\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  features = [\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Palette\cf0 \strokec4 , title: \cf6 \strokec6 '30,000+ Templates'\cf0 \strokec4 , description: \cf6 \strokec6 'Professional designs'\cf0 \strokec4 , color: \cf6 \strokec6 'indigo'\cf0 \strokec4  \},\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Sparkles\cf0 \strokec4 , title: \cf6 \strokec6 'AI-Powered'\cf0 \strokec4 , description: \cf6 \strokec6 'Smart generation'\cf0 \strokec4 , color: \cf6 \strokec6 'purple'\cf0 \strokec4  \},\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Clock\cf0 \strokec4 , title: \cf6 \strokec6 '10x Faster'\cf0 \strokec4 , description: \cf6 \strokec6 'Minutes, not hours'\cf0 \strokec4 , color: \cf6 \strokec6 'pink'\cf0 \strokec4  \},\cb1 \
\cb3   ];\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "min-h-screen bg-slate-950 text-white overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3       \{\cf7 \cb3 \strokec7 /* Animated background */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3       <div className=\cf6 \strokec6 "absolute inset-0 overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute top-1/4 left-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  />\cb1 \
\cb3         <div className=\cf6 \strokec6 "absolute bottom-1/4 right-0 w-64 md:w-96 h-64 md:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"\cf0 \strokec4  style=\{\{ animationDelay: \cf6 \strokec6 '1s'\cf0 \strokec4  \}\} />\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-12"\cf0 \strokec4 >\cb1 \
\cb3         \{\cf7 \cb3 \strokec7 /* Header */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <motion.nav \cb1 \
\cb3           initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: -\cf8 \cb3 \strokec8 20\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "flex items-center justify-between mb-8 sm:mb-20"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2 sm:gap-3"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 sm:w-5 sm:h-5 text-white"\cf0 \strokec4  />\cb1 \
\cb3             </div>\cb1 \
\cb3             <span className=\cf6 \strokec6 "text-lg sm:text-xl font-bold"\cf0 \strokec4 >\cf5 \strokec5 SlideAI\cf0 \strokec4 </span>\cb1 \
\cb3           </div>\cb1 \
\cb3           <div className=\cf6 \strokec6 "hidden sm:flex items-center gap-4"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  className=\cf6 \strokec6 "text-slate-300 hover:text-white hover:bg-white/10"\cf0 \strokec4 >\cb1 \
\cb3               \cf5 \strokec5 Templates\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  className=\cf6 \strokec6 "text-slate-300 hover:text-white hover:bg-white/10"\cf0 \strokec4 >\cb1 \
\cb3               \cf5 \strokec5 Examples\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Button\cf0 \strokec4  \cb1 \
\cb3               variant=\cf6 \strokec6 "ghost"\cf0 \strokec4  \cb1 \
\cb3               className=\cf6 \strokec6 "text-slate-300 hover:text-white hover:bg-white/10"\cf0 \cb1 \strokec4 \
\cb3               onClick=\{() => window.open(\cf6 \strokec6 'https://github.com'\cf0 \strokec4 , \cf6 \strokec6 '_blank'\cf0 \strokec4 )\}\cb1 \
\cb3             >\cb1 \
\cb3               <\cf5 \strokec5 Github\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Download\cf0 \strokec4  \cf5 \strokec5 Source\cf0 \cb1 \strokec4 \
\cb3             </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           </div>\cb1 \
\cb3         </motion.nav>\cb1 \
\
\cb3         \{\cf7 \cb3 \strokec7 /* Hero Section */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <div className=\cf6 \strokec6 "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[70vh]"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf7 \cb3 \strokec7 /* Left Content */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <motion.div \cb1 \
\cb3             initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , x: -\cf8 \cb3 \strokec8 30\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , x: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ duration: \cf8 \cb3 \strokec8 0.6\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "text-center lg:text-left"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <div className=\cf6 \strokec6 "inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Zap\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 sm:w-4 sm:h-4"\cf0 \strokec4  />\cb1 \
\cb3               \cf5 \strokec5 Powered\cf0 \strokec4  by \cf5 \strokec5 AI\cf0 \strokec4  \cf9 \cb3 \strokec9 \'95\cf0 \cb3 \strokec4  \cf5 \strokec5 Free\cf0 \strokec4  to \cf2 \strokec2 try\cf0 \cb1 \strokec4 \
\cb3             </div>\cb1 \
\cb3             \cb1 \
\cb3             <h1 className=\cf6 \strokec6 "text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 leading-[1.1]"\cf0 \strokec4 >\cb1 \
\cb3               \cf5 \strokec5 Create\cf0 \strokec4  stunning\cb1 \
\cb3               <span className=\cf6 \strokec6 "block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"\cf0 \strokec4 >\cb1 \
\cb3                 presentations\cb1 \
\cb3               </span>\cb1 \
\cb3               \cf2 \strokec2 in\cf0 \strokec4  seconds\cb1 \
\cb3             </h1>\cb1 \
\cb3             \cb1 \
\cb3             <p className=\cf6 \strokec6 "text-base sm:text-xl text-slate-400 mb-6 sm:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0"\cf0 \strokec4 >\cb1 \
\cb3               \cf5 \strokec5 Choose\cf0 \strokec4  a template, describe your topic, and \cf2 \strokec2 let\cf0 \strokec4  \cf5 \strokec5 AI\cf0 \strokec4  create a professional presentation \cf2 \strokec2 for\cf0 \strokec4  you.\cb1 \
\cb3             </p>\cb1 \
\
\cb3             \{\cf7 \cb3 \strokec7 /* CTA Buttons */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Link\cf0 \strokec4  to=\{createPageUrl(\cf6 \strokec6 'SlideAI'\cf0 \strokec4 )\} className=\cf6 \strokec6 "w-full sm:w-auto"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                   size=\cf6 \strokec6 "lg"\cf0 \cb1 \strokec4 \
\cb3                   className=\cf6 \strokec6 "w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-indigo-500/30 hover:shadow-2xl transition-all duration-300 text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-xl"\cf0 \cb1 \strokec4 \
\cb3                 >\cb1 \
\cb3                   <\cf5 \strokec5 Sparkles\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 mr-2"\cf0 \strokec4  />\cb1 \
\cb3                   \cf5 \strokec5 Start\cf0 \strokec4  \cf5 \strokec5 Creating\cf0 \cb1 \strokec4 \
\cb3                   <\cf5 \strokec5 ArrowRight\cf0 \strokec4  className=\cf6 \strokec6 "ml-2 w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3                 </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3               </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3                 size=\cf6 \strokec6 "lg"\cf0 \cb1 \strokec4 \
\cb3                 variant=\cf6 \strokec6 "outline"\cf0 \cb1 \strokec4 \
\cb3                 className=\cf6 \strokec6 "w-full sm:w-auto border-slate-700 text-slate-300 hover:bg-white/5 hover:text-white px-6 sm:px-8 py-6 sm:py-7 rounded-xl"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 \cf5 \strokec5 Watch\cf0 \strokec4  \cf5 \strokec5 Demo\cf0 \cb1 \strokec4 \
\cb3               </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </div>\cb1 \
\
\cb3             \{\cf7 \cb3 \strokec7 /* Trust Indicators - Mobile optimized */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm text-slate-500"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-center gap-1.5 sm:gap-2"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Users\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3 sm:w-4 sm:h-4"\cf0 \strokec4  />\cb1 \
\cb3                 <span>\cf8 \cb3 \strokec8 10\cf5 \cb3 \strokec5 M\cf0 \strokec4 + users</span>\cb1 \
\cb3               </div>\cb1 \
\cb3               <div className=\cf6 \strokec6 "hidden sm:block w-1 h-1 rounded-full bg-slate-600"\cf0 \strokec4  />\cb1 \
\cb3               <span>\cf5 \strokec5 No\cf0 \strokec4  credit card</span>\cb1 \
\cb3               <div className=\cf6 \strokec6 "hidden sm:block w-1 h-1 rounded-full bg-slate-600"\cf0 \strokec4  />\cb1 \
\cb3               <span>\cf5 \strokec5 Export\cf0 \strokec4  to \cf5 \strokec5 PPTX\cf0 \strokec4 </span>\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.div>\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* Right Visual - Hidden on mobile, simplified */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <motion.div \cb1 \
\cb3             initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , x: \cf8 \cb3 \strokec8 30\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , x: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             transition=\{\{ duration: \cf8 \cb3 \strokec8 0.6\cf0 \cb3 \strokec4 , delay: \cf8 \cb3 \strokec8 0.2\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3             className=\cf6 \strokec6 "relative hidden lg:block"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             \{\cf7 \cb3 \strokec7 /* Main presentation preview */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             <div className=\cf6 \strokec6 "relative"\cf0 \strokec4 >\cb1 \
\cb3               \{\cf7 \cb3 \strokec7 /* Floating cards */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3               <motion.div\cb1 \
\cb3                 animate=\{\{ y: [\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , -\cf8 \cb3 \strokec8 10\cf0 \cb3 \strokec4 , \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ] \}\}\cb1 \
\cb3                 transition=\{\{ duration: \cf8 \cb3 \strokec8 4\cf0 \cb3 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , ease: \cf6 \strokec6 "easeInOut"\cf0 \strokec4  \}\}\cb1 \
\cb3                 className=\cf6 \strokec6 "absolute -top-8 -left-8 w-48 xl:w-64 bg-white rounded-2xl shadow-2xl overflow-hidden z-20"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "aspect-[16/9]"\cf0 \strokec4 >\cb1 \
\cb3                   <img\cb1 \
\cb3                     src=\cf6 \strokec6 "https://media.slidesgo.com/storage/92978467/responsive-images/0-ethereal-aesthetic___media_library_original_1600_900.jpg"\cf0 \cb1 \strokec4 \
\cb3                     alt=\cf6 \strokec6 "Template preview"\cf0 \cb1 \strokec4 \
\cb3                     className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \cb1 \strokec4 \
\cb3                   />\cb1 \
\cb3                 </div>\cb1 \
\cb3               </motion.div>\cb1 \
\
\cb3               \{\cf7 \cb3 \strokec7 /* Main card */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3               <motion.div\cb1 \
\cb3                 animate=\{\{ y: [\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , -\cf8 \cb3 \strokec8 15\cf0 \cb3 \strokec4 , \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ] \}\}\cb1 \
\cb3                 transition=\{\{ duration: \cf8 \cb3 \strokec8 5\cf0 \cb3 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , ease: \cf6 \strokec6 "easeInOut"\cf0 \strokec4 , delay: \cf8 \cb3 \strokec8 0.5\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                 className=\cf6 \strokec6 "relative z-10 ml-12 xl:ml-20"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 shadow-2xl border border-slate-700"\cf0 \strokec4 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "bg-white rounded-2xl overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\cf6 \strokec6 "aspect-[16/9]"\cf0 \strokec4 >\cb1 \
\cb3                       <img\cb1 \
\cb3                         src=\cf6 \strokec6 "https://media.slidesgo.com/storage/91064154/responsive-images/0-startup-pitch-deck___media_library_original_1600_900.jpg"\cf0 \cb1 \strokec4 \
\cb3                         alt=\cf6 \strokec6 "Template preview"\cf0 \cb1 \strokec4 \
\cb3                         className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \cb1 \strokec4 \
\cb3                       />\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </motion.div>\cb1 \
\
\cb3               <motion.div\cb1 \
\cb3                 animate=\{\{ y: [\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , -\cf8 \cb3 \strokec8 8\cf0 \cb3 \strokec4 , \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ] \}\}\cb1 \
\cb3                 transition=\{\{ duration: \cf8 \cb3 \strokec8 4.5\cf0 \cb3 \strokec4 , repeat: \cf5 \strokec5 Infinity\cf0 \strokec4 , ease: \cf6 \strokec6 "easeInOut"\cf0 \strokec4 , delay: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                 className=\cf6 \strokec6 "absolute -bottom-4 -right-4 w-40 xl:w-56 bg-white rounded-2xl shadow-2xl overflow-hidden z-20"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "aspect-[16/9]"\cf0 \strokec4 >\cb1 \
\cb3                   <img\cb1 \
\cb3                     src=\cf6 \strokec6 "https://media.slidesgo.com/storage/92133854/responsive-images/0-ai-automation___media_library_original_1600_900.jpg"\cf0 \cb1 \strokec4 \
\cb3                     alt=\cf6 \strokec6 "Template preview"\cf0 \cb1 \strokec4 \
\cb3                     className=\cf6 \strokec6 "w-full h-full object-cover"\cf0 \cb1 \strokec4 \
\cb3                   />\cb1 \
\cb3                 </div>\cb1 \
\cb3               </motion.div>\cb1 \
\
\cb3               \{\cf7 \cb3 \strokec7 /* AI indicator */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3               <motion.div \cb1 \
\cb3                 initial=\{\{ scale: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                 animate=\{\{ scale: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3                 transition=\{\{ delay: \cf8 \cb3 \strokec8 0.8\cf0 \cb3 \strokec4 , type: \cf6 \strokec6 "spring"\cf0 \strokec4  \}\}\cb1 \
\cb3                 className=\cf6 \strokec6 "absolute -bottom-8 left-8 xl:left-12 bg-gradient-to-r from-indigo-600 to-purple-600 px-3 xl:px-4 py-2 rounded-full flex items-center gap-2 shadow-xl z-30"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "w-2 h-2 rounded-full bg-green-400 animate-pulse"\cf0 \strokec4  />\cb1 \
\cb3                 <span className=\cf6 \strokec6 "text-xs xl:text-sm font-medium"\cf0 \strokec4 >\cf5 \strokec5 AI\cf0 \strokec4  generating...</span>\cb1 \
\cb3               </motion.div>\cb1 \
\cb3             </div>\cb1 \
\cb3           </motion.div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         \{\cf7 \cb3 \strokec7 /* Features Bar */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3         <motion.div \cb1 \
\cb3           initial=\{\{ opacity: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 30\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           animate=\{\{ opacity: \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , y: \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           transition=\{\{ delay: \cf8 \cb3 \strokec8 0.6\cf0 \cb3 \strokec4  \}\}\cb1 \
\cb3           className=\cf6 \strokec6 "mt-10 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6"\cf0 \cb1 \strokec4 \
\cb3         >\cb1 \
\cb3           \{features.map((feature, idx) => \{\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Icon\cf0 \strokec4  = feature.icon;\cb1 \
\cb3             \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3               <div \cb1 \
\cb3                 key=\{idx\}\cb1 \
\cb3                 className=\cf6 \strokec6 "bg-white/5 backdrop-blur border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 hover:bg-white/10 transition-colors"\cf0 \cb1 \strokec4 \
\cb3               >\cb1 \
\cb3                 <div className=\{\cf6 \strokec6 `w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-\cf0 \strokec4 $\{feature.color\}\cf6 \strokec6 -500/20 flex items-center justify-center flex-shrink-0`\cf0 \strokec4 \}>\cb1 \
\cb3                   <\cf5 \strokec5 Icon\cf0 \strokec4  className=\{\cf6 \strokec6 `w-5 h-5 sm:w-6 sm:h-6 text-\cf0 \strokec4 $\{feature.color\}\cf6 \strokec6 -400`\cf0 \strokec4 \} />\cb1 \
\cb3                 </div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "min-w-0"\cf0 \strokec4 >\cb1 \
\cb3                   <h3 className=\cf6 \strokec6 "font-semibold text-white text-sm sm:text-base"\cf0 \strokec4 >\{feature.title\}</h3>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-xs sm:text-sm text-slate-400 truncate"\cf0 \strokec4 >\{feature.description\}</p>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             );\cb1 \
\cb3           \})\}\cb1 \
\cb3         </motion.div>\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}