#8. (hard) იგივე თაფლის გამოყენებით, ამოშალეთ ის რიცხვები რომლებიც მეორდება (hint: set() function)
my_tuple = (2, 2, 2, 2, 2, 2, 700, 5, 3, 1, 2, 5, 6)
def remove_duplicates(tup):
    return tuple(set(tup))
result = remove_duplicates(my_tuple)
print(result)