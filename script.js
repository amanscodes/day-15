var selectedRow=null;
function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)   // create new record
        insertNewRecord(formData);
    resetForm();
    
}
function readFormData() {
    var checkboxes = document.getElementsByName('btnradio');
    var result = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result.push(checkboxes[i].value);
            }
        }
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["address"] = document.getElementById("address").value;
    formData["pincode"] = document.getElementById("pincode").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["food"] = result.join(", ");
    formData["state"] = document.getElementById("state").value;
    formData["country"] = document.getElementById("country").value;
    
    return formData;
};
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pincode;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.gender;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.food;
    cell5 = newRow.insertCell(6);
    cell5.innerHTML = data.state;
    cell5 = newRow.insertCell(7);
    cell5.innerHTML = data.country;
}
function resetForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("food").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";

    selectedRow = null;
}
