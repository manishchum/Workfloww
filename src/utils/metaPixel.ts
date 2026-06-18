const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

let pixelInitialized = false;

export const initMetaPixel = () => {
  if (pixelInitialized) return;

  if (!META_PIXEL_ID) {
    console.warn("Meta Pixel ID missing");
    return;
  }

  // Pixel script already exists
  if (window.fbq?.loaded) {
    pixelInitialized = true;
    window.fbq("track", "PageView");
    return;
  }

  (function (
    f: Window,
    b: Document,
    e: string,
    v: string
  ) {
    let n: any;
    let t: HTMLScriptElement;
    let s: Element;

    n = (f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    });

    if (!f._fbq) {
      f._fbq = n;
    }

    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;

    s = b.getElementsByTagName(e)[0];
    s.parentNode?.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");

  pixelInitialized = true;
};


export const trackMetaEvent = (
  event: string,
  params = {}
) => {
  if (window.fbq) {
    window.fbq("track", event, params);
  }
};