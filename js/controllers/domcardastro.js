import { cart } from "./domcarthandler.js";
import { fetchServProdAll } from "../models/fetchingall.js";

let astrologicalCards = document.getElementById('astrological-cards');

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

            astrology.push(prod);

        }

    })

    return astrology

}

const astroArray = await renderAstro()

for (const prod of astroArray) {

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
            title: `Do you want to buy ${prod.name}?`,
            text: "Please, let me know should you need some help with that",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, I do!',
            cancelButtonText: 'Cancell!',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    `${prod.name} has been added to your chart`
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
                    'Your acquisition has been cancelled'
                )
            }
        })
    })

    // Applying functionality to the button "More info"
    let btnInfo = document.getElementById(`btn-info-${prod.name.toLowerCase()}`)
    btnInfo.addEventListener('click', () => {
        Swal.fire({
            title: 'Main information',
            text: `ID: ${prod.id}, Name: ${prod.name}, Price: ${prod.price}, Deliverables: ${prod.deliverables}, Delivery Terms: ${prod.deliveryTerm}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })

}