n = int(input())
for i in range(1, 2*n):
    print(('*'*abs(i-n)+'*'+'*'*abs(i-n)).center(2*n-1,' ').rstrip())