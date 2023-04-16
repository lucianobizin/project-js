import { cart } from "./domcarthandler.js";

//----------------------------------------
/* 
This is the file that manipulates the DOM 
in what respects to the cards of all services and products
*/
// ---------------------------------------

// 0) Generating the cart

// 1) Recovering all divs thar will be modified manipulating the DOM, aiming to add all services and products in a dynamic way
let astrologicalCards = document.getElementById('astrological-cards');
let tarotCards = document.getElementById('tarot-cards');
let diceAndRunesCards = document.getElementById('diceandrunes-cards');
let workshopCards = document.getElementById('workshop-cards');
let eventCards = document.getElementById('event-cards');
let productCards = document.getElementById('product-cards');

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

    let astrology = [];

    // Recovering all products so as to filter by the pair => "category": "Astrology"
    let products = await fetchServProdAll()
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

            // Que lo meta en un array de astrología

            astrology.push(prod);

        }

        // // Applying functionality to the button "Buy"
        // let btnComprar = document.getElementById(`btn-comprar-${prod.name.toLowerCase()}`)
        // btnComprar.addEventListener('click', () => {
        //     const swalWithBootstrapButtons = Swal.mixin({
        //         customClass: {
        //             confirmButton: 'btn btn-success',
        //             cancelButton: 'btn btn-danger margin-right-cancel-button'
        //         },
        //         buttonsStyling: false
        //     })

        //     swalWithBootstrapButtons.fire({
        //         title: '¿Estás segura/o de comprar este producto?',
        //         text: "Cualquier duda podés quitarlo del carrito",
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonText: 'Sí, estoy segura/o!',
        //         cancelButtonText: 'Cancelar la selección!',
        //         reverseButtons: true,
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             swalWithBootstrapButtons.fire(
        //                 'Se ha sumado el producto al carrito!'
        //             )

        //             cart.push(prod);
        //             // console.log(sumar(carrito));

        //             const enJSON = JSON.stringify(prod);
        //             localStorage.setItem(`ProductoCarrito${prod.name}`, enJSON);

        //         } else if (
        //             /* Read more about handling dismissals below */
        //             result.dismiss === Swal.DismissReason.cancel
        //         ) {
        //             swalWithBootstrapButtons.fire(
        //                 'Se ha cancelado la adquisición'
        //             )
        //         }
        //     })
        // })

        // // Applying functionality to the button "More info"
        // let btnInfo = document.getElementById(`btn-info-${prod.name.toLowerCase()}`)
        // btnInfo.addEventListener('click', () => {
        //     Swal.fire({
        //         title: 'Custom animation with Animate.css',
        //         text: `ID: ${prod.id}, Nombre: ${prod.name}, Precio: ${prod.price}, Entregable: ${prod.deliverables}, Entrega (días): ${prod.deliveryTerm}`,
        //         showClass: {
        //             popup: 'animate__animated animate__fadeInDown'
        //         },
        //         hideClass: {
        //             popup: 'animate__animated animate__fadeOutUp'
        //         }
        //     })
        // })

    })

    return astrology

}

// 3.2) Getting all Tarot services (async, await)


const renderTarot = async () => {

    const tarot = [];
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
            tarot.push(prod);

        }

    })

}

// 3.3) Getting all dice and runes services (async, await)
const DiceRunes = [];
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
            DiceRunes.push(prod);
        }

    })

}

// 3.4) Getting all workshops services (async, await)
const workshops = [];
const renderWorkshops = async () => {

    // Recovering all products so as to filter by the pair => "category": "Workshops"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, deliverables, duration, image, category, language } = prod;

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
            workshops.push();

        }

    })

}

// 3.5) Getting all events (async, await)
const events = [];
const renderEvents = async () => {

    // Recovering all products so as to filter by the pair => "category": "Event"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, image, date, time, ticketsAvailable, category, language } = prod;

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
                    </div>
                </div>`;
            eventCards.appendChild(div);
            events.push(prod);

        }

    })

}

// 3.6) Getting all products (async, await)
const productsArray = [];
const renderProducts = async () => {

    // Recovering all products so as to filter by the pair => "category": "Products"
    let products = await fetchServProdAll();
    products.forEach((prod) => {

        const { id, name, price, deliveryTerm, image, deliverableZone, stock, category, language } = prod;

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
            productsArray.push(prod)

        }

    })

}

// Executing the async-await functions that modify the DOM with respect to the service and product cards

// renderAstro().then((astrology) => {
//     // Applying functionality to the button "Buy"

//     for (const prod of astrology) {

//         let btnComprar = document.getElementById(`btn-comprar-${prod.name.toLowerCase()}`)
//         btnComprar.addEventListener('click', () => {
//             const swalWithBootstrapButtons = Swal.mixin({
//                 customClass: {
//                     confirmButton: 'btn btn-success',
//                     cancelButton: 'btn btn-danger margin-right-cancel-button'
//                 },
//                 buttonsStyling: false
//             })

//             swalWithBootstrapButtons.fire({
//                 title: '¿Estás segura/o de comprar este producto?',
//                 text: "Cualquier duda podés quitarlo del carrito",
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonText: 'Sí, estoy segura/o!',
//                 cancelButtonText: 'Cancelar la selección!',
//                 reverseButtons: true,
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     swalWithBootstrapButtons.fire(
//                         'Se ha sumado el producto al carrito!'
//                     )

//                     cart.push(prod);
//                     // console.log(sumar(carrito));

//                     const enJSON = JSON.stringify(prod);
//                     localStorage.setItem(`ProductoCarrito${prod.name}`, enJSON);

//                 } else if (
//                     /* Read more about handling dismissals below */
//                     result.dismiss === Swal.DismissReason.cancel
//                 ) {
//                     swalWithBootstrapButtons.fire(
//                         'Se ha cancelado la adquisición'
//                     )
//                 }
//             })
//         })

//         // Applying functionality to the button "More info"
//         let btnInfo = document.getElementById(`btn-info-${prod.name.toLowerCase()}`)
//         btnInfo.addEventListener('click', () => {
//             Swal.fire({
//                 title: 'Custom animation with Animate.css',
//                 text: `ID: ${prod.id}, Nombre: ${prod.name}, Precio: ${prod.price}, Entregable: ${prod.deliverables}, Entrega (días): ${prod.deliveryTerm}`,
//                 showClass: {
//                     popup: 'animate__animated animate__fadeInDown'
//                 },
//                 hideClass: {
//                     popup: 'animate__animated animate__fadeOutUp'
//                 }
//             })
//         })

//     }
// }
// )
// .catch((e) => console.log(e));

renderTarot().then(() => {

    for (const prod of tarot) {
        // Applying functionality to the button "Buy"
        let btnComprar = document.getElementById(`btn-comprar-${prod.name.toLowerCase()}`)
        btnComprar.addEventListener('click', () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger margin-right-cancel-button'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: '¿Estás segura/o de comprar este producto?',
                text: "Cualquier duda podés quitarlo del carrito",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, estoy segura/o!',
                cancelButtonText: 'Cancelar la selección!',
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Se ha sumado el producto al carrito!'
                    )

                    cart.push(prod);
                    // console.log(sumar(carrito));

                    const enJSON = JSON.stringify(prod);
                    localStorage.setItem(`ProductoCarrito${prod.name}`, enJSON);

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Se ha cancelado la adquisición'
                    )
                }
            })
        })

        // Applying functionality to the button "More info"
        let btnInfo = document.getElementById(`btn-info-${prod.name.toLowerCase()}`)
        btnInfo.addEventListener('click', () => {
            Swal.fire({
                title: 'Custom animation with Animate.css',
                text: `ID: ${prod.id}, Nombre: ${prod.name}, Precio: ${prod.price}, Entregable: ${prod.deliverables}, Entrega (días): ${prod.deliveryTerm}`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
    }
})
    .catch((e) => console.log(e))

renderDicesAndRunes().then(() => {

    for (const prod of DiceRunes) {
        
    }
})
    .catch((e) => console.log(e))

renderWorkshops().then(() => {

    for (const prod of workshops) {
        // Applying functionality to the button "Buy"
        let btnComprar = document.getElementById(`btn-comprar-${prod.name.toLowerCase()}`)
        btnComprar.addEventListener('click', () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger margin-right-cancel-button'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: '¿Estás segura/o de comprar este producto?',
                text: "Cualquier duda podés quitarlo del carrito",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, estoy segura/o!',
                cancelButtonText: 'Cancelar la selección!',
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Se ha sumado el producto al carrito!'
                    )

                    carrito.push(prod);
                    // console.log(sumar(carrito));

                    const enJSON = JSON.stringify(prod);
                    localStorage.setItem(`ProductoCarrito${prod.name}`, enJSON);

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Se ha cancelado la adquisición'
                    )
                }
            })
        })

        // Applying functionality to the button "More info"
        let btnInfo = document.getElementById(`btn-info-${prod.name.toLowerCase()}`)
        btnInfo.addEventListener('click', () => {
            Swal.fire({
                title: 'Custom animation with Animate.css',
                text: `ID: ${prod.id}, Name: ${prod.name}, Price: ${prod.price}, Duration: ${prod.duration} hours, language: ${prod.language}`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
    }
})
    .catch((e) => console.log(e));


renderEvents().then(() => {

    for (const prod of events) {
        // Applying functionality to the button "Buy"
        let btnComprar = document.getElementById(`btn-comprar-${prod.name.toLowerCase()}`)
        btnComprar.addEventListener('click', () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger margin-right-cancel-button'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: '¿Estás segura/o de comprar este producto?',
                text: "Cualquier duda podés quitarlo del carrito",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, estoy segura/o!',
                cancelButtonText: 'Cancelar la selección!',
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Se ha sumado el producto al carrito!'
                    )

                    cart.push(prod);
                    // console.log(sumar(carrito));

                    const enJSON = JSON.stringify(prod);
                    localStorage.setItem(`ProductoCarrito${prod.name}`, enJSON);

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Se ha cancelado la adquisición'
                    )
                }
            })
        })

        // Applying functionality to the button "More info"
        let btnInfo = document.getElementById(`btn-info-${prod.name.toLowerCase()}`)
        btnInfo.addEventListener('click', () => {
            Swal.fire({
                title: 'Custom animation with Animate.css',
                text: `ID: ${prod.id}, Name: ${prod.name}, Price: ${prod.price}, Date: ${prod.date}, Starting Time: ${prod.time}hs, Tickets Available: ${ticketsAvailable}, Language: ${prod.language}`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
    }
})
    .catch((e) => console.log(e));

renderProducts().then(() => {

    for (const prod of productsArray) {
        // Applying functionality to the button "Buy"
        let btnComprar = document.getElementById(`btn-comprar-${prod.name.toLowerCase()}`)
        btnComprar.addEventListener('click', () => {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger margin-right-cancel-button'
                },
                buttonsStyling: false
            })

            swalWithBootstrapButtons.fire({
                title: '¿Estás segura/o de comprar este producto?',
                text: "Cualquier duda podés quitarlo del carrito",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, estoy segura/o!',
                cancelButtonText: 'Cancelar la selección!',
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    swalWithBootstrapButtons.fire(
                        'Se ha sumado el producto al carrito!'
                    )

                    cart.push(prod);
                    // console.log(sumar(carrito));

                    const enJSON = JSON.stringify(prod);
                    localStorage.setItem(`ProductoCarrito${prod.name}`, enJSON);

                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        'Se ha cancelado la adquisición'
                    )
                }
            })
        })

        // Applying functionality to the button "More info"
        let btnInfo = document.getElementById(`btn-info-${prod.name.toLowerCase()}`)
        btnInfo.addEventListener('click', () => {
            Swal.fire({
                title: 'Custom animation with Animate.css',
                text: `ID: ${prod.id}, Name: ${prod.name}, Price: ${prod.price}, Delivarable Term: ${prod.deliveryTerm}, Delivarable Zone: ${prod.deliverableZone}, Available stock: ${prod.stock}, Language: ${prod.language}`,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        })
    }
})
.catch ((e) => console.log (e));