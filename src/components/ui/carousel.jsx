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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  useEmblaCarousel \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "embla-carousel-react"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 CarouselContext\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .createContext(\cf2 \strokec2 null\cf0 \strokec4 )\cb1 \
\
\cf2 \cb3 \strokec2 function\cf0 \strokec4  useCarousel() \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  context = \cf5 \strokec5 React\cf0 \strokec4 .useContext(\cf5 \strokec5 CarouselContext\cf0 \strokec4 )\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!context) \{\cb1 \
\cb3     \cf2 \strokec2 throw\cf0 \strokec4  \cf2 \strokec2 new\cf0 \strokec4  \cf5 \strokec5 Error\cf0 \strokec4 (\cf6 \strokec6 "useCarousel must be used within a <Carousel />"\cf0 \strokec4 )\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  context\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 Carousel\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{\cb1 \
\cb3     orientation = \cf6 \strokec6 "horizontal"\cf0 \strokec4 ,\cb1 \
\cb3     opts,\cb1 \
\cb3     setApi,\cb1 \
\cb3     plugins,\cb1 \
\cb3     className,\cb1 \
\cb3     children,\cb1 \
\cb3     ...props\cb1 \
\cb3   \},\cb1 \
\cb3   ref\cb1 \
\cb3 ) => \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [carouselRef, api] = useEmblaCarousel(\{\cb1 \
\cb3     ...opts,\cb1 \
\cb3     axis: orientation === \cf6 \strokec6 "horizontal"\cf0 \strokec4  ? \cf6 \strokec6 "x"\cf0 \strokec4  : \cf6 \strokec6 "y"\cf0 \strokec4 ,\cb1 \
\cb3   \}, plugins)\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [canScrollPrev, setCanScrollPrev] = \cf5 \strokec5 React\cf0 \strokec4 .useState(\cf2 \strokec2 false\cf0 \strokec4 )\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [canScrollNext, setCanScrollNext] = \cf5 \strokec5 React\cf0 \strokec4 .useState(\cf2 \strokec2 false\cf0 \strokec4 )\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  onSelect = \cf5 \strokec5 React\cf0 \strokec4 .useCallback((api) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!api) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\
\cb3     setCanScrollPrev(api.canScrollPrev())\cb1 \
\cb3     setCanScrollNext(api.canScrollNext())\cb1 \
\cb3   \}, [])\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  scrollPrev = \cf5 \strokec5 React\cf0 \strokec4 .useCallback(() => \{\cb1 \
\cb3     api?.scrollPrev()\cb1 \
\cb3   \}, [api])\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  scrollNext = \cf5 \strokec5 React\cf0 \strokec4 .useCallback(() => \{\cb1 \
\cb3     api?.scrollNext()\cb1 \
\cb3   \}, [api])\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleKeyDown = \cf5 \strokec5 React\cf0 \strokec4 .useCallback((event) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (event.key === \cf6 \strokec6 "ArrowLeft"\cf0 \strokec4 ) \{\cb1 \
\cb3       event.preventDefault()\cb1 \
\cb3       scrollPrev()\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (event.key === \cf6 \strokec6 "ArrowRight"\cf0 \strokec4 ) \{\cb1 \
\cb3       event.preventDefault()\cb1 \
\cb3       scrollNext()\cb1 \
\cb3     \}\cb1 \
\cb3   \}, [scrollPrev, scrollNext])\cb1 \
\
\cb3   \cf5 \strokec5 React\cf0 \strokec4 .useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!api || !setApi) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\
\cb3     setApi(api)\cb1 \
\cb3   \}, [api, setApi])\cb1 \
\
\cb3   \cf5 \strokec5 React\cf0 \strokec4 .useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!api) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\
\cb3     onSelect(api)\cb1 \
\cb3     api.on(\cf6 \strokec6 "reInit"\cf0 \strokec4 , onSelect)\cb1 \
\cb3     api.on(\cf6 \strokec6 "select"\cf0 \strokec4 , onSelect)\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => \{\cb1 \
\cb3       api?.off(\cf6 \strokec6 "select"\cf0 \strokec4 , onSelect)\cb1 \
\cb3     \};\cb1 \
\cb3   \}, [api, onSelect])\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf5 \strokec5 CarouselContext\cf0 \strokec4 .\cf5 \strokec5 Provider\cf0 \cb1 \strokec4 \
\cb3       value=\{\{\cb1 \
\cb3         carouselRef,\cb1 \
\cb3         api: api,\cb1 \
\cb3         opts,\cb1 \
\cb3         orientation:\cb1 \
\cb3           orientation || (opts?.axis === \cf6 \strokec6 "y"\cf0 \strokec4  ? \cf6 \strokec6 "vertical"\cf0 \strokec4  : \cf6 \strokec6 "horizontal"\cf0 \strokec4 ),\cb1 \
\cb3         scrollPrev,\cb1 \
\cb3         scrollNext,\cb1 \
\cb3         canScrollPrev,\cb1 \
\cb3         canScrollNext,\cb1 \
\cb3       \}\}>\cb1 \
\cb3       <div\cb1 \
\cb3         ref=\{ref\}\cb1 \
\cb3         onKeyDownCapture=\{handleKeyDown\}\cb1 \
\cb3         className=\{cn(\cf6 \strokec6 "relative"\cf0 \strokec4 , className)\}\cb1 \
\cb3         role=\cf6 \strokec6 "region"\cf0 \cb1 \strokec4 \
\cb3         aria-roledescription=\cf6 \strokec6 "carousel"\cf0 \cb1 \strokec4 \
\cb3         \{...props\}>\cb1 \
\cb3         \{children\}\cb1 \
\cb3       </div>\cb1 \
\cb3     </\cf5 \strokec5 CarouselContext\cf0 \strokec4 .\cf5 \strokec5 Provider\cf0 \strokec4 >)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 Carousel\cf0 \strokec4 .displayName = \cf6 \strokec6 "Carousel"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 CarouselContent\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ carouselRef, orientation \} = useCarousel()\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     (<div ref=\{carouselRef\} className=\cf6 \strokec6 "overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3       <div\cb1 \
\cb3         ref=\{ref\}\cb1 \
\cb3         className=\{cn(\cb1 \
\cb3           \cf6 \strokec6 "flex"\cf0 \strokec4 ,\cb1 \
\cb3           orientation === \cf6 \strokec6 "horizontal"\cf0 \strokec4  ? \cf6 \strokec6 "-ml-4"\cf0 \strokec4  : \cf6 \strokec6 "-mt-4 flex-col"\cf0 \strokec4 ,\cb1 \
\cb3           className\cb1 \
\cb3         )\}\cb1 \
\cb3         \{...props\} />\cb1 \
\cb3     </div>)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 CarouselContent\cf0 \strokec4 .displayName = \cf6 \strokec6 "CarouselContent"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 CarouselItem\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ orientation \} = useCarousel()\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     (<div\cb1 \
\cb3       ref=\{ref\}\cb1 \
\cb3       role=\cf6 \strokec6 "group"\cf0 \cb1 \strokec4 \
\cb3       aria-roledescription=\cf6 \strokec6 "slide"\cf0 \cb1 \strokec4 \
\cb3       className=\{cn(\cb1 \
\cb3         \cf6 \strokec6 "min-w-0 shrink-0 grow-0 basis-full"\cf0 \strokec4 ,\cb1 \
\cb3         orientation === \cf6 \strokec6 "horizontal"\cf0 \strokec4  ? \cf6 \strokec6 "pl-4"\cf0 \strokec4  : \cf6 \strokec6 "pt-4"\cf0 \strokec4 ,\cb1 \
\cb3         className\cb1 \
\cb3       )\}\cb1 \
\cb3       \{...props\} />)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 CarouselItem\cf0 \strokec4 .displayName = \cf6 \strokec6 "CarouselItem"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 CarouselPrevious\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ className, variant = \cf6 \strokec6 "outline"\cf0 \strokec4 , size = \cf6 \strokec6 "icon"\cf0 \strokec4 , ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ orientation, scrollPrev, canScrollPrev \} = useCarousel()\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3       ref=\{ref\}\cb1 \
\cb3       variant=\{variant\}\cb1 \
\cb3       size=\{size\}\cb1 \
\cb3       className=\{cn(\cf6 \strokec6 "absolute  h-8 w-8 rounded-full"\cf0 \strokec4 , orientation === \cf6 \strokec6 "horizontal"\cf0 \cb1 \strokec4 \
\cb3         ? \cf6 \strokec6 "-left-12 top-1/2 -translate-y-1/2"\cf0 \cb1 \strokec4 \
\cb3         : \cf6 \strokec6 "-top-12 left-1/2 -translate-x-1/2 rotate-90"\cf0 \strokec4 , className)\}\cb1 \
\cb3       disabled=\{!canScrollPrev\}\cb1 \
\cb3       onClick=\{scrollPrev\}\cb1 \
\cb3       \{...props\}>\cb1 \
\cb3       <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "h-4 w-4"\cf0 \strokec4  />\cb1 \
\cb3       <span className=\cf6 \strokec6 "sr-only"\cf0 \strokec4 >\cf5 \strokec5 Previous\cf0 \strokec4  slide</span>\cb1 \
\cb3     </\cf5 \strokec5 Button\cf0 \strokec4 >)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 CarouselPrevious\cf0 \strokec4 .displayName = \cf6 \strokec6 "CarouselPrevious"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf5 \strokec5 CarouselNext\cf0 \strokec4  = \cf5 \strokec5 React\cf0 \strokec4 .forwardRef((\{ className, variant = \cf6 \strokec6 "outline"\cf0 \strokec4 , size = \cf6 \strokec6 "icon"\cf0 \strokec4 , ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ orientation, scrollNext, canScrollNext \} = useCarousel()\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3       ref=\{ref\}\cb1 \
\cb3       variant=\{variant\}\cb1 \
\cb3       size=\{size\}\cb1 \
\cb3       className=\{cn(\cf6 \strokec6 "absolute h-8 w-8 rounded-full"\cf0 \strokec4 , orientation === \cf6 \strokec6 "horizontal"\cf0 \cb1 \strokec4 \
\cb3         ? \cf6 \strokec6 "-right-12 top-1/2 -translate-y-1/2"\cf0 \cb1 \strokec4 \
\cb3         : \cf6 \strokec6 "-bottom-12 left-1/2 -translate-x-1/2 rotate-90"\cf0 \strokec4 , className)\}\cb1 \
\cb3       disabled=\{!canScrollNext\}\cb1 \
\cb3       onClick=\{scrollNext\}\cb1 \
\cb3       \{...props\}>\cb1 \
\cb3       <\cf5 \strokec5 ArrowRight\cf0 \strokec4  className=\cf6 \strokec6 "h-4 w-4"\cf0 \strokec4  />\cb1 \
\cb3       <span className=\cf6 \strokec6 "sr-only"\cf0 \strokec4 >\cf5 \strokec5 Next\cf0 \strokec4  slide</span>\cb1 \
\cb3     </\cf5 \strokec5 Button\cf0 \strokec4 >)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 CarouselNext\cf0 \strokec4 .displayName = \cf6 \strokec6 "CarouselNext"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \{ \cf5 \strokec5 Carousel\cf0 \strokec4 , \cf5 \strokec5 CarouselContent\cf0 \strokec4 , \cf5 \strokec5 CarouselItem\cf0 \strokec4 , \cf5 \strokec5 CarouselPrevious\cf0 \strokec4 , \cf5 \strokec5 CarouselNext\cf0 \strokec4  \};\cb1 \
\
}