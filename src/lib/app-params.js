{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red14\green110\blue109;\red107\green0\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c50196;\cssrgb\c50196\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 const\cf0 \strokec4  isNode = \cf2 \strokec2 typeof\cf0 \strokec4  window === \cf5 \strokec5 'undefined'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  windowObj = isNode ? \{ localStorage: \cf2 \strokec2 new\cf0 \strokec4  \cf6 \strokec6 Map\cf0 \strokec4 () \} : window;\cb1 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  storage = windowObj.localStorage;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  toSnakeCase = (str) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  str.replace(\cf7 \strokec7 /([A-Z])/\cf2 \strokec2 g\cf0 \strokec4 , \cf5 \strokec5 '_$1'\cf0 \strokec4 ).toLowerCase();\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  getAppParamValue = (paramName, \{ defaultValue = \cf2 \strokec2 undefined\cf0 \strokec4 , removeFromUrl = \cf2 \strokec2 false\cf0 \strokec4  \} = \{\}) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 if\cf0 \strokec4  (isNode) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  defaultValue;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  storageKey = \cf5 \strokec5 `base44_\cf0 \strokec4 $\{toSnakeCase(paramName)\}\cf5 \strokec5 `\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  urlParams = \cf2 \strokec2 new\cf0 \strokec4  \cf6 \strokec6 URLSearchParams\cf0 \strokec4 (window.location.search);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  searchParam = urlParams.\cf2 \strokec2 get\cf0 \strokec4 (paramName);\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (removeFromUrl) \{\cb1 \
\cb3     urlParams.\cf2 \strokec2 delete\cf0 \strokec4 (paramName);\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newUrl = \cf5 \strokec5 `\cf0 \strokec4 $\{window.location.pathname\}$\{urlParams.toString() ? \cf5 \strokec5 `?\cf0 \strokec4 $\{urlParams.toString()\}\cf5 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ""\cf0 \cb1 \strokec4 \
\cb3       \}$\{window.location.hash\}\cf5 \strokec5 `\cf0 \strokec4 ;\cb1 \
\cb3     window.history.replaceState(\{\}, document.title, newUrl);\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (searchParam) \{\cb1 \
\cb3     storage.setItem(storageKey, searchParam);\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  searchParam;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (defaultValue) \{\cb1 \
\cb3     storage.setItem(storageKey, defaultValue);\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  defaultValue;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  storedValue = storage.getItem(storageKey);\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (storedValue) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  storedValue;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  getAppParams = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  \{\cb1 \
\cb3     appId: getAppParamValue(\cf5 \strokec5 "app_id"\cf0 \strokec4 , \{ defaultValue: \cf2 \strokec2 import\cf0 \strokec4 .meta.env.\cf6 \strokec6 VITE_BASE44_APP_ID\cf0 \strokec4  \}),\cb1 \
\cb3     serverUrl: getAppParamValue(\cf5 \strokec5 "server_url"\cf0 \strokec4 , \{ defaultValue: \cf2 \strokec2 import\cf0 \strokec4 .meta.env.\cf6 \strokec6 VITE_BASE44_BACKEND_URL\cf0 \strokec4  \}),\cb1 \
\cb3     token: getAppParamValue(\cf5 \strokec5 "access_token"\cf0 \strokec4 , \{ removeFromUrl: \cf2 \strokec2 true\cf0 \strokec4  \}),\cb1 \
\cb3     fromUrl: getAppParamValue(\cf5 \strokec5 "from_url"\cf0 \strokec4 , \{ defaultValue: window.location.href \}),\cb1 \
\cb3     functionsVersion: getAppParamValue(\cf5 \strokec5 "functions_version"\cf0 \strokec4 ),\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 const\cf0 \strokec4  appParams = \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   ...getAppParams()\cb1 \
\cb3 \}\cb1 \
\
}