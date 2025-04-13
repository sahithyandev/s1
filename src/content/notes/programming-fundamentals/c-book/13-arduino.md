---
title: Arduino
slug: programming-fundamentals/c-book/arduino
sidebar:
  order: 13
prev: true
next: true
---

An open-source physical computing platform based on a simple general purpose
microcontroller board, and a development environment (Arduino IDE) for writing
software for the board. Can be used to develop and implement embedded systems.

Ready to go platform that can be use to simply plug into the computer, upload a
program and run it without any additional circuit development.

- Can be used to develop interactive devices, taking inputs from a variety of
  switches or sensors, and controlling a variety of lights, motors, and other
  physical outputs.
- Can be standalone, or can be run through a software (e.g., Flash, Processing,
  MaxMSP)

The boards can be assembled by hand or purchased pre-assembled; the open-source
IDE can be downloaded for free.

## Differences

Differences to programming a PC:

- Arduino does not have a keyboard, or a display screen
- Memory and storage are limitted

Arduino programs are usually written and compiled in a different computer
(usually a PC) and later downloaded into the Arduino board via the USB cable.

## Advantages

- Learning is easy (compared to embedded system development) as it hides messy
  details of microcontroller programming
- Comes with a lot of hardware facilities ready to use

## Hardware

The Arduino board is where the code is executed. The board can only control and
respond to electricity, so specific components are attached to the board to
enable it to interact with the real world.

These components can be

- sensors - converts some aspect of the physical world to electricity so that
  the board can sense it. Examples: sensors include switches, accelerometers,
  and ultrasound distance sensors.
- actuators - gets electricity from the board and converts it into something
  that changes the world. Examples: lights and LEDs, speakers, motors, and
  displays.

The most popular boards contain a USB connector that is used to provide power
and connectivity for uploading your software onto the board. Figure 4.3 shows
the basic components of an Arduino Uno.

The “Mini USB Socket” is used to connect the board to a computer using a
standard USB mini cable. This can be used to power the board. The “External
Power Input” socket can be used to power the Arduino board with a 6-20V supply.

The “5V Input/Output” pin can be used either to power the board using a 5V
supply when there is no other mode of power supplying is used or to get a 5V
supply to provide to any other device when some other power supplying mode is in
use on the board.

The “Reset Button” can be used to force the board to re-start executing the
uploaded program from the very beginning. The “Digital I/O Pins” can be used to
provide digital (0 or 5V) outputs and to read digital inputs by configuring them
in the program.

Certain pins (3, 5, 6, 9, 10 & 11) are marked with a tilde (~). These pins can
be used as PWM (Pule-Width Modulation) outputs. In PWM configuration, these pins
can be used to effectively output voltage values in the range 0-5V.

The “Analog Input Pins” can be used either as digital I/O pins or as input pins
which can read voltage values in the range 0 – 5V by configuring them in the
program.

The “Ground Pins” can be used as ground connections for external circuitry. This
is a very basic introduction to the pins and other components of the Arduino Uno
board which will be needed in this module.

## Software

Software programs for Aruduino is created on a computer using Arduino IDE. They
are called as sketches. The IDE can be used to write and edit code and convert
this code into instructions that Arduino hardware understands. The IDE also
transfers those instructions to the Arduino board (a process called uploading).
