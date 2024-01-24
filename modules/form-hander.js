import { saveData } from "./save-data.js";
import { updateData } from "./update-data.js";
import { renderData } from "./render-data.js";
import { links } from "../data/links.js";

const showBtnElement = document.getElementById("show_form_btn");
const fieldSetElement = document.getElementById("form_fieldset");

const form = document.getElementById("form");

export function hideShowButton() {
  const fieldSetDisplayStatus = fieldSetElement.style.display;

  if (fieldSetDisplayStatus === "block") {
    fieldSetElement.style.display = "none";
    // show the button name as 'Show Form'
    showBtnElement.innerText = "Show Form";
  } else {
    fieldSetElement.style.display = "block";
    // show the button name as "Hide Form"
    showBtnElement.innerText = "Hide Form";
  }
}

// add event listener
export function addEventListenerToShowHideButton() {
  showBtnElement.addEventListener("click", function onClick(event) {
    hideShowButton();
  });
}

/**
 * 2. Push data into an array
 */
// example data structure
// const links = [
//   {
//     title: "Google",
//     link: "https://www.google.com",
//   },

//   {
//     title: "Facebook",
//     link: "https://www.facebook.com",
//   },
// ];

export function addSubmitEventListenerToForm() {
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // prevents the form from auto submitting
      // updating the existing data
      console.log("form submitted", event.target);

      const linkElement = document.getElementById("link");
      const titleElement = document.getElementById("title");

      // get the value from the input field
      const titleValue = titleElement.value;
      const linkValue = linkElement.value;

      /**
       * add validation
       */
      if (titleValue.length === 0) {
        alert("Please enter a title");
        return;
      }
      if (linkValue.length === 0) {
        alert("Please enter a link");
        return;
      }

      const dataToEditId = form.dataset.id;
      if (dataToEditId) {
        updateData(links, dataToEditId, {
          title: titleValue,
          link: linkValue,
        });
        // clear the form
        titleElement.value = "";
        linkElement.value = "";
        renderData(links);
      } else {
        saveData(links);
        renderData(links);
      }
    });
  }
}

export function addKeyUpEventListenerToForm() {
  /**
   * 3. event listener on the enter button
   */
  if (form) {
    form.addEventListener("keyup", (event) => {
      event.preventDefault();

      const isSubmitButton = event.target.type === "submit";
      if (isSubmitButton) {
        return;
      }

      if (event.key === "Enter") {
        const linkElement = document.getElementById("link");
        const titleElement = document.getElementById("title");

        // get the value from the input field
        const titleValue = titleElement.value;
        const linkValue = linkElement.value;

        /**
         * add validation
         */
        if (titleValue.length === 0) {
          alert("Please enter a title");
          return;
        }
        if (linkValue.length === 0) {
          alert("Please enter a link");
          return;
        }

        // save the data
        saveData(links);
        renderData(links);
      }
    });
  }
}
