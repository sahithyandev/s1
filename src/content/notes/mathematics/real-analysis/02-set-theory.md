---
title: Set theory
slug: mathematics/real-analysis/set-theory
sidebar:
  order: 2
prev: true
next: true
---

Zermelo-Fraenkel set theory with axiom of choice (ZFC) --
[9 axioms all together](#the-axioms) -- is being used in this module.

## Definitions

- $x \in A^\text{c} \iff x \not\in A$
- $x \in A\cup B \iff x \in A \lor x \in B$
- $x \in A\cap B \iff x \in A \land x \in B$
- $A \subset B = \forall x (x \in A \implies x \in B)$
- $A - B = A \cap B^\text{c}$

## Required proofs

- $(A\cap B)^\text{c} = A^\text{c} \cup B^\text{c}$
- $(A\cup B)^\text{c} = A^\text{c} \cap B^\text{c}$
- $A \cap (B \cup C) = (A \cap B)\cup (A\cap C)$
- $A \cup (B \cap C) = (A \cup B)\cap (A\cup C)$
- $A \subset A\cup B$
- $A\cap B \subset A$

## The axioms

:::note

This section was **not** discussed in class, and can be skipped.

:::

All the axioms defined in Zermelo-Fraenkel set theory and axiom of choice are
mentioned here for the sake of completeness. Their exact, formal definition is
not included here. Formal definitions can be found on
[ZFC set theory - Wikipedia](https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory).

### Axiom of extensionality

Two sets are equal (are the same set) if they have the same elements.

```math
A = B \iff ((\forall z \in A \implies z \in B) \land (\forall z \in B \implies z \in A))
```

### Axiom of regularity

A set cannot be an element of itself.

### Axiom of specification

Subsets that are constructed using set builder notation, always exists.

### Axiom of pairing

If $x$ and $y$ are sets, then there exists a set which contains both $x$ and $y$
as elements.

```math
\forall x \forall y \exists z ((x\in z) \land (y \in z))
```

### Axiom of union

The union of the elements of a set exists.

### Axiom schema of replacement

The image of a set under a definable function will also be a set.

### Axiom of infinity

There exists a set having infinitely many elements.

### Axiom of power set

For any set $x$, there exists a set $y$ that contains every subset of $x$:

```math
\forall x \exists y \forall z (z \subset x \implies z \in y)
```

### Axiom of well-ordering (choice)

I don't understand this axiom. If you do, let me know.
