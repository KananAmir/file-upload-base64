let form = document.querySelector("form");
let productName = document.querySelector("#product-name");
let price = document.querySelector("#product-price");
let photo = document.querySelector("#product-photo");

const BASE_URL = "http://localhost:8080/products";
let base64;

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let product = {
    productName: productName.value,
    price: price.value,
    imgUrl: base64,
  };

  await axios.post(BASE_URL, product);
});

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  base64 = await convertBase64(file);
  // console.log(file);
};

photo.addEventListener("change", (e) => {
  //   console.log(e.target.files);
  uploadImage(e);
});
