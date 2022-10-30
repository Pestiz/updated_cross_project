console.log('chuj');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ID = urlParams.get('id')

const baseUrl = `${window.location.protocol}//${window.location.hostname}/square_eyes/wp-json/wc/store/products/${ID}`;
const singleMovieDescription = document.querySelector(".movie-section");

async function getProducts(url) {

    const response = await fetch(url);
    const products = await response.json();
    singleMovieDescription.innerHTML += `
    <h1 class="main-h1">${products.name}</h1>
    <section class="movie-section">
    <div class="movies">
    <div class="movie">
    <img class="movie-img" src="${products.images[0].src}" alt="movie-img">
    <div class="movie-content">
    <p>${products.description.trim()}</p>
    <a href="/cart_page.html"><button class="btn btn--info btn--rounded  btn--basked">${products.prices.price}.- NOK</button></a>
    `
    console.log(products.name);
};
console.log(window.location.host)

getProducts(baseUrl);
