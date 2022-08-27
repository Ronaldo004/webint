
function accordFunction (){
    let a=document.getElementById('lol')
   if(a.classList.toggle('.accordion-button::after')){
    a.style.backgroundColor="red";
   }
   else if(a.classList.toggle(' collapsed')){
    a.style.backgroundColor='green'
   }
  

}
