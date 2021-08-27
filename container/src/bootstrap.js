import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("This is container");
productMount(document.querySelector("#products-list"));
cartMount(document.querySelector("#cart-section"));
