// IMPORTANT!! LocalStorage Data
// Key of array in LS (studnets)
// Array of Students  
let students;

// Check if there is data in LS
if (localStorage.students != null) {
    students = JSON.parse(localStorage.students)
} else {
    students = [];
}

var searchInput = document.getElementById("searchInput");
var searchTable = document.getElementById("studentsTable");

function searchStudents(e){
    e.preventDefault();
    var rowCount = searchTable.rows.length;
    for (var it = rowCount - 1; it > 0; it--) {
        searchTable.deleteRow(it);
    }

    var searchQuery = searchInput.value.toLowerCase();
    for(var i = 0; i < students.length; i++){
        var student = students[i];
        var fullName = student.fname.toLowerCase()+' '+student.lname.toLowerCase();
        if(fullName.includes(searchQuery)){
            var tableRow = "<tr><td>" + student.fname+' '+student.lname + "</td><td>" + student.id + "</td><td>" + student.level +
            "</td><td>" + student.status + 
            `</td><td><a href='edit_student.html?id=${student.id}' class='edit-student'><img src='images/edit.png' alt='edit data' class='edit-box'></a></td>` + 
            "<td><button onclick='deleteRow(this)' class='delete-button'><img src='images/delete.png' alt='delete data' class='delete-box'></button></td></tr>";
            var tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += tableRow;
        }
    }
}


searchButton = document.getElementById("searchButton");
if(searchButton)searchButton.addEventListener("click", searchStudents);

function deleteRow(button){
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
    cells = row.cells;
    const student = {
        name:undefined,
        ID: undefined,
        Level: undefined,
        Status: undefined
    };

    for(var i = 0;i < 4; i++){
        student[i] = cells[i].textContent;
    }

    for(var i = 0; i < students.length; i++){
        if(student[1]==students[i].id){
            students.splice(i,1);
            break;
        }
    }
    const s = JSON.stringify(students);
    localStorage.setItem("students", s);
}
let studentData = {};

function storeData(){
    const queryString = window.location.search;
    const searchParams = new URLSearchParams(queryString);
    const id = searchParams.get('id');
    for(var i = 0; i<students.length; i++){
        if(id==students[i]['id']){
            studentData['fname'] = students[i]['fname'];
            studentData['lname'] = students[i]['lname'];
            studentData['address'] = students[i]['address']
            studentData['id'] = students[i]['id'];
            studentData['nationality'] = students[i]['nationality'];
            studentData['nationalityID'] = students[i]['nationalityID'];
            studentData['phone_num'] = students[i]['phone_num'];
            studentData['landline'] = students[i]['landline'];
            studentData['email'] = students[i]['email'];
            studentData['level'] = students[i]['level'];
            studentData['gpa'] = students[i]['gpa'];
            studentData['department'] = students[i]['department'];
            studentData['dob'] = students[i]['dob'];
            studentData['gender'] = students[i]['gender'];
            studentData['status'] = students[i]['status'];
        }
    }
    console.log(studentData);
}

function reloadData(){
    var form = document.querySelector('form');
    form.name.value = studentData['fname'] + ' ' + studentData['lname'];
    form.add.value = studentData['address'];
    form.country.value = studentData['nationality'];
    form.num.value = studentData['phone_num'];
    form.email.value = studentData['email'];
    form.level.value = studentData['level'];
    form.dep.value = studentData['department'];
    form.birthDate.value = studentData['dob'];
    form.landline.value = studentData['landline'];
    form.id.value = studentData['id'];
    form.natid.value = studentData['nationalityID'];
    form.GPA.value = studentData['gpa'];
    if(studentData['gender']=='male'){
        form.male.checked = true;
    }
    else{
        form.female.checked = true;
    }
    if(studentData['status']=='active'){
        form.active.checked = true;
    }
    else{
        form.inactive.checked = true;
    }
}