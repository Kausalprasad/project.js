function getRandomColor() {
    // const r = Math.floor(Math.random() * 256); // Red component (0-255)
    // const g = Math.floor(Math.random() * 256); // Green component (0-255)
    // const b = Math.floor(Math.random() * 256); // Blue component (0-255)
    
    // let color=`rgb(${r}, ${g}, ${b})`;
    // console.log(color);
    // return color;

    let hex='0123456789ABCDEF';
    let color='#';
    for(let i=1;i<=6;i++){
      color+=hex[Math.floor(Math.random()*16)]
    }
    console.log(color)
    return color;

}
let a=function(){
    let random=getRandomColor();
        
        document.querySelector("body").style.backgroundColor=random;
        console.log("Start")
    }

  
    let id;
    let start=document.querySelector("#start").addEventListener('click',function(){
       id= setInterval(a,1000)
    })

    document.querySelector("#stop").addEventListener('click',function(){
        clearInterval(id);
      
        console.log("stop")
    })
    


