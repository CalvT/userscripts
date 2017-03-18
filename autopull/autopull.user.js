// ==UserScript==
// @name        Autopull toggle
// @namespace   https://github.com/Charcoal-SE
// @author      angussidney
// @description Adds a checkbox to the SmokeDetector repo to toggle autopull
// @include     *://github.com/*/SmokeDetector/edit/*
// @include     *://github.com/*/SmokeDetector/pull/*
// @version     0.1
// @updateURL   https://raw.githubusercontent.com/Charcoal-SE/Userscripts/master/autopull/autopull.user.js
// @downloadURL https://raw.githubusercontent.com/Charcoal-SE/Userscripts/master/autopull/autopull.user.js
// @supportURL  https://github.com/Charcoal-SE/Userscripts/issues
// @grant       none
// ==/UserScript==

(function () {
  "use strict";
  path = window.location.pathname
  pullRequestRegex = /\/\w+\/SmokeDetector\/pull\/\d+`/i
  editRegex = /\/\w+\/SmokeDetector\/edit\/.*/i
  if (path.match(pullRequestRegex)) {
    // PR merge page
  } else if (path.match(editRegex)) {
    // Edit on GH web
  }

})();
