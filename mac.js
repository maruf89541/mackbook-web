// memory option funtion
function updatepricelist(price) {
    const extraMemoryInput = document.getElementById('memory-cost');
    let extraMemoryCost = price;
    extraMemoryInput.innerText = extraMemoryCost;
    calculteTotal();

}
// storage option funtion

function updateStoragepricelist(price) {
    const extraStorageInput = document.getElementById('storage-cost');
    let extraStorageCost = price;
    extraStorageInput.innerText = extraStorageCost;
    calculteTotal();
}
// delivery option function
function updatedeliveryprice(price) {
    const deliveryChargeInput = document.getElementById('delivery-charge');
    let deliveryChargeCost = price;
    deliveryChargeInput.innerText = deliveryChargeCost;
    calculteTotal();
}

function getInputValue(product) {
    const input = document.getElementById(product)
    const inputNumber = input.innerText;
    return inputNumber;
}
function calculteTotal() {
    const memoryCost = getInputValue('memory-cost')
    const storageCost = getInputValue('storage-cost')
    const deliveryCharge = getInputValue('delivery-charge')

    const subTotal = parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCharge) + 1299;
    console.log(subTotal);
    const totalPriceInput = document.getElementById('total-price').innerText = subTotal;
    grandTotal = document.getElementById('grant-total').innerText = totalPriceInput;

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