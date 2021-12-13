var pepperoni = document.querySelector("#pepperoni")
var meatLovers = document.querySelector("#meatLovers")
var vegetarian = document.querySelector("#vegetarian")
var canadian = document.querySelector("#canadian")
var hawaiian = document.querySelector("#hawaiian")
var deluxe = document.querySelector("#deluxe")
var costError = document.querySelector('#totalCostError')

document.querySelector('#fName').addEventListener("blur", function() {
    if (orderInfo.fName.value !== "") {
        fNameError.textContent = "";
    }
});
document.querySelector('#lName').addEventListener("blur", function() {
    if (orderInfo.lName.value !== "") {
        lNameError.textContent = "";
    }
});
document.querySelector('#address').addEventListener("blur", function() {
    if (orderInfo.address.value !== "") {
        addressError.textContent = "";
    }
});
document.querySelector('#postal').addEventListener("blur", function() {
    if (orderInfo.postal.value !== "") {
        postalError.textContent = "";
    }
});

function onDeliveryTypeChange() {
    document.querySelector('#fieldsetError').textContent = ""
}
