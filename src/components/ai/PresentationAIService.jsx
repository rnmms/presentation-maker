{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red144\green1\blue18;\red15\green112\blue1;\red14\green110\blue109;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c63922\c8235\c8235;\cssrgb\c0\c50196\c0;\cssrgb\c0\c50196\c50196;\cssrgb\c3529\c52549\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \{ base44 \} \cf2 \strokec2 from\cf0 \strokec4  \cf5 \strokec5 '@/api/base44Client'\cf0 \strokec4 ;\cb1 \
\
\cf6 \cb3 \strokec6 // ============ DESIGN TOKENS (WCAG AA COMPLIANT) ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf7 \strokec7 DEFAULT_DESIGN_TOKENS\cf0 \strokec4  = \{\cb1 \
\cb3   palette: \{\cb1 \
\cb3     primary: \cf5 \strokec5 '#4f46e5'\cf0 \strokec4 ,\cb1 \
\cb3     secondary: \cf5 \strokec5 '#8b5cf6'\cf0 \strokec4 ,\cb1 \
\cb3     accent: \cf5 \strokec5 '#ec4899'\cf0 \strokec4 ,\cb1 \
\cb3     bg: \cf5 \strokec5 '#ffffff'\cf0 \strokec4 ,\cb1 \
\cb3     text: \cf5 \strokec5 '#1e293b'\cf0 \cb1 \strokec4 \
\cb3   \},\cb1 \
\cb3   contrast: \{ normal_min: \cf5 \strokec5 '4.5:1'\cf0 \strokec4 , large_min: \cf5 \strokec5 '3:1'\cf0 \strokec4  \},\cb1 \
\cb3   typography: \{\cb1 \
\cb3     title_min_pt: \cf8 \strokec8 32\cf0 \strokec4 ,\cb1 \
\cb3     body_min_pt: \cf8 \strokec8 24\cf0 \strokec4 ,\cb1 \
\cb3     families: \{ title: \cf5 \strokec5 'Inter'\cf0 \strokec4 , body: \cf5 \strokec5 'Inter'\cf0 \strokec4 , fallbacks: [\cf5 \strokec5 'system-ui'\cf0 \strokec4 , \cf5 \strokec5 'sans-serif'\cf0 \strokec4 ] \}\cb1 \
\cb3   \},\cb1 \
\cb3   spacing: \{ grid: \cf5 \strokec5 '8pt'\cf0 \strokec4 , gutter: \cf5 \strokec5 '24px'\cf0 \strokec4  \},\cb1 \
\cb3   radii: \cf5 \strokec5 '12px'\cf0 \strokec4 ,\cb1 \
\cb3   shadows: \cf5 \strokec5 'md'\cf0 \strokec4 ,\cb1 \
\cb3   icons: \{ family: \cf5 \strokec5 'outlined'\cf0 \strokec4 , consistency_required: \cf2 \strokec2 true\cf0 \strokec4  \}\cb1 \
\cb3 \};\cb1 \
\
\cf6 \cb3 \strokec6 // ============ SLIDESGO THEME SYSTEM ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 const\cf0 \strokec4  \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4  = \{\cb1 \
\cb3   \cf5 \strokec5 'electric-field-concepts'\cf0 \strokec4 : \{\cb1 \
\cb3     id: \cf5 \strokec5 'electric-field-concepts'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf5 \strokec5 'Electric Field Concepts'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf5 \strokec5 'Education'\cf0 \strokec4 ,\cb1 \
\cb3     tokens: \{\cb1 \
\cb3       palette: \{ primary: \cf5 \strokec5 '#3b82f6'\cf0 \strokec4 , secondary: \cf5 \strokec5 '#60a5fa'\cf0 \strokec4 , accent: \cf5 \strokec5 '#fbbf24'\cf0 \strokec4 , bg: \cf5 \strokec5 '#0f172a'\cf0 \strokec4 , text: \cf5 \strokec5 '#f8fafc'\cf0 \strokec4  \},\cb1 \
\cb3       typography_scale: \{ title: \cf8 \strokec8 42\cf0 \strokec4 , subtitle: \cf8 \strokec8 28\cf0 \strokec4 , body: \cf8 \strokec8 24\cf0 \strokec4 , caption: \cf8 \strokec8 18\cf0 \strokec4  \},\cb1 \
\cb3       spacing: \{ grid: \cf8 \strokec8 8\cf0 \strokec4 , gutter: \cf8 \strokec8 24\cf0 \strokec4 , margin: \cf8 \strokec8 48\cf0 \strokec4  \},\cb1 \
\cb3       radii: \cf5 \strokec5 '16px'\cf0 \strokec4 ,\cb1 \
\cb3       shadows: \cf5 \strokec5 'lg'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     enforcement: \{ strictness: \cf8 \strokec8 0.9\cf0 \strokec4 , lock_geometry: \cf2 \strokec2 true\cf0 \strokec4 , lock_components: \cf2 \strokec2 true\cf0 \strokec4 , lock_icon_family: \cf5 \strokec5 'outlined'\cf0 \strokec4  \},\cb1 \
\cb3     component_recipes: [\cf5 \strokec5 'cover_recipe'\cf0 \strokec4 , \cf5 \strokec5 'section_recipe'\cf0 \strokec4 , \cf5 \strokec5 'statement'\cf0 \strokec4 , \cf5 \strokec5 'two_column'\cf0 \strokec4 , \cf5 \strokec5 'big_number'\cf0 \strokec4 ],\cb1 \
\cb3     chart_table_style: \{ axis: \cf5 \strokec5 'minimal'\cf0 \strokec4 , labels: \cf5 \strokec5 'sentence'\cf0 \strokec4 , ramp: [\cf5 \strokec5 '#3b82f6'\cf0 \strokec4 , \cf5 \strokec5 '#60a5fa'\cf0 \strokec4 , \cf5 \strokec5 '#93c5fd'\cf0 \strokec4 , \cf5 \strokec5 '#fbbf24'\cf0 \strokec4 ], legend: \cf5 \strokec5 'bottom'\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \cf5 \strokec5 'ethereal-aesthetic'\cf0 \strokec4 : \{\cb1 \
\cb3     id: \cf5 \strokec5 'ethereal-aesthetic'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf5 \strokec5 'Ethereal Aesthetic'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf5 \strokec5 'Creative'\cf0 \strokec4 ,\cb1 \
\cb3     tokens: \{\cb1 \
\cb3       palette: \{ primary: \cf5 \strokec5 '#a78bfa'\cf0 \strokec4 , secondary: \cf5 \strokec5 '#ec4899'\cf0 \strokec4 , accent: \cf5 \strokec5 '#f472b6'\cf0 \strokec4 , bg: \cf5 \strokec5 '#faf5ff'\cf0 \strokec4 , text: \cf5 \strokec5 '#1e1b4b'\cf0 \strokec4  \},\cb1 \
\cb3       typography_scale: \{ title: \cf8 \strokec8 40\cf0 \strokec4 , subtitle: \cf8 \strokec8 26\cf0 \strokec4 , body: \cf8 \strokec8 22\cf0 \strokec4 , caption: \cf8 \strokec8 16\cf0 \strokec4  \},\cb1 \
\cb3       spacing: \{ grid: \cf8 \strokec8 8\cf0 \strokec4 , gutter: \cf8 \strokec8 20\cf0 \strokec4 , margin: \cf8 \strokec8 40\cf0 \strokec4  \},\cb1 \
\cb3       radii: \cf5 \strokec5 '24px'\cf0 \strokec4 ,\cb1 \
\cb3       shadows: \cf5 \strokec5 'xl'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     enforcement: \{ strictness: \cf8 \strokec8 0.85\cf0 \strokec4 , lock_geometry: \cf2 \strokec2 true\cf0 \strokec4 , lock_components: \cf2 \strokec2 true\cf0 \strokec4 , lock_icon_family: \cf5 \strokec5 'rounded'\cf0 \strokec4  \},\cb1 \
\cb3     component_recipes: [\cf5 \strokec5 'cover_recipe'\cf0 \strokec4 , \cf5 \strokec5 'gallery'\cf0 \strokec4 , \cf5 \strokec5 'quote'\cf0 \strokec4 , \cf5 \strokec5 'two_column'\cf0 \strokec4 , \cf5 \strokec5 'statement'\cf0 \strokec4 ],\cb1 \
\cb3     chart_table_style: \{ axis: \cf5 \strokec5 'clean'\cf0 \strokec4 , labels: \cf5 \strokec5 'lowercase'\cf0 \strokec4 , ramp: [\cf5 \strokec5 '#a78bfa'\cf0 \strokec4 , \cf5 \strokec5 '#ec4899'\cf0 \strokec4 , \cf5 \strokec5 '#f472b6'\cf0 \strokec4 , \cf5 \strokec5 '#c4b5fd'\cf0 \strokec4 ], legend: \cf5 \strokec5 'right'\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \cf5 \strokec5 'startup-pitch-deck'\cf0 \strokec4 : \{\cb1 \
\cb3     id: \cf5 \strokec5 'startup-pitch-deck'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf5 \strokec5 'Startup Pitch Deck'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf5 \strokec5 'Business'\cf0 \strokec4 ,\cb1 \
\cb3     tokens: \{\cb1 \
\cb3       palette: \{ primary: \cf5 \strokec5 '#0284c7'\cf0 \strokec4 , secondary: \cf5 \strokec5 '#06b6d4'\cf0 \strokec4 , accent: \cf5 \strokec5 '#22d3ee'\cf0 \strokec4 , bg: \cf5 \strokec5 '#f0f9ff'\cf0 \strokec4 , text: \cf5 \strokec5 '#0c4a6e'\cf0 \strokec4  \},\cb1 \
\cb3       typography_scale: \{ title: \cf8 \strokec8 44\cf0 \strokec4 , subtitle: \cf8 \strokec8 30\cf0 \strokec4 , body: \cf8 \strokec8 24\cf0 \strokec4 , caption: \cf8 \strokec8 18\cf0 \strokec4  \},\cb1 \
\cb3       spacing: \{ grid: \cf8 \strokec8 8\cf0 \strokec4 , gutter: \cf8 \strokec8 24\cf0 \strokec4 , margin: \cf8 \strokec8 56\cf0 \strokec4  \},\cb1 \
\cb3       radii: \cf5 \strokec5 '8px'\cf0 \strokec4 ,\cb1 \
\cb3       shadows: \cf5 \strokec5 'md'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     enforcement: \{ strictness: \cf8 \strokec8 0.9\cf0 \strokec4 , lock_geometry: \cf2 \strokec2 true\cf0 \strokec4 , lock_components: \cf2 \strokec2 true\cf0 \strokec4 , lock_icon_family: \cf5 \strokec5 'outlined'\cf0 \strokec4  \},\cb1 \
\cb3     component_recipes: [\cf5 \strokec5 'cover_recipe'\cf0 \strokec4 , \cf5 \strokec5 'section_recipe'\cf0 \strokec4 , \cf5 \strokec5 'big_number'\cf0 \strokec4 , \cf5 \strokec5 'timeline'\cf0 \strokec4 , \cf5 \strokec5 'process'\cf0 \strokec4 , \cf5 \strokec5 'two_column'\cf0 \strokec4 ],\cb1 \
\cb3     chart_table_style: \{ axis: \cf5 \strokec5 'bold'\cf0 \strokec4 , labels: \cf5 \strokec5 'uppercase'\cf0 \strokec4 , ramp: [\cf5 \strokec5 '#0284c7'\cf0 \strokec4 , \cf5 \strokec5 '#06b6d4'\cf0 \strokec4 , \cf5 \strokec5 '#22d3ee'\cf0 \strokec4 , \cf5 \strokec5 '#67e8f9'\cf0 \strokec4 ], legend: \cf5 \strokec5 'top'\cf0 \strokec4  \}\cb1 \
\cb3   \},\cb1 \
\cb3   \cf5 \strokec5 'ai-automation'\cf0 \strokec4 : \{\cb1 \
\cb3     id: \cf5 \strokec5 'ai-automation'\cf0 \strokec4 ,\cb1 \
\cb3     name: \cf5 \strokec5 'AI Automation'\cf0 \strokec4 ,\cb1 \
\cb3     category: \cf5 \strokec5 'Technology'\cf0 \strokec4 ,\cb1 \
\cb3     tokens: \{\cb1 \
\cb3       palette: \{ primary: \cf5 \strokec5 '#7c3aed'\cf0 \strokec4 , secondary: \cf5 \strokec5 '#8b5cf6'\cf0 \strokec4 , accent: \cf5 \strokec5 '#a78bfa'\cf0 \strokec4 , bg: \cf5 \strokec5 '#faf5ff'\cf0 \strokec4 , text: \cf5 \strokec5 '#2e1065'\cf0 \strokec4  \},\cb1 \
\cb3       typography_scale: \{ title: \cf8 \strokec8 42\cf0 \strokec4 , subtitle: \cf8 \strokec8 28\cf0 \strokec4 , body: \cf8 \strokec8 24\cf0 \strokec4 , caption: \cf8 \strokec8 18\cf0 \strokec4  \},\cb1 \
\cb3       spacing: \{ grid: \cf8 \strokec8 8\cf0 \strokec4 , gutter: \cf8 \strokec8 24\cf0 \strokec4 , margin: \cf8 \strokec8 48\cf0 \strokec4  \},\cb1 \
\cb3       radii: \cf5 \strokec5 '16px'\cf0 \strokec4 ,\cb1 \
\cb3       shadows: \cf5 \strokec5 'lg'\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     enforcement: \{ strictness: \cf8 \strokec8 0.9\cf0 \strokec4 , lock_geometry: \cf2 \strokec2 true\cf0 \strokec4 , lock_components: \cf2 \strokec2 true\cf0 \strokec4 , lock_icon_family: \cf5 \strokec5 'outlined'\cf0 \strokec4  \},\cb1 \
\cb3     component_recipes: [\cf5 \strokec5 'cover_recipe'\cf0 \strokec4 , \cf5 \strokec5 'section_recipe'\cf0 \strokec4 , \cf5 \strokec5 'statement'\cf0 \strokec4 , \cf5 \strokec5 'two_column'\cf0 \strokec4 , \cf5 \strokec5 'matrix'\cf0 \strokec4 , \cf5 \strokec5 'process'\cf0 \strokec4 ],\cb1 \
\cb3     chart_table_style: \{ axis: \cf5 \strokec5 'minimal'\cf0 \strokec4 , labels: \cf5 \strokec5 'sentence'\cf0 \strokec4 , ramp: [\cf5 \strokec5 '#7c3aed'\cf0 \strokec4 , \cf5 \strokec5 '#8b5cf6'\cf0 \strokec4 , \cf5 \strokec5 '#a78bfa'\cf0 \strokec4 , \cf5 \strokec5 '#c4b5fd'\cf0 \strokec4 ], legend: \cf5 \strokec5 'bottom'\cf0 \strokec4  \}\cb1 \
\cb3   \}\cb1 \
\cb3 \};\cb1 \
\
\cf6 \cb3 \strokec6 // ============ STYLE REFERENCES (Backgrounds) ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 const\cf0 \strokec4  \cf7 \strokec7 STYLE_REFERENCES\cf0 \strokec4  = \{\cb1 \
\cb3   reference_template_id: \cf5 \strokec5 "slidesgo-reference"\cf0 \strokec4 ,\cb1 \
\cb3   similarity: \{ strictness: \cf8 \strokec8 0.9\cf0 \strokec4  \},\cb1 \
\cb3   style_lock: \{\cb1 \
\cb3     tokens: [\cf5 \strokec5 "palette"\cf0 \strokec4 , \cf5 \strokec5 "typography_scale"\cf0 \strokec4 , \cf5 \strokec5 "spacing"\cf0 \strokec4 , \cf5 \strokec5 "radii"\cf0 \strokec4 , \cf5 \strokec5 "shadows"\cf0 \strokec4 ],\cb1 \
\cb3     icon_family: \cf5 \strokec5 "outlined"\cf0 \strokec4 ,\cb1 \
\cb3     image_treatment: \{ duotone: \cf2 \strokec2 false\cf0 \strokec4 , grain: \cf2 \strokec2 false\cf0 \strokec4 , saturation: \cf5 \strokec5 "neutral"\cf0 \strokec4  \},\cb1 \
\cb3     layout_patterns: [\cf5 \strokec5 "cover"\cf0 \strokec4 , \cf5 \strokec5 "section"\cf0 \strokec4 , \cf5 \strokec5 "statement"\cf0 \strokec4 , \cf5 \strokec5 "two_column"\cf0 \strokec4 , \cf5 \strokec5 "big_number"\cf0 \strokec4 ]\cb1 \
\cb3   \},\cb1 \
\cb3   backgrounds: [\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf5 \strokec5 "bg_01"\cf0 \strokec4 ,\cb1 \
\cb3       src: \cf5 \strokec5 "https://i.ibb.co/rfsW0JJW/1ee5abd0-4e92-43ec-a7c5-386c1714a611.png"\cf0 \strokec4 ,\cb1 \
\cb3       allowed_usage: [\cf5 \strokec5 "cover"\cf0 \strokec4 , \cf5 \strokec5 "section"\cf0 \strokec4 , \cf5 \strokec5 "content"\cf0 \strokec4 ],\cb1 \
\cb3       overlay_hint: \{ type: \cf5 \strokec5 "linear"\cf0 \strokec4 , strength_range: [\cf8 \strokec8 0.35\cf0 \strokec4 , \cf8 \strokec8 0.65\cf0 \strokec4 ] \},\cb1 \
\cb3       preferred_text_color: \cf5 \strokec5 "light"\cf0 \strokec4 ,\cb1 \
\cb3       safe_zones: [\{ x: \cf8 \strokec8 0.08\cf0 \strokec4 , y: \cf8 \strokec8 0.12\cf0 \strokec4 , w: \cf8 \strokec8 0.84\cf0 \strokec4 , h: \cf8 \strokec8 0.30\cf0 \strokec4  \}]\cb1 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf5 \strokec5 "bg_02"\cf0 \strokec4 ,\cb1 \
\cb3       src: \cf5 \strokec5 "https://i.ibb.co/C5fFZLGR/40e42dde-6573-4ab9-b6a3-bbd8c8164a72.png"\cf0 \strokec4 ,\cb1 \
\cb3       allowed_usage: [\cf5 \strokec5 "section"\cf0 \strokec4 , \cf5 \strokec5 "content"\cf0 \strokec4 , \cf5 \strokec5 "cover"\cf0 \strokec4 ],\cb1 \
\cb3       overlay_hint: \{ type: \cf5 \strokec5 "solid"\cf0 \strokec4 , strength_range: [\cf8 \strokec8 0.25\cf0 \strokec4 , \cf8 \strokec8 0.55\cf0 \strokec4 ] \},\cb1 \
\cb3       preferred_text_color: \cf5 \strokec5 "light"\cf0 \strokec4 ,\cb1 \
\cb3       safe_zones: [\{ x: \cf8 \strokec8 0.10\cf0 \strokec4 , y: \cf8 \strokec8 0.15\cf0 \strokec4 , w: \cf8 \strokec8 0.80\cf0 \strokec4 , h: \cf8 \strokec8 0.28\cf0 \strokec4  \}]\cb1 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf5 \strokec5 "bg_03"\cf0 \strokec4 ,\cb1 \
\cb3       src: \cf5 \strokec5 "https://i.ibb.co/jxFQWCL/35e5abc9-3db6-4c6b-ab27-17660954f44c.png"\cf0 \strokec4 ,\cb1 \
\cb3       allowed_usage: [\cf5 \strokec5 "section"\cf0 \strokec4 , \cf5 \strokec5 "content"\cf0 \strokec4 ],\cb1 \
\cb3       overlay_hint: \{ type: \cf5 \strokec5 "linear"\cf0 \strokec4 , strength_range: [\cf8 \strokec8 0.30\cf0 \strokec4 , \cf8 \strokec8 0.60\cf0 \strokec4 ] \},\cb1 \
\cb3       preferred_text_color: \cf5 \strokec5 "light"\cf0 \strokec4 ,\cb1 \
\cb3       safe_zones: [\{ x: \cf8 \strokec8 0.08\cf0 \strokec4 , y: \cf8 \strokec8 0.12\cf0 \strokec4 , w: \cf8 \strokec8 0.84\cf0 \strokec4 , h: \cf8 \strokec8 0.30\cf0 \strokec4  \}]\cb1 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf5 \strokec5 "bg_04"\cf0 \strokec4 ,\cb1 \
\cb3       src: \cf5 \strokec5 "https://i.ibb.co/tw0FX8Rp/08c76e42-b43e-4491-b6ac-9dcb65606b99.png"\cf0 \strokec4 ,\cb1 \
\cb3       allowed_usage: [\cf5 \strokec5 "content"\cf0 \strokec4 , \cf5 \strokec5 "section"\cf0 \strokec4 ],\cb1 \
\cb3       overlay_hint: \{ type: \cf5 \strokec5 "linear"\cf0 \strokec4 , strength_range: [\cf8 \strokec8 0.25\cf0 \strokec4 , \cf8 \strokec8 0.55\cf0 \strokec4 ] \},\cb1 \
\cb3       preferred_text_color: \cf5 \strokec5 "light"\cf0 \strokec4 ,\cb1 \
\cb3       safe_zones: [\{ x: \cf8 \strokec8 0.10\cf0 \strokec4 , y: \cf8 \strokec8 0.10\cf0 \strokec4 , w: \cf8 \strokec8 0.80\cf0 \strokec4 , h: \cf8 \strokec8 0.32\cf0 \strokec4  \}]\cb1 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf5 \strokec5 "bg_05"\cf0 \strokec4 ,\cb1 \
\cb3       src: \cf5 \strokec5 "https://i.ibb.co/p6hFYk11/5f42b4be-bd51-4e13-8d4e-8045d7e16e96.png"\cf0 \strokec4 ,\cb1 \
\cb3       allowed_usage: [\cf5 \strokec5 "content"\cf0 \strokec4 , \cf5 \strokec5 "section"\cf0 \strokec4 ],\cb1 \
\cb3       overlay_hint: \{ type: \cf5 \strokec5 "solid"\cf0 \strokec4 , strength_range: [\cf8 \strokec8 0.20\cf0 \strokec4 , \cf8 \strokec8 0.50\cf0 \strokec4 ] \},\cb1 \
\cb3       preferred_text_color: \cf5 \strokec5 "light"\cf0 \strokec4 ,\cb1 \
\cb3       safe_zones: [\{ x: \cf8 \strokec8 0.08\cf0 \strokec4 , y: \cf8 \strokec8 0.12\cf0 \strokec4 , w: \cf8 \strokec8 0.84\cf0 \strokec4 , h: \cf8 \strokec8 0.30\cf0 \strokec4  \}]\cb1 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf5 \strokec5 "bg_06"\cf0 \strokec4 ,\cb1 \
\cb3       src: \cf5 \strokec5 "https://i.ibb.co/PvxqgV4X/3b9a766e-cfd8-4a92-b5d8-7c8a549f3c2b.png"\cf0 \strokec4 ,\cb1 \
\cb3       allowed_usage: [\cf5 \strokec5 "cover"\cf0 \strokec4 , \cf5 \strokec5 "section"\cf0 \strokec4 , \cf5 \strokec5 "content"\cf0 \strokec4 ],\cb1 \
\cb3       overlay_hint: \{ type: \cf5 \strokec5 "linear"\cf0 \strokec4 , strength_range: [\cf8 \strokec8 0.35\cf0 \strokec4 , \cf8 \strokec8 0.65\cf0 \strokec4 ] \},\cb1 \
\cb3       preferred_text_color: \cf5 \strokec5 "light"\cf0 \strokec4 ,\cb1 \
\cb3       safe_zones: [\{ x: \cf8 \strokec8 0.08\cf0 \strokec4 , y: \cf8 \strokec8 0.14\cf0 \strokec4 , w: \cf8 \strokec8 0.84\cf0 \strokec4 , h: \cf8 \strokec8 0.28\cf0 \strokec4  \}]\cb1 \
\cb3     \}\cb1 \
\cb3   ],\cb1 \
\cb3   per_slide_background: [\cb1 \
\cb3     \{ slide_idx: \cf8 \strokec8 1\cf0 \strokec4 , bg_id: \cf5 \strokec5 "bg_01"\cf0 \strokec4  \},\cb1 \
\cb3     \{ slide_idx: \cf8 \strokec8 2\cf0 \strokec4 , bg_id: \cf5 \strokec5 "bg_02"\cf0 \strokec4  \},\cb1 \
\cb3     \{ slide_idx: \cf8 \strokec8 3\cf0 \strokec4 , bg_id: \cf5 \strokec5 "bg_03"\cf0 \strokec4  \},\cb1 \
\cb3     \{ slide_idx: \cf8 \strokec8 4\cf0 \strokec4 , bg_id: \cf5 \strokec5 "bg_04"\cf0 \strokec4  \},\cb1 \
\cb3     \{ slide_idx: \cf8 \strokec8 5\cf0 \strokec4 , bg_id: \cf5 \strokec5 "bg_05"\cf0 \strokec4  \},\cb1 \
\cb3     \{ slide_idx: \cf8 \strokec8 6\cf0 \strokec4 , bg_id: \cf5 \strokec5 "bg_06"\cf0 \strokec4  \}\cb1 \
\cb3   ]\cb1 \
\cb3 \};\cb1 \
\
\cf6 \cb3 \strokec6 // ============ GOAL STRUCTURES ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf7 \strokec7 GOAL_STRUCTURES\cf0 \strokec4  = \{\cb1 \
\cb3   inform: \cf5 \strokec5 '40% data/visuals, 40% brief explanations, 20% summary/next steps'\cf0 \strokec4 ,\cb1 \
\cb3   persuade: \cf5 \strokec5 'Problem \uc0\u8594  Opportunity \u8594  Solution \u8594  Proof/Evidence \u8594  Call to Action'\cf0 \strokec4 ,\cb1 \
\cb3   pitch: \cf5 \strokec5 'Problem \uc0\u8594  Opportunity \u8594  Solution \u8594  Proof/Evidence \u8594  Call to Action'\cf0 \strokec4 ,\cb1 \
\cb3   teach: \cf5 \strokec5 'Concept introduction \uc0\u8594  Example \u8594  Practice/Application \u8594  Recap'\cf0 \cb1 \strokec4 \
\cb3 \};\cb1 \
\
\cf6 \cb3 \strokec6 // ============ COMPONENT RECIPES ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 const\cf0 \strokec4  \cf7 \strokec7 COMPONENT_RECIPES\cf0 \strokec4  = \{\cb1 \
\cb3   cover_recipe: \{ layout: \cf5 \strokec5 'title-only'\cf0 \strokec4 , max_words: \cf8 \strokec8 20\cf0 \strokec4 , has_visual: \cf2 \strokec2 true\cf0 \strokec4 , visual_position: \cf5 \strokec5 'background'\cf0 \strokec4  \},\cb1 \
\cb3   section_recipe: \{ layout: \cf5 \strokec5 'title-only'\cf0 \strokec4 , max_words: \cf8 \strokec8 15\cf0 \strokec4 , has_visual: \cf2 \strokec2 false\cf0 \strokec4  \},\cb1 \
\cb3   statement: \{ layout: \cf5 \strokec5 'title-only'\cf0 \strokec4 , max_words: \cf8 \strokec8 25\cf0 \strokec4 , has_visual: \cf2 \strokec2 true\cf0 \strokec4 , visual_position: \cf5 \strokec5 'accent'\cf0 \strokec4  \},\cb1 \
\cb3   two_column: \{ layout: \cf5 \strokec5 'two-column'\cf0 \strokec4 , max_words: \cf8 \strokec8 50\cf0 \strokec4 , has_visual: \cf2 \strokec2 true\cf0 \strokec4 , visual_position: \cf5 \strokec5 'right'\cf0 \strokec4  \},\cb1 \
\cb3   gallery: \{ layout: \cf5 \strokec5 'three-column'\cf0 \strokec4 , max_words: \cf8 \strokec8 30\cf0 \strokec4 , has_visual: \cf2 \strokec2 true\cf0 \strokec4 , visual_position: \cf5 \strokec5 'grid'\cf0 \strokec4  \},\cb1 \
\cb3   big_number: \{ layout: \cf5 \strokec5 'title-content'\cf0 \strokec4 , max_words: \cf8 \strokec8 20\cf0 \strokec4 , has_visual: \cf2 \strokec2 false\cf0 \strokec4 , emphasis: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3   timeline: \{ layout: \cf5 \strokec5 'content-only'\cf0 \strokec4 , max_words: \cf8 \strokec8 60\cf0 \strokec4 , has_visual: \cf2 \strokec2 true\cf0 \strokec4 , visual_position: \cf5 \strokec5 'inline'\cf0 \strokec4  \},\cb1 \
\cb3   process: \{ layout: \cf5 \strokec5 'three-column'\cf0 \strokec4 , max_words: \cf8 \strokec8 45\cf0 \strokec4 , has_visual: \cf2 \strokec2 true\cf0 \strokec4 , visual_position: \cf5 \strokec5 'icons'\cf0 \strokec4  \},\cb1 \
\cb3   matrix: \{ layout: \cf5 \strokec5 'two-column'\cf0 \strokec4 , max_words: \cf8 \strokec8 40\cf0 \strokec4 , has_visual: \cf2 \strokec2 true\cf0 \strokec4 , visual_position: \cf5 \strokec5 'grid'\cf0 \strokec4  \},\cb1 \
\cb3   quote: \{ layout: \cf5 \strokec5 'title-only'\cf0 \strokec4 , max_words: \cf8 \strokec8 35\cf0 \strokec4 , has_visual: \cf2 \strokec2 false\cf0 \strokec4 , emphasis: \cf5 \strokec5 'quote'\cf0 \strokec4  \}\cb1 \
\cb3 \};\cb1 \
\
\cf6 \cb3 \strokec6 // ============ HELPER: GET BACKGROUND FOR SLIDE ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 const\cf0 \strokec4  getBackgroundForSlide = (slideIndex, slideType = \cf5 \strokec5 'content'\cf0 \strokec4 ) => \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  backgrounds = \cf7 \strokec7 STYLE_REFERENCES\cf0 \strokec4 .backgrounds;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  mapping = \cf7 \strokec7 STYLE_REFERENCES\cf0 \strokec4 .per_slide_background;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  specificMapping = mapping.find(m => m.slide_idx === slideIndex + \cf8 \strokec8 1\cf0 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (specificMapping) \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  bg = backgrounds.find(b => b.id === specificMapping.bg_id);\cb1 \
\cb3     \cf2 \strokec2 if\cf0 \strokec4  (bg) \cf2 \strokec2 return\cf0 \strokec4  bg;\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  usageType = slideType === \cf5 \strokec5 'cover'\cf0 \strokec4  ? \cf5 \strokec5 'cover'\cf0 \strokec4  : slideType === \cf5 \strokec5 'section'\cf0 \strokec4  ? \cf5 \strokec5 'section'\cf0 \strokec4  : \cf5 \strokec5 'content'\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  suitable = backgrounds.filter(b => b.allowed_usage.includes(usageType));\cb1 \
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (suitable.length > \cf8 \strokec8 0\cf0 \strokec4 ) \cf2 \strokec2 return\cf0 \strokec4  suitable[slideIndex % suitable.length];\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  backgrounds[slideIndex % backgrounds.length];\cb1 \
\cb3 \};\cb1 \
\
\cf6 \cb3 \strokec6 // ============ HELPER: GET THEME ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 const\cf0 \strokec4  getTheme = (themeId) => \{\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [themeId] || \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3 \};\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: CHOOSE TEMPLATE ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  chooseTemplate(\{ brief, catalogThemes = \cf7 \strokec7 Object\cf0 \strokec4 .keys(\cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 ) \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `You are ranking presentation templates for this brief.\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 BRIEF:\cf0 \cb1 \strokec4 \
\cb3 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(brief)\}\cb1 \
\
\cf5 \cb3 \strokec5 AVAILABLE THEMES:\cf0 \cb1 \strokec4 \
\cb3 $\{catalogThemes.map(id => \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [id];\cb1 \
\cb3   \cf2 \strokec2 return\cf0 \strokec4  theme ? \cf5 \strokec5 `- \cf0 \strokec4 $\{id\}\cf5 \strokec5 : \cf0 \strokec4 $\{theme.name\}\cf5 \strokec5  (\cf0 \strokec4 $\{theme.category\}\cf5 \strokec5 ) - Recipes: \cf0 \strokec4 $\{theme.component_recipes.join(\cf5 \strokec5 ', '\cf0 \strokec4 )\}\cf5 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \
\cb3 \}).join(\cf5 \strokec5 '\\n'\cf0 \strokec4 )\}\cb1 \
\
\cf5 \cb3 \strokec5 Rank 3-6 themes by:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 1. Legibility & AA compliance potential\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 2. Tone/audience fit\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 3. Data visualization support\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 4. Visual appeal for content type\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 For each, assign badges: "Accessible AA", "Data-friendly", "Brand-faithful", "Visual-first"`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         theme_ranking: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               theme_id: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               score: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3               badges: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3               why: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: GENERATE DECK (Theme-First) ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  generateDeck(\{\cb1 \
\cb3   topic,\cb1 \
\cb3   goal,\cb1 \
\cb3   audience,\cb1 \
\cb3   tone,\cb1 \
\cb3   slidesCount,\cb1 \
\cb3   templateId,\cb1 \
\cb3   templateName,\cb1 \
\cb3   themeId = \cf2 \strokec2 null\cf0 \strokec4 ,\cb1 \
\cb3   brandKit = \cf2 \strokec2 null\cf0 \strokec4 ,\cb1 \
\cb3   language = \cf5 \strokec5 'en'\cf0 \strokec4 ,\cb1 \
\cb3   aspectRatio = \cf5 \strokec5 '16:9'\cf0 \cb1 \strokec4 \
\cb3 \}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = themeId ? \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [themeId] : \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  structureGuide = \cf7 \strokec7 GOAL_STRUCTURES\cf0 \strokec4 [goal.toLowerCase()] || \cf7 \strokec7 GOAL_STRUCTURES\cf0 \strokec4 .inform;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  themeContext = theme ? \cf5 \strokec5 `\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 THEME (MUST FOLLOW):\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - ID: \cf0 \strokec4 $\{theme.id\}\cb1 \
\cf5 \cb3 \strokec5 - Tokens: \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(theme.tokens)\}\cb1 \
\cf5 \cb3 \strokec5 - Component Recipes: \cf0 \strokec4 $\{theme.component_recipes.join(\cf5 \strokec5 ', '\cf0 \strokec4 )\}\cb1 \
\cf5 \cb3 \strokec5 - Chart Style: \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(theme.chart_table_style)\}\cb1 \
\cf5 \cb3 \strokec5 - Enforcement: strictness=\cf0 \strokec4 $\{theme.enforcement.strictness\}\cf5 \strokec5 , lock_geometry=\cf0 \strokec4 $\{theme.enforcement.lock_geometry\}\cb1 \
\cf5 \cb3 \strokec5 - Icon Family: \cf0 \strokec4 $\{theme.enforcement.lock_icon_family\}\cb1 \
\
\cf5 \cb3 \strokec5 YOU MUST use these component_recipes for slides:\cf0 \cb1 \strokec4 \
\cb3 $\{theme.component_recipes.map(r => \cf5 \strokec5 `- \cf0 \strokec4 $\{r\}\cf5 \strokec5 : \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(\cf7 \strokec7 COMPONENT_RECIPES\cf0 \strokec4 [r])\}\cf5 \strokec5 `\cf0 \strokec4 ).join(\cf5 \strokec5 '\\n'\cf0 \strokec4 )\}\cb1 \
\cf5 \cb3 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `You are an expert presentation designer creating a \cf0 \strokec4 $\{goal\}\cf5 \strokec5  presentation.\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 BRIEF:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Topic: \cf0 \strokec4 $\{topic\}\cb1 \
\cf5 \cb3 \strokec5 - Goal: \cf0 \strokec4 $\{goal\}\cb1 \
\cf5 \cb3 \strokec5 - Audience: \cf0 \strokec4 $\{audience\}\cb1 \
\cf5 \cb3 \strokec5 - Tone: \cf0 \strokec4 $\{tone\}\cb1 \
\cf5 \cb3 \strokec5 - Slides: \cf0 \strokec4 $\{slidesCount\}\cb1 \
\cf5 \cb3 \strokec5 - Template: \cf0 \strokec4 $\{templateName || \cf5 \strokec5 'Default'\cf0 \strokec4 \}\cb1 \
\cf5 \cb3 \strokec5 - Language: \cf0 \strokec4 $\{language\}\cb1 \
\cf5 \cb3 \strokec5 - Aspect Ratio: \cf0 \strokec4 $\{aspectRatio\}\cb1 \
\cb3 $\{themeContext\}\cb1 \
\
\cf5 \cb3 \strokec5 NON-NEGOTIABLE DESIGN PRINCIPLES:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 1. ONE IDEA PER SLIDE: Title is an ASSERTION (\uc0\u8804 12 words), not a label\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 2. DENSITY: \uc0\u8804 50 words per slide (excl. speaker_notes). Overflow \u8594  notes or split\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 3. BULLETS: Max 3 per slide, each \uc0\u8804 12 words, strong action verbs\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 4. ACCESSIBILITY (WCAG AA): Contrast \uc0\u8805 4.5:1 normal, \u8805 3:1 large; body \u8805 24pt; title \u8805 32pt\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 5. VISUAL-FIRST: Every slide should work with a visual\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 STRUCTURE FOR \cf0 \strokec4 $\{goal.toUpperCase()\}\cf5 \strokec5 :\cf0 \cb1 \strokec4 \
\cb3 $\{structureGuide\}\cb1 \
\
\cf5 \cb3 \strokec5 COMPONENT RECIPE ASSIGNMENT:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Slide 1: cover_recipe (title + visual bg)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Section dividers: section_recipe\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Data slides: big_number or chart\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Comparisons: two_column\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Features/steps: process or gallery\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Final slide: statement or thankyou\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 For EACH slide provide:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - slide_number, id (s-01, s-02...)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - type: cover|section|content|chart|quote|big_number|timeline|process|thankyou\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - component_recipe: Which recipe from theme\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - title_assertion: Assertion-style (\uc0\u8804 12 words)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - bullets: Array (max 3, each \uc0\u8804 12 words)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - visual: \{ kind: "chart|image|icon_set|none", query: "search term", chart: \{...\} if applicable \}\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - background_ref: bg_id or null\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - background_overlay: 0.0-1.0\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - speaker_notes: Extended context\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - accessibility: \{ contrast_ok, font_ok, alt_text_ok, reading_order_ok \}`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         deck_meta: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             title: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             theme_id: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             slides_count: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         slides: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               slide_number: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3               id: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               type: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               component_recipe: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               title: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               content: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3               layout: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               visual: \{\cb1 \
\cb3                 type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3                 properties: \{\cb1 \
\cb3                   kind: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3                   query: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3                 \}\cb1 \
\cb3               \},\cb1 \
\cb3               background_ref: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               background_overlay: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3               speaker_notes: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         design_QA: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             score_0_to_100: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3             critical: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3             warnings: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3             autofixes: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: ENHANCE SLIDE ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  enhanceSlide(slide, context = \{\}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = context.themeId ? \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [context.themeId] : \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `You are refining a presentation slide for maximum impact and clarity.\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 CURRENT SLIDE:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Title: \cf0 \strokec4 $\{slide.title\}\cb1 \
\cf5 \cb3 \strokec5 - Content: \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(slide.content)\}\cb1 \
\cf5 \cb3 \strokec5 - Layout: \cf0 \strokec4 $\{slide.layout\}\cb1 \
\cf5 \cb3 \strokec5 - Component Recipe: \cf0 \strokec4 $\{slide.component_recipe || \cf5 \strokec5 'unknown'\cf0 \strokec4 \}\cb1 \
\cf5 \cb3 \strokec5 - Notes: \cf0 \strokec4 $\{slide.speaker_notes || \cf5 \strokec5 'None'\cf0 \strokec4 \}\cb1 \
\cb3 $\{theme ? \cf5 \strokec5 `\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 THEME CONSTRAINTS (MUST MAINTAIN):\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Grid locked: \cf0 \strokec4 $\{theme.enforcement.lock_geometry\}\cb1 \
\cf5 \cb3 \strokec5 - Component recipe: Keep \cf0 \strokec4 $\{slide.component_recipe || \cf5 \strokec5 'current'\cf0 \strokec4 \}\cb1 \
\cf5 \cb3 \strokec5 - Icon family: \cf0 \strokec4 $\{theme.enforcement.lock_icon_family\}\cb1 \
\cf5 \cb3 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 ENHANCEMENT RULES:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 1. Rewrite title as a clear ASSERTION (\uc0\u8804 12 words)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 2. Maximum 3 bullet points, each \uc0\u8804 12 words\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 3. Use strong action verbs at the start of bullets\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 4. If content exceeds 50 words, move overflow to speaker_notes\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 5. Maintain the component_recipe and grid (don't change layout type)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 6. If slide is too dense, propose splitting into two slides\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 7. Ensure WCAG AA compliance (contrast, font sizes)\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Return the enhanced slide.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         revised_slide: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             title: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             content: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3             layout: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             speaker_notes: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             visual_query: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         optional_split_slide: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             title: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             content: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3             layout: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         \cf7 \strokec7 QA\cf0 \strokec4 : \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3         density_score: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: SUGGEST VISUALS ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  suggestVisuals(slide, style = \{\}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = style.themeId ? \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [style.themeId] : \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `Suggest visuals for this presentation slide.\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 SLIDE:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Title: \cf0 \strokec4 $\{slide.title\}\cb1 \
\cf5 \cb3 \strokec5 - Content: \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(slide.content)\}\cb1 \
\cf5 \cb3 \strokec5 - Layout: \cf0 \strokec4 $\{slide.layout\}\cb1 \
\cf5 \cb3 \strokec5 - Component Recipe: \cf0 \strokec4 $\{slide.component_recipe || \cf5 \strokec5 'unknown'\cf0 \strokec4 \}\cb1 \
\cb3 $\{theme ? \cf5 \strokec5 `\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 THEME CONSTRAINTS:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Icon family: \cf0 \strokec4 $\{theme.enforcement.lock_icon_family\}\cb1 \
\cf5 \cb3 \strokec5 - Image treatment: Neutral saturation, no duotone\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Shapes/masks: Use theme masks\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 STYLE PREFERENCES:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Icon family: \cf0 \strokec4 $\{style.iconFamily || theme?.enforcement?.lock_icon_family || \cf5 \strokec5 'outlined'\cf0 \strokec4 \}\cb1 \
\cf5 \cb3 \strokec5 - Image style: \cf0 \strokec4 $\{style.imageStyle || \cf5 \strokec5 'photography'\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 Provide 3-5 options for each category:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 1. IMAGE OPTIONS: With composition hints (full|left|right|background) and mask suggestions\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 2. ICON OPTIONS: Matching theme icon family\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 3. ILLUSTRATION STYLE: Recommended visual approach\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 For each include: query, composition, mask (theme_mask|none), alt_text, why`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         image_options: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               query: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               composition: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               mask: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               overlay: \{ type: \cf5 \strokec5 'boolean'\cf0 \strokec4  \},\cb1 \
\cb3               alt_text: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               why: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         icon_options: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               query: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               family: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               why: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         illustration_style: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3         recommended_approach: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: CHART ASSISTANT ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  chartAssistant(dataDescription, intention = \cf5 \strokec5 'compare'\cf0 \strokec4 , themeId = \cf2 \strokec2 null\cf0 \strokec4 ) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = themeId ? \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [themeId] : \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `You are a data visualization expert. Recommend the best chart type.\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 DATA DESCRIPTION:\cf0 \cb1 \strokec4 \
\cb3 $\{dataDescription\}\cb1 \
\
\cf5 \cb3 \strokec5 INTENTION: \cf0 \strokec4 $\{intention\}\cf5 \strokec5  (compare|trend|composition|ranking|relationship|distribution)\cf0 \cb1 \strokec4 \
\cb3 $\{theme ? \cf5 \strokec5 `\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 THEME CHART STYLE (MUST USE):\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Axis style: \cf0 \strokec4 $\{theme.chart_table_style.axis\}\cb1 \
\cf5 \cb3 \strokec5 - Label case: \cf0 \strokec4 $\{theme.chart_table_style.labels\}\cb1 \
\cf5 \cb3 \strokec5 - Color ramp: \cf0 \strokec4 $\{theme.chart_table_style.ramp.join(\cf5 \strokec5 ', '\cf0 \strokec4 )\}\cb1 \
\cf5 \cb3 \strokec5 - Legend position: \cf0 \strokec4 $\{theme.chart_table_style.legend\}\cb1 \
\cf5 \cb3 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 RULES:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Choose chart type by data shape and intention\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - No decorative 3D\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Labels must be \uc0\u8805 16px\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - If only 1-2 values or minimal differences \uc0\u8594  use big_number or table\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Apply theme chart_table_style\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Include one insight sentence\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Recommend the optimal visualization.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         chart_type: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4 , enum: [\cf5 \strokec5 'bar'\cf0 \strokec4 , \cf5 \strokec5 'column'\cf0 \strokec4 , \cf5 \strokec5 'line'\cf0 \strokec4 , \cf5 \strokec5 'area'\cf0 \strokec4 , \cf5 \strokec5 'scatter'\cf0 \strokec4 , \cf5 \strokec5 'pie'\cf0 \strokec4 , \cf5 \strokec5 'donut'\cf0 \strokec4 , \cf5 \strokec5 'table'\cf0 \strokec4 , \cf5 \strokec5 'big_number'\cf0 \strokec4 , \cf5 \strokec5 'lollipop'\cf0 \strokec4 , \cf5 \strokec5 'slope'\cf0 \strokec4 ] \},\cb1 \
\cb3         why: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3         encoding: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             x: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             y: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             series: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             units: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         styling: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             ramp: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3             axis: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             label_min_px: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3             legend: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         insight: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3         sample_data: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               name: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               value: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: SUGGEST QUOTE ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  suggestQuote(topic, context = \cf5 \strokec5 ''\cf0 \strokec4 ) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `Find a relevant, verifiable quote for this presentation topic.\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 TOPIC: \cf0 \strokec4 $\{topic\}\cb1 \
\cf5 \cb3 \strokec5 CONTEXT: \cf0 \strokec4 $\{context\}\cb1 \
\
\cf5 \cb3 \strokec5 RULES:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Quote must be \uc0\u8804 25 words\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Must be from a real, verifiable source\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Include author, year, and source URL if possible\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - If you cannot verify a quote, say so and suggest an alternative approach\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Return up to 3 quote options.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     add_context_from_internet: \cf2 \strokec2 true\cf0 \strokec4 ,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         quotes: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               quote: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               author: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               year: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               source_url: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               relevance: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         fallback_suggestion: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3         verification_note: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: ACCESSIBILITY CHECK ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  accessibilityCheck(slides, designTokens = \cf7 \strokec7 DEFAULT_DESIGN_TOKENS\cf0 \strokec4 , themeId = \cf2 \strokec2 null\cf0 \strokec4 ) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = themeId ? \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [themeId] : \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `Perform an accessibility audit on these presentation slides (WCAG AA).\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 SLIDES:\cf0 \cb1 \strokec4 \
\cb3 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(slides.map((s, i) => (\{ num: i + \cf8 \strokec8 1\cf0 \strokec4 , title: s.title, content: s.content, layout: s.layout, background_overlay: s.background_overlay \})))\}\cb1 \
\
\cf5 \cb3 \strokec5 DESIGN TOKENS:\cf0 \cb1 \strokec4 \
\cb3 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(theme?.tokens || designTokens)\}\cb1 \
\cb3 $\{theme ? \cf5 \strokec5 `\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 THEME CONSTRAINTS:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Cannot break geometry (lock_geometry: \cf0 \strokec4 $\{theme.enforcement.lock_geometry\}\cf5 \strokec5 )\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Fixes must not change component recipes\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 CHECK FOR:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 1. Contrast issues (text vs background) - must meet 4.5:1 for normal, 3:1 for large\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 2. Font sizes below minimum (body <24pt, title <32pt)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 3. Missing alt-text on visuals\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 4. Reading order problems\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 5. Density issues (>50 words per slide)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 6. Color-only information conveyance\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Propose fixes that DON'T break the theme geometry. Categorize as critical or warnings.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         score: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3         critical: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               slide: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3               issue: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               fix: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         warnings: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               slide: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3               issue: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3               fix: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         passed: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: PREFLIGHT CHECK ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  preflightCheck(slides, themeId = \cf2 \strokec2 null\cf0 \strokec4 , destination = \cf5 \strokec5 'PPTX'\cf0 \strokec4 ) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = themeId ? \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [themeId] : \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `Final preflight audit before export to \cf0 \strokec4 $\{destination\}\cf5 \strokec5 .\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 SLIDES: \cf0 \strokec4 $\{slides.length\}\cf5 \strokec5  slides\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 THEME: \cf0 \strokec4 $\{themeId || \cf5 \strokec5 'default'\cf0 \strokec4 \}\cb1 \
\cb3 $\{theme ? \cf5 \strokec5 `Theme recipes: \cf0 \strokec4 $\{theme.component_recipes.join(\cf5 \strokec5 ', '\cf0 \strokec4 )\}\cf5 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 CHECK:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 1. AA accessibility compliance\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 2. Font sizes within bounds\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 3. Density \uc0\u8804 50 words/slide\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 4. Component recipes used correctly\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 5. Assets have licenses\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 6. All visuals have alt-text\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 7. Reading order logical\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Return ready status and any blocking issues.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         ready: \{ type: \cf5 \strokec5 'boolean'\cf0 \strokec4  \},\cb1 \
\cb3         critical: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3         warnings: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3         assets_manifest: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             backgrounds: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3             images: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3             icons: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3             fonts: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \}\cb1 \
\cb3           \}\cb1 \
\cb3         \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: AUTO LAYOUT ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  autoLayout(slides, themeId = \cf2 \strokec2 null\cf0 \strokec4 ) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  theme = themeId ? \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 [themeId] : \cf2 \strokec2 null\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  prompt = \cf5 \strokec5 `Re-apply theme grid and spacing to these slides.\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 SLIDES:\cf0 \cb1 \strokec4 \
\cb3 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(slides.map((s, i) => (\{ num: i + \cf8 \strokec8 1\cf0 \strokec4 , title: s.title, layout: s.layout, background_overlay: s.background_overlay \})))\}\cb1 \
\cb3 $\{theme ? \cf5 \strokec5 `\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 THEME GRID:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Spacing: \cf0 \strokec4 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(theme.tokens.spacing)\}\cb1 \
\cf5 \cb3 \strokec5 - Radii: \cf0 \strokec4 $\{theme.tokens.radii\}\cb1 \
\cf5 \cb3 \strokec5 - Lock geometry: true\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 `\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 TASKS:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 1. Ensure consistent spacing using theme grid\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 2. Adjust background_overlay for AA contrast if needed\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 3. Align elements to theme gutters\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 4. Don't change content, only layout properties\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Return diff operations.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  response = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         diff: \{\cb1 \
\cb3           type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3           items: \{\cb1 \
\cb3             type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3             properties: \{\cb1 \
\cb3               slide_id: \{ type: \cf5 \strokec5 'number'\cf0 \strokec4  \},\cb1 \
\cb3               ops: \{\cb1 \
\cb3                 type: \cf5 \strokec5 'array'\cf0 \strokec4 ,\cb1 \
\cb3                 items: \{\cb1 \
\cb3                   type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3                   properties: \{\cb1 \
\cb3                     \cf2 \strokec2 set\cf0 \strokec4 : \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3                     value: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3                   \}\cb1 \
\cb3                 \}\cb1 \
\cb3               \}\cb1 \
\cb3             \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         \cf7 \strokec7 QA\cf0 \strokec4 : \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  response;\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ MODE: ASK AI (Router) ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 async\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  askAI(userQuery, currentSlide, context = \{\}) \{\cb1 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  intentPrompt = \cf5 \strokec5 `Classify this user request about a presentation slide:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 "\cf0 \strokec4 $\{userQuery\}\cf5 \strokec5 "\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Categories:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - rewrite: User wants to improve/change text\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - visual: User wants image/icon suggestions\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - data: User wants chart/data help\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - layout: User wants layout changes\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - accessibility: User has accessibility concerns\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - expand: User wants more content\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - shorten: User wants less content\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - other: General question\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 Return the category and action plan.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  intentResponse = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt: intentPrompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         intent: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3         action_plan: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  intent = intentResponse.intent;\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (intent === \cf5 \strokec5 'visual'\cf0 \strokec4 ) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  \{ type: \cf5 \strokec5 'visual'\cf0 \strokec4 , result: \cf2 \strokec2 await\cf0 \strokec4  suggestVisuals(currentSlide, context) \};\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (intent === \cf5 \strokec5 'data'\cf0 \strokec4 ) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  \{ type: \cf5 \strokec5 'data'\cf0 \strokec4 , result: \cf2 \strokec2 await\cf0 \strokec4  chartAssistant(userQuery, \cf5 \strokec5 'compare'\cf0 \strokec4 , context.themeId) \};\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 if\cf0 \strokec4  (intent === \cf5 \strokec5 'accessibility'\cf0 \strokec4 ) \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  \{ type: \cf5 \strokec5 'accessibility'\cf0 \strokec4 , result: \cf2 \strokec2 await\cf0 \strokec4  accessibilityCheck([currentSlide], \cf2 \strokec2 undefined\cf0 \strokec4 , context.themeId) \};\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf6 \strokec6 // Text-based intents\cf0 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 const\cf0 \strokec4  enhancePrompt = \cf5 \strokec5 `Apply this user request to the slide:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 REQUEST: "\cf0 \strokec4 $\{userQuery\}\cf5 \strokec5 "\cf0 \cb1 \strokec4 \
\
\cf5 \cb3 \strokec5 CURRENT SLIDE:\cf0 \cb1 \strokec4 \
\cb3 $\{\cf7 \strokec7 JSON\cf0 \strokec4 .stringify(currentSlide)\}\cb1 \
\
\cf5 \cb3 \strokec5 Apply the change while maintaining:\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Title as assertion (\uc0\u8804 12 words)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - Max 3 bullets (\uc0\u8804 12 words each)\cf0 \cb1 \strokec4 \
\cf5 \cb3 \strokec5 - \uc0\u8804 50 words total\cf0 \cb1 \strokec4 \
\cb3 $\{context.themeId ? \cf5 \strokec5 `- Theme: \cf0 \strokec4 $\{context.themeId\}\cf5 \strokec5  (maintain component recipe)`\cf0 \strokec4  : \cf5 \strokec5 ''\cf0 \strokec4 \}\cb1 \
\
\cf5 \cb3 \strokec5 Return the modified slide.`\cf0 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  result = \cf2 \strokec2 await\cf0 \strokec4  base44.integrations.\cf7 \strokec7 Core\cf0 \strokec4 .\cf7 \strokec7 InvokeLLM\cf0 \strokec4 (\{\cb1 \
\cb3     prompt: enhancePrompt,\cb1 \
\cb3     response_json_schema: \{\cb1 \
\cb3       type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3       properties: \{\cb1 \
\cb3         slide: \{\cb1 \
\cb3           type: \cf5 \strokec5 'object'\cf0 \strokec4 ,\cb1 \
\cb3           properties: \{\cb1 \
\cb3             title: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \},\cb1 \
\cb3             content: \{ type: \cf5 \strokec5 'array'\cf0 \strokec4 , items: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \} \},\cb1 \
\cb3             speaker_notes: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3           \}\cb1 \
\cb3         \},\cb1 \
\cb3         explanation: \{ type: \cf5 \strokec5 'string'\cf0 \strokec4  \}\cb1 \
\cb3       \}\cb1 \
\cb3     \}\cb1 \
\cb3   \});\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  \{ type: intent, result \};\cb1 \
\cb3 \}\cb1 \
\
\cf6 \cb3 \strokec6 // ============ EXPORTS ============\cf0 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \{\cb1 \
\cb3   \cf6 \strokec6 // Core modes\cf0 \cb1 \strokec4 \
\cb3   chooseTemplate,\cb1 \
\cb3   generateDeck,\cb1 \
\cb3   enhanceSlide,\cb1 \
\cb3   suggestVisuals,\cb1 \
\cb3   chartAssistant,\cb1 \
\cb3   suggestQuote,\cb1 \
\cb3   accessibilityCheck,\cb1 \
\cb3   preflightCheck,\cb1 \
\cb3   autoLayout,\cb1 \
\cb3   askAI,\cb1 \
\cb3   \cf6 \strokec6 // Helpers\cf0 \cb1 \strokec4 \
\cb3   getBackgroundForSlide,\cb1 \
\cb3   getTheme,\cb1 \
\cb3   \cf6 \strokec6 // Constants\cf0 \cb1 \strokec4 \
\cb3   \cf7 \strokec7 DEFAULT_DESIGN_TOKENS\cf0 \strokec4 ,\cb1 \
\cb3   \cf7 \strokec7 GOAL_STRUCTURES\cf0 \strokec4 ,\cb1 \
\cb3   \cf7 \strokec7 THEME_CATALOG\cf0 \strokec4 ,\cb1 \
\cb3   \cf7 \strokec7 STYLE_REFERENCES\cf0 \strokec4 ,\cb1 \
\cb3   \cf7 \strokec7 COMPONENT_RECIPES\cf0 \cb1 \strokec4 \
\cb3 \};\cb1 \
}