export function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.async = true;

    script.onload = () => {
      resolve();
    };

    script.onerror = (error) => {
      reject(error);
    };

    document.body.appendChild(script);
  });
}
