export const fetchServProdAll = async () => {

    // Returning data from the API
    const servProdAPI = await fetch('https://643a5979bd3623f1b9b173dc.mockapi.io/api/products');

    // Filtering by all services and products
    const servProdJSON = await servProdAPI.json();

    // The function returns all services and products
    return servProdJSON;

}