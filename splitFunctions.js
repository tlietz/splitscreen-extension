//This file contains all functions related to creating new popups from tabs

//creates a popup from the current active tab and returns the windowId of the new window in the top left of screen
export const createPopupFromActiveTab = async function () {
    //get active tab in current window
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });
    const activeTabUrl = tab.url;

    //create window of type popup
    const createdWindow = await chrome.windows.create({
        url: activeTabUrl,
        type: "popup",
    });

    return createdWindow.id;
};
