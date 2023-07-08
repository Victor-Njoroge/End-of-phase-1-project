const idividual6=document.querySelector('.houseboat')
idividual6.addEventListener("click", ()=>{
    boatHouse();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual6=(item)=>{
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



 function boatHouse(){
    fetch("http://localhost:3000/Boat")
    .then((res)=>{
        res.json()
        .then(Boat =>Boat.forEach(item=>Individual6(item)))
    })
}