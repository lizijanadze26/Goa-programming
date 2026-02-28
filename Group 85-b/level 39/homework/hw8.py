#9. იგივე თაფლის გამოყენებით, შექმენით ორი ახალი თაფლი: ერთში შეინახავთ ისეთ რიცხვებს, რომლებიც დადებითია, მეორეში კი ისეთ რიცხვებს, რომლებიც უარყოფითია
tapli = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]
positive_numbers = []
negative_numbers = []
for num in tapli:
    if num > 0:
        positive_numbers.append(num)
    elif num < 0:
        negative_numbers.append(num)
print("Positive numbers:", positive_numbers)
print("Negative numbers:", negative_numbers)