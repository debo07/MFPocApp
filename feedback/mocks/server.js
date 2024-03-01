import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

// 2. Describe network behavior with request handlers.
const worker = setupWorker(
    http.get("/api/data", ({ request, params, cookies }) => {
        return HttpResponse.json(
            {
                message: "Mocked response",
            },
            {
                status: 202,
                statusText: "Mocked status",
            },
        );
    }),
);

export default worker;
