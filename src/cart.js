
let label = document.getElementById("label");

let shoppingCart = document.getElementById("shopping-cart");


let basket = JSON.parse(localStorage.getItem("data")) || []


//  To calculate all the numbers
let calculation = () => {
    let cartIcon = document.getElementById("cardAmount");
     cartIcon.innerHTML = basket.map((x)=> x.item).reduce((x,y)=> x + y, 0);
    // cartIcon.innerHTML = 100;
    
};

calculation();

let generateCartItems = () => {
    if(basket.length !== 0){ 
        shoppingCart.innerHTML = `
        label.innerHTML =
            <h2>Cart is Empty</h2>
            <a href="index.html">
            <button class="HomeBtn">Back to Home</button>
            </a>
        `;
    } else {
    }
};

generateCartItems();