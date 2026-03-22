let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name: name, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function displayCart() {
  let cartList = document.getElementById("cart");
  let totalBox = document.getElementById("total");

  if (!cartList) return;

  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = item.name + " - ₹" + item.price;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => removeItem(index);

    li.appendChild(removeBtn);
    cartList.appendChild(li);

    total += item.price;
  });

  if (totalBox) {
    totalBox.textContent = "Total: ₹" + total;
  }
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

window.onload = displayCart;