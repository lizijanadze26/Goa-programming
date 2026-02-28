##4. იგივე თაფლის გამოყენებით გამოიტანეთ უდიდესი და უმცირესი რიცხვი (max() / min() ფუნქციების გარეშე)
tuple = (1, 2, 3, -4, 50, -6, 89, -100, 700, -3, 0.5, 0)
max_num = tuple[0]
min_num = tuple[0]
for num in tuple:
    if num > max_num:
        max_num = num
    if num < min_num:
        min_num = num
print("Maximum number:", max_num)
print("Minimum number:", min_num)