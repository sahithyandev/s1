---
title: Other Theorems
slug: mathematics/real-analysis/other-theorems
sidebar:
  order: 18
prev: true
next: true
---

## Darboux's Theorem

Let $f$ be differentiable on $[a,b]$, $f'(a)\neq f'(b)$ and $u$ is strictly
between $f'(a)$ and $f'(b)$:

```math
\exists c \in (a,b)\;\text{s.t.}\,f'(c)=u
```

:::note[Proof Hint]

Use $g(x)=ux - f(x)$ and follow the proof pattern of
[IVT](/mathematics/real-analysis/continuity-theorems/#intermediate-value-theorem)
proof. $ $

:::

## Rolle's Theorem

Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$. And $f(a)=f(b)$.
Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; f'(c)=0
```

:::note[Proof Hint]

By
[Extreme Value Theorem](/mathematics/real-analysis/continuity-theorems/#extreme-value-theorem),
maximum and minimum exists for $f$. $ $

Consider $2$ cases: $ $

1. Both minimum and maximum exist at $a$ and $b$.
2. One of minimum or maximum occurs in $(a,b)$.

:::

## Mean Value Theorem

Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; f'(c)=\cfrac{f(b)-f(a)}{b-a}
```

:::note[Proof Hint]

- Define $g(x)=f(x)-\Big(\frac{f(a)-f(b)}{a-b}\Big)x$
- $g(a)$ will be equal to $g(b)$
- Use Rolle's Theorem for $g$

:::

## Cauchy's Mean Value Theorem

Let $f$ and $g$ be continuous on $[a,b]$ and differentiable on $(a,b)$, and
$\forall x \in (a,b)\;g'(x) \neq 0$ Then:

```math
\exists c\in(a,b)\;\text{s.t.}\; \frac{f'(c)}{g'(c)}=\cfrac{f(b)-f(a)}{g(b)-g(a)}
```

:::note[Proof Hint]

- Define $h(x)=f(x)-\Big(\frac{f(a)-f(b)}{g(a)-g(b)}\Big)g(x)$
- $h(a)$ will be equal to $h(b)$
- Use Rolle's Theorem for $h$

:::

Mean value theorem can be obtained from this when $g(x)=x$. $ $

## L'Hopital's Rule

:::note

Be careful with the pronunciation.

- It's not "Hospital's Rule", there are no "s"
- It's not "Hopital's Rule" either, there is a "L'"

Learn the correct pronounciation from
[this video on YouTube](https://www.youtube.com/watch?v=I-1rSB4LMVk).

:::

L'Hopital's Rule can be used when all of these conditions are met. (here
$\delta$ is some positive number). Select the appropriate $x$ range (as in the
limit definition), say $I$. $ $

1. Either of these conditions must be satisfied
   - $f(a)=g(a)=0$
   - $\lim{f(x)}=\lim{g(x)}=0$
   - $\lim{f(x)}=\lim{g(x)}=\infty$
2. $f,g$ are continuous on $x\in I$ (closed interval)
3. $f,g$ are differentiable on $x\in I$ (open interval)
4. $g'(x) \neq 0$ on $x\in I$ (open interval)
5. $\lim\limits_{x\to a^{\text{+}}}{\frac{f'(x)}{g'(x)}}=L$

Then: $\lim\limits_{x\to a^{\text{+}}}{\frac{f(x)}{g(x)}}=L$ $ $

Here, $L$ can be either a real number or $\pm \infty$. And it is valid for all
types of "x limits".

:::note[Proof Hint]

L'Hopital's rule can be proven using Cauchy's Mean Value Theorem.

:::
