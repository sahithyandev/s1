---
title: System of Linear Equations
slug: mathematics/matrices/system-of-linear-equations
sidebar:
  order: 10
prev: true
next: true
---

Any system of linear equations can be represented in matrix notation as shown
below.

- $a_{11}x+a_{12}y+a_{13}z=b_1$
- $a_{21}x+a_{22}y+a_{23}z=b_2$
- $a_{31}x+a_{32}y+a_{33}z=b_3$

```math
\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{pmatrix}
\begin{pmatrix}
x \\
y \\
z \\
\end{pmatrix}
=
\begin{pmatrix}
b_{1} \\
b_{2} \\
b_{3} \\
\end{pmatrix}
\implies
AX=B
```

2 types based on $B$: $ $

- $=0$: [Homogeneous system](/mathematics/matrices/homogenous-systems/)
- $\neq0$:
  [Non-homogeneous system](/mathematics/matrices/non-homogenous-systems/)

## Number of solutions

A system of equations can have 0 or 1 or infinitely many solutions.

### Consistent

When the system of equations has at least 1 solution.

### Inconsistent

When the system of equations has no solution.
