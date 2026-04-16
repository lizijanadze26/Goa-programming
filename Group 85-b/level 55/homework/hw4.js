//დაწერეთ კოდი, რომელიც აიღებს მასივს [2,4,6,8], თუ რიცხვი იყოფა 4-ზე, გამოიტანოს true, სხვა შემთხვევაში false

let arrs =  [2,4,6,8];
for (let i = 0; i< arrs.length; i++) {
    if (arrs[i] % 4 === 0) {
        console.log("True");
    }else {
        console.log("False")
    }
}