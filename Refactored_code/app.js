import { links } from "./data/links.js";
import {
  addEventListenerToShowHideButton,
  addKeyUpEventListenerToForm,
  addSubmitEventListenerToForm,
} from "./modules/form-handler.js";
import { renderData } from "./modules/render-data.js";

console.log("new app working...");

/**
 * add submit event
 * add keyup event
 * update ui
 * show/hide button
 * delete button
 * edit/update button
 */
addEventListenerToShowHideButton();
addSubmitEventListenerToForm();
addKeyUpEventListenerToForm();

/**
 * read value from local storage
 */
const value = localStorage.getItem("name");
const h1Element = document.querySelector("#app-title");
h1Element.textContent = value;

renderData(links);
