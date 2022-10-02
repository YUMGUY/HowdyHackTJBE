with open("rawData/100s.txt") as f:
    list100 = f.readlines()
import sys
sys.stdout = open('formated100.txt', 'w')
for i in range(len(list100)):
    list100[i] = list100[i].split('@@')
    print(list100[i])