// DCS2601012 TEH SEE XUAN

// BUTTON
function bigButton(x) {
 x.style.height = "40px";
 x.style.width = "90px";
 x.style.background = "#f7d781";
 x.style.color = "red";
 x.style.cursor = "pointer";
}

function normalButton(x) {
 x.style.height = "30px";
 x.style.width = "80px";
 x.style.backgroundColor = "#fae5ac"
 x.style.color = "black";
}

// LOGIN FORM VALIDATION
function validateLogin() {
 let x = document.LoginForm.username.value;
 let y = document.LoginForm.password.value;
 if ((x == "") || (y == "")) 
 {
   alert("Please enter your details.");
   return false;

 } else {
   alert("Successfully logged in");
   window.location.replace("DCS2601012_TehSeeXuan_Project_Main.html");
   return true;
}

}

// CONTACT FORM VALIDATION
function validateContact() {
 let x = document.contact.name.value;
 let y = document.contact.email.value;
 let z = document.contact.message.value;
 if ((x == "") || (y == "")) 
 {
   alert("Please fill in the form.");
   return false;

 } else if (z == "") {
   alert("Please enter your message or feedback.")
   return false;

 } else {
   alert("Message sent! We will get back to you soon");
   document.getElementById("contact").reset();
   return true;
}

}

// HAMBURGER MENU
function toggleMenu() {
 var x = document.getElementById("myMenu");

 if (x.style.display === "flex") {
  x.style.display = "";
 } else {
  x.style.display = "flex";
 }
}

function toggleMenu() {
 var x = document.getElementById("myMenu");

 if (x.style.display === "flex") {
  x.style.display = "";
 } else {
  x.style.display = "flex";
 }
}

// PRODUCT LIST
const products = [
    { id: 1, name: "White Tee", price: 59.90, image: "whitetee.png" },
    { id: 2, name: "Pink Hoodie", price: 79.90, image: "girlhoodie.png" },
    { id: 3, name: "Green Sweater", price: 39.90, image: "greensweater.png" },
    { id: 4, name: "Baggy Jeans", price: 79.90, image: "jeans.png" },
    { id: 5, name: "Teal Tee", price: 59.90, image: "menstee.png" },
    { id: 6, name: "Black Hoodie", price: 79.90, image: "menshoodie.png" },
    { id: 7, name: "Dark Blue Sweater", price: 39.90, image: "menssweater.png" },
    { id: 8, name: "Blue Jeans", price: 79.90, image: "mensjeans.png" }
];

// SHOPPING CART
let cart = [];

// ADD TO CART
function addToCart(id) {

 const product = products.find(p => p.id === id);

 const existing = cart.find(item => item.id === id);

 if (existing) {
  existing.quantity++;
 } else {
  cart.push({
   ...product,
   quantity: 1
  });
 }

 updateCart();

 alert(product.name + " added to cart!");
}

// UPDATE CART
function updateCart() {

 const cartItems = document.getElementById("cart-items");

 const count = cart.reduce((total, item) => total + item.quantity, 0);

 document.getElementById("cart-count").textContent = count;

 cartItems.innerHTML = "";

 if (cart.length === 0) {

  cartItems.innerHTML =
   '<p class="empty-cart">Your cart is empty.</p>';

 }

 cart.forEach(item => {

  cartItems.innerHTML += `

   <div class="cart-item">

    <img src="${item.image}" alt="${item.name}">

    <div class="cart-item-info">

     <h4>${item.name}</h4>

     <p>RM ${item.price.toFixed(2)}</p>

     <div class="quantity">

      <button onclick="changeQuantity(${item.id}, -1)">-</button>

      <span>${item.quantity}</span>

      <button onclick="changeQuantity(${item.id}, 1)">+</button>

     </div>

     <button class="remove-button" onclick="removeItem(${item.id})">Remove</button>

    </div>
   </div>
  `;
 });

 const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity, 0);

  document.getElementById("cart-total").textContent = "RM " + total.toFixed(2);
}

// CHANGE QUANTITY
function changeQuantity(id, amount) {

 const item = cart.find(p => p.id === id);

 if (!item) return;

 item.quantity += amount;

 if (item.quantity <= 0) {
  cart = cart.filter(p => p.id !== id);
 }

 updateCart();
}

// REMOVE ITEM
function removeItem(id) {

 cart = cart.filter(item => item.id !== id);

 updateCart();
}

// OPEN CART IN LOGIN MENU
function loginCart() {

 alert("Please log in!");
 return false;

}

// OPEN CART
function openCart() {

 document.getElementById("cart-overlay")
  .classList.toggle("show");

 updateCart();
}

// CLOSE CART
function closeCart(event) {

 document.getElementById("cart-overlay")
  .classList.remove("show");
}

// CHECKOUT
function checkout() {

 if (cart.length === 0) {
  alert("Your shopping cart is empty!");
  return;
 }

 alert("Purchase completed! Thank you for shopping with us!");

 cart = [];

 updateCart();

 document.getElementById("cart-overlay")
  .classList.remove("show");
}