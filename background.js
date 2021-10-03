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
    chrome.contextMenus.create({
        id: "popup-from-link",
        title: "Create Popup From Link",
        contexts: ["link"],
    });
});

chrome.contextMenus.onClicked.addListener(async (menuItemId) => {
    const id = menuItemId.menuItemId;
    if (id === "create-popup") {
        createPopupFromActiveTab();
    } else if (id === "convert") {
        convertWindow();
    } else if (id === "popup-from-link") {
    }
});

chrome.action.onClicked.addListener(async () => {
    createPopupFromActiveTab();
});
