---
title: Digilent HDMI IP
published: 2024-09-02
description: "How to implement Digilent HDMI IP and drivers for Pl HDMI display pipeline"
tags: ["Petalinux", "Zynq"]
category: Petalinux
draft: true
---

# Digilent HDMI IP

Digilent (likely a partner of Xilinx) provides an RGB to DVI Soft IP Core that includes a dynamic clock generator and an RGB-to-DVI converter. I used these to display HDMI color bars entirely on the PL side, and it works well. However, because the Linux graphics system is quite complex (involving AXI stream, VDMA, DRM, etc.), drivers from Digilent are required.

However, the last update for these drivers was in 2017. When the [Linux kernel](https://www.kernel.org/) was upgraded to version 5.0, they removed `drmP.h`, which the Digilent drivers rely on. Additionally, Xilinx removed the `/driver/gpu/drm/xilinx` directory from [linux-xlnx](https://github.com/Xilinx/linux-xlnx), where these drivers should have been placed. There has been no response from Digilent; they seem to have done nothing about this. Even in their [own version of the kernel](https://github.com/Digilent/linux-digilent), there's no trace of the drivers.

Consequently, in the year of 2024, to build the Zynq board compatible with HDMI interface, the options are:

- Switch to  Xilinx official IP Core [HDMI 1.4/2.0 Transmitter Subsystem](https://docs.amd.com/r/en-US/ug1449-multimedia/HDMI-Transmitter-Subsystem) alternatively. However it's not free, neither can you purchase online like Amazon.

- Use off-chip PHY like ADI ADV7511. Xilinx implement this solution on their evalution boards. ADI provides HDL reference designs, drivers and even a custom kernel on their [wiki](https://wiki.analog.com/resources/fpga/xilinx/kc705/adv7511#downloads). But I haven't seen on the Internet that someone has built a custom board with that and it worked.

- Rollback the kernel used by Petalinux so that the ancient Digilent IP cores and drivers still work. Some tinkers on both the driver and the kernel are necessary, but it's not as horrible as I thought to amend the kernel, so it's farily worthy.

# Rollback the Linux-Xlnx Kernel

## Download or Clone
v4.9 (2019)

## Fix
linux/driver/gpu/drm/drm_file.h

'extern'thing

# Configure Petalinux (2023.1)

## Use Local Kernel
path, license md5

## Disable Sanitary Check
/project-spec/meta-user/recipe-kernel/linux/.config

## Add Digilent Drivers as Custom Modules
create module

copy files

petalinux-config -c kernel

petalinux-config -c rootfs

# Edit the Driver
replace obsolute functions

# Device Tree and Final Build
check the forum about the device tree.