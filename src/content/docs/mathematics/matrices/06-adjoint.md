---
title: Adjoint
slug: mathematics/matrices/adjoint
sidebar:
  order: 6
prev: true
next: true
---

Suppose $A=(a_{ij})_{n\times{n}}$. $ $

```math
\text{adj}A = (A_{ij})_{n\times{n}}^T
```

Where $A_{ij}$ is the
[co-factor of](/mathematics/matrices/determinant/#co-factor-of-an-element)
$a_{ij}$.

## Properties

Suppose $A$ is a $n\times n$ matrix.

- $\text{adj}(I)=I$
- $\text{adj}(cA)=c^{n-1}\text{adj}(A)$
- $\text{adj}(A^T)=(\text{adj}(A))^T$
- $\text{adj}(A)\,A = A\,\text{adj}(A) = \lvert A \rvert I$
- $A\,(\text{adj}A) = (\text{adj}A)\,A = \lvert{A}\rvert I$

:::note

For a $2\times 2$ matrix, $\text{adj}(\text{adj}(A))=A$.

:::
