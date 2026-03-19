{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red14\green110\blue109;\red19\green118\blue70;\red15\green112\blue1;\red107\green0\blue1;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;\cssrgb\c50196\c0\c0;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \{ useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ useLocation \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 'react-router-dom'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ useAuth \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 './AuthContext'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ pagesConfig \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/pages.config'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf6 \strokec6 NavigationTracker\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \cf2 \strokec2 const\cf0 \strokec4  location = useLocation();\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \{ isAuthenticated \} = useAuth();\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  \{ \cf6 \strokec6 Pages\cf0 \strokec4 , mainPage \} = pagesConfig;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  mainPageKey = mainPage ?? \cf6 \strokec6 Object\cf0 \strokec4 .keys(\cf6 \strokec6 Pages\cf0 \strokec4 )[\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ];\cb1 \
\
\cb3     \cf8 \cb3 \strokec8 // Post navigation changes to parent window\cf0 \cb1 \strokec4 \
\cb3     useEffect(() => \{\cb1 \
\cb3         window.parent?.postMessage(\{\cb1 \
\cb3             type: \cf5 \strokec5 "app_changed_url"\cf0 \strokec4 ,\cb1 \
\cb3             url: window.location.href\cb1 \
\cb3         \}, \cf5 \strokec5 '*'\cf0 \strokec4 );\cb1 \
\cb3     \}, [location]);\cb1 \
\
\cb3     \cf8 \cb3 \strokec8 // Log user activity when navigating to a page\cf0 \cb1 \strokec4 \
\cb3     useEffect(() => \{\cb1 \
\cb3         \cf8 \cb3 \strokec8 // Extract page name from pathname\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  pathname = location.pathname;\cb1 \
\cb3         \cf2 \strokec2 let\cf0 \strokec4  pageName;\cb1 \
\cb3         \cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (pathname === \cf5 \strokec5 '/'\cf0 \strokec4  || pathname === \cf5 \strokec5 ''\cf0 \strokec4 ) \{\cb1 \
\cb3             pageName = mainPageKey;\cb1 \
\cb3         \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3             \cf8 \cb3 \strokec8 // Remove leading slash and get the first segment\cf0 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  pathSegment = pathname.replace(\cf9 \strokec9 /^\\//\cf0 \strokec4 , \cf5 \strokec5 ''\cf0 \strokec4 ).split(\cf5 \strokec5 '/'\cf0 \strokec4 )[\cf7 \cb3 \strokec7 0\cf0 \cb3 \strokec4 ];\cb1 \
\cb3             \cb1 \
\cb3             \cf8 \cb3 \strokec8 // Try case-insensitive lookup in Pages config\cf0 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  pageKeys = \cf6 \strokec6 Object\cf0 \strokec4 .keys(\cf6 \strokec6 Pages\cf0 \strokec4 );\cb1 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  matchedKey = pageKeys.find(\cb1 \
\cb3                 key => key.toLowerCase() === pathSegment.toLowerCase()\cb1 \
\cb3             );\cb1 \
\cb3             \cb1 \
\cb3             pageName = matchedKey || \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3         \}\cb1 \
\
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (isAuthenticated && pageName) \{\cb1 \
\cb3             base44.appLogs.logUserInApp(pageName).\cf2 \strokec2 catch\cf0 \strokec4 (() => \{\cb1 \
\cb3                 \cf8 \cb3 \strokec8 // Silently fail - logging shouldn't break the app\cf0 \cb1 \strokec4 \
\cb3             \});\cb1 \
\cb3         \}\cb1 \
\cb3     \}, [location, isAuthenticated, \cf6 \strokec6 Pages\cf0 \strokec4 , mainPageKey]);\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
}