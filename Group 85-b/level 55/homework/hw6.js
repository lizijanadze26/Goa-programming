//დაწერეთ კოდი, რომელიც აიღებს მასივს [1,3,5,7], და დაითვალოს რამდენი კენტი რიცხვია
let numb = [1,3,5,7];
let count = 0;
for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 !== 0) {
        count++;
    }
}
console.log(count);