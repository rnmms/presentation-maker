{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red14\green110\blue109;\red19\green118\blue70;\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 './App.css'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf6 \strokec6 Toaster\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 "@/components/ui/toaster"\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf6 \strokec6 QueryClientProvider\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@tanstack/react-query'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ queryClientInstance \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/lib/query-client'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf6 \strokec6 VisualEditAgent\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/lib/VisualEditAgent'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf6 \strokec6 NavigationTracker\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/lib/NavigationTracker'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ pagesConfig \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 './pages.config'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf6 \strokec6 BrowserRouter\cf0 \strokec4  as \cf6 \strokec6 Router\cf0 \strokec4 , \cf6 \strokec6 Route\cf0 \strokec4 , \cf6 \strokec6 Routes\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf6 \strokec6 PageNotFound\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 './lib/PageNotFound'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf6 \strokec6 AuthProvider\cf0 \strokec4 , useAuth \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/lib/AuthContext'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf6 \strokec6 UserNotRegisteredError\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/components/UserNotRegisteredError'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \{ \cf6 \strokec6 Pages\cf0 \strokec4 , \cf6 \strokec6 Layout\cf0 \strokec4 , mainPage \} = pagesConfig;\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  mainPageKey = mainPage ?? \cf6 \strokec6 Object\cf0 \strokec4 .keys(\cf6 \strokec6 Pages\cf0 \strokec4 )[\cf7 \strokec7 0\cf0 \strokec4 ];\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf6 \strokec6 MainPage\cf0 \strokec4  = mainPageKey ? \cf6 \strokec6 Pages\cf0 \strokec4 [mainPageKey] : <></>;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf6 \strokec6 LayoutWrapper\cf0 \strokec4  = (\{ children, currentPageName \}) => \cf6 \strokec6 Layout\cf0 \strokec4  ?\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   <\cf6 \strokec6 Layout\cf0 \strokec4  currentPageName=\{currentPageName\}>\{children\}</\cf6 \strokec6 Layout\cf0 \strokec4 >\cb1 \
\cb3   : <>\{children\}</>;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf6 \strokec6 AuthenticatedApp\cf0 \strokec4  = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ isLoadingAuth, isLoadingPublicSettings, authError, isAuthenticated, navigateToLogin \} = useAuth();\cb1 \
\
\cb3   \cf8 \strokec8 // Show loading spinner while checking app public settings or auth\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isLoadingPublicSettings || isLoadingAuth) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf5 \strokec5 "fixed inset-0 flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf5 \strokec5 "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"\cf0 \strokec4 ></div>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf8 \strokec8 // Handle authentication errors\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (authError) \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (authError.type === \cf5 \strokec5 'user_not_registered'\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  <\cf6 \strokec6 UserNotRegisteredError\cf0 \strokec4  />;\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (authError.type === \cf5 \strokec5 'auth_required'\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf8 \strokec8 // Redirect to login automatically\cf0 \cb1 \strokec4 \
\cb3       navigateToLogin();\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf8 \strokec8 // Render the main app\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf6 \strokec6 Routes\cf0 \strokec4 >\cb1 \
\cb3       <\cf6 \strokec6 Route\cf0 \strokec4  path=\cf5 \strokec5 "/"\cf0 \strokec4  element=\{\cb1 \
\cb3         <\cf6 \strokec6 LayoutWrapper\cf0 \strokec4  currentPageName=\{mainPageKey\}>\cb1 \
\cb3           <\cf6 \strokec6 MainPage\cf0 \strokec4  />\cb1 \
\cb3         </\cf6 \strokec6 LayoutWrapper\cf0 \strokec4 >\cb1 \
\cb3       \} />\cb1 \
\cb3       \{\cf6 \strokec6 Object\cf0 \strokec4 .entries(\cf6 \strokec6 Pages\cf0 \strokec4 ).map(([path, \cf6 \strokec6 Page\cf0 \strokec4 ]) => (\cb1 \
\cb3         <\cf6 \strokec6 Route\cf0 \cb1 \strokec4 \
\cb3           key=\{path\}\cb1 \
\cb3           path=\{\cf5 \strokec5 `/\cf0 \strokec4 $\{path\}\cf5 \strokec5 `\cf0 \strokec4 \}\cb1 \
\cb3           element=\{\cb1 \
\cb3             <\cf6 \strokec6 LayoutWrapper\cf0 \strokec4  currentPageName=\{path\}>\cb1 \
\cb3               <\cf6 \strokec6 Page\cf0 \strokec4  />\cb1 \
\cb3             </\cf6 \strokec6 LayoutWrapper\cf0 \strokec4 >\cb1 \
\cb3           \}\cb1 \
\cb3         />\cb1 \
\cb3       ))\}\cb1 \
\cb3       <\cf6 \strokec6 Route\cf0 \strokec4  path=\cf5 \strokec5 "*"\cf0 \strokec4  element=\{<\cf6 \strokec6 PageNotFound\cf0 \strokec4  />\} />\cb1 \
\cb3     </\cf6 \strokec6 Routes\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \};\cb1 \
\
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf6 \strokec6 App\cf0 \strokec4 () \{\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf6 \strokec6 AuthProvider\cf0 \strokec4 >\cb1 \
\cb3       <\cf6 \strokec6 QueryClientProvider\cf0 \strokec4  client=\{queryClientInstance\}>\cb1 \
\cb3         <\cf6 \strokec6 Router\cf0 \strokec4 >\cb1 \
\cb3           <\cf6 \strokec6 NavigationTracker\cf0 \strokec4  />\cb1 \
\cb3           <\cf6 \strokec6 AuthenticatedApp\cf0 \strokec4  />\cb1 \
\cb3         </\cf6 \strokec6 Router\cf0 \strokec4 >\cb1 \
\cb3         <\cf6 \strokec6 Toaster\cf0 \strokec4  />\cb1 \
\cb3         <\cf6 \strokec6 VisualEditAgent\cf0 \strokec4  />\cb1 \
\cb3       </\cf6 \strokec6 QueryClientProvider\cf0 \strokec4 >\cb1 \
\cb3     </\cf6 \strokec6 AuthProvider\cf0 \strokec4 >\cb1 \
\cb3   )\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf6 \strokec6 App\cf0 \cb1 \strokec4 \
\
}