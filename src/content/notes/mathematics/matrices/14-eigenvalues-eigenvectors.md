---
title: Eigenvalues & Eigenvectors
slug: mathematics/matrices/eigenvalues-eigenvectors
sidebar:
  order: 14
prev: true
next: true
---

## Definitions

### Characteristic Polynomial

Let $A$ be a $n\times n$ matrix.

```math
p(\lambda)=|A-\lambda I|
```

### Eigenvalues

Roots of the equation $p(\lambda) = 0$ are the eigenvalues of $A$.

:::note

- Product of the eigenvalues is equal to the
  [determinant](/mathematics/matrices/determinant/#in-relation-with-eigenvalues)
  of the matrix
- Sum of the eigenvalues is equal to the [trace](/mathematics/matrices/trace) of
  a matrix
- If $\lambda$ is an eigenvalue of $A$, then $\lambda^2$ is an eigenvalue of
  $A^2$
- $A$ and $A^T$ have the same eigenvalues.

:::

### Eigenvectors

The column vectors satisfying the equation $(A-\lambda_i I)X_i$. $ $

#### Normalized eigenvectors

An eigenvector with the magnitude (norm) of $1$. Normalizing factor $k$ of any
eigenvector is:

```math
\frac{1}{k}=\sqrt{\sum_{i=1}^n X_i^2}
```

### Norm

Norm of a column or row matrix $W_{n\times n}$ is denoted by $||W||$ and defined
as:

```math
||W|| = \sqrt{\sum_{i=1}^n w_i^2}
```

### Algebraic Multiplicity

If the characteristic polynomial consists of a factor of the form
$(\lambda − \lambda_i)^r$ and $(\lambda − \lambda_i)^{r+1}$ is not a factor of
the characteristic polynomial then $r$ is the algebraic multiplicity of the
eigenvalue $\lambda$.

### Spectrum

Set of all eigenvalues.

### Spectral Radius

```math
R=\max\Big\{|\lambda_i|\; where \;\lambda_i \in \text{Spectrum}\Big\}
```

## Linear Independence of Eigenvectors

Suppose $X_1,X_2,X_3,\dots,X_n$ is a set of eigenvectors.
$k_1,k_2,k_3,\dots,k_n$ is a set of scalars.

All those eigenvectors are independent **iff**:

```math
k_1X_1+k_2X_2+k_3X_3+\dots+k_nX_n=0
\implies
k_1=k_2=k_3=\dots=k_n=0
```

## For special matrices

### Real symmetric matrix

Suppose $A$ is a symmetric matrix with all real entries. Then: $ $

- The eigenvalues of $A$ are all real:
  $\forall \lambda \in S_A, (\lambda_i \in \mathbb{R})$
- The eigenvectors of $A$ (corresponding to distinct values of $\lambda$) are
  mutually orthogonal
- $A$ and $A^T$ have the same eigenvalues

### Upper triangular matrix

The eigenvalues are the diagonal entries.
