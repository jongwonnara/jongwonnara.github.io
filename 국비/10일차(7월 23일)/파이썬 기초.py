# 파이썬 - 인터프린트 언어 
# 인터프리터 언어 : 실행시에 해석 
#<-> 컴파일 언어 : 작성한 코드를 기계어로 번역 후 실행 

#type 값 => 해당 값의 타입을 반환 

print('abc')
print("abc")
abc='abc1'
print(abc)

a='asdad'
b="asdv"
c="""
    인생은 
    거친
    파도다 
  """
print(a)
print(b)
print(c)
"""
    자바스크립트와 마찬가지로 문자열을 다루는 것이 중요하다.

"""
d = 'abc'
print(a * 2)

e="abcdefghijklmnopqrstuvwxyz" 
#문자열의 길이 출력 len(값)
print(len(e))
#자바스크립트의 배열과 파이썬의 리스트가 비슷하다
#문자열은 리스트처리가 된다.
print(b[1])
print(b[0])
print(e[1:4])
print(e[1:6])

print(e) #b의 주소값을 출력한다.
print(e[:]) # b의 값을 출력 

#문자열 바꿔치기 
#e[1]='4'  x
e1 = e[:1]+'y'+e[2:]
print(e1)

print(e.count('a')) # 변수 e 에서 a라는 글자 몇개가 있는가
                    #셀문자열 -> 정수 반환 다른언어에 없는 가능 
#find
print(e.find('a')) # 찾는 문자열 -> 위치 반환 indexof 
                   # 변수 e 에서 a의 위치 찾는 방법 

#대문자 소문자 변화 
# e.lower , e.upper

#strip() => 문자열의 좌우 공백 제거 
f="""
 ab cd 
"""
print(f)
print(f.strip())

