function appendProduct() {
    let productArr2 = JSON.parse(localStorage.getItem("products")) || [];

    let allProducts = document.getElementById("all_products");

    productArr2.forEach(function (elem, index) {
        let div = document.createElement("div");

        let image = document.createElement("img");
        let type = document.createElement("h2");
        let desc = document.createElement("p");
        let price = document.createElement("h3");
        let btn = document.createElement("button");

        image.src = elem.image;
        type.innerText = elem.type;
        desc.innerText = elem.desc;
        price.innerText = elem.price;
        btn.innerText = "Remove";

        btn.addEventListener("click", function() {
            remove(index);
        });

        div.append(image, type, desc, price,btn);
        all_products.append(div);

    });
}
appendProduct();

function remove(index) {
    let  productArr2 = JSON.parse(localStorage.getItem("products")) || [];

    let newProductArr = productArr2.filter(function(elem, index) {
        
        if(i !==index)
        {
           
        }
    });
    localStorage.setItem("products", JSON.stringify(newProductArr));
    appendProduct();
}