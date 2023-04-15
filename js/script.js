// IMPORTANT!! LocalStorage Data
const data = localStorage;
var students=[];

const open_button = document.querySelector("#popup");
open_button.onclick = function showStatus(id){
    students = JSON.parse(data.getItem("students"));

    var target_student = students.filter( (element) =>
        ( element.collageID == id )
    )

    document.getElementById("student_name_popup").innerHTML = target_student.first_name +" " + target_student.last_name;
    document.getElementById("student_id").innerHTML = target_student.collageID;
    document.getElementById("student_status_popup").innerHTML = target_student.status;
}

const save_button = document.querySelector("#save-status")
save_button.onclick = (e) =>{
    e.preventDefault();

    target_student.status = document.getElementById("student-status-popup").value;

    
    students.push(target_student);
    data.setItem("students",JSON.stringify)
    
}









//Add Student JS


class Student{
    constructor(fname,lname,address,id,nationality,nationalityID,
        phone,landline_num,email,level,gpa,dep,dob,gender){
        this.first_name = fname;
        this.last_name = lname;
        this.address = address;
        this.collageID = id;
        this.nationality = nationality;
        this.nationalityID = nationalityID;
        this.phone_num = phone;
        this.landline_num = landline_num;
        this.email_address = email;
        this.level = level;
        this.gpa = gpa;
        this.department = dep;
        this.date_of_birth = dob;
        this.gender = gender;
        this.status = "Active";
    }
}


const add_student_button = document.querySelector("#add-student");
add_student_button.onclick = (e) =>{
    e.preventDefault();

    const first_name = document.getElementById("sfname").value;
    const last_name = document.getElementById("slname").value;
    const address = document.getElementById("sAddress").value;
    const id = document.getElementById("sCollegeID").value;
    const nationality = document.getElementById("sNationality").value;
    const nationalityID = document.getElementById("sNationalID").value;
    const phone = document.getElementById("sPhoneNumber").value;
    const landline_num = document.getElementById("sLandline").value;
    const email = document.getElementById("sEmail").value;
    const level = document.getElementById("sLevel").value;
    const gpa = document.getElementById("sGPA").value;
    const dep = document.getElementById("sDepartment").value;
    const date_of_birth = document.getElementById("sDOB").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate Code

    const new_student = new Student(first_name,last_name,address,id,nationality,nationalityID,
            phone,landline_num,email,level,gpa,dep,date_of_birth,gender);


    // push new_student to the main array students
    students.push(new_student);

    // from array to string
    const s = JSON.stringify(students);

    // push the array as string to LocalStorage
    data.setItem("students",s);

}
