---
title: Statics
slug: mechanics/statics/introduction
sidebar:
  label: Introduction
  order: 1
prev: false
next: true
---

## Centroid

Aka. centre of area, geometric centre. The point where the area of a figure is
assumed to be concentrated. Defined for a 2D shape.

Located on the axes of symmetry, if one exists.

## Center of gravity

The point where the mass of an object is concentrated. Defined for a 3D shape.

## First moment of area

Measure of spatial distribution of a shape in relation to an axis.

```math
\text{About x-axis} = \int_A {y\; \text{d}A} = A\bar{x}
```

```math
\text{About y-axis} = \int_A {x\;\text{d}A} = A\bar{y}
```

Here:

- $\bar{x}$ - Centroid's $x$ coordinate
- $\bar{y}$ - Centroid's $y$ coordinate
- $A$ - Total area

About an axis of symmetry, first moment of area is $0$. $ $

## Second moment of area

Aka. area moment of inertia. Describes how the cross-sectional area of a shape
is distributed relative to an axis.

Not to be confused with [moment of inertia](#moment-of-inertia).

```math
\text{About x-axis} = I_{xx} = I_x = \int_A {y^2\;\text{d}A}
```

```math
\text{About y-axis} = I_{yy} = I_y = \int_A {x^2\;\text{d}A}
```

Always positive.

### For common shapes

| Shape                      | Description                                                   | $I_{xx}$                |
| -------------------------- | ------------------------------------------------------------- | ----------------------- |
| Rectangle or Parallelogram | Base $b$. Height $h$. About centroidal axis parallel to base. | $ \cfrac{bh^3}{12} $    |
| Triangle                   | Base $b$. Height $h$. About base.                             | $ \cfrac{bh^3}{12} $    |
| Triangle                   | Base $b$. Height $h$. About centroidal axis parallel to base. | $ \cfrac{bh^3}{36} $    |
| Circle                     | Diameter $d$. About centroidal axis.                          | $ \cfrac{\pi d^4}{64} $ |

## The product of moment of area about x,y axes

```math
I_{xy} = \int_A {xy\; \text{d}A}
```

## The polar moment of area about z axis

```math
I_{zz} = J_0 = \int_A {r^2\; \text{d}A} = I_{xx} + I_{yy}
```

## Radius of gyration

```math
\text{About x-axis} = r_x^2 = \frac{I_{xx}}{A}
```

```math
\text{About y-axis} = r_y^2 = \frac{I_{yy}}{A}
```

```math
\text{About z-axis} = r_z^2 = \frac{I_{zz}}{A}
```

## Moment of inertia

Describes the resistance of a body to changes in its rotational motion.
