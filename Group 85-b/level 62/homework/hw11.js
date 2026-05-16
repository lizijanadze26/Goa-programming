
//შექმენით ობიექტი Library, გადააწოდეთ books (ცარიელი მასივი), borrowed (ცარიელი ობიექტი), nId = 1 (საინდექსო ცვლადი)
//3.1. ობიექტში დაამატეთ შემდეგი ფუნქცია: addBook(title, author, year), რომელიც ამ სამ არგუმენტს მიიღებს. ფუნქციაში შექმენით ახალი book ობიექტი და გაადაწოდეთ: title, author, year, id (რომელიც უდრის nId++). შემდეგ ეს ობიექტი ჩაამატეთ books სიაში (push), საბოლოოდ კი გამოიტანეთ: "წიგნი დაემატა"
//3.2. შექმენით ფუნქცია  findBook(id), რომელიც მიიღებს ერთ არგუმენტს. loop-ის გამოყენებით, თუ წიგნი კონკრეტულ ინდექსზე უდრის ამ პარამეტრ id-ს (books[i] = id), მაშინ გამოიტანეთ მთლიანი წიგნის ობიექტი.

//3.3. საბოლოოდ, შექმენით borrowBook(id) ფუნქცია, რომელიც ერთ პარამეტრს მიიღებს. loop-ის დახმარებით, იპოვეთ კონკრეტული წიგნი (იგივე ლოგიკა რაც მანამდე), თუ borrowed მასივში წიგნი ამ id-ით არსებობს, მაშინ გამოიტანოს "წიგნი უკვე აღებულია" (borrowed[i]). სხვა შემთხვევაში borrowed[i] = true და გამოიტანოს "წიგნი აღებულია"

let Library = {
    books: [],
    borrowed: {},
    nId: 1,
   }
    addbook=function(title, author, year) {
        title = title;
        author = author;
        year = year;
        id =  this.nId++;

}
    findBook=function(id) {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                return books[i];
            }
        }
    }
    borrowBook=function(id) {
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                if (borrowed[id]) {
                    return "წიგნი უკვე აღებულია";
                } else {
                    borrowed[id] = true;
                    return "წიგნი აიღე";
                }
            }
        }
        return "სახელი: " + this.book + ", ხელმისაწვდომი: " + (this.stock - this.reserved) + ", სტატუსი: " + this.status;
    };