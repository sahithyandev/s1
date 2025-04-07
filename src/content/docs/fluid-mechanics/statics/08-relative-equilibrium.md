---
title: Relative Equilibrium
slug: fluid-mechanics/statics/relative-equilibrium
sidebar:
  order: 8
prev: true
next: true
---

When a fluid-contained vessel moves with a constant acceleration it will be
transmitted to the fluid. The fluid particles will move to a new position and
remain in such position in equilibrium, relative to the vessel. Such equilibrium
is known as the Relative Equilibrium of a fluid.

## Under linear acceleration

No flow of the fluid (relative to the fluid particles). No shear forces, and all
forces are normal to the surface they act on. Hence, fluid statics equations can
be used in relative equilibrium.

### Variation of pressure

Let $P=f(x,y,z)$. $ $

```math
\text{d}p
=
\frac{\partial{p}}{\partial{x}}\text{d}x
+
\frac{\partial{p}}{\partial{y}}\text{d}y
+
\frac{\partial{p}}{\partial{z}}\text{d}z
```

Consider the fluid element containing point $A$ which is under an acceleration
of $a_x,a_y,a_z$ in the $x,y,z$ directions.

![Variation of pressure proof](/fluids/rel-eq-variation-of-pressure.jpg)

By applying Newton's second law of motion in all 3 directions:

$\frac{\partial{p}}{\partial{x}}=-\rho a_x\;\land\;\frac{\partial{p}}{\partial{y}}=-\rho a_y$

$\frac{\partial{p}}{\partial{z}}=-\rho(a_z+g)$

Substituting all the terms:

```math
\text{d}p
=
-\rho a_x\text{d}x
-\rho a_y\text{d}y
-\rho (a_z+g)\text{d}z
```

Integrating both sides:

```math
P=
-\rho a_x x
-\rho a_y y
-\rho (a_z+g) z
+c_1
```

### Shape of free surface

On the free surface $P=0$ as gauge pressure is considered. $ $

```math
\rho a_x x
+\rho a_y y
+\rho (a_z+g) z
=c_1
```

Free surface is a plane in 3D.

### Inclination from horizontal plane

The free surface has an inclination from the horizontal plane:
$\theta_x, \theta_y$, the slopes in $x$ and $y$ directions.

```math
\tan{(\theta_x)}=
\frac{\text{d}z}{\text{d}x}
\;\land\;
\tan{(\theta_y)}=
\frac{\text{d}z}{\text{d}y}
```

To find $\theta_x$, it is possible to set $y=0$ since movement in the $y$
direction does not affect the slope in the $x$ direction. A point can move along
the surface in the $xz$-plane by choosing any fixed $y$ value. After setting
$y=0$, the free surface equation is differentiated with respect to $x$:

```math
\rho a_x
+\rho (a_z+g) \frac{\text{d}z}{\text{d}x}
=0
\implies
\tan{(\theta_x)}=\frac{-a_x}{a_z+g}
```

Similarily $\theta_y$ can be solved: $ $

```math
\rho a_y
+\rho (a_z+g) \frac{\text{d}z}{\text{d}y}
=0
\implies
\tan{(\theta_y)}=\frac{-a_y}{a_z+g}
```

## Horizontal Acceleration

```math
a_x\neq 0\;\land\;a_y=a_z=0
```

### Equation of the free surface

```math
\rho a_x x
+\rho g z
=c_1
```

Is a straight line in $x, z$ axes. The straight line is at an inclination of
$\theta_x$:

```math
\tan{(\theta_x)}=\frac{-a_x}{g}
```

### Vertical Pressure Distribution

![horizontal-acceleration-vertical-pressure-variation.jpg](/fluids/horizontal-acceleration-vertical-pressure-variation.jpg)

## Vertical Acceleration

$a_z\neq 0\;\land\;a_x=a_y=0$

### Equation of the free surface

```math
\rho (a_z+g) z=c_1
```

Horizontal straight line.

### Vertical Pressure Distribution

$P_1=-\rho(a_z+g)z_1+c_1$

$P_2=-\rho(a_z+g)z_2+c_1$

$P_2-P_1=-\rho(a_z+g)(z_2-z_1)$

$P_2=h\rho(a_z+g)$

Here:

- $h\rho g$ - hydrostatic pressure
- $h\rho a_z$ - due to $a_z$

Varies only in $z$ direction. Increases with height. Isobars are horizontal. $ $
