INPUT fizzbuzz

FOR fizzbuzz IN range(20):
    IF fizzbuzz % 3 = 0 AND fizzbuzz % 5 = 0:
        DISPLAY "FizzBuzz"
    ELSE IF fizzbuzz % 3 = 0:
        DISPLAY "Fizz"
    ELSE IF fizzbuzz % 5 == 0:
        DISPLAY "Buzz"
    ELSE
         DISPLAY fizzbuzz
    ENDIF
ENDFOR
