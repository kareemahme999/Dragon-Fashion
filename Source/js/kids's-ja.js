const cardContainer = document.querySelector(".cards-container");
const loadMoreBtn = document.getElementById("loadMore");
/********************************************************/



const kidsProducts = [
    { name: "Mint Breeze Dress", img: "../../imges/Kids_picture/Tween Girls' Solid Color Ruffle Trim Midi Dress….jpeg", price: 59.99 },
    { name: "Pink Elegance Set", img: "../../imges/Kids_picture/Tween Girls 2-delige minimalistische….jpeg", price: 59.99 },
    { name: "White Angel Dress", img: "../../imges/Kids_picture/Season_Summer; Fabric_Polyester; Sleeve….jpeg", price: 54.99 },
    { name: "Blossom Knit Dress", img: "../../imges/Kids_picture/e128a0cb-b36d-4051-8fe1-b66428b5c5b3.jpeg", price: 39.99 },
    { name: "Blue Gingham Classic", img: "../../imges/Kids_picture/Vestido xadrez.jpeg", price: 39.99 },
    { name: "Festive Winter Set", img: "../../imges/Kids_picture/Camisa De Dos Tonos Y Pantalones Cortos Para….jpeg", price: 49.99 },
    { name: "Mini Style Tee & Vest", img: "../../imges/Kids_picture/caab65c1-16a2-45a5-bbe3-7636b289527a.jpeg", price: 24.99 },
    { name: "Autumn Knit Set", img: "../../imges/Kids_picture/badb335e-90f4-417b-bf64-db798801f719.jpeg", price: 29.99 },
    { name: "Striped Overalls Set", img: "../../imges/Kids_picture/Archie Harrison, hijo de Meghan Markle y el….jpeg", price: 24.99 },
    { name: "Explorer Outfit", img: "../../imges/Kids_picture/Arab Swag_ Photo.jpeg", price: 69.99 },
    { name: "Cozy Fleece Jacket", img: "../../imges/Kids_picture/a74434e2-5497-49e6-93ac-9ed8661bc3a2.jpeg", price: 89.99 },
    { name: "Mini Gentleman Blazer", img: "../../imges/Kids_picture/134557789 80 սմից սկսած Գեղեցիկ և տարբերվող Արժեքը….jpeg", price: 49.99 },
    { name: "Classic Grey Blazer", img: "../../imges/Kids_picture/13567896 3 կտորից բաղկացած հավաքածու….jpeg", price: 59.99 },
    { name: "Sunny Hoodie Set", img: "../../imges/Kids_picture/e1ff09da-08e3-4d77-82f9-e0d5d8f196d2.jpeg", price: 29.99 },
    { name: "Cuddly Bunny Onesie", img: "../../imges/Kids_picture/a2bf0ac4-39cb-4992-b5a6-2bc967526601.jpeg", price: 44.99 },
    { name: "Panda Bear Romper", img: "../../imges/Kids_picture/8cca1f1c-b912-484d-b2be-2170178bbda2.jpeg", price: 49.99 },
    { name: "Panda Plush Romper", img: "../../imges/Kids_picture/9e8bc1f8-41a5-439f-a56c-f8da6def625b.jpeg", price: 39.99 },
    { name: "Golden Princess Dress", img: "../../imges/Kids_picture/76732c13-12a7-4458-bfce-81893f9d8ac7.jpeg", price: 39.99 },
    { name: "Autumn Ruffle Dress", img: "../../imges/Kids_picture/7318a364-252e-411c-8ebf-ccb5c409e128.jpeg", price: 49.99 },
    { name: "Silver Knit Dress", img: "../../imges/Kids_picture/6245f386-043b-4732-9d23-578b543935ea.jpeg", price: 39.99 },
    { name: "Pink Bunny Set", img: "../../imges/Kids_picture/4182f484-ac70-4d6d-bddd-16e53c4c33cb.jpeg", price: 49.99 },
    { name: "Gentleman Outfit", img: "../../imges/Kids_picture/3062f2b3-0d1c-4aa5-ad7d-3c0b97e167ea.jpeg", price: 119.99 },
    { name: "Yellow Plaid Shirt Set", img: "../../imges/Kids_picture/96a6debe-64ed-4ee3-9db6-b52f4b86e802.jpeg", price: 69.99 },
    { name: "Elegant Black & White Dress", img: "../../imges/Kids_picture/71e53188-5705-4f65-9abc-75e9bc02fedc.jpeg", price: 39.99 },
    { name: "Mint Polka Dot Pajama", img: "../../imges/Kids_picture/54ae23e5-459c-4ba8-87d5-f1e6e6669e6b.jpeg", price: 74.99 },
    { name: "Floral Pink Dress", img: "../../imges/Kids_picture/3pcs Baby Girls' Casual Plaid Long Sleeve Shirt….jpeg", price: 129.99 },
    { name: "Royal Red Gown", img: "../../imges/Kids_picture/e934c987-2e84-4fb5-be91-5f4390d63ad5.jpeg", price: 139.99 },
    { name: "Classic Plaid Dress", img: "../../imges/Kids_picture/Pink Dressy  Long Sleeve Tweed Plaid   Non-Stretch….jpeg", price: 39.99 },
    { name: "Sweet Pink Princess Dress", img: "../../imges/Kids_picture/Pink Party Collar   Plain,All Over Print….jpeg", price: 29.99 },
    { name: "Lavender Chic Set", img: "../../imges/Kids_picture/949f56bd-f6d5-4c0d-aab3-8843f32afe90.jpeg", price: 119.99 },
    { name: "White Elegance Suit", img: "../../imges/Kids_picture/ee7afaef-5e28-4ef5-a8a5-62740ad0d011.jpeg", price: 139.99 },
    { name: "Trendy Black Skirt Set", img: "../../imges/Kids_picture/d6754e5d-a3a5-4898-8a92-f5e7ef256948.jpeg", price: 139.99 }
];








kidsProducts.forEach(product => {
    cardContainer.innerHTML += `
        <div class="card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p><i style="color: red" class="bi bi-fire"></i>$${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
});


const cards = document.querySelectorAll(".card");

/*******************************************************/
let currentIndex = 0;
const step = 4;
function showCards() {
    for (let i = currentIndex; i < currentIndex + step && i < cards.length; i++) {
        setTimeout(() => {
            cards[i].classList.add("show");
        }, (i - currentIndex) * 150);
    }

    currentIndex += step;

    if (currentIndex >= cards.length) {
        loadMoreBtn.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showCards();
});

loadMoreBtn.addEventListener("click", showCards);

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const originalText = this.textContent;
        this.textContent = 'Added!';
        this.style.background = 'linear-gradient(45deg, #2196F3, #1976D2)';

        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = 'linear-gradient(45deg, #4CAF50, #45a049)';
        }, 1000);
    });
});





/********************************************************/




const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        const card = this.closest(".card");
        const product = {
            img: card.querySelector("img").src,
            title: card.querySelector("h3").innerText,
            price: card.querySelectorAll("p")[0].innerText
        };


        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        Swal.fire({
            title: "Add Success ✨ ",
            icon: "success",
            draggable: true
        });
    });
});






/********************************************************/
/*scroll to top*/
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

