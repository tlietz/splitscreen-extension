import { createPopupFromActiveTab } from "./splitFunctions.js";
const createPopup = document.getElementById("createPopup");

createPopup.addEventListener("click", async () => {
    createPopupFromActiveTab();
});
