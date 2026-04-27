@echo off
echo ========================================================
echo SCHOLARMIND AI - One-Click Launch System
echo ========================================================
echo.

REM Navigate to the script's directory
cd /d "%~dp0"

echo [1/2] Starting BACKEND Server (AI Services)...
start cmd /k "cd backend && echo Installing dependencies (if needed)... && npm install && echo Starting Server... && npm start"

echo [2/2] Starting FRONTEND (User Interface)...
start cmd /k "cd frontend && echo Installing dependencies (if needed)... && npm install && echo Starting UI... && npm run dev"

echo.
echo ========================================================
echo [SUCCESS] Both modules are starting in separate windows.
echo.
echo 1. Check the BACKEND window for "Server running on port 5000"
echo 2. Check the FRONTEND window for "Ready on http://localhost:3000"
echo 3. Open your browser and go to: http://localhost:3000
echo ========================================================
echo.
pause
