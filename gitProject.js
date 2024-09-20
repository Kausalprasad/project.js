let submit=document.getElementById("btn").addEventListener('click',function(){

let userNmae=document.getElementById("input").value;
console.log(userNmae);
// if(!userNmae){
//     alert("Please enter a GitHub username");
//     return;
// }

const request=`https://api.github.com/users/${userNmae}`
console.log(request);
let xhr=new XMLHttpRequest();
xhr.open('GET',request);


xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
        const data=JSON.parse(this.responseText);
        const card=document.getElementById("card").style.background="gray";
        let url= data.avatar_url  ; 

       let img=document.getElementById("img");
       img.innerHTML=`<img src="${url}" alt="Example Image">`
 
        const name=document.getElementById("name")
        name.textContent=` Name : ${data.name}`;

        const location=document.getElementById("location")
        name.textContent=` Location : ${data.location}`;

        const btn=document.getElementById("followers")
        btn.textContent=` followers : ${data.followers}`;
     }else if (xhr.status==404) {
    
        document.getElementById("card").style.background = "red";
        document.getElementById("name").textContent = "User not found.";
    //     document.getElementById("img").innerHTML = "";
    //     document.getElementById("location").textContent = "";
    //     document.getElementById("followers").textContent = "";
     }
}
xhr.send();
});