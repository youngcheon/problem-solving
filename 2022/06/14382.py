def solve(n):
    if n == 0:
        return "INSOMNIA"
    s = set()
    i = 1
    while len(s)<10:
        last = n*i
        s = s|set(str(last))
        i += 1
    return last

t = int(input())
for i in range(1, t+1):
    print(f"Case #{i}:",solve(int(input())))