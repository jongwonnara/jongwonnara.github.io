/* 프로토타입 (prototype)
    -시제품 견본
    -자바스크립트에서는 생성자 합수에서 
    공통으로 쓰이는 함수를 처리하는 방식
    -공통의 값으로 사용
*/
function Student(name, korean, math, english, science)
{
    this.name=name; 
    this.math=math;
    this.koraen=korean;
    this.science=science;
    this.english=english;

} 
//Student 라는 생성자 함수
//프로토타입(prototype)
Student.prototype.getSum()=function(){
    return (korean + math + english + science);
  
};

Student.prototype.getAverage()=function(){
    return (korean + math + english + science)/4;
};

Student.prototype.toString()=function(){
    return "홍길동의 총점은" (korean + math + english + science) + "평균은 " + (korean + math + english + science) / 4; 
};

Student.prototype.학년='1학년' // 공통의 필드값으로도 사용 가능하다 , this로 사용하여 다수의 객체를 만들때 데이터 크기 감소 가능

var s1=new Student;
var s2=new Student;

console.log(s1.name);
console.log(s2.name);