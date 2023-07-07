const idividual1=document.querySelector('.bed')
idividual1.addEventListener("click", ()=>{
    room();
    clearPage();
})

function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}


const Individual=(item)=>{
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
    <p> Price ${item.price.rate} ${item.price.currency}</p>
    <button class="book">book</button>

    
   </div>
    `
    document.querySelector(".box-container").append(container);

    function slide(){
          container.querySelector(".book").addEventListener("click", ()=>{
        let reservation=document.querySelector(".login")
        reservation.style.display="block"
      booking()
    })
    }
  slide()
}



async function room(){
    const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Rooms&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9ecbe81670msh499afdf84707a0ep18e99ajsn912bd10d6138',
            'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
        }
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.results.forEach((item) => {
           Individual(item);
         });

    } catch (error) {
        console.error(error);
    }
  
}
room()

let current

function booking(){
    const reserve=document.querySelector(".reserveBtn")
    reserve.addEventListener("click", ()=>{
         Calculate()
        
    })
   
}




function Calculate(){
    let form=document.querySelector(".login")
    form.innerHTML=" "
    form.style.height="8rem"
    form.style.width="10rem"
    const overRide=()=>{
       current="Booked"
        const text=document.createElement("div")
        text.className="status"
        text.innerHTML=`
        <p>Status </p>
        <span>Booked</span>
        
        `
        
        document.querySelector(".login").appendChild(text)
    }
    overRide()
}