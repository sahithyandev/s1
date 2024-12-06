---
title: Relations
slug: mathematics/real-analysis/relations
sidebar:
  order: 8
prev: true
next: true
---

## Definitions

- Cartesian Product of sets $A,B$ $A\times{B}=\set{(a,b)|a\in{A},b\in{B}}$

- Ordered pair $(a,b)=\Big\{\set{a},\set{a,b}\Big\}$ $ $

## Relation

Let $A,B\not=\emptyset$. A relation $R:A\rightarrow{B}$ is a non-empty subset of
$A\times{B}$.

- $a\,R\,b \equiv (a,b)\in{R}$
- Domain of $R$: $dom(R)=A$
- Codomain of $R$: $codom(R)=B$
- Range of $R$: $ran(R)=\set{y|(x,y)\in{R}}$
- $ran(R)\subseteq{B}$ $ $
- Pre-range of $R$: $preran(R)=\set{x\,|\,(x,y)\in{R}}$
- $preran(R)\subseteq{A}$ $ $
- $R(a) = \set{b\,|\,(a,b)\in{R}}$

### Everywhere defined

$R$ is everywhere defined $\iff{A=dom(R)=preran(R)}$
$\iff{\forall{a\in{A}},\;\exists{b\in{B}};\,(a,b)\in{R}}$.

### Onto

$R$ is onto $\iff{B=codom(R)=ran(R)}$
$\iff{\forall{b\in{B}}\,\exists{a\in{A}}\,(a,b)\in{R}}$

Aka. **surjection**.

### Inverse

Inverse of a relation $R$: $ $

```math
R^{-1}=\set{(b,a)\,|\,(a,b)\in{R}}
```

## Types of relation

### one-many

$\iff\exists{a\in{A}},\,\exists{b_1,b_2\in{B}}\;((a,b_1),(a,b_2)\in{R}\,\land\,b_1\not=b_2)$
$ $

#### Not one-many

$\iff\forall{a\in{A}},\,\forall{b_1,b_2\in{B}}\;((a,b_1),(a,b_2)\in{R}\implies b_1=b_2)$
$ $

### many-one

$\iff\exists{a_1,a_2\in{A}},\,\exists{b\in{B}}\;((a_1,b),(a_2,b)\in{R}\,\land\,a_1\not=a_2)$
$ $

#### Not many-one

$\iff\forall{a_1,a_2\in{A}},\,\forall{b\in{B}}\;((a_1,b),(a_2,b)\in{R}\implies a_1=a_2)$
$ $

### many-many

**iff** $R$ is **one-many** and **many-one**. $ $

### one-one

**iff** $R$ is **not one-many** and **not many-one**. Aka. **injection**. $ $

### Bijection

When a relation is **onto** and **one-one**.
