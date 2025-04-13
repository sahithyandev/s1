---
title: Algorithms
slug: programming-fundamentals/b-book/algorithms
sidebar:
  order: 8
prev: true
next: true
---

An algorithm is a finite set of instructions, used to solve a problem.

:::note

In s1, only searching and sorting algorithms are discussed.

:::

## Searching algorithms

### Iterative sequential search

```py
def iterative_sequential_search(a_list, item):
    for i in range(len(a_list)):
        if a_list[i] == item:
            return i

    return -1
```

### Recursive sequential search

```py
def recursive_sequential_search(a_list, item, offset=0):
    if len(a_list) == offset - 1:
        return False

    if a_list[offset] == item:
        return True

    return recursive_sequential_search(a_list, item, offset+1)
```

### Binary search

Works in a sorted array.

```py
def binary_search(a_list, item):
    first = 0
    last = len(a_list) - 1
    found = False

    while first <= last and not found:
        mid = (first + last) // 2
        if a_list[mid] == item:
            found = True
        else:
            if item < a_list[mid]:
                last = mid - 1 # search in first half
            else:
                first = mid + 1 # search in second half

    if found:
        return mid
    else:
        return None
```

### Time complexities

| Algorithms        | Best | Average  | Worst    |
| ----------------- | ---- | -------- | -------- |
| Sequential search | O(1) | O(n)     | O(n)     |
| Binary search     | O(1) | O(log n) | O(log n) |

## Sorting algorithms

A sorting algorithm reorganizes a collection of items into some order as defined
by values intrinsic to the items.

### Properties

1. Number of swaps required
2. Number of comparisons - represented using "big-o" notation
3. Stability - it's stable when relative order of the equal items are
   maintained.
4. Recursive or iterative
5. Amount of extra space

### Bubble sort

Makes multiple passes through a collection and compare adjacent items to reorder
those.

```py
def bubble_sort(arr: list[int | float]):
    sorted_index_count = 0
    while sorted_index_count < len(arr):
        for i in range(len(arr)-sorted_index_count-1):
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
        sorted_index_count += 1
```

### Selection sort

Iterates through the list to find the smallest (or highest) value. Swaps its
position with the first (or last) element. Then redo this starting for the
remaining indices. An improved version of bubble sort.

```py
def selection_sort(arr):
    for current_starting_index in range(len(arr)):
        smallest_index = current_starting_index
        for i in range(current_starting_index + 1, len(arr)):
            if arr[i] < arr[smallest_index]:
                smallest_index = i
        arr[smallest_index], arr[current_starting_index] = arr[current_starting_index], arr[smallest_index]
```

### Insertion sort

Work through a list starting at one end. Each item from the unsorted portion is
inserted into its correct position among the items already processed.

```py
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
```

### Merge sort

Recursive algorithm that continually splits a list in half and sorts them.

- If the list is empty or has one item, it is sorted
- If the list has more elements, the list is split in the middle and merge sort
  is recursively used on those parts
- Once sorted, the halves are combined to create a sorted list

```py
def merge_sort(a_list):
    if len(a_list) < 2:  # then it's sorted
        return a_list

    # break at the middle and sort
    mid_index = len(a_list)//2
    left_half = merge_sort(a_list[:mid_index])
    right_half = merge_sort(a_list[mid_index:])

    # merge the sides
    cursor_left = 0
    cursor_right = 0
    sorted_list = []

    # merging step 1: loop through each side and add the smallest
    while cursor_left < len(left_half) and cursor_right < len(right_half):
        if left_half[cursor_left] > right_half[cursor_right]:
            sorted_list.append(right_half[cursor_right])
            cursor_right += 1
        else:
            sorted_list.append(left_half[cursor_left])
            cursor_left += 1

    # merging step 2: add left over items
    while cursor_left < len(left_half):
        sorted_list.append(left_half[cursor_left])
        cursor_left += 1
    while cursor_right < len(right_half):
        sorted_list.append(right_half[cursor_right])
        cursor_right += 1

    return sorted_list
```

### Quick sort

Recursive algorithm that use the divide and conquer strategy to continually
split a list around a selected value called the split point.

- Selects a pivot (a value in the list)
- List is partitioned into 2 parts
  - With the elements lesser than the pivot
  - With the elements greater than the pivot
- The partitions are recursively sorted

```py
def quick_sort(a_list, first, last):
    # Only proceed if there are at least 2 elements to sort
    if first < last:
        # Get the partition point and sort the pivot into its final position
        split_point = partition(a_list, first, last)
        # Recursively sort the left portion (elements smaller than pivot)
        quick_sort(a_list, first, split_point - 1)
        # Recursively sort the right portion (elements larger than pivot)
        quick_sort(a_list, split_point + 1, last)

def partition(a_list, first, last):
    # Choose the first element as the pivot
    pivot_value = a_list[first]
    # Set initial positions for left and right markers
    left_mark = first + 1
    right_mark = last
    done = False

    while not done:
        # Move left marker right until we find an element greater than pivot
        while left_mark <= right_mark and a_list[left_mark] <= pivot_value:
            left_mark = left_mark + 1

        # Move right marker left until we find an element less than pivot
        while a_list[right_mark] >= pivot_value and right_mark >= left_mark:
            right_mark = right_mark - 1

        # If markers have crossed, partitioning is complete
        if right_mark < left_mark:
            done = True
        else:
            # Swap elements at left and right markers since they are in wrong positions
            temp = a_list[left_mark]
            a_list[left_mark] = a_list[right_mark]
            a_list[right_mark] = temp

    # Place pivot in its final position by swapping with right_mark
    temp = a_list[first]
    a_list[first] = a_list[right_mark]
    a_list[right_mark] = temp

    # Return the position of the pivot
    return right_mark
```

### Shell sort

A specific "gap" is chosen. Start from any index (which is smaller than gap),
and use insertion sort to sort the elements that are gap number of indices away.
Redo this after reducing the gap. Repeat until the gap eventually becomes 1.

The performance depends on the sequence of gaps chosen.

```py
# a modified version of insertion sort
def gap_insertion_sort(a_list, start_index, gap):
    while start_index < len(a_list):
        pointer = start_index
        while pointer >= gap and a_list[pointer - gap] > a_list[pointer]:
            # swap the position
            a_list[pointer], a_list[pointer - gap] = \
                a_list[pointer-gap], a_list[pointer]

            pointer -= gap
        start_index += gap


def shell_sort(a_list):
    for gap in range(4, 0, -1):
        for starting_index in range(0, gap):
            gap_insertion_sort(a_list, starting_index, gap)
```

### Heap sort

Uses a [binary heap](/programming-fundamentals/b-book/data-types/#binary-heap).

Similar to selection sort where a search is done to find the item with the
minimum value and this item is placed at the beginning of the list. The same
process is repeated for remaining items.

Steps:

1. A max-heap is built from the input data
2. Largest item is stored at the root of the heap. Replace it with the last item
   of the heap.
3. Size of the heap is reduced by 1
4. Heapify the root of the tree
5. Repeat steps 2-4 until the size of the heap is greater than 1.

The heapify procedure can be applied to a node only if its children nodes are
heapified. So the heapification must be performed in the bottom-up order.

```py
# To heapify subtree rooted at index i. Heap size is n.
def heapify(a_list, n, i):
  largest = i # Initialize largest as root
  l = 2 * i + 1 # left = 2*i + 1
  r = 2 * i + 2 # right = 2*i + 2

  # See if left child of root exists and is > root
  if l < n and a_list[i] < a_list[l]:
    largest = l

  # See if right child of root exists and is > root
  if r < n and a_list[largest] < a_list[r]:
    largest = r

  # Change root, if needed
  if largest != i:
    a_list[i],a_list[largest] = a_list[largest],a_list[i] # swap

    # Heapify the root.
    heapify(a_list, n, largest)

def heap_sort(a_list):
  n = len(a_list)

  # Build a maxheap. Since last parent will be
  # at ((n//2)-1) we can start at that location.
  for i in range(n // 2 - 1, -1, -1):
    heapify(a_list, n, i)

  # One by one extract elements
  for i in range(n-1, 0, -1):
    a_list[i], a_list[0] = a_list[0], a_list[i] # swap
    heapify(a_list, i, 0)
```

### Time complexities

| Algorithms     | Best                | Average               | Worst                 |
| -------------- | ------------------- | --------------------- | --------------------- |
| Bubble sort    | $\text O(n)$        | $\text O(n^2)$        | $\text O(n^2)$        |
| Selection sort | $\text O(n^2)$      | $\text O(n^2)$        | $\text O(n^2)$        |
| Insertion sort | $\text O(n)$        | $\text O(n^2)$        | $\text O(n^2)$        |
| Shell sort     | $\text O(n \log n)$ | $\text O(n \log^2 n)$ | $\text O(n \log^2 n)$ |
| Merge sort     | $\text O(n \log n)$ | $\text O(n \log n)$   | $\text O(n \log n)$   |
| Quick sort     | $\text O(n \log n)$ | $\text O(n \log n)$   | $\text O(n^2)$        |
| Heap sort      | $\text O(n \log n)$ | $\text O(n \log n)$   | $\text O(n \log n)$   |
