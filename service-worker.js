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
    "revision": "795eb6d7fd7a584ee58f53439163fbcc"
  },
  {
    "url": "2022/02/19/introduction-to-web-development/index.html",
    "revision": "2f34cc65162fb25c194eefee56a823e8"
  },
  {
    "url": "2022/02/24/introduction-to-html/index.html",
    "revision": "18ecac23218ae50383c6bc3a548c8224"
  },
  {
    "url": "2022/03/05/introduction-to-css/index.html",
    "revision": "63aafb98dff5d1973fb2f3b346a1ff9a"
  },
  {
    "url": "2022/06/09/brief-introduction-to-flexbox-part-1/index.html",
    "revision": "d5dd0fdad7bec9227d6883ac58bc140a"
  },
  {
    "url": "2022/06/09/brief-introduction-to-flexbox-part-2/index.html",
    "revision": "b3b2221500dbcfb2eebfb498f13cf565"
  },
  {
    "url": "2022/06/09/brief-introduction-to-flexbox-part-3/index.html",
    "revision": "71ff56045a625f4f7e56d6a7ee1b9fc0"
  },
  {
    "url": "404.html",
    "revision": "2c90c65979855e68a901a8ff2aa78665"
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
    "url": "assets/js/21.b8c5e892.js",
    "revision": "224ccd818963e071a0926b2327c9de25"
  },
  {
    "url": "assets/js/22.8c70570d.js",
    "revision": "f9a09f8c40c54f1d49b1d31ff5b2f10b"
  },
  {
    "url": "assets/js/23.8a02d783.js",
    "revision": "e24fe90ab44f98eb4c70943a37a8cef9"
  },
  {
    "url": "assets/js/24.1918a204.js",
    "revision": "13a2232ce9f0147d316c053837f9755f"
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
    "url": "assets/js/app.ba7f646e.js",
    "revision": "98598dadfe6b2edc60186f44b1f53111"
  },
  {
    "url": "blog/index.html",
    "revision": "5c10ceb2d223ffc8fbf4c861a208d4df"
  },
  {
    "url": "index.html",
    "revision": "8e8db3835407a44a3bddafe86d44745d"
  },
  {
    "url": "tag/beginner/index.html",
    "revision": "cd2cf48b6f08dc15ceae9183d723b71c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "8d4c49f5d517f12ab9bf0ca80a3cdb7d"
  },
  {
    "url": "tag/d19/index.html",
    "revision": "d1d4628a4417c3c2eb453895303885d7"
  },
  {
    "url": "tag/d24/index.html",
    "revision": "ab1f377f2649a97f645ca1e96210ae5c"
  },
  {
    "url": "tag/d5/index.html",
    "revision": "3b8af5d989ed9132ef895265caadfe81"
  },
  {
    "url": "tag/d9/index.html",
    "revision": "2b70d5cefd474aec434f2563f0cba764"
  },
  {
    "url": "tag/disclaimer/index.html",
    "revision": "d2ffd40dd0d011bfa614d976c1bfbd21"
  },
  {
    "url": "tag/flexbox/index.html",
    "revision": "403fcf2b64276b8aa41ee5e83eb4b7b8"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "eaff4640b7f30918beca3ff668122ccc"
  },
  {
    "url": "tag/html/index.html",
    "revision": "c112a3735626468765e39c0e4ad747b1"
  },
  {
    "url": "tag/hyn/index.html",
    "revision": "ecc3aa9140ad12eb1411b56a35ec8627"
  },
  {
    "url": "tag/index.html",
    "revision": "ae379b04663447a3d64a2a559a5fc8e0"
  },
  {
    "url": "tag/introduction/index.html",
    "revision": "0ad147f291be9be0c09adb84f0e3e0f0"
  },
  {
    "url": "tag/js/index.html",
    "revision": "673f96853f9739e31089db05f934820b"
  },
  {
    "url": "tag/m2/index.html",
    "revision": "619a82c65aef26ac27d9932932c04728"
  },
  {
    "url": "tag/m3/index.html",
    "revision": "00772b6d7ccfe8bdaa7ce5a3373e8e1d"
  },
  {
    "url": "tag/m6/index.html",
    "revision": "db309fd552dc639e7e165795ea089428"
  },
  {
    "url": "tag/web/index.html",
    "revision": "847d767b593a6cce67e6c787b5d8777b"
  },
  {
    "url": "tag/y2022/index.html",
    "revision": "9e886f9f498173f993cca2050a126f27"
  },
  {
    "url": "tag/y2022/m2/index.html",
    "revision": "74e024cb31ac94263de1781f965abf75"
  },
  {
    "url": "tag/y2022/m3/index.html",
    "revision": "a3765d872f04322cfbec788f714f3c74"
  },
  {
    "url": "tag/y2022/m6/index.html",
    "revision": "a50924c844c1c4057b699c1e060d6fb7"
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
