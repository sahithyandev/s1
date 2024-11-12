---
title: Circuit Breaker
slug: electrical-fundamentals/mcb
sidebar:
  order: 20
prev: true
next: true
---

A device for making and breaking a circuit. Operated by hand or automatically.
Can be used to isolate part of a circuits. More accurate protection compared to
semi-enclosed or fully-enclosed fuse.

Things to consider when choosing a circuit breaker:

- the normal current it will have to carry
- the amount of current it will have to interrupt

## MCB

![MCB](/electrical/mcb.jpg)

MCB is short for miniature circuit breaker. Not main circuit breaker.

Has 4 functional components:

- A thermal overload trip (bi-metal)
- An electromagnetic short-circuit trip
- A switching mechanism with contacts
- Arc exhausting system

## Function of the thermal device

![Thermal device of MCB](/electrical/function-of-mcb-thermal.jpg)

The overload trip depends on the operation of the thermally operated bi-metal
strip. When heated by the current passing through, the bi-metal strip is
deflected due to the difference in expansion. The deflection thus depends on the
intensity of heat dependent on the intensity of the current flow and the
duration. As can be seen from the figure, after the deflection (or temperature)
exceeds a predetermined amount, the tripping mechanism is activated

## Function of the EM device

![EM device of MCB](/electrical/function-of-mcb-em.jpg)

Electromagnetic trip consists essentially of a solenoid coil through which the
load current flows. In this coil, there is a fixed iron-core with a movable
armature. When the current exceeds a predetermined value, the coil exerts
sufficient electromagnetic force to attract the armature against the force of
the spring. A switch mechanism is activated by the lever, to open the contacts.

## Advantages

Advantages of a MCB over fuses:

- Non-destructive determination of tripping characteristics
- Shorter tripping times under moderate overcurrents
- Immediate indication of faulty current
- Reclosing can be effected at once after the fault has been cleared
- No stock of fuses required
- Can be used as a circuit control switch

## Protection

### Earth leakage current

Can be used to detect electrical faults to earth in electrical.

- Voltage operated protection - Earth Leakage Circuit Breaker (ELCB)
- Current operated protection - Residual Current Circuit Breaker (RCCB) or
  Residual Current Device (RCD)

The earth leakage protection device is called as trip switch.

### ELCB

![ELCB](/electrical/elcb.jpg)

2 earth terminals are required for the proper operation of a ELCB.

- Frame earth to which all non-conducting metallic parts of equipment are
  connected
- The ELCB reference earth

The ELCB will normally operate when the voltage across the coil, which
corresponds to the voltage of the frame earth with respect to the reference
earth, exceeds about 40 V. Up to about 50V has been traditionally considered as
a safe voltage.

However, it is now known that what is important is the current that may pass
through the human body rather than the voltage, and that too is time dependent.
Thus the RCCB is now preferred to the ELCB.

### RCCB

![RCCB](/electrical/rccb.jpg)

Trips when line current and neutral current are different.

The current difference between line and neutral currrents is used to energize
the solenoid, which causes the switch to open. Under normal operating
conditions, two identical windings, m1 and m2, will carry the main current.
Since the currents are equal and opposite through the two windings, there is mmf
balance and there will be no induced emf on the detector winding. Thus the
operating coil will not be energized. However, in case of a fault the line and
neutral currents will not equal and the trip coil will be energized due to the
induced currents in the detector winding.

:::note

In both ELCB and RCCB, a test switch is provided to create an artificial fault.

:::

### Advantages of RCCB

Suppose the live wire is exposed. If somebody touches it, they may get a shock
if a current passes through them.

In the case of voltage-operated ELCB, this earth current is not going through
the tripping coil and will cause danger. But in the case of RCCB, the return
path is going to loose part of the current, which passed through the human body,
which in turn would cause a resultant flux within the ring energizing the
tripping circuit.
