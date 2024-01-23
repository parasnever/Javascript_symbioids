console.log("working...");

const showBtnElement = document.getElementById("show_form_btn");
const fieldSetElement = document.getElementById("form_fieldset");

// add event listener
showBtnElement.addEventListener("click", function onClick(event) {
  // form hide/show
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
});