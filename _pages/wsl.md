---
layout: single
title: WSL
permalink: /wsl/
---


When transferring files from windows to WSL ubuntu folders, it's possible that Zone.Identifier files arise. You can remove these using:
```
find . -name "*Zone.Identifier" -type f -delete
```