const idividual19=document.querySelector('.building')
idividual19.addEventListener("click", ()=>{
    tower();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual19=(item)=>{
    let container=document.createElement("div")
    container.innerHTML=`
    <div class="box">
    <img src="${item.image}">
    <button class="book">book</button>
   </div>
    `
    document.querySelector(".box-container").append(container);
    container.querySelector(".book").addEventListener("click", ()=>{
        let reservation=document.querySelector(".login")
        reservation.style.display="block"
    })
}



 function tower(){
  fetch("http://localhost:3000/Towers")
  .then((res)=>{
    res.json()
    .then(Towers=>Towers.forEach(item=>Individual19(item)))
  })
  
}