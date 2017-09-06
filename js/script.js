var formButton  = document.querySelector(".order-form-button");
var orderForm = document.querySelector(".order");


var arrival = orderForm.querySelector("[name=arrival]");
var departure = orderForm.querySelector("[name=departure]");
var adult = orderForm.querySelector("[name=adult]");
var children = orderForm.querySelector("[name=children]");

var adultNumberLess = document.querySelector(".adult-count .number-less");
var adultNumberMore = document.querySelector(".adult-count .number-more");
var childrenNumberLess = document.querySelector(".children-count .number-less");
var childrenNumberMore = document.querySelector(".children-count .number-more");

formButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderForm.classList.toggle("order-hidden");
});

orderForm.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value || !adult.value || !children.value) {
    evt.preventDefault();
    orderForm.classList.remove("order-error");
    orderForm.offsetWidth = orderForm.offsetWidth;
    orderForm.classList.add("order-error");
  }
});

adult.value = 2;
children.value = 0;

adultNumberLess.addEventListener("click", function (evt) {
  evt.preventDefault();
  --adult.value;
  if (adult.value < 0) {
    adult.value = 0;
  }
});

adultNumberMore.addEventListener("click", function (evt) {
  evt.preventDefault();
  ++adult.value;
  if (adult.value > 99) {
    adult.value = 99;
  }
});


childrenNumberLess.addEventListener("click", function (evt) {
  evt.preventDefault();
  --children.value;
  if (children.value < 0) {
    children.value = 0;
  }
});

childrenNumberMore.addEventListener("click", function (evt) {
  evt.preventDefault();
  ++children.value;
  if (children.value > 99) {
    children.value = 99;
  }
});
