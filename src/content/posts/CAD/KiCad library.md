---
title: KiCad Library
published: 2025-03-23
description: "Importing / converting from other sources"
tags: ["PCB"]
category: Notes
draft: false
---

# Import with Import-LIB-KiCad-Plugin

::github{repo="Steffen-W/Import-LIB-KiCad-Plugin"}

This plugin does not pull anything online, instead it helps manage those already downloaded. Footprints/symbols are sorted by their sources.


1. `Folder of the library to import` is where you put the .zip files from UltraLibrarian, SnapEDA and other platforms.
2. `Library save location` is where the converted library locates.

![](KiCad%20library.assets/1.png)

3. Configure an environmental path via Preference -> Configure paths -> Environment Variables.

| Name | Path |
|---|---|
|KICAD_3RD_PARTY|`Library save location`|

![](KiCad%20library.assets/2.png)

For me there's already a `KICAD9_3RD_PARTY`, I guess that's sort of official variable and could be ignored.

4. When import something, put the .zip file under `Folder of the library to import`, go back to impartGUI window and press `Start`, then the converted component will be in their corresponding lib file. It throws a warning that the specific lib file is not included in the workspace when component from that platform is imported for the first time. You just include it.

e.g. when SnapEDA is used for the first time:

Includes the footprint library (a folder ends with .pretty)

![](KiCad%20library.assets/3.png)

Includes the symbol library (.sym).

![](KiCad%20library.assets/4.png)

I notice that this plugin also puts the .step file in a `xxx.3dshapes` folder, that worths a star on Github.