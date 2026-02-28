#While ლუპის გამოყენებით გამოიტანეთ 1დან 5მდე რიცხვების ნამრავლი (ფაქტორული გამოთვლა, 1 x 2 x 3 x 4 x 5 = !5 ეს მათემატიკურად)
i = 1
factorial = 1
while i <= 5:
    factorial *= i
    i += 1
print(factorial)