const cardContainer = document.querySelector(".cards-container");
const loadMoreBtn = document.getElementById("loadMore");



/**********************************************************************************/


const products = [
    {
        name: "Summer Breeze Dress",
        img: "../../imges/OFFER_picture/0d9e7a09-5d65-4026-a631-4f6a0719f7f2.jpeg",
        oldPrice: 129.99,
        newPrice: 89.99
    },
    {
        name: "Elegant Nightfall",
        img: "../../imges/OFFER_picture/8c87fd63-8290-4755-baa6-8cf0f278f54c.jpeg",
        oldPrice: 159.99,
        newPrice: 99.99
    },
    {
        name: "Vintage Princess",
        img: "../../imges/OFFER_picture/42df9f62-922b-4935-9ab1-c12f9f16b49b.jpeg",
        oldPrice: 124.99,
        newPrice: 104.99
    },
    {
        name: "Sporty Chic",
        img: "../../imges/OFFER_picture/43a93e4f-bf5b-447e-a77b-6f1a7d0d66e7.jpeg",
        oldPrice: 89.99,
        newPrice: 79.99
    },
    {
        name: "Timeless Charm",
        img: "../../imges/OFFER_picture/fdbc8057-7b73-46ab-85b4-cc013f20d98b.jpeg",
        oldPrice: 179.99,
        newPrice: 119.99
    },
    {
        name: "Snow Whisper",
        img: "../../imges/OFFER_picture/Hugo _ Stylische und bequeme Trainingsschuhe für….jpeg",
        oldPrice: 49.99,
        newPrice: 29.99
    },
    {
        name: "Soft Knitwear",
        img: "../../imges/OFFER_picture/Description Upgrade your shoe game with these….jpeg",
        oldPrice: 119.99,
        newPrice: 79.99
    },
    {
        name: "Urban Luxe",
        img: "../../imges/OFFER_picture/5490cc4c-469b-48aa-a227-4a03d7a2a62d.jpeg",
        oldPrice: 99.99,
        newPrice: 74.99
    },
    {
        name: "Bridal Glow",
        img: "../../imges/OFFER_picture/a21b0f94-f9c9-4933-ac2b-cb76505db998.jpeg",
        oldPrice: 199.99,
        newPrice: 124.99
    },
    {
        name: "Golden Horizon",
        img: "../../imges/OFFER_picture/74a77521-9385-4315-a8de-19f98d3d71d4.jpeg",
        oldPrice: 134.99,
        newPrice: 99.99
    },
    {
        name: "Minimalist Style",
        img: "../../imges/OFFER_picture/b3dc0bb6-4472-48ac-8771-e8517981e5ff.jpeg",
        oldPrice: 189.99,
        newPrice: 119.99
    },
    {
        name: "Tech Smart",
        img: "../../imges/OFFER_picture/e519e1db-b215-4ac8-b113-8329df38c903.jpeg",
        oldPrice: 129.99,
        newPrice: 87.99
    },
    {
        name: "City Runner",
        img: "../../imges/OFFER_picture/For men_ Stainless steel wrist watch + Necklace….jpeg",
        oldPrice: 119.99,
        newPrice: 79.99
    },
    {
        name: "Neon Flash",
        img: "../../imges/OFFER_picture/These custom Air Force 1 sneakers feature a….jpeg",
        oldPrice: 59.99,
        newPrice: 39.99
    },
    {
        name: "Graphic Tee",
        img: "../../imges/OFFER_picture/03d6814e-b121-44ec-bcd7-ba217d4b2c5f.jpeg",
        oldPrice: 44.99,
        newPrice: 34.99
    },
    {
        name: "Urban Racer",
        img: "../../imges/OFFER_picture/MAEDEF Fashion High Quality Men Running Gym….jpeg",
        oldPrice: 159.99,
        newPrice: 99.99
    },
    {
        name: "Crimson Steps",
        img: "../../imges/OFFER_picture/Show your ninja pride with custom hand-painted….jpeg",
        oldPrice: 79.99,
        newPrice: 59.99
    },
    {
        name: "White Pulse",
        img: "../../imges/OFFER_picture/b3fc23f8-78f8-4006-bdf6-2c82404fd384.jpeg",
        oldPrice: 59.99,
        newPrice: 29.99
    },
    {
        name: "Electric Edge",
        img: "../../imges/OFFER_picture/Attack on Titan - Eren x Mikasa Air Force 1 Custom….jpeg",
        oldPrice: 59.99,
        newPrice: 49.99
    },
    {
        name: "Neon Blaze",
        img: "../../imges/OFFER_picture/_Upgrade your summer wardrobe with this black….jpeg",
        oldPrice: 69.99,
        newPrice: 29.99
    },
    {
        name: "Artistic Fury",
        img: "../../imges/OFFER_picture/006f2d9c-41d3-4e71-b853-293bbf454380.jpeg",
        oldPrice: 99.99,
        newPrice: 79.99
    },
    {
        name: "Pop Vision",
        img: "../../imges/OFFER_picture/0333e105-e021-4d17-b389-255037addbf9.jpeg",
        oldPrice: 59.99,
        newPrice: 29.99
    },
    {
        name: "Mystic Wave",
        img: "../../imges/OFFER_picture/c09cac49-45b0-4601-88e6-a26aabe8fbaa.jpeg",
        oldPrice: 59.99,
        newPrice: 39.99
    },
    {
        name: "Urban Fantasy",
        img: "../../imges/OFFER_picture/Camiseta do anime Attack On Titan Têm outras cores….jpeg",
        oldPrice: 39.99,
        newPrice: 19.99
    },
    {
        name: "Retro Flash",
        img: "../../imges/OFFER_picture/fbcf10d9-47d2-4bea-9d1a-96605da9b6b1.jpeg",
        oldPrice: 74.99,
        newPrice: 34.99
    },
    {
        name: "Electric Dream",
        img: "../../imges/OFFER_picture/Check it out New Jujutsu kaisen Printed T-shirt….jpeg",
        oldPrice: 59.99,
        newPrice: 39.99
    },
    {
        name: "Neon Reality",
        img: "../../imges/OFFER_picture/Manga Attack on Titan T-shirt Men Women Clothing….jpeg",
        oldPrice: 139.99,
        newPrice: 89.99
    },
    {
        name: "Chroma Shift",
        img: "../../imges/OFFER_picture/70ec72fd-2566-4afb-a2ae-515f3ab9ddfd.jpeg",
        oldPrice: 49.99,
        newPrice: 19.99
    },
    {
        name: "Princess Blue",
        img: "../../imges/OFFER_picture/Ropa para niños, vestido de lentejuelas con flores….jpeg",
        oldPrice: 119.99,
        newPrice: 84.99
    },
    {
        name: "Pink Blossom",
        img: "../../imges/OFFER_picture/110caaf5-3141-48e7-9245-28ccceb380a1.jpeg",
        oldPrice: 119.99,
        newPrice: 84.99
    },
    {
        name: "Fairy Delight",
        img: "../../imges/OFFER_picture/New Rainbow Sweet Tutu Kids Summer Dresses….jpeg",
        oldPrice: 159.99,
        newPrice: 99.99
    },
    {
        name: "Crimson Sparkle",
        img: "../../imges/OFFER_picture/Fabric_ Polyester_ The fabric is comfortable for….jpeg",
        oldPrice: 139.99,
        newPrice: 109.99
    }
];




products.forEach(product => {
    cardContainer.innerHTML += `
        <div class="card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p style="text-decoration: line-through #121111">$${product.oldPrice}</p>
            <p><i style="color: red" class="bi bi-fire"></i>$${product.newPrice}</p>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    `;
});







/**********************************************************************************/







const cards = document.querySelectorAll(".card");




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


/**************************************************************/

const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        const card = this.closest(".card");
        const product = {
            img: card.querySelector("img").src,
            title: card.querySelector("h3").innerText,
            price: card.querySelectorAll("p")[1].innerText
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





