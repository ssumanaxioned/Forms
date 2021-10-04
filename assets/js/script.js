var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    var gender = document.getElementsByName("gender");
    var selectedGender;

    for(var i = 0; i < gender.length; i++) {
        if(gender[i].checked == true)
          selectedGender = gender[i].value;
    };
    // var gen = document.getElementById("gender");
    formData["fname"] = document.getElementById("fname").value;
    formData["lname"] = document.getElementById("lname").value;
    // if (gen.value == "male") {
    //     formData["gender"] = "Male";
    // }
    // else {
    //   formData["gender"] = "Female";
    // }
    formData["gender"] = selectedGender;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.fname;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.lname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.gender;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.address;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button>`
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('fname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('lname').value = selectedRow.cells[1].innerHTML;
    // document.getElementsByName('gender').checked = selectedRow.cells[2].innerHTML;
    if(selectedRow.cells[2].innerHTML == "female"){
      document.getElementById('female').checked = true;
    }
    else {
      document.getElementById('male').checked = true;
    }
    document.getElementById('address').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.lname;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.address;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('address').value = '';
    document.getElementById('female').checked = false;
    document.getElementById('male').checked = false;
}
