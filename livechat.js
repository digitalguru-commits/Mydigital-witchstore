let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cart.push({ productName, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceEl = document.getElementById('total-price');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
  });
  totalPriceEl.textContent = totalPrice.toFixed(2);
}

