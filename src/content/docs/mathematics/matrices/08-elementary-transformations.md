---
title: Elementary Transformations
slug: mathematics/matrices/elementary-transformations
sidebar:
  order: 8
prev: true
next: true
---

- Interchange of any columns or rows
- Addition of multiple of any row or column to any other row or column
- Multiplication of each element of a column or a row by a non-zero constant

When a matrix $B$ is obtained by applying elementary transformations to a matrix
$A$, then $A$ **is equivalent to** $B$. Denoted by $A\approx B$.

## Theorem

The elementary row operations that reduce a given matrix $A$ to the identity
matrix, also transform the identity matrix to the inverse of $A$.

## Augmented Matrix

Two matrices are written as a single matrix with a vertical line in-between.
Denoted by $(A\lvert B)$. Example: $ $

```math
\left[
\begin{array}{cc|c}
  1&2&3\\
  4&5&6
\end{array}
\right]


```

## Inverse using elementary row transformations

Let $A$ be a square matrix with order $n\times n$.

- Start with $(A_{n\times n}|I_n)$
- Repeatedly perform **row** transformations (**not** column) to both matrices
  until the $\text{LHS}$ becomes an identity matrix.
  - Transform all elements outside the main diagonal to $0$.
  - Transform elements on the main diagonal to $1$ by multiplying by a constant.
- $\text{RHS}$ is $A^{-1}$.

:::caution[TODO]

What about singular matrices?

:::
