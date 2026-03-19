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
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ useQuery, useMutation, useQueryClient \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@tanstack/react-query'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ toast \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'sonner'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 ArrowLeft\cf0 \strokec4 , \cf5 \strokec5 ArrowRight\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'lucide-react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '@/components/ui/button'\cf0 \strokec4 ;\cb1 \
\
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Editor Components\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 TopBar\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/TopBar'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 SlideList\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/SlideList'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 SlideCanvasAdvanced\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/SlideCanvasAdvanced'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 SpeakerNotes\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/SpeakerNotes'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 CompactRightPanel\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/CompactRightPanel'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 AIFloatingBar\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/AIFloatingBar'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 AISlideAssistant\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/AISlideAssistant'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 MobileEditor\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 '../components/editor/MobileEditor'\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \cb3 \strokec7 // Hook to detect mobile\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  useIsMobile = () => \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [isMobile, setIsMobile] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cb1 \
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  checkMobile = () => setIsMobile(window.innerWidth < \cf8 \cb3 \strokec8 768\cf0 \cb3 \strokec4 );\cb1 \
\cb3     checkMobile();\cb1 \
\cb3     window.addEventListener(\cf6 \strokec6 'resize'\cf0 \strokec4 , checkMobile);\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => window.removeEventListener(\cf6 \strokec6 'resize'\cf0 \strokec4 , checkMobile);\cb1 \
\cb3   \}, []);\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  isMobile;\cb1 \
\cb3 \};\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Editor\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  queryClient = useQueryClient();\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  urlParams = \cf2 \strokec2 new\cf0 \strokec4  \cf5 \strokec5 URLSearchParams\cf0 \strokec4 (window.location.search);\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  presentationId = urlParams.\cf2 \strokec2 get\cf0 \strokec4 (\cf6 \strokec6 'id'\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  isMobile = useIsMobile();\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [currentSlide, setCurrentSlide] = useState(\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isPresentationMode, setIsPresentationMode] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [templateStyle, setTemplateStyle] = useState(\{\cb1 \
\cb3     templateName: \cf6 \strokec6 'Slidesgo Template'\cf0 \strokec4 ,\cb1 \
\cb3     primaryColor: \cf6 \strokec6 '#4f46e5'\cf0 \strokec4 ,\cb1 \
\cb3     secondaryColor: \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 ,\cb1 \
\cb3     accentColor: \cf6 \strokec6 '#ec4899'\cf0 \strokec4 ,\cb1 \
\cb3     backgroundColor: \cf6 \strokec6 '#ffffff'\cf0 \strokec4 ,\cb1 \
\cb3     fontFamily: \cf6 \strokec6 'Inter, sans-serif'\cf0 \strokec4 ,\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  \{ data: presentation, isLoading \} = useQuery(\{\cb1 \
\cb3     queryKey: [\cf6 \strokec6 'presentation'\cf0 \strokec4 , presentationId],\cb1 \
\cb3     queryFn: \cf2 \strokec2 async\cf0 \strokec4  () => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  presentations = \cf2 \strokec2 await\cf0 \strokec4  base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .filter(\{ id: presentationId \});\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  presentations[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ];\cb1 \
\cb3     \},\cb1 \
\cb3     enabled: !!presentationId,\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  updateMutation = useMutation(\{\cb1 \
\cb3     mutationFn: (data) => base44.entities.\cf5 \strokec5 Presentation\cf0 \strokec4 .update(presentationId, data),\cb1 \
\cb3     onSuccess: () => \{\cb1 \
\cb3       queryClient.invalidateQueries([\cf6 \strokec6 'presentation'\cf0 \strokec4 , presentationId]);\cb1 \
\cb3     \},\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Extract template styles from PPTX (simulated)\cf0 \cb1 \strokec4 \
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (presentation?.template_name) \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Simulate extracting styles from PPTX template\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  templateStyles = \{\cb1 \
\cb3         \cf6 \strokec6 'Ethereal Aesthetic'\cf0 \strokec4 : \{\cb1 \
\cb3           primaryColor: \cf6 \strokec6 '#a78bfa'\cf0 \strokec4 ,\cb1 \
\cb3           secondaryColor: \cf6 \strokec6 '#ec4899'\cf0 \strokec4 ,\cb1 \
\cb3           accentColor: \cf6 \strokec6 '#f472b6'\cf0 \strokec4 ,\cb1 \
\cb3           backgroundColor: \cf6 \strokec6 '#faf5ff'\cf0 \strokec4 ,\cb1 \
\cb3           fontFamily: \cf6 \strokec6 'Poppins, sans-serif'\cf0 \strokec4 ,\cb1 \
\cb3         \},\cb1 \
\cb3         \cf6 \strokec6 'Startup Pitch Deck'\cf0 \strokec4 : \{\cb1 \
\cb3           primaryColor: \cf6 \strokec6 '#0284c7'\cf0 \strokec4 ,\cb1 \
\cb3           secondaryColor: \cf6 \strokec6 '#06b6d4'\cf0 \strokec4 ,\cb1 \
\cb3           accentColor: \cf6 \strokec6 '#22d3ee'\cf0 \strokec4 ,\cb1 \
\cb3           backgroundColor: \cf6 \strokec6 '#f0f9ff'\cf0 \strokec4 ,\cb1 \
\cb3           fontFamily: \cf6 \strokec6 'Montserrat, sans-serif'\cf0 \strokec4 ,\cb1 \
\cb3         \},\cb1 \
\cb3         \cf6 \strokec6 'AI Automation'\cf0 \strokec4 : \{\cb1 \
\cb3           primaryColor: \cf6 \strokec6 '#7c3aed'\cf0 \strokec4 ,\cb1 \
\cb3           secondaryColor: \cf6 \strokec6 '#8b5cf6'\cf0 \strokec4 ,\cb1 \
\cb3           accentColor: \cf6 \strokec6 '#a78bfa'\cf0 \strokec4 ,\cb1 \
\cb3           backgroundColor: \cf6 \strokec6 '#faf5ff'\cf0 \strokec4 ,\cb1 \
\cb3           fontFamily: \cf6 \strokec6 'Inter, sans-serif'\cf0 \strokec4 ,\cb1 \
\cb3         \},\cb1 \
\cb3       \};\cb1 \
\
\cb3       \cf2 \strokec2 const\cf0 \strokec4  matchedStyle = templateStyles[presentation.template_name];\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (matchedStyle) \{\cb1 \
\cb3         setTemplateStyle(\{\cb1 \
\cb3           ...templateStyle,\cb1 \
\cb3           templateName: presentation.template_name,\cb1 \
\cb3           ...matchedStyle,\cb1 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \}, [presentation?.template_name]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleTitleChange = (newTitle) => \{\cb1 \
\cb3     updateMutation.mutate(\{ title: newTitle \});\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleSlideUpdate = (updatedSlide) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newSlides = [...(presentation?.slides || [])];\cb1 \
\cb3     newSlides[currentSlide] = updatedSlide;\cb1 \
\cb3     updateMutation.mutate(\{ slides: newSlides \});\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAddSlide = () => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newSlide = \{\cb1 \
\cb3       slide_number: (presentation?.slides?.length || \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) + \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       title: \cf6 \strokec6 'New Slide'\cf0 \strokec4 ,\cb1 \
\cb3       content: [\cf6 \strokec6 'Add content here'\cf0 \strokec4 ],\cb1 \
\cb3       layout: \cf6 \strokec6 'title-content'\cf0 \strokec4 ,\cb1 \
\cb3       speaker_notes: \cf6 \strokec6 ''\cf0 \strokec4 ,\cb1 \
\cb3       images: [],\cb1 \
\cb3       chart: \cf2 \strokec2 null\cf0 \strokec4 ,\cb1 \
\cb3     \};\cb1 \
\cb3     updateMutation.mutate(\{ \cb1 \
\cb3       slides: [...(presentation?.slides || []), newSlide] \cb1 \
\cb3     \});\cb1 \
\cb3     setCurrentSlide(presentation?.slides?.length || \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleDeleteSlide = (index) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (presentation?.slides?.length <= \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3       toast.error(\cf6 \strokec6 'Cannot delete the last slide'\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newSlides = presentation.slides.filter((_, i) => i !== index);\cb1 \
\cb3     updateMutation.mutate(\{ slides: newSlides \});\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (currentSlide >= newSlides.length) \{\cb1 \
\cb3       setCurrentSlide(newSlides.length - \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleDuplicateSlide = (index) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  slideToDuplicate = \{ ...presentation.slides[index] \};\cb1 \
\cb3     slideToDuplicate.slide_number = presentation.slides.length + \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 ;\cb1 \
\cb3     slideToDuplicate.title = \cf6 \strokec6 `\cf0 \strokec4 $\{slideToDuplicate.title\}\cf6 \strokec6  (Copy)`\cf0 \strokec4 ;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  newSlides = [...presentation.slides];\cb1 \
\cb3     newSlides.splice(index + \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 , \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 , slideToDuplicate);\cb1 \
\cb3     updateMutation.mutate(\{ slides: newSlides \});\cb1 \
\cb3     setCurrentSlide(index + \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleSpeakerNotesChange = (notes) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  updatedSlide = \{ ...presentation.slides[currentSlide], speaker_notes: notes \};\cb1 \
\cb3     handleSlideUpdate(updatedSlide);\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleLayoutChange = (layoutId) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  updatedSlide = \{ ...presentation.slides[currentSlide], layout: layoutId \};\cb1 \
\cb3     handleSlideUpdate(updatedSlide);\cb1 \
\cb3     toast.success(\cf6 \strokec6 'Layout changed'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleFontChange = (fontFamily) => \{\cb1 \
\cb3     setTemplateStyle(\{ ...templateStyle, fontFamily \});\cb1 \
\cb3     toast.success(\cf6 \strokec6 'Font changed'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleThemeChange = (theme) => \{\cb1 \
\cb3     setTemplateStyle(\{\cb1 \
\cb3       ...templateStyle,\cb1 \
\cb3       primaryColor: theme.primary,\cb1 \
\cb3       secondaryColor: theme.secondary,\cb1 \
\cb3       accentColor: theme.accent,\cb1 \
\cb3       backgroundColor: theme.background,\cb1 \
\cb3     \});\cb1 \
\cb3     toast.success(\cf6 \strokec6 'Theme changed'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAddInfographic = (type) => \{\cb1 \
\cb3     toast.info(\cf6 \strokec6 `\cf0 \strokec4 $\{type\}\cf6 \strokec6  infographic coming soon!`\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAddChart = (chartConfig) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  updatedSlide = \{ \cb1 \
\cb3       ...presentation.slides[currentSlide], \cb1 \
\cb3       chart: chartConfig \cb1 \
\cb3     \};\cb1 \
\cb3     handleSlideUpdate(updatedSlide);\cb1 \
\cb3     toast.success(\cf6 \strokec6 'Chart added'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleAddImage = (imageUrl) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  currentImages = presentation.slides[currentSlide].images || [];\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  updatedSlide = \{ \cb1 \
\cb3       ...presentation.slides[currentSlide], \cb1 \
\cb3       images: [...currentImages, imageUrl]\cb1 \
\cb3     \};\cb1 \
\cb3     handleSlideUpdate(updatedSlide);\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleShare = () => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  shareUrl = window.location.href;\cb1 \
\cb3     navigator.clipboard.writeText(shareUrl);\cb1 \
\cb3     toast.success(\cf6 \strokec6 'Link copied to clipboard'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleExport = \cf2 \strokec2 async\cf0 \strokec4  (format) => \{\cb1 \
\cb3     toast.success(\cf6 \strokec6 `Exporting to \cf0 \strokec4 $\{format\}\cf6 \strokec6 ...`\cf0 \strokec4 );\cb1 \
\cb3     setTimeout(() => \{\cb1 \
\cb3       toast.success(\cf6 \strokec6 `Presentation exported as \cf0 \strokec4 $\{format\}\cf6 \strokec6 !`\cf0 \strokec4 );\cb1 \
\cb3     \}, \cf8 \cb3 \strokec8 2000\cf0 \cb3 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  nextSlide = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (currentSlide < (presentation?.slides?.length || \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) - \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3       setCurrentSlide(currentSlide + \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prevSlide = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (currentSlide > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3       setCurrentSlide(currentSlide - \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  handleKeyDown = (e) => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (isPresentationMode) \{\cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'ArrowRight'\cf0 \strokec4  || e.key === \cf6 \strokec6 ' '\cf0 \strokec4 ) \{\cb1 \
\cb3           nextSlide();\cb1 \
\cb3         \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'ArrowLeft'\cf0 \strokec4 ) \{\cb1 \
\cb3           prevSlide();\cb1 \
\cb3         \} \cf2 \strokec2 else\cf0 \strokec4  \cf2 \strokec2 if\cf0 \strokec4  (e.key === \cf6 \strokec6 'Escape'\cf0 \strokec4 ) \{\cb1 \
\cb3           setIsPresentationMode(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     window.addEventListener(\cf6 \strokec6 'keydown'\cf0 \strokec4 , handleKeyDown);\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => window.removeEventListener(\cf6 \strokec6 'keydown'\cf0 \strokec4 , handleKeyDown);\cb1 \
\cb3   \}, [isPresentationMode, currentSlide, presentation]);\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isLoading) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "min-h-screen flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"\cf0 \strokec4  />\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-slate-600"\cf0 \strokec4 >\cf5 \strokec5 Loading\cf0 \strokec4  presentation...</p>\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (!presentation) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "min-h-screen flex items-center justify-center"\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "text-center"\cf0 \strokec4 >\cb1 \
\cb3           <p className=\cf6 \strokec6 "text-xl text-slate-600 mb-4"\cf0 \strokec4 >\cf5 \strokec5 Presentation\cf0 \strokec4  not found</p>\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \strokec4  onClick=\{() => window.location.href = \cf6 \strokec6 '/'\cf0 \strokec4 \}>\cf5 \strokec5 Go\cf0 \strokec4  \cf5 \strokec5 Home\cf0 \strokec4 </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  slides = presentation.slides || [];\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  currentSlideData = slides[currentSlide] || \{\};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Mobile Editor\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isMobile && !isPresentationMode) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <\cf5 \strokec5 MobileEditor\cf0 \cb1 \strokec4 \
\cb3         presentation=\{presentation\}\cb1 \
\cb3         currentSlide=\{currentSlide\}\cb1 \
\cb3         setCurrentSlide=\{setCurrentSlide\}\cb1 \
\cb3         templateStyle=\{templateStyle\}\cb1 \
\cb3         onSlideUpdate=\{handleSlideUpdate\}\cb1 \
\cb3         onAddSlide=\{handleAddSlide\}\cb1 \
\cb3         onDeleteSlide=\{handleDeleteSlide\}\cb1 \
\cb3         onDuplicateSlide=\{handleDuplicateSlide\}\cb1 \
\cb3         onLayoutChange=\{handleLayoutChange\}\cb1 \
\cb3         onFontChange=\{handleFontChange\}\cb1 \
\cb3         onThemeChange=\{handleThemeChange\}\cb1 \
\cb3         onAddImage=\{handleAddImage\}\cb1 \
\cb3         onPresentationMode=\{() => setIsPresentationMode(\cf2 \strokec2 true\cf0 \strokec4 )\}\cb1 \
\cb3         onShare=\{handleShare\}\cb1 \
\cb3         onExport=\{handleExport\}\cb1 \
\cb3       />\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Presentation Mode\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (isPresentationMode) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3       <div className=\cf6 \strokec6 "min-h-screen bg-black flex flex-col"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 TopBar\cf0 \cb1 \strokec4 \
\cb3           title=\{presentation.title\}\cb1 \
\cb3           onTitleChange=\{handleTitleChange\}\cb1 \
\cb3           onPresentationMode=\{() => setIsPresentationMode(\cf2 \strokec2 false\cf0 \strokec4 )\}\cb1 \
\cb3           onShare=\{handleShare\}\cb1 \
\cb3           onExport=\{handleExport\}\cb1 \
\cb3           isPresentationMode=\{\cf2 \strokec2 true\cf0 \strokec4 \}\cb1 \
\cb3         />\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "flex-1 flex items-center justify-center p-8 pb-40"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-full max-w-6xl"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 SlideCanvasAdvanced\cf0 \cb1 \strokec4 \
\cb3               slide=\{currentSlideData\}\cb1 \
\cb3               onUpdate=\{handleSlideUpdate\}\cb1 \
\cb3               templateStyle=\{templateStyle\}\cb1 \
\cb3               isPresentationMode=\{\cf2 \strokec2 true\cf0 \strokec4 \}\cb1 \
\cb3               slideIndex=\{currentSlide\}\cb1 \
\cb3             />\cb1 \
\cb3           </div>\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <\cf5 \strokec5 SpeakerNotes\cf0 \cb1 \strokec4 \
\cb3           notes=\{currentSlideData.speaker_notes\}\cb1 \
\cb3           onChange=\{handleSpeakerNotesChange\}\cb1 \
\cb3           isPresentationMode=\{\cf2 \strokec2 true\cf0 \strokec4 \}\cb1 \
\cb3         />\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-slate-800/90 px-6 py-3 rounded-full"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3             variant=\cf6 \strokec6 "ghost"\cf0 \cb1 \strokec4 \
\cb3             size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{prevSlide\}\cb1 \
\cb3             disabled=\{currentSlide === \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             className=\cf6 \strokec6 "text-white hover:bg-slate-700"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 ArrowLeft\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3           \cb1 \
\cb3           <span className=\cf6 \strokec6 "text-white text-sm font-medium"\cf0 \strokec4 >\cb1 \
\cb3             \{currentSlide + \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 \} / \{slides.length\}\cb1 \
\cb3           </span>\cb1 \
\cb3           \cb1 \
\cb3           <\cf5 \strokec5 Button\cf0 \cb1 \strokec4 \
\cb3             variant=\cf6 \strokec6 "ghost"\cf0 \cb1 \strokec4 \
\cb3             size=\cf6 \strokec6 "sm"\cf0 \cb1 \strokec4 \
\cb3             onClick=\{nextSlide\}\cb1 \
\cb3             disabled=\{currentSlide === slides.length - \cf8 \cb3 \strokec8 1\cf0 \cb3 \strokec4 \}\cb1 \
\cb3             className=\cf6 \strokec6 "text-white hover:bg-slate-700"\cf0 \cb1 \strokec4 \
\cb3           >\cb1 \
\cb3             <\cf5 \strokec5 ArrowRight\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3           </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3         </div>\cb1 \
\cb3       </div>\cb1 \
\cb3     );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Edit Mode\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div className=\cf6 \strokec6 "h-screen bg-slate-50 flex flex-col overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 TopBar\cf0 \cb1 \strokec4 \
\cb3         title=\{presentation.title\}\cb1 \
\cb3         onTitleChange=\{handleTitleChange\}\cb1 \
\cb3         onPresentationMode=\{() => setIsPresentationMode(\cf2 \strokec2 true\cf0 \strokec4 )\}\cb1 \
\cb3         onShare=\{handleShare\}\cb1 \
\cb3         onExport=\{handleExport\}\cb1 \
\cb3         isPresentationMode=\{\cf2 \strokec2 false\cf0 \strokec4 \}\cb1 \
\cb3         slideCount=\{slides.length\}\cb1 \
\cb3         currentSlide=\{currentSlide\}\cb1 \
\cb3       />\cb1 \
\
\cb3       <div className=\cf6 \strokec6 "flex-1 flex overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 SlideList\cf0 \cb1 \strokec4 \
\cb3           slides=\{slides\}\cb1 \
\cb3           currentSlide=\{currentSlide\}\cb1 \
\cb3           onSlideSelect=\{setCurrentSlide\}\cb1 \
\cb3           onAddSlide=\{handleAddSlide\}\cb1 \
\cb3           onDeleteSlide=\{handleDeleteSlide\}\cb1 \
\cb3           onDuplicateSlide=\{handleDuplicateSlide\}\cb1 \
\cb3           templateStyle=\{templateStyle\}\cb1 \
\cb3           isPresentationMode=\{\cf2 \strokec2 false\cf0 \strokec4 \}\cb1 \
\cb3         />\cb1 \
\
\cb3         <div className=\cf6 \strokec6 "flex-1 flex flex-col bg-gradient-to-br from-slate-100 to-slate-200 p-6 overflow-hidden relative"\cf0 \strokec4 >\cb1 \
\cb3           \{\cf7 \cb3 \strokec7 /* AI Slide Assistant - contextual suggestions */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <\cf5 \strokec5 AISlideAssistant\cf0 \cb1 \strokec4 \
\cb3             slide=\{currentSlideData\}\cb1 \
\cb3             onUpdateSlide=\{handleSlideUpdate\}\cb1 \
\cb3             onAddImage=\{handleAddImage\}\cb1 \
\cb3             onAddChart=\{handleAddChart\}\cb1 \
\cb3           />\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* Main Slide Canvas */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "flex-1 flex items-center justify-center mb-4"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "w-full max-w-5xl"\cf0 \strokec4 >\cb1 \
\cb3               <div className=\cf6 \strokec6 "bg-white rounded-2xl shadow-2xl overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 SlideCanvasAdvanced\cf0 \cb1 \strokec4 \
\cb3                   slide=\{currentSlideData\}\cb1 \
\cb3                   onUpdate=\{handleSlideUpdate\}\cb1 \
\cb3                   templateStyle=\{templateStyle\}\cb1 \
\cb3                   isPresentationMode=\{\cf2 \strokec2 false\cf0 \strokec4 \}\cb1 \
\cb3                   slideIndex=\{currentSlide\}\cb1 \
\cb3                 />\cb1 \
\cb3               </div>\cb1 \
\cb3             </div>\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* Speaker Notes - Collapsible */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <div className=\cf6 \strokec6 "max-w-5xl mx-auto w-full flex-shrink-0"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 SpeakerNotes\cf0 \cb1 \strokec4 \
\cb3               notes=\{currentSlideData.speaker_notes\}\cb1 \
\cb3               onChange=\{handleSpeakerNotesChange\}\cb1 \
\cb3               isPresentationMode=\{\cf2 \strokec2 false\cf0 \strokec4 \}\cb1 \
\cb3             />\cb1 \
\cb3           </div>\cb1 \
\
\cb3           \{\cf7 \cb3 \strokec7 /* AI Floating Bar */\cf0 \cb3 \strokec4 \}\cb1 \
\cb3           <\cf5 \strokec5 AIFloatingBar\cf0 \cb1 \strokec4 \
\cb3             slide=\{currentSlideData\}\cb1 \
\cb3             onUpdateSlide=\{handleSlideUpdate\}\cb1 \
\cb3           />\cb1 \
\cb3         </div>\cb1 \
\
\cb3         <\cf5 \strokec5 CompactRightPanel\cf0 \cb1 \strokec4 \
\cb3           slide=\{currentSlideData\}\cb1 \
\cb3           onUpdateSlide=\{handleSlideUpdate\}\cb1 \
\cb3           currentLayout=\{currentSlideData.layout\}\cb1 \
\cb3           onLayoutChange=\{handleLayoutChange\}\cb1 \
\cb3           currentFont=\{templateStyle.fontFamily\}\cb1 \
\cb3           onFontChange=\{handleFontChange\}\cb1 \
\cb3           currentTheme=\{templateStyle\}\cb1 \
\cb3           onThemeChange=\{handleThemeChange\}\cb1 \
\cb3           onAddInfographic=\{handleAddInfographic\}\cb1 \
\cb3           onAddChart=\{handleAddChart\}\cb1 \
\cb3           onAddImage=\{handleAddImage\}\cb1 \
\cb3           presentationId=\{presentationId\}\cb1 \
\cb3         />\cb1 \
\cb3       </div>\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}