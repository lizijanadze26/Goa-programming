//დაწერეთ კოდი, რომელიც აიღებს მასივს, მაგალითად: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], თუ რიცხვი ლუწია, გამოიტანოს true, თუ კენტი - false

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i =0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}