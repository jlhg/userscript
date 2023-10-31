// ==UserScript==
// @name         巴哈姆特-自動展開留言
// @namespace    https://github.com/jlhg/userscript
// @license      MIT
// @version      0.2.0
// @description  自動展開巴哈姆特哈拉區、GNN新聞文章底下所有留言
// @author       jlhg
// @homepage     https://github.com/jlhg/userscript
// @supportURL   https://github.com/jlhg/userscript/issues
// @match        https://forum.gamer.com.tw/C.php*
// @match        https://forum.gamer.com.tw/Co.php*
// @match        https://gnn.gamer.com.tw/detail.php*
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

  switch (window.location.host) {
    case "forum.gamer.com.tw":
      document.querySelectorAll("[id^=showoldCommend_]")
              .forEach((el) => el.click());
      break;
    case "gnn.gamer.com.tw":
      waitElement('#comment a[href^="javascript:get_all_comment"]').then((e) => {
        eval($(e).attr('href').split(':')[1]);
      });
      break;
  }

})();
