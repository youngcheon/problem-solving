input = __import__('sys').stdin.readline
people = dict()
for _ in range(int(input())):
    a, b = input().split()
    people[a]={'enter':1, 'leave':0}[b]
print('\n'.join(sorted([k for k,v in people.items() if v == 1], reverse= True)))