// 2. Se genera las subsecciones de venta de servicios y productos en servicios-productos.html

cart = []

let astrologicalCards = document.querySelector("#astrological-cards");

for (const serv of astrology) {

    let div = document.createElement("div");
    div.innerHTML =
        `<div class='card'> 
        <img class='card-img-top imagenes-tarjetas' src='${serv.image}' alt='Card image cap'> 
        <div class='card-body '> 
            <h5 class='card-title'>${serv.name}</h5> 
            <p class='card-text'>Euros ${serv.price},00</p>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-comprar-${serv.name.toLowerCase()}'>Buy</a>
            <a href='#' class='btn btn-primary tamaño-boton' id='btn-info-${serv.name.toLowerCase()}'>More info</a>
            <a href='https://calendly.com/' class='btn btn-primary tamaño-boton' id='btn-agenda-${serv.nombre.toLowerCase()}'>Agenda</a>
        </div>
    </div>`;
    astrologicalCards.appendChild(div);

}

for (const elemento of astrologia) {

    let btnComprar = document.getElementById(`btn-comprar-${elemento.nombre.toLowerCase()}`)
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

                carrito.push(elemento);
                // console.log(sumar(carrito));

                const enJSON = JSON.stringify(elemento);
                localStorage.setItem(`ProductoCarrito${elemento.nombre}`, enJSON);

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
}

for (const elemento of astrologia) {

    let btnComprar = document.getElementById(`btn-info-${elemento.nombre.toLowerCase()}`)
    btnComprar.addEventListener('click', () => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            text: `ID: ${elemento.id}, Nombre: ${elemento.nombre}, Precio: ${elemento.precio}, Entregable: ${elemento.entregable}, Entrega (días): ${elemento.diasParaEntrega}`,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    })
}