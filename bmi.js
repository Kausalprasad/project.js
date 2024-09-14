let form=document.querySelector("form")
form.addEventListener('submit',function(e){
    e.preventDefault();

   let height= parseInt(document.querySelector("#height").value);
   let weight= parseInt(document.querySelector("#weight").value);
   let result=document.querySelector(".results");
  
   let bmi= (weight/((height*height)/10000)).toFixed(2)

  if(height===''||height<0|| isNaN(height)){
    result.innerHTML="Please give a valid height";
  }
  else if(weight===''||weight<0|| isNaN(weight)){
    result.innerHTML="Please give a valid weight";
  }else{
   
   result.innerHTML=`<span>${bmi}</span>`
  }

  
  let guid=document.querySelector(".guid")
   
  if(bmi<=18.6){
    guid.innerHTML="UnderWeight"
  }
  else if(bmi>=18.6&&bmi<=24.9){
    guid.innerHTML="NOrmal Range"
  }
  else if(bmi>=24.9){
     guid.innerHTML="OverWeight"
  }




})

