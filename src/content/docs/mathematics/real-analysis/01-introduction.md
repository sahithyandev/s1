---
title: Real Analysis
slug: mathematics/real-analysis/introduction
sidebar:
  label: Introduction
  order: 1
prev: false
next: true
---

## Mathematical logic

### Proposition

A statement in either true or false state.

### Symbols

| Symbol        | Read as        |
| ------------- | -------------- |
| $\land$       | and            |
| $\lor$        | or             |
| $\rightarrow$ | then           |
| $\implies$    | implies        |
| $\Leftarrow$  | implied by     |
| $\iff$        | if and only if |
| $\forall$     | for all        |
| $\exists$     | there exists   |
| $\sim$        | not            |

Let's take $ a \to b $. $ $

1. Contrapositive or transposition: $ \sim b \to\,\, \sim a $. This is
   equivalent to the original.
2. Inverse: $ \sim a \to\,\,\sim b $. Does not depend on the original.
3. Converse: $ b \to a $. Does not depend on the original.

$ a \to b \,\equiv\,\,\sim a \lor b \,\equiv\,\, \sim b \to\,\,\sim a $

### Required proofs

- $\sim\forall x \, P(x) \equiv \exists x \sim{P(x)}$
- $\sim\exists x \, P(x) \equiv \forall x \sim{P(x)}$
- $\exists x\, \exists y P(x,y) \equiv \exists y\, \exists x {P(x,y)}$
- $\forall x\, \forall y P(x,y) \equiv \forall y\, \forall x {P(x,y)}$
- $\exists x\, \forall y P(x,y) \implies \forall y\, \exists x {P(x,y)}$
- $(A \rightarrow C)\land(B \rightarrow C) \equiv (A\lor B)\rightarrow C$

## Methods of proofs

1. Just proof what should be proven
2. Prove the contrapositive
3. Proof by contradiction
4. Proof by induction

### Proof by contradiction

Suppose $ a \implies b $ has to be proven. If $ a\,\land \sim b $ is proven to
be false, then, by proof by contradiction, $ a \implies b $ can be trivially
proven.

#### Logic behind proof by contradiction

$ a\,\land \sim b = F $

$ \sim{(a\,\land \sim b)} =\,\, \sim F $

$ \sim a \lor b = T $

$ a \to b = T $

$ a \implies b $
