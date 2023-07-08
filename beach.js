const idividual14=document.querySelector('.sunset')
idividual14.addEventListener("click", ()=>{
    beach();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual14=(item)=>{
    let container=document.createElement("div")
    container.innerHTML=`
    <div class="box">
    <img src="${item.image}">
  
    <button class="book">book</button>
   </div>
    `
    document.querySelector(".box-container").append(container);
    function slide(){
        container.querySelector(".book").addEventListener("click", ()=>{
      let reservation=document.querySelector(".login")
      reservation.style.display="block"
   
  })
  }
slide()
}




 function beach(){
  fetch("http://localhost:3000/Beach")
  .then((res)=>{
    res.json()
    .then(Beach=>Beach.forEach(item=>Individual14(item)))
  })
}