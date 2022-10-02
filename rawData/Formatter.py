with open("rawData/formatedData.txt") as f:
    list100 = f.readlines()
import sys
sys.stdout = open('real0s.json', 'w')
for i in range(len(list100)):
    list100[i] = list100[i] + ", "
    print(list100[i], end = '')