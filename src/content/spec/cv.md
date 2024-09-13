---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

# Education
**B.S.** in Electrical & Information Engineering, Zhejiang University

# Honor
<table cellpadding="10" cellspacing="0" width="100%" style="font-size: 16px;">
    <tr>
        <td width="15%">2023</td>
        <td>Third-Class Scholarship</td>
        <td>Zhejiang University</td>
    </tr>
    <tr>
        <td>2023</td>
        <td>Academic Excellence Award</td>
        <td>Zhejiang University</td>
    </tr>
    <tr>
        <td>2022</td>
        <td>Innovation Excellence Award</td>
        <td>Zhejiang University</td>
    </tr>
</table>

# Language

<table cellpadding="10" cellspacing="0" width="100%" style="font-size: 16px;">
    <tr>
        <td>TOEFL</td>
        <td>105</td>
    </tr>
    <tr>
        <td>GRE</td>
        <td>Exam on Oct 11</td>
    </tr>
 
</table>

# Research Experience
## Wireless Neural Stimulator with Simultaneous Energy-Information Transmission

- An implanted Sphenopalatine Ganglion stimulator powered and controlled by an inductively coupled coil pair. The device eases the symptoms of stroke by generating current pulses to the nerve tissue, so that the blood flow in the brain is recovered.
- Responsible for circuit design and validation. Design a miniature implanted stimulator which receives power and control signal simultaneously from a single coil pair. The control signal is demodulated from the RF power carrier. Biphasic constant-current pulse is generated through a polarity recovering circuit and an amplifier with current feedback.
- Proposed a novel constant-voltage wireless power transmission system, which suits the 13.56MHz ISM band and needs no upstream communication from the receiver. Independently finished the theoretical analysis, built the experiment platform and analyzed the experiment result. Attended the INGEP 2024 conference with poster presentation as the first author.
- Collaborated with the R&D team of Zhejiang Qizhen Healthcare Tech Ltd.. Acquired 2 national patents.
- Ran circuit-level simulation in PSpice and ADS, system-level simulation in Simulink. Designed PCBs by Altium Designer. Tuned the parasitic parameters by Ansys Maxwell.

# Selected Projects
## 1kW Bidirectional Isolated DC/DC Converter

<div style="display: flex; justify-content: space-between;">
    <img src="/images/MultistageCLLC-1.png" alt="Image 1" style="height: auto; width: 32%; object-fit: contain;">
    <img src="/images/MultistageCLLC-2.png" alt="Image 2" style="height: auto; width: 32%; object-fit: contain;">
    <img src="/images/MultistageCLLC-3.png" alt="Image 3" style="height: auto; width: 32%; object-fit: contain;">
</div>

- Designed a 1kW bidirectional isolated DC/DC Converter, with 36~60V on the LV side and 400V on the HV side. The device achieves peak efficiency of 94% in experiment. GaN HEMT and planar transformer are used to improve power density, allowing for portable size with the thickness low as 25mm. Experiment shows that the converter is capable of driving 500W load with natural cooling at room temperature, or 1kW load with an extra 10W forced cooling.
- Responsible for circuit design. Proposed a multistage topology combining a multi-winding CLLC converter and a synchronous buck/boost adjusting stage. Derived the steady-stage gain in MATLAB and tuned the component values. Ran simulations in PLECS and PSpice. Selected the switching devices based on the result of the loss stimulations.
- Independently designed the gate driver, isolated sampling circuit, auxiliary power supply and other subsystems. Drew a 6-layer PCB by Altium Designer. Designed the DSP controller daughter board.
- As the leader, won the special prize (2nd place nationwide) with a team of four. Distributed the missions and organized the experiments during the competition. Participated in multiple replies. Finished the report, poster, video, etc.

## Smart Stethoscope & Electrocardiogram Detector

<div style="display: flex; justify-content: space-between;">
    <img src="/images/heartsound-1.jpg" alt="Image 1" style="height: auto; width: 45%; object-fit: contain;">
    <img src="/images/heartsound-2.jpg" alt="Image 2" style="height: auto; width: 45%; object-fit: contain;">
</div>


- Designed a smart stethoscope for early scan of congenital cardiac diseases. The device is powered by battery and communicates via Bluetooth. The electrocardiogram (ECG) and the sound of the heart are sampled simultaneously and are transmitted to the upper device, which uses a pre-trained ML model to detect the indications of cardiac diseases.
- Responsible for hardware design. Designed a heart sound detector using microphone and OPAMP, an ECG detector using AD8232 signal conditioning block, a Li-ion battery managing circuit and the peripheral circuits of an ESP32 SoC. Drew a 4-layer round PCB with diameter of 30mm.
- Participated in the development of embedded software. Designed a 16-order Butterworth notch filter in MATLAB and implemented it on ESP32.
- Won the first prize with a team of three. Wrote the report and participated in the replies.

# Extracurricular Activities
## Student Robotics Association, Zhejiang Univ.
- Elected as the director of software department. Responsible for crew training, including basic circuit design, sensor usage and Arduino programming.

## Qizhen Interdisciplinary Innovation & Entrepreneur Lab, Zhejiang Univ.
- Host seminars regularly to share technical updates with team members.
- Responsible of crew training, including circuit simulation and PCB design fundamentals.

<!-- # Technique Skills
**Circuit-level simulation tools**: Cadence PSpice, PLECS, ADS, Multisim, Proteus.

**PCB design tools**: Altium Designer.
Embedded Software Development: Embedded Linux on Zynq 7000 SoC, STM32, ESP32.

**Software Development**: C# under .NET Framework, Network programming with C, MATLAB & Python programming for calculation or data acquisition.

**Document composing**: Latex / Overleaf.

**Graphic design**: Photoshop, Inksacpe. -->