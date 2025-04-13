---
title: Kinetic Analysis
slug: mechanics/dynamics/kinetic-analysis
sidebar:
  order: 8
prev: true
next: false
---

## D'Alembert's principle

By this principle, a particle or a system of particles moving with a constant
acceleration is known as in dynamic equilibrium.

### For a particle

```math
F - ma = 0
```

Here:

- $F$ - resultant applied force
- $m$ - mass of the particle
- $a$ - acceleration of the particle

$ma$ is known as the inertia force which is fictious. $ $

### For a system of particles

The equation can be rewritten as:

```math
F = \sum m_ia_i = F = ma_G
```

Here:

- $F$ - resultant applied force
- $m_i$ - mass of a particle
- $a_i$ - acceleration of a particle
- $m$ - total mass
- $a_G$ - acceleration of the center of mass

## Kinetics of a Rigid Body

Both translational and rotational aspects of the motion must be considered.

```math
F=ma
\;\;\;
\text{and}
\;\;\;
M=I\alpha
```

Here:

- $F$ - resultant applied force
- $m$ - mass of the body
- $a$ - acceleration of the body
- $M$ - moment of the resultant force
- $I$ - mass moment of inertia
- $\alpha$ - angular acceleration of the body

## General plane motion

```math
\sum M_G = I_G \alpha
```

Here:

- $M_G$ - moment about center of mass
- $I_G$ - mass moment of inertia about center of mass
- $\alpha$ - angular acceleration of the body

Let $O$ be a point other than $G$.

```math
\sum M_O = I_G \alpha + ma_G r_{OG}
```

### Kinetic energy

```math
T = \text{translational kinetic energy} + \text{rotational kinetic energy}
```

```math
T = \frac{1}{2}mv_G^2 + \frac{1}{2}I_G\omega^2
```

## Center of percussion

The point on an object attached to a pivot where a perpendicular impact will
produce no reactive shock at the pivot.

Translational and rotational motions cancel at the pivot when an impulsive blow
is struck at the center of percussion.

```math
l_{\text{P/G}} = \frac{k_\text{G}^2}{\text{OG}}
```

Here:

- $\text{P}$ - Center of percussion
- $\text{G}$ - Center of gravity
- $\text{O}$ - Pivot

For a uniform rod:

```math
l_{\text{P/G}} = \frac{L}{6}
```
