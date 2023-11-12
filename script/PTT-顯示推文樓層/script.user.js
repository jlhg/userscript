// ==UserScript==
// @name         PTT-顯示推文樓層
// @namespace    https://github.com/jlhg/userscript
// @license      MIT
// @version      0.1.0
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
	    'font-family: monospace;' +
	    'color: #808080;';
    el.textContent = level;
    return el
  }

  const pushElements = document.querySelectorAll('.push');

  for (let i = 0; i < pushElements.length; i++) {
    pushElements[i].prepand(createPushLevel(i + 1));
  }
})();
