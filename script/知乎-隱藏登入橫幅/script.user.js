// ==UserScript==
// @name               知乎 - 隱藏登入橫幅
// @name:zh-CN         知乎 - 隐藏登入横幅
// @namespace          https://github.com/jlhg/userscript
// @license            MIT
// @version            0.1.1
// @description        隱藏知乎網站惱人的登入橫幅
// @description:zh-CN  隐藏知乎网站恼人的登入横幅
// @author             jlhg
// @homepage           https://github.com/jlhg/userscript
// @supportURL         https://github.com/jlhg/userscript/issues
// @match              https://www.zhihu.com/*
// @match              https://zhuanlan.zhihu.com/*
// @grant              none
// ==/UserScript==

(function() {
  'use strict'

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

  waitElement('.Modal-closeButton').then((el) => { el.click(); });
  waitElement('.css-nk32ej').then((el) => { el.remove(); });
})();
