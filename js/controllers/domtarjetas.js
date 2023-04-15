//----------------------------------------
/* 
This is the file that manipulates the DOM 
in what respects to the cards of all services and products
*/
// ---------------------------------------


// 1) Recovering all divs thar will be modified manipulating the DOM, aiming to add all services and products in a dynamic way
let astrologicalCards = document.querySelector('#astrological-cards');
let tarotCards = document.querySelector('#tarot-cards');
let diceAndRunesCards = document.querySelector('#diceandrunes-cards');
let workshopCards = document.querySelector('#workshop-cards');
let eventCards = document.querySelector('#event-cards');
let productCards = document.querySelector('#product-cards');

// 2) Returning all services and products from the API (fetch, async, await) which contains the data of all services and products

const fetchServProdAll = async () => {

    // Returning data from the API
    const servProdAPI = await fetch('https://643a5979bd3623f1b9b173dc.mockapi.io/api/products');

    // Filtering by all services and products
    const servProdJSON = await servProdAPI.json();

    // The function returns all services and products
    return servProdJSON;

}

// Filtering services and products by the key "category"

// 3.1) Getting all astrological services (async, await)

const renderAstro = async () => {

    // Recovering all products so as to filter by the pair => "category": "Astrology"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        // Destructuring objects by some of their variables
        const { id, name, price, deliverables, deliveryTerm, image, deliverableZone, category, language } = prod;

        if (prod.category === 'Astrology') {

            console.log(prod)

            let div = document.createElement("div");
            div.innerHTML +=
                `<div class='card card-width'> 
                    <img class='card-img-top imagenes-tarjetas' src='${prod.image}' alt='Card image cap'> 
                    <div class='card-body '> 
                        <h5 class='card-title'>${prod.name}</h5> 
                        <p class='card-text'>Euros ${prod.price},00</p>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${prod.name.toLowerCase()}'>Buy</a>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${prod.name.toLowerCase()}'>More info</a>
                        <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${prod.name.toLowerCase()}'>Availability</a>
                    </div>
                </div>`;
            astrologicalCards.appendChild(div);

        }

    })

}

// 3.2) Getting all Tarot services (async, await)

const renderTarot = async () => {

    // Recovering all products so as to filter by the pair => "category": "Tarot"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, deliverables, deliveryTerm, image, deliverableZone, category, language } = prod;

        if (prod.category === 'Tarot') {

            console.log(prod)

            let div = document.createElement("div");
            div.innerHTML +=
                `<div class='card card-width'> 
                    <img class='card-img-top imagenes-tarjetas' src='${prod.image}' alt='Card image cap'> 
                    <div class='card-body '> 
                        <h5 class='card-title'>${prod.name}</h5> 
                        <p class='card-text'>Euros ${prod.price},00</p>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${prod.name.toLowerCase()}'>Buy</a>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${prod.name.toLowerCase()}'>More info</a>
                        <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${prod.name.toLowerCase()}'>Availability</a>
                    </div>
                </div>`;
                tarotCards.appendChild(div);

        }

    })

}

// // 3.1) Getting all dice and runes services (async, await)

const renderDicesAndRunes = async () => {

    // Recovering all products so as to filter by the pair => "category": "DiceAndRunes"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, deliverables, deliveryTerm, image, deliverableZone, category, language } = prod;

        if (prod.category === 'DiceAndRunes') {

            console.log(prod)

            let div = document.createElement("div");
            div.innerHTML +=
                `<div class='card card-width'> 
                    <img class='card-img-top imagenes-tarjetas' src='${prod.image}' alt='Card image cap'> 
                    <div class='card-body '> 
                        <h5 class='card-title'>${prod.name}</h5> 
                        <p class='card-text'>Euros ${prod.price},00</p>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${prod.name.toLowerCase()}'>Buy</a>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${prod.name.toLowerCase()}'>More info</a>
                        <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${prod.name.toLowerCase()}'>Availability</a>
                    </div>
                </div>`;
                diceAndRunesCards.appendChild(div);

        }

    })

}

// 3.4) Getting all workshops services (async, await)

const renderWorkshops = async () => {

    // Recovering all products so as to filter by the pair => "category": "Workshops"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, deliverables, deliveryTerm, image, deliverableZone, category, language } = prod;

        if (prod.category === 'Workshops') {

            console.log(prod)

            let div = document.createElement("div");
            div.innerHTML +=
                `<div class='card card-width'> 
                    <img class='card-img-top imagenes-tarjetas' src='${prod.image}' alt='Card image cap'> 
                    <div class='card-body '> 
                        <h5 class='card-title'>${prod.name}</h5> 
                        <p class='card-text'>Euros ${prod.price},00</p>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${prod.name.toLowerCase()}'>Buy</a>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${prod.name.toLowerCase()}'>More info</a>
                    </div>
                </div>`;
                workshopCards.appendChild(div);

        }

    })

}

// 3.5) Getting all events (async, await)

const renderEvents = async () => {

    // Recovering all products so as to filter by the pair => "category": "Event"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, deliverables, deliveryTerm, image, date, time, ticketsAvailable, category, language } = prod;

        if (prod.category === 'Event') {

            console.log(prod)

            let div = document.createElement("div");
            div.innerHTML +=
                `<div class='card card-width'> 
                    <img class='card-img-top imagenes-tarjetas' src='${prod.image}' alt='Card image cap'> 
                    <div class='card-body '> 
                        <h5 class='card-title'>${prod.name}</h5> 
                        <p class='card-text'>Euros ${prod.price},00</p>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${prod.name.toLowerCase()}'>Buy</a>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${prod.name.toLowerCase()}'>More info</a>
                        <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-nextevent-${prod.name.toLowerCase()}'>Next event</a>
                    </div>
                </div>`;
                eventCards.appendChild(div);

        }

    })

}

// 3.6) Getting all products (async, await)

const renderProducts = async () => {

    // Recovering all products so as to filter by the pair => "category": "Products"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, deliverables, deliveryTerm, image, deliverableZone, stock, category, language } = prod;

        if (prod.category === 'Products') {

            console.log(prod)

            let div = document.createElement("div");
            div.innerHTML +=
                `<div class='card card-width'> 
                    <img class='card-img-top imagenes-tarjetas' src='${prod.image}' alt='Card image cap'> 
                    <div class='card-body '> 
                        <h5 class='card-title'>${prod.name}</h5> 
                        <p class='card-text'>Euros ${prod.price},00</p>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${prod.name.toLowerCase()}'>Buy</a>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${prod.name.toLowerCase()}'>More info</a>
                        <a href='#' class='btn btn-primary tamaño-boton' id='btn-stock-${prod.name.toLowerCase()}'>Stock</a>
                    </div>
                </div>`;
                productCards.appendChild(div);

        }

    })

}

// Executing the async-await functions that modify the DOM with respect to the service and product cards
renderAstro();
renderTarot();
renderDicesAndRunes();
renderWorkshops();
renderEvents();
renderProducts();
