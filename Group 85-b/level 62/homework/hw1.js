//შექმენით პიროვნების ობიექტები და გაადაწოდეთ მას სახელი, გვარი, ასაკი და დაბადების თარიღი. შემდგომ დაამატეთ ორი ფუნქცია: aging: ასაკს + 1 და მეორე toString: გამოიტანოს წინადადება: "{სახელი} {გვარი} დაიბადა {დაბადების თარიღი} და არის {ასაკი} წლის"
let person = {
    name: "lizi",
    lastname: "janadze",
    age: 15,
    birthdate: "2010.05.26",
    
    addage: function() {
        this.age = this.age + 1;
    },

    tostring: function() {
        console.log(this.name + " " + this.lastname + " დაიბადა" + this.birthdate + " და არის" + this.age + " წლის"
        );
    }
};

person.tostring();

person.addage();

person.tostring();