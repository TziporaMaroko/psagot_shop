const getProduct = (product) => {
    return `
    <div class="product">
    <h2>${product.title}</h2>
    <img src="${product.image}" alt="">
    <h3>${product.price}</h3>
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

