---
title: Known Limits
slug: mathematics/real-analysis/known-limits
sidebar:
  order: 13
prev: true
next: true
---

## Well-known limits

### Existing limits

```math
\lim_\limits{x\to 0} \frac{\sin x}{x} = 1
```

:::note[Proof hint]

Squeeze theorem with $\sin \theta \cos \theta \lt \theta \lt \tan\theta$. $ $

:::

```math
\lim_\limits{x\to a} \frac{x^n - a^n}{x - a} = na^{n-1}
```

```math
\lim_\limits{x\to \infty} \bigg(1+\frac{a}{x}\bigg)^{bx} = e^{ab}
```

```math
\forall x\in\mathbb{R}\;\;
\lim_\limits{n\to\infty}\frac{x^n}{n!}=0
```

### Limits that DNE

```math
\lim_\limits{x\to \infty} \sin x
```

```math
\lim_\limits{x\to 0} \sin\bigg(\frac{1}{x}\bigg)
```

## Indeterminate forms

- $\frac{0}{0}$
- $\frac{\infty}{\infty}$
- $\infty\cdot0$
- $\infty-\infty$
- $\infty^{0}$
- $0^0$
- $1^\infty$
