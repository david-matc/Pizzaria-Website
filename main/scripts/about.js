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
