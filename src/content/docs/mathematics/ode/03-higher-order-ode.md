---
title: Higher Order Ordinary Differential Equations
sidebar:
  label: Higher Order ODE
  order: 3
slug: mathematics/ode/higher-order-ode
next: true
prev: true
---

## Linear Differential Equations

```math
\frac{\text{d}^ny}{\text{d}x^n}+
p_1(x)\frac{\text{d}^{n-1}y}{\text{d}x^{n-1}}+
\;...\;
+p_n(x)y
=q(x)
```

Based on $q(x)$, the above equation is categorized into $2$ types:

- **Homogenous** if $q(x)=0$
- **Non-homogenous** if $q(x)\not=0$

:::note[For 1st semester]

Only linear, ordinary differential equations with constant coefficients are
required.

They can be written as:

```math
\frac{\text{d}^ny}{\text{d}x^n}+
a_1\frac{\text{d}^{n-1}y}{\text{d}x^{n-1}}+
\;...\;
+a_ny
=q(x)
```

:::

## Solution

The general solution of the equation is $y=y_p+y_c$. $ $

Here

- $y_p$ - **particular solution**
- $y_c$ - **complementary solution**

### Particular solution

Doesn't exist for homogenous equations. For non-homogenous equations check
[steps section of 2nd order ODE](/mathematics/ode/second-order-ode#steps).

### Complementary solution

Solutions assuming $LHS=0$ (as in a homogenous equation). $ $

```math
y_c = \sum_{i=1}^{n}{c_i\,y_i}
```

Here

- $c_i$ - constant coefficients
- $y_i$ - a linearly-independent solution

## Linearly dependent & independent

$n$-th order linear differential equations have n linearly independent
solutions. $ $

Two solutions of a differential equation $u,v$ are said to be **linearly
dependent**, if there exists constants $c_1,c_2\;(\not=0)$ such that
$c_1u(x)+c_2v(x)=0$.

Otherwise, the solutions are said to be **linearly independent**, which means:

```math
\sum_{i=1}^{n}{c_iy_i}=0\implies \forall{c_i}=0
```

## Linear differential operators with constant coefficients

:::danger[WTF?]

I don't understand anything in this section.

:::

### Differential operator

Defined as:

```math
\text{D}^i=\frac{\text{d}^i}{\text{d}x^i}\;;\;n\in\mathbb{Z}^+
```

The above equation can be written using the differential operator:

```math
\text{D}^ny+
a_1\text{D}^{n-1}y+
\;...\;
+a_ny
=q(x)
```

Here if $y$ is factored out (_**how tf?**_):$ $

```math
(\text{D}^n+
a_1\text{D}^{n-1}+
\;...\;
+a_n
)y
=
P(D)y
=
q(x)
```

where $P(D)=(\text{D}^n+a_1\text{D}^{n-1}+\;...\;+a_n)$. $ $

$P(D)$ is called a polynomial differential operator with constant
coefficients.$
$
