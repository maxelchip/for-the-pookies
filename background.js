chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the tab is fully loaded
    if (changeInfo.status === 'complete') {
      // Inject content script into the tab
      chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ['content.js']
      });
    }
  });