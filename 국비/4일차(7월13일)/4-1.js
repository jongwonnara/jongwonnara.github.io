
function Student(name, korean, math, english, science)
{
    this.이름=name; //this 는 해당하는 함수 내의 변수임을 알림.(self와 유사)
    this.math=math;
    this.koraen=korean;
    this.science=science;
    this.english=english;

    this.getSum()=function(){
        return (korean + math + english + science);
        // = this.korean+this.math.......... , this.korean=this['korean']
    };

    this.getAverage()=function(){
        return (korean + math + english + science)/* = this.getSum() *//4;
    };

    this.toString()=function(){
        return "홍길동의 총점은" (korean + math + english + science) + "평균은 " + (korean + math + english + science) / 4; 
    };
}
var s1= new Student('김철수',90,90,90,90);
//new: 해당 함수를 통해 객체 생성
var s1= new Student('금철수',9,9,9,9);
console.log(s1.이름);    
console.log(s1.toString());
console.log(s1.getAverage());
/*
<error>
var s1=  Student('김철수',90,90,90,90);
console.log(s1.name);    
console.log(s1.toString);
*/