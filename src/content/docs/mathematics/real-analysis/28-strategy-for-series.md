---
title: Strategy for Series
slug: mathematics/real-analysis/strategy-for-series
sidebar:
  order: 28
prev: true
next: true
---

Consider a series in the form $\sum_{k=1}^n {u_n}$. To determine whether the
series converges or diverges, one of these cases (the most appropriate one) can
be used. No need to memorize all these.$ $

1. If $\lim_{n\to\infty} u_n \neq 0$ is apparent, then
   [divergence test](/mathematics/real-analysis/convergence-tests/#divergence-test)
   can be used. Otherwise look out for another way.
2. If $u_n$ consists of a constant raised to a power of $n$,
   [geometric series](/mathematics/real-analysis/known-series/#geometric-series)
   can be used.
3. If $u_n$ consists of $n$ raised to a constant power,
   [p-series](/mathematics/real-analysis/known-series/#p-series) can be used.
4. If $u_n$ consists of $(-1)^n$,
   [alternating series test](/mathematics/real-analysis/alternating-series/#convergence-test)
   can be used.
5. If $u_n$ consists of $v_n$ raised to a power of $n$,
   [root test](/mathematics/real-analysis/convergence-tests/#root-test) would be
   suitable.
6. If $u_n$ includes $n!$,
   [ratio test](/mathematics/real-analysis/convergence-tests/#ratio-test) must
   be used.
7. If $u_n$ is a fraction, and consists of $n$ in both the denominator and the
   numerator, then
   [direct comparison test](/mathematics/real-analysis/convergence-tests/#direct-comparison-test)
   or
   [limit comparison test](/mathematics/real-analysis/convergence-tests/#limit-comparison-test)
   can be used. Consider the dominating parts to choose the $v_n$.
8. If $u(x)$ is a positive and decreasing function, and
   $\int_a^\infty u(x)\,\text{d}x$ is easy to evaluate, then
   [integral test](/mathematics/real-analysis/convergence-tests/#integral-test)
   can be used.

## Secret note on inequalities

For any $p\gt0$ and $q>1$, as $n$ tends to $\infty$, the below inequality holds:

```math
\ln n \ll
n^p \ll
q^n \ll
n! \ll
n^n
```

For $p \le k$: $ $

```math
n^p \log p \ll n^k
```

For $p \gt k$: $ $

```math
n^p \log p \gg n^k
```

These inequalities can be used to find corresponding $v_n$ to some $u_n$ to be
used for
[direct comparison test](/mathematics/real-analysis/convergence-tests/#direct-comparison-test)
or
[limit comparison test](/mathematics/real-analysis/convergence-tests/#direct-comparison-test).
The list is found on a video by
[blackpenredpen on YouTube](https://www.youtube.com/@blackpenredpen).
