#리스트는 자바스크립트의 배열과 유사하다 
# []대괄호로 작성한다.
# 파이썬은 자유롭게 작성하기 좋지만 문법상 햇갈리는 부분이 있다
a= 'abc'
print(type(a))
#a[2]='b'여기서 []는 리스트와는 관련없다.
a=[1,2,'c']
print(type(a))
print(type(a[2]))
print(type(a[0]))

b=[1,2,3]
print(a+b)


c=[1,3,5,4,2]
c.sort()
c.reverse()
print(c)

c.reverse
del c[1]
del c[2]
print(c)