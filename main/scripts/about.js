const api_key = 'prwF7oV4mS5rE27YcGIftWYH1oAFEjOH';
const APPLICATION_NAME = 'My Application';
const APPLICATION_VERSION = '1.0';

tt.setProductInfo(APPLICATION_NAME, APPLICATION_VERSION);

const white_water_brewery = {lng: -76.886082, lat: 45.632623};


window.addEventListener("load", function(){
  var map = tt.map({
    key: api_key,
    container: 'map-div',
    center: white_water_brewery,
    zoom: 12
  });

});

//there are console errors for using this library locally.
// The solution would be to host it on a secure server

var contactForm = document.querySelector('#contactForm');
var allInputs = document.querySelectorAll('.input');
var allErrors = document.querySelectorAll('.errorSpan')
var submitButton = document.querySelector('#submitButton');

function validate(e) {
  var counter = 0
  e.preventDefault();
  for (var i=0; i<allInputs.length; i++) {
    if (allInputs[i].id == "submitButton") {
      continue;
    } else if (allInputs[i].value == "") {
      allErrors[i].classList = 'alert';
      counter = 1
    }
  }
  if (counter == 0) {
    return true;
  } else {
    return false;
  }
}
