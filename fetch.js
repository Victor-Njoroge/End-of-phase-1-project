     let Site= " ";
    let dateIn=" "
    let dateOut=" "
    let adult=" "
    
const getLocation=()=>{
   
    let button=document.querySelector(".submit")
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        Site = document.querySelector(".location").value
        dateIn=document.querySelector(".in").value
        dateOut=document.querySelector(".out").value
        adult=document.querySelector(".adult").value
       rapidData();
       clearPage();
    })

   
}
getLocation()

function clearPage() {
    const container = document.querySelector('.box-container');
    container.innerHTML = "";
}
function show(item){
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




async function rapidData(){
    const url = `https://airbnb13.p.rapidapi.com/search-location?location=${Site}&checkin=${dateIn}&checkout=${dateOut}&adults=${adult}&children=0&infants=0&pets=0&page=1&currency=USD`;
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
            show(item)
         });

    } catch (error) {
        console.error(error);
    }
}

    