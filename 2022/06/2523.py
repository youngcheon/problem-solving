n = int(input())
for i in range(1, 2*n):
    print((' '*abs(n-i)).rjust(n, '*').rstrip())