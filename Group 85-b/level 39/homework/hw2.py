##3. (hard) იგივე თაფლის გამოყენებით, გაიგეთ მეორდება თუ არა ელემენტები ორჯერ ან მეტჯერ (hint: set() function), უნდა დააბრუნოს true ან false
my_tuple = (2, 2, 2, 2, 2, 2, 700, 5, 3, 1, 2, 5, 6)
def duplicates(tup):
    return len(set(tup)) != len(tup)
print(duplicates(my_tuple))