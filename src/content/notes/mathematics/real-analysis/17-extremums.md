---
title: Extremums
slug: mathematics/real-analysis/extremums
sidebar:
  order: 17
prev: true
next: true
---

Suppose $f:[a,b]\rightarrow \mathbb{R}$, and
$F=f([a,b])=\Big\{\,f(x)\;|\;x\in [a,b]\,\Big\}$. Both minimum and maximum
values are called the extremums.

## Maximum

Maximum of the function $f$ is $f(c)$ where $c\in[a,b]$ **iff**:

```math
\forall x \in [a,b],\; f(c)\ge f(x)
```

aka. **Global Maximum**. Maximum doesn't exist always.

### Local Maximum

A Local maximum of the function $f$ is $f(c)$ where $c\in[a,b]$ **iff**:

```math
\exists \delta\;\;\forall x\,(0<|x-c|<\delta \implies f(c)\ge f(x))
```

Global maximum is obviously a local maximum.

The above statement can be simplified when $c=a$ or $c=b$.

When $c=a$: $ $

```math
\exists \delta\;\;\forall x\,(0<x-c<\delta \implies f(c)\ge f(x))
```

When $c=b$: $ $

```math
\exists \delta\;\;\forall x\,(-\delta<x-c<0 \implies f(c)\ge f(x))
```

## Minimum

Minimum of the function $f$ is $f(c)$ where $c\in[a,b]$ **iff**:

```math
\forall x \in [a,b],\; f(c)\le f(x)

```

aka. **Global Minimum**. Minimum doesn't exist always.

### Local Minimum

```math
\exists \delta\;\;\forall x\,(0<|x-c|<\delta \implies f(c)\le f(x))
```

Global minimum is obviously a local maximum.

The above statement can be simplified when $c=a$ or $c=b$.

When $c=a$: $ $

```math
\exists \delta\;\;\forall x\,(0<x-c<\delta \implies f(c)\le f(x))
```

When $c=b$: $ $

```math
\exists \delta\;\;\forall x\,(-\delta<x-c<0 \implies f(c)\le f(x))
```

## Special cases

### f is continuous

Then by
[Extreme Value Theorem](/mathematics/real-analysis/continuity-theorems/#extreme-value-theorem),
we know $f$ has a minimum and maximum in $[a,b]$.

### f is differentiable

- If $f(a)$ is a local maximum: $f'_{\text{+}}(a)\le 0$
- If $f(b)$ is a local maximum: $f'_{\text{-}}(b)\ge 0$
- $c\in(a,b)$ and If $f(c)$ is a local maximum: $f'(c)= 0$
- If $f(a)$ is a local minimum: $f'_{\text{+}}(a)\ge 0$
- If $f(b)$ is a local minimum: $f'_{\text{-}}(b)\le 0$
- $c\in(a,b)$ and If $f(c)$ is a local minimum: $f'(c)= 0$
