import { createPopupFromActiveTab } from "./splitFunctions.js";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "create-popup",
        title: "Create Popup",
        contexts: ["all"],
    });
});
chrome.contextMenus.onClicked.addListener(async () => {
    createPopupFromActiveTab();
});
