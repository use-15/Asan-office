@echo off
setlocal enabledelayedexpansion

echo ===================================================
echo   Asan Office - Windows Build Tool
echo ===================================================
echo.

:: Check for Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed.
    pause
    goto :eof
)
echo [OK] Node.js found.

:: Check for Rust
where cargo >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Rust is not installed.
    pause
    goto :eof
)
echo [OK] Rust found.

echo [STEP 1/3] Installing dependencies...
call pnpm install

echo [STEP 2/3] Building frontend...
call pnpm build

echo [STEP 3/3] Generating setup.exe...
call pnpm tauri build

echo Done.
pause