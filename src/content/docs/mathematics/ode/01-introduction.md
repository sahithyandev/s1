---
title: Differential Equations
slug: mathematics/ode/introduction
sidebar:
  label: Introduction
  order: 1
prev: false
next: true
---

Equations which are composed of an unknown function and its derivatives.

## Types

### Ordinary Differential Equations

When a differential equation involves one independent variable, and one or more
dependent variables.

An example:

```math
\frac{\text{d}y}{\text{d}x} = \cos(x)
```

### Partial Differential Equations

When a differential equation involves more than one independent variables, and
more than one dependent variables.

```math
\frac{\partial y}{\partial x} = y_x = \cos(x)
```

### Linear

A linear differential equation is a differential equation that is defined by a
linear polynomial in the unknown function (dependant variable) and its
derivatives, that is an equation of the form:

```math
P_0 (x) y + P_1 (x) y' +\,...\,+ P_n (x) y^{(n)} + Q(x) = 0
```

Here:

- $P_0, P_1,\dots,P_n,Q$ are all differentiable functions of $x$, doesn't depend
  on $y$
- $y(x)$ is the unknown function
- $y^{(n)}$ denotes the $n$th derivative of $y$

### Nonlinear

Nonlinear differential equations are any equations that cannot be written in the
above form. In particular, these include all equations that include:

- $y$ and/or its derivatives raised to any power other than $1$
- nonlinear functions of $y$ or any of its derivative
- any product or function of these

## Properties of Differential Equations

### Order

Highest order derivative.

### Degree

Power of highest order derivative.

## Initial Value Problem (IVP)

A differential equation along with appropriate number of initial conditions.

Initial condition(s) is/are required to determine which solution (out of the
infinite number of solutions) is the suitable one for the given problem.

## Picard's Existence and Uniqueness Theorem

Consider the below IVP.

```math
\frac{\text{d}y}{\text{d}x}
= f(x,y)
\;;\;
y(x_0)=y_0
```

Suppose: $D$ is an open neighbourhood in $\mathbb{R}^2$ containing the point
$(x_0,y_0)$.

**If** $f$ and $\frac{\partial{f}}{\partial{y}}$ are continuous functions in
$D$, **then** the IVP has a unique solution in some closed interval containing
$x_0$.
