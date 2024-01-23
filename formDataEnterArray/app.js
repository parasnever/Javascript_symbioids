console.log("working...");

const showBtnElement = document.getElementById("show_form_btn");
const fieldSetElement = document.getElementById("form_fieldset");

const form = document.getElementById("form");

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
const links = [];

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // prevents the form from auto submitting

    // save the data
    saveData(links);
  });
}

/**
 * 3. event listener on the enter button
 */
if (form) {
  form.addEventListener("keyup", (event) => {
    event.preventDefault();

    if (event.key === "Enter") {
      // save the data
      saveData(links);
    }
  });
}

function saveData(linksArr = []) {
  // select the input field
  const linkElement = document.getElementById("link");
  const titleElement = document.getElementById("title");

  // get the value from the input field
  const titleValue = titleElement.value;
  const linkValue = linkElement.value;

  // generate a unique id
  const uniqueId = new Date().getTime();

  // push the data into the array
  linksArr.push({
    id: uniqueId.toString(),
    title: titleValue,
    link: linkValue,
  });

  console.log("after links", linksArr);

  //  clear the form
  titleElement.value = "";
  linkElement.value = "";
}

// !FIXME: There is bug when we press enter on the submit button. The form is getting submitted twice.