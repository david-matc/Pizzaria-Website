
function hamMenuBtn() {

  if (document.querySelector('#mobileMenu').style.marginLeft == 0 + "px") {
    document.querySelector('#mobileMenu').style.marginLeft = -200 + "px";
    document.querySelector('#menuCover').style.marginLeft = -100 + "%";
  }else{
    document.querySelector('#mobileMenu').style.marginLeft = 0 + "px";
    document.querySelector('#menuCover').style.marginLeft = 0 + "%";
  }
}
