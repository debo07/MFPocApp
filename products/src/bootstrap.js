import faker from "faker";

const mount = el => {
    let products = "";

    for (let index = 0; index < 5; index++) {
        const productName = faker.commerce.productName();
        products += `<div>${productName}</div>`;
    }

    el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
    const localElement = document.querySelector("#local-products-list");
    // Assuming div with "local-products-list" id won't be available in the host app.
    if (localElement) {
        mount(localElement);
    }
}

export { mount };
