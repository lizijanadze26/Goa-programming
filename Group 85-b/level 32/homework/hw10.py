#15) while ციკლით სეტიდან ამოშალეთ ლუწი რიცხვები(discard - ის გამოყენებით).
my_set = set(range(1, 21))
i = 1
while i <= 20:
    if i % 2 == 0:
        my_set.discard(i)
    i += 1