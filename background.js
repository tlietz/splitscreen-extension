import { convertWindow, createPopupFromUrl } from "./utils/functions.js";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "popup-from-link",
        title: "Popup From Link",
        contexts: ["link"],
    });
    chrome.contextMenus.create({
        id: "create-popup",
        title: "Popup From Page",
        contexts: ["all"],
    });
    chrome.contextMenus.create({
        id: "convert",
        title: "Convert Normal/Popup",
        contexts: ["all"],
    });
});

chrome.contextMenus.onClicked.addListener(async (onClickData) => {
    const id = onClickData.menuItemId;
    if (id === "create-popup") {
        createPopupFromUrl(onClickData.pageUrl);
    } else if (id === "convert") {
        convertWindow();
    } else if (id === "popup-from-link") {
        createPopupFromUrl(onClickData.linkUrl);
    }
});

chrome.action.onClicked.addListener(async (tab) => {
    ceatePopupFromUrl(tab.url);
});
