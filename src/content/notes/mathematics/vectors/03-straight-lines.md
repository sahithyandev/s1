---
title: Straight Lines
slug: mathematics/vectors/straight-lines
sidebar:
  order: 3
prev: true
next: true
---

### Passes through a point & parallel to a vector

Equation for a line that:

- passes through $\underline{r_0}=\langle x_0, y_0, z_0 \rangle$
- is parallel to $\underline{v}=a\underline{i}+b\underline{j}+c\underline{k}$

#### Parametric equation

$\underline{r}=\underline{r_0}+t\underline{v};\;t\in\mathbb{R}$

#### Symmetric equation

```math
\frac{x-x_0}{a}
=
\frac{y-y_0}{b}
=
\frac{z-z_0}{c}
```

### Passes through 2 points

Equation of a line passes through $A=(x_1,y_1,z_1)$, $B=(x_2,y_2,z_2)$.
$\underline{r_A}$ and $\underline{r_B}$ are the position vectors of $A$ and $B$.

#### Parametric equation

$\underline{r}=(1-t)\underline{r_A}+t\underline{r_B};\;t\in\mathbb{R}$

#### Symmetric equation

```math
\frac{x-x_1}{x_2-x_1}
=
\frac{y-y_1}{y_2-y_1}
=
\frac{z-z_1}{z_2-z_1}
```

## Intersection

To show that two straight lines intersect in 3D space, existence of a point
which satisfies both lines must be proven.

It is **not** enough to show that the cross product of their parallel vectors is
non-zero.

## Normal to 2 lines

Let $\alpha,\beta$ be two lines. $ $

```math
\alpha:\frac{x-x_1}{a_1}=\frac{y-y_1}{b_1}=\frac{z-z_1}{c_1};\;\;
\beta:\frac{x-x_2}{a_2}=\frac{y-y_2}{b_2}=\frac{z-z_2}{c_2}
```

Here $v_1=\langle a_1, b_1, c_1\rangle$, $v_2=\langle a_2, b_2, c_2\rangle$ are
$2$ vectors parallel to $\alpha, \beta$ respectively.

Normal to both lines: $v_1 \times v_2$. $ $

### Unit normal

```math
\frac{v_1 \times v_2}{|v_1 \times v_2|}
```

## Angle between 2 straight lines

Using the $\alpha,\beta$ lines mentioned above: $ $

```math
\cos{\theta}
=
\frac{v_1\cdot v_1}{|v_1|\cdot|v_2|}
=
\frac{
	(a_1\underline{i}+b_1\underline{j}+c_1\underline{k})
	\cdot
	(a_2\underline{i}+b_2\underline{j}+c_2\underline{k})
}{
	\lvert{a_1\underline{i}+b_1\underline{j}+c_1\underline{k}}\rvert
	\cdot
	\lvert{a_2\underline{i}+b_2\underline{j}+c_2\underline{k}}\rvert
}
```

Here $v_1, v_2$ are $2$ vectors parallel to $\alpha, \beta$ respectively.

## Shortest distance from a point

The distance can be calculated using Pythogoras' theorem.

```math
d^2 =
{\big\lvert\underline{r} - \underline{p}\big\rvert}^2 -
\bigg[
\frac{\underline{n}\cdot (\underline{r} - \underline{p})}{\lvert \underline{n} \rvert}
\bigg]^2
```

Here:

- $P$ is the arbitrary point
- $\underline{p}$ is the position vector of $P$
- $\underline{r}$ is the position vector of a point on the line
- $\underline{n}$ is parallel to the line
