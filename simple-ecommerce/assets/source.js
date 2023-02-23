document.getElementById("year").innerHTML = new Date().getFullYear();

function buy(product_name, product_price) {
    const message = `Halo Saya Mau Beli ${product_name}`
    const whatsapp = `https://wa.me/628170526482?text=${message} - ${product_price}`
    open(whatsapp, "_blank");

}

function chat() {
    alert("Halo Min Saya Mau Tanya Nih...");
    const whatsapp = `https://wa.me/628170526482?text=${message} - ${product_price}`
    open(whatsapp, "_blank");
}