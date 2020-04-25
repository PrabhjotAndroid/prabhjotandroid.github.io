'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "edc3a75cd3e294d8a9dcb66d28d51cb6",
"/": "edc3a75cd3e294d8a9dcb66d28d51cb6",
"main.dart.js": "d0e0606945cc24686197b353b7b88a98",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba5b228b4ed729ad3eefcbcb1ccdca9a",
"assets/LICENSE": "3c2da271299d0b435b57380df520b59e",
"assets/images/onboarding_1.png": "f5b8640944fa3f6ec1c5c70569ebe3a7",
"assets/images/onboarding_3.png": "1866021702422f40fbb68beec27dc3e4",
"assets/images/ic_strongbox.png": "699a4b882d5c6dcd7a069e7dca1c750d",
"assets/images/onboarding_2.png": "c53a2f22328492fc6fec625c39f5b775",
"assets/images/21.jpg": "f324158a7087ed4d700bcfa9cd5431e8",
"assets/images/avatar.jpg": "f324158a7087ed4d700bcfa9cd5431e8",
"assets/images/icons/ic_arrow_right.png": "e186f3396266217ae2c7fbc867ec4ab3",
"assets/images/icons/ic_credit_card_large.png": "dbed71a7f1f784c25f95a7133c29ee77",
"assets/images/icons/ic_calendar.png": "4073058747958484313c0052e17ce5d8",
"assets/images/icons/ic_notification.png": "3ab8489af2f529e6df532ea8bff11e7b",
"assets/images/icons/ic_message.png": "bacb9f6e318772a1000585cf284954da",
"assets/images/icons/ic_report.png": "a2585959f24c01800e2730cf60c72223",
"assets/images/icons/ic_close.png": "7e0b705e1f4df2cc0a9dd7a615d0e8d3",
"assets/images/icons/ic_user.png": "a286006a8b9b9631cdf1ef74a167c2f9",
"assets/images/icons/ic_location.png": "339bdd134615d3b1d755cb17edb9bb02",
"assets/images/icons/ic_faceid.png": "f2b8ca6bde116ee8be2750f310e57e72",
"assets/images/icons/ic_Restaurant.png": "660b4558f7d4824797227b497b6f8a8b",
"assets/images/icons/ic_add.png": "2722c677cbb16f7becc0382b935ea713",
"assets/images/icons/ic_credit_card.png": "361bce0b086b6a66158097a5e1871298",
"assets/images/icons/ic_wallet_active.png": "15555808ebaaee83b6a578ad1e64a5a2",
"assets/images/icons/ic_plus.png": "5155545b62678d546bc809db0ec66b17",
"assets/images/icons/ic_friends.png": "7141cb48cf6a17d07eb4785c749ff10a",
"assets/images/icons/ic_mail.png": "87c10fe1470e9763510291e5d7ee0348",
"assets/images/icons/ic_filter.png": "a51fc5e37520f3ad6322c80c40f343b3",
"assets/images/icons/ic_amount.png": "88b4f58dddb115e4fe8c489cf69b683d",
"assets/images/icons/ic_phone.png": "9b828f5be86eb08fcf0d228e41fad803",
"assets/images/icons/ic_Family.png": "d4619b79c5bccd959c5d314f6ee9030d",
"assets/images/icons/ic_category.png": "e08fe65a57b915ff12bac7cdff151ba8",
"assets/images/icons/ic_logout.png": "e950a0d0e1b606d0b807253fbab1c8c5",
"assets/images/icons/ic_Grab.png": "607af68f0a25d043127be55b2ae6883b",
"assets/images/icons/ic_Gaming.png": "710a9a5b229df84299450a1b3f21e80e",
"assets/images/icons/avatar.png": "a614fa4d2ad7f0ae86521887d96d543b",
"assets/images/icons/ic_cash.png": "1c59378f153c3e0fed1971aef4ed696f",
"assets/images/icons/ic_theme.png": "e98716d44549a2a28b44813957cf0de9",
"assets/images/icons/logo.png": "6181aa59e9d118533f9e886465a5bdd3",
"assets/images/icons/ic_bank.png": "28449c297c9d9ab7b46a5d7ba141eb8d",
"assets/images/icons/ic_settings.png": "ed252b39d16ed3a55179badc4f2d39bb",
"assets/images/icons/ic_chart.png": "f26f7d23f11679531174baf720efa598",
"assets/images/icons/ic_scan.png": "f64a705320a775a79087900996dc52c9",
"assets/images/icons/ic_pro.png": "3bfca0aaa9a9daef5264e80b07a80d26",
"assets/images/icons/ic_back.png": "a0b1f3c815fbce2a43ba8605c2b7eddc",
"assets/images/icons/ic_debit_card.png": "a396b175fe3cd0bfc7f0324f99c29442",
"assets/images/icons/ic_memo.png": "5eb04445bac31cd8742e308a5c9127a2",
"assets/images/icons/ic_help.png": "e7b01af495dac0059240ce22f9019f61",
"assets/images/icons/ic_wallet.png": "8905d2abe7bae636c33be71f0444214e",
"assets/images/icons/ic_coffee.png": "cfbea2fd7398aa63a5715e02a1f54b3b",
"assets/images/icons/ic_arrow_down.png": "b290f2b1efd6d1c4b4b2e1b322d73649",
"assets/images/icons/ic_done.png": "f3d58c88be70b792e26e23e566eb2576",
"assets/images/icons/ic_Gas.png": "86199aea7799f5955acbab0abf185a80",
"assets/images/icons/ic_Lover.png": "96d501a5ecb2c70a95374bb04b4398c1",
"assets/images/icons/ic_menu.png": "ade3409bfd961b48fa8dff8d368b4ae2",
"assets/images/icons/ic_Shopping.png": "45dffd4e9599beb1be6af71360a83f92",
"assets/images/icons/ic_Uber.png": "cb2320fd8dd813418123687b83fb809d",
"assets/images/icons/ic_back_white.png": "12151443f84fad4705273dcfa8b0d651",
"assets/images/icons/ic_curency.png": "b483f9861d6d0df31c1f88f124965e28",
"assets/images/icons/splash_logo.png": "a189f7ae828348dba880307da0bbafcb",
"assets/images/icons/ic_policy.png": "91375de450a91673527578f24d7f19be",
"assets/images/icons/ic_travel.png": "b967075cf06edd9c975442adbe2229e6",
"assets/images/icons/btn_close.png": "043a49078e688f65ff3bf0261c4f4f2b",
"assets/images/icons/ic_cinema.png": "192c6b3281735065fb8e504abc38c4a8",
"assets/images/icons/ic_Poker.png": "7450d38821256f8eeb7d24d6f3689d60",
"assets/images/ic_bars.png": "3a949e9cdcc7da2f4b6c1cb14ec527fa",
"assets/images/ic_money_wallet.png": "22e72b6189f1c3d2d92b8c6e6709f2ca",
"assets/AssetManifest.json": "b2adf7a13311ef85a323a17203ca8c17",
"assets/FontManifest.json": "08869e17d5b90e9408380abb7f337676",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/Quicksand/Quicksand-Bold.ttf": "0c04462696ac0fd3e85e75415b483fdb",
"assets/fonts/Quicksand/Quicksand-Medium.ttf": "0c64233241ead44bffbec54eb9d1d164",
"assets/fonts/Quicksand/Quicksand-Regular.ttf": "f87b9b4f34bdbf75b5c0cf3a5a137508",
"assets/fonts/Quicksand/Quicksand-Light.ttf": "c5f954788f341b22e1974433bb972ac1",
"assets/fonts/SF/SF-Pro-Display-Light.otf": "0bab02e940f7e1652072c921714c5940",
"assets/fonts/SF/SF-Pro-Display-Regular.otf": "ae18f7676c12ce1ebe8109ac78bb3f3f",
"assets/fonts/SF/SF-Pro-Display-Bold.otf": "2e684c7190bd203c44d6d31c0b5ac7c9",
"assets/fonts/SF/SF-Pro-Display-Medium.otf": "86495c7776de6559b1bf74bbab2a2d59",
"assets/fonts/SF/SF-Pro-Display-Semibold.otf": "b29a1a882a0fef457bf3bd66682ddd32",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
