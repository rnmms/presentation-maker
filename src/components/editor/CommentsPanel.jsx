{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Textarea\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/textarea"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Avatar\cf0 \strokec4 , \cf5 \strokec5 AvatarFallback\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/avatar"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Send\cf0 \strokec4 , \cf5 \strokec5 MessageSquare\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ toast \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'sonner'\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 CommentsPanel\cf0 \strokec4 (\{ presentationId \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [comments, setComments] = useState([\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf7 \strokec7 1\cf0 \strokec4 ,\cb1 \
\cb3       author: \cf6 \strokec6 'John Doe'\cf0 \strokec4 ,\cb1 \
\cb3       content: \cf6 \strokec6 'Great slide layout!'\cf0 \strokec4 ,\cb1 \
\cb3       timestamp: \cf6 \strokec6 '2 hours ago'\cf0 \strokec4 ,\cb1 \
\cb3       initials: \cf6 \strokec6 'JD'\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3   ]);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [newComment, setNewComment] = useState(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAddComment = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (newComment.trim()) \{\cb1 \
\cb3       setComments([\cb1 \
\cb3         ...comments,\cb1 \
\cb3         \{\cb1 \
\cb3           id: \cf5 \strokec5 Date\cf0 \strokec4 .now(),\cb1 \
\cb3           author: \cf6 \strokec6 'You'\cf0 \strokec4 ,\cb1 \
\cb3           content: newComment,\cb1 \
\cb3           timestamp: \cf6 \strokec6 'Just now'\cf0 \strokec4 ,\cb1 \
\cb3           initials: \cf6 \strokec6 'YO'\cf0 \cb1 \strokec4 \
\cb3         \}\cb1 \
\cb3       ]);\cb1 \
\cb3       setNewComment(\cf6 \strokec6 ''\cf0 \strokec4 );\cb1 \
\cb3       toast.success(\cf6 \strokec6 'Comment added'\cf0 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <Card className="p-4">\cb1 \
\cb3       <div className="flex items-center gap-2 mb-4">\cb1 \
\cb3         <MessageSquare className="w-5 h-5 text-slate-600" />\cb1 \
\cb3         <h3 className="font-semibold text-slate-800">Comments</h3>\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">\cb1 \
\cb3         \{comments.map((comment) => (\cb1 \
\cb3           <div key=\{comment.id\} className="flex gap-2">\cb1 \
\cb3             <Avatar className="w-8 h-8">\cb1 \
\cb3               <AvatarFallback className="text-xs bg-indigo-100 text-indigo-700">\cb1 \
\cb3                 \{comment.initials\}\cb1 \
\cb3               </AvatarFallback>\cb1 \
\cb3             </Avatar>\cb1 \
\cb3             <div className="flex-1">\cb1 \
\cb3               <div className="flex items-center gap-2 mb-1">\cb1 \
\cb3                 <span className="text-sm font-medium text-slate-800">\{comment.author\}</span>\cb1 \
\cb3                 <span className="text-xs text-slate-500">\{comment.timestamp\}</span>\cb1 \
\cb3               </div>\cb1 \
\cb3               <p className="text-sm text-slate-600 bg-slate-50 rounded-lg p-2">\cb1 \
\cb3                 \{comment.content\}\cb1 \
\cb3               </p>\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\cb3         ))\}\cb1 \
\cb3       </div>\cb1 \
\
\cb3       <div className="space-y-2">\cb1 \
\cb3         <Textarea\cb1 \
\cb3           placeholder="Add a comment..."\cb1 \
\cb3           value=\{newComment\}\cb1 \
\cb3           onChange=\{(e) => setNewComment(e.target.value)\}\cb1 \
\cb3           className="resize-none text-sm"\cb1 \
\cb3           rows=\{3\}\cb1 \
\cb3         />\cb1 \
\cb3         <Button\cb1 \
\cb3           size="sm"\cb1 \
\cb3           className="w-full bg-indigo-600 hover:bg-indigo-700"\cb1 \
\cb3           onClick=\{handleAddComment\}\cb1 \
\cb3           disabled=\{!newComment.trim()\}\cb1 \
\cb3         >\cb1 \
\cb3           <Send className="w-4 h-4 mr-2" />\cb1 \
\cb3           Post Comment\cb1 \
\cb3         </Button>\cb1 \
\cb3       </div>\cb1 \
\cb3     </Card>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}