function validate(e) {

    var valid = true;
    e.preventDefault();
    if (document.querySelector('#pickup').checked == false && document.querySelector('#delivery').checked == false) {
        alert('select either pickup or delivery')
        valid = false;
    }
    if (orderInfo.fName.value === "" && (document.querySelector('#delivery').checked === true || document.querySelector('#pickup').checked === true)) {
        document.querySelector('#fNameError').innerHTML = "*Please enter a First Name*";
        valid = false;
    }
    if (orderInfo.lName.value === "" && ((document.querySelector('#delivery').checked === true || document.querySelector('#pickup').checked === true))) {
        document.querySelector('#lNameError').innerHTML = "*Please enter a Last Name*";
        valid = false;
    }
    if (orderInfo.address.value === "" && document.querySelector('#delivery').checked === true) {
        document.querySelector('#addressError').innerHTML = "*Please enter an address*";
        valid = false;
    }
    if (orderInfo.postal.value === "" && document.querySelector('#delivery').checked === true) {
        document.querySelector('#postalError').innerHTML = "*Please enter a postal code*";
        valid = false;
    }
    if (document.querySelector('#pickup').checked == true) {
        document.querySelector('#postalError').innerHTML = "",
            document.querySelector('#addressError').innerHTML = ""
        valid = false;
    }
    if (document.querySelector('#pickup').checked == true) {
        if ((orderInfo.fName.value !== "") && (orderInfo.lName.value !== "") || (orderInfo.address.value !== "") || (orderInfo.postal.value !== "") || (orderInfo.apt.value !== "") || orderInfo.card.value !== "")
            valid = true;
    }


    if (valid) {
        alert("Thankyou!");
        return true;
    }
}
