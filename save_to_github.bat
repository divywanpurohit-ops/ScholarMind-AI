@echo off
echo ========================================================
echo SCHOLARS AI - GitHub Repository Initialization Script
echo ========================================================
echo.

REM Navigate to the script's directory
cd /d "%~dp0"

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git is not installed or not found in system PATH.
    echo Please install Git from https://git-scm.com/ and try again.
    pause
    exit /b
)

REM Check if .git directory already exists
if exist ".git" (
    echo [INFO] Git repository already exists here. Adding new files...
    git add .
    set /p COMMIT_MSG="Enter commit message (or press enter for 'Update Scholars AI'): "
    if "%COMMIT_MSG%"=="" set COMMIT_MSG="Update Scholars AI"
    git commit -m "%COMMIT_MSG%"
    
    echo Pushing to GitHub...
    git push origin main
    if %errorlevel% neq 0 (
        echo [ERROR] Failed to push to GitHub. Check your network or remote settings.
    ) else (
        echo [SUCCESS] Code pushed successfully!
    )
    pause
    exit /b
)

REM Initialize new repository
echo [INFO] Initializing new Git repository...
git init
git checkout -b main

echo [INFO] Adding all files (respecting .gitignore)...
git add .

echo [INFO] Committing files...
git commit -m "First commit: Initialized Scholars AI Architecture"

echo.
set /p REPO_URL="Enter your EMPTY GitHub repository URL (e.g., https://github.com/YourUsername/scholarmind.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL provided. Aborting push. 
    echo Your files are committed locally. You can push them later manually.
    pause
    exit /b
)

echo [INFO] Adding remote origin...
git remote add origin "%REPO_URL%"

echo [INFO] Pushing to GitHub...
git push -u origin main

if %errorlevel% neq 0 (
    echo [ERROR] Failed to push to GitHub. Make sure the repository exists and is empty.
) else (
    echo.
    echo ========================================================
    echo [SUCCESS] SCHOLARS AI has been published to GitHub!
    echo ========================================================
)

pause
