fetch("https://kea-alt-del.dk/t7/api/products/")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kaldershowProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fant template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    //produkt er udsolgt
    copy.querySelector("div").classList.add("soldOut");
  }

  copy.querySelector("p").textContent = product.discount;
  if (product.discount) {
    //produkt er discount/udsalg
    copy.querySelector("div").classList.add("discount");
  }

  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".brand").textContent = product.brandname;
  copy.querySelector(".price").textContent = product.price;

  //appende
  document.querySelector("main").appendChild(copy);
}

/*
      <div class="smallProduct img1_newin"><a href="product.html"><img
                            src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Blå trøje"></a>
                    <p>Nike</p>
                    <p>Sahara Team India Fanwear Round Neck Jersey</p>
                    <p>895 DKK</p>

                </div>
                <p class="new newin1">NEW</p>
                */

/* 	
{
  "id": 1165,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "season": "Summer",
  "productionyear": 2013,
  "usagetype": "Sports",
  "productdisplayname": "Mean Team India Cricket Jersey",
  "price": 2495,
  "discount": 45,
  "brandname": "Nike",
  "soldout": 0
}
*/
