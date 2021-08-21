// memory option funtion
function updatepricelist(price) {
    const extraMemoryInput = document.getElementById('memory-cost');
    const extraMemoryCost = price;
    extraMemoryInput.innerText = extraMemoryCost;
    document.getElementById('apply-btn').disabled = false;
    calculteTotal();

}
// storage option funtion

function updateStoragepricelist(price) {
    const extraStorageInput = document.getElementById('storage-cost');
    const extraStorageCost = price;
    extraStorageInput.innerText = extraStorageCost;
    calculteTotal();
    document.getElementById('apply-btn').disabled = false;
}
// delivery option function
function updatedeliveryprice(price) {
    const deliveryChargeInput = document.getElementById('delivery-charge');
    const deliveryChargeCost = price;
    deliveryChargeInput.innerText = deliveryChargeCost;
    calculteTotal();
    document.getElementById('apply-btn').disabled = false;
}

function getInputValue(productCost) {
    const input = document.getElementById(productCost)
    const inputNumber = input.innerText;
    return inputNumber;
}
function calculteTotal() {
    const memoryCost = getInputValue('memory-cost')
    const storageCost = getInputValue('storage-cost')
    const deliveryCharge = getInputValue('delivery-charge')

    const subTotal = parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge) + 1299;
    const totalPriceInput = document.getElementById('total-price').innerText = subTotal;
    grandTotal = document.getElementById('grant-total').innerText = totalPriceInput;

}

function updatePromo() {
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value;
    if (promoCode == 'stevekaku') {
        const grandTotalInput = document.getElementById('grant-total');
        const grandTotal = parseInt(grandTotalInput.innerText);
        const promoPrice = grandTotal * .8;
        grandTotalInput.innerText = promoPrice;
        document.getElementById('apply-btn').disabled = true;

    }

    else {
        console.log('invalid promo');
    }
    promoInput.value = '';
}

document.getElementById('apply-btn').addEventListener('click', function () {
    updatePromo();

})

// memory option update
document.getElementById('first-memory').addEventListener('click', function () {
    updatepricelist(0);

})
document.getElementById('secound-memory').addEventListener('click', function () {
    updatepricelist(180);
})

// storage option update
document.getElementById('first-storage').addEventListener('click', function () {
    updateStoragepricelist(0);
})
document.getElementById('secound-storage').addEventListener('click', function () {
    updateStoragepricelist(100);
})
document.getElementById('third-storage').addEventListener('click', function () {
    updateStoragepricelist(180);
})
// delivery charge add
document.getElementById('first-delivery-option').addEventListener('click', function () {
    updatedeliveryprice(0);
})
document.getElementById('secound-delivery-option').addEventListener('click', function () {
    console.log('clicked');
    updatedeliveryprice(20);

})