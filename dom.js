// let a=document.getElementById("para").style.backgroundColor="red";
let list=document.querySelectorAll("li")
let arr=Array.from(list);
arr.forEach(function(list,index){
    if(index===1){
        list.style.color="red"
    }
    else{
        list.style.color="yellow"  
    }
})