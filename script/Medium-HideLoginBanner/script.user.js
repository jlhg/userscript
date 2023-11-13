// ==UserScript==
// @name               Medium - Hide Login Banner and Signup overlay
// @name:zh-TW         Medium - 隱藏登入橫幅和蓋版註冊頁
// @namespace          https://github.com/jlhg/userscript
// @license            MIT
// @version            0.1.1
// @description        Hide Medium websites' annoying login banner and signup overlay
// @description:zh-TW  隱藏 Medium 網站惱人的登入橫幅及蓋版註冊頁
// @author             jlhg
// @homepage           https://github.com/jlhg/userscript
// @supportURL         https://github.com/jlhg/userscript/issues
// @match              https://medium.com/@*
// @match              https://*.medium.com/*
// @grant              none
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

  function waitElementsWithText(selector, text) {
    return new Promise(resolve => {
      let els = document.querySelectorAll(selector);

      for (let i = 0; i < els.length; i++) {
        let el = els[i];
        let textMatched = el.textContent.includes(text);

        if (el && textMatched) {
          return resolve(el);
        }

      }

      const observer = new MutationObserver(mutations => {
        let els = document.querySelectorAll(selector);

        for (let i = 0; i < els.length; i++) {
          let el = els[i];
          let textMatched = el.textContent.includes(text);

          if (el && textMatched) {
            observer.disconnect();
            resolve(el);
          }
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  function run() {
    waitElement('#credential_picker_container')
      .then((el) => { el.remove(); });

    waitElementsWithText('h2', 'Sign up to discover human stories')
      .then((el) => {
        el
          .parentElement
          .parentElement
          .parentElement
          .parentElement
          .parentElement
          .parentElement
          .remove();
      });
  }

  window.addEventListener('click', run, false);
  run();
})();
