import re
arr = re.findall('[A-Z\-a-z]+', open(0).read())
arr.sort(key=lambda x: len(x), reverse=True)
print(arr[0].lower())