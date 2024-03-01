import { mount as productMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";
import { mount as feedbackMount } from "feedback/feedback";
import enableMocking from "feedback/utils";
import worker from "../mocks/server";

console.log("This is container");
async function enableSelfMocking() {
    return worker.start();
    return worker.start({
        serviceWorker: {
            url: "/mockServiceWorkerSelf.js",
        },
    });
}

const fetchData = async () => {
    try {
        const response = await fetch("/api/data1");
        const data = await response.json();
        console.log("Data for /data1:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

enableSelfMocking().then(() => {
    console.log("Self mocking enabled");
    fetchData().then(data => {
        const el = document.querySelector("#data-section");
        el.innerHTML = JSON.stringify(data, null, 2);
    });
});

enableMocking("/mockServiceWorkerFeedback.js").then(() => {
    console.log("Remote Mocking enabled");
    productMount(document.querySelector("#products-list"));
    cartMount(document.querySelector("#cart-section"));
    feedbackMount(document.querySelector("#feedback-section"));
});
