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
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ChevronLeft\cf0 \strokec4 , \cf5 \strokec5 ChevronRight\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 DayPicker\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "react-day-picker"\cf0 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ cn \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/lib/utils"\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ buttonVariants \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Calendar\cf0 \strokec4 (\{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   className,\cb1 \
\cb3   classNames,\cb1 \
\cb3   showOutsideDays = \cf2 \strokec2 true\cf0 \strokec4 ,\cb1 \
\cb3   ...props\cb1 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf5 \strokec5 DayPicker\cf0 \cb1 \strokec4 \
\cb3       showOutsideDays=\{showOutsideDays\}\cb1 \
\cb3       className=\{cn(\cf6 \strokec6 "p-3"\cf0 \strokec4 , className)\}\cb1 \
\cb3       classNames=\{\{\cb1 \
\cb3         months: \cf6 \strokec6 "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0"\cf0 \strokec4 ,\cb1 \
\cb3         month: \cf6 \strokec6 "space-y-4"\cf0 \strokec4 ,\cb1 \
\cb3         caption: \cf6 \strokec6 "flex justify-center pt-1 relative items-center"\cf0 \strokec4 ,\cb1 \
\cb3         caption_label: \cf6 \strokec6 "text-sm font-medium"\cf0 \strokec4 ,\cb1 \
\cb3         nav: \cf6 \strokec6 "space-x-1 flex items-center"\cf0 \strokec4 ,\cb1 \
\cb3         nav_button: cn(\cb1 \
\cb3           buttonVariants(\{ variant: \cf6 \strokec6 "outline"\cf0 \strokec4  \}),\cb1 \
\cb3           \cf6 \strokec6 "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"\cf0 \cb1 \strokec4 \
\cb3         ),\cb1 \
\cb3         nav_button_previous: \cf6 \strokec6 "absolute left-1"\cf0 \strokec4 ,\cb1 \
\cb3         nav_button_next: \cf6 \strokec6 "absolute right-1"\cf0 \strokec4 ,\cb1 \
\cb3         table: \cf6 \strokec6 "w-full border-collapse space-y-1"\cf0 \strokec4 ,\cb1 \
\cb3         head_row: \cf6 \strokec6 "flex"\cf0 \strokec4 ,\cb1 \
\cb3         head_cell:\cb1 \
\cb3           \cf6 \strokec6 "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"\cf0 \strokec4 ,\cb1 \
\cb3         row: \cf6 \strokec6 "flex w-full mt-2"\cf0 \strokec4 ,\cb1 \
\cb3         cell: cn(\cb1 \
\cb3           \cf6 \strokec6 "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md"\cf0 \strokec4 ,\cb1 \
\cb3           props.mode === \cf6 \strokec6 "range"\cf0 \cb1 \strokec4 \
\cb3             ? \cf6 \strokec6 "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"\cf0 \cb1 \strokec4 \
\cb3             : \cf6 \strokec6 "[&:has([aria-selected])]:rounded-md"\cf0 \cb1 \strokec4 \
\cb3         ),\cb1 \
\cb3         day: cn(\cb1 \
\cb3           buttonVariants(\{ variant: \cf6 \strokec6 "ghost"\cf0 \strokec4  \}),\cb1 \
\cb3           \cf6 \strokec6 "h-8 w-8 p-0 font-normal aria-selected:opacity-100"\cf0 \cb1 \strokec4 \
\cb3         ),\cb1 \
\cb3         day_range_start: \cf6 \strokec6 "day-range-start"\cf0 \strokec4 ,\cb1 \
\cb3         day_range_end: \cf6 \strokec6 "day-range-end"\cf0 \strokec4 ,\cb1 \
\cb3         day_selected:\cb1 \
\cb3           \cf6 \strokec6 "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"\cf0 \strokec4 ,\cb1 \
\cb3         day_today: \cf6 \strokec6 "bg-accent text-accent-foreground"\cf0 \strokec4 ,\cb1 \
\cb3         day_outside:\cb1 \
\cb3           \cf6 \strokec6 "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground"\cf0 \strokec4 ,\cb1 \
\cb3         day_disabled: \cf6 \strokec6 "text-muted-foreground opacity-50"\cf0 \strokec4 ,\cb1 \
\cb3         day_range_middle:\cb1 \
\cb3           \cf6 \strokec6 "aria-selected:bg-accent aria-selected:text-accent-foreground"\cf0 \strokec4 ,\cb1 \
\cb3         day_hidden: \cf6 \strokec6 "invisible"\cf0 \strokec4 ,\cb1 \
\cb3         ...classNames,\cb1 \
\cb3       \}\}\cb1 \
\cb3       components=\{\{\cb1 \
\cb3         \cf5 \strokec5 IconLeft\cf0 \strokec4 : (\{ className, ...props \}) => (\cb1 \
\cb3           <\cf5 \strokec5 ChevronLeft\cf0 \strokec4  className=\{cn(\cf6 \strokec6 "h-4 w-4"\cf0 \strokec4 , className)\} \{...props\} />\cb1 \
\cb3         ),\cb1 \
\cb3         \cf5 \strokec5 IconRight\cf0 \strokec4 : (\{ className, ...props \}) => (\cb1 \
\cb3           <\cf5 \strokec5 ChevronRight\cf0 \strokec4  className=\{cn(\cf6 \strokec6 "h-4 w-4"\cf0 \strokec4 , className)\} \{...props\} />\cb1 \
\cb3         ),\cb1 \
\cb3       \}\}\cb1 \
\cb3       \{...props\} />)\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 Calendar\cf0 \strokec4 .displayName = \cf6 \strokec6 "Calendar"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \{ \cf5 \strokec5 Calendar\cf0 \strokec4  \}\cb1 \
\
}