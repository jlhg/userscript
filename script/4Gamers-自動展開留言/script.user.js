// ==UserScript==
// @name         4Gamers-自動展開留言
// @namespace    https://github.com/jlhg/userscript
// @license      MIT
// @version      0.1.1
// @description  自動展開 4Gamers 新聞文章底下留言
// @author       jlhg
// @homepage     https://github.com/jlhg/userscript
// @supportURL   https://github.com/jlhg/userscript/issues
// @match        https://www.4gamers.com.tw/news/detail/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function waitLastElement(selector) {
    return new Promise(resolve => {
      const observer = new MutationObserver(mutations => {
        let nodes = document.querySelectorAll(selector);
        if (nodes.length > 0) {
          observer.disconnect();
          resolve(nodes[nodes.length - 1]);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  waitLastElement('a[href="#"].mb-0')
    .then((el) => { el.click(); })

  // TODO: auto load next article's comments.

})();
