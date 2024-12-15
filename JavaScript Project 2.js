// ==================== String Manipulation Functions ====================

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // ==================== Array Functions ====================
  
  // Find Maximum
  function findMax(arr) {
    return Math.max(...arr);
  }
  
  // Find Minimum
  function findMin(arr) {
    return Math.min(...arr);
  }
  
  // Sum of Array
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  
  // Filter Array
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // ==================== Mathematical Functions ====================
  
  // Factorial
  function factorial(n) {
    if (n < 0) return "Factorial is not defined for negative numbers";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  }
  
  // Prime Number Check
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // Fibonacci Sequence
  function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
  
  // ==================== Main Function to Test All ====================
  
  function runAllTests() {
    // Test String Manipulation Functions
    console.log("Reverse String (Hello):", reverseString("Hello"));
    console.log("Count Characters (Hello):", countCharacters("Hello"));
    console.log("Capitalize Words (hello world):", capitalizeWords("hello world"));
  
    // Test Array Functions
    const numbers = [10, 20, 5, 8, 30];
    console.log("Max in Array:", findMax(numbers));
    console.log("Min in Array:", findMin(numbers));
    console.log("Sum of Array:", sumArray(numbers));
    console.log("Filtered Array (greater than 10):", filterArray(numbers, num => num > 10));
  
    // Test Mathematical Functions
    console.log("Factorial of 5:", factorial(5));
    console.log("Is 7 Prime?", isPrime(7));
    console.log("Fibonacci Sequence (10 terms):", fibonacci(10));
  }
  
  // Run all tests
  runAllTests();
  