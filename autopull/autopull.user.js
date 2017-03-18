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
  var path = window.location.pathname;
  var pullRequestRegex = /\/[\w-]+\/SmokeDetector\/pull\/\d+/i;
  var editRegex = /\/[\w-]+\/SmokeDetector\/edit\/[\w-\/\.]+/i;
  if (path.match(pullRequestRegex)) {
    console.log("PR");
    // $(".commit-form h3").after("");
  } else if (path.match(editRegex)) {
    console.log("edit");
    // Edit on GH web
  }
})();
