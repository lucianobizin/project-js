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

const cartArray = JSON.parse(localStorage.getItem ('Cart'));
console.log (cartArray)

let cartRows = document.getElementById('table-cart-description');
let cartTotal = document.getElementById('table-cart-total');

let total = 0;

for (const elemento of cartArray) {

    let trcolumna = document.createElement ('tr');
    trcolumna.innerHTML = `<tr>
    <td>${elemento.name}</td>
    <td>${elemento.price} Euros</td>
    </tr>`;
    if (cartRows) {
        cartRows.appendChild(trcolumna);
    }


    total = total + elemento.price;
}

console.log (total)

let trColumnaTotal = document.createElement ('tr');
trColumnaTotal.innerHTML = `<tr>
<td>TOTAL</td>
<td>${total} Euros</td>
</tr>`;
if (cartTotal){
    cartTotal.appendChild (trColumnaTotal);
}

