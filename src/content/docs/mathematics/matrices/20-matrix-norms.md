---
title: Matrix Norms
slug: mathematics/matrices/matrix-norms
sidebar:
  order: 20
next: false
prev: true
---

Let $A_{n\times n}$. A norm of $A$ is denoted by $||A||$.

## Definitions

Suppose $A=(a_{ij})_{m\times n}$ for all the definitions below.$ $

### 1-norm

Maximum of the absolute column sums.

```math
{\lVert A \rVert}_1 =
\max
\bigg\{
    \sum_{i=1}^{m}
    {\lvert a_{ij} \rvert}
    \;;\;
    j \in [1,n]
\bigg\}
```

### 2-norm

Square root of the sum of all elements squared. Aka. Euclidean norm, or
Frobenius norm. Defined for non-square matrices as well.

```math
\Big({\lVert A \rVert}_2\Big)^2=
\Big({\lVert A \rVert}_E\Big)^2=
    \sum_{i=1}^{m}
    \sum_{j=1}^{n}
    {(a_{ij})^2}
```

### Infinity norm

Maximum of the absolute row sums.

```math
{\lVert A \rVert}_\infty =
\max
\bigg\{
    \sum_{j=1}^{n}
    {\lvert a_{ij} \rvert}
    \;;\;
    i \in [1,m]
\bigg\}
```

:::note

For any matrix $X \in \mathbb{R} ^n$: $ $

```math
{\lVert X \rVert}_\infty
\le
{\lVert X \rVert}_2
\le
{\lVert X \rVert}_1
```

:::

### Vector norm

Norm defined for column vectors.

### Induced norm

Aka. operator norm, subordinate norm.

Suppose $A=(a_{ij})_{m\times n}$. The induced norm is defined for $A$ with
respect to a given norm, $\lVert \rVert$. $ $

```math
{\lVert A \rVert}_\text{ind} = \max_{\lVert X \rVert = 1}\; \lVert AX \rVert

```

## Properties of Norms

Works for all types of norms.

Suppose $A,B$ are $m\times n$ ordered.

1. $\lVert A \rVert \ge 0$
2. $\lVert A \rVert = 0 \iff A=0$
3. $\lVert kA \rVert=\lvert k\rvert\times \lVert A \rVert$
4. $\lVert A + B\rVert \le \lVert A \rVert + \lVert B \rVert$ (triangle
   inequality)
5. $\lVert AB \rVert \le \lVert A\rVert\times \lVert B\rVert$

## Unit Ball

A unit ball in $\mathbb{R}^n$ with respect to a norm $\lVert \rVert$.

```math
\big\{
X
\;
|
\;
X \in \mathbb{R}^n
,
\;
\lVert X \rVert \le 1
\big\}
```

## Unit disc

When $n=2$, unit ball is also called the unit disc. $ $
