---
title: Composition
slug: mathematics/real-analysis/composition
sidebar:
  order: 10
prev: true
next: true
---

## Composition of relations

Let $R:A\rightarrow{B}$ and $S:B\rightarrow{C}$ are 2 relations. Composition can
be defined when $\text{ran}(R)=\text{preran}(S)$.

Say $\text{ran}(R)=\text{preran}(S)=D$. Composition of the 2 relations is
written as: $ $

```math
S\circ{R}=\set{(a,c)\,|\,(a,b)\in{R},\,(b,c)\in{S},\,b\in{D}}
```

### Identity relation

From the properties of the inverse relation, $R\circ R^{-1}, R^{-1}\circ R$ are
both defined always. This relation is called the identity relation and denoted
by $I$.

## Composition of functions

Let $f:A\rightarrow{B}$ and $g:B\rightarrow{C}$ be 2 functions where $f$ is
[onto](/mathematics/real-analysis/relations/#onto).

```math
g\circ{f}=\set{(x,z)\,|\,(x,y)\in{f},\,(y,z)\in{g},\,y\in{B}}=g(f(x))
```

The notation $g\circ f$ can be written as $g(f(x))$.
