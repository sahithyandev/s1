---
title: Uniformly Cauchy
slug: maths/real-analysis/uniformly-cauchy
sidebar:
  order: 30
---

$u_n(x)$ in $x\in A$ is said to be uniformly cauchy **iff**:

```math
\forall \epsilon \gt 0
\exists N \in \mathbb{Z}^+
\forall m,n \gt N
\forall x \in A;
\lvert
u_n(x)-u_m(x)
\rvert \lt \epsilon
```

If $u_n(x)$ is a sequence of functions on $\mathbb{R}$, then:

```math
u_n(x)\text{ converges uniformly} \iff
u_n(x)\text{ is uniformly Cauchy}
```

:::note[Proof Hint]

To prove $\implies$: $ $

- Consider $\lvert u_n(x) - u_m(x) \rvert$
- Introduce $u(x)$ in the inequality
- Split the inequality and and use the definition of uniform convergence

To prove $\impliedby$: $ $

- Consider the definition of uniformly Cauchy
- Let $m$ go to $\infty$

:::
