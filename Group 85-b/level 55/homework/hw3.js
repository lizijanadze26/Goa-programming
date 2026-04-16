//დაწერეთ კოდი, რომელიც აიღებს მასივს [3,6,9,12], ყველა რიცხვის ჯამი გამოთვალოს
let number = [3,6,9,12];
let sum = 0;
for (let i = 0; i <number.length; i++) {
    sum += number[i];
}
console.log(sum);