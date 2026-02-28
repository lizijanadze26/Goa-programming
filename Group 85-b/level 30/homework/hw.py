#1) შექმენი ცარიელი set და დაამატე მას რიცხვები 1 და 2.

my_set=set()
my_set.add(1)
my_set.add(2)
print(my_set)

#2) მოცემულია set: a = {3, 4} დაამატე რიცხვი 5.
a= {3,4}
a.add(5)
print(a)

#3) შექმენი ცარიელი set, for ციკლის გამოყენებით დაამატე რიცხვები 0-დან 3-მდე.

my_set2=set()
for i in range(0,4):
    my_set2.add(i)
    print(my_set2)

#4) მოცემულია set: numbers = {1, 2, 3} დაამატე რიცხვი 10.

numbers={1,2,3}
numbers.add(10)
print(numbers)

#5) შექმენი ორი set, გააერთიანე ისინი union() მეთოდით და დაბეჭდე შედეგი.
set1={1,2,3}
set2={4,5,6}
print(set1.union(set2))

#6) შექმენი ცარიელი set, for ციკლით დაამატე მას ყველა კენტი რიცხვი 2-დან 8-მდე.
my_set3=set()
for i in range(2,9):
    if i%2!=0:
        my_set3.add(i)
        print(my_set3)

#7) მოცემულია set: colors = {"red", "blue"} დაამატე "yellow" და "green".
colors={"red","blue"}
colors.add("yellow")
colors.add("green")
print(colors)

#8) შექმენი ორი ცარიელი set, პირველს დაამატე რიცხვები 1 და 2, მეორეს დაამატე რიცხვები 2 და 3, შემდეგ გააერთიანე ისინი. 
my_set4=set()
my_set5=set()
my_set4.add(1)
my_set4.add(2)
my_set5.add(2)
my_set5.add(3)
print(my_set4.union(my_set5))