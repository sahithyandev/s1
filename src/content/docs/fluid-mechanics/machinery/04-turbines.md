---
title: Turbines
slug: fluid-mechanics/machinery/turbines
sidebar:
  order: 4
next: false
prev: true
---

Used to generate electricity. Direction of energy transfer is fluid to machine.

Rotating element is called as the runner.

## Types of turbines

### Reaction turbines

Aka. pressure turbines. Similar to pumps. Operating in reverse direction
(direction of fluid flow and energy transfer). Guide vanes are placed to guide
fluid flow onto the runner.

3 types of reaction turbines based on the direction of fluid flow.

#### Radial flow

Aka. Francis turbine. Commonly used to get a head output of 30 to 500m.

#### Axial flow

Aka. Kaplan turbine. Commonly used to get a head output of 3 to 70m.

#### Mixed flow

A combination of radial flow and axial flow.

### Impulse turbines

Aka. velocity turbines. Used for high heads. Highly efficient. Includes a runner
(a wheel with buckets attached) mounted on a shaft. High velocity jet is focused
on the buckets.

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
