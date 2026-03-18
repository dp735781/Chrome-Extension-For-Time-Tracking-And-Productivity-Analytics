let currentTab = "";
let startTime = Date.now();
let timeData = {};

chrome.tabs.onActivated.addListener(async (activeInfo) => {

  let tab = await chrome.tabs.get(activeInfo.tabId);

  if (!tab.url || !tab.url.startsWith("http")) {
    return;
  }

  let domain = new URL(tab.url).hostname;

  let endTime = Date.now();
  let timeSpent = endTime - startTime;

  if (currentTab) {
    timeData[currentTab] = (timeData[currentTab] || 0) + timeSpent;
  }

  currentTab = domain;
  startTime = Date.now();

  chrome.storage.local.set({ timeData });

});