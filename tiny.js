const idividual12=document.querySelector('.tiny-house')
idividual12.addEventListener("click", ()=>{
    tiny();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual12=(item)=>{
    let container=document.createElement("div")
    container.innerHTML=`
    <div class="box">
    <img src="${item.image}">
  
    <button class="book">book</button>
   </div>
    `
    document.querySelector(".box-container").append(container);
    document.querySelector(".box-container").append(container);
    function slide(){
        container.querySelector(".book").addEventListener("click", ()=>{
      let reservation=document.querySelector(".login")
      reservation.style.display="block"
   
  })
  }
slide()
}



 function tiny(){
    fetch("http://localhost:3000/Tiny")
    .then((res)=>{
        res.json()
        .then(Tiny=>Tiny.forEach(item=>Individual12(item)))
    })
}