chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!tab.url.startsWith('chrome://')) {
        chrome.scripting.executeScript({
            target: {tabId: tabId},
            files: ['content.js']
        });
    }
});