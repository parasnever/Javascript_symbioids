# Javascript_symbioids
This is the js of symbioids
```javascript
this is code


```
/***
form html code of the form

**/
```javascript



<!DOCTYPE html>
<html>
  <head>
    <title>Javascript course series</title>
    <link rel="stylesheet" type="text/css" href="form.css" />
  </head>
  <body>
    <h3 id="app-title"></h3>
    <button type="button" id="show_form_btn">Show Form</button>

    <fieldset id="form_fieldset">
      <legend id="text">Please fill the form below</legend>
      <form action="success.html" target="_blank" id="form">
        <label>Title</label>
        <input type="text" name="title" id="title" required />
        <label>Link</label>
        <textarea type="text" name="link" id="link" required></textarea>
        <input onsubmit="" type="submit" value="Submit" />
      </form>
    </fieldset>

    <!-- render the links in this container-->
    <ol id="data">
      <!-- example of the item -->
      <!-- <li>
        <h3>google</h3>
        <span>
          Link :
          <a href="" target="_blank">google.com</a>
        </span>
      </li> -->
    </ol>

    <script type="module" src="./app.js"></script>
    <!-- <script src="./app-old.js"></script> -->
  </body>
</html>

```
