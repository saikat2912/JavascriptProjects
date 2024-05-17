function dis(val){
    document.getElementById("result").value+=val;
}

function getValue(event){
    if(event.key=='0'||event.key=='1'||event.key=='2'||
    event.key=='3'||event.key=='4'||event.key=='5'||event.key=='6'||
    event.key=='7'||event.key=='8'||event.key=='9'||event.key=='+'||event.key=='-'||
    event.key=='*'||event.key=='/')
    {
        document.getElementById("result").value+=event.key;
    }
}

const cal=document.getElementById("calculator").value;
console.log(cal)
cal.onkeyup=function(event){
    console.log("event key cod eis ",event," ",event.keyCode)
    if(event.keyCode==13){
        const x=document.getElementById("result").value;
        calculate(x);
    }
}

function calculate(){
    const x=document.getElementById("result").value;
    let y=math.evaluate(x);
    document.getElementById("result").value=y;
}

function clear(){
    console.log("it entered clear");
    document.getElementById("result").value="";
}
const clearbtn = document.getElementById("clearbtn");
clearbtn.addEventListener('click',()=>{
    document.getElementById("result").value='';
})