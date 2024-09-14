let btn=document.querySelectorAll(".btn");
let body=document.querySelector("body")
btn.forEach(function(button){
    // console.log(button)
    button.addEventListener('click',function(e){
        body.style.backgroundColor=e.target.id;
      
    })
});