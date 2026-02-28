#შექმენით ფუნქცია, მიიღებთ სიტყვას, ერთი სტრინგი, (ინგლისური), ყველა ასოს გარდაქმნით დიდ ასოებად, შემდეგ დაანაწევრე და სიად გადააქციე (Level 20)
def transform_string(input_string):
    
    uppercase_string = input_string.upper()
   
    string_list = uppercase_string.split()
    
    return string_list