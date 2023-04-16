import { cart } from "./domcarthandler.js";
import { fetchServProdAll } from "../models/fetchingall.js";

let eventCards = document.getElementById('event-cards');

const renderEvents = async () => {

    const events = [];
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

    return events;

}

const eventsArray = await renderEvents();

for (const prod of eventsArray) {
    
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

                const cartProductSearch = cart.find ((prodCart) => prodCart.id === prod.id)
                if (cartProductSearch){
                    prod.quantity++
                } else {
                    cart.push(prod);
                    prod.quantity = 1;
                }

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
            text: `ID: ${prod.id}, Name: ${prod.name}, Price: ${prod.price}, Date: ${prod.date}, Starting Time: ${prod.time}hs, Tickets Available: ${prod.ticketsAvailable}, Language: ${prod.language}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}