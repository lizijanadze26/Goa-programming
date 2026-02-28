#10) უნქცია იღებს სტრინგს და აბრუნებს რამდენი 'a' ან 'A' არის მასში.
def count_a(s):
    count = 0
    for char in s:
        if char.lower() == 'a':
            count += 1
    return count