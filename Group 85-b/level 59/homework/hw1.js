//გაქვს რიცხვების მასივი $[1, 15, 8, 22, 5, 30]$. გამოიტანე მხოლოდ ის რიცხვები, რომლებიც 10-ზე მეტია.

let numbers = [1, 15, 8, 22, 5, 30];
let result = [];
for (let i= 0; i < numbers.length; i++){
    if (numbers[i] > 10){
        result.push(numbers[i]);
    }
        
    }
    console.log(result);
    