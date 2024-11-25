---
title: CPU Instructions
slug: programming-fundamentals/c-book/cpu-instructions
sidebar:
  order: 4
prev: true
next: true
---

## Instruction set

The set of operations a CPU can perform. Varies with each CPU. Most operations
fall into 4 categories.

### Data movement operations

Moves data from one place to another.

Examples:

- LOAD: Read data into CPU from memory or IO
- STORE: Write data from CPU to memory or IO

### Mathematical operations

Examples:

- ADD: Adds 2 values in CPU

### Logical operations

Examples:

- COMP: Compare 2 values in CPU

### CPU control instructions

Examples:

- JUMP: Jump to a program address
- JUMPZ: Jump to a program address only if the last operation had a zero value
- JUMPNZ: Jump to a program address only if the last operation had a non-zero
  value
- NOP: Do nothing but spend some CPU time  
  Used to keep the CPU idle while waiting for some data.

## Composition of instructions

### OpCode

A coded value which tells what the instruction is supposed to do. OpCodes are
the examples mentioned above (such as ADD and COMP).

### Operands

Number and type of operations depend on the OpCode. Sometimes optional.

Can either be a:

- Value
- Memory address

:::note

Single-instruction-single-data architecture (SISD) means that CPU takes one
instruction and data associated with the instruction, executes it and goes to
the next instruction.

:::

## Execution of a program (Instruction cycle)

A program is executed as a series of steps.

### Instruction Fetch

Next instruction is loaded into the CPU from memory. A memory read cycle is
executed. Similar for any instruction.

### Decode

CPU decides the instruction binary pattern and decides on what action to take.
Similar for any instruction.

### Operand Fetch

If the operation requires additional operands in memory, ready cycles are
executed to fetch them. Depends on the operation. Somtimes optional.

### Execution cycle

Instruction is executed by the CU. CPU generates the signal for its internal
circuits to carry out the operation. Depends on the operation.
