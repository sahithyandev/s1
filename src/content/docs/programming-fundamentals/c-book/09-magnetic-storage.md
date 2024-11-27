---
title: Magnetic Storage
slug: programming-fundamentals/c-book/magnetic-storage
sidebar:
  order: 9
prev: true
next: true
---

## Tape drive

Stores data on magnetic tapes. high capacity. cost-effective. slow. mainly used
for data backups nowadays. Aka. DAT drives.

## Hard disk drive

Magnetic storage. Operationally identical to a conventional radio cassette tape.
Uses a disk coated with magnetic medium. High data transfer speed.

![Hard disk - internal structure](/programming/hard-disk-internal-structure.jpg)

The head arm moves laterally from center to the edge.

Capacity can be improved by adding more platters. Platters are kept in dust free
environment to avoid damages because of high speed. Each side of the platter
require a read/write head.

Categorized by their capacity, controller, and platter rotation speed. Capacity
ranges from 500GB to 8TB. Platter rotation speeds are 3600, 5400 and 7200 RPM.

Available disk controllers:

- Integrated Device Electronics
- Small Computer System Interface
- Serial AT Attachment Interface

### Track

Single ring of data on one side of a platter.

### Sector

Fixed size (usually 512 bytes) divisions (usually about 900) of a track.

### Cylinder

Set of tracks on a disk, that are on each side of all platters in a stack and
are at the same distance from the center of the disk.

## Floppy disk drive

Removable. Has a flexible, magnetic medium that is enclosed in a (semi-)rigid
plastic case.

![Parts of Floppy Disk](/programming/parts-of-floppy-disk.jpg)

![Functionality of Floppy Disk](/programming/floppy-disk-functionality.jpg)

Paper rings are used for protection.

Flap - a small opening for the read/write head to access the disk

Head arm moves horizontally. Head arm is mounted on a spindle. Controlled by a
stepper motor.
