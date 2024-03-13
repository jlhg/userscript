// ==UserScript==
// @name         PTT-顯示推文樓層
// @namespace    https://github.com/jlhg/userscript
// @license      MIT
// @version      0.2.0
// @description  顯示 PTT 的推文樓層數
// @author       jlhg
// @homepage     https://github.com/jlhg/userscript
// @supportURL   https://github.com/jlhg/userscript/issues
// @match        https://www.ptt.cc/bbs/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function createPushLevel(level) {
    const el = document.createElement('div');
    el.className = 'push-level';
    el.style.cssText = 'display: inline-block;' +
      'min-width: 50px;' +
      'margin-left: -62px;' +
      'padding-right: 12px;' +
      'text-align: right;' +
      'color: #808080;';
    el.textContent = level;
    return el;
  }

  const pushElements = document.querySelectorAll('.push');

  let pushCount = 0;
  for (const pushElement of pushElements) {
    pushElement.prepend(createPushLevel(++pushCount));
  }

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        for (const child of node.childNodes) {
          if (child.className == "push") {
            child.prepend(createPushLevel(++pushCount));
          }
        }
      }
    }
  });

  let mainContent = document.querySelector('#main-content');
  observer.observe(mainContent, { childList: true, subtree: true });
})();
