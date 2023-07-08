const idividual5=document.querySelector('.farm')
idividual5.addEventListener("click", ()=>{
    farm();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual5=(item)=>{
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



async function farm(){
    fetch("http://localhost:3000/Farm")
    .then((res)=>{
        res.json()
        .then(Farm => Farm.forEach(item=>Individual5(item)))
    })
  
}