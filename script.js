const information = document.getElementById("information")

// onclick event function logic
async function generateInfo(){
   try {
    const response  = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
    const res = await response.json();

    //  console.log(res)

    // getting info to dom
     information.innerHTML=`

        <div class="card" style="width: 45rem; margin-top: 10px;">
            <div class="card-header" style="text-align: center">
                <b>${res.name}</b>
            </div>
            <div class="animal-img" style="display: flex; flex-direction: row; flex-basis:15%">
                <img  src="${res.image_link}" class="card-img-top" alt="${res.name}">

                <div class="card-body" style="display: flex;  flex-direction: column; flex-basis:85%">
                <p><strong>Animal Type: </strong> ${res.animal_type} </p>
                <p><strong>Lifespan: </strong> ${res.lifespan} </p>
                <p><strong>Max length: </strong> ${res.length_max} </p>
                <p><strong>Max length: </strong> ${res.weight_max} Kg </p>
                <p><strong>Diet: </strong> ${res.diet} </p>
             </div> 
            </div>
        </div>

     `
   } catch (error) {
        console.log("There is some error in information generator")
   }
}

    