---
title: Cauchy-Riemann Equations
slug: mathematics/complex-analysis/cauchy-riemann-equations
sidebar:
  order: 8
next: true
prev: true
---

Suppose $f$ is a complex-valued function of a complex variable. **If** the
derivatives are the same for the 2 paths --real and imaginary axes-- **then**
$f$ is analytic.

Suppose $f(z)=u(x,y)+iv(x,y)$ for the theorems below. $ $

## The equations

The set of equations mentioned below are the Cauchy Riemann Equations, where
$u,v$ are functions of $x,y$.

### Cartesian form

```math
\frac{\partial{u}}{\partial{x}}
=u_x
=
\frac{\partial{v}}{\partial{y}}
=v_y
\;\;\;
\land
\;\;\;
\frac{\partial{u}}{\partial{y}}
=u_y
=
-
\frac{\partial{v}}{\partial{x}}
=-v_x
```

### Polar form

Here the partial derivatives are about $r, \theta$. $ $

```math
u_r = \frac{1}{r}v_\theta
\;\;\;
\land
\;\;\;
v_r = -\frac{1}{r}u_\theta
```

### Complex form

```math
f_x = -if_y
```

## Theorem 1

**If** $f$ is differentiable at $z_0$, **then**

- All partial derivatives $u_x,u_y,v_x,v_y$ exist **and**
- They satisfy the Cauchy Riemann equations

```math
f'(z_0)=u_x(x_0,y_0) + iv_x(x_0,y_0)
```

:::note

Contrapositive is useful when proving $f$ is **not** differentiable at $z_0$.

:::

## Theorem 2

If:

- All partial derivatives $u_x,u_y,v_x,v_y$ exist **and**
- They satisfy Cauchy-Riemann equations **and**
- They are continuous at $z_0$

Then:

- $f$ is differentiable at $z_0$ **and**

```math
f'(z_0)=u_x(x_0,y_0) + iv_x(x_0,y_0)
```

## Theorem 3

**If** $f$ is analytic at $z_0$, **then** its first-order partial derivatives
are continuous in a neighbourhood of $z_0$.
