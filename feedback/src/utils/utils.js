import worker from "../../mocks/server";

async function enableMocking(serviceWorkerPath) {
    return serviceWorkerPath
        ? worker.start({
              serviceWorker: {
                  url: serviceWorkerPath,
              },
          })
        : worker.start();
}
export default enableMocking;
