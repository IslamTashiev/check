// src/serviceWorkerRegistration.js

// This function registers the service worker
export function register(config) {
  if ("serviceWorker" in navigator) {
    // Define the service worker's scope and URL
    const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

    window.addEventListener("load", () => {
      const swRegistration = navigator.serviceWorker.register(swUrl).then(
        (registration) => {
          // Check if the registration is successful
          console.log("Service Worker registered with scope: ", registration.scope);
          if (config && config.onSuccess) {
            registration.addEventListener("updatefound", () => {
              const installingWorker = registration.installing;
              installingWorker.addEventListener("statechange", () => {
                if (installingWorker.state === "installed") {
                  if (navigator.serviceWorker.controller) {
                    // New content is available
                    console.log("New content is available; please refresh.");
                    if (config.onUpdate) {
                      config.onUpdate(registration);
                    }
                  } else {
                    // Content is cached for offline use
                    console.log("Content is cached for offline use.");
                    if (config.onSuccess) {
                      config.onSuccess(registration);
                    }
                  }
                }
              });
            });
          }
        },
        (error) => {
          console.error("Error during service worker registration:", error);
        }
      );
    });
  }
}

// This function unregisters the service worker
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error("Error during service worker unregistration:", error);
      });
  }
}
