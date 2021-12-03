//Select Elemnts
const productsEl = document.querySelector(".container");

//Render Products
function renderProducts(){
    pizzas.forEach((product) => {
  /*      productsEl.innerHTML += `
        <header class="header">
        <img src="img/logopizza1.png" alt="width=35" height="35">
        <div class="header-element"> 
            <h1 id=${product.title}></h1>
            <h3>PIZZA OF THE MONT</h3>
        </div>
        </header>
    <main class="main">
        <section class="main-section1">
            <h4 class="main-section1-text">INFORMATION</h4>
            <p id="${product.info}" class="main-section1--info"></p>
            <section class="main-section3">
                    <h4 class="main-section3--text">PRICE</h4>
                    <p id="${product.price}" class="precio" type="value"></p>
                    <div class="main-section3--add">
                        <button onclick="addToCart(${product.id})" class="addtocart">Add To Box</button>
                    </div>
                </div>
                `;
    });
}
renderProducts();

//Add to cart
function addToCart(id){
    console.log(id);
}

