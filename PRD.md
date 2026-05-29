# Asan Office - Product Requirements Document

## Product Overview
Asan Office is a fully offline, installable desktop app (Electron/Tauri). No cloud, no collaboration. Feature parity with Microsoft Office + Adobe Acrobat PDF editor.

### Components
- Asan Word (Word processor)
- Asan Sheet (Spreadsheet)
- Asan Slide (Presentation)
- Asan PDF (PDF editor/viewer)

### Platforms
Windows, macOS, Linux (native installers) + self-contained desktop version (local-only, no server sync)

### File I/O
Import/export all major formats (DOCX, DOC, ODT, RTF, TXT, XLSX, XLS, CSV, ODS, PPTX, PPT, ODP, PDF, PDF/A, EPUB, HTML, Markdown, XML)

---

## 1. Asan Word - Feature List
### Basic Editing
- Typing, delete, select, copy, cut, paste (formatting preservation)
- Undo/Redo (500+ actions)
- Find and replace (regex, case sensitivity)
- Symbols, emojis, special characters
- AutoCorrect, Spell check (50+ languages), Grammar check
- Word count, Zoom (10%-500%)

### Formatting
- Character: Font family, size, color, Bold, Italic, Underline, Strikethrough, Super/Subscript, spacing, effects.
- Paragraph: Alignment, Line spacing, Indentation, Tabs, Bullets/Numbering, Borders/Shading.

### Page Layout
- Margins, Orientation, Paper size (A0-A6), Columns, Page borders, Line numbering, Hyphenation, Watermark.

### Headers & Footers
- Different first page, Odd/Even, Page numbers, Fields (date, filename, etc.), Section breaks.

### Styles & Themes
- Predefined and custom styles, Style inheritance, Document themes.

### Tables
- Insert, Resize, Merge/Split, Borders/Shading, Text direction, Sort, Formulas (SUM, AVG, etc.), Convert Table/Text.

### Graphics & Multimedia
- Images (JPG, PNG, SVG, etc.), Adjustments, Crop, Wrapping, Shapes, Text boxes, WordArt, SmartArt, Charts, 3D models, Icons, Screenshots.

### References
- TOC, Footnotes/Endnotes, Citations & Bibliography (APA, MLA, etc.), Table of Figures, Cross-reference, Index.

### Reviewing
- Track changes, Comments, Compare/Combine documents, Restrict editing, Digital signatures.

### Mail Merge
- Recipients (Excel, CSV), Merge fields, Preview, Finish.

### Macros & Automation
- Record/Edit/Run macros (JavaScript/VBA style).

### Accessibility
- Alt text, Accessibility checker, Read aloud, High contrast.

### Advanced
- Master/Subdocuments, Forms, Equation editor (LaTeX), Ink drawing, Bookmarks, PDF export, Encryption (AES-256), AutoSave, Versions.

---

## 2. Asan Sheet - Feature List
### Basic Spreadsheet
- 1,048,576 rows × 16,384 columns
- AutoFill, Hide/Unhide, Rename/Color tabs, Cell formatting.

### Formulas & Functions (450+)
- Text, Math, Statistical, Logical, Lookup, Date/Time, Financial, Engineering, Information, Array formulas.

### Data Management
- Sort, Filter, Data validation, Remove duplicates, Text to columns, Consolidate, What-If Analysis, Group/Outline.

### PivotTables
- Source, Rows/Cols/Values/Filters, Value field settings, Grouping, Slicers, Timelines, PivotCharts.

### Charts (85+)
- Column, Bar, Line, Pie, Area, Scatter, Bubble, Radar, Stock, Surface, Treemap, Sunburst, etc. Customization.

### Conditional Formatting
- Highlight rules, Top/Bottom rules, Data bars, Color scales, Icon sets, Custom formulas.

### Data Analysis
- Solver, Analysis ToolPak, Quick Analysis lens.

### Collaboration (Local)
- Shared workbook (network drive), Merge workbooks, Comments/Notes, Protection.

### Import/Export
- XLSX, XLS, XLSM, CSV, ODS, PDF, JSON, etc.

### Advanced
- LAMBDA, LET, XLOOKUP, Dynamic arrays, Power Query (local), Formula auditing, Name Manager, Camera tool, Macros.

---

## 3. Technical Considerations
### Architecture
- Core engine: Rust (Tauri)
- UI: React + Tailwind CSS
- Storage: SQLite for local preferences/recent docs.
- Rendering: WebView2 (Windows), WebKitGTK (Linux), WKWebView (macOS).

### Key Challenges
- DOCX/XLSX fidelity.
- 450+ formula functions.
- PDF incremental updates.
- OCR (Tesseract).
- Macros (JavaScript based).
