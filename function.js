function evenify(num) {
    var result;
    if (num % 2 === 0) {
        result= num;
      } else {
        result = num * 2;
      }
      return result;
}

var result=evenify(13);
var square= result*result;
console.log('result',square);



function evenify_all(nums) {
    var even_arry=[];
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var result=evenify(num);
        even_arry.push(result)
      }
      return even_arry;
}
nums = [21, 54, 61, 85, 12, 36, 41];

var nums_even=evenify_all(5);
console.log(nums_even);
friend_age = [13, 17, 19, 20, 18];
// evenify_all(friend_age);