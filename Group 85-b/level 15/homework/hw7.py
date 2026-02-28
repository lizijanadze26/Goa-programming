#While ლუპის გამოყენებით გამოიტანეთ ყველა კენტი რიცხვის ჯამი 1დან 20მდე
i = 1
odd_sum = 0
while i <= 20:
    if i % 2 == 1:
        odd_sum += i
    i += 1
print(odd_sum)