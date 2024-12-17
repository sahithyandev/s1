---
title: Object-Oriented Programming
sidebar:
  label: OOP
  order: 6
slug: programming-fundamentals/a-book/oop
prev: true
next: true
---

Object-Oriented Programming (OOP) is a programming paradigm based on the concept
of "objects", which can contain data and code. Here is a basic example:

```python
class Student:
		def __init__(self, name, age):
				self.name = name
				self.age = age

		def greet(self):
				return f"Hello, my name is {self.name} and I am {self.age} years old."

student1 = Student("Alice", 21)
print(student1.greet())
```

### `self` Keyword

In Python, the `self` keyword is used in object-oriented programming to
represent the instance of the class. It allows you to access the attributes and
methods of the class in Python. When you create an instance of a class, `self`
refers to that specific instance.

Here's a simple example to illustrate:

```python
class Dog:
	def __init__(self, name):
		self.name = name

	def bark(self):
		return f"{self.name} says woof!"

dog1 = Dog("Buddy")
print(dog1.bark())  # Output: Buddy says woof!
```

In this example, `self.name` refers to the `name` attribute of the `dog1`
instance.
