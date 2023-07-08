const idividual7=document.querySelector('.grapes')
idividual7.addEventListener("click", ()=>{
    vineYard();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual7=(item)=>{
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



 function vineYard(){
    fetch("http://localhost:3000/Vineyard")
    .then((res)=>{
        res.json()
        .then(Vineyard=>Vineyard.forEach(item=>Individual7(item)))
    })
}