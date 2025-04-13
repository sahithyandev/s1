---
title: Determinant
slug: mathematics/matrices/determinant
sidebar:
  order: 5
prev: true
next: true
---

Defined only for square matrices. Denoted by $\lvert A\rvert$. $ $

### For 2x2

```math
\lvert A\rvert=
\Bigg\lvert{
\,
\begin{matrix}
a_{11} & a_{12} \\
a_{21} & a_{22} \\
\end{matrix}
\,
}
\Bigg\rvert
=
a_{11}a_{22} - a_{12}a_{21}
```

### For higher order

#### Minor of an element

Suppose $A=(a_{ij})$. $ $

Minor of an element $a_{ij}$, is the matrix obtained by deleting $i^{\text{th}}$
row and $j^{\text{th}}$ column of $A$. Denoted by $M_{ij}$.

#### Co-factor of an element

Suppose $A=(a_{ij})$. $ $

Co-factor of an element $a_{ij}$, is defined as (commonly denoted as $A_{ij}$):

```math
A_{ij} = (−1)^{i+j}\,\lvert M_{ij}\rvert
```

#### Definition

If $A = (a_{ij})_{n\times n}$ then the **determinant** of $A$ is defined by:

```math
\lvert A\rvert=
\sum_{j=1}^{n}{a_{ij}A_{ij}}
```

For some $i \in [1,n]$. $ $

## Properties of determinants

- $\big|A^{T}\big|=|A|$
- Every element of a row or column of a matrix is $0$ then the value of its
  determinant is $0$.
- If 2 columns or 2 rows of a matrix are identical then its determinant is $0$.
- If A and B are two square matrices then
  $\lvert{AB}\rvert=\lvert{A}\rvert\lvert{B}\rvert$.
- The value of the determinant of a matrix remains unchanged if a scalar
  multiple of a row or column is added to any other row or column.
- If a matrix $B$ is obtained from a square matrix $A$ by an interchange of two
  columns or rows: $\lvert{B}\rvert=−\lvert{A}\rvert$.
- If every entry in any row or column is multiplied by $k$, then the whole
  determinant is multiplied by $k$.

### Composition

```math
\begin{vmatrix}
   a & b & c_1 + c_2 \\
	 d & e & f_1 + f_2 \\
   g & h & i_1 + i_2
\end{vmatrix}
=
\begin{vmatrix}
   a & b & c_1 \\
	 d & e & f_1 \\
   g & h & i_1
\end{vmatrix}
+
\begin{vmatrix}
   a & b & c_2 \\
	 d & e & f_2 \\
   g & h & i_2
\end{vmatrix}
```

## In relation with eigenvalues

For a $n\times n$ matrix A with $n$ number of
[eigenvalues](/mathematics/matrices/eigenvalues-eigenvectors/#eigenvalues):

```math
|A|=\prod_{i=1}^{n}{\lambda_i}
```
