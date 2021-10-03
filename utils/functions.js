// Functions related to creating new popups from tabs

// Helper function to get the URL of the active tab
const getActiveTab = async function () {
    //get active tab in current window
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });
    return tab;
};

// Helper function that creates a new window with specified
// type and the same options as the current active window
const createWindowWithSameOptions = async function (
    type,
    currentWindow,
    activeTabUrl
) {
    await chrome.windows.create({
        url: activeTabUrl,
        type: type,
        height: currentWindow.height,
        incognito: currentWindow.incognito,
        left: currentWindow.left,
        top: currentWindow.top,
        width: currentWindow.width,
    });
};

// Convert between a normal and popup window
export const convertWindow = async function () {
    //get information on current window and tab
    const activeTab = await getActiveTab();
    const currentWindow = await chrome.windows.getCurrent();

    if (currentWindow.type === "normal") {
        createWindowWithSameOptions("popup", currentWindow, activeTab.url);
        await chrome.tabs.remove(activeTab.id);
    } else if (currentWindow.type === "popup") {
        //create normal window with same options
        createWindowWithSameOptions("normal", currentWindow, activeTab.url);
        //put deleting window at the end for a cooler looking transition
        await chrome.windows.remove(currentWindow.id);
    }
};

export const createPopupFromActiveTab = async function () {
    const activeTab = await getActiveTab();
    const currentWindow = await chrome.windows.getCurrent();

    await chrome.windows.create({
        url: activeTab.url,
        type: "popup",
        incognito: currentWindow.incognito,
    });
};
