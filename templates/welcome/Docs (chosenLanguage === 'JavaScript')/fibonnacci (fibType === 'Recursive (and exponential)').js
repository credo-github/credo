/**
 * This version of the fibonacci function has rendered becuase you chose a particular
 * option from the dropdown, try choosing another.
 */
function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }