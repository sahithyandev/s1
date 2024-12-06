---
title: Sequential Characterization of Integrability
slug: mathematics/riemann-integration/sequential-characterization
sidebar:
  order: 10
prev: true
next: true
---

A bounded function $f:[a,b]\to \mathbb{R}$ is Riemann integrable **iff**
$\exists \set{P_n}$ a sequence of partitions, such that:

```math
\lim_\limits{n\to\infty}{
\Big[
U(f;P_n)-
L(f;P_n)
\Big]
}
=0
```

In that case:

```math
\int_a^b f
=
\lim_\limits{n\to\infty}
U(f;P_n)
=
\lim_\limits{n\to\infty}
L(f;P_n)
```

:::note[Proof Hint]

Cauchy criteria and squeeze theorem is used for both side proof.

For $\impliedby$: $ $

- Consider the limit definition.
- Prove $f$ is Riemann integrable on $P_n$ by Cauchy criteria.
- Use squeeze theorem for $U(f;P_n)-U(f)\le U(f;P_n)-L(f;P_n)$ to prove limit of
  upper sum
- Prove limit of lower sum using the limit of upper sum

For $\implies$: Consider the below, where $n\in\mathbb{N}$.

```math
0 \le
U(f;P_n) - L(f;L_n) \le
\frac{1}{n}
```

:::

## Theorem

Suppose $f$ is Riemann integrable on $[a,b]$.

```math
\forall \epsilon \gt 0\;
\exists \delta \gt 0\;
\forall P\;
\bigg(
\lvert P \rvert \lt \delta
\implies
\Bigg\lvert
\int_a^b f
-
\sum_{j=1}^n f(\zeta_j)I_j
\Bigg\rvert
\lt
\epsilon
\bigg)
```

where $\zeta_j \in [x_{j-1},x_j], j=1,2,\cdots,n$. $ $

:::note[Proof Hint]

```math
\underline{
\int_a^b f
} - \epsilon
\;
\lt
\;
L(f;P)
\;
\le
\;
\sum_{j=1}^n f(\zeta_j)I_j
\;
\le
\;
U(f;P)
\;
\lt
\;
\overline{
\int_a^b f
} + \epsilon
```

:::
