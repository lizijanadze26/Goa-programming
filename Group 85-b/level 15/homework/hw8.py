#While ლუპის გამოყენებით გამოიტანეთ ლუწი რიცხვების ჯამი 1დან 20მდე
i = 1
even_sum = 0
while i <= 20:
    if i % 2 == 0:
        even_sum += i
    i += 1
print(even_sum)