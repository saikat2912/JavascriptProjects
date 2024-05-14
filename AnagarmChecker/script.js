function checkAnagram(){

    const word1=document.getElementById("word1").value.trim().toLowerCase().replace(/^a-z/g,"");
    const word2=document.getElementById("word2").value.trim().toLowerCase().replace(/^a-z/g,"");
    if(word1==="" || word2===""){
        alert('Please enter one of the words or both the words')
    }

    if(word1.length!=word2.length){
        document.getElementById("result").innerText="Not an anagram";
        return;
    }
    if(word1.split("").sort().join()===word2.split("").sort().join()){
        console.log("it is anagram")
        document.getElementById("result").innerText="It is an anagram";
    }
    else{
        console.log("It is not an anagram")
        document.getElementById("result").innerText="Not an anagram";
    }

}