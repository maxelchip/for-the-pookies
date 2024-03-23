for (var i = 0; i < tabs.length; i++) {
    chrome.tabs.executeScript({file: "content.js"});
};