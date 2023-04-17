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

function showData() {
    let table = '';
    for (let i = 0; i < students.length; i++) {
        table += `
        <tr>
              <td>${students[i].id}</td>
              <td>${students[i].fname + " " + students[i].lname}</td>
              <td>${students[i].level}</td>
              <td>${students[i].phone_num}</td>
              <td>${students[i].nationality}</td>
              <td>${students[i].department}</td>
              <td>${students[i].status}</td>
              <td class="status-edit">
                <button name="popup-edit-status" onclick="showStatus(${i})" id="popup-buttton">
                  <i class="fa-solid fa-pen-to-square" id="edit-button"></i>
                </button>
              </td>
            </tr>
        `;
    }

    document.getElementById('tbody').innerHTML = table;
}
showData();




// Edit Button

function saveChange(i, new_status) {
    students[i].status = new_status;
    localStorage.students = JSON.stringify(students);
    saved_message = `
    <div class="sa">
    <div class="sa-success">
    <div class="sa-success-tip"></div>
    <div class="sa-success-long"></div>
    <div class="sa-success-placeholder"></div>
    <div class="sa-success-fix"></div>
    </div>
    </div>
    <h1>Saved!<h1>
    <button id="ok">OK</button>
    `
    document.getElementById('main-pop').innerHTML = saved_message;
    
    document.getElementById('ok').onclick = function() {
        document.getElementById('popup').style.display = 'none';
        location.reload();
    };
}


const main_content = document.getElementById('popup-content').innerHTML; 
function showStatus(i) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById("student_name_popup").innerHTML = students[i].fname + " " + students[i].lname;
    document.getElementById("student_id").innerHTML = students[i].id;
    document.getElementById("student_status_popup").innerHTML = students[i].status;

    save_button = document.querySelector('#save-status')
    save_button.onclick = function () {
        let new_status = document.getElementById('student-status-popup').value

        document.getElementById('close').style.display = 'none';
        confirm_message = `
        <h1>Are you sure you want to save changes ?<h1>
        <button id="saveChange">Save</button>
        <button id="discardChange">Discard</button> 
        `
        document.getElementById('main-pop').innerHTML = confirm_message;

        document.getElementById("saveChange").onclick = function () {
            saveChange(i, new_status);
        }
        document.getElementById("discardChange").onclick = function () {
            document.getElementById('popup-content').innerHTML = main_content;
            closePopup()
        }
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

