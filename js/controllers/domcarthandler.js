export const cart = [];

// Checking if a service / product has been already added to the chart


// Saving all cart products into the LocalStorage with the aim of displaying the data on cart.html  

let saveCartLocalStorage = document.getElementById('go-to-cart');
saveCartLocalStorage.addEventListener('click', () => {

    const guardarLocalCarrito = (key, value) => {
        localStorage.setItem(key, value)
    }

    guardarLocalCarrito("Cart", JSON.stringify(cart))

})