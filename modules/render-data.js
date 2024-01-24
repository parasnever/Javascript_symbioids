import { editData } from "./edit-data.js";
import { deleteData } from "./delete-data.js";

/**
 * 4. Render the data
 */

export function renderData(linksArr = []) {
  const dataContainer = document.getElementById("data");

  if (linksArr.length) {
    dataContainer.style.display = "block";
  } else {
    dataContainer.style.display = "none";
  }

  // generate the markup
  let markup = "";

  linksArr
    .filter((link) => {
      if (link.title.length) {
        return true;
      } else {
        return false;
      }
    })
    .forEach((item) => {
      markup += `
      <li>
        <h3>${item.title}</h3>
        <span>
          Link :
          <a href="${item.link}" target="_blank">${item.link}</a>
        </span>
        <button id="edit-btn" data-id="${item.id}" >edit</button> 
        <button id="delete-btn" data-id="${item.id}" data-link="${item.link}" data-title="${item.title}" >delete</button>
      </li>
    `;
    });
  dataContainer.innerHTML = markup;

  // edit event listener
  const editBtnElements = document.querySelectorAll("#edit-btn");

  for (let i = 0; i < editBtnElements.length; i++) {
    const editBtnElement = editBtnElements[i];

    editBtnElement.addEventListener("click", (event) => {
      const dataToEditId = event.target.dataset.id;
      editData(dataToEditId);
    });
  }

  // delete event listener
  const deleteBtnElements = document.querySelectorAll("#delete-btn");

  for (let i = 0; i < deleteBtnElements.length; i++) {
    const deleteBtnElement = deleteBtnElements[i];

    deleteBtnElement.addEventListener("click", (event) => {
      const dataToDeleteId = event.target.dataset.id;
      deleteData(dataToDeleteId);
    });
  }
}
