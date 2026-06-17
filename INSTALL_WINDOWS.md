# Asan Office - Windows Installation Guide

This guide covers how to install Asan Office on Windows, either as a pre-built application or by building it from source.

## 📥 Option 1: Install Pre-built Release (Recommended)

If you just want to use the app, follow these steps:

1.  **Download the Installer**:
    Go to the [GitHub Releases](https://github.com/asan/office/releases) page and download the latest `.msi` or `setup.exe` file.
2.  **Run the Installer**:
    Double-click the downloaded file. Windows SmartScreen might show a warning because the app isn't signed with a commercial certificate.
    *   Click **"More info"**
    *   Click **"Run anyway"**
3.  **Complete Setup**:
    Follow the on-screen instructions to finish the installation.
4.  **Launch**:
    You can now find **Asan Office** in your Start Menu.

---

## 🛠️ Option 2: Build from Source (Developers)

If you want to contribute or build the latest development version, follow these steps:

### 1. Prerequisites
Ensure you have the following installed on your Windows machine:
*   **Node.js**: [Download here](https://nodejs.org/) (Use LTS version).
*   **Rust**: [Install via rustup](https://rustup.rs/).
    *   *Note: During Rust installation, choose the default options to install the C++ build tools via Visual Studio.*
*   **pnpm**: Install via terminal: `npm install -g pnpm`
*   **WebView2**: Most modern Windows systems have this, but if not, download the [Evergreen Bootstrapper](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).

### 2. Clone the Repository
```powershell
git clone https://github.com/asan/office.git
cd office
```

### 3. Install Dependencies
```powershell
pnpm install
```

### 4. Run Development Mode
To see changes in real-time:
```powershell
pnpm tauri dev
```

### 5. Build the Native Installer
To create your own `.msi` installer:
```powershell
pnpm tauri build
```
The installer will be located in `src-tauri/target/release/bundle/msi/`.

---

## ❓ Troubleshooting

### "WebView2 Runtime not found"
If the app opens but shows a blank screen or an error, you may need to install the Microsoft Edge WebView2 Runtime. [Download here](https://developer.microsoft.com/en-us/microsoft-edge/webview2/).

### "Execution of scripts is disabled on this system"
If you get this error in PowerShell while running `pnpm`, run this command as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Build Errors (Missing C++ Build Tools)
If `pnpm tauri build` fails with Rust errors, ensure you have "Desktop development with C++" selected in the Visual Studio Installer.
