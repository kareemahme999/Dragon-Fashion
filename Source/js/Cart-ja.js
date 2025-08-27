

const cartContainer = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
    cartContainer.innerHTML = "";
    if(cart.length === 0){
        cartContainer.innerHTML = "<p style='grid-column:1/-1; text-align:center;'>🛒 Your cart is empty</p>";
        return;
    }

    cart.forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
          <img src="${item.img}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.price}</p>
          <button style="font-size: 25px; background: #FFD700;margin-bottom: 15px" class="btn btn-remove" onclick="removeItem(${index})">❌ Remove</button>
          <button style="font-size: 25px ; background: #FFD700" class="btn btn-buy" onclick="buyNow(${index})">🛒 Buy Now</button>
        `;
        cartContainer.appendChild(div);
    });
}



function removeItem(index) {
    Swal.fire({
        title: "Are you sure?",
        text: "This product will be removed from the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes , remove it!",
        cancelButtonText: "No, cancel!"
    }).then((result) => {
        if (result.isConfirmed) {
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            renderCart();
            Swal.fire({
                title: "Succuss remove",
                text: "The product has been removed from the cart.",
                icon: "success"
            });
        }
    });
}






function buyNow(index) {
    const item = cart[index];

    Swal.fire({
        title: "🚀 The transfer to the purchase process for the product is in progress.",
        icon: "success",
        draggable: true
    });


    // window.location.href = "checkout.html";
}

renderCart();