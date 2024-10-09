function viewProducts(str) {
    switch (str) {
        case "all":
            const allProducts = Gnotebooks.concat(Gstationary);
            renderProducts(allProducts);
            break;

        case "Gnotebooks":
            renderProducts(Gnotebooks);
            break;

        case "Gstationary":
            renderProducts(Gstationary);
            break;

        default:
    };
}