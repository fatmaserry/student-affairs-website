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


//Add Student JS
class Student {
    constructor(fname, lname, address, id, nationalID,
        phone, landline, email, level, gpa, dep, dob, gender, status) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.id = id;
        this.nationalID = nationalID;
        this.phone = phone;
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



const email = document.getElementById("email");
const emailError = email.nextElementSibling;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const fname = document.getElementById("fname");
const fnameError = fname.nextElementSibling;


const lname = document.getElementById("lname");
const lnameError = lname.nextElementSibling;
const nameRegExp = /^[a-zA-Z]+$/;

const address = document.getElementById("address");
const addressError = address.nextElementSibling;

const id = document.getElementById("id");
const idError = id.nextElementSibling;
const idRegExp = /^([0-9]{8})$/



const nationalID = document.getElementById("nationalID");
const nationalIdError = nationalID.nextElementSibling;
const nationalIdRegExp = /^([0-9]{1})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/;

const phone = document.getElementById("phone");
phone.placeholder = 'ex:01113653431';
const phoneError = phone.nextElementSibling;
const phoneRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const landline = document.getElementById("landline");
landline.placeholder = 'ex:201113654331'
const landlineError = landline.nextElementSibling;
const landlineRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;


const level = document.getElementById("level");
const levelError = level.nextElementSibling;
const levelRegExp = /^([1-4]{1})$/


const gpa = document.getElementById("gpa");
const gpaError = gpa.nextElementSibling;
const gpaRegExp = /^([1-4]{1})\.?([0-9]{1})?([0-9]{1})?$/

const dep = document.getElementById("department");

const dob = document.getElementById("dob");
const dobError = dob.nextElementSibling;

const gender = document.querySelector("input[name='gender']:checked");
const genderError = document.getElementById("gender-error");

const status = document.querySelector("input[name='status']:checked");
const statusError = document.getElementById("status-error");





// This defines what happens when the user types in the field
email.addEventListener("input", () => {
    const isValidEmail = emailRegExp.test(email.value);

    if (isValidEmail) {
        setNoError(email);
    } else {
        email.className = "invalid";
    }
});

fname.addEventListener("input", () => {

    const isValidFname = nameRegExp.test(fname.value);

    if (isValidFname) {
        setNoError(fname);
    } else {
        fname.className = "invalid";
    }
});

lname.addEventListener("input", () => {
    const isValidLname = nameRegExp.test(lname.value);

    if (isValidLname) {
        setNoError(lname);
    } else {
        lname.className = "invalid";
    }
});

phone.addEventListener("input", () => {
    const isValidPhone = phoneRegExp.test(phone.value);

    if (isValidPhone) {
        setNoError(phone);
    } else {
        phone.className = "invalid";
    }
});

landline.addEventListener("input", () => {

    //landline.value = landline.value.replace(/\D/g, '');

    const isValidLandline = landlineRegExp.test(landline.value);
    if (isValidLandline) {
        setNoError(landline);
    } else {
        landline.className = "invalid";
    }
});

nationalID.addEventListener("input", () => {
    const isValidnationalId = nationalIdRegExp.test(nationalID.value);

    if (isValidnationalId) {
        setNoError(nationalID);
    } else {
        nationalID.className = "invalid";
    }
});

level.addEventListener("input", () => {
    const isValidLevel = levelRegExp.test(level.value);

    if (isValidLevel) {
        setNoError(level);
    } else {
        level.className = "invalid";
    }
});

id.addEventListener("input", () => {
    const isValidId = idRegExp.test(id.value);
    if (isValidId) {
        setNoError(id);
    } else {
        id.className = "invalid";
    }

});

gpa.addEventListener("input", () => {
    const isValidGpa = gpaRegExp.test(gpa.value);
    const firstDigitNum = Number(gpa.value[0]);
    const afterDotDigitNum = Number(gpa.value[2]);
    const lastDigitNum = Number(gpa.value[3]);


    if (isValidGpa) {
        setNoError(gpa);
    } else {
        gpa.className = "invalid";
    }

    if (firstDigitNum == 4 && (afterDotDigitNum > 0 || lastDigitNum > 0)) {
        gpa.className = "invalid";
        gpaError.textContent = "GPA can't be greater than 4";
        gpaError.className = "error";
    }


});

dob.addEventListener("input", () => {
    const dobVal = dob.value;
    const userDob = new Date(dobVal);
    const monthDiff = Date.now() - userDob.getTime();
    const ageDt = new Date(monthDiff);
    const year = ageDt.getUTCFullYear();
    const age = Math.abs(year - 1970);

    if (age < 18) {
        dob.className = "invalid";
        dobError.textContent = "Age must be greater than 18!";
        dobError.className = "error";
    } else {
        setNoError(dob);
    }

});

address.addEventListener("input", () => {
    if (!isEmpty(address)) {
        setNoError(address);
    }
    // add elseeeeee!!!!!
});







// Add Student Button
/*const add_student_button = document.querySelector("#add-student");
add_student_button.onsubmit = (e) => {*/

let flag = true;
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();


    if (!isEmpty(fname)) {
        validateName(fname);
    } else {
        flag = false;
    }

    if (!isEmpty(lname)) {
        validateName(lname);
    } else {
        flag = false;
    }

    if (!isEmpty(address)) {
        flag = false;
    }

    if (!isEmpty(nationalID)) {
        const isValidnationalId = nationalIdRegExp.test(nationalID.value);

        if (!isValidnationalId) {
            nationalID.className = "invalid";
            nationalIdError.textContent = "Not a valid ID ex: 30305032100056 (14 number)";
            nationalIdError.className = "error";
        } else {
            setNoError(nationalID);
        }
    } else {
        flag = false;
    }
    if (!isEmpty(phone)) {
        const isValidPhone = phoneRegExp.test(phone.value);

        if (!isValidPhone) {
            phone.className = "invalid";
            phoneError.textContent = "Not a valid format ex: 01113654225";
            phoneError.className = "error";
        } else {
            setNoError(phone);
        }
    } else {
        flag = false;
    }

    if (!isEmpty(landline)) {
        const isValidLandline = landlineRegExp.test(landline.value);

        if (!isValidLandline) {
            landline.className = "invalid";
            landlineError.textContent = "Not a valid format ex: 0237451264";
            landlineError.className = "error";
        } else {
            setNoError(landline);
        }
    } else {
        flag = false;
    }

    if (!dob.value) {
        dob.className = "invalid";
        dobError.textContent = "Choose a Date Please!";
        dobError.className = "error";
    } else {
        setNoError(dob);
    }


    if (!isEmpty(email)) {
        const isValidEmail = emailRegExp.test(email.value);
        if (!isValidEmail) {
            email.className = "invalid";
            emailError.textContent = "I expect an email, darling!";
            emailError.className = "error";
        } else {
            setNoError(email);
        }
    } else {
        flag = false;
    }


    if (!isEmpty(level)) {
        const isValidLevel = levelRegExp.test(level.value);

        if (!isValidLevel) {
            level.className = "invalid";
            levelError.textContent = "Not valid level! From 1 to 4";
            levelError.className = "error";
        } else {
            setNoError(level);
        }

    } else {
        flag = false;
    }

    if (!isEmpty(id)) {
        const isValidId = idRegExp.test(id.value);

        if (!isValidId) {
            id.className = "invalid";
            idError.textContent = "Not valid ID ex:20220527";
            idError.className = "error";
        } else {
            setNoError(id);
        }
    } else {
        flag = false;
    }

    if (!isEmpty(gpa)) {
        flag = false;
    }


    if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
        flag = false;
        genderError.textContent = "Must Select a Gender!";
        genderError.className = "error";
    }
    else {
        genderError.textContent = "";
        genderError.className = "error";
    }



    const statusDiv = document.getElementById('status-radio');
    if (!document.getElementById('active').checked && !document.getElementById('inactive').checked) {
        flag = false;
        statusError.textContent = "Must Select a Status!";
        statusError.className = "error";
        // statusDiv.className = "invalid";
    }
    else {
        statusError.textContent = "";
        statusError.className = "error";
        // statusDiv.className = "valid";
    }




    // validate form before creating 

    if (!flag) {
        return;
    }

    const new_student = new Student(fname.value, lname.value, address.value, id.value, nationalID.value, phone.value, landline.value, email.value,
        level.value, gpa.value, dep.value, dob.value, gender.value, status.value);


    // push new_student to the main array students
    students.push(new_student);

    // from array to string
    const s = JSON.stringify(students);

    // push the array as string to LocalStorage
    localStorage.setItem("students", s);

    /*this.submit();
    e.currentTarget.submit();*/


});


function isEmpty(field) {
    const fieldError = field.nextElementSibling;
    if (field.value.length === 0) {
        field.className = "invalid";
        fieldError.textContent = "Cann't be Empty!";
        fieldError.className = "error";
        return true;
    } else {
        setNoError(field);
    }
}


function validateName(name) {
    const isValid = nameRegExp.test(name.value);
    const nameError = name.nextElementSibling;

    if (!isValid) {
        name.className = "invalid";
        nameError.textContent = "No numbers or special charachters(ex:/,*,&)";
        nameError.className = "error";
        return false;
    } else {
        name.className = "valid";
        nameError.textContent = "";
        nameError.className = "error";
    }
    return true;
}

function setNoError(field) {
    const fieldError = field.nextElementSibling;
    field.className = "valid";
    fieldError.textContent = "";
    fieldError.className = "error";
}
