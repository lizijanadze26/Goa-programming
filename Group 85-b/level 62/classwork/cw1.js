//შექმენით მანქანის ობიექტი, იყოს მოცემული სიჩქარე, რაც უნდა უდრიდეს 0-ს. ასევე მიუთეთ მანქანის ბრენდი, მოდელი, გამოშვების წელი და ფერი
let car = {
    speed: 0,
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    color: "blue"
};
console.log(car);

//ობიექტში ჩაამატეთ რამე ნებისმიერი ორი გასაღები, რაც მანქანის აგებულობას შეეხება (property.newKey <- ეს გამოიყენეთ)
car.engineType = "V6";
car.transmission = "Automatic";

console.log(car);

//ჩაამატეთ სამი ფუნქცია: აჩქრება: სიჩქარეს + 10; შენელება: სიჩქარეს - 10. თუ სიჩქარე 10ზე ნაკლებია, მაშინ სიჩქარე 0ზე უნდა დავარდეს, არ უნდა იყოს უარყოფითი. მესამე კი იქნება toString ფუნქცია, რომელიც გამოიტანს წინადადებას: "მანქანა {ბრენდი}, {მოდელი}, გამოიშვა {წელი} წელს და არის {ფერი} ფერის."

car.accelerate = function() {
    this.speed += 10;
} //achqareba
car.decelerate = function() {
    this.speed -= 10;
}
if (this.speed < 10) {
    this.speed = 0;
} //sheneleba

car.toString = function() {
    return "მანქანა " + this.brand + ", " + this.model + ", გამოიშვა " + this.year + " წელს და არის " + this.color + " ფერის.";
}

console.log(car.speed)
console.log(car.toString());