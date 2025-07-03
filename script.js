let cartitem = 0;
let add = () => {
  cartitem++;
  updateDisplay();
};
let remove = () => {
  if (cartitem > 0) {
    cartitem--;
    updateDisplay();
  }
};
let show = () => {
  alert('You have ' + cartitem + ' items in your cart.');
};
let updateDisplay = () => {
  document.getElementById('display').textContent = `Items in cart: ${cartitem}`;
};
