// ==UserScript==
// @name         Douyin comment helper
// @version      1.0
// @description  去除抖音评论需要登陆的提示
// @author       zhouc
// @match        *://www.douyin.com/*
// @grant        none
// ==/UserScript==

(function () {
  let observer = new MutationObserver(scriptHandler);

  function scriptHandler() {
    observer.disconnect();
    const target = document.getElementById('related-video-card-login-guide');
    if (target) {
      target.style.display = 'none';
      const siblings = Array.from(target.parentNode.children).filter(el => el !== target);
      siblings.forEach(el => {
        el.style.filter = 'none';
      });
    }
    observer.observe(document.body, { childList: true, subtree: true });
  }

  scriptHandler();
})();
