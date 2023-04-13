//Add Student JS

const add_student_button = document.querySelector("#add-student");
const data = localStorage;
var students=[];



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
    }
}

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



    const new_student = new Student(first_name,last_name,address,id,nationality,nationalityID,
            phone,landline_num,email,level,gpa,dep,date_of_birth,gender);


    students.push(new_student);
    const s = JSON.stringify(students);

    
    data.setItem("students",s);
}



