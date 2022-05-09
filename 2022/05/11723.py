input = __import__('sys').stdin.readline
s = set()
for _ in range(int(input())):
    x = input().rstrip().split()
    command = x[0]
    if command == 'add':
        s.add(x[1])
    elif command == 'remove':
        s.discard(x[1])
    elif command == 'check':
        print((x[1] in s)+0)
    elif command == 'toggle':
        if x[1] in s:
            s.discard(x[1])
        else:
            s.add(x[1])
    elif command == 'all':
        s = set(range(1,21))
    else:
        s = set()