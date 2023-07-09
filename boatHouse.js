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
    <p>${item.Adress}</p>
    <p>${item.name}</p>
    <div>
    <p>${item.Bedroom}</p>
    <p>${item.Beds}</p>
    <p>${item.Bathrooms}</p>
    <p class="Status">Status <span>${item.Status}</span></p>
    </div>
    <button class="book">book</button>
    <button class="delete"><i class="fas fa-trash"></i></button>
   </div>
    `
    document.querySelector(".box-container").append(container);
    function slide(){
        container.querySelector(".book").addEventListener("click", ()=>{
      let reservation=document.querySelector(".login")
      reservation.style.display="block"




    const booking=()=>{
      let reserved=document.querySelector(".reserveBtn")
      reserved.addEventListener("click", (e)=>{
        e.preventDefault()
      item.Status="Reserved"
      container.querySelector(".Status").textContent=item.Status
        fetch(`http://localhost:3000/Boat/${item.id}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({Status:item.Status})
        })




      })
    }

    booking()
  })
  }
slide()
const Delete=()=>{
  container.querySelector(".delete").addEventListener("click", ()=>{
    container.remove()
    fetch(`http://localhost:3000/Boat/${item.id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then(res =>res.json())
        .then(Rooms=>console.log(Rooms))
  })
}
Delete()









}



 function boatHouse(){
    fetch("http://localhost:3000/Boat")
    .then((res)=>{
        res.json()
        .then(Boat =>Boat.forEach(item=>Individual6(item)))
    })
}