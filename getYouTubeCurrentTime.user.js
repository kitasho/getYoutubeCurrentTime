// ==UserScript==
// @name         Youtube CurrentTime to Clipboard
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Youtube CurrentTime to Clipboard if you press ctrl+x
// @author       kitasho
// @match        https://www.youtube.com/*
// @icon         none
// @grant        none
// ==/UserScript==

function secToTimeZeroPadding(seconds) {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor(seconds % 3600 / 60);
  const sec = Math.floor(seconds % 60);
  let hh = hour;
  const mm = (`00${min}`).slice(-2);
  const ss = (`00${sec}`).slice(-2);
  let time = `${hh}:${mm}:${ss}`;
  return time;
}


(function() {
    'use strict';
    document.body.addEventListener('keydown', function(e) {
        var ytPlayer = document.getElementById("movie_player");
        var currentTime = ytPlayer.getCurrentTime();
        var timeText;
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            timeText = secToTimeZeroPadding(currentTime - 5);
            navigator.clipboard.writeText(timeText);
        }
        else if (e.ctrlKey && e.key === 'x') {
            e.preventDefault();
            timeText = secToTimeZeroPadding(currentTime);
            navigator.clipboard.writeText(timeText);
        }
    });
})();