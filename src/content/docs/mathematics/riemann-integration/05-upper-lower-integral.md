---
title: Upper & Lower integral
slug: mathematics/riemann-integration/upper-lower-integral
sidebar:
  order: 5
prev: true
next: true
---

Let $\mathbb{P}$ be the set of all possible partitions of the interval $[a, b]$.

## Upper Integral

```math
U(f)=\inf{\set{U(f;P);P\in\mathbb{P}}}=\overline{\int_{a}^{b}{f}}
```

## Lower Integral

```math
L(f)=\sup{\set{L(f;P);P\in\mathbb{P}}}=\underline{\int_{a}^{b}{f}}
```

For a bounded function $f$, always $L(f)\le U(f)$
