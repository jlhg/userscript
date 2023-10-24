// ==UserScript==
// @name         巴哈姆特哈拉區-自動展開留言
// @namespace    https://github.com/jlhg/userscript
// @license      MIT
// @version      0.1.2
// @description  自動展開巴哈姆特哈拉區所有討論串底下的留言
// @author       jlhg
// @homepage     https://github.com/jlhg/userscript
// @supportURL   https://github.com/jlhg/userscript/issues
// @match        https://forum.gamer.com.tw/C.php*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelectorAll("[id^=showoldCommend_]")
          .forEach((el) => el.click());

})();
