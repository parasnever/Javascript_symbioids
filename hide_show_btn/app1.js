const showBtnElement = document.getElementById("show_form_btn");
const fieldSetElement = document.getElementById("form_fieldset");

showBtnElement.addEventListener("click",function onClick1(event){
   const fieldSetDisplayStatus = fieldSetElement.style.display
   if(fieldSetDisplayStatus ==="block"){
    fieldSetElement.style.display = "none"
    showBtnElement.innerText = "Show Form"
   }
   else{
    fieldSetElement.style.display ="block";
    showBtnElement.innerText ="Hide Form"
   }
})