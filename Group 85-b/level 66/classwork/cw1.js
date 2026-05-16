//შექმენით LicensePlate ობიექტი, რომელიც შეინახავს მანქანის ნომერს, ერთი არგუმენტი -> plateNum
//შექმენით CreateCar ობიექტი, რომელიც არგუმენტად მოითხოვს manufacturer, model, year, plateNum, აქაც ანალოგიურად დააბრუნებს შედეგს (plateNum-ზე გამოიყენეთ LicensePlate() ფუნქცია და გადააწოდეთ ეს plateNum)
//შექმენით CarPark ობიექტი, ტევადობა -> 10 მანქანა, ცარიელი მასივი parkedCars, ასევე ექნება ორი ფუნქცია: Park და UnPark
//Park: დაამატოთ მანქანა ავტოსადგომში (parkedCars მასივში), თუ ავტოსადგომი სავსეა, უნდა დააბრუნოს false, თუ მანქანა უკვე დგას ავტოსადგურში, მაშინ დააბრუნოს "ისედაც დგას"
//UnPark: ამოშლის კონკრეტულ მანქანას ავტოსადგომიდან (parkedCars მასივიდან). თუ მანქანა ვერ მოიძებნა, ანუ არ დგას ავტოსადგურში დააბრუნოს false

class LicensePlate {
  constructor(plateNum) {
    this.plateNum = plateNum;
  }

  showPlate() {
    console.log(this.plateNum);
  }
}

const myCarPlate = new LicensePlate("mm-777-mj");
myCarPlate.showPlate();

class CreateCar {
    constructor(manufacturer, model, year, plateNum) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;

        this.plateNum = new LicensePlate(plateNum);
    } 
    showCar() {
        return this.manufacturer + " " + this.model + " " + this.year;
    }
}
    let CarPark = {
    capacity: 10,
    parkedCars: [],
    Park: function(car) {
        if (this.parkedCars.length >= this.capacity) {
            return false;
        }
        if (this.parkedCars(car)) {
            return "ისედაც დგას";
        }
        this.parkedCars.push(car);
        return true;
    },
    UnPark: function(car) {
        const index = this.parkedCars(car);
        if (index === -1) {
            return false;
        }
        this.parkedCars(index, 1);
        return true;
    }
}