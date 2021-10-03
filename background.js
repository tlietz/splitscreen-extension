import { createPopupFromActiveTab, convertWindow } from "./utils/functions.js";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "create-popup",
        title: "Create Popup",
        contexts: ["all"],
    });
    chrome.contextMenus.create({
        id: "convert",
        title: "Convert Normal/Popup",
        contexts: ["all"],
    });
});

chrome.contextMenus.onClicked.addListener(async (menuItemId) => {
    const id = menuItemId.menuItemId;
    if (id === "create-popup") {
        createPopupFromActiveTab();
    } else if (id === "convert") {
        convertWindow();
    }
});

chrome.action.onClicked.addListener(async () => {
    createPopupFromActiveTab();
});
