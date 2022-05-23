//store the products array in localstorage as "products"
function product1(type, desc, price, image) {
    this.type = type;
    this.desc = desc;
    this.price = price;
    this.image = image;
}


function storeData(elem) {
    elem.preventDefault();

    let div = document.getElementById("products");

    let type = div.type.value;
    let desc = div.desc.value;
    let price = div.price.value;
    let image = div.image.value;
   // console.log(type, desc, price, image)

   let p1 = new product1(type, desc, price, image);

   let productArr = JSON.parse(localStorage.getItem("products")) || [];

   productArr.push(p1);
   localStorage.setItem("products", JSON.stringify(productArr));
  window.location.href="index.html"
}
