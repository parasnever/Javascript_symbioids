console.log("working....")
const buttonSelectElement = document.getElementById("show_form_btn")
const fieldsetElement = document.getElementById("form_fieldset")
 const form = document.getElementById("form")
buttonSelectElement.addEventListener("click",function onclick(event){
        const fieldsetDisplay = fieldsetElement.style.display
        if(fieldsetDisplay === "block"){
            fieldsetElement.style.display = "none"
            buttonSelectElement.innerText = "Hide Form"

        }
        else{
            fieldsetElement.style.display = "block";
            buttonSelectElement.innerText ="Show Form"
        }
})
const links = [];
console.log("before links",links)
if(form){
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const titleElement = document.getElementById('title');
        const linkElement = document.getElementById("link");
       const titeValue = titleElement.value;
       const linkValue = linkElement.value;
       const uniqueId = new Date().getTime();
       links.push({id:uniqueId.toString(),title:titeValue,link:linkValue})
       console.log("after links", links);
       titleElement.value = "";
       linkElement.value = ""

    })
}
