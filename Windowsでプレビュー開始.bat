@echo off
cd /d "%~dp0"
title Python LAB - Local Preview
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-local-server.ps1"
if errorlevel 1 (
 echo.
 echo Unable to start the local preview.
 echo You can use GitHub Pages instead.
 pause
)
