---
title: Mobility of Mechanisms
slug: mechanics/dynamics/mobility-of-mechanisms
sidebar:
  order: 6
prev: true
next: false
---

### Independent object

Has $3$ degrees of freedom. $ $

### Lower Pair

Aka. primary pair. A pair of kinematic elements which share a surface of
contact.

When a rigid body is constrained by a lower pair, which allows only rotational
or sliding movement. It has $1$ degree of freedom, and the $2$ degrees of
freedom are lost.

Some examples:

- Turning pair
- Sliding pair
- Helical thread

### Higher Pair

A pair of kinematic elements which share only a line or a point of contact.

When a rigid body is constrained by a higher pair, it has $2$ degrees of
freedom: translating along the curved surface and turning about the
instantaneous contact point. $ $

Gear is an example.

When 2 independent objects are brought together to create a link, some degree of
freedom will be lost.

> "You lose some freedom when you become a couple." -- Our Dynamics Lecturer

## Grubler's Equation

Suppose $N$ kinematic elements are brought together. $1$ of them is fixed. The
remaining elements have $3(N-1)$ degrees of freedom. Each lower pairs loses $2$
degrees of freedom. Each higher pairs loses $1$ degree of freedom. For a
workable mechanism, resultant degrees of freedom must be $1$.

```math
F=3(N-1)-2L-H=1 \implies 3N-2L+H=4
```

Here:

- $F$ - degree of freedoms
- $N$ - number of kinematic elements
- $L$ - number of lower pairs
- $H$ - number of higher pairs
