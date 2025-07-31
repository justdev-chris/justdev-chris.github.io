@echo off
title cat virus
mode 1000
color 0D

:: Disable quick edit to stop her from pausing it accidentally
reg add "HKCU\Console" /v QuickEdit /t REG_DWORD /d 0 /f >nul

:: Hide the taskbar & go fullscreen
powershell -command "$null = Add-Type -MemberDefinition '[DllImport(\"user32.dll\")] public static extern int ShowWindow(int hWnd, int nCmdShow);' -Name 'WinAPI' -Namespace 'Win32'; $hwnd = (Get-Process -Id $pid).MainWindowHandle; [Win32.WinAPI]::ShowWindow($hwnd, 3)"

:: Loop forever
:loop
cls
echo o a you've been caught by the CAT VIRUS 
echo.
echo now your system is 100% floofified with CATS... that meow meow meow
echo press Alt + F4 if you think u can escape...
echo.
start https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif
timeout /t 5 >nul
goto loop