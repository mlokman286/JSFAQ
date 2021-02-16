function addNumbers(num1, num2, num3) {
  sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    const num = arguments[i];
    sum = sum + num;
  }
  logInfo('Good Morning...')
  var double=sum*2;

  return double;
}
function logInfo(messege) {
    console.log(messege)
}
var result = addNumbers(3, 5, 8, 15, 20, 25);
console.log(result);
