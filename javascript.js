const priceCoach = 9.95;

//event listener toevoegen aan de button
let button = document.getElementById("inCart");
button.addEventListener("click", addToCart);

//event listener toevoegen aan de qty input field
let qty = document.getElementById("qty");
qty.addEventListener("change", changePrice);

//event listener toevoegen aan de shopping cart icon
let cartIcon = document.getElementById("cart_icon");
cartIcon.addEventListener("click", openCart);

//event listerener toevoegen aan close button
let cartClose = document.getElementById("minimalize");
cartClose.addEventListener("click", closeCart);

//bestelling aan winkelwagen toevoegen
function addToCart() 
{
    //shopping cart laten zien
    let shoppingCart = document.getElementById("shopping_cart");
    shoppingCart.style.display = "block";

    //aantal ophalen
    let qty = document.getElementById("qty");

    //product invullen
    document.getElementById("items").innerHTML = "Coaster Coach  <b>x"+qty.value+"</b><br>Totaal= <b>&euro;"+calcPrice(qty.value)+"</b><br><br><button id='toPayment' onclick='toPaymentPage("+qty.value+")'>Afrekenen</button>";

    //form resetten
    resetForm();
}

function openCart()
{
    //shopping cart laten zien
    let shoppingCart = document.getElementById("shopping_cart");
    shoppingCart.style.display = "block";
}

function closeCart()
{
    //shopping cart laten zien
    let shoppingCart = document.getElementById("shopping_cart");
    shoppingCart.style.display = "none";
}

//de prijs veranderen
function changePrice()
{
    //prijs ophalen
    let priceField = document.getElementById("price");
    let hiddenPriceField = document.getElementById("priceHidden");
    let totalPrice = calcPrice(this.value);

    priceField.innerHTML = "Prijs: &euro;"+ totalPrice;
    hiddenPriceField.value = totalPrice;
}

function calcPrice(qty)
{   
    //prijs berekenen en returnen met maar 2 decimalen
    return (qty*priceCoach).toFixed(2);
}

//form resetten
function resetForm()
{
    let qty = document.getElementById("qty");
    let priceField = document.getElementById("price");
    let hiddenPriceField = document.getElementById("priceHidden");

    let totalPrice = calcPrice(1);

    qty.value = 1;
    priceField.innerHTML = "Prijs: &euro;"+ totalPrice;
    hiddenPriceField.value = totalPrice;
}

function toPaymentPage(qty)
{
    window.location = 'checkout.php?qty='+qty;
}
