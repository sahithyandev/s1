---
title: Matrix Multiplication
slug: mathematics/matrices/matrix-multiplication
sidebar:
  order: 2
prev: true
next: true
---

Suppose $A=(a_{ij})_{m\times{p}}$ and $B=(b_{ij})_{q\times{n}}$. Matrix
multiplication is only defined when $q=p$ here.

```math
A\times{B}=C
=(c_{ij})_{m\times{n}}
\;\;\text{where}
\;\;
c_{ij} =
\sum_{k=1}^{p}{a_{ik}\times b_{kj}}
```

:::note

- Generally $A\times{B}\not=B\times{A}$
- $A\times{B}=0 \centernot\implies A=0 \lor B=0$
- $A\not=0 \land B\not=0 \centernot\implies A\times{B}\not=0$

:::

## Properties of matrix multiplication

$A,B,C,I$ matrices must be chosen so that below-mentioned products are defined.
$ $

1. Associative: $A(BC) = (AB)C$
2. Right distributive over addition: $(A+B)C=AC+BC$
3. Left distributive over addition: $C(A+B)=CA+CB$
4. $AI=IA=A$
