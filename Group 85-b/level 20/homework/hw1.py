#1) შექმენი ცარიელი სია numbers და მომხმარებელს 3-ჯერ შეეკითხე რიცხვი (input()), თითო შეყვანილი მნიშვნელობა დაამატე append()-ით. ბოლოს დაბეჭდე სია.
numbers = []
for _ in range(3):
    num = int(input("Enter a number: "))
    numbers.append(num)
print(numbers)