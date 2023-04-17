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
        var matching = true;
        // if(searchQuery.length==0)matching=false;
        for(var j = 0; j < searchQuery.length; j++){
            if(searchQuery[j] != fullName[j]) {
                matching = false;
                break;
            }
        }
        // <i class="fa-solid fa-pen-to-square" id="edit-button"></i>
        if(matching){
            var tableRow = "<tr><td>" + student.fname+' '+student.lname + "</td><td>" + student.id + "</td><td>" + student.level +
            "</td><td>" + student.status + 
            `</td><td><a href='edit_student.html?id=${student.id}' class='edit-student'><img src='images/edit.png' alt='edit data' class='edit-box'></a></td>` + 
            `<td><button onclick='if(confirm("Are you sure you want to delete ${student.fname} ${ student.lname}?"))deleteRow(this);' class='delete-button'><img src='images/delete.png' alt='delete data' class='delete-box'></button></td></tr>`;
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
            studentData['nationalityID'] = students[i]['nationalityID'];
            studentData['phone'] = students[i]['phone'];
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
}

function reloadData(){
    var form = document.querySelector('form');
    form.name.value = studentData['fname'] + ' ' + studentData['lname'];
    form.add.value = studentData['address'];
    form.num.value = studentData['phone'];
    form.email.value = studentData['email'];
    form.level.value = studentData['level'];
    if(studentData['status']=='Active'){
        form.active.checked = true;
    }
    else{
        form.inactive.checked = true;
    }
    form.dep.value = studentData['department'];
    document.getElementById("depart").readOnly = true;
    form.birthDate.value = studentData['dob'];
    form.landline.value = studentData['landline'];
    form.id.value = studentData['id'];
    form.natid.value = studentData['nationalityID'];
    form.gpa.value = studentData['gpa'];
    if(studentData['gender']=='male'){
        form.male.checked = true;
    }
    else{
        form.female.checked = true;
    }
}