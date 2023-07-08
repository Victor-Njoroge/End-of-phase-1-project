const idividual1=document.querySelector('.bed')
idividual1.addEventListener("click", ()=>{
    room();
    clearPage();
})

function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}


const Individual=(item)=>{
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
      booking()
    })
    }
  slide()
}



 function room(){
 fetch("http://localhost:3000/Rooms")
 .then((res)=>{
    res.json()
    .then(Rooms =>Rooms.forEach(item=>Individual(item)))
 })
  
}
room()






