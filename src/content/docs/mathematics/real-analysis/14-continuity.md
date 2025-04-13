---
title: Continuity
slug: mathematics/real-analysis/continuity
sidebar:
  order: 14
prev: true
next: true
---

A function $f$ is continuous at $a$ **iff**:

```math
\lim_{x\to a}{f(x)}=f(a)
```

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
(|x-a|<\delta\implies{|f(x)-f(a)|<\epsilon})
```

## One-side continuous

### Continuous from left

A function $f$ is continuous from left at $a$ **iff**:

```math
\lim_{x\to a^{-}}{f(x)}=f(a)
```

### Continuous from right

A function $f$ is continuous from right at $a$ **iff**:

```math
\lim_{x\to a^{+}}{f(x)}=f(a)
```

## On interval

### Open interval

A function $f$ is continuous in $(a,b)$ **iff** $f$ is continuous on every
$c\in(a,b)$.

### Closed interval

A function $f$ is continuous in $[a,b]$ **iff** $f$ is:

- continuous on every $c\in(a,b)$
- right-continuous at $a$
- left-continuous at $b$

## Uniformly continuous

Suppose a function $f$ is continuous on $(a,b)$. $f$ is uniformly continuous on
$(a,b)$ **iff**:

```math
\forall \epsilon >0\;\exists \delta >0\;\text{s.t.}\;
|x-y|<\delta \implies |f(x)-f(y)|<\epsilon
```

If a function $f$ is continuous on $[a,b]$, $f$ is uniformly continuous on
$[a,b]$.
