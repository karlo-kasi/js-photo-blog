
// prendo l'elemento del DOM e creo una varibaile 
let row = document.querySelector (".row")

//chiamata API 
fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {


        // faccio un destruturing degli oggetti 

        console.log(data)

        data.forEach ((element) => {
            console.log(element)
            row.innerHTML += 
            `
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div class="card mb-4">
                        <div class="position-relative">
                            <div class="position-absolute top-0 start-50 translate-middle">
                                <img src="./img/pin.svg" alt="">
                            </div>
                        </div>
                        <img width="100%" src="${element.url}" class="card-img-top p-3" alt="${element.title}">
                        <div class="card-body">
                            <p class="card-text">${element.date}.</p>
                            <p class="card-text">${element.title}.</p>
                        </div>
                    </div>
                </div>
            ` 
        })

        // forEach((element) => {
        //     console.log(element.id)
        // })
        
        // console.log(data.id, data.title, data.date, data.url)
    })
    .catch(error => {
        console.error(error)
    })





// btn.addEventListener ('click', function (){
//     list.innerHTML = ""
//     generaEmail ()
// })


function generaEmail() {
    for (i = 0; i < 10; i++) {

    }
}

generaEmail()