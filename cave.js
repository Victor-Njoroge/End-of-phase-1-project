const idividual4=document.querySelector('.cave')
idividual4.addEventListener("click", ()=>{
    cave();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual4=(item)=>{
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



async function cave(){
    fetch("http://localhost:3000/Cave")
    .then((res)=>{
        res.json()
        .then(Cave=>Cave.forEach(item => Individual4(item)))
    })
  
}