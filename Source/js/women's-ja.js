const loadMoreBtn = document.getElementById("loadMore");
const cardContainer = document.querySelector(".cards-container");





/*********************************************************/
const womenProducts = [
    { name: "Kanzah", img: "../../imges/Women_picture/9ca4ad05-e139-47a8-ba31-363569764f30.jpeg", price: 29.99 },
    { name: "luxurious jacket", img: "../../imges/Women_picture/ed08109d-7959-40af-a3a0-1b00b2457c19.jpeg", price: 39.99 },
    { name: "jean jacket", img: "../../imges/Women_picture/f3131660-e582-4bb2-b569-49ab96055c7c.jpeg", price: 29.99 },
    { name: "Colorful hoodie", img: "../../imges/Women_picture/9d5db994-80e8-4d6a-8d56-13343a4edf68.jpeg", price: 39.99 },
    { name: "double denim jacket", img: "../../imges/Women_picture/7a122e3a-4a68-45a7-ad68-1922ea53d3df.jpeg", price: 49.99 },
    { name: "Formal Fashion", img: "../../imges/Women_picture/Upgrade your professional wardrobe with our Men's….jpeg", price: 149.99 },
    { name: "The beauty of eloquence", img: "../../imges/Women_picture/fb73562e-5379-4bcb-9eff-a5a036ba0fa5.jpeg", price: 29.99 },
    { name: "Complete set", img: "../../imges/Women_picture/4c9951ac-fa4d-4e19-904b-3e7508a0538e.jpeg", price: 99.99 },
    { name: "Silk pants", img: "../../imges/Women_picture/Starten Sie mühelos in den Tag mit dieser….jpeg", price: 14.99 },
    { name: "Solid dress", img: "../../imges/Women_picture/ชุดบอดี้คอนตัวเข้ารูป ช่วงปลายไม่สมมาตร….jpeg", price: 34.99 },
    { name: "Black dress", img: "../../imges/Women_picture/f6f3e28f-6c35-4ee0-837c-dcb361acffc4.jpeg", price: 49.99 },
    { name: "Sami Formal", img: "../../imges/Women_picture/82dc83ed-788b-461c-bcf6-24aac07e59a5.jpeg", price: 49.99 },
    { name: "Sami dress", img: "../../imges/Women_picture/Temu _ Explore the Latest Clothing, Beauty, Home….jpeg", price: 34.99 },
    { name: "Sami dress", img: "../../imges/Women_picture/417627c7-c3f3-4187-b80a-e8538aa56d7d.jpeg", price: 39.99 },
    { name: "Red dress", img: "../../imges/Women_picture/This gown is giving body, confidence, and main….jpeg", price: 44.99 },
    { name: "Short green dress", img: "../../imges/Women_picture/Swiss Dot Tie Spalla Pieghevoli Busto Cami Abito….jpeg", price: 39.99 },
    { name: "Short red dress", img: "../../imges/Women_picture/3ac33270-5729-4bc9-9783-8649c5263f37.jpeg", price: 59.99 },
    { name: "Luxury hoodie", img: "../../imges/Women_picture/Tween Boy Casual Simple Cartoon Letter & Smiling….jpeg", price: 59.99 },
    { name: "Kanzah", img: "../../imges/Women_picture/Style_Casual _nType_Pullovers _nNeckline_Round….jpeg", price: 39.99 },
    { name: "Hoodie Pink", img: "../../imges/Women_picture/Baby Pink Casual Collar Long Sleeve Fabric….jpeg", price: 59.99 },
    { name: "Hoodie butterflies", img: "../../imges/Women_picture/cc0ffe30-0545-49c3-afb4-9b95b499b82e.jpeg", price: 59.99 },
    { name: "Complete set", img: "../../imges/Women_picture/2pcs Tween Girl Ribbed Ruched Short Sleeve Tee….jpeg", price: 159.99 },
    { name: "New York Baby", img: "../../imges/Women_picture/Casual Colorblock Letter Print Round Neck Short….jpeg", price: 39.99 },
    { name: "White Krotob", img: "../../imges/Women_picture/6636fc9b-1015-4282-b858-ae854265245e.jpeg", price: 29.99 },
    { name: "Black Kroptop", img: "../../imges/Women_picture/76201ad4-7052-4ba1-9f95-33debd88d2e2.jpeg", price: 54.99 },
    { name: "pocket", img: "../../imges/Women_picture/48e17f82-8c75-4957-bf45-8ffe3dfd2ae5.jpeg", price: 14.99 },
    { name: "Classic Girl", img: "../../imges/Women_picture/ed1fe746-6615-4aaf-b87b-b7195362d8bd.jpeg", price: 139.99 },
    { name: "Red dress", img: "../../imges/Women_picture/83f71809-9987-40e8-8722-296fcd6c6897.jpeg", price: 149.99 },
    { name: "White dress", img: "../../imges/Women_picture/bc418d9b-4a95-4dde-8bc7-cdf49f404bbf.jpeg", price: 119.99 },
    { name: "White dress", img: "../../imges/Women_picture/1c0dafb9-8624-440b-817e-30edea425623.jpeg", price: 139.99 },
    { name: "Black dress", img: "../../imges/Women_picture/➳ vintage 1950s dress  _ black crepe chiffon….jpeg", price: 159.99 },
    { name: "Black dress", img: "../../imges/Women_picture/Item Details ： Product Number _ fg7701 Fabric….jpeg", price: 139.99 }
];


womenProducts.forEach(product => {
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


/*********************************************************/
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




/*****************************************/



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

