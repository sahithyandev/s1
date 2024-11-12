---
title: Introduction to Fluid Dynamics
slug: fluid-mechanics/dynamics/introduction
sidebar:
  label: Introduction
  order: 1
prev: false
next: true
---

## Flow

Motion with relative movement between fluid particles where continuous
deformation happens.

## Classification of fluid flow

### Density

#### Incompressible

Density doesn't vary significantly.

Examples:

- Pipe and channel flows of liquids
- Gas flows in pipes

```math
\frac{|\Delta{\rho}|}{\rho} \ll 1
```

#### Compressible

Density varies significantly.

Examples:

- Pressure surges in pipes

### Viscosity

#### Non-viscous

Fluid doesn't show any resistance to the flow.

#### Viscous

Fluid shows any resistance to the flow.

- **Newtonian**: $\mu\text{ is constant}$ Examples: Water
- **Non-newtonian**: $\mu\text{ is not constant}$ Examples: Paints, Clay,
  Plastics

### Variation of parameters

The parameters:

- Velocity $V$
- Pressure $P$
- Flow rate $Q$

#### Temporal Variation

The variation of the parameters with time.

- **Steady**: no variation with time $V=f(x,y,z)$
- **Unsteady**: variation of flow parameters with time $V=f(t,x,y,z)$

#### Spatial Variation

The variation of the parameters with coordinates.

- **Uniform**: no variation with spatial parameters $V=f(t)$
- **Non-uniform**: spatial variation of flow parameters $V=f(t,x,y,z)$

### Dimensional

If a variation of flow parameter in a certain direction can be neglected, that
can reduce the calculations.

### Nature of movement

- **Laminar**: Fluid particles move in a orderly fashion
- **Turbulent**: Fluid particles move disorderly

### Rotation of particles

- **Rotational**: Usually due to shear forces. Flow of real fluids.
- **Non-rotational**: Flow of frictionless forces.

## Flow patterns

### Streamline

A line tangential to the flow velocity.

### Streamtube

A passage enclosed by a collection of streamlines.

### Pathline

Path traced by an individual fluid particle.

### Streakline

Suppose a dye is injected into a fluid flow. Streakline indicates the positions
of all particles passed through the point of injection.

:::note

In steady flow: streamline, pathline and streakline all coincide.

:::
