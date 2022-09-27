input = __import__('sys').stdin.readline
N = input()
numbers = list(map(int, input().split()))

SortedNumbers = sorted(set(numbers))
hashtable = {e: i for i, e in enumerate(SortedNumbers)}

print(' '.join(map(lambda x: str(hashtable[x]), numbers)))
