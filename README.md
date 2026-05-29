# Asan Office Suite

Asan Office is a fully offline, professional-grade desktop office suite built with **Tauri**, **Rust**, and **React**. It is designed for maximum privacy and performance, featuring no cloud synchronization and local-only AES-256 encryption.

## Components
- **Asan Word**: Professional word processor powered by TipTap/ProseMirror. Includes LaTeX equation editing, JS-based macros, and high-fidelity page rendering.
- **Asan Sheet**: High-performance spreadsheet powered by FortuneSheet. Supports Excel-compatible formulas, PivotTables, and XLSX export.
- **Asan Slide**: Presentation editor with thumbnail-based navigation and smooth Framer Motion transitions.
- **Asan PDF**: Secure PDF viewer and annotator with support for digital signatures and encryption.

## Tech Stack
- **Backend**: Rust (Tauri)
- **Frontend**: React, Typescript, Tailwind CSS
- **Monorepo**: pnpm workspaces
- **State Management**: React Hooks + Lazy loading for sub-apps

## Getting Started
1. `pnpm install`
2. `pnpm shell dev` (to start the web-based shell)
3. `pnpm tauri dev` (to start the native desktop app)

## Security
- No internet access required.
- Local document history stored in SQLite.
- File encryption: AES-256 enabled by default.
