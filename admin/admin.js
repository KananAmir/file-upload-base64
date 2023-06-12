let tBody = document.querySelector("tbody");
const BASE_URL = "http://localhost:8080/products";

function drawTable(arr) {
  tBody.innerHTML = "";

  arr.forEach((element) => {
    tBody.innerHTML += `
        <tr>
            <td>${element.id}</td>
            <td>${element.productName}</td>
            <td>${element.price}</td>
            <td><img  src="${element.imgUrl}"/></td>
            <td><button class="bg-danger">delete</button></td>
            <td><button class="bg-warning">edit</button></td>
        </tr>
    `;
  });
}

window.addEventListener("load", async function () {
  let response = await axios(BASE_URL);
  drawTable(response.data);
});
