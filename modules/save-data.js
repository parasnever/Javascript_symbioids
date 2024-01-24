export function saveData(linksArr = []) {
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

  localStorage.setItem("links", JSON.stringify(linksArr));

  //  clear the form
  titleElement.value = "";
  linkElement.value = "";
}
