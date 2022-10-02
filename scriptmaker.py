with open("formattedData/formated200.txt") as f:
    list100 = f.readlines()
import sys
sys.stdout = open('sofia.js', 'w')
for i in range(len(list100)):
    list100[i] = list100[i] + ", "
    print(list100[i], end = '')