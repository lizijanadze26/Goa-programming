#შექმენით ფუნქცია, მიიღებთ რიცხვს, თუ კენტია დააბრუნეთ "კენტია", თუ ლუწი - "ლუწია"
def check_number(number):
    if number % 2 == 0:
        return "ლუწია"
    else:
        return "კენტია"