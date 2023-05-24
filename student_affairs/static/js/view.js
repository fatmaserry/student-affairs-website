// IMPORTANT!! LocalStorage Data
// Key of array in LS (studnets)
// Array of Students
let students;

// Edit Button

function saveChange(i, new_status) {
  students[i].status_of_student = new_status;
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
    `;
  document.getElementById("main-pop").innerHTML = saved_message;

  document.getElementById("ok").onclick = function () {
    document.getElementById("popup").style.display = "none";
    location.reload();
  };
}

const main_content = document.getElementById("popup-content").innerHTML;

function showStatus(student) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("student_name_popup").innerHTML =
    student.student_first_name + " " + student.student_last_name;
  document.getElementById("student_id").innerHTML = student.student_id;
  document.getElementById("student_status_popup").innerHTML =
    student.student_status;

  save_button = document.querySelector("#save-status");
  save_button.onclick = function () {
    let new_status = document.getElementById("student-status-popup").value;

    document.getElementById("close").style.display = "none";
    confirm_message = `
        <h1>Are you sure you want to save changes ?<h1>
        <button id="saveChange">Save</button>
        <button id="discardChange">Discard</button> 
        `;
    document.getElementById("main-pop").innerHTML = confirm_message;

    document.getElementById("saveChange").onclick = function () {
      saveChange(student.student_id, new_status);
    };
    document.getElementById("discardChange").onclick = function () {
      document.getElementById("popup-content").innerHTML = main_content;
      closePopup();
    };
  };
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
