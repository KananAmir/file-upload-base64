let products = document.querySelector(".products");
const BASE_URL = "http://localhost:8080/products";

function drawCards(arr) {
  products.innerHTML = "";

  arr.forEach((element) => {
    products.innerHTML += `
    <div class="col col-4">
    <div class="card" style="width: 18rem">
      <img src="${element.imgUrl}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element.productName}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <h6><i>Price:</i> ${element.price}</h6>
        <a href="#" class="btn btn-primary">More Details</a>
      </div>
    </div>
  </div>
    `;
  });
}

window.addEventListener("load", async function () {
  let response = await axios(BASE_URL);
  drawCards(response.data);
  //   console.log(response.data);
});
