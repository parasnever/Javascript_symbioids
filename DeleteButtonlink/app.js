console.log("this working...");
const buttonElement = document.getElementById("show_form_btn");
const fieldSetElement = document.getElementById("form_fieldset");
const form = document.getElementById("form");

buttonElement.addEventListener("click", (click) => {
  const fieldSetDisplayStatus = fieldSetElement.style.display;
  if (fieldSetDisplayStatus === "block") {
    fieldSetElement.style.display = "none";
    buttonElement.innerText = "Hide Form";
  } else {
    fieldSetElement.style.display = "block";
    buttonElement.innerText = "Show Form";
  }
});
const links = [];
console.log("before the links", links);

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("form submitted", event.target);
    const titleElement = document.getElementById("title");
    const linkElement = document.getElementById("link");

    const titleValue = titleElement.value;
    const linkValue = linkElement.value;
    //  validation for
    if (titleValue.value === 0) {
      alert("Please enter a title");
      return;
    }
    if (linkValue.value === 0) {
      alert("please enter a link");
      return;
    }
    const dataToEditId = form.dataset.id;
    if (dataToEditId) {
      upddateDate(links, dataToEditId, {
        title: titleValue,
        link: linkValue,
      });
    }
    saveData(links);
    renderData(links);
  });
}
if (form) {
  form.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      const titleElement = document.getElementById("title");
      const linkElement = document.getElementById("link");

      const titleValue = titleElement.value;
      const linkValue = linkElement.value;
      //  validation for
      if (titleValue.value === 0) {
        alert("Please enter a title");
        return;
      }
      if (linkValue.value === 0) {
        alert("please enter a link");
        return;
      }
      saveData(links);
      renderData(links);
    }
  });
}
function saveData(linksArr = []) {
  const titleElement = document.getElementById("title");
  const linkElement = document.getElementById("link");

  const titleValue = titleElement.value;
  const linkValue = linkElement.value;

  const uniqueId = new Date().getTime();

  linksArr.push({
    id: uniqueId.toString(),
    title: titleValue,
    link: linkValue,
  });
  console.log("after the links", links);
  titleElement.value = "";
  linkElement.value = "";}
function upddateDate(linksArr = [], dataToEditId, valuesToUpdate) {
    console.log("updating data", dataToEditId, linksArr);
    const indexToEdit = linksArr.findIndex((link) => {
      if (link.id === dataToEditId.toString()) {
        return true;
      } else {
        return false;
      }
    });
    if(indexToEdit > -1){
      linksArr.splice(indexToEdit,1,{
        id:dataToEditId.toString(),
        title:valuesToUpdate.title,
        link:valuesToUpdate.link
      })
    }
  }

function renderData(linksArr = []) {
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
  Link:
  <a href="${item.link}" target="_blank">${item.link}</a></span>
  <button onclick="editData(${item.id})">edit</button>
  <button id="delete-btn" data-id="${item.id}" data-link="${item.link}" data-title="${item.title}">delete</button>

  </li>
  `;
    });
  dataContainer.innerHTML = markup;
  const deleteBtnElements = document.querySelectorAll("#delete-btn");
  for (i = 0; i < deleteBtnElements.length; i++) {
    const deleteBtnElement = deleteBtnElements[i];
    deleteBtnElement.addEventListener("click", (event) => {
      const datatoDeletId = event.target.dataset.id;
      deleteData(datatoDeletId);
    });
  }
}
function editData(dataToEditId) {
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
function deleteData(datatoDeleteId) {
  const itemIndex = links.findIndex((link) => {
    if (link.id === datatoDeleteId.toString()) {
      return true;
    } else {
      return false;
    }
  });
  if (itemIndex > -1) {
    links.splice(itemIndex, 1);
    renderData(links);
  } else {
    alert("item doesnot exist.");
  }
}
