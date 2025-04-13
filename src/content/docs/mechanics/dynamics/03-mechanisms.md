---
title: Mechanisms
slug: mechanics/dynamics/mechanisms
sidebar:
  order: 3
prev: true
next: true
---

### Mechanism

An assembly of rigid bodies or links designed to obtain a desired motion from an
available motion while transmitting appropriate forces and moments. Motion of
the links have definite relative motion with other links.

#### Simple mechanisms

- Lever
- Pulley
- Gear trains
- Belt and chain drive
- Four bar linkage

#### Other complex mechanisms

- Lock stitch mechanism (used in sewing machine)
- Geneva mechanism  
  Constant rotational motion to intermittent rotational motion. mostly used in
  watches.
- Scotch yoke mechanism  
  Constant rotational motion to linear motion (vice versa.). Mainly used as
  valve actuators in high pressure gas pipelines.
- Slider crank mechanism  
  Used in internal combustion engines

## 2D link mechanisms

### Method of instantaneous centre of rotation

- Find the instantaneous centre of the rotation from known velocities at known
  points
- Use the instantaneous centre to find velocities at other points

### Kinematic chain

An arbitrary collection of links (forming a closed link) that is capable of
relative motion and that can be made into a rigid structure by an additional
single link.

## Lower and Higher pairs

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
