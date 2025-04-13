---
title: Lab Apparatus
sidebar:
  order: 16
slug: electrical-fundamentals/basics/lab-apparatus
prev: true
next: true
---

## Variac

A variable AC power supply. Input is connected to $230\,\text{V}$ AC power
supply. $ $

## Rheostat

A variable resistor. Used to control the current in a circuit.

## Multimeter

Measures voltage, current, frequency.

There are 3 variants:

- Moving coil meter
- Moving iron meter
- Moving rectifier meter

## Oscilloscope

Aka O'scope. Graphically displays electrical signals and how they vary with
time. Used when designing, manufacturing, and repairing electrical equipment.
Comes in either 1 or 2 or 4 channels. Each channel is used to connect a probe
using BNC connector. Vertical section controls the voltage or current scale for
each channel. Horizontal section controls the time scale.

### Passive Voltage Probe

Measures voltage difference between ground clip and hook clip. Hook is covered
with a retractable cover. The BNC connector includes a capacitor compensation
trimmer.

Each channel inside the oscilloscope includes a $1\,\text{M}\Omega$ resistor and
$16\,\text{pF}$ capactior. Works for low frequencies. Picks up noises for higher
frequencies. To mitigate this, a coax cable is included in the probe.

Most probes include a switch between _1x_ and _10x_, which refers to how much
the amplitude of the signal is attenuated (reduced). The _10x_ setting has an
additional $9\,\text{M}\Omega$ resistor and a compensation capacitor. $ $

#### Calibration

- Set _10x_ on the probe
- Connect it to the oscilloscope
- Turn on the appropriate channel only
- Set Coupling setting to DC  
  To see all parts of the signal
- Set Probe setting to _10x_
- Set Type setting to Edge
- Set Source setting to the appropriate channel
- Attach ground clip to the ground tab
- Hook the probe around the signal tab
- Adjust the vertical and horizontal scale knobs  
  To clearly see the waveform. Turning the knobs clockwise decreases the time or
  voltage scale (like zooming in).
- Adjust the smaller knob of the appropriate channel  
  To center the waveform vertically
- Adjust the Trigger level betwen min and max of the waveform.
- Adjust the capacitor compensation trimmer  
  Until the square wave has straight edges

While visualizing 2 voltages of a circuit, the ground clip is connected to the
reference point. Only 1 ground clip of the multiple probes must be connected to
prevent short circuits inside the oscilloscope.

### Current Probe

Operation is similar to current transformer. Steps down the current, converts to
a voltage signal, and renders it in the oscilloscope. Has a sensor head, which
can be opened by the opening lever. Powered through power supply cable.

#### Calibration

- Connect the BNC connector to a channel
- Connect power supply cable into a power supply port in the rear side of the
  oscilloscope
- Connect the sensor head to the circuit
- Turn on the channel
- Adjust knobs in vertical and horizontal sections
