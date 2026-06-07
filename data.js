const ad = ["Strawberry Sundae", "Chocolate Cone", "Vanilla Sundae", "Caramel Scoop", "Choco Delight", "Berry Scoop"]

const kateqoriya = ["Sundae", "Cone", "Sundae", "Scoop", "Scoop", "Scoop"]

const aciklama = ["Strawberry syrup, whipped cream", "Classic chocolate dip cone", "Vanilla with caramel drizzle", "Butter caramel, nuts topping", "Triple chocolate scoops", "Mixed berry fresh scoop"]

const cal = ["250 kal, 120g", "180 kal, 95g", "220 kal, 110g", "200 kal, 100g", "310 kal, 140g", "190 kal, 105g"]

const img = [
    "https://themewagon.github.io/Romyk/images/img-1.png",
    "https://themewagon.github.io/Romyk/images/img-2.png",
    "https://themewagon.github.io/Romyk/images/img-1.png",
    "https://themewagon.github.io/Romyk/images/img-3.png",
    "https://themewagon.github.io/Romyk/images/img-4.png",
    "https://themewagon.github.io/Romyk/images/img-5.png"
]

const qiymet = ["$10", "$12", "$8", "$9", "$14", "$10"]


let container = document.getElementById('products-container');


for (let i = 0; i < ad.length; i++) {
    container.innerHTML += `
        <div class="product-card">
            <div class="card-image-wrapper">
                <img src="${img[i]}">
                <div class="price-tag">${qiymet[i]}</div>
            </div>
            <div class="card-content">
                <h3>${ad[i]}</h3>
                 <p style="font-size: 12px; color: #888; margin-bottom: 5px;">${kateqoriya[i]}</p>
                 <p style="font-size: 12px; color: #888; margin-bottom: 5px;">${cal[i]}</p>
                 <p style="font-size: 13px; color: #666; margin-bottom: 15px;">${aciklama[i]}</p>
                
                <a href="" class="btn-cart">Add To Cart</a>
            </div>
        </div> `;
}

function menuchange() {
    let navbar = document.getElementById('navbar');

    if (navbar.style.display === 'flex') {
        navbar.style.display = 'none';
    } else {

        navbar.style.display = 'flex';
    }
}

