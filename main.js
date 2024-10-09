


function viewProducts(str){
    if ( str == "all" ){
        renderProducts(Gnotebooks);
        renderProducts(Gstationary);
    }
    else 
    renderProducts(str)
}

