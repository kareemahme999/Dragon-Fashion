
const cardContainer = document.querySelector(".cards-container");
const loadMoreBtn = document.getElementById("loadMore");
/********************************************************/


const accessoriesProducts = [
    { name: "Black Ocean", img: "../../imges/Accessories_picture/c350bd51-920e-4508-9e0c-45f1fe522a7f.jpeg", price: 159.99 },
    { name: "Silver Spirit", img: "../../imges/Accessories_picture/bfb4e2b9-084d-4255-9a3a-5d69f6771d19.jpeg", price: 139.99 },
    { name: "Bronze Flame", img: "../../imges/Accessories_picture/45ef2fc4-05b6-4b2c-a2d9-a8fa98f74ff0.jpeg", price: 175.99 },
    { name: "Crimson Chill", img: "../../imges/Accessories_picture/31e7f886-9743-4f73-85c5-7141c0742818.jpeg", price: 139.99 },
    { name: "Arctic Glow", img: "../../imges/Accessories_picture/1ชิ้น นาฬิกาข้อมือผู้ชาย คุณภาพสูง แบรนด์ยอดนิยม….jpeg", price: 179.99 },
    { name: "Steel Sky", img: "../../imges/Accessories_picture/1f4ab638-f03d-40b3-8bb5-0fc347b05c83.jpeg", price: 149.99 },
    { name: "Royal Spark", img: "../../imges/Accessories_picture/Men Round Pointer Quartz Watch Father  Trendy….jpeg", price: 199.99 },
    { name: "Blue Monarch", img: "../../imges/Accessories_picture/Elevate Your Style with Luxury Introducing our….jpeg", price: 169.99 },
    { name: "Midnight Box", img: "../../imges/Accessories_picture/Shop for AX Armani Exchange Analog Bracelet Watch….jpeg", price: 249.99 },
    { name: "Golden Racer", img: "../../imges/Accessories_picture/Relógio Quartz de Homem REWARD, Estilo de Moda de….jpeg", price: 234.99 },
    { name: "Retro Steel", img: "../../imges/Accessories_picture/Top On Sale Product Recommendations!;POEDAGAR Men….jpeg", price: 189.99 },
    { name: "Nude Harmony", img: "../../imges/Accessories_picture/24c92904-64fb-4c70-a56c-d215269663c0.jpeg", price: 129.99 },
    { name: "Blush Pearl", img: "../../imges/Accessories_picture/1قطعة ساعة كوارتز مزينة بالراين ستون و 1قطعة سوار….jpeg", price: 119.99 },
    { name: "Golden Maze", img: "../../imges/Accessories_picture/Versace.jpeg", price: 139.99 },
    { name: "Soft Sand", img: "../../imges/Accessories_picture/Stick indexes lend a minimalist feel to this sleek….jpeg", price: 144.99 },
    { name: "Velvet Rose", img: "../../imges/Accessories_picture/Product information_ Color_ K1049S Brown, K1049S….jpeg", price: 159.99 },
    { name: "Crystal Bloom", img: "../../imges/Accessories_picture/مجموعة ساعة كوارتز نسائية ذات إطار دائري وسوار….jpeg", price: 179.99 },
    { name: "Sunset Touch", img: "../../imges/Accessories_picture/new female temperament diamond watches.jpeg", price: 159.99 },
    { name: "Icy Cloud", img: "../../imges/Accessories_picture/1358c028-6f44-45cd-91db-4f3aa8bfd2d0.jpeg", price: 99.99 },
    { name: "Golden Beads", img: "../../imges/Accessories_picture/4bb9cfb9-4583-4269-890a-59a826e457ab.jpeg", price: 89.99 },
    { name: "Royal Step", img: "../../imges/Accessories_picture/Description.jpeg", price: 189.99 },
    { name: "Elegant Stride", img: "../../imges/Accessories_picture/Casual Leather Shoes For Men - Korean Style….jpeg", price: 159.99 },
    { name: "Black Vibe", img: "../../imges/Accessories_picture/High Quality Sneakers Men Summer Breathable….jpeg", price: 69.99 },
    { name: "White Pulse", img: "../../imges/Accessories_picture/Order now and follow.jpeg", price: 89.99 },
    { name: "Blue Bloom", img: "../../imges/Accessories_picture/One Piece Air Force 1 Custom Check more at….jpeg", price: 74.99 },
    { name: "Art Kick", img: "../../imges/Accessories_picture/Spider-Man Air Force 1 Custom Check more at….jpeg", price: 79.99 },
    { name: "Floral Drive", img: "../../imges/Accessories_picture/ebf35fed-a25f-4258-8df1-9861cc11cc84.jpeg", price: 99.99 },
    { name: "Petal Walk", img: "../../imges/Accessories_picture/c9db6caa-f195-41dc-b287-9eacc5fc3d06.jpeg", price: 149.99 },
    { name: "Flora Charm", img: "../../imges/Accessories_picture/2344a7f4-446b-44be-8703-356d43034fd9.jpeg", price: 119.99 },
    { name: "Silky Shadow", img: "../../imges/Accessories_picture/e811ab6a-6ed2-45cf-af65-51221fd089a7.jpeg", price: 89.99 },
    { name: "Velvet Noir", img: "../../imges/Accessories_picture/Objavte podstatu elegancie a autenticity v našej….jpeg", price: 79.99 },
    { name: "Wild Diva", img: "../../imges/Accessories_picture/SPECIFICATIONSWith Platforms_ NoUpper Material….jpeg", price: 239.99 },
    { name: "Frost Queen", img: "../../imges/Accessories_picture/Product information_ Lining material_ Cotton….jpeg", price: 69.99 },
    { name: "Pink Dream", img: "../../imges/Accessories_picture/Product information_ Color_ white, black, pink….jpeg", price: 139.99 },
    { name: "Nude Elegance", img: "../../imges/Accessories_picture/レディース チャンキーヒール オープントゥ スリッポンミュール、夏に最適なファッショナブルなサンダル….jpeg", price: 79.99 },
    { name: "Snow Lace", img: "../../imges/Accessories_picture/Women's Thick Heel High Heel Sandals, Outdoor….jpeg", price: 59.99 }
];







accessoriesProducts.forEach(product => {
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

