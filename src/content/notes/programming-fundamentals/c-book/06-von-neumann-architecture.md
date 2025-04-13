---
title: Von Neumann Architecture
slug: programming-fundamentals/c-book/von-neumann-architecture
sidebar:
  order: 6
prev: true
next: true
---

An architecture on how a computer can be built. Simple and implementable
proposal but not the best mechanism for operations such as disk access or time
critical operations.

A computer structure resulting from Von Neumann architecture is called as Von
Neumann machine.

### CPU centric system

- Each operation is carried only by the CPU
- Every movement of data is made via the CPU
- Memory is the only "direct access" storage device for the CPU
- Only one operation is carried out by the CPU at any time

### Parts of a Von Neumann Machine

- A memory - contains both data and instructions
- A calculating unit - capable of performing both arithmetic and logical
  operations on the data
- A control unit - which could interpret an instruction retrieved from the
  memory and select alternative courses of action based on the results of
  previous operations
