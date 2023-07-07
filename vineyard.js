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
    <img src="${item.images[0]}">
    <p class="title">${item.name}</p>
    <span>${item.city}</span>
    <div class="details">
    <p>Bedrooms ${item.bedrooms}</p>
    <p>Bathrooms ${item.bathrooms}</p>
    <p> Beds ${item.beds}</p>
    <br>
    </div>
    <p> Address ${item.address}</p>
    <button>book</button>
   </div>
    `
    document.querySelector(".box-container").append(container);
}



async function vineYard(){
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Vineyard&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8ee8903cc5msh568ab48f3b33bd7p1a0be4jsn77deb29d4484',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.results.forEach((item) => {
           Individual7(item);
         });

    } catch (error) {
        console.error(error);
    }
  
}