---
title: Diagonalization
slug: mathematics/matrices/diagonalization
sidebar:
  order: 18
prev: true
next: true
---

### Similar matrices

2 square matrices $A$ and $B$ of the same order, are similar **iff** there
exists an invertible matrix $P$ such that:

```math
B=P^{-1}AP
```

### Properties

- Similarity of 2 matrices is commutative.
- Similar matrices have the set of eigenvalues.
- If $A$ and $B$ are similar, then $A^2$ and $B^2$ are similar.

## Definition

A matrix $A$ is **diagonalizable** if it is similar to a
[diagonal matrix](/mathematics/matrices/introduction/#diagonal-matrix). $ $

```math
\exists\, D,P\;\text{ s.t. } D = P^{-1}AP
```

Here:

- $D$ is a diagonal matrix
- $P$ is an invertible matrix

## Steps

- Find eigenvalues of $A_{n\times n}$: $\lambda_1,\lambda_2,\dots,\lambda_n$
- Find corresponding eigenvectors: $X_1,X_2,\dots,X_n$
- Construct $P$ by joining the eigenvectors as columns

```math
P=(X_1 X_2 \dots X_n)_{n\times n}
\;\;
\land
\;\;
D=
\begin{pmatrix}
\lambda_1 \\
& \ddots \\
& & \lambda_n \\
\end{pmatrix}
```

:::note

The matrix $P$ differs based on the order of the eigenvectors, and hence is not
unique. $ $

:::

:::note[Real symmetric matrix]

Suppose $A_{n\times n}$ is a **real symmetric matrix** . If it has **distinct**
eigenvalues then it has $n$ **mutually orthogonal linearly-independent**
eigenvectors.

Hence the diagonalizing matrix $P$ (formed by using the normalized eigenvectors)
is an **orthogonal matrix**. $ $

:::

## Uses

### Finding integer powers

Suppose $A_{n\times n}$ is diagonalizable, and $k\in\mathbb{R}$.

```math
A = P^{-1}DP
\implies
A^k = P^{-1}D^kP
```
