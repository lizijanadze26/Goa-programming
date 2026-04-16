
//დაწერეთ კოდი, რომელიც აიღებს მასივს [10,15,20,25], თუ რიცხვი მეტია 18-ზე, გამოიტანოს "yes", სხვა შემთხვევაში "no"

let numbers = [10,15,20,25];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 18) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
