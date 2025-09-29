# 📘 Big-O Notation & Time Complexity

Big-O notation is used to describe the **time complexity** and **space complexity** of algorithms.  
It measures how the runtime or memory usage grows as input size `n` increases.

---

## ⚡ Why Big-O?

- Compare efficiency of algorithms.
- Ignore hardware or constant factors.
- Focus on growth rate as input size increases.

---

## 🕒 Common Time Complexities

| Big-O          | Name        | Example Algorithm / Operation                |
| -------------- | ----------- | -------------------------------------------- |
| **O(1)**       | Constant    | Accessing array element by index             |
| **O(log n)**   | Logarithmic | Binary Search                                |
| **O(n)**       | Linear      | Loop through array                           |
| **O(n log n)** | Log-linear  | Merge Sort, Quick Sort (average)             |
| **O(n²)**      | Quadratic   | Nested loops (Bubble Sort, Selection Sort)   |
| **O(2^n)**     | Exponential | Recursive Fibonacci (naïve)                  |
| **O(n!)**      | Factorial   | Permutations, Traveling Salesman brute-force |

---

## 🧮 How to Calculate Time Complexity

1. **Count basic operations** (comparisons, assignments, arithmetic).
2. **Focus on input size `n`**.
3. **Drop constants and lower-order terms**.

👉 Example:

```js
function printItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Runs n times
    console.log(arr[i]); // O(1) each
  }
}
```
