---
title: Continued Fraction Expansion
slug: mathematics/real-analysis/continued-fraction
sidebar:
  order: 4
prev: true
next: true
---

## The process

- Separate the integer part
- Find the inverse of the remaining part. Result will be greated than 1.
- Repeat the process for the remaining part.

## Finite expansion

Take $ \frac{420}{69} $ for example. $ $

$ \frac{420}{69} = 6 + \frac{6}{69} $

$ \frac{420}{69} = 6 + \cfrac{1}{\frac{69}{6}} $

$ \frac{420}{69} = 6 + \cfrac{1}{11 + \cfrac{3}{6}} $

$ \frac{420}{69} = 6 + \cfrac{1}{11 + \cfrac{1}{2}} $

As $ \frac{420}{69} $ is finite, its continued fraction expansion is also
finite. And it can be written as $ \frac{420}{69} = [6; 11, 2] $.

## Infinite expansion

For irrational numbers, the expansion will be infinite.

For example $ \pi $: $ $

$ \pi = 3 + \cfrac{1}{7 + \cfrac{1}{15 + \cfrac{1}{1 + \cfrac{1}{292 +
\dotsb}}}} $

Conintued fraction expansion of $ \pi $ is $ [3; 7, 15, 1, 292, 1, 1, 1, 2, 1,
3, 1, 14, 2, 1, 1, 2, \ldots] $.

## Convergence

In the case of infinite continued fraction expansion, on each "+" part, the
expansion can be separated. Each separated part will generate a sequence of
numbers, which is converging to the original number.

For example, for $\pi$, the sequence will be: $ $

```math
3,\frac{22}{7},\frac{303}{106},\frac{355}{113}\; \dots
```

Here:

- Elements with the odd index are lesser than the converging value.
- Elements with the even index are greater than the converging value.
