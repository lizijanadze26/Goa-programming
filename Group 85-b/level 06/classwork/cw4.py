#4) შეამოწმე, რომ ორივე დადებითია (ანუ ორივე მეტია 0-ზე).  თუ ასეა დაბეჭდე "ორივე პირობა სწორია", წინააღმდეგ შემთხვევაში  "პირობა არასწორია".

number1 = int(input("enter number"))
number2 = int(input("enter number"))
if number1 >0 and number2>0:
    print("ორივე პირობა სწორია")
else:
    print("პირობა არასწორია")