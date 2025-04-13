---
title: Beams
slug: mechanics/statics/beams
sidebar:
  order: 6
prev: true
next: true
---

![Beam](/mechanics/beam.jpg)

- long ($L >> B,D$)
- axis of the beam is straight
- constant cross-section throughout its length

## Classified by supporting conditions

First 3 are the mandatory ones in s1.

u.d.l means uniformly distributed load.

| Type                      | Image                                                                  | Notes                           |
| ------------------------- | ---------------------------------------------------------------------- | ------------------------------- |
| Simply supported beam     | ![Simply supported beam](/mechanics/simply-supported-beam.jpg)         | **At ends**: Max SF and BM = 0  |
| Cantilevered beam         | ![Cantilevered beam](/mechanics/cantilevered-beam.jpg)                 | **At fixed end**: Max SF and BM |
| Overhanging beam          | ![Overhanging beam](/mechanics/overhanging-beam.jpg)                   |                                 |
| Propped cantilevered beam | ![Propped cantilevered beam](/mechanics/propped-cantilevered-beam.jpg) |                                 |
| Continuous beam           | ![Continuous beam](/mechanics/continuous-beam.jpg)                     |                                 |
| Fixed beam                | ![Fixed beam](/mechanics/fixed-beam.jpg)                               | **At ends**: Max SF and BM      |

## At a section

![At a section](/mechanics/at-a-section.jpg)

- $ P $ - Normal force / Axial force
- $ S_y, S_y $ - Shear forces along $y$ and $z$ axis
- $ M_x $ - Twisting moment / Torque
- $ M_y, M_z $ - Bending moments about $y$ and $z$ axis

## Degress of freedom

A plane member have 3 degrees of freedom. Any of the 3 can be restrained.

- Displacement in $x$-direction
- Displacement in $y$-direction
- Rotation about $z$-direction

## SFD & BMD

### Sign convention

- Bending moment
  - Hogging (curves upwards in the middle) is **(+) ve**
  - Sagging (curves downwards in the middle) is **(-) ve**
- Shear force
  - Clockwise shear is **(+) ve**.
  - Counterclockwise shear is **(-) ve**.

### Pure bending

A member is in pure bending when shear force is $0$ and bending moment is a
constant. $ $

### Point of Contraflexure

The point about which bending moment is $0$, and changes its sign through the
point. $ $

## Distributed load

Suppose a beam is under a distributed load of $w=f(x)$ per unit length. $ $

```math
\frac{\text{d}S}{\text{d}x}=-w
```

```math
\frac{\text{d}M}{\text{d}x}=-S
\;\;
\land
\;\;
\frac{\text{d}^2M}{\text{d}x^2}=w
```

## Deflection of a beam

Suppose a simply supported beam is applied a load of $W$ at mid-span. $ $

```math
S_{\text{max}} = \frac{WL}{4I}
\;\;
\land
\;\;
D_{\text{max}} = \frac{WL^3}{48EI}
```

Here:

- $S_\text{max}$ - Maximum stress
- $D_\text{max}$ - Deflection
- $W$ - Load
- $L$ - Span length
- $E$ - Young's modulus
- $I$ - Second moment of cross-sectional area

## Principle of Superposition

A beam with multiple loads can be split into multiple systems each with a single
load. Reason for doing so is the ease of calculations.

Values will be the sum of each system's corresponding value.
