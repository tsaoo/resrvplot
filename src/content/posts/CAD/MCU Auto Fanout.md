---
title: MCU Auto Fan-Out Tool
published: 2025-04-17
description: "Scripts for KiCAD & Altium Designer"
tags: ["PCB", "Project"]
category: Public
draft: false
---

# CubeMX + KiCAD
 
This script automatically fans out MCUs in KiCAD according to the pin-out files exported from STM32 CubeMX, based on API provided by [![Static Badge](https://img.shields.io/badge/psychogenic-kicad--skip-green)](https://github.com/psychogenic/kicad-skip/)


1. Start with a CubeMX project. Other software will be supported in future. Do Pinout->Export pinout without Alt. Functions

![](MCU%20Auto%20Fanout.assets/KiCAD_1.png)

2. Get your KiCAD schematic ready.

3. Run `MCUFanout.py`, enter paths to schematic file (*.kicad_sch) and the pinout file exported from CubeMX.
   
    `Fanout Length`: The length of fan-out wire, 1 unit = 50 mils (the recommended grid length of KiCAD).

    `Component Key`: `Reference` means finding the MCU component by its reference (designator), regex is supported; `Value Prefix` means finding by the prefix of value of components. e.g. when designating `Value Prefix = STM32` the script will fan out all components with values begin with 'STM32', like 'STM32F103...' or 'STM32H750...'.

    `Enable Global/Local Label`: Whether a global/local label showing the functions of pins should be created.

    With the configuration in below, the script will fan out 1000-mils-long wires with both global & local labels from component U1, according to pinout.csv.

![](MCU%20Auto%20Fanout.assets/KiCAD_2.png)

4. Press `Run`, then re-open the schematic in KiCAD.

![](MCU%20Auto%20Fanout.assets/KiCAD_3.png)


# CubeMX + Altium Designer
This script automatically fans out MCUs in Altium Designer according to the pin-out file exported from STM32 CubeMX.

1. Starting from a CubeMX project, do Pinout->Export pinout without Alt. Functions

![](MCU%20Auto%20Fanout.assets/AD_1.png)

2. Load EETools.PrjScr to your workspace.

![](MCU%20Auto%20Fanout.assets/AD_2.png)

3. Run MCUFanout.pas, fill in pinout file path, fanout length and MCU type, click Run.

![](MCU%20Auto%20Fanout.assets/AD_3.png)

4. Finished.
   
![](MCU%20Auto%20Fanout.assets/AD_4.png)

