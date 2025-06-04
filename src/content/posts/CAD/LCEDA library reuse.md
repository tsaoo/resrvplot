---
title: How to Reuse Component Libraries from LCEDA
published: 2025-02-17
description: "如何利用立创EDA元件库（X-Lab）"
tags: ["PCB"]
category: Public
draft: false
---

> 如果你在看，很大可能是X-Lab来的。这篇文档以前是放在X-DIY里的，但是不知为何在X-DIY网站里找不到了，所以挪到这里来。

# 如何利用立创EDA元件库

首先声明，在我编写这个文档的时候，没有注意到嘉立创声明不允许如此使用其元件库。

- [如何利用立创EDA元件库](#如何利用立创eda元件库)
  - [从立创EDA导出目标原件的封装](#从立创eda导出目标原件的封装)
  - [在AD中导入封装](#在ad中导入封装)
  - [从立创EDA导出3D模型](#从立创eda导出3d模型)
  - [使用Solidworks去除PCB模型](#使用solidworks去除pcb模型)
  - [在AD中为封装导入3D模型](#在ad中为封装导入3d模型)

在本文的例子中，我为XLAB标准连接器库添加了一个24p金手指插座。

## 从立创EDA导出目标原件的封装
![lceda1](LCEDA%20library%20reuse.assets/lceda1.png)
![lceda2](LCEDA%20library%20reuse.assets/lceda2.png)
在立创EDA中新建一块**有且仅有本元件**的PCB，然后导出到Altium Designer。EDA自动生成一个压缩包并下载，里面有AD的工程文件。

## 在AD中导入封装
![ad1](LCEDA%20library%20reuse.assets/ad1.png)
打开压缩包中的pcbdoc。

![ad2](LCEDA%20library%20reuse.assets/ad2.png)
**将该元件调整到坐标原点（x=0, y=0），然后以坐标原点为参考点复制该元件。**

![ad3](LCEDA%20library%20reuse.assets/ad3.png)
![ad4](LCEDA%20library%20reuse.assets/ad4.png)

在元件库的pcblib中新建一个空封装，把复制的元件粘贴到工作区的坐标原点。

![ad5](LCEDA%20library%20reuse.assets/ad5.png)

使用Symbol Wizard工具建立该元件对应的原理图符号。在这个例子中，虽然金手指只有24p，但是该连接器带有两个固定用的pad，这两个pad也要算作元件的管脚。当然也可以不算，反正一般也把这种pad悬空。

![ad6](LCEDA%20library%20reuse.assets/ad6.png)
![ad7](LCEDA%20library%20reuse.assets/ad7.png)

绑定封装，并检查封装与元件的管脚映射。

以下功能需要使用Solidworks或其它能处理STEP文件的软件。

## 从立创EDA导出3D模型

**立创EDA专业版客户端导出的STEP文件没有元件模型，可能是客户端bug。可以在网页版EDA操作：** [pro.lceda.cn](https://pro.lceda.cn/editor)


![lceda3](LCEDA%20library%20reuse.assets/lceda3.png)



## 使用Solidworks去除PCB模型
![solidworks1](LCEDA%20library%20reuse.assets/solidworks1.png)

打开STEP文件

![solidworks2](LCEDA%20library%20reuse.assets/solidworks2.png)

将文件另存为*.sldprt

![solidworks3](LCEDA%20library%20reuse.assets/solidworks3.png)
![solidworks4](LCEDA%20library%20reuse.assets/solidworks4.png)

选中PCB基板并删除

![solidworks5](LCEDA%20library%20reuse.assets/solidworks5.png)

导出为*.STEP格式

## 在AD中为封装导入3D模型
![ad8](LCEDA%20library%20reuse.assets/ad8.png)

打开刚刚建好的封装，放置3D Body

![ad9](LCEDA%20library%20reuse.assets/ad9.png)

如果你刚刚已经把封装调整到坐标原点，那么这时候3D文件应该是能恰好对上封装的。

![ad10](LCEDA%20library%20reuse.assets/ad10.png)

进入3D视图（默认快捷键：数字3），选中封装，调整Standoff Height，使3D模型恰好贴在焊盘上。

**当然，这个方法可以批量导入一堆器件，只需从LCEDA导出的时候把你要的元件全摆上，再用AD/Solidworks一个个筛就行了。**