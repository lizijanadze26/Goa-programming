##2. იგივე თაფლის გამოყენებით, გამოიტანეთ კენტი და ლუწი რიცხვები
tuple = (1, 2, 3, -4, 50, -6, 89, -100, 700, -3, 0.5, 0)
even_numbers = []
odd_numbers = []
for num in tuple:
    if num % 2 == 0:
        even_numbers.append(num)
    else:
        odd_numbers.append(num)
print("Even numbers:", even_numbers)
print("Odd numbers:", odd_numbers)