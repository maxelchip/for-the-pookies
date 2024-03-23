for (var i = 0; i < tabs.length; i++) {
    chrome.tabs.executeScript(tabs[i].id, {file: "content.js"});
}