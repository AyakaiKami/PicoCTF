text="""
password.charAt(0)  == 'd' &&
password.charAt(29) == '9' &&
password.charAt(4)  == 'r' &&
password.charAt(2)  == '5' &&
password.charAt(23) == 'r' &&
password.charAt(3)  == 'c' &&
password.charAt(17) == '4' &&
password.charAt(1)  == '3' &&
password.charAt(7)  == 'b' &&
password.charAt(10) == '_' &&
password.charAt(5)  == '4' &&
password.charAt(9)  == '3' &&
password.charAt(11) == 't' &&
password.charAt(15) == 'c' &&
password.charAt(8)  == 'l' &&
password.charAt(12) == 'H' &&
password.charAt(20) == 'c' &&
password.charAt(14) == '_' &&
password.charAt(6)  == 'm' &&
password.charAt(24) == '5' &&
password.charAt(18) == 'r' &&
password.charAt(13) == '3' &&
password.charAt(19) == '4' &&
password.charAt(21) == 'T' &&
password.charAt(16) == 'H' &&
password.charAt(27) == '5' &&
password.charAt(30) == '2' &&
password.charAt(25) == '_' &&
password.charAt(22) == '3' &&
password.charAt(28) == '0' &&
password.charAt(26) == '7' &&
password.charAt(31) == 'e'
"""
lines=text.strip('\n').split("&&")
i=0
z=[]
for line in lines:
    linep=line.strip("\n").strip("password.charAt")
    ord=linep.split(" == ")[0].strip(" ").strip('(').strip(')')
    elchr=linep.split(" == ")[1].strip(" ").strip('\'').strip('\'')
    print(ord)
    x=[ord,elchr]
    z.append(x)
import numpy as np
zsorted=sorted(z,key=lambda x:int(x[0]))
rez=''
for l in zsorted:
    rez+=l[1]
print(rez)