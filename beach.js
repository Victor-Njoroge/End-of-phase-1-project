const idividual14=document.querySelector('.sunset')
idividual14.addEventListener("click", ()=>{
    beach();
    clearPage();
})
function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}



const Individual14=(item)=>{
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



async function beach(){
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Beach&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ecbe81670msh499afdf84707a0ep18e99ajsn912bd10d6138',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.results.forEach((item) => {
           Individual14(item);
         });

    } catch (error) {
        console.error(error);
    }
  
}