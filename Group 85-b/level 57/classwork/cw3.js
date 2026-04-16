//გამოიყენე do... while loop, მასივი: [2, 4, 6, 8]. შეკრიბე ყველა რიცხვი და გამოიტანე მათი ჯამი

let arr = [2, 4, 6, 8];
let sum = 0;
let i = 0;
do {
    sum += arr[i];
    i++;
} while (i < arr.length);
console.log(sum);