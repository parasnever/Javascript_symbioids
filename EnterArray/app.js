console.log("working....")
const showButtonElement = document.getElementById("show_form_btn");
const fieldsetElement = document.getElementById("form_fieldset")

showButtonElement.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("hello")
    const fieldsetDisplay = fieldsetElement.style.display
    if(fieldsetDisplay === "block"){
        fieldsetElement.style.display = "none"
        showButtonElement.innerText = "Hide Form"
    }
    else{
        fieldsetElement.style.display = "block"
        showButtonElement.innerText ="Show Form"
    }
})
const links = []
console.log("before links",links);
if(form){
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        const titleElement = document.getElementById("title");
        const linkElement =  document.getElementById("link")
        titleValue = titleElement.value;
        linkValue = linkElement.value;
        const uniqueId = new Date().getTime();
        links.push({id:uniqueId,title:titleValue,link:linkValue})
        console.log("after links",links);
        titleElement.value = "";
        linkElement.value = ""
    })
}

