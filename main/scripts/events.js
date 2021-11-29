//form element events
document.querySelector('#fName').addEventListener("blur", function() {
    if (orderInfo.fName.value !== "") {
        fNameError.innerHTML = "";
    }
});
document.querySelector('#lName').addEventListener("blur", function() {
    if (orderInfo.lName.value !== "") {
        lNameError.innerHTML = "";
    }
});
document.querySelector('#address').addEventListener("blur", function() {
    if (orderInfo.address.value !== "") {
        addressError.innerHTML = "";
    }
});
document.querySelector('#postal').addEventListener("blur", function() {
    if (orderInfo.postal.value !== "") {
        postalError.innerHTML = "";
    }
});



document.orderInfo.addEventListener("submit", validate);
