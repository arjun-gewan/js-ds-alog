// TIME Complexity Growth (Cheat Sheet)

// O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)

// Key Takeaways

// Always analyze worst-case unless otherwise stated.

// Constants don’t matter (O(2n) → O(n)).

// Focus on how input size n affects runtime/memory.

function printItems(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Runs n times
    console.log(arr[i]); // O(1) each
  }
}

// O(1) - Constant
function getFirstItem(arr) {
  return arr[0];
}

// O(n) - Linear
function findItem(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// O(n^2) - Quadratic
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}

// O(log n) - Logarithmic (Binary Search)
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
