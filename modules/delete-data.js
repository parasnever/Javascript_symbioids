import { links } from "../data/links.js";
import { renderData } from "./render-data.js";

export function deleteData(dataToDeleteId) {
  const itemIndex = links.findIndex((link) => {
    if (link.id === dataToDeleteId.toString()) {
      return true;
    } else {
      return false;
    }
  });

  if (itemIndex > -1) {
    //  item exists
    // perform the delete operation
    links.splice(itemIndex, 1);

    localStorage.setItem("links", JSON.stringify(links));

    renderData(links);
  } else {
    alert("item does not exist");
  }
}
