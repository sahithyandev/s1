---
title: Embedded System
slug: programming-fundamentals/c-book/embedded-system
sidebar:
  order: 12
prev: true
next: true
---

A special-purpose computer which is completely encapsulated by the device it
control. A typical embedded system has a single specialized function.

The computer sits behind the equipment and controls its various components based
on the input provided by the user and obtained from number of sensors attached
to the system. The way this interaction occurs is usually implemented by the
software that run inside the embedded computer. Due to the flexibility and
advanced processing capabilities provided by the software, manufacturers of
these equipment increasingly prefer to use embedded systems rather than their
traditional hardwired controllers.

### Cross compiling

The process of compiling a software on a different computer and later using that
on a program on a different computer.

## Differences with normal computers

- Processing unit is typically a microcontroller
- End users wouldn't feel the existence of embedded computer most of the time.
- Used over a very long period of time and generally they cannot be programmed
  or maintained by the end user.
- Have many design constraints such as:
  - limited memory
  - requirement of low cost
  - strict performance guarantee
  - fail-safe operations
  - low power consumption
  - reliability
  - guaranteed real-time behaviour
- Can be optimized as they are dedicated to a specific task.
- Often use simple executives (OS kernels) or real-time OSs, support for
  real-time scheduling and no hard drives.
- Often interact with their physical environment using a variety of sensors
  and/or actuators.

### Microcontroller

Can be considered as a very simple and a small-scale computer in a single chip.

Has a program memory, a processing unit and a random access memory (registers)
which maps to hard disk, CPU and RAM in a typical personal computer
respectively. Lightweight.

Programming and designing circuits with microcontrollers are quite complex and
not friendly for beginners. Microcontroller programs have to be written
separately and inserted into the device using a separate tool (a programmer).

## Examples

- thermostats
- calculators
- ATMs
- printers
- video game consoles
- Handheld computers
- PDAs
- cell phones

The line of definition continues to blur as devices get more famous and
expanded.

## Challenges

Embedded system research field is rich with potential because it combines two
factors.

1. First, the system designer usually has control over both the hardware design
   and the software design.
2. Embedded systems are built upon a wide range of disciplines, including
   computer architecture (processor architecture and micro architecture, memory
   system design), compiler, scheduler/operating system, and real-time systems.

Combining these two factors means that barriers between these fields can be
broken down, enabling synergy between multiple fields, and resulting in
optimizations which are greater than the sum of their parts.

### Delivering good performance

Many embedded systems have real-time requirements. Unfortunately, many of the
performance enhancing features make it difficult to predict their performance
accurately.

Hence the challenge for real-time system researchers is to develop approaches to
design fast systems with easily predicted performance, or to measure existing
complex but fast systems more accurately.
