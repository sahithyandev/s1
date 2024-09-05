---
title: Diagonalization
slug: maths/algebra/matrices/diagonalization
sidebar:
  order: 16
---

### Similar matrices

2 square matrices $A$ and $B$ of the same order, are similar **iff** there
exists an invertible matrix $P$ such that:

```math
B=P^{-1}AP
```

Similarity of 2 matrices is commutative.

Similar matrices have the set of eigenvalues.

:::note

If $A$ and $B$ are similar, then $A^2$ and $B^2$ are similar.

:::

## Definition

A matrix $A$ is diagonalizable if it is similar to a
[diagonal matrix](/maths/algebra/matrices/introduction/#diagonal-matrix). $ $

```math
\exists\, D,P\;\text{ s.t. } D = P^{-1}AP
```

Here:

- $D$ is a diagonal matrix
- $P$ is an invertible matrix