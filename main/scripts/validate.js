// function validate(e) {
//
//     var valid = true;
//     e.preventDefault();
//     if (document.querySelector('#pickup').checked == false && document.querySelector('#delivery').checked == false) {
//         alert('select either pickup or delivery')
//         valid = false;
//     }
//     if (orderInfo.fName.value === "" && (document.querySelector('#delivery').checked === true || document.querySelector('#pickup').checked === true)) {
//         document.querySelector('#fNameError').innerHTML = "*Please enter a First Name*";
//         valid = false;
//     }
//     if (orderInfo.lName.value === "" && ((document.querySelector('#delivery').checked === true || document.querySelector('#pickup').checked === true))) {
//         document.querySelector('#lNameError').innerHTML = "*Please enter a Last Name*";
//         valid = false;
//     }
//     if (orderInfo.address.value === "" && document.querySelector('#delivery').checked === true) {
//         document.querySelector('#addressError').innerHTML = "*Please enter an address*";
//         valid = false;
//     }
//     if (orderInfo.postal.value === "" && document.querySelector('#delivery').checked === true) {
//         document.querySelector('#postalError').innerHTML = "*Please enter a postal code*";
//         valid = false;
//     }
//     if (document.querySelector('#pickup').checked == true) {
//         document.querySelector('#postalError').innerHTML = "",
//             document.querySelector('#addressError').innerHTML = ""
//         valid = false;
//     }
//     if (document.querySelector('#pickup').checked == true) {
//         if ((orderInfo.fName.value !== "") && (orderInfo.lName.value !== "") || (orderInfo.address.value !== "") || (orderInfo.postal.value !== "") || (orderInfo.apt.value !== "") || orderInfo.card.value !== "")
//             valid = true;
//     }
//
//
//     if (valid) {
//         alert("Thankyou!");
//         return true;
//     }
// }


// daves code

var delivery = document.querySelector('#delivery');
var pickup = document.querySelector('#pickup');
var fName = document.querySelector('#fName');
var lName = document.querySelector('#lName');
var totalCost = document.querySelector('#totalCost');
var address = document.querySelector('#address');
var postal = document.querySelector('#postal');


function validate(e) {
  e.preventDefault;
  //creating boolean value for returning
  var valid = true;
  // if the total cost of the items != 0 and  delivery or pickup NOT selected, then return false
  if (totalCost.textContent != 0.00 && delivery.value != "" || pickup.value != "") {
    // if either the first or last name are blank, dont submit
    if (fName.value == "" || lName.value == "") {
      if (fName.value == "") {
        //adding the errorspan messages
        document.querySelector('#fNameError').textContent = 'Please enter a first name';
      }
      if (lName.value == "") {
        document.querySelector('#lNameError').textContent = 'Please enter a last name';
      }
      valid = false;
    }
    //if the delivery option was selected
  if (delivery.checked == true) {
    //if no address, alert an error
    if (address.value == "") {
      document.querySelector('#addressError').textContent = 'Please enter an address';
    }
    //if no postal code, alert an error
    if (postal.value == "") {
      document.querySelector('#postalError').textContent = 'Please enter a postal code';
    }
    valid = false;
  }

  // if the pickup option was selected
  if (pickup.checked == true) {
    address.value = '';
    postal.value = '';
    document.querySelector('#addressError').textContent = '';
    document.querySelector('#postalError').textContent = '';
    document.querySelector('#addressError').textContent = '';
    }
  }
  if(valid) {
    alert("Success");
    return valid;
  }else {
    return false;
  }
}
