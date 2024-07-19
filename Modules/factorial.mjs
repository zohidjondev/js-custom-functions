export function factorial(number) {
  
  // Initing the variable which will store the final result number
  let factorialNumber = 1;

  // Checking whether the input is not negative or equal to Zero: 0 
  switch (number) {
    case number < 0:
      return `ERROR: Given number is negative`;
    case 0:
      return 1;
    default:
      
      // Looping from the number which is given as a parameter till the 1 
      for (let i = number; i > 0; i--) {

        // Storing it 
        factorialNumber = i * factorialNumber;
      }
      return factorialNumber;
  }
}
