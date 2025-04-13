---
title: Floating-point Numbers
slug: programming-fundamentals/b-book/floating-point-numbers
sidebar:
  order: 5
prev: true
next: true
---

IEEE 754 standard.

2 types:

- single precision
- double precision

## Single precision

Uses $32$ bits. $ $

- sign bit - $1$ bit
- exponent - $8$ bit
- mantissa - $23$ bit

### Sign bit

$0$ if positive or zero. $1$ if negative.

### Exponent

Exponent field range - $[0,255]$. In this range $[1,254]$ is defined for normal
numbers. $0$ and $255$ are reserved for subnormal, infinite, signed zeros and
NaN.

To support negative exponents, $127$ (half of $254$) is subtracted from this
range. $[-126,127]$. This range is the representable range.

### Mantissa

In scientific notation, the part that doesn't contain the base and the power.

In binary scientific notation, there will always be exactly one $1$ bit before
the dot. So the inital $1$ is not included in the mantissa.

:::note[Example]

Take $31.3125$. $ $

- In binary: $11111.0101_2$
- In binary scientific notation: $1.11110101_2 \times 2^4$
- Add $127$ to exponent: $131$
- Convert exponent to binary $10000011$
- Write the final result: $0\;10000011\;11110101000000000000000$

Take $-0.125$. $ $

- In binary: $-0.001_2$
- In binary scientific notation: $-1.0_2 \times 2^{-3}$
- Add $127$ to exponent: $124$
- Convert exponent to binary $01111100$
- Write the final result: $1\;01111100\;00000000000000000000000$

:::

## Double precision

Uses $64$ bits. $ $

- sign bit - $1$ bit
- exponent - $11$ bit
- mantissa - $52$ bit

### Sign bit

$0$ if positive or zero. $1$ if negative.

### Exponent

Exponent field range - $[0,2047]$. In this range $[1,2046]$ is defined for
normal numbers. $0$ and $2047$ are reserved for subnormal, infinite, signed
zeros and NaN.

To support negative exponents, $1023$ (half of $2046$) is subtracted from this
range. $[-1022,1023]$. This range is the representable range.

### Mantissa

In scientific notation, the part that doesn't contain the base and the power.

In binary scientific notation, there will always be exactly one $1$ bit before
the dot. So we don't include that one. $ $

:::note[Example]

Take $31.3125$. $ $

- In binary: $11111.0101_2$
- In binary scientific notation: $1.11110101_2 \times 2^4$
- Add $1023$ to exponent: $1027$
- Convert exponent to binary: $10000000011$
- Write the final result:
  $0\;10000000011\;11110101000000000000000000000000000000000000000000000$

Take $0.125$. $ $

- In binary: $-0.001_2$
- In binary scientific notation: $-1.0_2 \times 2^-3$
- Add $1023$ to exponent: $1020$
- Convert exponent to binary: $1111111100$
- Write the final result:
  $1\;1111111100\;00000000000000000000000000000000000000000000000000000$

:::
