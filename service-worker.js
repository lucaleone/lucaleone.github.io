/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/3rdpartylicenses.txt","df7edd03d8344c98748d8b03cffb487f"],["/EventDefault.5c49ef99a5c51c8df97d.jpg","5c49ef99a5c51c8df97d1a3651757007"],["/assets/404error.png","f7f3efa339cc29af2e4c33e65eabb51d"],["/assets/EventDefault.jpg","5c49ef99a5c51c8df97d1a3651757007"],["/assets/back_black.svg","290174b6259ea557de7fde682836d3c6"],["/assets/bookmark.svg","c290ecc0603741abec93c3afc9edebc0"],["/assets/calendarBlack.svg","e82517b2df0f8bab1043b0d9608a156d"],["/assets/calendarWhite.svg","dfa1f850f7591e227e92530ba06ec4d0"],["/assets/delete.svg","c01078bcc077fb4e201968e11a49dba2"],["/assets/editButton.svg","d803827d013384047605e58e46f58991"],["/assets/gogol_1.jpg","441b879e2ead34a8c9e981bd0ea75d82"],["/assets/loginBkg (Custom).jpg","7de4041340217af903d96e8b7c05f10d"],["/assets/loginBkg.jpg","d4a14c2f29971a9cc7e09e17d7b8ab2a"],["/assets/menu_icon.svg","59e60147740e146fb7525101adef037f"],["/assets/new.svg","bcce47977aa62b225948d69b457fe370"],["/assets/next.svg","cc13b3fe99abbc165ec4cb7eb22f07d3"],["/assets/next_black.svg","ff2b96719fb93f9698bfe4070dea4e27"],["/assets/notificationsButton.svg","c45b5255ec637d683440ab10972a5ea7"],["/assets/profile.jpg","c1f92b679c91b5e654ecc71482118bda"],["/assets/search.svg","5070f54c04cac79cb3d9293ae4034d53"],["/assets/type-event/cinema.jpg","e1c0922264d8a286a2be0333f01d2246"],["/assets/type-event/cucina.jpg","1b331adebd5ca1e30b1d3f60c4dd0e71"],["/assets/type-event/default.jpg","b2e1a11d2c995dd1828190b74e5e9ae5"],["/assets/type-event/fantascienza.jpg","6fa567e6e58d7846ffb0ea7c3cf9f16b"],["/assets/type-event/filosofia.jpg","cc5eef2de0a3f6f77a04fc6917ad63c0"],["/assets/type-event/fotografia.jpg","01af5eb62f72ed9a2f346864edd72752"],["/assets/type-event/fumetti.jpg","7c20a85fc651e1a5cee7c028a6c9282b"],["/assets/type-event/giallo.jpg","769c8675e6da818eb3092e021e275e24"],["/assets/type-event/horror.jpg","aca4285327938f070e3ddbe418e65e60"],["/assets/type-event/letteratura.jpg","c4ed6250465c0f8f787fd70bb1c6396c"],["/assets/type-event/manuali.jpg","952f590fd166d0f652e1a041aced16fc"],["/assets/type-event/tempo-libero.jpg","584c727b5285cbc777b62d2844e6a98a"],["/assets/type-event/thriller.jpg","6f17b58c267d31209572e4c5d2c28a22"],["/assets/user.svg","439b688e8c5423716f1b6334da54bcc6"],["/assets/users.svg","2aa64ca8fad9a9fd40fabaaf0e412b97"],["/back_black.290174b6259ea557de7f.svg","290174b6259ea557de7fde682836d3c6"],["/bookmark.c290ecc0603741abec93.svg","c290ecc0603741abec93c3afc9edebc0"],["/calendarBlack.e82517b2df0f8bab1043.svg","e82517b2df0f8bab1043b0d9608a156d"],["/delete.c01078bcc077fb4e2019.svg","c01078bcc077fb4e201968e11a49dba2"],["/editButton.d803827d013384047605.svg","d803827d013384047605e58e46f58991"],["/favicon.ico","df4549ca39fc863052e802eefe17a499"],["/icons/favicon-16x16.png","9a77024864a13659c4e7211d259c1baf"],["/icons/favicon-32x32.png","5d132385ca39820dbb18c0f97f73fa87"],["/icons/favicon-48x48.png","ea10acdd58043cd0e7667b77950967cb"],["/icons/favicon-48x48.svg","9e4fa02ce6aff7c4ecce4ceb24ee2d19"],["/icons/icon-128x128.png","ad6efa90b779328eb1db3970695adc70"],["/icons/icon-144x144.png","c4047f72b39a5cc6c95c5fdc9a6cc3f0"],["/icons/icon-168x168.png","7006ab267c70edd0cf0e7683f97888f5"],["/icons/icon-192x192.png","4e5cb5d84ad7c5f74552e54b9c94071d"],["/icons/icon-255x255.png","a82e858ab7398be74b3639301973c6ac"],["/icons/icon-340x340.png","5230b4271f5af4aca9897260db42c9f1"],["/icons/icon-512x512.png","413a77d31528c4552e29e006d36025a5"],["/icons/icon-72x72.png","84850a36ff13a765b44014f63b24036f"],["/icons/icon-96x96.png","59d89993c3d62abb0b3dc490ae25ea61"],["/index.html","7c2899e92caab865f68649f5c4a018d4"],["/inline.98b77d0131f518578c66.bundle.js","a8ef855f637c8e948677ada14c4a0bce"],["/loginBkg.d4a14c2f29971a9cc7e0.jpg","d4a14c2f29971a9cc7e09e17d7b8ab2a"],["/main.256cf4fd9efd22de9981.bundle.js","3b7ab86ff60547119c57b255fe3591b6"],["/manifest.json","d40cd7db47510476e2c6cd465099f108"],["/new.bcce47977aa62b225948.svg","bcce47977aa62b225948d69b457fe370"],["/next_black.ff2b96719fb93f9698bf.svg","ff2b96719fb93f9698bfe4070dea4e27"],["/polyfills.ad37cd45a71cb38eee76.bundle.js","8947b26d7cf00fc24a0b0d35b440ab15"],["/profile.c1f92b679c91b5e654ec.jpg","c1f92b679c91b5e654ecc71482118bda"],["/styles.8f8bf1d17ef9349579ef.bundle.css","8f8bf1d17ef9349579eff1b00f3d165a"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







