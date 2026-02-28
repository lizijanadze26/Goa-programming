#5) ფუნქცია იღებს სტრინგს და აქრობს ბოლო სიმბოლოს, თუ ის "!" არის.
def remove_exclamation(s):
    if s.endswith("!"):
        return s[:-1]
    return s