const getProduct = (product) => {
    return `
    <div class="product">
    <p class="card-header">${product.title}</h2>
    <img src="${product.image}" alt="">
    <p class="price">${product.price+"₪"}</p>
    </div>
    `;
}

const renderProducts = (products) => {
    let productsStr = ``;
    products.forEach(product => {
        productsStr += getProduct(product);
    });
    document.getElementsByClassName("products-container")[0].innerHTML = productsStr;
}

