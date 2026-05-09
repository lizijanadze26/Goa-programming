//2) გაქვთ მოცემული მასივი [1,2,3,5.5,6.2,10.1,7] და დაითვალეთ მათი ჯამი და დაამრგვალეთ round.

let numbers = [1,2,3,5.5,6.2,10.1,7];
let sum = 0;
for (let i =0; i < numbers.length; i++) {
    sum += numbers[i];
}
sum = Math.round(sum);
console.log(sum)