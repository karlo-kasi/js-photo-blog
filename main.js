
// prendo l'elemento del DOM e creo una varibaile 
let row = document.querySelector(".row")

//chiamata API 
fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let cards = [];

        data.forEach((element) => {
            console.log(element)

            let {id, title, date, url } = element
            
            row.innerHTML +=
            `
            <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                    <div class="card mb-4" data-id="${id}">
                        <div class="position-relative">
                            <div class="position-absolute top-0 start-50 translate-middle">
                                <img src="./img/pin.svg" alt="">
                            </div>
                        </div>
                        <img width="100%" src="${url}" class="card-img-top p-3" alt="${title}">
                        <div class="card-body">
                            <p class="card-text">${date}.</p>
                            <p class="card-text">${title}.</p>
                        </div>
                    </div>
                </div>
            `

            cards = document.querySelectorAll(".card");
        })

        

        cards.forEach(element => {
            element.addEventListener("click", function () {
                let modal = document.getElementById("modalHtml");
                modal.innerHTML =
                    `
                 <div>
                    <button id="btnClose" class="btn btn-danger mx-auto d-block">Chiudi Pagina</button>
                 </div>
                <figure>
                    <img width="600px" class="img-fluid p-3" src="https://marcolanci.it/boolean/assets/pictures/${element.getAttribute("data-id")}.png" alt="${element.title}">
                </figure>
                `
                modal.classList.remove("d-none");
                modal.classList.add("transparent");

                let btnClose = document.getElementById("btnClose");
                btnClose.addEventListener("click", function () {
                    modal.classList.add("d-none");
                })
            })
        })

        console.log(cards);
    })

    .catch(error => {
        console.error(error)
    })
