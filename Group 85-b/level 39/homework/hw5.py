#6. იგივე თაფლის გამოყენებით, გადაამრავლეთ ყველა რიცხვი ერთმანეთზე
my_tuple = (2, 2, 2, 2, 2, 2, 700, 5, 3, 1, 2, 5, 6)
result = 1
for num in my_tuple:
    result *= num
print("The product of all numbers is:", result)