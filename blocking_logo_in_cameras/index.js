// ==UserScript==
// @name         Блокирование логотипа в камерах
// @namespace    https://apsny.camera/
// @version      1.0
// @description  Блокирование логотипа в apsny.camera/player
// @match        https://apsny.camera/player/*
// @icon         https://github.com/reques6e/reques6e/blob/main/assets/213123212312321.png?raw=true
// @grant        none
// ==/UserScript==

(function() {
    function removeLogo() {
        var logo = document.querySelector("img.logo[src='logo.png']");
        if (logo) {
            logo.style.display = "none"; 
        }
    }

    window.addEventListener("load", removeLogo);
    var observer = new MutationObserver((mutations, observer) => {
        removeLogo();
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
