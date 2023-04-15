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


// View Students

    let table ='';
    for (let i = 0; i < students.length ; i++) {
        table += `
        <tr>
              <td>${students[i].id}</td>
              <td>${students[i].fname+" "+students[i].lname}</td>
              <td>${students[i].level}</td>
              <td>${students[i].phone_num}</td>
              <td>${students[i].nationality}</td>
              <td>${students[i].department}</td>
              <td>${students[i].status}</td>
              <td>
                <button name="popup-edit-status" id="popup">
                  <i class="fa-solid fa-pen-to-square" id="edit-button"></i>
                </button>
              </td>
            </tr>
        `;
    }

    document.getElementById('tbody').innerHTML = table;




// const open_button = document.querySelector("#popup");
// open_button.onclick = function showStatus(id){
//     students = JSON.parse(data.getItem("students"));

//     var target_student = students.filter( (element) =>
//         ( element.collageID == id )
//     )

//     document.getElementById("student_name_popup").innerHTML = target_student.first_name +" " + target_student.last_name;
//     document.getElementById("student_id").innerHTML = target_student.collageID;
//     document.getElementById("student_status_popup").innerHTML = target_student.status;
// }

// const save_button = document.querySelector("#save-status")
// save_button.onclick = (e) =>{
//     e.preventDefault();

//     target_student.status = document.getElementById("student-status-popup").value;

    
//     students.push(target_student);
//     data.setItem("students",JSON.stringify)
    
// }


