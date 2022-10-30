const baseUrl = `${window.location.protocol}//${window.location.hostname}/square_eyes/wp-json/wc/store/products?per_page=6`;
const productContainer = document.querySelector(".productsXD");
const filter = document.getElementById('movie-filter');
const filterBtn = document.getElementById('filter-button');
const search = document.querySelector('.search-container');

search.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
    }
})


let products = [];
filterBtn.addEventListener('click', () => {
    console.log(filter.value);
    const products_filtered = products.filter(product => product.name.toUpperCase().includes(filter.value.toUpperCase()));
    productContainer.innerHTML = '';
    createProducts(products_filtered);
});

const createProducts = (plainProducts) => {
    plainProducts.forEach(function (product) {
        productContainer.innerHTML += `
        <div class="movie">
        <img class="movie-img" src="${product.images[0].src}" alt="movie-img">
        <div class="movie-content">
        <div class="product"><h2>${product.name}</h2>
        <p>Price ${product.prices.price}</p>
        <p>${product.description.trim()}</p>
        <button class="btn btn--rounded movie-btn"> <a href="${window.location.protocol}//${window.location.host}/movie-descripton.html?id=${product.id}">Show Movie ${product.id}</a></button>
        </div>
        </div>`
    });
}

async function getProducts(url) {
    const response = await fetch(url);
    products = await response.json();
    createProducts(products);
}

getProducts(baseUrl);