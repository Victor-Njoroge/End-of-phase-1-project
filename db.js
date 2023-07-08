const idividual3=document.querySelector('.swimming-pool')
idividual3.addEventListener("click", ()=>{
    pool();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual3=(item)=>{
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



function pool(){
    fetch("http://localhost:3000/swimming")
    .then((res)=>{
        res.json()
        .then(swimming=>swimming.forEach(item=>Individual3(item)))
    })
}
