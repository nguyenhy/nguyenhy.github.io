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
    "revision": "e44a641dcddabe97e6cc483b5690e3c7"
  },
  {
    "url": "2022/02/19/introduction-to-web-development/index.html",
    "revision": "af2f00fc8640b181fbda72222cbebac7"
  },
  {
    "url": "2022/02/24/introduction-to-html/index.html",
    "revision": "ce8e6ea4167c2a285d4bdc1de04fe97a"
  },
  {
    "url": "2022/03/05/introduction-to-css/index.html",
    "revision": "39c1c4a0e90143f0a2ef027084a992bf"
  },
  {
    "url": "404.html",
    "revision": "ee66cf5dac7d7015c0c7fd13f0c00dcf"
  },
  {
    "url": "assets/css/0.styles.bd7e4d11.css",
    "revision": "d958d57fe612942bdb21056a7595e09f"
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
    "url": "assets/js/18.a75b17cd.js",
    "revision": "46ca690ccaeff39bbf12160e59d5f18b"
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
    "url": "assets/js/20.02d1b9e2.js",
    "revision": "5ef036bcddce1ba920cf861af5dc4bae"
  },
  {
    "url": "assets/js/21.b7b196c5.js",
    "revision": "29513309506ac87d1396f94aff63e9a6"
  },
  {
    "url": "assets/js/4.86043ea3.js",
    "revision": "9d3da59bd8bc71d120c9740fbf767613"
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
    "url": "assets/js/app.c25cf1dc.js",
    "revision": "ba39c31a735936d3adfe97141e8559a7"
  },
  {
    "url": "blog/index.html",
    "revision": "b593b1a8c8f2e7dfc9350b4638963715"
  },
  {
    "url": "index.html",
    "revision": "6bb4ca398a71e1c05d42de8f00ed5192"
  },
  {
    "url": "tag/beginner/index.html",
    "revision": "d50dab49219b157b1008d134c69d1161"
  },
  {
    "url": "tag/css/index.html",
    "revision": "e0b22ef9fb57cb0df58b4478b03ab7e8"
  },
  {
    "url": "tag/d19/index.html",
    "revision": "51bd1b2b659ac5923df3d84ac4e4449c"
  },
  {
    "url": "tag/d24/index.html",
    "revision": "ef6f86e1c15fe8835ad0aa638bc386bb"
  },
  {
    "url": "tag/d5/index.html",
    "revision": "6dba12dafb15c25a0dcdf7f4a4ba6734"
  },
  {
    "url": "tag/disclaimer/index.html",
    "revision": "e845a90c81cef1bbedc62be56b01415b"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "1843bcfca719e9596da57cc73805629c"
  },
  {
    "url": "tag/html/index.html",
    "revision": "d0566e9786a25b4ff0c561c828e57745"
  },
  {
    "url": "tag/hyn/index.html",
    "revision": "6f60ba8b4a94dd760c4ce6552dcc60be"
  },
  {
    "url": "tag/index.html",
    "revision": "c41a496618ec133e849a9cab2bf929db"
  },
  {
    "url": "tag/introduction/index.html",
    "revision": "6dc175cb4c71220debf16f6056dbec04"
  },
  {
    "url": "tag/js/index.html",
    "revision": "7d8703686df8e2eff8702b17fdfdbfdb"
  },
  {
    "url": "tag/m2/index.html",
    "revision": "7018da8c7cf0ea9f2fb5200ad69361c1"
  },
  {
    "url": "tag/m3/index.html",
    "revision": "13bf8e255629a0b3b56a7e59c18bd22f"
  },
  {
    "url": "tag/web/index.html",
    "revision": "1d14384890c2c75ed5df40511360c407"
  },
  {
    "url": "tag/y2022/index.html",
    "revision": "8a33f12b4692bdf86c95538a33c10163"
  },
  {
    "url": "tag/y2022/m2/index.html",
    "revision": "3b67809fb7626d2987b7fc10f8842026"
  },
  {
    "url": "tag/y2022/m3/index.html",
    "revision": "b240ad404c8d0fecd201f2cccf79e7dc"
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
