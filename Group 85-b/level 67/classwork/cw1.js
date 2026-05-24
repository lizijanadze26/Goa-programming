//დაწერეთ Linear Search-ის კოდი, მასივი იყოს ასეთი: [12, 5, 78, 45, 11, 8, 34]

let numbers = [12, 5, 78, 45, 11, 8, 34];
let target = 11;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log("ნაპოვნია: " + i);
        break;
    }
}