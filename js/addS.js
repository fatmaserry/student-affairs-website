// IMPORTANT!! LocalStorage Data
// Key of array in LS (studnets)
// Array of Students  
let students;

// // Check if there is data in LS
if (localStorage.students != null) {
    students = JSON.parse(localStorage.students)
} else {
    students = [];
}


//Add Student JS
class Student {
    constructor(fname, lname, address, id, nationality, nationalityID,
        phone, landline, email, level, gpa, dep, dob, gender, status) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.id= id;
        this.nationality = nationality;
        this.nationalityID = nationalityID;
        this.phone_num = phone;
        this.landline = landline;
        this.email = email;
        this.level = level;
        this.gpa = gpa;
        this.department = dep;
        this.dob = dob;
        this.gender = gender;
        this.status = status;
    }
}


// Add Student Button
const add_student_button = document.querySelector("#add-student");
add_student_button.onclick = (e) => {
    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let address = document.getElementById("address").value;
    let id = document.getElementById("id").value;
    let nationality = document.getElementById("nationality").value;
    let nationalityID = document.getElementById("nationalID").value;
    let phone = document.getElementById("phone").value;
    let landline = document.getElementById("landline").value;
    let email = document.getElementById("email").value;
    let level = document.getElementById("level").value;
    let gpa = document.getElementById("gpa").value;
    let dep = document.getElementById("department").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let status = document.querySelector('input[name="status"]:checked').value;

    // Enter here Validate Code

    const new_student = new Student(fname, lname, address, id, nationality, nationalityID,
        phone, landline, email, level, gpa, dep, dob, gender, status);


    // push new_student to the main array students
    students.push(new_student);

    // from array to string
    const s = JSON.stringify(students);

    // push the array as string to LocalStorage
    localStorage.setItem("students", s);

}

