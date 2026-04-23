//აიღეთ რაიმე მასივი და გამოიტანეთ უდიდესი რიცხვი (რამე ფუნქცია არ გამოიყენოთ)

let numbers = [20,30, 70, 80];
let max = numbers[0]
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max)
