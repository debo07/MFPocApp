import faker from "faker";

const cartText = `<div>Total cart items ${faker.random.number(10)}</div>`;

document.querySelector('#cart-section').innerHTML = cartText;