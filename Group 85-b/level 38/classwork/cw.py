#შექმენით რამე ჩვეულებრივი dictionary, იყოს მაგ. მეგობრის ან ოჯახის წევრის სახელი, გვარი, ასაკი და ერთი ნებისმიერი რამ
text={
    "name":"lizi",
    "age":15,
    "hobby":"tennis"
}

print(text)
#for ლუპის გამოყენებით იგივე dictionary-დან დაპრინტეთ ყველა key
for key in text:
    print(key)
#for ლუპის გამოყენებით იგივე dictionary-დან დაპრინტეთ ყველა value
for value in text.values():
    print(value)
#საკვანძო სიტყვის გამოყენებით წაშალეთ ერთი key თავისი value-თი
del text["age"] 
print(text)
#ახსნილი ფუნქციის გამოყენებით მთლიანი dictionary-დან ამოშალეთ ერთი ნებისმიერი key
text.pop("hobby")
print(text)
#ახსნილი ფუნქციის გამოყენებით გააპრიალეთ მთლიანი dictionary (წაშალეთ ყველაფერი ;დ)
text.clear()
print(text)
#აიღეთ არსებული  dictionary-დან ასაკი, და შეუცვალეთ  მას მნიშვნელობა
text["age"] = 40
print(text)