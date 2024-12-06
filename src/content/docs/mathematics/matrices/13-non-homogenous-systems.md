---
title: Solution of Non-homogenous Systems
slug: mathematics/matrices/non-homogenous-systems
sidebar:
  order: 13
next: true
prev: true
---

Consider the system: $A_{n\times n}X_{n\times 1}=B_{n\times 1}$. $ $

- $|A| \neq 0 \iff \text{Rank }A = \text{Rank }(A|B)=n \iff \text{unique solution exists}$
- $|A|=0 \implies \text{no solution} \lor \text{infinitely many solutions}$
- $\text{Rank }A <\text{Rank }(A|B) \implies \text{no solutions}$
- $\text{Rank }A =\text{Rank }(A|B) <n \implies \text{infinitely many solutions}$

## Methods

### Method 1: Direct approach

Used when coefficient matrix $A$ is invertible. It means the system has a unique
set of solutions. $ $

```math
AX=B
\implies
X=A^{-1}B
```

### Method 2: Cramer's Rule

Let $AX=B$, where $A$ is the coefficient matrix and $X=(x_i)_{n\times 1}$.

```math
x_i=\frac{\lvert{A_i}\rvert}{\lvert{A}\rvert}
```

Where $A_i$ is the matrix obtained by replacing $i$th column in matrix $A$ by
$B$.

### Method 3: Reducing to Echelon Form

Start with $(A|B)$. Convert the $\text{LHS}$ to
[echelon form](/mathematics/matrices/echelon-form). The solution can be found
easily. If a contradiction is encountered while solving the equation, then the
system has no solutions.
