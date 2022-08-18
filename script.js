// load default total price
function loadDefaultSingleProductTotalPrice(){
    let products = document.getElementsByClassName('single-product');
    for(var i=0; i<products.length; i++){
        product = products[i];
        product.getElementsByClassName('price-new-total')[0].innerText = product.getElementsByClassName('price-new')[0].innerText;
    }
}loadDefaultSingleProductTotalPrice();

// set the default value in qty to 1 if it's not a number or less then or equal to 0
let qtyInputs = document.getElementsByClassName('product-cart-qty-input');
for(var i=0; i<qtyInputs.length; i++){
    let qtyInput = qtyInputs[i];
    qtyInput.addEventListener('change', function(){
        if(isNaN(qtyInput.value) || qtyInput.value <= 0){
            qtyInput.value = 1;
        }
        changeProductPrice(qtyInput);
    });
}

// change product price function
function changeProductPrice(qtyInput){
    let mainParentElement = qtyInput.parentElement.parentElement.parentElement;
    let productSinglePrice = parseFloat(mainParentElement.getElementsByClassName('price-new')[0].innerText);
    let productTotalPrice = mainParentElement.getElementsByClassName('price-new-total')[0];
    let productQty = parseInt(qtyInput.value);

    productTotalPrice.innerText = Math.round((productSinglePrice * productQty) * 100) / 100;
}

// cart icon click function
let cartIcon = document.getElementsByClassName('cart-btn')[0];
cartIcon.addEventListener('click', changeCartIcon);



// change cart icon function
function changeCartIcon(){
    let cartIconChangeClass = document.getElementsByClassName('cartIconChangeClass')[0];
    let cartBagIcon = 'bag-handle-outline';
    let cartCloseIcon = 'close-outline';
    if(cartIconChangeClass.getAttribute('name') == cartBagIcon){
        cartIconChangeClass.setAttribute('name', cartCloseIcon);
        cartBarOpen();
    }else if(cartIconChangeClass.getAttribute('name') == cartCloseIcon){
        cartIconChangeClass.setAttribute('name', cartBagIcon);
        cartBarClose();
    }
}

// cart bar open function
function cartBarOpen(){
    let cartBar = document.getElementsByClassName('cart-bar')[0];
    cartBar.classList.add('active-bar');
}


// cart bar close function
function cartBarClose(){
    let cartBar = document.getElementsByClassName('cart-bar')[0];
    cartBar.classList.remove('active-bar');
}