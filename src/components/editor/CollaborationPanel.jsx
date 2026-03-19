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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Label\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/label"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Input\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/input"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Badge\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Users\cf0 \strokec4 , \cf5 \strokec5 Mail\cf0 \strokec4 , \cf5 \strokec5 Link\cf0 \strokec4  as \cf5 \strokec5 LinkIcon\cf0 \strokec4 , \cf5 \strokec5 Globe\cf0 \strokec4 , \cf5 \strokec5 Lock\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ toast \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'sonner'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 CollaborationPanel\cf0 \strokec4 (\{ presentationId \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [email, setEmail] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isPublic, setIsPublic] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [collaborators, setCollaborators] = useState([\cb1 \
\cb3     \{ email: \cf6 \strokec6 'john@example.com'\cf0 \strokec4 , role: \cf6 \strokec6 'Editor'\cf0 \strokec4  \},\cb1 \
\cb3     \{ email: \cf6 \strokec6 'maria@example.com'\cf0 \strokec4 , role: \cf6 \strokec6 'Viewer'\cf0 \strokec4  \}\cb1 \
\cb3   ]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleInvite = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!email.trim()) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \cb1 \
\cb3     setCollaborators([...collaborators, \{ email, role: \cf6 \strokec6 'Editor'\cf0 \strokec4  \}]);\cb1 \
\cb3     setEmail(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3     toast.success(\cf6 \strokec6 `Invitation sent to \cf0 \strokec4 $\{email\}\cf6 \strokec6 `\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleCopyLink = () => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  link = \cf6 \strokec6 `\cf0 \strokec4 $\{window.location.origin\}\cf6 \strokec6 /presentation/\cf0 \strokec4 $\{presentationId\}\cf6 \strokec6 `\cf0 \strokec4 ;\cb1 \
\cb3     navigator.clipboard.writeText(link);\cb1 \
\cb3     toast.success(\cf6 \strokec6 'Link copied to clipboard!'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  togglePublic = () => \{\cb1 \
\cb3     setIsPublic(!isPublic);\cb1 \
\cb3     toast.success(isPublic ? \cf6 \strokec6 'Presentation is now private'\cf0 \strokec4  : \cf6 \strokec6 'Presentation is now public'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "p-4 space-y-4"\cf0 \strokec4 >\cb1 \
\cb3       <div>\cb1 \
\cb3         <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-sm font-semibold mb-3 block flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Users\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4"\cf0 \strokec4  />\cb1 \
\cb3           \cf5 \strokec5 Share\cf0 \strokec4  & \cf5 \strokec5 Collaborate\cf0 \cb1 \strokec4 \
\cb3         </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "flex gap-2 mb-3"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Input\cf0 \cb1 \strokec4 \
\cb3             type=\cf6 \strokec6 "email"\cf0 \cb1 \strokec4 \
\cb3             value=\{email\}\cb1 \
\cb3             onChange=\{(e) => setEmail(e.target.value)\}\cb1 \
\cb3             placeholder=\cf6 \strokec6 "Enter email address"\cf0 \cb1 \strokec4 \
\cb3             className=\cf6 \strokec6 "text-sm"\cf0 \cb1 \strokec4 \
\cb3           />\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{handleInvite\} size=\cf6 \strokec6 "sm"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 Mail\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-1"\cf0 \strokec4  />\cb1 \
\cb3             \cf5 \strokec5 Invite\cf0 \cb1 \strokec4 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "space-y-2 mb-3"\cf0 \strokec4 >\cb1 \
\cb3           \{collaborators.map((collab, idx) => (\cb1 \
\cb3             <div key=\{idx\} className=\cf6 \strokec6 "flex items-center justify-between p-2 bg-slate-50 rounded-lg"\cf0 \strokec4 >\cb1 \
\cb3               <span className=\cf6 \strokec6 "text-sm"\cf0 \strokec4 >\{collab.email\}</span>\cb1 \
\cb3               <\cf5 \strokec5 Badge\cf0 \strokec4  variant=\cf6 \strokec6 "outline"\cf0 \strokec4  className=\cf6 \strokec6 "text-xs"\cf0 \strokec4 >\{collab.role\}</\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \
\cb3             </div>\cb1 \
\cb3           ))\}\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "border-t pt-4"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 Label\cf0 \strokec4  className=\cf6 \strokec6 "text-sm font-semibold mb-3 block"\cf0 \strokec4 >\cf5 \strokec5 Access\cf0 \strokec4  \cf5 \strokec5 Settings\cf0 \strokec4 </\cf5 \strokec5 Label\cf0 \strokec4 >\cb1 \
\cb3         \cb1 \
\cb3         <div className=\cf6 \strokec6 "flex items-center justify-between mb-3"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3             \{isPublic ? (\cb1 \
\cb3               <>\cb1 \
\cb3                 <\cf5 \strokec5 Globe\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-green-600"\cf0 \strokec4  />\cb1 \
\cb3                 <span className=\cf6 \strokec6 "text-sm"\cf0 \strokec4 >\cf5 \strokec5 Public\cf0 \strokec4 </span>\cb1 \
\cb3               </>\cb1 \
\cb3             ) : (\cb1 \
\cb3               <>\cb1 \
\cb3                 <\cf5 \strokec5 Lock\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 text-slate-600"\cf0 \strokec4  />\cb1 \
\cb3                 <span className=\cf6 \strokec6 "text-sm"\cf0 \strokec4 >\cf5 \strokec5 Private\cf0 \strokec4 </span>\cb1 \
\cb3               </>\cb1 \
\cb3             )\}\cb1 \
\cb3           </div>\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3             variant=\cf6 \strokec6 "outline"\cf0 \cb1 \strokec4 \
\cb3             size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{togglePublic\}\cb1 \
\cb3           >\cb1 \
\cb3             \{isPublic ? \cf6 \strokec6 'Make Private'\cf0 \strokec4  : \cf6 \strokec6 'Make Public'\cf0 \strokec4 \}\cb1 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3           variant=\cf6 \strokec6 "outline"\cf0 \cb1 \strokec4 \
\cb3           className=\cf6 \strokec6 "w-full"\cf0 \cb1 \strokec4 \
\cb3           onClick=\{handleCopyLink\}\cb1 \
\cb3         >\cb1 \
\cb3           <\cf5 \strokec5 LinkIcon\cf0 \strokec4  className=\cf6 \strokec6 "w-4 h-4 mr-2"\cf0 \strokec4  />\cb1 \
\cb3           \cf5 \strokec5 Copy\cf0 \strokec4  \cf5 \strokec5 Share\cf0 \strokec4  \cf5 \strokec5 Link\cf0 \cb1 \strokec4 \
\cb3         </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3       </div>\cb1 \
\cb3     </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}