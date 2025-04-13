---
title: Integers
slug: programming-fundamentals/b-book/integers
sidebar:
  order: 4
prev: true
next: true
---

## Unsigned integers

Unsigned integers can be represented in memory in binary. Only positive integers
are supported, by convention.

In $n$-bit register, $2^n$ number of integers can be represented, usually in the
range $[0,2^{n}-1]$

## Signed integers

Both positive and negative integers are supported. There are 2 ways to represent
them.

### One's complement

The ones' complement of a binary number is the value obtained by flipping all
the bits in the binary representation of the number.

- If one's complement of $a$ is $b$, then one's complement of $b$ is $a$.
- Binary representation of $a+b$ will include all $1$s.

#### One's complement system

In which negative numbers are represented by the inverse of the binary
representations of their corresponding positive numbers. First bit denotes the
sign of the number.

- Positive numbers are the denoted as basic binary numbers with $0$ as the MSB.
- Negative values are denoted by the one's complement of their absolute value.

For example, to find the one's complement system representation of $-7$, one's
complement of $7$ must be found. $7=0111_2$. One's complement of $-7$ is $1000$.

### Two's complement

In which negative numbers are represented using the MSB (sign bit).

If MSB is:

- $1$: negative
- $0$: positive

Positive numbers are represented as basic binary numbers with an additional $0$
as the sign bit. $ $

For example:

Following equation can be used to convert a number in two's complement form to
decimal.

```math
b=-2^{n-1}b_{n-1}+\sum_{k=0}^{n-2}{2^{k} b_k}
```

#### Represent n in two's complement

If $n$ is positive or zero: $n$ is converted into binary and a leading zero is
added.

If $n$ is negative: $ $

1. Starting with the absolute binary representation of $n$
2. If MSB is not a 0, add a leading $0$ bit
3. Find the one's complement: flip all bits (which effectively subtracts the
   value from -1)
4. Add 1, ignoring any overflows
