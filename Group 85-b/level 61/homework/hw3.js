//3) გაქვთ მოცემული მასივი [33,23,3,2.3,9.2,14.1,7] და დაითვალეთ მათი ჯამი და დაამრგვალეთ floor.

let arr = [33,23,3,2.3,9.2,14.1,7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

}
sum = Math.floor(sum);
console.log(sum);
