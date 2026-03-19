{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red144\green1\blue18;\red255\green255\blue254;\red0\green0\blue0;
\red0\green0\blue255;\red14\green110\blue109;}
{\*\expandedcolortbl;;\cssrgb\c63922\c8235\c8235;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c0\c100000;\cssrgb\c0\c50196\c50196;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 "use client"\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 import\cf0 \strokec4  * as \cf6 \strokec6 React\cf0 \strokec4  \cf5 \strokec5 from\cf0 \strokec4  \cf2 \strokec2 "react"\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \{ \cf6 \strokec6 Slot\cf0 \strokec4  \} \cf5 \strokec5 from\cf0 \strokec4  \cf2 \strokec2 "@radix-ui/react-slot"\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \{ \cf6 \strokec6 Controller\cf0 \strokec4 , \cf6 \strokec6 FormProvider\cf0 \strokec4 , useFormContext \} \cf5 \strokec5 from\cf0 \strokec4  \cf2 \strokec2 "react-hook-form"\cf0 \strokec4 ;\cb1 \
\
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \{ cn \} \cf5 \strokec5 from\cf0 \strokec4  \cf2 \strokec2 "@/lib/utils"\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 import\cf0 \strokec4  \{ \cf6 \strokec6 Label\cf0 \strokec4  \} \cf5 \strokec5 from\cf0 \strokec4  \cf2 \strokec2 "@/components/ui/label"\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 Form\cf0 \strokec4  = \cf6 \strokec6 FormProvider\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormFieldContext\cf0 \strokec4  = \cf6 \strokec6 React\cf0 \strokec4 .createContext(\{\})\cb1 \
\
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormField\cf0 \strokec4  = (\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{\cb1 \
\cb3     ...props\cb1 \
\cb3   \}\cb1 \
\cb3 ) => \{\cb1 \
\cb3   \cf5 \strokec5 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf6 \strokec6 FormFieldContext\cf0 \strokec4 .\cf6 \strokec6 Provider\cf0 \strokec4  value=\{\{ name: props.name \}\}>\cb1 \
\cb3       <\cf6 \strokec6 Controller\cf0 \strokec4  \{...props\} />\cb1 \
\cb3     </\cf6 \strokec6 FormFieldContext\cf0 \strokec4 .\cf6 \strokec6 Provider\cf0 \strokec4 >)\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const\cf0 \strokec4  useFormField = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 const\cf0 \strokec4  fieldContext = \cf6 \strokec6 React\cf0 \strokec4 .useContext(\cf6 \strokec6 FormFieldContext\cf0 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 const\cf0 \strokec4  itemContext = \cf6 \strokec6 React\cf0 \strokec4 .useContext(\cf6 \strokec6 FormItemContext\cf0 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 const\cf0 \strokec4  \{ getFieldState, formState \} = useFormContext()\cb1 \
\
\cb3   \cf5 \strokec5 const\cf0 \strokec4  fieldState = getFieldState(fieldContext.name, formState)\cb1 \
\
\cb3   \cf5 \strokec5 if\cf0 \strokec4  (!fieldContext) \{\cb1 \
\cb3     \cf5 \strokec5 throw\cf0 \strokec4  \cf5 \strokec5 new\cf0 \strokec4  \cf6 \strokec6 Error\cf0 \strokec4 (\cf2 \strokec2 "useFormField should be used within <FormField>"\cf0 \strokec4 )\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 const\cf0 \strokec4  \{ id \} = itemContext\cb1 \
\
\cb3   \cf5 \strokec5 return\cf0 \strokec4  \{\cb1 \
\cb3     id,\cb1 \
\cb3     name: fieldContext.name,\cb1 \
\cb3     formItemId: \cf2 \strokec2 `\cf0 \strokec4 $\{id\}\cf2 \strokec2 -form-item`\cf0 \strokec4 ,\cb1 \
\cb3     formDescriptionId: \cf2 \strokec2 `\cf0 \strokec4 $\{id\}\cf2 \strokec2 -form-item-description`\cf0 \strokec4 ,\cb1 \
\cb3     formMessageId: \cf2 \strokec2 `\cf0 \strokec4 $\{id\}\cf2 \strokec2 -form-item-message`\cf0 \strokec4 ,\cb1 \
\cb3     ...fieldState,\cb1 \
\cb3   \}\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormItemContext\cf0 \strokec4  = \cf6 \strokec6 React\cf0 \strokec4 .createContext(\{\})\cb1 \
\
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormItem\cf0 \strokec4  = \cf6 \strokec6 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 const\cf0 \strokec4  id = \cf6 \strokec6 React\cf0 \strokec4 .useId()\cb1 \
\
\cb3   \cf5 \strokec5 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf6 \strokec6 FormItemContext\cf0 \strokec4 .\cf6 \strokec6 Provider\cf0 \strokec4  value=\{\{ id \}\}>\cb1 \
\cb3       <div ref=\{ref\} className=\{cn(\cf2 \strokec2 "space-y-2"\cf0 \strokec4 , className)\} \{...props\} />\cb1 \
\cb3     </\cf6 \strokec6 FormItemContext\cf0 \strokec4 .\cf6 \strokec6 Provider\cf0 \strokec4 >)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 FormItem\cf0 \strokec4 .displayName = \cf2 \strokec2 "FormItem"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormLabel\cf0 \strokec4  = \cf6 \strokec6 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 const\cf0 \strokec4  \{ error, formItemId \} = useFormField()\cb1 \
\
\cb3   \cf5 \strokec5 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf6 \strokec6 Label\cf0 \cb1 \strokec4 \
\cb3       ref=\{ref\}\cb1 \
\cb3       className=\{cn(error && \cf2 \strokec2 "text-destructive"\cf0 \strokec4 , className)\}\cb1 \
\cb3       htmlFor=\{formItemId\}\cb1 \
\cb3       \{...props\} />)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 FormLabel\cf0 \strokec4 .displayName = \cf2 \strokec2 "FormLabel"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormControl\cf0 \strokec4  = \cf6 \strokec6 React\cf0 \strokec4 .forwardRef((\{ ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 const\cf0 \strokec4  \{ error, formItemId, formDescriptionId, formMessageId \} = useFormField()\cb1 \
\
\cb3   \cf5 \strokec5 return\cf0 \strokec4  (\cb1 \
\cb3     (<\cf6 \strokec6 Slot\cf0 \cb1 \strokec4 \
\cb3       ref=\{ref\}\cb1 \
\cb3       id=\{formItemId\}\cb1 \
\cb3       aria-describedby=\{\cb1 \
\cb3         !error\cb1 \
\cb3           ? \cf2 \strokec2 `\cf0 \strokec4 $\{formDescriptionId\}\cf2 \strokec2 `\cf0 \cb1 \strokec4 \
\cb3           : \cf2 \strokec2 `\cf0 \strokec4 $\{formDescriptionId\}\cf2 \strokec2  \cf0 \strokec4 $\{formMessageId\}\cf2 \strokec2 `\cf0 \cb1 \strokec4 \
\cb3       \}\cb1 \
\cb3       aria-invalid=\{!!error\}\cb1 \
\cb3       \{...props\} />)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 FormControl\cf0 \strokec4 .displayName = \cf2 \strokec2 "FormControl"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormDescription\cf0 \strokec4  = \cf6 \strokec6 React\cf0 \strokec4 .forwardRef((\{ className, ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 const\cf0 \strokec4  \{ formDescriptionId \} = useFormField()\cb1 \
\
\cb3   \cf5 \strokec5 return\cf0 \strokec4  (\cb1 \
\cb3     (<p\cb1 \
\cb3       ref=\{ref\}\cb1 \
\cb3       id=\{formDescriptionId\}\cb1 \
\cb3       className=\{cn(\cf2 \strokec2 "text-[0.8rem] text-muted-foreground"\cf0 \strokec4 , className)\}\cb1 \
\cb3       \{...props\} />)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 FormDescription\cf0 \strokec4 .displayName = \cf2 \strokec2 "FormDescription"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 const\cf0 \strokec4  \cf6 \strokec6 FormMessage\cf0 \strokec4  = \cf6 \strokec6 React\cf0 \strokec4 .forwardRef((\{ className, children, ...props \}, ref) => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 const\cf0 \strokec4  \{ error, formMessageId \} = useFormField()\cb1 \
\cb3   \cf5 \strokec5 const\cf0 \strokec4  body = error ? \cf6 \strokec6 String\cf0 \strokec4 (error?.message) : children\cb1 \
\
\cb3   \cf5 \strokec5 if\cf0 \strokec4  (!body) \{\cb1 \
\cb3     \cf5 \strokec5 return\cf0 \strokec4  \cf5 \strokec5 null\cf0 \cb1 \strokec4 \
\cb3   \}\cb1 \
\
\cb3   \cf5 \strokec5 return\cf0 \strokec4  (\cb1 \
\cb3     (<p\cb1 \
\cb3       ref=\{ref\}\cb1 \
\cb3       id=\{formMessageId\}\cb1 \
\cb3       className=\{cn(\cf2 \strokec2 "text-[0.8rem] font-medium text-destructive"\cf0 \strokec4 , className)\}\cb1 \
\cb3       \{...props\}>\cb1 \
\cb3       \{body\}\cb1 \
\cb3     </p>)\cb1 \
\cb3   );\cb1 \
\cb3 \})\cb1 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6 FormMessage\cf0 \strokec4 .displayName = \cf2 \strokec2 "FormMessage"\cf0 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 export\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   useFormField,\cb1 \
\cb3   \cf6 \strokec6 Form\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 FormItem\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 FormLabel\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 FormControl\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 FormDescription\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 FormMessage\cf0 \strokec4 ,\cb1 \
\cb3   \cf6 \strokec6 FormField\cf0 \strokec4 ,\cb1 \
\cb3 \}\cb1 \
\
}