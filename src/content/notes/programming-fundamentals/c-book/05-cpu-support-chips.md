---
title: CPU Support Chips
slug: programming-fundamentals/c-book/cpu-support-chips
sidebar:
  order: 5
prev: true
next: true
---

Carries out tasks on behalf of the CPU.

Examples:

- Direct Memory Access controllers
- Disk controllers
- Real-Time Clock
- Display controllers
- Interrupt controllers
- Communication controllers

### DMA controllers

Provides a way of bypassing the CPU when transferring data between memory and
Input/Output (IO) devices. Resides between memory and CPU.

### Disk controllers

When reading from or writing to a disk the CPU will create a buffer (special
memory area) containing the sector address and the data to be written or read.
Then the CPU informs the controller about the location of the buffer. The
controller then transfers the content of the buffer directly from memory to the
disk sector.

Examples:

- Floppy Disk Controller
- ATA Controller

### Real-Time Clocks

Used to keep track of time of the day. Usually backed-up by an extra power
source such as a $\ce{Li+}$ battery. Used to store some of the configuration
information such as CMOS setup memory. $ $

### Display controllers

Used to generate images and text that you see on the displaying device on behalf
of the CPU. The actual image (which is binary data) is generated in its memory
called "refresh buffer", then passed to video controller to be displayed.

### Video controllers

Used to display the image on monitors. Classified based on their video processor
and video memory.

Some video standards are:

- Video Graphics Array - minimum resolution: 320x240 in 256 colors or 640x480 in
  16 colors
- Super VGA - supports resolution up to 800x600
- Video Electronics Standards Association SVGA - was developed to standardize
  SVGA. Also includes a video standard for connecting high-speed adaptors
  directly to the processor bus.
