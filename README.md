# Asan Office - Professional Offline Suite

Asan Office is a high-performance, fully offline desktop productivity suite built with **Tauri**, **Rust**, and **React**. It offers feature parity with industry standards while ensuring 100% data privacy through local-only storage and AES-256 encryption.

## 📥 Installation

*   **Windows**: [Read the Windows Installation Guide](INSTALL_WINDOWS.md)
*   **macOS/Linux**: [Releases Page](https://github.com/asan/office/releases)

## 🚀 Key Applications

### 📝 Asan Word
*   **Engine**: TipTap/ProseMirror based professional word processor.
*   **Features**: Full character/paragraph formatting, Table management, Task lists, Image insertion.
*   **Advanced**: LaTeX Equation Editor, Regex Find & Replace, JS-based Macro system.

### 📊 Asan Sheet
*   **Engine**: FortuneSheet high-performance spreadsheet engine.
*   **Features**: 450+ Excel-compatible functions, PivotTable manager, Conditional formatting.
*   **Data**: Native XLSX export using `exceljs`, local persistence.

### 📽️ Asan Slide
*   **Engine**: Custom React-based presentation stage with Framer Motion transitions.
*   **Features**: Slide CRUD, dynamic layouts, Thumbnail navigation.

### 📄 Asan PDF
*   **Engine**: PDF.js & `pdf-lib` integration.
*   **Features**: Multi-page viewing, functional Zoom, Annotations (Highlight/Draw).
*   **Security**: Digital signature verification, AES-256 encryption toggle.

## 🛠️ Development Setup

1.  **Install Dependencies**: `pnpm install`
2.  **Launch Web Shell**: `pnpm shell dev`
3.  **Launch Desktop App (Tauri)**: `pnpm tauri dev`

## 📦 CI/CD & Releases
The project includes a **GitHub Actions** workflow (`.github/workflows/release.yml`) that builds native binaries for Windows, macOS, and Linux on every version tag push.

## 🔒 Security & Privacy
*   **No Cloud**: No data ever leaves your machine.
*   **Encryption**: Documents are secured using local AES-256 block ciphers.
*   **Offline Release**: No telemetry, no internet-required activation.

---
*Developed by Senior Office Suite Developers*
