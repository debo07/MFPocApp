import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";
import { mount as feedbackMount } from "feedback/feedback";
import enableMocking from "feedback/utils";
import worker from "../mocks/server";

console.log("This is container");
async function enableSelfMocking() {
    return worker.start({
        serviceWorker: {
            url: "/mockServiceWorkerSelf.js",
        },
    });
}

enableSelfMocking().then(() => {
    console.log("Self mocking enabled");
    enableMocking("/mockServiceWorkerFeedback.js").then(() => {
        console.log("Remote Mocking enabled");
        productMount(document.querySelector("#products-list"));
        cartMount(document.querySelector("#cart-section"));
        feedbackMount(document.querySelector("#feedback-section"));
    });
});
