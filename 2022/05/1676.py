from math import factorial
count = 0
for i in str(factorial(int(input())))[::-1]:
    if i == '0':
        count += 1
    else:
        break
print(count)