#7) ფუნქცია აბრუნებს რიცხვების ჯამს 1–დან n–მდე.
def sum_to_n(n):
    total_sum = 0
    for i in range(1, n + 1):
        total_sum += i
    return total_sum