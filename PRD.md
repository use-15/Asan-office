Act as senior developers:



As a senior office suite developer, I’ll provide a comprehensive blueprint for Asan Office — a fully offline, installable desktop app (Electron/Tauri) . No cloud, no collaboration. Feature parity with Microsoft Office + Adobe Acrobat PDF editor.





Product Overview



Asan Office consists of:



· Asan Word (Word processor)

· Asan Sheet (Spreadsheet)

· Asan Slide (Presentation)

· Asan PDF (PDF editor/viewer)



Platforms: Windows, macOS, Linux (native installers) + self-contained  desktop version (local-only, no server sync)



File I/O: Import/export all major formats (DOCX, DOC, ODT, RTF, TXT, XLSX, XLS, CSV, ODS, PPTX, PPT, ODP, PDF, PDF/A, EPUB, HTML, Markdown, XML)





1.	Asan Word – Complete Feature List



Basic Editing



· Typing, delete, select, copy, cut, paste (with formatting preservation)

· Undo/Redo (multi-level, 500+ actions)

· Find and replace (with regex, case sensitivity, whole word)

· Insert symbols, emojis, special characters

· AutoCorrect (capitalization, common typos, custom entries)

· Spell check (50+ languages, custom dictionaries)

· Grammar check (basic style, punctuation, tense)

· Word count (with or without text boxes/footnotes)

· Zoom (10%–500%, page width, whole page)



Formatting – Character



· Font family, size, color (RGB, hex, theme colors)

· Bold, italic, underline (single, double, dotted, wavy, color)

· Strikethrough, superscript, subscript, small caps, all caps

· Highlight (background color)

· Character spacing (expanded/condensed, precise points)

· Text effects (shadow, outline, emboss, engrave, glow)



Formatting – Paragraph



· Alignment (left, center, right, justify – with last line alignment)

· Line spacing (single, 1.5, double, exactly, multiple, at least)

· Spacing before/after (0–999 pt)

· Indentation (left, right, first line, hanging – in cm or inches)

· Tabs (left, center, right, decimal, bar; with leader dots/dashes)

· Bullets and numbering (multi-level, custom symbols, restart numbering)

· Borders and shading (box, shadow, 3D; patterns, gradients)

· Keep with next, keep lines together, page break before, widow/orphan control



Page Layout



· Margins (normal, narrow, wide, mirrored, custom)

· Orientation (portrait, landscape)

· Paper size (A0-A6, Letter, Legal, Tabloid, custom)

· Columns (1–3, custom width/spacing, line between)

· Page borders (artistic, color, width, margin from text)

· Line numbering (continuous, per page, per section)

· Hyphenation (automatic, manual, max consecutive)

· Watermark (text, image; custom scale, semitransparent)



Headers & Footers



· Different first page, different odd/even

· Page numbers (position, format, start at, continue from previous)

· Insert fields (date, time, filename, author, page count, document property)

· Section breaks (next page, continuous, even page, odd page)



Styles & Themes



· Predefined styles (Normal, Heading 1–9, Title, Subtitle, Quote)

· Create, modify, delete styles (based on another style)

· Style inheritance and automatic update

· Table of styles (manage all)

· Document themes (color sets, font sets, effects)



Tables



· Insert table (grid, draw, from text, Excel spreadsheet embed)

· Resize rows/columns (drag, distribute evenly)

· Merge, split cells

· Table borders and shading (per cell, per row, diagonal lines)

· Text direction (horizontal, rotated 90°, rotated 270°)

· Cell margins and spacing

· Sort rows (ascending/descending, multiple keys)

· Formulas in tables (sum, average, count, product, min, max; update field)

· Repeat header rows across pages

· Convert table to text and vice versa



Graphics & Multimedia



· Insert images (JPG, PNG, GIF, SVG, BMP, TIFF, WEBP)

· Image adjustments (brightness, contrast, recolor, transparency, reset)

· Crop (to shape, aspect ratio, freeform)

· Wrapping (inline, square, tight, through, top/bottom, behind, in front)

· Position relative to page, margin, paragraph

· Rotate and flip (90°, free rotation, flip horizontal/vertical)

· Insert shapes (lines, rectangles, basic shapes, block arrows, equation shapes, flowchart)

· Shape fill (solid, gradient, picture, pattern, texture)

· Shape outline (color, weight, dash type, arrowheads)

· Shape effects (shadow, reflection, glow, soft edges, 3D bevel)

· Text boxes (linked text boxes across pages)

· WordArt (predefined styles, custom formatting)

· SmartArt (hierarchy, process, cycle, matrix, pyramid, relationship – 135+ layouts)

· Charts (bar, line, pie, scatter, area, radar, stock – embed or link)

· Insert 3D models (GLB, FBX, OBJ; rotate in 3D)

· Icons (SVG library, recolor)

· Screenshot (capture window, screen clipping)



References



· Table of contents (auto from heading styles, manual, custom levels)

· Update TOC, rebuild TOC

· Footnotes and endnotes (custom mark, numbering restart, location)

· Citations & bibliography (APA, MLA, Chicago, Harvard, IEEE)

· Manage sources (author, title, year, publisher, etc.)

· Insert citation placeholder

· Table of figures (by caption label)

· Cross-reference (headings, bookmarks, footnotes, equations, figures, tables)

· Index (mark entry, build index, multiple columns)

· Table of authorities (legal)



Reviewing



· Track changes (insertions, deletions, formatting changes)

· Show markup (all, simple, none, original)

· Accept/reject changes (individual or all)

· Comments (threaded, resolve, delete, reply, edit)

· Compare two documents (show differences)

· Combine documents (merge from multiple authors)

· Restrict editing (read-only, track changes only, comments only, fill forms)

· Digital signatures (X.509 certificates, signature lines)



Mail Merge



· Select recipients (from Excel, CSV, Outlook contacts, typed list)

· Insert merge fields (address block, greeting line, custom fields)

· Preview results

· Finish and merge (print, email, new document)

· Rules (if-then-else, skip record, fill-in, ask)



Macros & Automation



· Record macro (save as VBA or JavaScript)

· Edit macro (script editor with syntax highlighting)

· Run macro (by button, shortcut, event)

· Assign macro to button, keyboard shortcut

· Macro security (disable with notification, signed only, disable all)



Accessibility



· Alt text for images, shapes, tables

· Check accessibility (missing alt, poor contrast, improper heading order)

· Read aloud (TTS with word highlighting)

· High contrast mode



Advanced



· Master documents and subdocuments

· Forms (legacy: text field, checkbox, dropdown; content controls: rich text, date picker, combo box, repeating section)

· Protect form (fill forms only)

· Equation editor (LaTeX syntax, UI builder, linear vs professional)

· Ink drawing (with touch/pen: pressure sensitivity, ink to shape, ink to math)

· Bookmark (navigate, cross-reference)

· Export as PDF with tags for accessibility

· Document properties (title, author, subject, keywords, custom properties)

· Password encryption (AES-256)

· Remove personal information on save

· AutoSave (local recovery every 5 minutes)

· Versions (save snapshots manually, view/restore previous version)





2.	Asan Sheet – Complete Feature List



Basic Spreadsheet



· 1,048,576 rows × 16,384 columns (Excel-compatible)

· Cell entry (text, numbers, dates, times, booleans, error values)

· AutoFill (drag handle: copy, series, formatting only)

· Insert/delete rows, columns, cells, sheets

· Hide/unhide rows, columns, sheets

· Move or copy sheets

· Rename, color sheet tabs

· Cell formatting (bold, italic, font size, color, background, borders, wrap text, merge & center)



Formulas & Functions (450+ functions)



Text: CONCATENATE, LEFT, RIGHT, MID, LEN, TRIM, UPPER, LOWER, PROPER, SUBSTITUTE, TEXT, VALUE, CLEAN, REPT, FIND, SEARCH, REPLACE, CHAR, CODE, UNICHAR, UNICODE



Math: SUM, SUMIF, SUMIFS, SUMPRODUCT, AVERAGE, AVERAGEIF, AVERAGEIFS, COUNT, COUNTA, COUNTIF, COUNTIFS, MIN, MAX, ROUND, ROUNDUP, ROUNDDOWN, CEILING, FLOOR, INT, TRUNC, ABS, POWER, SQRT, EXP, LN, LOG10, MOD, QUOTIENT, GCD, LCM, RAND, RANDBETWEEN, SIGN



Statistical: MEDIAN, MODE, STDEV, VAR, CORREL, FORECAST, NORM.DIST, T.TEST, F.TEST, CHISQ.TEST, PERCENTILE, RANK, LARGE, SMALL



Logical: IF, IFS, AND, OR, NOT, XOR, IFERROR, IFNA, SWITCH, TRUE, FALSE



Lookup & Reference: VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH, CHOOSE, INDIRECT, OFFSET, ROW, COLUMN, ROWS, COLUMNS, TRANSPOSE, SORT, FILTER, UNIQUE, SORTBY



Date & Time: NOW, TODAY, DATE, TIME, YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, WEEKDAY, WEEKNUM, DATEDIF, EDATE, EOMONTH, WORKDAY, NETWORKDAYS, DAYS, DAYS360



Financial: PV, FV, NPV, IRR, PMT, IPMT, PPMT, RATE, NPER, DB, SLN, SYD, CUMIPMT, CUMPRINC



Engineering: CONVERT, BIN2DEC, DEC2BIN, HEX2DEC, DEC2HEX, COMPLEX, IMAGINARY, IMREAL



Information: ISNUMBER, ISTEXT, ISBLANK, ISERROR, ISNA, TYPE, N, CELL, INFO



Array formulas (dynamic arrays, spill ranges) – #SPILL! Error handling



Data Management



· Sort (A-Z, Z-A, custom list, multiple levels, by cell color, font color, icon)

· Filter (auto-filter, advanced filter, by color, by condition, search in filter)

· Data validation (whole number, decimal, list, date, time, text length, custom formula)

· Remove duplicates (by selected columns)

· Text to columns (delimiter, fixed width)

· Consolidate (by position or category, function sum/count/average)

· What-If Analysis (Goal Seek, Data Table, Scenario Manager)

· Subtotal (automatic outline, function per column)

· Group and outline (auto outline, manual group, collapse/expand)



PivotTables



· Source (range, table, external data)

· Rows, Columns, Values, Filters areas

· Value field settings (sum, count, average, min, max, product, std deviation, variance)

· Show values as (% of grand total, % of column total, running total, rank)

· Group fields (dates: months/quarters/years; numbers: bins)

· Calculated fields and calculated items

· Slicers (connected to multiple PivotTables)

· Timeline slicer (for dates)

· PivotChart (linked and interactive)



Charts (85+ chart types)



· Column (clustered, stacked, 100% stacked, 3D)

· Bar (horizontal variants)

· Line (line with markers, stacked, 100% stacked)

· Pie (pie, doughnut, bar of pie, pie of pie)

· Area (area, stacked, 100% stacked)

· Scatter (scatter with smooth lines, markers)

· Bubble

· Radar (filled, with markers)

· Stock (high-low-close, open-high-low-close, volume-high-low-close)

· Surface (wireframe, contour)

· Treemap, Sunburst, Histogram, Pareto, Box & Whisker, Waterfall, Funnel

· Combo chart (mix line + column on secondary axis)

· Sparklines (line, column, win/loss)



Chart customization: Titles, axes labels, legend, gridlines, data labels, trendlines (linear, exponential, polynomial, moving average), error bars, axes scaling (linear/log, min/max), plot area formatting



Conditional Formatting



· Highlight cell rules (greater than, less than, between, equal to, text contains, date occurring, duplicate values)

· Top/bottom rules (top 10, bottom 10%, above average, below average)

· Data bars (gradient fill, solid fill, positive/negative axis)

· Color scales (2-color, 3-color)

· Icon sets (3–5 icons: directional, shapes, indicators, ratings)

· Custom formula-based formatting

· Manage rules (priority, stop if true)



Data Analysis Tools



· Solver (linear, nonlinear, integer constraints)

· Analysis ToolPak (regression, ANOVA, t-test, F-test, moving average, exponential smoothing, histogram, correlation, covariance, descriptive statistics, Fourier analysis)

· Quick Analysis lens (select data, press Ctrl+Q for formatting, charts, totals, tables, sparklines)



Collaboration Features (Local only, no cloud)



· Shared workbook (allow multiple users on network drive, track who changed what)

· Merge workbooks (combine changes from multiple copies)

· Comments (threaded, assign to user, resolve)

· Notes (legacy comments)

· Protect sheet (lock cells, allow select/unlocked cells, format, insert rows, sort, filter)

· Protect workbook (structure, windows, require password)

· Allow edit ranges (by password, by user)



Import & Export



· Import: XLSX, XLS (97-2003), XLSM (macro-enabled), XLTX, XLTM, CSV (comma/tab/semicolon/pipe), TSV, ODS, DBF, TXT (fixed width, delimited), XML (XML map), HTML table, JSON, PDF (as table), Google Sheets (local copy)

· Export: All import formats + PDF (with selection/active sheet/entire workbook), XPS, Excel 5.0/95, SYLK, DIF, PRN (space-delimited), CSV (UTF-8, UTF-16BOM), ODS 1.2



Advanced Features



· Array formulas (legacy Ctrl+Shift+Enter, new dynamic arrays)

· LAMBDA function (create custom functions without VBA)

· LET function (assign names to calculation results)

· XMATCH, XLOOKUP (full support)

· Dynamic arrays (SORT, FILTER, UNIQUE, RANDARRAY, SEQUENCE, SORTBY)

· Power Query (data import and transformation – merge, append, pivot, unpivot, conditional columns, group by)

· Get & Transform (from file, database, web, Odata, SharePoint – local only)

· What-If Analysis add-ins

· Watch window (monitor formula results)

· Formula auditing (trace precedents/dependents, evaluate formula, error checking, circular reference warning)

· Name Manager (create named ranges, scoped to worksheet or workbook)

· Camera tool (live picture of range)

· Custom views (save print settings, hidden rows/columns, filter state)

· Macro recorder (VBA/JS)

· Custom ribbon tab (with macros)

· Accessibility checker

· Ink equation (math input panel)

· Speech recognition (dictate into cells – offline Windows/Linux speech engine)





3.	Asan Slide – Complete Feature List



Slides & Layout



· Slide master (edit master, title master, handout master, notes master)

· Layouts (title slide, title and content, section header, two content, comparison, blank, content with caption, picture with caption)

· Insert slide (from existing presentation, reuse slides)

· Duplicate, delete, hide slide

· Sections (rename, collapse/expand, move section)

· Slide size (standard 4:3, widescreen 16:9, custom, letter/A4 paper)

· Portrait or landscape orientation per slide



Content Insertion



· Text box (horizontal, vertical, stacked, rotate)

· WordArt (20+ styles)

· Pictures (local, online pictures – local fallback, screenshot)

· Shapes (170+ auto-shapes, freeform, curve, scribble)

· Icons (SVG library, recolor, ungroup to edit)

· 3D models (rotate, pan, zoom, animate)

· SmartArt (135+ layouts – hierarchy, matrix, pyramid, cycle, relationship)

· Charts (all Asan Sheet chart types – embed or link)

· Table (draw table, insert table, Excel spreadsheet embed)

· Video (MP4, AVI, MOV, WMV, MKV – embed or link local file, trim, fade in/out, bookmark, poster frame)

· Audio (MP3, WAV, M4A – play across slides, hide icon, loop, rewind after playing)

· Equation (LaTeX, linear, professional)

· Symbol (insert special characters, emoji)



Animations



Entrance Effects: Appear, Fade, Fly In, Float In, Split, Wipe, Shape, Wheel, Random Bars, Grow & Turn, Zoom, Swivel, Bounce

Emphasis Effects: Pulse, Color Pulse, Teeter, Spin, Grow/Shrink, Desaturate, Darken, Lighten, Transparent, Object Color, Line Color, Fill Color, Brush Color

Exit Effects: Disappear, Fade Out, Fly Out, Float Out, Shrink & Turn, Collapse, Swish, Zoom Out

Motion Paths: Lines (any direction), Arcs, Turns, Shapes (circle, square, triangle), Custom path (draw with mouse)



Animation Settings: Duration (0.1s–5min), Delay, Trigger (on click, with previous, after previous, bookmark, on click of shape), Repeat (until next click, until end of slide, 2-100 times), Rewind when done, Smooth start/end, Bounce end

Animation Pane: Reorder, group animations, set as start with previous, timing overlap, effect options (direction, sequence, text animation – all at once, by word, by letter)



Transitions



Subtle: Fade, Push, Cover, Uncover, Reveal, Random Bars, Stripes

Exciting: Blinds, Checkerboard, Comb, Glitter, Honeycomb, Ripple, Vortex, Wipe (with pattern), Shred, Curtains, Prestige, Wind

Dynamic: Pan, Morph (between slides – objects animate position/color/size), Zoom (drag to zoom area)



Transition settings: Duration (0.1s–5min), Sound (27 preset sounds + custom WAV), Advance on click, Automatically after (0–24h), Apply to all



Drawing & Ink



· Draw tab: Pens (thickness, color, ink to shape, ink to math, ink replay)

· Ruler (on-screen ruler for straight lines)

· Lasso select, eraser (stroke or segment)

· Ink replay (play back ink strokes)



Presenter Tools



· Slide show from beginning/current slide

· Presenter view (on primary screen: next slide, notes, timer, taskbar; on projector: slide only)

· Annotation during show (pen, highlighter, laser pointer, erase all ink)

· Set up slide show (browsed by individual, kiosk mode, loop continuously, show without narration/animations)

· Record slide show (narration, ink, laser pointer, timings – save as video)

· Rehearse timings (pause, restart, keep or discard)

· Custom slide shows (create subset slides, named, show in sequence)



Master & Templates



· Slide master (theme fonts, colors, background, logo placement)

· Color themes (10 base themes, create custom with RGB/HSL)

· Font themes (heading + body font, 20 preset themes)

· Background styles (gradient: linear/radial/diagonal; pattern: dots, stripes, checks; picture/texture, hide background graphics)

· Save as template (.potx, .thmx)



Comments & Review



· Add comment (threaded, @mention local user, resolve)

· Compare presentations (merge changes from another copy)

· Protect presentation (password to open, password to modify, mark as final)

· Digital signature (sign, view signatures, add signature line)



Media & Export



· Compress media (HD 720p, standard 480p, low quality 360p)

· Trim video (start/end trim points)

· Fade video (in/out duration)

· Bookmark video (trigger animations)

· Poster frame (set from video or picture)

· Export as video (MP4, WMV – resolution, quality, use recorded timings/narration)

· Export as PDF (slides, handouts, notes, outline)

· Export as GIF (animated, 1–30 fps, quality)

· Package for CD (copy to folder with PowerPoint Viewer – no longer needed, but for offline use)

· Create handouts (to Word – 2, 3, 4, 6, 9 slides per page)



Printing



· Print slides (full slide, 1-9 slides per page)

· Print notes pages

· Print outline view

· Print handouts (2, 3, 4, 6, 9 per page – with horizontal/vertical ordering)

· Frame slides, print comments, high quality, grayscale/pure black and white



Advanced



· Action buttons (hyperlink to slide, URL, file, play sound, run macro)

· Insert OLE object (embedded Word document, Excel chart, PDF – local)

· Slide zoom (section zoom, summary zoom, slide zoom – interactive navigation)

· Morph transition (advanced: text, shapes, pictures morph automatically)

· Accessibility checker, alt text, reading order pane

· Real-time subtitles (speech-to-text during presentation – offline language models)

· Ink replay (replay handwritten strokes with timing)

· Custom show types (browsed at kiosk, full screen)

· Macro recorder (VBA for animations, slide generation)

· Add-in manager (load legacy COM add-ins, JS add-ins)





4.	Asan PDF – Complete Feature List



(Adobe Acrobat Pro feature parity)



Viewing & Navigation



· Read modes (single page, continuous scroll, two-page, two-page continuous, full screen)

· Zoom (fit width, fit page, fit visible, marquee zoom, loupe tool, dynamic zoom)

· Page navigation (thumbnails panel, bookmarks panel, page number jump, next/previous, first/last)

· Rotate view (90°, 180°, 270° – temporary or permanent)

· Split view (compare two pages or two areas of same page)

· Read aloud (TTS with page turning, stop/resume)

· Dark mode (invert colors for reading)



Editing Content



 Text editing:



· Edit text (add, delete, modify – font, size, color, alignment, line spacing, character spacing)

· Add new text (click to type, text box, sticky note)

· Find and replace (with regex)

· Spell check

· Link text boxes (flow text between boxes)

· OCR (text recognition – 30+ languages, searchable image PDF, editable text)



Images:



· Add image (JPG, PNG, TIFF, BMP, GIF)

· Replace image

· Crop, resize, rotate, flip image

· Extract image (save to file)

· Adjust image (brightness, contrast, color balance)

· Remove background (automatic or manual)



Objects:



· Add, resize, move, rotate, flip objects

· Align (left, right, center, top, bottom, distribute horizontally/vertically)

· Group/ungroup objects

· Layer order (bring to front, send to back)

· Convert to editable shapes (raster to vector)



Annotations & Markup



· Highlight, underline, strikethrough (squiggly, straight), redaction (permanent removal)

· Add sticky notes (pop-up, color, status: open/closed, replied)

· Add text comment (typewriter, callout, text box, sticky note replacement)

· Drawing markups (arrow, line, rectangle, oval, polygon, cloud, pencil, eraser)

· Stamp (dynamic: approved, confidential, draft, signed, received; custom text/image stamp)

· Attach file (as comment or embedded)

· Record audio comment (microphone)

· Measure tool (distance, perimeter, area – scale calibration)

· Add bookmark (from selected text)

· Add link (to page, URL, file, custom action)



Forms



· Create form from scratch, from existing PDF, from Word/Excel

· Form field types: text field, checkbox, radio button, dropdown list, list box, button, signature field, date picker, barcode (QR, Code 128, PDF417)

· Set field properties (name, tooltip, default value, required, read-only, calculation: sum, product, average, custom script)

· Multi-line text fields, rich text formatting, character limit

· Radio button groups (mutually exclusive)

· Dropdown: add items, allow custom entries, sort items

· Button: submit form (email, URL), reset form, import/export data, run JavaScript

· Auto-complete form fields

· Distribute forms (email FDF/XFDF data)

· Collect responses (merge to spreadsheet)

· JavaScript for advanced form logic



PDF Creation



· From scanner (WIA, TWAIN – single or multi-page)

· From multiple files (merge images, Word, Excel, PowerPoint, HTML, TXT)

· From clipboard (screenshot)

· From web page (local HTML, save as PDF with links)

· From blank page (custom size: A0-A6, Letter, Legal, Tabloid, Arch A-E)



Conversion & Export



Export to: Word (DOCX, editable text), Excel (XLSX – extract tables), PowerPoint (PPTX), HTML (with images), Text (plain, unicode, structured), Image (JPG, PNG, TIFF, GIF, BMP, JPEG2000), XML (XML 1.0, FDF, XFDF), CSV (from tables), AutoCAD (DXF/DWG from vector PDF)

Import from: Word, Excel, PowerPoint, HTML, Image, TXT, AutoCAD, Visio (VDW, VDX)



Security & Signatures



· Password security (user password to open, owner password to restrict printing/editing/extracting)

· Permissions (printing allowed, high/low res; changes allowed: none, filling forms, commenting, any except page extraction; content copying, document assembly)

· Certificate security (digital ID from file, Windows certificate store, smart card)

· Redaction (mark for redaction, apply redactions – permanently remove text/images, search and redact patterns: SSN, credit card, phone, email)

· Sanitize document (remove hidden info: metadata, comments, form data, hidden layers, embedded content)

· Digital signatures (create signature field, sign with certificate, timestamp, validation, signature appearance – logo, location, reason)

· Certify document (approval signature)



Optimize & Repair



· Reduce file size (compress images: JPEG2000, JPEG medium/low, ZIP; discard objects: comments, bookmarks, form fields; remove embedded fonts, downscale images)

· Optimize scanned pages (deskew, background removal, descreen, text smoothing)

· Preflight (PDF/A-1b, PDF/A-2b, PDF/X-1a validation; fix syntax errors; convert color spaces)

· Remove hidden information (metadata, attachments, comments, form fields, overlays)

· Repair corrupt PDF (reconstruct xref table, parse objects)



Accessibility



· Add/Edit document title, language, author

· Set reading order (touch up reading order tool)

· Add alternate text for figures, forms, links

· Tag PDF for screen readers (auto-tag, manual tag tree – headings, paragraphs, lists, tables, artifacts)

· Check accessibility (full report with WCAG 2.1 AA)

· Run accessibility auto-repair



Advanced Features



· Compare two PDFs (visual diff, text diff, highlight differences)

· Bates numbering (prefix, start number, suffix, number of digits)

· Header and footer (add to all pages, custom margins, page number macros, date/time)

· Watermark (add text or image; custom position, scale, opacity, rotation)

· Background (add or replace; color, image)

· Insert pages (from file, from scanner, from clipboard)

· Extract pages (save selected range as new PDF)

· Delete pages, replace pages, crop pages

· Split document (by top-level bookmarks, by number of pages, by file size, by blank pages)

· Combine files (merge multiple PDFs, reorder)

· Attach file portfolio (multiple file types in one PDF)

· JavaScript support (full Acrobat JavaScript API: document actions, field calculations, batch processing, console)

· Plug-in manager (load third-party plug-ins)

· Batch processing (predefined sequences: optimize, convert to searchable PDF, watermark, header/footer – save as action)

· Action wizard (record sequence for one-click automation)





Development Considerations (Senior Dev Notes)



Architecture



· Core engine: Rust (for speed, memory safety) or C++ (for VBA compatibility)

· UI framework: WebView2 (Windows) + WebKitGTK (Linux) + WKWebView (macOS) – or Canvas/SVG-based rendering with Skia

· File format handling: Use LibreOffice’s document liberation libraries or Apache POI (Java) + PDFium (PDF) + MuPDF (OCR)

· Offline storage: SQLite for recent documents, user preferences, custom dictionaries

· Printing: OS-native print dialog with Cairo/Quartz rendering



Key Technical Challenges



1. DOCX rendering fidelity: Reverse-engineer Office Open XML (ECMA-376) – handle wacky edge cases (nested tables, floating objects, complex fields)

2. XLSX formula engine: Implement 450+ functions with circular reference detection, volatile functions, array evaluation

3. PPTX morph transition: Calculate interpolation between slide objects (position, color, size, rotation)

4. PDF editing: Incremental update (append new objects), preserve digital signatures, handle encrypted and linearized PDFs

5. OCR integration: Tesseract 5 (offline) with layout analysis, automatic language detection

6. Macros: VBA interpreter (or embed Lua/JavaScript for cross-platform)



Build & Distribution



· Desktop: Electron (slower but easier) or Tauri (Rust backend, smaller binary)

· Web version: Same codebase compiled to WASM (localStorage only)

· Installers: NSIS (Windows), pkg (macOS), .deb/.rpm (Linux)



Testing Strategy



· File compatibility: Microsoft Office binary test suite (1,000+ DOCX/XLSX/PPTX with complex features)

· Round-trip tests: Import → edit → export → compare with original (render diff)

· Performance: Open 200MB Excel file, render 100-slide PPTX, OCR 500-page PDF

· Memory leak detection: Valgrind/DrMemory for native code



