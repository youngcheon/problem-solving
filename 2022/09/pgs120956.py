import re
def solution(babbling):
    answer = 0
    for word in babbling:
        if "ayaaya" in word or "yeye" in word or "woowoo" in word or "mama" in word:
            continue
        if not len(re.sub("(aya)|(ye)|(woo)|(ma)", "", word)):
            answer += 1
    return answer
    