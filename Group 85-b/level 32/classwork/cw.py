my_set={1,2,3,}
for i in range(11,21):
    my_set.update({i})
    print(my_set)


my_set=set()
my_set.update([1,2,3,4,5])
my_set.remove(3)
my_set.remove(4)

my_set.discard(10)
my_set.discard(5)