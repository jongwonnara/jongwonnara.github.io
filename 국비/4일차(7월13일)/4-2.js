function makeStudent(name,korean,math,english,science){
    var student = {
   /*변수명*/ 'name'	: name,/* 값 */
    'korean'	: korean,
    'math'	: math,
    'english'	: english,
    'science'	: science,
    'getSum'	: function (){
    return (korean+math+english+science);
    },
    'getAverage': function (){
    return this.getSum()/4;
    },
    'toString'	: function (){
    return this.name+"의 총점은 "+this.getSum()+"점이고, 평균은 "+this.getAverage()+"점입니다";
    }
    }
    return student;
    }
    var s1 = makeStudent('홍길동',50,80,90,100);
    d(s1.getAverage());
    d(s1.english);
    d(s1.toString());
    function d(msg){
    document.write(msg+'<br>');
    } 
     