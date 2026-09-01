// ========================================
// NIVORA V2
// ========================================


// SMOOTH NAVIGATION

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ========================================
// CART SYSTEM
// ========================================

let cart = [];


// ADD PRODUCT

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    openCart();

}


// UPDATE CART

function updateCart() {

    const cartCount =
        document.getElementById("cart-count");

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");


    // Cart count

    cartCount.textContent = cart.length;


    // Empty cart

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "0";

        return;
    }


    // Products

    cartItems.innerHTML = cart.map((item, index) => {

        return `
            <div class="cart-item">

                <div class="cart-item-info">

                    <div class="cart-item-name">
                        ${item.name}
                    </div>

                    <div class="cart-item-price">
                        Rs. ${item.price.toLocaleString()}
                    </div>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})">
                    REMOVE
                </button>

            </div>
        `;

    }).join("");


    // Total

    let total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    cartTotal.textContent =
        total.toLocaleString();

}


// REMOVE PRODUCT

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// OPEN CART

function openCart() {

    document
        .getElementById("cart-panel")
        .classList.add("active");

    document
        .getElementById("cart-overlay")
        .classList.add("active");

}


// CLOSE CART

function closeCart() {

    document
        .getElementById("cart-panel")
        .classList.remove("active");

    document
        .getElementById("cart-overlay")
        .classList.remove("active");

}


// CART BUTTON

document
    .getElementById("cart-btn")
    .addEventListener("click", openCart);


// CLOSE BUTTON

document
    .getElementById("close-cart")
    .addEventListener("click", closeCart);


// CLICK OUTSIDE CART

document
    .getElementById("cart-overlay")
    .addEventListener("click", closeCart);


// CHECKOUT

document
    .getElementById("checkout-btn")
    .addEventListener("click", function () {

        if (cart.length === 0) {

            alert("Your NIVORA cart is empty 🛒");

            return;
        }

        alert(
            "NIVORA CHECKOUT\n\n" +
            "Checkout system coming soon 🚀"
        );

    });


// INITIAL CART

updateCart();