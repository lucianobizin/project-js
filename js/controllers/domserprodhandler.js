// A function that returns all services and products from an API (fetch, async, await)

const fetchServProdAll = async () => {

    // Returning data from API
    const servProdAPI = await fetch ('https://643a5979bd3623f1b9b173dc.mockapi.io/api/products');

    // Returning all services and products
    const servProdJSON = await servProdAPI.json();

    console.log(servProdJSON)
    // The function returns
    return servProdJSON;

}


// A function that returns only astrological services (async, await)

const renderAstro = async () => {

    astrologyArray = [];

    // Recovering all products so as to filter by the pair => "category": "Astrology"
    const products = await fetchServProdAll();
    products = products.filter ((prod) => {prod.category === "Astrology"})
    products.forEach( (prod) => {
        
        const {id, name, price, deliverables, deliveryTerm, image, deliverableZone, language} = prod;
        astrologyArray.push(prod);
    
    });

    // The function returns all astrological services provided in an array

    console.log(astrologyArray)
    return astrologyArray

}

// Creating the arrays that will contain the different services and products provided
// const astrology = async () => {
//     const servAstro = await renderAstro()
//     return servAstro;
// }

// Se recuperan los elementos del DOM de ./pages/servicios-productos.html a fin de introducir los productos por categoría (Astrology, Tarot, Products, Events, Workshops, DiceandRunes)