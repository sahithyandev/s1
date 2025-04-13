---
title: Data Types
slug: programming-fundamentals/b-book/data-types
sidebar:
  order: 7
prev: true
next: true
---

Data types can be grouped into 3 categories.

## Primitive

Data types that are directly supported by a programming languages.

Examples are:

- Boolean
- Characters
- Integers
- Floating-point numbers
- Memory pointers

## Composite

Data types that are built as

- structured collections of primitive types
- using other composite types already defined

Examples are:

- Array
- Record or Tuple
- Union

### Tuple

Represents a finite ordered list of elements. Can contain different data types.
Immutable. Tuple with length n is called as "n-tuple".

Some tuples have special names:

- length 0 : empty-tuple or null-tuple
- length 1 : singleton
- length 2 : couple
- length 3 : triple

## Abstract

Data types that are well defined in terms of properties and operations but not
implementation.

Examples:

- List
- Set
- Stack
- Queue
- Tree
- Hash Table
- Graph

### List

Represents a countable number of values where the same value can occur more than
once. Ordered. Can include different data types. Mutable. Aka. iterable
collection.

Defined methods:

- `isEmpty()`
- `prepend(item)`
- `append(item)`
- `head()`
- `get(i)`
- `set(i)`
- `tail()`

:::note

Lists in python can be considered as dynamically sized arrays. Methods other
than above-mentioned ones are implemented in python.

:::

### Set

Represents a collection of distinct objects. Unordered. Iterable. Mutable (but
elements must be immutable). No duplicate elements.

### Dictionary

Collection of key-value pairs. Unordered.

### Stack

A "Last-In-First-Out" model.

```py
class Stack:
    def __init__(self):
        self.items = [] # to store stack elements

    def is_empty(self):
        # Return True if stack is empty
        return len(self.items) == 0

    def push(self, item):
        # Add item to top of stack
        self.items.append(item)

    def pop(self):
        # Remove and return top item from stack
        if not self.is_empty():
            return self.items.pop()
        return None

    def peek(self):
        # Return top item without removing it
        if not self.is_empty():
            return self.items[-1]
        return None

    def size(self):
        # Return number of items in stack
        return len(self.items)

# Example usage:
# stack = Stack()
# stack.push(1)
# stack.push(2)
# print(stack.pop())  # Returns 2
# print(stack.peek()) # Returns 1
```

### Queue

A "First-In-First-Out" model. Implemented in Python as `deque`.

### Tree

Holds a set of nodes. Each node holds a value. Each node can have child nodes.

```py
class Tree:
    def __init__(self, value=None):
        # Initialize node with value and empty list of children
        self.value = value
        self.children = []

    def add_child(self, child_node):
        # Add a child node to this node
        self.children.append(child_node)

    def remove_child(self, child_node):
        # Remove a child node from this node
        self.children.remove(child_node)

    def get_value(self):
        # Get the value stored in this node
        return self.value

    def get_children(self):
        # Get list of child nodes
        return self.children

# Example usage:
# tree = Tree(1)
# child1 = Tree(2)
# child2 = Tree(3)
# tree.add_child(child1)
# tree.add_child(child2)
```

### Binary Tree

Tree with the restriction of at most 2 child nodes per node. Binary tree can be
implemented similarily as a tree class. Instead of a `children` array, `left`
and `right` nodes are preferred.

#### Complete Binary Tree

A binary tree in which every level, except possibly the last, is completely
filled, and all nodes are as far left as possible.

### Binary Heap

A binary heap is complete binary tree where items are stored in a way such that
the value in a parent node is greater/smaller than values in its 2 children
nodes. Can be represented by a binary tree or an array. 2 types:

- Max heap: when the parent node value is greater than its children nodes
- Min heap: when the parent node value is smaller than its children nodes

Can be represented by either an array or a binary tree.

#### Array representation

If a parent node is stored at index $i$, the left child is stored at index
$2i + 1$ and the right child is stored at index $2i + 2$ (assuming the indexing
starts at 0).

Space efficient representation.
