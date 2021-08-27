import faker from "faker";

let products = "";

for (let index = 0; index < 5; index++) {
  const productName = faker.commerce.productName();
  products += `<div>${productName}</div>`;
}

document.querySelector("#products-list").innerHTML = products;
