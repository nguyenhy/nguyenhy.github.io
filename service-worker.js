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
    "revision": "e132d04205001de4c44da0c4f498bf7f"
  },
  {
    "url": "2022/02/19/introduction-to-web-development/index.html",
    "revision": "d0f5cf8719b38d6144eff3da7e7ecbe1"
  },
  {
    "url": "2022/02/24/introduction-to-html/index.html",
    "revision": "df63c042671be1f8e7208b613153041a"
  },
  {
    "url": "2022/03/05/introduction-to-css/index.html",
    "revision": "6d3e2f7343e8e65f99d82ae228b55161"
  },
  {
    "url": "2022/06/09/brief-introduction-to-flexbox-part-1/index.html",
    "revision": "9e7f48972e568bb88a2d630837b65108"
  },
  {
    "url": "2022/06/09/brief-introduction-to-flexbox-part-2/index.html",
    "revision": "dadbce80758a5f50f7bd7c50cfb9c064"
  },
  {
    "url": "2022/06/09/brief-introduction-to-flexbox-part-3/index.html",
    "revision": "7f0a1137640867cd7f9dfa5928fd8128"
  },
  {
    "url": "404.html",
    "revision": "a6a238404becd8cd5d86c4504f996ac1"
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
    "url": "assets/js/23.dd29890b.js",
    "revision": "bdee2e9d31f301ee876e178845bb59ab"
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
    "url": "assets/js/app.805a5fda.js",
    "revision": "6405c9256593e049510e2275c179a67f"
  },
  {
    "url": "blog/index.html",
    "revision": "3b720367339343ff8bd46a066c138644"
  },
  {
    "url": "index.html",
    "revision": "e025de3acfdabd3be5cae5db43a0d8eb"
  },
  {
    "url": "tag/beginner/index.html",
    "revision": "b23b89f363466de5657df30b6c87773c"
  },
  {
    "url": "tag/css/index.html",
    "revision": "54fdb3214aefd40c549b2d358478dc53"
  },
  {
    "url": "tag/d19/index.html",
    "revision": "15308443938baac82681574cbd0dcc06"
  },
  {
    "url": "tag/d24/index.html",
    "revision": "ff748499273f274835077ad0bee87808"
  },
  {
    "url": "tag/d5/index.html",
    "revision": "0ee4f894a3e3c29c388543df79c37c8a"
  },
  {
    "url": "tag/d9/index.html",
    "revision": "ce7ff97b5e2a27b6f493a601962c00dc"
  },
  {
    "url": "tag/disclaimer/index.html",
    "revision": "954998d4c1304d03060b160d4cb62e09"
  },
  {
    "url": "tag/flexbox/index.html",
    "revision": "a1fd11e84e9d61d5d35ca554231e95b1"
  },
  {
    "url": "tag/frontend/index.html",
    "revision": "d8297d7fd8e4b08ea186d944eabb4efd"
  },
  {
    "url": "tag/html/index.html",
    "revision": "7f58814f21297d0f1f36e68f8b32b790"
  },
  {
    "url": "tag/hyn/index.html",
    "revision": "9d5c003b19553a0a5e7e0847239d43a0"
  },
  {
    "url": "tag/index.html",
    "revision": "404eb7c1ae8636a48d10d1c78f0deed1"
  },
  {
    "url": "tag/introduction/index.html",
    "revision": "d50b0af948799f74637703dd73c6f1a5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "d6e0c5945b83d4441e7e5541a17ce02e"
  },
  {
    "url": "tag/m2/index.html",
    "revision": "9f13b8063fd1da58a14c26d996939890"
  },
  {
    "url": "tag/m3/index.html",
    "revision": "3f8dc69129052804025d1dce1b5750b7"
  },
  {
    "url": "tag/m6/index.html",
    "revision": "20196639752f4287a4ed7ed199812b1b"
  },
  {
    "url": "tag/web/index.html",
    "revision": "4f0a3103b76c06f137b267ff80d6d64b"
  },
  {
    "url": "tag/y2022/index.html",
    "revision": "120f325019963f370972a87985f9b6e3"
  },
  {
    "url": "tag/y2022/m2/index.html",
    "revision": "97e6b4315decebb100ef55ffede6f3dd"
  },
  {
    "url": "tag/y2022/m3/index.html",
    "revision": "98e3940e60bc2feffc67e2e561394ceb"
  },
  {
    "url": "tag/y2022/m6/index.html",
    "revision": "1888a011122dade38b5decc28d3dc130"
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
