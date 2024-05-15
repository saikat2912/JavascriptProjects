function generate(){
    let dictionary ="";
    if(document.getElementById("bigLetters").checked){
        dictionary+="QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if(document.getElementById("smallLetters").checked){
        dictionary+="qwertyuiopasdfghjklzxcvbnm";
    }
    if(document.getElementById("numbers").checked){
        dictionary+="0123456789";
    }
    if(document.getElementById("special").checked){
        dictionary+="@#$*/"
    }

    let password="";
    const length=document.querySelector('input[type="range"]').value;
    if(length==0 || dictionary==""){
        return;
    }
    for(let i=0;i<length;i++){
        const pos=Math.floor(Math.random()*dictionary.length);
        password+=dictionary[pos];
    }
    console.log("password is ",password)
    document.querySelector('input[type="text"]').value=password;


}

[...document.querySelectorAll('input[type="checkbox"],button.generate')].forEach((ele)=>{
    ele.addEventListener("click",generate)
})

