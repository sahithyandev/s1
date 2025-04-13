---
title: Derivations
slug: fluid-mechanics/dynamics/derivations
sidebar:
  order: 4
prev: true
next: true
---

## Continuity equation

From the conservation of mass law, the below equation can be derived for an
incompressible fluid:

```math
Q= Av
```

Here:

- $Q$ - Flow rate
- $A$ - Cross-sectional area
- $v$ - velocity

## Bernoulli's equation

For an incompressible fluid in steady flow, total head on a point is constant
throughout a [streamline](/fluid-mechanics/dynamics/introduction/#streamline).
Can be derived from the conservation of energy law.

```math
\text{Total head }H= z + \frac{P}{\rho g} + \frac{v^2}{2g}
```

Here:

- $z$ - Datum head. Height to the point from a reference level.
- $\frac{P}{\rho g}$ -
  [Pressure head](/fluid-mechanics/statics/hydrostatic-pressure/#pressure-head).
- $\frac{v^2}{2g}$ - Velocity head. Kinetic energy per unit weight.

:::note

- Head is the energy per unit weight.
- Piezometric head is equal to $\frac{P^*}{\rho g}$ where $P^*$ is the
  piezometric pressure.

:::

## Steady flow momentum equation

For an incompressible fluid under steady flow:

```math
F_S = \dot{M_o}-\dot{M_i}
```

Here:

- $F_S$ - Force exerted on the fluid within the control volume
- $\dot{M_o}$ - Rate of change of momentum of the inflow fluid
- $\dot{M_i}$ - Rate of change of momentum of the outflow fluid

```math
\dot{M} = \rho Q v
```

Here:

- $\dot{M}$ - rate of change of momentum
- $\rho$ - density
- $Q$ - flow rate
- $v$ - velocity

## Power

```math
P=\gamma Q H
```

Here:

- $\gamma$ - specific weight of the fluid
- $Q$ - flow rate
- $H$ - total head
