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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ createContext, useState, useContext, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ appParams \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/lib/app-params'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createAxiosClient \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@base44/sdk/dist/utils/axios-client'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 AuthContext\cf0 \strokec4  = createContext();\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 AuthProvider\cf0 \strokec4  = (\{ children \}) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [user, setUser] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isAuthenticated, setIsAuthenticated] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isLoadingAuth, setIsLoadingAuth] = useState(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [authError, setAuthError] = useState(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [appPublicSettings, setAppPublicSettings] = useState(\cf2 \strokec2 null\cf0 \strokec4 ); \cf7 \cb3 \strokec7 // Contains only \{ id, public_settings \}\cf0 \cb1 \strokec4 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     checkAppState();\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  checkAppState = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       setIsLoadingPublicSettings(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3       setAuthError(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3       \cb1 \
\cb3       \cf7 \cb3 \strokec7 // First, check app public settings (with token if available)\cf0 \cb1 \strokec4 \
\cb3       \cf7 \cb3 \strokec7 // This will tell us if auth is required, user not registered, etc.\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  appClient = createAxiosClient(\{\cb1 \
\cb3         baseURL: \cf6 \strokec6 `\cf0 \strokec4 $\{appParams.serverUrl\}\cf6 \strokec6 /api/apps/public`\cf0 \strokec4 ,\cb1 \
\cb3         headers: \{\cb1 \
\cb3           \cf6 \strokec6 'X-App-Id'\cf0 \strokec4 : appParams.appId\cb1 \
\cb3         \},\cb1 \
\cb3         token: appParams.token, \cf7 \cb3 \strokec7 // Include token if available\cf0 \cb1 \strokec4 \
\cb3         interceptResponses: \cf2 \strokec2 true\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\cb3       \cb1 \
\cb3       \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  publicSettings = \cf2 \strokec2 await\cf0 \strokec4  appClient.\cf2 \strokec2 get\cf0 \strokec4 (\cf6 \strokec6 `/prod/public-settings/by-id/\cf0 \strokec4 $\{appParams.appId\}\cf6 \strokec6 `\cf0 \strokec4 );\cb1 \
\cb3         setAppPublicSettings(publicSettings);\cb1 \
\cb3         \cb1 \
\cb3         \cf7 \cb3 \strokec7 // If we got the app public settings successfully, check if user is authenticated\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (appParams.token) \{\cb1 \
\cb3           \cf2 \strokec2 await\cf0 \strokec4  checkUserAuth();\cb1 \
\cb3         \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3           setIsLoadingAuth(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3           setIsAuthenticated(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3         \}\cb1 \
\cb3         setIsLoadingPublicSettings(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3       \} \cf2 \strokec2 catch\cf0 \strokec4  (appError) \{\cb1 \
\cb3         console.error(\cf6 \strokec6 'App state check failed:'\cf0 \strokec4 , appError);\cb1 \
\cb3         \cb1 \
\cb3         \cf7 \cb3 \strokec7 // Handle app-level errors\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (appError.status === \cf8 \cb3 \strokec8 403\cf0 \cb3 \strokec4  && appError.data?.extra_data?.reason) \{\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  reason = appError.data.extra_data.reason;\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (reason === \cf6 \strokec6 'auth_required'\cf0 \strokec4 ) \{\cb1 \
\cb3             setAuthError(\{\cb1 \
\cb3               type: \cf6 \strokec6 'auth_required'\cf0 \strokec4 ,\cb1 \
\cb3               message: \cf6 \strokec6 'Authentication required'\cf0 \cb1 \strokec4 \
\cb3             \});\cb1 \
\cb3           \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (reason === \cf6 \strokec6 'user_not_registered'\cf0 \strokec4 ) \{\cb1 \
\cb3             setAuthError(\{\cb1 \
\cb3               type: \cf6 \strokec6 'user_not_registered'\cf0 \strokec4 ,\cb1 \
\cb3               message: \cf6 \strokec6 'User not registered for this app'\cf0 \cb1 \strokec4 \
\cb3             \});\cb1 \
\cb3           \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3             setAuthError(\{\cb1 \
\cb3               type: reason,\cb1 \
\cb3               message: appError.message\cb1 \
\cb3             \});\cb1 \
\cb3           \}\cb1 \
\cb3         \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3           setAuthError(\{\cb1 \
\cb3             type: \cf6 \strokec6 'unknown'\cf0 \strokec4 ,\cb1 \
\cb3             message: appError.message || \cf6 \strokec6 'Failed to load app'\cf0 \cb1 \strokec4 \
\cb3           \});\cb1 \
\cb3         \}\cb1 \
\cb3         setIsLoadingPublicSettings(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3         setIsLoadingAuth(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       console.error(\cf6 \strokec6 'Unexpected error:'\cf0 \strokec4 , error);\cb1 \
\cb3       setAuthError(\{\cb1 \
\cb3         type: \cf6 \strokec6 'unknown'\cf0 \strokec4 ,\cb1 \
\cb3         message: error.message || \cf6 \strokec6 'An unexpected error occurred'\cf0 \cb1 \strokec4 \
\cb3       \});\cb1 \
\cb3       setIsLoadingPublicSettings(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3       setIsLoadingAuth(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  checkUserAuth = \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3     \cf2 \strokec2 try\cf0 \strokec4  \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Now check if the user is authenticated\cf0 \cb1 \strokec4 \
\cb3       setIsLoadingAuth(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  currentUser = \cf2 \strokec2 await\cf0 \strokec4  base44.auth.me();\cb1 \
\cb3       setUser(currentUser);\cb1 \
\cb3       setIsAuthenticated(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3       setIsLoadingAuth(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 catch\cf0 \strokec4  (error) \{\cb1 \
\cb3       console.error(\cf6 \strokec6 'User auth check failed:'\cf0 \strokec4 , error);\cb1 \
\cb3       setIsLoadingAuth(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3       setIsAuthenticated(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3       \cb1 \
\cb3       \cf7 \cb3 \strokec7 // If user auth fails, it might be an expired token\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (error.status === \cf8 \cb3 \strokec8 401\cf0 \cb3 \strokec4  || error.status === \cf8 \cb3 \strokec8 403\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3         setAuthError(\{\cb1 \
\cb3           type: \cf6 \strokec6 'auth_required'\cf0 \strokec4 ,\cb1 \
\cb3           message: \cf6 \strokec6 'Authentication required'\cf0 \cb1 \strokec4 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  logout = (shouldRedirect = \cf2 \strokec2 true\cf0 \strokec4 ) => \{\cb1 \
\cb3     setUser(\cf2 \strokec2 null\cf0 \strokec4 );\cb1 \
\cb3     setIsAuthenticated(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3     \cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (shouldRedirect) \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Use the SDK's logout method which handles token cleanup and redirect\cf0 \cb1 \strokec4 \
\cb3       base44.auth.logout(window.location.href);\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Just remove the token without redirect\cf0 \cb1 \strokec4 \
\cb3       base44.auth.logout();\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  navigateToLogin = () => \{\cb1 \
\cb3     \cf7 \cb3 \strokec7 // Use the SDK's redirectToLogin method\cf0 \cb1 \strokec4 \
\cb3     base44.auth.redirectToLogin(window.location.href);\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 AuthContext\cf0 \strokec4 .\cf5 \strokec5 Provider\cf0 \strokec4  value=\{\{ \cb1 \
\cb3       user, \cb1 \
\cb3       isAuthenticated, \cb1 \
\cb3       isLoadingAuth,\cb1 \
\cb3       isLoadingPublicSettings,\cb1 \
\cb3       authError,\cb1 \
\cb3       appPublicSettings,\cb1 \
\cb3       logout,\cb1 \
\cb3       navigateToLogin,\cb1 \
\cb3       checkAppState\cb1 \
\cb3     \}\}>\cb1 \
\cb3       \{children\}\cb1 \
\cb3     </\cf5 \strokec5 AuthContext\cf0 \strokec4 .\cf5 \strokec5 Provider\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 const\cf0 \strokec4  useAuth = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  context = useContext(\cf5 \strokec5 AuthContext\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!context) \{\cb1 \
\cb3     \cf2 \strokec2 throw\cf0 \strokec4  \cf2 \strokec2 new\cf0 \strokec4  \cf5 \strokec5 Error\cf0 \strokec4 (\cf6 \strokec6 'useAuth must be used within an AuthProvider'\cf0 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  context;\cb1 \
\cb3 \};\cb1 \
\
}