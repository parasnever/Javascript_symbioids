import { links } from "../data/links.js";
import { hideShowButton } from "./form-handler.js";

/**
 * Edit and delete buttons
 * These buttons are added in renderData function.
 */
/**
 * functions required for edit and delete
 */
export function editData(dataToEditId) {
  hideShowButton();

  const item = links.find((link) => {
    if (link.id === dataToEditId.toString()) {
      return true;
    } else {
      return false;
    }
  });

  const titleElement = document.getElementById("title");
  const linkElement = document.getElementById("link");

  titleElement.value = item.title;
  linkElement.value = item.link;

  form.setAttribute("data-id", item.id.toString());
}
