const product = [
    {
        id: 0,
        image: 'image/Phone.jpg',
        title: 'Aodoeu',
        price: '$35.00',
    },
    {
        id: 1,
        image: 'image/S23.png',
        title: 'Samsung Galaxy S23',
        price: '$70.00',
    },
    {
        id: 2,
        image: 'image/Phone1.png',
        title: 'Samsung',
        price: '$35.00',
    },
];

const categories = [...new Set(product.map((item) => item.title))];
let i = 0;

document.getElementById('root').innerHTML = product.map((item) => {
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${item.image}></img>
            </div>
            <div class="bottom">
                <p>${item.title}</p>
                <h2>${item.price}</h2>
                <button onclick="addtocart(${item.id})">Add to cart</button>
            </div>
        </div>`
    );
}).join('');

var cart = [];

function addtocart(itemId) {
    cart.push({ ...product.find((item) => item.id === itemId) });
    displaycart();
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById('count').innerHTML = cart.length;

    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ 0.00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + parseFloat(price.slice(1));
            document.getElementById("total").innerHTML = "$ " + total.toFixed(2);
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size:15px;'>${price}</h2>
                    <i class='fa-solid fa-trash' onclick='delElement(${j++})'></i>
                </div>`
            );
        }).join('');
    }
}