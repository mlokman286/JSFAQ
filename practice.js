function addNumbers(num1, num2) {
  sum=0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum= sum+ num;
  }
  return sum;
}
var result= addNumbers(2,8,5,15,10,25,30,14,22);
console.log(result);