function addData() {
    // Get input values
    let name =
        document.getElementById("nameInput").value;
    let mobile =
        document.getElementById("numberInput").value;
    let address =
        document.getElementById("addressInput").value;

    // Get the table and insert a new row at the end
    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);

    // Insert data into cells of the new row
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = mobile;
    newRow.insertCell(2).innerHTML = address;
    newRow.insertCell(3).innerHTML =
        '<button onclick="editData(this)">Edit</button>' +
        '<button onclick="deleteData(this)">Delete</button>';

    // Clear input fields
    clearInputs();
}

function editData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Get the cells within the row
    let nameCell = row.cells[0];  
    let mobileCell = row.cells[1];
    let addressCell = row.cells[2];

    // Prompt the user to enter updated values
    let nameInput =
        prompt("Enter the updated name:",
            nameCell.innerHTML);
    let numberInput =
        prompt("Enter the updated mobile details:",
            mobileCell.innerHTML
        );
    let addressInput =
        prompt("Enter the updated address:",
            addressCell.innerHTML
        );

    // Update the cell contents with the new values
    nameCell.innerHTML = nameInput;
    mobileCell.innerHTML = numberInput;
    addressCell.innerHTML = addressInput;
}
function deleteData(button) {

    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}
function clearInputs() {

    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("addressInput").value = "";
}

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=> {
    splashScreen.style.opacity = 0;
    setTimeout(()=>{
        splashScreen.ckassList.add('hidden')
    },610)
    splashScreen.remove()
    
})