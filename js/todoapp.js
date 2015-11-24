/* Declare all variables */

var deleteButtons = document.getElementsByClassName("btn-default");

/* Add event listener on all buttons */

for (i=0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click",deleteRow);
}

function deleteRow() {
  index = this.parentElement.parentElement.rowIndex;
  document.getElementById("studentTable").deleteRow(index);
}

document.getElementById("addButton").addEventListener("click", doValidations);

function doValidations() {
    var inputsArray = document.getElementsByTagName("input");
    var elementText;
    var validationCheck=0;

    for(var i = 0; i < inputsArray.length; i++) {
        if(inputsArray[i].value === "") {
          switch(i) {
            case 0:
              elementText = "first";
              validationCheck = 1;
              break;
            case 1:
              elementText = "second";
              validationCheck = 1;
              break;
            case 2:
              elementText = "third";
              validationCheck = 1;
              break;
          }
          inputsArray[i].setAttribute("style", "border: red 1px solid;");
          alert("You left the " + elementText + " input empty!");
          break;
        }

          for (var j = 1; j < inputsArray.length ; j++) {
            //console.log ("value of i " +i +"value of j "+j);
            if (inputsArray[i].value === inputsArray[j].value) {
              switch (i) {
                case 0 :
                  switch (j) {
                    case 1 :
                      alert("Your First & Second Values are duplicate. Please enter unique values!!");
                      validationCheck = 1;
                      break; //Duplicate values found, so break from inner loop
                    case 2 :
                      alert("Your First & Third Values are duplicate. Please enter unique values!!");
                      validationCheck = 1;
                      break; //Duplicate values found, so break from inner loop 
                  } break;
                case 1 :
                  switch (j) {
                    case 2 :
                      alert("Your Second & Third Values are duplicate. Please enter unique values!!");
                      validationCheck = 1;
                      break; //Duplicate values found, so break from inner loop 
                  } break;
              }
            }
          } 

        if (validationCheck === 1) {
        break; // brake from outer loop as there are duplicate values
      } 
    }

    if (validationCheck === 0) {
        insertRow (); // Calls the insertRow function if none of the values are null or duplicate
    } 
}

function insertRow () {
    console.log ("We are going to add a row to the table"); 
    
    // Find a <table> element with id="myTable":
    var table = document.getElementById("studentTable");

    // Create an empty <tr> element and add it to the last but one row of the table: last row being the add row
    var rowInsert = table.insertRow(table.rows.length-1);
    var inputs = document.getElementsByClassName ("form-control");

    // Insert new cells (<td> elements) at the 1st, 2nd & Third position of the "new" <tr> element:
    var cell1 = rowInsert.insertCell(0);
    var cell2 = rowInsert.insertCell(1);
    var cell3 = rowInsert.insertCell(2);
    var cell4 = rowInsert.insertCell(3);

    // Add some text to the new cells:
    cell1.innerHTML = inputs[0].value;    
    cell2.innerHTML = inputs[1].value;
    cell3.innerHTML = inputs[2].value;
    cell4.innerHTML = cell4.innerHTML + "<button type='button' class='btn btn-default' onclick=\"deleteRow()\"> X </button>"
}

//Deletes first row in random between 5 to 10 seconds 
function randomDelete() {

    var randomValue = Math.floor((Math.random() * 100) + 5)*1000;
    //console.log (randomValue);
    setTimeout(function() {
        //console.log ("I am inside setTimeout");
        firstRowForDelete = document.getElementById("firstRow");
        firstRowForDelete.remove();
    }, randomValue);

}




