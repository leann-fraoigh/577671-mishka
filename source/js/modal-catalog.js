var addToCartButton = document.querySelectorAll(".catalog-item__order");
var buttonsArray = Array.from(addToCartButton);
var orderModal = document.querySelector(".modal--add-to-cart");
var orderForm = orderModal.querySelector(".modal__form");
var overlay = document.querySelector(".overlay");

for(var i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    orderModal.classList.add("modal--opened");
    overlay.classList.add("overlay--showed");
  });
}

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  orderModal.classList.remove("modal--opened");
  overlay.classList.remove("overlay--showed");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderModal.classList.contains("modal--opened")) {
      evt.preventDefault();
      orderModal.classList.remove("modal--opened");
    }
    if (overlay.classList.contains("overlay--showed")) {
      evt.preventDefault();
      overlay.classList.remove("overlay--showed");
    }
  }
});
