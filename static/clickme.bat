@echo off
color 1F
title 🐾 CAT VIRUS LOCKDOWN MODE 🐾
mode con: cols=160 lines=900

:: Auto fullscreen using powershell trick (ALT+ENTER via API)
powershell -command "$sig = '[DllImport(\"user32.dll\")]public static extern bool keybd_event(byte bVk, byte bScan, int dwFlags, int dwExtraInfo);'; Add-Type -MemberDefinition $sig -Name 'Keyboard' -Namespace 'Win32'; [Win32.Keyboard]::keybd_event(0xA4,0,0,0); [Win32.Keyboard]::keybd_event(13,0,0,0); [Win32.Keyboard]::keybd_event(13,0,2,0); [Win32.Keyboard]::keybd_event(0xA4,0,2,0);"

:: Begin infinite snuggle loop
:meowloop
cls
echo.
echo 💻 CAT VIRUS ACTIVE 💻
echo.
echo 🐾 ur system is now owned by cat.exe
echo cats at 900%...
echo.
echo press ALT + F4 if u hate cats or want to escape
echo (but why would u the cats... 
echo.
timeout /t 2 >nul
goto meowloop