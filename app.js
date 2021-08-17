function updateProductNumber(product, price, incresing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (incresing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal()

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;

}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    const totalPrice = subtotal + tax;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;

}

//handel case incres decress
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

//handel Phone incres decress
document.getElementById('phone-pluse').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true,);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})