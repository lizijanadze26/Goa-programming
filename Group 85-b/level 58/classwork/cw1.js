//1) დაწერეთ ფუნქცია რომლის საშუალებით გაიგებთ რიცხვი კენტია თუ ლუწი.
function check(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(check(10))