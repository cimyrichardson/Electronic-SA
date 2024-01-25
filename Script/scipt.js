const product = [
    {
        id: 1,
        image: 'image/Iphone1.jpg',
        title: 'Iphone 11 64GB -Noir',
        price: '$550.00',
    },
    {
        id: 2,
        image: 'image/Iphone2.jpg',
        title: 'Iphone 13 PRO 256 Go Bleu',
        price: '$1500.00',
    },
    {
        id: 3,
        image: 'image/S23.png',
        title: 'Galaxy S23 8/128 Go',
        price: '$799.00',
    },
    {
        id: 4,
        image: 'image/Iphone.jpg',
        title: 'Iphone',
        price: '$350.00',
    },
    {
        id: 5,
        image: 'image/Ipad2.jpg',
        title: 'Ipad Mini 64 Go WIFI Argent',
        price: '$435.00',
    },
    {
        id: 6,
        image: 'image/Ipad.jpg',
        title: 'Ipad',
        price: '$350.00',
    },
    {
        id: 7,
        image: 'image/watch.jpg',
        title: 'Smart Watch',
        price: '$350.00',
    },
    {
        id: 8,
        image: 'image/Watch2.jpg',
        title: 'Smart Watch',
        price: '$350.00',
    },
    {
        id: 9,
        image: 'image/casque2.jpg',
        title: 'Headset',
        price: '$350.00',
    },
    {
        id: 10,
        image: 'image/casque.jpg',
        title: 'Headset',
        price: '$350.00',
    },
    {
        id: 11,
        image: 'image/Laptop.jpg',
        title: 'Laptop',
        price: '$350.00',
    },
    {
        id: 12,
        image: 'image/Laptop1.jpg',
        title: 'HP INTEL PENTIUM 500 Go 15.6"',
        price: '$430.00',
    },
    {
        id: 13,
        image: 'image/Laptop2.jpg',
        title: 'ORDINATEUR PORTABLE HP INTEL',
        price: '$375.00',
    },
    {
        id: 14,
        image: 'image/Laptop3.jpg',
        title: 'ORDINATEUR PORTABLE LENOVO',
        price: '$470.00'
    },
    {
        id: 15,
        image: 'image/Tablette.jpg',
        title: 'Tablette',
        price: '$470.00'
    },
    {
        id: 16,
        image: 'image/Tablette2.jpg',
        title: 'tablette amazon fire 10" 64go',
        price: '$200.00'
    },
];

const categories = [...new Set(product.map((item) => item.title))];
let i = 0;

document.getElementById('root').innerHTML = product.map((item) => {
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${item.image} alt=${item.title}></img>
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