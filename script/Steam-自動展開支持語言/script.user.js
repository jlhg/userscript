// ==UserScript==
// @name         Steam-自動展開支持語言
// @namespace    https://github.com/jlhg/userscript
// @license      MIT
// @version      0.1.0
// @description  自動展開 Steam 遊戲頁面右下方的「查看全部 x 種支援的語言」
// @author       jlhg
// @homepage     https://github.com/jlhg/userscript
// @supportURL   https://github.com/jlhg/userscript/issues
// @match        https://store.steampowered.com/app/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function waitElement(selector) {
    return new Promise(resolve => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
          observer.disconnect();
          resolve(document.querySelector(selector));
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  waitElement('.all_languages').then((el) => { el.click(); });
})();
