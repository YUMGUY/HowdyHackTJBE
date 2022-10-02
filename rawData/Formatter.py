with open("rawData/Consolidated_Data.txt", "r", encoding='utf-8') as f:
    list100 = f.readlines()
import sys
sys.stdout = open('formated0s.txt', 'w')
for i in range(len(list100)):
    list100[i] = list100[i].split('@@')
    print(list100[i])