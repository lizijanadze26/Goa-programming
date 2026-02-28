#3) ფუნქცია იღებს სიას რიცხვებისგან და აბრუნებს მხოლოდ დადებითების ჯამს.
def sum_of_positives(numbers):
    positive_sum = 0
    for num in numbers:
        if num > 0:
            positive_sum += num
    return positive_sum