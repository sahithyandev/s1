---
title: Hydrostatic Pressure
slug: fluid-mechanics/statics/hydrostatic-pressure
sidebar:
  order: 3
prev: true
next: true
---

![Pressure Definition](/fluids/pressure-definition.jpg)

At a point,

```math
P = \lim_{\delta A \to 0} \frac{\delta F}{\delta A}
```

## Pascal's law

The hydrostatic pressure at a point is the same from all directions. Applies
only for hydrostatic pressure.

### Proof

Consider the fluid element shown, containing the point $A$. $ $

![Proof of Pascal's law](/fluids/pascal-law-proof.jpg)

From the image:
$\sin{\theta}=\frac{\Delta{z}}{\Delta{s}}\;\land\;\cos{\theta}=\frac{\Delta{x}}{\Delta{s}}$
$ $

For equilibrium:

```math
P_x(\Delta{y}\Delta{z})-P_s(\Delta{y}\Delta{s})\sin{\theta}=0
\implies
P_x=P_s
```

```math
P_z(\Delta{x}\Delta{y})-P_s(\Delta{y}\Delta{s})\cos{\theta}-\frac{1}{2}\Delta{x}\Delta{y}\Delta{z}\rho g=0
\implies
P_z=P_s+\frac{1}{2}\Delta{z}\rho g
```

As all $\Delta{x},\Delta{y},\Delta{z}$ approaches $0$: $P_z=P_s$. Therefore
$P_x=P_z=P_s$

## Variation along directions

### Proof

Let $p$ be the pressure at the point $A\equiv (x,y,z)$.

$ p = f(x,y,z) $

```math
dp =
\frac{\partial p}{\partial x} \text{d}x
+
\frac{\partial p}{\partial y} \text{d}y
+
\frac{\partial p}{\partial z} \text{d}z
```

By considering equilibrium of this fluid element containing $A$. $ $

![Fluid element containing point A](/fluids/fluid-element-containing-a.jpg)

In the $x$ direction,$ $

```math
\bigg(
	p -
	\frac{\partial p}{\partial x} \frac{\Delta{x}}{2}
\bigg)
\Delta{y}
\Delta{z}
-
\bigg(
	p +
	\frac{\partial p}{\partial x} \frac{\Delta{x}}{2}
\bigg)
\Delta{y}
\Delta{z}

= 0
```

```math
\frac{\partial p}{\partial x} = 0
```

Similarly $ \frac{\partial p}{\partial y} = 0 $ can be proven. $ $

In the $z$ direction,$ $

```math
\bigg(
	p -
	\frac{\partial p}{\partial z} \frac{\Delta{z}}{2}
\bigg)
\Delta{x}
\Delta{y}
-
\bigg(
	p +
	\frac{\partial p}{\partial z} \frac{\Delta{z}}{2}
\bigg)
\Delta{x}
\Delta{y}

-
\Delta{x}
\Delta{y}
\Delta{z}
\rho
g

= 0
```

```math
\frac{\partial p}{\partial z} = -\rho g
```

```math
dp = -\rho g\,\text{d}z
```

```math
p = -\int{\rho g\,\text{d}z}
```

:::note[For incompressible fluids]

$\rho$ is constant. $p = -\rho g\int{\text{d}z} = -\rho gz + c = f(z)$.

:::

## Piezometric pressure

$ P = -\rho gz + c $

```math
P + \rho gz = c = P^{*}
```

## Isobar

Surface of constant pressure.

## Pressure difference between 2 points

![Pressure difference](/fluids/pressure-difference.jpg)

$ P_1 = -\rho gz_1 + c $

$ P_2 = -\rho gz_2 + c $

$ P_2 - P_1 = -\rho g(z_2 - z_1) = -\rho g (-h) = h \rho g $

$ P_2 = P_1 + h \rho g $

In a homogenous,
[incompressible fluid](/fluid-mechanics/dynamics/introduction/#incompressible)
in equilibrium:

1. Piezometric pressure is constant throughout the fluid
2. Pressure varies linearly with depth only
3. Isobars are horizontal
