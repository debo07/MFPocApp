import faker from "faker";

const mount = el => {
    const cartText = `<div>Total cart items ${faker.random.number(10)}</div>`;
    el.innerHTML = cartText;
}

// Standalone mode - where this "cart" app will be tested separately.
if(process.env.NODE_ENV === "development") {
    const localElement = document.querySelector("#local-cart-section");
    // Assuming div with "local-cart-section" id won't be available in the host app.
    if(localElement) {
        mount(localElement);
    }
}

// Where it will be used by Host app, they will pass their root element
export { mount };
