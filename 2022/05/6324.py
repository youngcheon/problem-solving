import re
for i in range(int(input())):
    p = re.match(r'([a-z]+)://([\w.-]+)(?::([\d]+))?(?:/([\S]+))?',input())
    print(f"URL #{i+1}")
    for j, k in enumerate(["Protocol ",'Host     ','Port     ','Path     '],1):
        print(f"{k}= {p.group(j)}".replace("None","<default>"))
    print()