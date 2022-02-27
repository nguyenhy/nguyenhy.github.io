/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2022/02/19/disclaimer/index.html",
    "revision": "240c9f7bbb045ae916c8261ee319d4d8"
  },
  {
    "url": "2022/02/19/introduction-to-web-development/index.html",
    "revision": "e0e83d0fd90dd99b107edb920ee56b44"
  },
  {
    "url": "2022/02/24/introduction-to-html/index.html",
    "revision": "58a7f0ddb9c880f5ed750e80914e1db9"
  },
  {
    "url": "404.html",
    "revision": "ff46304e7f9266e2af4da823dd34cac3"
  },
  {
    "url": "assets/css/0.styles.8b92677f.css",
    "revision": "d10f4f0d64416b61a819a72a3c2fa952"
  },
  {
    "url": "assets/img/hyn.1891db50.svg",
    "revision": "1891db506dc580917782fb4962209cd0"
  },
  {
    "url": "assets/js/1.62443f30.js",
    "revision": "371dd0e3b25e61bf3b509a0f020ea536"
  },
  {
    "url": "assets/js/10.d3970e1d.js",
    "revision": "2d9efd07373d0223823c9800723cb3d8"
  },
  {
    "url": "assets/js/11.1183bfd6.js",
    "revision": "4cfff2a0ed57daa9de6c91c3fee3cd69"
  },
  {
    "url": "assets/js/12.8bbbb310.js",
    "revision": "3a4a84cdff25b7a914af1c52aa190345"
  },
  {
    "url": "assets/js/13.db598152.js",
    "revision": "4fa2fb45fb0c5f13e9c075d26cdf2032"
  },
  {
    "url": "assets/js/14.91fb53c2.js",
    "revision": "63c81a212656f7d9515e7e50fa87e713"
  },
  {
    "url": "assets/js/15.62f8a05a.js",
    "revision": "097652a2a83ef6a13a2d12fb5e832649"
  },
  {
    "url": "assets/js/16.04cb4d15.js",
    "revision": "15fb978d35c65ce9da4256aaf2805929"
  },
  {
    "url": "assets/js/17.591fa5cc.js",
    "revision": "66372d5df765fa946b2b6451346ccc04"
  },
  {
    "url": "assets/js/18.b24c5bda.js",
    "revision": "8a4ab1dab4bfc2fd2e9f9551105e5ae3"
  },
  {
    "url": "assets/js/19.b687f9ae.js",
    "revision": "8763565d5d7f1672009536986084b5f5"
  },
  {
    "url": "assets/js/2.0d2980c1.js",
    "revision": "8e7b32be644aa16559f0ec2358f7b116"
  },
  {
    "url": "assets/js/20.ffb367c2.js",
    "revision": "8ceca3e701b1885d2f103430d8ec908e"
  },
  {
    "url": "assets/js/4.512d04c8.js",
    "revision": "28a29b6ff9884de060c5a8053f1c95c2"
  },
  {
    "url": "assets/js/5.49282b20.js",
    "revision": "cc299115fce2ea34824498b74051bc44"
  },
  {
    "url": "assets/js/6.3f22b853.js",
    "revision": "a4d0dbfb3c33255eb6277a7f75343f6c"
  },
  {
    "url": "assets/js/7.2d06d015.js",
    "revision": "34a7147a788c99582f5c469523a7b42d"
  },
  {
    "url": "assets/js/8.b533d172.js",
    "revision": "093e10e233b56692e2f022b98b4742e6"
  },
  {
    "url": "assets/js/9.864cef8d.js",
    "revision": "185dd206f90a994bee1ba32c4a84646b"
  },
  {
    "url": "assets/js/app.67090cf4.js",
    "revision": "a3985e9452589adde1daa142d60e8ae5"
  },
  {
    "url": "blog/index.html",
    "revision": "16aa5dbea451734ed8b8daaf48ecc1ea"
  },
  {
    "url": "index.html",
    "revision": "9adaf3f2135f30805073c4b026993f6d"
  },
  {
    "url": "tag/beginner/index.html",
    "revision": "685f2bc2b576ee72bcd3dc392a14f537"
  },
  {
    "url": "tag/css/index.html",
    "revision": "c8397821acb9d81a33f3dcd981a0badd"
  },
  {
    "url": "tag/d19/index.html",
    "revision": "47f7a06ed4cb890e795e18ea08067fe6"
  },
  {
    "url": "tag/d24/index.html",
    "revision": "125ddd77209224b4ac5d121c2e72eaf5"
  },
  {
    "url": "tag/disclaimer/index.html",
    "revision": "b75ad5b747d2decc908c47552a93e0bd"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "86aef0eed93f5e30c05b25e4a8b5cdbc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "b6116597f7e7c437b1919e310072eda3"
  },
  {
    "url": "tag/hyn/index.html",
    "revision": "000ab14505d2028f46a41b5d19807371"
  },
  {
    "url": "tag/index.html",
    "revision": "f6240401a35bfdbc79c6e84f12d2314b"
  },
  {
    "url": "tag/introduction/index.html",
    "revision": "07a4aa3e472d77757c26448667ea8701"
  },
  {
    "url": "tag/js/index.html",
    "revision": "058a8f8bb6ca8f0107557635b1b2cc66"
  },
  {
    "url": "tag/m2/index.html",
    "revision": "501b950eb029a556e1f8a3b35b1fdb5c"
  },
  {
    "url": "tag/web/index.html",
    "revision": "4409ca593dee30ed823dafa032aa89e2"
  },
  {
    "url": "tag/y2022/index.html",
    "revision": "866e84b12c4cafacf53b4ebd6294dbb6"
  },
  {
    "url": "tag/y2022/m2/index.html",
    "revision": "5c808bcb3350897ca9d7b4e88213c69a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
