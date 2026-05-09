//4) გაქვთ მოცემული მასივი [21,7,3,3.1,2.2,10.1,7] და დაითვალეთ მათი ჯამი და დაამრგვალეთ ceil.

let arr = [21,7,3,3.1,2.2,10.1,7] ;
let sum = 0;

for (let i= 0; i < arr.length; i++) {
    sum += arr[i];
}

sum = Math.ceil(sum);
console.log(sum);
