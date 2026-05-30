# Asan Office - Professional Offline Suite

Asan Office is a high-performance, fully offline desktop productivity suite built with **Tauri**, **Rust**, and **React**. It offers feature parity with industry standards while ensuring 100% data privacy through local-only storage and AES-256 encryption.

## 🚀 Key Applications

### 📝 Asan Word
*   **Engine**: TipTap/ProseMirror based professional word processor.
*   **Features**: Full character/paragraph formatting, Table management, Task lists, Image insertion.
*   **Advanced**: LaTeX Equation Editor, Regex Find & Replace, JS-based Macro system, and real-time word counting.

### 📊 Asan Sheet
*   **Engine**: FortuneSheet high-performance spreadsheet engine.
*   **Features**: 450+ Excel-compatible functions, PivotTable manager, Conditional formatting.
*   **Data**: Native XLSX export using `exceljs`, local persistence, and offline data analysis tools.

### 📽️ Asan Slide
*   **Engine**: Custom React-based presentation stage with Framer Motion transitions.
*   **Features**: Slide CRUD, dynamic layouts (Title/Content), Thumbnail navigation.
*   **Visuals**: Professional "Transitions & Animations" sidebar, high-fidelity slide rendering.

### 📄 Asan PDF
*   **Engine**: PDF.js & `pdf-lib` integration.
*   **Features**: Multi-page viewing, functional Zoom (50%-200%), Annotations (Highlight/Draw).
*   **Security**: Digital signature verification, AES-256 encryption toggle, secure document container.

## 🛠️ Architecture & Setup

### Requirements
*   **Node.js**: v18+
*   **Rust**: v1.70+ (for Tauri builds)
*   **pnpm**: v8+

### Development Setup
1.  **Install Dependencies**:
    ```bash
    pnpm install
    ```
2.  **Launch Web Shell**:
    ```bash
    pnpm shell dev
    ```
3.  **Launch Desktop App (Tauri)**:
    ```bash
    pnpm tauri dev
    ```

### Monorepo Structure
*   `apps/shell`: The main dashboard and application orchestrator.
*   `apps/word|sheet|slide|pdf`: Isolated, high-fidelity productivity applications.
*   `packages/asan-ui`: Shared design tokens and branding components.
*   `src-tauri`: Rust backend for native system access and local security.

## 🔒 Security & Privacy
*   **No Cloud**: No data ever leaves your machine.
*   **Encryption**: Documents are secured using local AES-256 block ciphers.
*   **Local History**: SQLite-based history tracking for recent documents.
*   **Offline Release**: No telemetry, no internet-required activation.

---
*Developed by Senior Office Suite Developers*
