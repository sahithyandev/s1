---
title: Power and Power factor
slug: electrical-fundamentals/basics/power-and-power-factor
sidebar:
  order: 13
prev: true
next: true
---

- In a purely resistive AC circuit, the energy delivered by the source will be
  dissipated as heat by the resistor.
- In a purely capacitive or purely inductive circuit, all of the energy will be
  stored during a half cycle, and then returned to the source during the other –
  there will be no net conversion to heat.
- When there is both a resistive component and a reactive component, some energy
  will be stored, and some will be converted to heat during each cycle.

## Power equations

### Purely resistive circuit

Suppose a circuit with load $R$ resistance is supplied a voltage of
$v(t)=V_m\cos{\omega t}$.

Instantaneous power dissipated by the load is given by:

```math
p(t) = \frac{V_m^2}{R}\cos^2{(\omega t)}
```

Always: $p(t)\gt 0$. $ $

```math
\text{Average power} = \frac{1}{2}\times\text{Peak power}=\cfrac{V_m^2}{2R}
```

### Purely inductive circuit

Suppose a circuit with inductor $L$ is supplied a voltage of
$v(t)=V_m\cos{\omega t}$.

Instantaneous power dissipated by the load is given by:

```math
p(t) = \frac{V_m^2}{2\omega L}\sin{(2\omega t)}
```

The inductive reactive power is given by:

```math
Q = \frac{V^2}{\omega L} = I^2 \omega L
```

### Purely capacitive circuit

Suppose a circuit with capacitor $C$ is supplied a voltage of
$v(t)=V_m\cos{\omega t}$.

Instantaneous power dissipated by the load is given by:

```math
p(t) = -\frac{V_m^2 \omega C}{2}\sin{(2\omega t)}
```

The capacitive reactive power is given by:

```math
Q = V^2\omega C = \frac{I^2}{\omega L}
```

### General load

Consider a general load with both resistive and reactive components. Depending
on how inductive or capacitive the reactive component, the phase shift between
voltage and current phasor lies between $90°$ and $−90°$.

Suppose the circuit is supplied a voltage of $v(t) = V_m\cos{(\omega t)}$. And
the current phasor shifts in $\theta$ phase angle.

```math
i(t) = I_m\cos{(\omega t - \theta)}
```

This ends up with:

```math
p(t) = \frac{1}{2}V_mI_m\bigg[\cos\theta+\cos (2\omega t - \theta)\bigg]
```

#### Average over 1 cycle

```math
P_\text{avg} =\frac{1}{T}\int_{t_0}^{t_0 + T} p(t)\,\text{d}t = V_{\text{rms}}I_{\text{rms}}\cos{\theta}
```

## Types of power

### Active power

Aka. true power, resistive power. In all electrical and electronic systems, it
is the true power (the resistive power) that does the work.

```math
P = V_{\text{rms}}I_{\text{rms}}\cos{\theta}
```

:::note

In a question, if "power" is asked to be calculated, that means "active power".

:::

### Reactive Power

Power delivered to/from a pure energy storage element (inductors and capacitors)
is known as reactive power.

- Average power consumed by a pure energy storage element is $0$.
- Current associated with it is **not** $0$. Transmission lines, transformers,
  fuses, etc. must all be designed to withstand this current.
- Loads with energy storage elements will draw large currents and require heavy
  duty wiring even though little average power is consumed.
- Shuttles back and forth between the source and the load.

```math
Q_\text{reactive} = V_\text{rms}I_\text{rms}\sin\theta
```

### Apparent power

Combination of active and reactive power.

```math
S = V_\text{rms}I_\text{rms} = \sqrt{P^2 + Q^2}
```

The apparent power is essentially the effective power that the source “sees”.

## The Beer Analogy

- Beer - Active power  
  Liquid beer is useful power. The power that does the work.
- Foam - Reactive power  
  Wasted or lost power.
- Mug - Apparent power  
  Demand power, that is being delivered by the utility.

## Power factor

If $\theta$ is the phase angle difference between $v$ and $i$, $\cos(\theta)$ is
called the power factor. Higher power factor indicates a more efficient use of
electrical power.

Power factor appears in the equation of $P_\text{avg}$. $ $

```math
\cos{\theta}
=\frac{\text{Active power}}{\text{Apparent power}}
=\frac{\text{Resistance}}{\text{Impedance}}
```

Power factor is:

- leading when $I$ leads $V$
- lagging when $I$ lags $V$

## Power triangle

A right triangle that visually represents the relationship between active,
reactive and apparent power in an AC circuit.

They are represented as below:

- **Active Power (P)**: On the horizontal axis
- **Reactive Power (Q)**: On the vertical axis
- **Apparent Power (S)**: On the hypotenuse of the triangle

```math
S^2 = P^2 + Q^2
```

The angle θ between the active power and the apparent power represents the phase
angle, and the cosine of this angle is the power factor:

```math
\cos{\theta} = \frac{P}{S}
```
