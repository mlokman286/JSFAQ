const name = 'Kuddus'
function add(num1, num2) {
    result = num1 + num2;
    console.log('inside name', name);
    function double(num) {
        return num * 2;
    }
    const total = double(result);
    return total;
}

console.log('outside name', name);
const sum = add(25, 35);
console.log(sum);
console.log('out site result',result);
