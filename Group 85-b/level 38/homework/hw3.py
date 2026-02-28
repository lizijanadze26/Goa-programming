#for ლუპით დაბეჭდეთ ყველა value 
my_dict = {"name": "lizi", 
           "last name": "janadze", 
           "age": 15
           }
for value in my_dict.values():
    print(value)
    #შეცვალეთ ასაკი
my_dict["age"] = 16
print(my_dict["age"])
 #წაშალეთ საგანი
my_dict.pop("last name")
print(my_dict)
#სრულად გაასუფთავეთ dictionary
my_dict.clear()
print(my_dict)

#pop()-ით წაშალეთ გვარი
my_dict.pop("last name")
print(my_dict)



