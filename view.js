const getProduct = (product) => {
    return `
    <div class="product">
        <p class="card-header">${product.title}</p>
        <img src="${product.image}" alt="${product.title}">
        <div class="price-cart-row">
            <button class="product-button">הוסף לסל</button>
            <p class="price">${product.price}₪</p>
        </div>
    </div>
    `;
};


const renderProducts = (products) => {
    let productsStr = ``;
    products.forEach(product => {
        productsStr += getProduct(product);
    });
    document.getElementsByClassName("products-container")[0].innerHTML = productsStr;
}

