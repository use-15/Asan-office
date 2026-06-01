# Asan Office - Professional Offline Suite

Asan Office is a high-performance, fully offline desktop productivity suite built with **Tauri**, **Rust**, and **React**. It offers feature parity with industry standards while ensuring 100% data privacy through local-only storage and AES-256 encryption.

## 🖼️ Visual Overview

| Dashboard | Asan Word |
| :---: | :---: |
| Clean entry point with quick launchers and recent document history. | Professional word processor with high-fidelity page rendering and Ribbon UI. |
| [View Dashboard Design] | [View Word Design] |

| Asan Sheet | Asan Slide |
| :---: | :---: |
| High-performance spreadsheet with 450+ functions and PivotTables. | Presentation editor with thumbnail navigation and motion transitions. |
| [View Sheet Design] | [View Slide Design] |

| Asan PDF |
| :---: |
| Secure PDF annotator with digital signatures and AES-256 hardening. |
| [View PDF Design] |

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
*   **Node.js**: v20+
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

### 📦 CI/CD & Releases
The project includes a **GitHub Actions** workflow (`.github/workflows/release.yml`) that builds native binaries for Windows, macOS, and Linux on every version tag push.

## 🔒 Security & Privacy
*   **No Cloud**: No data ever leaves your machine.
*   **Encryption**: Documents are secured using local AES-256 block ciphers.
*   **Local History**: SQLite-based history tracking for recent documents.
*   **Offline Release**: No telemetry, no internet-required activation.

---
*Developed by Senior Office Suite Developers*
