document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const formDataObject = {};
  
    formData.forEach(function addData(value, key) {
      formDataObject[key] = value;
    });
    displayFormData(formDataObject);
  });
  
  function displayFormData(formData) {
    console.log("form data", formData);
    const displayDiv = document.getElementById("displayData");
    let displayHTML = "";
  
    for (const [key, value] of Object.entries(formData)) {
      displayHTML += <p><strong>${key}:</strong> ${value}</p>;
    }
  
    displayDiv.innerHTML = displayHTML;
  }