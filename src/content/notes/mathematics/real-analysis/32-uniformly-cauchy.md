---
title: Uniformly Cauchy
slug: mathematics/real-analysis/uniformly-cauchy
sidebar:
  order: 32
prev: true
next: true
---

$u_n(x)$ in $x\in A$ is said to be uniformly Cauchy **iff**:

```math
\forall \epsilon \gt 0
\exists N \in \mathbb{Z}^+
\forall m,n \gt N
\forall x \in A;
\lvert
u_n(x)-u_m(x)
\rvert \lt \epsilon
```

If $u_n(x)$ is a sequence of real-valued functions, then: $ $

```math
u_n(x)\text{ converges uniformly}
\iff
u_n(x)\text{ is uniformly Cauchy}
```

:::note[Proof Hint]

To prove $\implies$: $ $

- Consider $\lvert u_n(x) - u_m(x) \rvert$
- Introduce $u(x)$ in the inequality
- Split the inequality and and use the definition of uniform convergence

To prove $\impliedby$: $ $

- Consider the definition of uniformly Cauchy
- $\mathbb{R}$ is complete which implies the convergence.

:::
