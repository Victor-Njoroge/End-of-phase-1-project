const idividual=document.querySelector('.coffee')
idividual.addEventListener("click", () => {
    clearPage();
    coffee();
});

function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}

const Individual2 = (item) => {
    const container = document.createElement("div");
    container.classList.add("box");
    container.innerHTML = `
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
    `;
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
        fetch(`http://localhost:3000/Coffee/${item.id}`,{
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
    fetch(`http://localhost:3000/Coffee/${item.id}`,{
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

 function coffee() {
    fetch("http://localhost:3000/Coffee")
    .then((res)=>{
        res.json()
        .then(Coffee =>Coffee.forEach(item=>Individual2(item)))
    })
}
