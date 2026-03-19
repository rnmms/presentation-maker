{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red255\green255\blue254;\red0\green0\blue0;\red0\green0\blue255;
\red14\green110\blue109;\red144\green1\blue18;}
{\*\expandedcolortbl;;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;\cssrgb\c0\c0\c100000;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf0 \cb2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec3 "use client"\cb1 \
\
\cb2 import * as React from "react"\cb1 \
\cb2 import * as DialogPrimitive from "@radix-ui/react-dialog"\cb1 \
\cb2 import \{ X \} from "lucide-react"\cb1 \
\
\cb2 import \{ cn \} from "@/lib/utils"\cb1 \
\
\cb2 const Dialog = DialogPrimitive.Root\cb1 \
\
\cb2 const DialogTrigger = DialogPrimitive.Trigger\cb1 \
\
\cb2 const DialogPortal = DialogPrimitive.Portal\cb1 \
\
\cb2 const DialogClose = DialogPrimitive.Close\cb1 \
\
\cb2 const DialogOverlay = React.forwardRef((\{ className, ...props \}, ref) => (\cb1 \
\cb2   <DialogPrimitive.Overlay\cb1 \
\cb2     ref=\{ref\}\cb1 \
\cb2     className=\{cn(\cb1 \
\cb2       "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",\cb1 \
\cb2       className\cb1 \
\cb2     )\}\cb1 \
\cb2     \{...props\} />\cb1 \
\cb2 ))\cb1 \
\cb2 DialogOverlay.displayName = DialogPrimitive.Overlay.displayName\cb1 \
\
\cb2 const DialogContent = React.forwardRef((\{ className, children, ...props \}, ref) => (\cb1 \
\cb2   <DialogPortal>\cb1 \
\cb2     <DialogOverlay />\cb1 \
\cb2     <DialogPrimitive.Content\cb1 \
\cb2       ref=\{ref\}\cb1 \
\cb2       className=\{cn(\cb1 \
\cb2         "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",\cb1 \
\cb2         className\cb1 \
\cb2       )\}\cb1 \
\cb2       \{...props\}>\cb1 \
\cb2       \{children\}\cb1 \
\cb2       <DialogPrimitive.Close\cb1 \
\cb2         className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">\cb1 \
\cb2         <X className="h-4 w-4" />\cb1 \
\cb2         <span className="sr-only">Close</span>\cb1 \
\cb2       </DialogPrimitive.Close>\cb1 \
\cb2     </DialogPrimitive.Content>\cb1 \
\cb2   </DialogPortal>\cb1 \
\cb2 ))\cb1 \
\cb2 DialogContent.displayName = DialogPrimitive.Content.displayName\cb1 \
\
\cb2 const DialogHeader = (\{\cb1 \
\cb2   className,\cb1 \
\cb2   ...props\cb1 \
\cb2 \}) => (\cb1 \
\cb2   <div\cb1 \
\cb2     className=\{cn("flex flex-col space-y-1.5 text-center sm:text-left", className)\}\cb1 \
\cb2     \{...props\} />\cb1 \
\cb2 )\cb1 \
\cb2 DialogHeader.displayName = "DialogHeader"\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb2 \strokec4 const\cf0 \strokec3  \cf5 \strokec5 DialogFooter\cf0 \strokec3  = (\{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb2   className,\cb1 \
\cb2   ...props\cb1 \
\cb2 \}) => (\cb1 \
\cb2   <div\cb1 \
\cb2     className=\{cn(\cf6 \strokec6 "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2"\cf0 \strokec3 , className)\}\cb1 \
\cb2     \{...props\} />\cb1 \
\cb2 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb2 \strokec5 DialogFooter\cf0 \strokec3 .displayName = \cf6 \strokec6 "DialogFooter"\cf0 \cb1 \strokec3 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb2 \strokec4 const\cf0 \strokec3  \cf5 \strokec5 DialogTitle\cf0 \strokec3  = \cf5 \strokec5 React\cf0 \strokec3 .forwardRef((\{ className, ...props \}, ref) => (\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb2   <\cf5 \strokec5 DialogPrimitive\cf0 \strokec3 .\cf5 \strokec5 Title\cf0 \cb1 \strokec3 \
\cb2     ref=\{ref\}\cb1 \
\cb2     className=\{cn(\cf6 \strokec6 "text-lg font-semibold leading-none tracking-tight"\cf0 \strokec3 , className)\}\cb1 \
\cb2     \{...props\} />\cb1 \
\cb2 ))\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb2 \strokec5 DialogTitle\cf0 \strokec3 .displayName = \cf5 \strokec5 DialogPrimitive\cf0 \strokec3 .\cf5 \strokec5 Title\cf0 \strokec3 .displayName\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb2 \strokec4 const\cf0 \strokec3  \cf5 \strokec5 DialogDescription\cf0 \strokec3  = \cf5 \strokec5 React\cf0 \strokec3 .forwardRef((\{ className, ...props \}, ref) => (\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb2   <\cf5 \strokec5 DialogPrimitive\cf0 \strokec3 .\cf5 \strokec5 Description\cf0 \cb1 \strokec3 \
\cb2     ref=\{ref\}\cb1 \
\cb2     className=\{cn(\cf6 \strokec6 "text-sm text-muted-foreground"\cf0 \strokec3 , className)\}\cb1 \
\cb2     \{...props\} />\cb1 \
\cb2 ))\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb2 \strokec5 DialogDescription\cf0 \strokec3 .displayName = \cf5 \strokec5 DialogPrimitive\cf0 \strokec3 .\cf5 \strokec5 Description\cf0 \strokec3 .displayName\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \cb2 \strokec4 export\cf0 \strokec3  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb2   \cf5 \strokec5 Dialog\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogPortal\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogOverlay\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogTrigger\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogClose\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogContent\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogHeader\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogFooter\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogTitle\cf0 \strokec3 ,\cb1 \
\cb2   \cf5 \strokec5 DialogDescription\cf0 \strokec3 ,\cb1 \
\cb2 \}\cb1 \
\
}