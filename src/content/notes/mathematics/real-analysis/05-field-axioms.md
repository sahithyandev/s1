---
title: Field Axioms
slug: mathematics/real-analysis/field-axioms
sidebar:
  order: 5
prev: true
next: true
---

## Field Axioms of R

$ \mathbb{R} \not = \emptyset $ with two binary operations $ + $ and $ \cdot $
satisfying the following properties

1. Closed under addition: $ \forall a, b \in \mathbb{R} ; a + b \in \mathbb{R} $
2. Commutative: $ \forall a, b \in \mathbb{R}; a + b = b + a $
3. Associative: $ \forall a, b, c \in \mathbb{R}; (a + b) + c = a + (b + c) $
4. Additive identity: $ \exists 0 \in \mathbb{R}\, \forall a \in \mathbb{R}; a +
   0 = 0 + a = a $
5. Additive inverse: $ \forall a \in \mathbb{R}\, \exists (-a); a + (-a) =
   (-a) + a = 0 $
6. Closed under multiplication: $ \forall a, b \in \mathbb{R} ; a \cdot b \in
   \mathbb{R} $
7. Commutative: $ \forall a, b \in \mathbb{R}; a \cdot b = b \cdot a $
8. Associative: $ \forall a, b, c \in \mathbb{R}; (a \cdot b) \cdot c = a \cdot
   (b \cdot c) $
9. Multiplicative identity: $ \exists 1 \in \mathbb{R}\, \forall a \in
   \mathbb{R}; a \cdot 1 = 1 \cdot a = a $
10. Multiplicative inverse: $ \forall a \in \mathbb{R}-\Set{0}\, \exists a^{-};
    a \cdot a^{-} = a^{-} \cdot a = 1 $
11. Multiplication is distributive over addition: $ a \cdot (b + c) = a \cdot
    b + a \cdot c $

### Required proofs

The below mentioned propositions can and should be proven using the
above-mentioned axioms. $ a, b, c \in \mathbb{R} $. $ $

- $ a\cdot0 = 0 $
  Hint: Start with $a(1+0)$
- $ 1\not = 0 $
- Additive identity ($ 0 $) is unique
- Multiplicative identity ($ 1 $) is unique
- Additive inverse ($-a$) is unique for a given $a$
- Multiplicative inverse ($ a^{-1} $) is unique for a given $ a $
- $ a + b = 0 \implies b = -a $
- $ a + c = b + c \implies a = b $
- $ -(a + b) = (-a) + (-b) $
- $ -(-a) = a $
- $ ac = bc \implies a = b $
- $ ab = 0 \implies a = 0 \lor b = 0 $
- $ −(ab) = (−a)b = a(−b) $
- $ (−a)(-b) = ab $
- $ a \not = 0 \implies {(a^{-1})}^{-1} = a $
- $ a, b \not = 0 \implies {ab}^{-1} = a^{-1}b^{-1} $

## Field

Any set satisfying the above axioms with two binary operations (commonly $ + $
and $ \cdot $) is called a **field**. Written as:

```math
(\mathbb{R}, +, \cdot)
\;\text{is a Field}
\;\;
\text{but}
\;\;
(\mathbb{R}, \cdot, +)\;\text{is not a field}
```

### Field or Not?

|                                                         | Is field? | Reason (if not)                            |
| ------------------------------------------------------- | --------- | ------------------------------------------ |
| $(\mathbb{R},+,\cdot)$                                  | True      |                                            |
| $(\mathbb{R},\cdot,+)$                                  | False     | Axiom 11 is invalid                        |
| $(\mathbb{Z},+,\cdot)$                                  | False     | Multiplicative inverse doesn't exist       |
| $(\mathbb{Q},+,\cdot)$                                  | True      |                                            |
| $(\mathbb{Q}^c,+,\cdot)$                                | False     | $\sqrt{2}\cdot\sqrt{2}\not\in\mathbb{Q}^c$ |
| Boolean algebra                                         | False     | Additive inverse doesn't exist             |
| $(\set{0,1},+\;\text{mod}\;2,\cdot\;\text{mod}\;2)$     | True      |                                            |
| $(\set{0,1,2},+\;\text{mod}\;3,\cdot\;\text{mod}\;3)$   | True      |                                            |
| $(\set{0,1,2,3},+\;\text{mod}\;4,\cdot\;\text{mod}\;4)$ | False     | Multiplicative inverse doesn't exist       |
