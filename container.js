const idividual10=document.querySelector('.container')
idividual10.addEventListener("click", ()=>{
    container();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual10=(item)=>{
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



async function container(){
   fetch("http://localhost:3000/Container")
    .then((res)=>{
        res.json()
        .then(Container=>Container.forEach(item=>Individual10(item)))
    })
}