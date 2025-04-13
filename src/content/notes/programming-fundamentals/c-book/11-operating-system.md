---
title: Operating System
slug: programming-fundamentals/c-book/operating-system
sidebar:
  order: 11
prev: true
next: true
---

A layer of (systems) software that manages the hardware resources. Also provides
a friendly interface to the users by hiding the complexity of the hardware. Acts
as a virtual machine to application software.

OS provides common interfaces of the hardware to software regardless of the
specific features of its underlying hardware. Thus, the program needed only to
be compatible with this virtual machine interface.

Handles:

- CPU scheduling
- Memory management
- Storage management

### Kernel

Core of an OS. Loads before any of the user programs and remains in the memory.
Responsible for managing CPU, memory, disk, processes.

## Major services of OS

An operating system provides two major services.

### As an Extended Machine

OS hides specific details about the underlying hardware. Instead, provide a
simpler and uniform interfaces for application software and users.

For example: Saving something on a hard disk and a floppy disk can be done
similarily through an OS.

### As a Resource Manager

OS manages all hardware resources. OS decides which programs run at which time,
how much memory is allocated to each program, where to write data, how to deal
with concurrent users, and many other things.

## History

### 1st generation

Cannot be considered as real operating systems. Those days programs were written
by changing the wire in a plugboard. When a different program is to be executed
the plugboard needs to be rewired.

A plugboard is a large circuit board where different vacuum tubes are connected
to form a circuit. The tip of the wire includes a plug, therefore instead of
soldering those wires they were directly plugged into the plugboard.

### 2nd generation

Were mainly batch systems. Very low performant.

#### Steps

- A "job" is submitted in the form of punch cards
- It is transferred into a magnetic tape. Multiple jobs with similar needs are
  batched together.
- Tape is inserted into main computer which does the processing.
- Output is written to a tape (which might then be converted to a hardcopy)

### 3rd generation

Uses multiprogramming for better performance.

Multiple jobs are kept in the memory at the same time. A job is run by the CPU
until it is blocked due to some I/O activity. Then OS switches to one of the
remaining jobs. No user interaction.

### Time-sharing systems

Uses multitasking which is a variation of multiprogramming. Improves resource
utilization. CPU is never idle. Allows users to interact with their programs
while it is being executed.

### 4th generation

Aka. desktop systems or personal computer OSs. Currently used.

## Functions of an Operating System

Functionality of an OS slightly varies based on the type.

Common tasks carried out by a typical OS:

- **Memory management** - allocates memory for programs. handles
  [swapping](/programming-fundamentals/c-book/computer-memory/#swapping) and
  reversing. The objective is to utilize limited memory in an efficient manner.
- **Spooling print jobs**: All the print jobs will be collected onto the hard
  disk and later they are scheduled by the OS for printing.
- **Configuring devices**: allows easy access to devices, their installation and
  configuration.
- **Monitoring system performance**: A modern OS can display how system
  resources are utilized.
- **Administering security**: supports multiple concurrent users while making
  sure each user uses the system without interference by others. It also
  enforces authentication and authorization.
- **Managing storage media and files**: makes sure the secondary storage devices
  are optimally used. all the hard work of saving and retrieving files to and
  from disks, timestamping, setting various file attributes such as read-only,
  hidden and so on are handled by the OS.

## Popular Operating Systems

Main classes of operating systems:

- Microsoft OS - Started with MS-DOS. Later evolved into Windows.
- UNIX - Led to different variants such as Linux, Sun Solaris, FreeBSD, AIX,
  HP-UX and so on.
- Mainframe OS - From IBM. Some of the well-known ones are OS/360, OS/390 and
  OS/400.
- MacOS - For Apple Macintosh computers

### DOS

DOS was the first disk-based OS developed for IBM-PC by Microsoft. The objective
was to keep the OS, application programs and all user files on a disk and
managing them through set of commands called DOS commands. Simple to use and
learn. Closed source and paid.

There are 2 well-known variants:

- Personal Computer DOS - developed and sold with IBM PCs
- Microsoft-DOS - sold in open market

### Windows

DOS with a GUI. Inspired by Apple Lisa. Initial versions of Windows were just an
application over DOS; GUI was issuing DOS commands. Windows 98 also supported
multitasking. Closed source and paid.

Supports most of the hardware and software components. Most used OS in the
consumer market.

### UNIX

Developed as a time-sharing system for minicomputers and was initially mostly
used by universities. Very stable. Highly reputed for its security, reliability,
robustness, and performance. Led to many variants.

Developed by engineers for engineers. Therefore, it was harder for an average
person to effectively use UNIX or any of its variants. As a result, UNIX was not
so popular among the average users. However, modern variants with GUIs are much
better in terms of user friendliness.

### Linux

A UNIX-like OS developed originally for home PCs. Main objective was to make it
simple so that anyone can understand and improve. Free and open source. Stable,
reliable, and efficient. Most used OS in servers. Requires less disk space,
memory and processing power. Better at handling multiple users.

Now, runs on many platforms including Intel, PowerPC, Macintosh, and Sun Sparc.
