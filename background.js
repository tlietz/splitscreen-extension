import { createPopupFromActiveTab } from "./splitFunctions.js";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "delete-related-popups",
        title: "Delete Related Popups",
        contexts: ["all"],
    });
});
chrome.contextMenus.onClicked.addListener(async () => {
    // deleteRelatedPopups();
});
