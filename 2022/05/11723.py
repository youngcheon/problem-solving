input = __import__('sys').stdin.readline
s = set()
for _ in range(int(input())):
    x = input().rstrip().split()
    command = x[0]
    if command == 'add':
        s.add(int(x[1]))
    elif command == 'remove':
        s.discard(int(x[1]))
    elif command == 'check':
        print((int(x[1]) in s)+0)
    elif command == 'toggle':
        if int(x[1]) in s:
            s.discard(int(x[1]))
        else:
            s.add(int(x[1]))
    elif command == 'all':
        s = set(range(1,21))
    else:
        s = set()