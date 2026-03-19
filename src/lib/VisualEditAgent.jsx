{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red14\green110\blue109;\red15\green112\blue1;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c50196;\cssrgb\c0\c50196\c0;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \{ useEffect, useRef, useState \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ twMerge \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 'tailwind-merge'\cf0 \cb1 \strokec4 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf6 \strokec6 VisualEditAgent\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf7 \cb3 \strokec7 // this functions job is to receive first a message from the parent window, to set or unset visual edits mode. \cf0 \cb1 \strokec4 \
\cb3   \cf7 \cb3 \strokec7 // once in visual edits mode, every hover over an elelmnt that has linenumbers should show an overlay, when clicked - it should stick the overlay and send a message to the parent window with the selected element\cf0 \cb1 \strokec4 \
\cb3   \cf7 \cb3 \strokec7 // then, the parent window will have an editor, allow for changes to the tailwind css classes of the selected element, and send the updated css classes back to the iframe. \cf0 \cb1 \strokec4 \
\cb3   \cf7 \cb3 \strokec7 // the iframe will then update the css classes of the selected element.\cf0 \cb1 \strokec4 \
\
\cb3   \cf7 \cb3 \strokec7 // State and refs\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isVisualEditMode, setIsVisualEditMode] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  isVisualEditModeRef = useRef(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isPopoverDragging, setIsPopoverDragging] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  isPopoverDraggingRef = useRef(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  [isDropdownOpen, setIsDropdownOpen] = useState(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  isDropdownOpenRef = useRef(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  hoverOverlaysRef = useRef([]); \cf7 \cb3 \strokec7 // Multiple overlays for hover\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  selectedOverlaysRef = useRef([]); \cf7 \cb3 \strokec7 // Multiple overlays for selection\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  currentHighlightedElementsRef = useRef([]); \cf7 \cb3 \strokec7 // Multiple elements for hover\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  selectedElementIdRef = useRef(\cf2 \strokec2 null\cf0 \strokec4 ); \cf7 \cb3 \strokec7 // Store the visual selector ID\cf0 \cb1 \strokec4 \
\
\cb3   \cf7 \cb3 \strokec7 // Create overlay element\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  createOverlay = (isSelected = \cf2 \strokec2 false\cf0 \strokec4 ) => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  overlay = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \
\cb3     overlay.style.position = \cf5 \strokec5 'absolute'\cf0 \strokec4 ;\cb1 \
\cb3     overlay.style.pointerEvents = \cf5 \strokec5 'none'\cf0 \strokec4 ;\cb1 \
\cb3     overlay.style.transition = \cf5 \strokec5 'all 0.1s ease-in-out'\cf0 \strokec4 ;\cb1 \
\cb3     overlay.style.zIndex = \cf5 \strokec5 '9999'\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Use different styles for hover vs selected\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (isSelected) \{\cb1 \
\cb3       overlay.style.border = \cf5 \strokec5 '2px solid #2563EB'\cf0 \strokec4 ;\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3       overlay.style.border = \cf5 \strokec5 '2px solid #95a5fc'\cf0 \strokec4 ;\cb1 \
\cb3       overlay.style.backgroundColor = \cf5 \strokec5 'rgba(99, 102, 241, 0.05)'\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  overlay;\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Position overlay relative to element\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  positionOverlay = (overlay, element, isSelected = \cf2 \strokec2 false\cf0 \strokec4 ) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!element || !isVisualEditModeRef.current) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Force layout recalculation\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 void\cf0 \strokec4  element.offsetWidth;\cb1 \
\
\cb3     \cf2 \strokec2 const\cf0 \strokec4  rect = element.getBoundingClientRect();\cb1 \
\cb3     overlay.style.top = \cf5 \strokec5 `\cf0 \strokec4 $\{rect.top + window.scrollY\}\cf5 \strokec5 px`\cf0 \strokec4 ;\cb1 \
\cb3     overlay.style.left = \cf5 \strokec5 `\cf0 \strokec4 $\{rect.left + window.scrollX\}\cf5 \strokec5 px`\cf0 \strokec4 ; \cf7 \cb3 \strokec7 // weird bug with the offset\cf0 \cb1 \strokec4 \
\cb3     overlay.style.width = \cf5 \strokec5 `\cf0 \strokec4 $\{rect.width\}\cf5 \strokec5 px`\cf0 \strokec4 ;\cb1 \
\cb3     overlay.style.height = \cf5 \strokec5 `\cf0 \strokec4 $\{rect.height\}\cf5 \strokec5 px`\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Check if label already exists in overlay\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 let\cf0 \strokec4  label = overlay.querySelector(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!label) \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Create new label if it doesn't exist\cf0 \cb1 \strokec4 \
\cb3       label = document.createElement(\cf5 \strokec5 'div'\cf0 \strokec4 );\cb1 \
\cb3       label.textContent = element.tagName.toLowerCase();\cb1 \
\cb3       label.style.position = \cf5 \strokec5 'absolute'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.top = \cf5 \strokec5 '-27px'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.left = \cf5 \strokec5 '-2px'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.padding = \cf5 \strokec5 '2px 8px'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.fontSize = \cf5 \strokec5 '11px'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.fontWeight = isSelected ? \cf5 \strokec5 '500'\cf0 \strokec4  : \cf5 \strokec5 '400'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.color = isSelected ? \cf5 \strokec5 '#ffffff'\cf0 \strokec4  : \cf5 \strokec5 '#526cff'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.backgroundColor = isSelected ? \cf5 \strokec5 '#526cff'\cf0 \strokec4  : \cf5 \strokec5 '#DBEAFE'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.borderRadius = \cf5 \strokec5 '3px'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.boxShadow = isSelected ? \cf5 \strokec5 'none'\cf0 \strokec4  : \cf5 \strokec5 'none'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.minWidth = \cf5 \strokec5 '24px'\cf0 \strokec4 ;\cb1 \
\cb3       label.style.textAlign = \cf5 \strokec5 'center'\cf0 \strokec4 ;\cb1 \
\cb3       overlay.appendChild(label);\cb1 \
\cb3     \}\cb1 \
\cb3     \cf7 \cb3 \strokec7 // If label exists, we preserve its existing styling (don't recreate or modify)\cf0 \cb1 \strokec4 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Find elements by ID - first try data-source-location, fallback to data-visual-selector-id\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  findElementsById = (id) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!id) \cf2 \strokec2 return\cf0 \strokec4  [];\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  sourceElements = [...document.querySelectorAll(\cf5 \strokec5 `[data-source-location="\cf0 \strokec4 $\{id\}\cf5 \strokec5 "]`\cf0 \strokec4 )];\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (sourceElements.length > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4  sourceElements;\cb1 \
\cb3     \}\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  [...document.querySelectorAll(\cf5 \strokec5 `[data-visual-selector-id="\cf0 \strokec4 $\{id\}\cf5 \strokec5 "]`\cf0 \strokec4 )];\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Clear hover overlays\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  clearHoverOverlays = () => \{\cb1 \
\cb3     hoverOverlaysRef.current.forEach(overlay => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (overlay && overlay.parentNode) \{\cb1 \
\cb3         overlay.remove();\cb1 \
\cb3       \}\cb1 \
\cb3     \});\cb1 \
\cb3     hoverOverlaysRef.current = [];\cb1 \
\cb3     currentHighlightedElementsRef.current = [];\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Handle mouse over event\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleMouseOver = (e) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!isVisualEditModeRef.current || isPopoverDraggingRef.current) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Prevent hover effects when a dropdown is open\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (isDropdownOpenRef.current) \{\cb1 \
\cb3       clearHoverOverlays();\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Prevent hover effects on SVG path elements\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (e.target.tagName.toLowerCase() === \cf5 \strokec5 'path'\cf0 \strokec4 ) \{\cb1 \
\cb3       clearHoverOverlays();\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Support both data-source-location and data-visual-selector-id\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  element = e.target.closest(\cf5 \strokec5 '[data-source-location], [data-visual-selector-id]'\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!element) \{\cb1 \
\cb3       clearHoverOverlays();\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Prefer data-source-location, fallback to data-visual-selector-id  \cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  selectorId = element.dataset.sourceLocation || element.dataset.visualSelectorId;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  useSourceLocation = !!element.dataset.sourceLocation;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Skip if this element is already selected\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (selectedElementIdRef.current === selectorId) \{\cb1 \
\cb3       clearHoverOverlays();\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Find all elements with the same ID\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  elements = findElementsById(selectorId, useSourceLocation);\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Clear previous hover overlays\cf0 \cb1 \strokec4 \
\cb3     clearHoverOverlays();\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Create overlays for all matching elements\cf0 \cb1 \strokec4 \
\cb3     elements.forEach(el => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  overlay = createOverlay(\cf2 \strokec2 false\cf0 \strokec4 );\cb1 \
\cb3       document.body.appendChild(overlay);\cb1 \
\cb3       hoverOverlaysRef.current.push(overlay);\cb1 \
\cb3       positionOverlay(overlay, el);\cb1 \
\cb3     \});\cb1 \
\
\cb3     currentHighlightedElementsRef.current = elements;\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Handle mouse out event\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleMouseOut = () => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (isPopoverDraggingRef.current) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     clearHoverOverlays();\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Handle element click\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  handleElementClick = (e) => \{\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!isVisualEditModeRef.current) \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Close dropdowns when clicking anywhere in iframe if a dropdown is open\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (isDropdownOpenRef.current) \{\cb1 \
\cb3       e.preventDefault();\cb1 \
\cb3       e.stopPropagation();\cb1 \
\cb3       e.stopImmediatePropagation();\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Send message to parent to close all dropdowns\cf0 \cb1 \strokec4 \
\cb3       window.parent.postMessage(\{\cb1 \
\cb3         type: \cf5 \strokec5 'close-dropdowns'\cf0 \cb1 \strokec4 \
\cb3       \}, \cf5 \strokec5 '*'\cf0 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Prevent clicking on SVG path elements\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (e.target.tagName.toLowerCase() === \cf5 \strokec5 'path'\cf0 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Prevent default behavior immediately when in visual edit mode\cf0 \cb1 \strokec4 \
\cb3     e.preventDefault();\cb1 \
\cb3     e.stopPropagation();\cb1 \
\cb3     e.stopImmediatePropagation();\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Support both data-source-location and data-visual-selector-id\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  element = e.target.closest(\cf5 \strokec5 '[data-source-location], [data-visual-selector-id]'\cf0 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!element) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Prefer data-source-location, fallback to data-visual-selector-id\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  visualSelectorId = element.dataset.sourceLocation || element.dataset.visualSelectorId;\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  useSourceLocation = !!element.dataset.sourceLocation;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Clear any existing selected overlays\cf0 \cb1 \strokec4 \
\cb3     selectedOverlaysRef.current.forEach(overlay => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (overlay && overlay.parentNode) \{\cb1 \
\cb3         overlay.remove();\cb1 \
\cb3       \}\cb1 \
\cb3     \});\cb1 \
\cb3     selectedOverlaysRef.current = [];\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Find all elements with the same ID\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  elements = findElementsById(visualSelectorId, useSourceLocation);\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Create selected overlays for all matching elements\cf0 \cb1 \strokec4 \
\cb3     elements.forEach(el => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  overlay = createOverlay(\cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3       document.body.appendChild(overlay);\cb1 \
\cb3       selectedOverlaysRef.current.push(overlay);\cb1 \
\cb3       positionOverlay(overlay, el, \cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \});\cb1 \
\
\cb3     selectedElementIdRef.current = visualSelectorId;\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Clear hover overlays\cf0 \cb1 \strokec4 \
\cb3     clearHoverOverlays();\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Calculate element position for popover positioning\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  rect = element.getBoundingClientRect();\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  elementPosition = \{\cb1 \
\cb3       top: rect.top,\cb1 \
\cb3       left: rect.left,\cb1 \
\cb3       right: rect.right,\cb1 \
\cb3       bottom: rect.bottom,\cb1 \
\cb3       width: rect.width,\cb1 \
\cb3       height: rect.height,\cb1 \
\cb3       centerX: rect.left + rect.width / \cf8 \cb3 \strokec8 2\cf0 \cb3 \strokec4 ,\cb1 \
\cb3       centerY: rect.top + rect.height / \cf8 \cb3 \strokec8 2\cf0 \cb1 \strokec4 \
\cb3     \};\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Send message to parent window with element info including position\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  elementData = \{\cb1 \
\cb3       type: \cf5 \strokec5 'element-selected'\cf0 \strokec4 ,\cb1 \
\cb3       tagName: element.tagName,\cb1 \
\cb3       classes: element.className?.baseVal || element.className || \cf5 \strokec5 ''\cf0 \strokec4 ,\cb1 \
\cb3       visualSelectorId: visualSelectorId,\cb1 \
\cb3       content: element.innerText,\cb1 \
\cb3       dataSourceLocation: element.dataset.sourceLocation,\cb1 \
\cb3       isDynamicContent: element.dataset.dynamicContent === \cf5 \strokec5 'true'\cf0 \strokec4 ,\cb1 \
\cb3       linenumber: element.dataset.linenumber, \cf7 \cb3 \strokec7 // Keep for backward compatibility\cf0 \cb1 \strokec4 \
\cb3       filename: element.dataset.filename, \cf7 \cb3 \strokec7 // Keep for backward compatibility\cf0 \cb1 \strokec4 \
\cb3       position: elementPosition \cf7 \cb3 \strokec7 // Add position data for popover\cf0 \cb1 \strokec4 \
\cb3     \};\cb1 \
\cb3     window.parent.postMessage(elementData, \cf5 \strokec5 '*'\cf0 \strokec4 );\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Unselect the current element\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  unselectElement = () => \{\cb1 \
\cb3     \cf7 \cb3 \strokec7 // Clear selected overlays\cf0 \cb1 \strokec4 \
\cb3     selectedOverlaysRef.current.forEach(overlay => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (overlay && overlay.parentNode) \{\cb1 \
\cb3         overlay.remove();\cb1 \
\cb3       \}\cb1 \
\cb3     \});\cb1 \
\cb3     selectedOverlaysRef.current = [];\cb1 \
\
\cb3     selectedElementIdRef.current = \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Update element classes by visual selector ID\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  updateElementClasses = (visualSelectorId, classes, replace = \cf2 \strokec2 false\cf0 \strokec4 ) => \{\cb1 \
\cb3     \cf7 \cb3 \strokec7 // Find all elements with the same visual selector ID\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  elements = findElementsById(visualSelectorId);\cb1 \
\
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (elements.length === \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Update classes for all matching elements\cf0 \cb1 \strokec4 \
\cb3     elements.forEach(element => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (replace) \{\cb1 \
\cb3         \cf7 \cb3 \strokec7 // For reverts, replace classes completely\cf0 \cb1 \strokec4 \
\cb3         element.className = classes;\cb1 \
\cb3       \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3         \cf7 \cb3 \strokec7 // For normal updates, merge with existing classes\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  currentClasses = element.className?.baseVal || element.className || \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \
\cb3         element.className = twMerge(currentClasses, classes);\cb1 \
\cb3       \}\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Use a small delay to allow the browser to recalculate layout before repositioning\cf0 \cb1 \strokec4 \
\cb3     setTimeout(() => \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Reposition selected overlays\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (selectedElementIdRef.current === visualSelectorId) \{\cb1 \
\cb3         selectedOverlaysRef.current.forEach((overlay, index) => \{\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (index < elements.length) \{\cb1 \
\cb3             positionOverlay(overlay, elements[index]);\cb1 \
\cb3           \}\cb1 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Reposition hover overlays if needed\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (currentHighlightedElementsRef.current.length > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  hoveredId = currentHighlightedElementsRef.current[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ]?.dataset?.visualSelectorId;\cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (hoveredId === visualSelectorId) \{\cb1 \
\cb3           hoverOverlaysRef.current.forEach((overlay, index) => \{\cb1 \
\cb3             \cf2 \strokec2 if\cf0 \strokec4  (index < currentHighlightedElementsRef.current.length) \{\cb1 \
\cb3               positionOverlay(overlay, currentHighlightedElementsRef.current[index]);\cb1 \
\cb3             \}\cb1 \
\cb3           \});\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}, \cf8 \cb3 \strokec8 50\cf0 \cb3 \strokec4 ); \cf7 \cb3 \strokec7 // Small delay to ensure the browser has time to recalculate layout\cf0 \cb1 \strokec4 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Update element content by visual selector ID\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  updateElementContent = (visualSelectorId, content) => \{\cb1 \
\cb3     \cf7 \cb3 \strokec7 // Find all elements with the same visual selector ID\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  elements = findElementsById(visualSelectorId);\cb1 \
\
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (elements.length === \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf0 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Update content for all matching elements\cf0 \cb1 \strokec4 \
\cb3     elements.forEach((element) => \{\cb1 \
\cb3       element.innerText = content;\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Use a small delay to allow the browser to recalculate layout before repositioning\cf0 \cb1 \strokec4 \
\cb3     setTimeout(() => \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Reposition selected overlays\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (selectedElementIdRef.current === visualSelectorId) \{\cb1 \
\cb3         selectedOverlaysRef.current.forEach((overlay, index) => \{\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (index < elements.length) \{\cb1 \
\cb3             positionOverlay(overlay, elements[index]);\cb1 \
\cb3           \}\cb1 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\cb3     \}, \cf8 \cb3 \strokec8 50\cf0 \cb3 \strokec4 ); \cf7 \cb3 \strokec7 // Small delay to ensure the browser has time to recalculate layout\cf0 \cb1 \strokec4 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Toggle visual edit mode\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  toggleVisualEditMode = (isEnabled) => \{\cb1 \
\cb3     setIsVisualEditMode(isEnabled);\cb1 \
\cb3     isVisualEditModeRef.current = isEnabled;\cb1 \
\
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (!isEnabled) \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Clear hover overlays\cf0 \cb1 \strokec4 \
\cb3       clearHoverOverlays();\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Clear selected overlays\cf0 \cb1 \strokec4 \
\cb3       selectedOverlaysRef.current.forEach(overlay => \{\cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (overlay && overlay.parentNode) \{\cb1 \
\cb3           overlay.remove();\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\cb3       selectedOverlaysRef.current = [];\cb1 \
\
\cb3       currentHighlightedElementsRef.current = [];\cb1 \
\cb3       selectedElementIdRef.current = \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3       document.body.style.cursor = \cf5 \strokec5 'default'\cf0 \strokec4 ;\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Remove event listeners\cf0 \cb1 \strokec4 \
\cb3       document.removeEventListener(\cf5 \strokec5 'mouseover'\cf0 \strokec4 , handleMouseOver);\cb1 \
\cb3       document.removeEventListener(\cf5 \strokec5 'mouseout'\cf0 \strokec4 , handleMouseOut);\cb1 \
\cb3       document.removeEventListener(\cf5 \strokec5 'click'\cf0 \strokec4 , handleElementClick, \cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3     \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Set cursor and add event listeners\cf0 \cb1 \strokec4 \
\cb3       document.body.style.cursor = \cf5 \strokec5 'crosshair'\cf0 \strokec4 ;\cb1 \
\cb3       document.addEventListener(\cf5 \strokec5 'mouseover'\cf0 \strokec4 , handleMouseOver);\cb1 \
\cb3       document.addEventListener(\cf5 \strokec5 'mouseout'\cf0 \strokec4 , handleMouseOut);\cb1 \
\cb3       document.addEventListener(\cf5 \strokec5 'click'\cf0 \strokec4 , handleElementClick, \cf2 \strokec2 true\cf0 \strokec4 ); \cf7 \cb3 \strokec7 // Use capture mode\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3   \};\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Listen for messages from parent window\cf0 \cb1 \strokec4 \
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf7 \cb3 \strokec7 // Add IDs to elements that don't have them but have linenumbers\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  elementsWithLineNumber = document.querySelectorAll(\cf5 \strokec5 '[data-linenumber]:not([data-visual-selector-id])'\cf0 \strokec4 );\cb1 \
\cb3     elementsWithLineNumber.forEach((el, index) => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  id = \cf5 \strokec5 `visual-id-\cf0 \strokec4 $\{el.dataset.filename\}\cf5 \strokec5 -\cf0 \strokec4 $\{el.dataset.linenumber\}\cf5 \strokec5 -\cf0 \strokec4 $\{index\}\cf5 \strokec5 `\cf0 \strokec4 ;\cb1 \
\cb3       el.dataset.visualSelectorId = id;\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Handle scroll events to update popover position\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  handleScroll = () => \{\cb1 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (selectedElementIdRef.current) \{\cb1 \
\cb3         \cf7 \cb3 \strokec7 // Find the element using the stored ID\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  elements = findElementsById(selectedElementIdRef.current);\cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (elements.length > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  element = elements[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ];\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  rect = element.getBoundingClientRect();\cb1 \
\
\cb3           \cf7 \cb3 \strokec7 // Check if element is in viewport\cf0 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  viewportHeight = window.innerHeight;\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  viewportWidth = window.innerWidth;\cb1 \
\cb3           \cf2 \strokec2 const\cf0 \strokec4  isInViewport = (\cb1 \
\cb3             rect.top < viewportHeight &&\cb1 \
\cb3             rect.bottom > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  &&\cb1 \
\cb3             rect.left < viewportWidth &&\cb1 \
\cb3             rect.right > \cf8 \cb3 \strokec8 0\cf0 \cb1 \strokec4 \
\cb3           );\cb1 \
\
\cb3           \cf2 \strokec2 const\cf0 \strokec4  elementPosition = \{\cb1 \
\cb3             top: rect.top,\cb1 \
\cb3             left: rect.left,\cb1 \
\cb3             right: rect.right,\cb1 \
\cb3             bottom: rect.bottom,\cb1 \
\cb3             width: rect.width,\cb1 \
\cb3             height: rect.height,\cb1 \
\cb3             centerX: rect.left + rect.width / \cf8 \cb3 \strokec8 2\cf0 \cb3 \strokec4 ,\cb1 \
\cb3             centerY: rect.top + rect.height / \cf8 \cb3 \strokec8 2\cf0 \cb1 \strokec4 \
\cb3           \};\cb1 \
\
\cb3           window.parent.postMessage(\{\cb1 \
\cb3             type: \cf5 \strokec5 'element-position-update'\cf0 \strokec4 ,\cb1 \
\cb3             position: elementPosition,\cb1 \
\cb3             isInViewport: isInViewport,\cb1 \
\cb3             visualSelectorId: selectedElementIdRef.current\cb1 \
\cb3           \}, \cf5 \strokec5 '*'\cf0 \strokec4 );\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf2 \strokec2 const\cf0 \strokec4  handleMessage = (event) => \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Check origin if desired\cf0 \cb1 \strokec4 \
\cb3       \cf7 \cb3 \strokec7 //if (event.origin !== 'parent-origin') return;\cf0 \cb1 \strokec4 \
\
\cb3       \cf2 \strokec2 const\cf0 \strokec4  message = event.data;\cb1 \
\
\cb3       \cf2 \strokec2 switch\cf0 \strokec4  (message.type) \{\cb1 \
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'toggle-visual-edit-mode'\cf0 \strokec4 :\cb1 \
\cb3           toggleVisualEditMode(message.data.enabled);\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'update-classes'\cf0 \strokec4 :\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (message.data && message.data.classes !== \cf2 \strokec2 undefined\cf0 \strokec4 ) \{\cb1 \
\cb3             \cf7 \cb3 \strokec7 // Update with the visual selector ID\cf0 \cb1 \strokec4 \
\cb3             \cf7 \cb3 \strokec7 // Pass replace flag if provided (used for reverts)\cf0 \cb1 \strokec4 \
\cb3             updateElementClasses(\cb1 \
\cb3               message.data.visualSelectorId,\cb1 \
\cb3               message.data.classes,\cb1 \
\cb3               message.data.replace || \cf2 \strokec2 false\cf0 \cb1 \strokec4 \
\cb3             );\cb1 \
\cb3           \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3             console.warn(\cf5 \strokec5 '[Agent] Invalid update-classes message:'\cf0 \strokec4 , message);\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'unselect-element'\cf0 \strokec4 :\cb1 \
\cb3           unselectElement();\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'refresh-page'\cf0 \strokec4 :\cb1 \
\cb3           window.location.reload();\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'update-content'\cf0 \strokec4 :\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (message.data && message.data.content !== \cf2 \strokec2 undefined\cf0 \strokec4 ) \{\cb1 \
\cb3             updateElementContent(\cb1 \
\cb3               message.data.visualSelectorId,\cb1 \
\cb3               message.data.content\cb1 \
\cb3             );\cb1 \
\cb3           \} \cf2 \strokec2 else\cf0 \strokec4  \{\cb1 \
\cb3             console.warn(\cf5 \strokec5 '[Agent] Invalid update-content message:'\cf0 \strokec4 , message);\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'request-element-position'\cf0 \strokec4 :\cb1 \
\cb3           \cf7 \cb3 \strokec7 // Send current position of selected element for popover repositioning\cf0 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (selectedElementIdRef.current) \{\cb1 \
\cb3             \cf7 \cb3 \strokec7 // Find the element using the stored ID\cf0 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 const\cf0 \strokec4  elements = findElementsById(selectedElementIdRef.current);\cb1 \
\cb3             \cf2 \strokec2 if\cf0 \strokec4  (elements.length > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3               \cf2 \strokec2 const\cf0 \strokec4  element = elements[\cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ];\cb1 \
\cb3               \cf2 \strokec2 const\cf0 \strokec4  rect = element.getBoundingClientRect();\cb1 \
\
\cb3               \cf7 \cb3 \strokec7 // Check if element is in viewport\cf0 \cb1 \strokec4 \
\cb3               \cf2 \strokec2 const\cf0 \strokec4  viewportHeight = window.innerHeight;\cb1 \
\cb3               \cf2 \strokec2 const\cf0 \strokec4  viewportWidth = window.innerWidth;\cb1 \
\cb3               \cf2 \strokec2 const\cf0 \strokec4  isInViewport = (\cb1 \
\cb3                 rect.top < viewportHeight &&\cb1 \
\cb3                 rect.bottom > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4  &&\cb1 \
\cb3                 rect.left < viewportWidth &&\cb1 \
\cb3                 rect.right > \cf8 \cb3 \strokec8 0\cf0 \cb1 \strokec4 \
\cb3               );\cb1 \
\
\cb3               \cf2 \strokec2 const\cf0 \strokec4  elementPosition = \{\cb1 \
\cb3                 top: rect.top,\cb1 \
\cb3                 left: rect.left,\cb1 \
\cb3                 right: rect.right,\cb1 \
\cb3                 bottom: rect.bottom,\cb1 \
\cb3                 width: rect.width,\cb1 \
\cb3                 height: rect.height,\cb1 \
\cb3                 centerX: rect.left + rect.width / \cf8 \cb3 \strokec8 2\cf0 \cb3 \strokec4 ,\cb1 \
\cb3                 centerY: rect.top + rect.height / \cf8 \cb3 \strokec8 2\cf0 \cb1 \strokec4 \
\cb3               \};\cb1 \
\
\cb3               window.parent.postMessage(\{\cb1 \
\cb3                 type: \cf5 \strokec5 'element-position-update'\cf0 \strokec4 ,\cb1 \
\cb3                 position: elementPosition,\cb1 \
\cb3                 isInViewport: isInViewport,\cb1 \
\cb3                 visualSelectorId: selectedElementIdRef.current\cb1 \
\cb3               \}, \cf5 \strokec5 '*'\cf0 \strokec4 );\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'popover-drag-state'\cf0 \strokec4 :\cb1 \
\cb3           \cf7 \cb3 \strokec7 // Handle popover drag state to prevent mouseover conflicts\cf0 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (message.data && message.data.isDragging !== \cf2 \strokec2 undefined\cf0 \strokec4 ) \{\cb1 \
\cb3             setIsPopoverDragging(message.data.isDragging);\cb1 \
\cb3             isPopoverDraggingRef.current = message.data.isDragging;\cb1 \
\
\cb3             \cf7 \cb3 \strokec7 // Clear hover overlays when dragging starts\cf0 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 if\cf0 \strokec4  (message.data.isDragging) \{\cb1 \
\cb3               clearHoverOverlays();\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 case\cf0 \strokec4  \cf5 \strokec5 'dropdown-state'\cf0 \strokec4 :\cb1 \
\cb3           \cf7 \cb3 \strokec7 // Handle dropdown open/close state\cf0 \cb1 \strokec4 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (message.data && message.data.isOpen !== \cf2 \strokec2 undefined\cf0 \strokec4 ) \{\cb1 \
\cb3             setIsDropdownOpen(message.data.isOpen);\cb1 \
\cb3             isDropdownOpenRef.current = message.data.isOpen;\cb1 \
\
\cb3             \cf7 \cb3 \strokec7 // Clear hover overlays when dropdown opens\cf0 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 if\cf0 \strokec4  (message.data.isOpen) \{\cb1 \
\cb3               clearHoverOverlays();\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\
\cb3         \cf2 \strokec2 default\cf0 \strokec4 :\cb1 \
\cb3           \cf2 \strokec2 break\cf0 \strokec4 ;\cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     window.addEventListener(\cf5 \strokec5 'message'\cf0 \strokec4 , handleMessage);\cb1 \
\cb3     window.addEventListener(\cf5 \strokec5 'scroll'\cf0 \strokec4 , handleScroll, \cf2 \strokec2 true\cf0 \strokec4 ); \cf7 \cb3 \strokec7 // Use capture to catch all scroll events\cf0 \cb1 \strokec4 \
\cb3     document.addEventListener(\cf5 \strokec5 'scroll'\cf0 \strokec4 , handleScroll, \cf2 \strokec2 true\cf0 \strokec4 ); \cf7 \cb3 \strokec7 // Also listen on document\cf0 \cb1 \strokec4 \
\
\cb3     \cf7 \cb3 \strokec7 // Send ready message to parent\cf0 \cb1 \strokec4 \
\cb3     window.parent.postMessage(\{ type: \cf5 \strokec5 'visual-edit-agent-ready'\cf0 \strokec4  \}, \cf5 \strokec5 '*'\cf0 \strokec4 );\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => \{\cb1 \
\cb3       window.removeEventListener(\cf5 \strokec5 'message'\cf0 \strokec4 , handleMessage);\cb1 \
\cb3       window.removeEventListener(\cf5 \strokec5 'scroll'\cf0 \strokec4 , handleScroll, \cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3       document.removeEventListener(\cf5 \strokec5 'scroll'\cf0 \strokec4 , handleScroll, \cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\cb3       document.removeEventListener(\cf5 \strokec5 'mouseover'\cf0 \strokec4 , handleMouseOver);\cb1 \
\cb3       document.removeEventListener(\cf5 \strokec5 'mouseout'\cf0 \strokec4 , handleMouseOut);\cb1 \
\cb3       document.removeEventListener(\cf5 \strokec5 'click'\cf0 \strokec4 , handleElementClick, \cf2 \strokec2 true\cf0 \strokec4 );\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Clean up all overlays\cf0 \cb1 \strokec4 \
\cb3       clearHoverOverlays();\cb1 \
\
\cb3       selectedOverlaysRef.current.forEach(overlay => \{\cb1 \
\cb3         \cf2 \strokec2 if\cf0 \strokec4  (overlay && overlay.parentNode) \{\cb1 \
\cb3           overlay.remove();\cb1 \
\cb3         \}\cb1 \
\cb3       \});\cb1 \
\cb3     \};\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Keep the refs in sync with state changes\cf0 \cb1 \strokec4 \
\cb3   useEffect(() => \{\cb1 \
\cb3     isVisualEditModeRef.current = isVisualEditMode;\cb1 \
\cb3   \}, [isVisualEditMode]);\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     isPopoverDraggingRef.current = isPopoverDragging;\cb1 \
\cb3   \}, [isPopoverDragging]);\cb1 \
\
\cb3   useEffect(() => \{\cb1 \
\cb3     isDropdownOpenRef.current = isDropdownOpen;\cb1 \
\cb3   \}, [isDropdownOpen]);\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // Handle window resize and scroll to reposition overlays\cf0 \cb1 \strokec4 \
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  handleResize = () => \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Reposition selected overlays\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (selectedElementIdRef.current) \{\cb1 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  elements = findElementsById(selectedElementIdRef.current);\cb1 \
\cb3         selectedOverlaysRef.current.forEach((overlay, index) => \{\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (index < elements.length) \{\cb1 \
\cb3             positionOverlay(overlay, elements[index]);\cb1 \
\cb3           \}\cb1 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\
\cb3       \cf7 \cb3 \strokec7 // Reposition hover overlays\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (currentHighlightedElementsRef.current.length > \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ) \{\cb1 \
\cb3         hoverOverlaysRef.current.forEach((overlay, index) => \{\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (index < currentHighlightedElementsRef.current.length) \{\cb1 \
\cb3             positionOverlay(overlay, currentHighlightedElementsRef.current[index]);\cb1 \
\cb3           \}\cb1 \
\cb3         \});\cb1 \
\cb3       \}\cb1 \
\cb3     \};\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Create a mutation observer to detect changes in the DOM\cf0 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  mutationObserver = \cf2 \strokec2 new\cf0 \strokec4  \cf6 \strokec6 MutationObserver\cf0 \strokec4 ((mutations) => \{\cb1 \
\cb3       \cf7 \cb3 \strokec7 // Check if mutations affect relevant elements\cf0 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  needsUpdate = mutations.some(mutation => \{\cb1 \
\cb3         \cf7 \cb3 \strokec7 // Check if the target or its children have data-visual-selector-id\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  hasVisualId = (node) => \{\cb1 \
\cb3           \cf2 \strokec2 if\cf0 \strokec4  (node.nodeType === \cf6 \strokec6 Node\cf0 \strokec4 .\cf6 \strokec6 ELEMENT_NODE\cf0 \strokec4 ) \{\cb1 \
\cb3             \cf2 \strokec2 if\cf0 \strokec4  (node.dataset && node.dataset.visualSelectorId) \{\cb1 \
\cb3               \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 true\cf0 \strokec4 ;\cb1 \
\cb3             \}\cb1 \
\cb3             \cf7 \cb3 \strokec7 // Check children\cf0 \cb1 \strokec4 \
\cb3             \cf2 \strokec2 for\cf0 \strokec4  (\cf2 \strokec2 let\cf0 \strokec4  i = \cf8 \cb3 \strokec8 0\cf0 \cb3 \strokec4 ; i < node.children.length; i++) \{\cb1 \
\cb3               \cf2 \strokec2 if\cf0 \strokec4  (hasVisualId(node.children[i])) \{\cb1 \
\cb3                 \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 true\cf0 \strokec4 ;\cb1 \
\cb3               \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3           \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 false\cf0 \strokec4 ;\cb1 \
\cb3         \};\cb1 \
\
\cb3         \cf7 \cb3 \strokec7 // Check if this is a style or attribute mutation that might affect layout\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 const\cf0 \strokec4  isLayoutChange = mutation.type === \cf5 \strokec5 'attributes'\cf0 \strokec4  &&\cb1 \
\cb3           (mutation.attributeName === \cf5 \strokec5 'style'\cf0 \strokec4  ||\cb1 \
\cb3             mutation.attributeName === \cf5 \strokec5 'class'\cf0 \strokec4  ||\cb1 \
\cb3             mutation.attributeName === \cf5 \strokec5 'width'\cf0 \strokec4  ||\cb1 \
\cb3             mutation.attributeName === \cf5 \strokec5 'height'\cf0 \strokec4 );\cb1 \
\
\cb3         \cf7 \cb3 \strokec7 // Check if target is or contains an element with visual selector ID\cf0 \cb1 \strokec4 \
\cb3         \cf2 \strokec2 return\cf0 \strokec4  isLayoutChange && hasVisualId(mutation.target);\cb1 \
\cb3       \});\cb1 \
\
\cb3       \cf2 \strokec2 if\cf0 \strokec4  (needsUpdate) \{\cb1 \
\cb3         \cf7 \cb3 \strokec7 // Use timeout to let browser calculate layout\cf0 \cb1 \strokec4 \
\cb3         setTimeout(handleResize, \cf8 \cb3 \strokec8 50\cf0 \cb3 \strokec4 );\cb1 \
\cb3       \}\cb1 \
\cb3     \});\cb1 \
\
\cb3     \cf7 \cb3 \strokec7 // Start observing\cf0 \cb1 \strokec4 \
\cb3     mutationObserver.observe(document.body, \{\cb1 \
\cb3       attributes: \cf2 \strokec2 true\cf0 \strokec4 ,\cb1 \
\cb3       childList: \cf2 \strokec2 true\cf0 \strokec4 ,\cb1 \
\cb3       subtree: \cf2 \strokec2 true\cf0 \strokec4 ,\cb1 \
\cb3       attributeFilter: [\cf5 \strokec5 'style'\cf0 \strokec4 , \cf5 \strokec5 'class'\cf0 \strokec4 , \cf5 \strokec5 'width'\cf0 \strokec4 , \cf5 \strokec5 'height'\cf0 \strokec4 ]\cb1 \
\cb3     \});\cb1 \
\
\cb3     window.addEventListener(\cf5 \strokec5 'resize'\cf0 \strokec4 , handleResize);\cb1 \
\cb3     window.addEventListener(\cf5 \strokec5 'scroll'\cf0 \strokec4 , handleResize);\cb1 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => \{\cb1 \
\cb3       window.removeEventListener(\cf5 \strokec5 'resize'\cf0 \strokec4 , handleResize);\cb1 \
\cb3       window.removeEventListener(\cf5 \strokec5 'scroll'\cf0 \strokec4 , handleResize);\cb1 \
\cb3       mutationObserver.disconnect();\cb1 \
\cb3     \};\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf7 \cb3 \strokec7 // No visible UI - all functionality is handled through event listeners and message passing\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
}