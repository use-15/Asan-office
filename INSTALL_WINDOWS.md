# Asan Office - Windows Installation Guide

Since Asan Office is an offline suite, you may need to build the installer (setup.exe) yourself after downloading the source code.

## 🚀 The Easiest Way: Automated Build

The codebase includes an automated build tool for Windows.

1.  **Open the Folder**: Locate the `asan-office` folder you downloaded.
2.  **Run the Builder**: Double-click the file named `build_windows.bat`.
3.  **Wait for Completion**: The script will automatically check for Node.js/Rust, install dependencies, and generate your `setup.exe`.
4.  **Find your Installer**: Once finished, your installer will be located in:
    `src-tauri\target\release\bundle\msi\`

---

## 🛠️ Manual Installation (Developers)

### 1. Prerequisites
*   **Node.js**: [Download here](https://nodejs.org/).
*   **Rust**: [Install via rustup](https://rustup.rs/).
*   **pnpm**: `npm install -g pnpm`

### 2. Commands
```powershell
pnpm install
pnpm build
pnpm tauri build
```

---

## ❓ Troubleshooting

### "Node.js or Rust not found"
If the `build_windows.bat` script shows an error, make sure you have installed Node.js and Rust from the links above and **restarted your computer** so the system recognizes them.

### "WebView2 Runtime not found"
If the app opens but is blank, install the [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).
