const cardContainer = document.querySelector(".cards-container");

const loadMoreBtn = document.getElementById("loadMore");
/********************************************************/
const products = [
    {
        name: "Breezy Summer Set",
        img: "../../imges/Men_picture/2PCS Men Short Sleeve Shirt and Pants Summer….jpeg",
        price: 29.99
    },
    {
        name: "Executive Elegance",
        img: "../../imges/Men_picture/เซ็ต 2 ชิ้น เสื้อแขนสั้นคอปก….jpeg",
        price: 59.99
    },
    {
        name: "Premium Polo",
        img: "../../imges/Men_picture/Ervaar ongeëvenaard comfort_ Het ultieme shirt met….jpeg",
        price: 24.99
    },
    {
        name: "Executive Elegance",
        img: "../../imges/Men_picture/643762b5-b390-4650-9140-5164fed6cdd9.jpeg",
        price: 39.99
    },
    {
        name: "Denim Classic",
        img: "../../imges/Men_picture/6d5cec05-f269-4ccb-95da-98c051637dd8.jpeg",
        price: 79.99
    },
    {
        name: "Comfort Hoodie",
        img: "../../imges/Men_picture/4688795f-9a3e-4a94-9015-ff326d1cc46b.jpeg",
        price: 49.99
    },
    {
        name: "Essential Tee",
        img: "../../imges/Men_picture/b1570660-0629-4a05-b2e3-95a9511d2eb5.jpeg",
        price: 19.99
    },
    {
        name: "Breezy Summer Set",
        img: "../../imges/Men_picture/Conjunto de camisa de verano para hombre, camisa….jpeg",
        price: 69.99
    },
    {
        name: "Comfort Hoodie",
        img: "../../imges/Men_picture/HELLO, I RECOMMEND YOU TO CHECK OUT MY SUITS AND….jpeg",
        price: 124.99
    },
    {
        name: "Breezy Summer Set",
        img: "../../imges/Men_picture/Männer Shirt mit Blume & Buchstabe Grafik & Shorts….jpeg",
        price: 34.99
    },
    {
        name: "Classic Jeans",
        img: "../../imges/Men_picture/Marco _ Casual Linen Set.jpeg",
        price: 89.99
    },
    {
        name: "Smart Blazer",
        img: "../../imges/Men_picture/Men's Vintage Floral Retro Button Up Blue Summer….jpeg",
        price: 29.99
    },
    {
        name: "Summer Shorts",
        img: "../../imges/Men_picture/¿Buscas unos shorts cómodos y versátiles para tu….jpeg",
        price: 19.99
    },
    {
        name: "Smart Blazer",
        img: "../../imges/Men_picture/0a1520bc-7945-40e3-987e-e7898c3739ab.jpeg",
        price: 39.99
    },
    {
        name: "Melton trousers",
        img: "../../imges/Men_picture/3pcs Set Loose Fit Men Drawstring Waist Slant….jpeg",
        price: 44.99
    },
    {
        name: "Athletic Wear",
        img: "../../imges/Men_picture/7b567f1f-f7c1-4f4c-9dae-1672cb4447f3.jpeg",
        price: 159.99
    },
    {
        name: "Real Madrid shirt 2007",
        img: "../../imges/Men_picture/206cee47-b933-4f68-8611-3cd648d394d9.jpeg",
        price: 179.99
    },
    {
        name: "Classic Shorts",
        img: "../../imges/Men_picture/834d73e5-d2e1-42da-914e-84b66682f6ae.jpeg",
        price: 59.99
    },
    {
        name: "A full summer",
        img: "../../imges/Men_picture/Black Casual  Sleeveless Polyester Letter….jpeg",
        price: 59.99
    },
    {
        name: "Classic hoodie",
        img: "../../imges/Men_picture/Casual Koord Zak Men Sweatshirts Sweatshirts voor….jpeg",
        price: 69.99
    },
    {
        name: "Liverpool T-shirt 2006",
        img: "../../imges/Men_picture/Classic red, fresh white details, pure Anfield….jpeg",
        price: 189.99
    },
    {
        name: "Smart Blazer",
        img: "../../imges/Men_picture/ec572269-2ed0-468f-a889-f2f0f5c7a066.jpeg",
        price: 59.99
    },
    {
        name: "Bookit",
        img: "../../imges/Men_picture/eeb115f9-694b-479b-87ac-fcf0410820a8.jpeg",
        price: 69.99
    },
    {
        name: "Classic shirt",
        img: "../../imges/Men_picture/f1acae1b-683c-45af-b0c7-900f579b8a5c.jpeg",
        price: 39.99
    },
    {
        name: "Silver water",
        img: "../../imges/Men_picture/Genießen Sie einen entspannten Stil mit dem….jpeg",
        price: 74.99
    },
    {
        name: "Barcelona T-shirt",
        img: "../../imges/Men_picture/731cf206-bdad-4dcb-a81d-afd0893accc7.jpeg",
        price: 159.99
    },
    {
        name: "Sports T-shirt",
        img: "../../imges/Men_picture/Men's Colorblock Short Sleeve Football Jersey….jpeg",
        price: 139.99
    },
    {
        name: "Luxurious Hudi",
        img: "../../imges/Men_picture/Scopri il look senza tempo con il Walter….jpeg",
        price: 49.99
    },
    {
        name: "Short",
        img: "../../imges/Men_picture/Shorts Masculina com Bolso Diagonal, Cordão na….jpeg",
        price: 19.99
    },
    {
        name: "Complete set",
        img: "../../imges/Men_picture/Solid Color Round Neck Short Sleeve T-Shirt And….jpeg",
        price: 39.99
    },
    {
        name: "Bright white",
        img: "../../imges/Men_picture/ผู้ชาย แขนสั้น มีเท็กซ์เจอร์ เสื้อเชิ้ต และ….jpeg",
        price: 59.99
    },
    {
        name: "Hawaiian T-shirt",
        img: "../../imges/Men_picture/Hawaiian Men's Shirt Summer Outdoor Beach Men's….jpeg",
        price: 39.99
    }
];



products.forEach(product => {
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


/********************************************************/
/*load more*/
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


/*************************************************************************************/






























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



