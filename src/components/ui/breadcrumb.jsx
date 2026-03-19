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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  * as \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "react"\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Slot\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@radix-ui/react-slot"\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ChevronRight\cf0 \strokec4 , \cf5 \strokec5 MoreHorizontal\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Breadcrumb\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef(\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   (\{ ...props \}, ref) => <nav ref=\{ref\} aria-label=\cf6 \strokec6 "breadcrumb"\cf0 \strokec4  \{...props\} />\cb1 \
\cb3 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 Breadcrumb\cf0 \strokec4 .displayName = \cf6 \strokec6 "Breadcrumb"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 BreadcrumbList\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => (\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   <ol\cb1 \
\cb3     ref=\{ref\}\cb1 \
\cb3     className=\{cn(\cb1 \
\cb3       \cf6 \strokec6 "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5"\cf0 \strokec4 ,\cb1 \
\cb3       className\cb1 \
\cb3     )\}\cb1 \
\cb3     \{...props\} />\cb1 \
\cb3 ))\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 BreadcrumbList\cf0 \strokec4 .displayName = \cf6 \strokec6 "BreadcrumbList"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 BreadcrumbItem\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => (\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   <li\cb1 \
\cb3     ref=\{ref\}\cb1 \
\cb3     className=\{cn(\cf6 \strokec6 "inline-flex items-center gap-1.5"\cf0 \strokec4 , className)\}\cb1 \
\cb3     \{...props\} />\cb1 \
\cb3 ))\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 BreadcrumbItem\cf0 \strokec4 .displayName = \cf6 \strokec6 "BreadcrumbItem"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 BreadcrumbLink\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ asChild, className, ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Comp\cf0 \strokec4  = asChild ? \cf5 \strokec5 Slot\cf0 \strokec4  : \cf6 \strokec6 "a"\cf0 \cb1 \strokec4 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf5 \strokec5 Comp\cf0 \cb1 \strokec4 \
\cb3       ref=\{ref\}\cb1 \
\cb3       className=\{cn(\cf6 \strokec6 "transition-colors hover:text-foreground"\cf0 \strokec4 , className)\}\cb1 \
\cb3       \{...props\} />)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 BreadcrumbLink\cf0 \strokec4 .displayName = \cf6 \strokec6 "BreadcrumbLink"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 BreadcrumbPage\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => (\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   <span\cb1 \
\cb3     ref=\{ref\}\cb1 \
\cb3     role=\cf6 \strokec6 "link"\cf0 \cb1 \strokec4 \
\cb3     aria-disabled=\cf6 \strokec6 "true"\cf0 \cb1 \strokec4 \
\cb3     aria-current=\cf6 \strokec6 "page"\cf0 \cb1 \strokec4 \
\cb3     className=\{cn(\cf6 \strokec6 "font-normal text-foreground"\cf0 \strokec4 , className)\}\cb1 \
\cb3     \{...props\} />\cb1 \
\cb3 ))\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 BreadcrumbPage\cf0 \strokec4 .displayName = \cf6 \strokec6 "BreadcrumbPage"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 BreadcrumbSeparator\cf0 \strokec4  = (\{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   children,\cb1 \
\cb3   className,\cb1 \
\cb3   ...props\cb1 \
\cb3 \}) => (\cb1 \
\cb3   <li\cb1 \
\cb3     role=\cf6 \strokec6 "presentation"\cf0 \cb1 \strokec4 \
\cb3     aria-hidden=\cf6 \strokec6 "true"\cf0 \cb1 \strokec4 \
\cb3     className=\{cn(\cf6 \strokec6 "[&>svg]:w-3.5 [&>svg]:h-3.5"\cf0 \strokec4 , className)\}\cb1 \
\cb3     \{...props\}>\cb1 \
\cb3     \{children ?? <\cf5 \strokec5 ChevronRight\cf0 \strokec4  />\}\cb1 \
\cb3   </li>\cb1 \
\cb3 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 BreadcrumbSeparator\cf0 \strokec4 .displayName = \cf6 \strokec6 "BreadcrumbSeparator"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 BreadcrumbEllipsis\cf0 \strokec4  = (\{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   className,\cb1 \
\cb3   ...props\cb1 \
\cb3 \}) => (\cb1 \
\cb3   <span\cb1 \
\cb3     role=\cf6 \strokec6 "presentation"\cf0 \cb1 \strokec4 \
\cb3     aria-hidden=\cf6 \strokec6 "true"\cf0 \cb1 \strokec4 \
\cb3     className=\{cn(\cf6 \strokec6 "flex h-9 w-9 items-center justify-center"\cf0 \strokec4 , className)\}\cb1 \
\cb3     \{...props\}>\cb1 \
\cb3     <\cf5 \strokec5 MoreHorizontal\cf0 \strokec4  className=\cf6 \strokec6 "h-4 w-4"\cf0 \strokec4  />\cb1 \
\cb3     <span className=\cf6 \strokec6 "sr-only"\cf0 \strokec4 >\cf5 \strokec5 More\cf0 \strokec4 </span>\cb1 \
\cb3   </span>\cb1 \
\cb3 )\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 BreadcrumbEllipsis\cf0 \strokec4 .displayName = \cf6 \strokec6 "BreadcrumbElipssis"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Breadcrumb\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 BreadcrumbList\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 BreadcrumbItem\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 BreadcrumbLink\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 BreadcrumbPage\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 BreadcrumbSeparator\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 BreadcrumbEllipsis\cf0 \strokec4 ,\cb1 \
\cb3 \}\cb1 \
\
}