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

        // var k = 0;
        // for(var j = 0; j<fullName.length; j++){
        //     if(searchQuery[k]==fullName[j])k++;
        //     if(k==searchQuery.length)break;
        // }
        // if(k==searchQuery.length){
        // }

        if(fullName.includes(searchQuery)){
            var tableRow = "<tr><td>" + student.fname+' '+student.lname + "</td><td>" + student.collageID + "</td><td>" + student.level +
            "</td><td>" + student.status + "</td><td><a href='edit_student.html'><img src='images/edit.png' alt='edit data' class='edit-box'></a></td>" + 
            "<td><button><img src='images/delete.png' alt='delete data' class='delete-box'></button></td></tr>";
            var tableBody = document.getElementById("tableBody");
            tableBody.innerHTML += tableRow;
        }
    }
}


button = document.getElementById("button");
button.addEventListener("click", searchStudents);