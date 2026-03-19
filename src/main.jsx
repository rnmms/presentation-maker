{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red15\green112\blue1;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 ReactDOM\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react-dom/client'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 App\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/App.jsx'\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf6 \strokec6 '@/index.css'\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 ReactDOM\cf0 \strokec4 .createRoot(document.getElementById(\cf6 \strokec6 'root'\cf0 \strokec4 )).render(\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf7 \strokec7 // <React.StrictMode>\cf0 \cb1 \strokec4 \
\cb3   <\cf5 \strokec5 App\cf0 \strokec4  />\cb1 \
\cb3   \cf7 \strokec7 // </React.StrictMode>,\cf0 \cb1 \strokec4 \
\cb3 )\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 if\cf0 \strokec4  (\cf2 \strokec2 import\cf0 \strokec4 .meta.hot) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 import\cf0 \strokec4 .meta.hot.on(\cf6 \strokec6 'vite:beforeUpdate'\cf0 \strokec4 , () => \{\cb1 \
\cb3     window.parent?.postMessage(\{ type: \cf6 \strokec6 'sandbox:beforeUpdate'\cf0 \strokec4  \}, \cf6 \strokec6 '*'\cf0 \strokec4 );\cb1 \
\cb3   \});\cb1 \
\cb3   \cf2 \strokec2 import\cf0 \strokec4 .meta.hot.on(\cf6 \strokec6 'vite:afterUpdate'\cf0 \strokec4 , () => \{\cb1 \
\cb3     window.parent?.postMessage(\{ type: \cf6 \strokec6 'sandbox:afterUpdate'\cf0 \strokec4  \}, \cf6 \strokec6 '*'\cf0 \strokec4 );\cb1 \
\cb3   \});\cb1 \
\cb3 \}\cb1 \
\
\
\
\
}