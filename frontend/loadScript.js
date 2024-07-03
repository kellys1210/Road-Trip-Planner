export function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }