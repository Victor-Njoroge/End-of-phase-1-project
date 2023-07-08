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
     
        <button class="book">book</button>
    `;
    document.querySelector(".box-container").append(container);
    container.querySelector(".book").addEventListener("click", ()=>{
        let reservation=document.querySelector(".login")
        reservation.style.display="block"
    })
}

 function coffee() {
    fetch("http://localhost:3000/Coffee")
    .then((res)=>{
        res.json()
        .then(Coffee =>Coffee.forEach(item=>Individual2(item)))
    })
}
