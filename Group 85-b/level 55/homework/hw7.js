//დაწერეთ კოდი, რომელიც აიღებს მასივს [2,5,8,11], თუ რიცხვი ნაკლებია 6-ზე, გამოიტანოს "low", სხვა შემთხვევაში "high"
let arrs = [2,5,8,11];
for (let i = 0; i < arrs.length; i++) {
    if (arrs[i] < 6) {
        console.log("low");
    } else {
        console.log("high");
    }
}