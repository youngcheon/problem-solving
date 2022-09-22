import re
target = input()
word = input()
answer = re.findall(word, target)
print(len(answer))