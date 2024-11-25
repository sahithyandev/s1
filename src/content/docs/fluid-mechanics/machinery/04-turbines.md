---
title: Turbines
slug: fluid-mechanics/machinery/turbines
sidebar:
  order: 4
next: false
prev: true
---

Used to generate electricity.

### Runner

A wheel with buckets attached. Mounted on a shaft.

## Types of turbines

### Reaction turbines

Aka. pressure turbines. Similar to pumps; but operating in reverse direction
(direction of fluid flow and energy transfer). Guide vanes are placed to guide
fluid flow onto the runner.

3 types of reaction turbines based on the direction of fluid flow.

#### Axial flow

Aka. Kaplan turbine. Commonly used to get a head output of 3 to 70m.

#### Radial flow

Aka. Francis turbine. Commonly used to get a head output of 30 to 500m.

### Impulse turbines

Aka. velocity turbines. Used for high heads. Highly efficient. High velocity jet
is focused on the buckets of the runner.

Efficiency of an impulse turbine is given by:

```math
\mu = \frac{1}{v_1^2}(2u)(v_1 - u)(1+k\cos\beta)
```

Here:

- $v_1$ - velocity of the jet of fluid
- $u$ - velocity of the bucket
- $k$ - loss coefficient (a little less than 1)
- $\beta$ - angle of deflection of fluid inside the bucket

$\mu$ can be considered as a function of $u$. And from that, the turbine works
at maximum efficiency when $2u=v_1$.
