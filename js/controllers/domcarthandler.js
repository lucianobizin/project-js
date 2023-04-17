export const cart = [];

// Checking if a service / product has been already added to the chart


// Saving all cart products into the LocalStorage with the aim of displaying the data on cart.html  

let saveCartLocalStorage = document.getElementById('go-to-cart');
if (saveCartLocalStorage) {

    saveCartLocalStorage.addEventListener('click', () => {

        const guardarLocalCarrito = (key, value) => {
            localStorage.setItem(key, value)
        }

        guardarLocalCarrito('Cart', JSON.stringify(cart))

    })

}

// Recovering cart info from LocalStorage and displaying that on cart.html

// Tabla de la página carrito.html

const cartArray = JSON.parse(localStorage.getItem('Cart'));
console.log(cartArray)

let cartRows = document.getElementById('table-cart-description');
let cartTotal = document.getElementById('table-cart-total');

let total = 0;

if (cartArray) {
    for (const elemento of cartArray) {

        let trcolumna = document.createElement('tr');
        trcolumna.innerHTML = `<tr>
    <td>${elemento.name}</td>
    <td>${elemento.price} Euros</td>
    </tr>`;
        if (cartRows) {
            cartRows.appendChild(trcolumna);
        }


        total = total + elemento.price;
    }

    console.log(total)
}


let trColumnaTotal = document.createElement('tr');
trColumnaTotal.innerHTML = `<tr>
<td>TOTAL</td>
<td>${total} Euros</td>
</tr>`;
if (cartTotal) {
    cartTotal.appendChild(trColumnaTotal);
}

// Buying function

const paymentBtn = document.getElementById('payment-btn')
if (paymentBtn) {

    paymentBtn.addEventListener('click', () => {
        Swal.fire({
            title: 'You are really close to buy our services and/or products',
            text: "Click on the green button to get all your services and/or products! You are just one step away.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, buy it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Thank you so much for your purchase and come back soon!',
                    'Enjoy your new services and/or products'
                )
            }
        })

        localStorage.clear()
        cartRows.innerHTML = '<div></div>'
        cartTotal.innerHTML = '<div></div>'
    })
}