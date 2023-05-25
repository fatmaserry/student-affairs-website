
//Add Student JS
const email = document.getElementById("email");
const emailError = email.nextElementSibling;
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const fname = document.getElementById("fname");
const fnameError = fname.nextElementSibling;

const lname = document.getElementById("lname");
const lnameError = lname.nextElementSibling;
const nameRegExp = /^[a-zA-Z]+$/;

const address = document.getElementById("address");
const addressError = address.nextElementSibling;

const idPrefix = document.getElementById("id-prefix");
const id = document.getElementById("id");
let studentId;
const idError = document.getElementById("id-div").nextElementSibling;
const idRegExp = /^([0-9]{6})$/;

const nationalID = document.getElementById("nationalID");
const nationalIdError = nationalID.nextElementSibling;
const nationalIdRegExp =
  /^([0-9]{1})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/;

const phone = document.getElementById("phone");
phone.placeholder = "ex:01113653431";
const phoneError = phone.nextElementSibling;
const phoneRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const landline = document.getElementById("landline");
landline.placeholder = "ex:2037453659";
const landlineError = landline.nextElementSibling;
const landlineRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

const level = document.getElementById("level");
const levelError = level.nextElementSibling;
const levelRegExp = /^([1-4]{1})$/;

const gpa = document.getElementById("gpa");
const gpaError = gpa.nextElementSibling;
const gpaRegExp = /^([0-4]{1})\.?([0-9]{1})?([0-9]{1})?$/;

const dep = document.getElementById("department");
const depError = document.getElementById("dep-error");

const dob = document.getElementById("dob");
const dobError = dob.nextElementSibling;

const genderError = document.getElementById("gender-error");
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
  console.log(idPrefix.value);
  console.log(id.value);
  studentId = idPrefix.value + id.value;
  console.log(studentId);
  let isRepeatedId = false;
  students.forEach((student) => {
    if (student.id == studentId) {
      isRepeatedId = true;
    }
  });

  if (!isValidId) {
    id.className = "invalid";
  } else if (isRepeatedId) {
    id.className = "invalid";
    idError.textContent = "This ID already Exists";
    idError.className = "error";
  } else {
    id.className = "valid";
    idError.textContent = "";
    idError.className = "error";
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

// Class Student Information
class Student {
  constructor(
    fname,
    lname,
    address,
    id,
    nationalID,
    phone,
    landline,
    email,
    level,
    gpa,
    dep,
    dob,
    gender,
    status
  ) {
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
    this.status_of_student = status;
  }
}

// Add Student Button
/*const add_student_button = document.querySelector("#add-student");
add_student_button.onsubmit = (e) => {*/

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  var flag = true;

  if (!isEmpty(fname)) {
    if (!validateName(fname)) {
      flag = false;
    }
  } else {
    flag = false;
  }

  if (!isEmpty(lname)) {
    if (!validateName(lname)) {
      flag = false;
    }
  } else {
    flag = false;
  }

  if (isEmpty(address)) {
    flag = false;
  }

  if (!isEmpty(nationalID)) {
    const isValidnationalId = nationalIdRegExp.test(nationalID.value);

    if (!isValidnationalId) {
      nationalID.className = "invalid";
      nationalIdError.textContent =
        "Not a valid ID ex: 30305032100056 (14 number)";
      nationalIdError.className = "error";
      flag = false;
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
      flag = false;
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
      flag = false;
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
    flag = false;
  } else {
    setNoError(dob);
  }

  if (!isEmpty(email)) {
    const isValidEmail = emailRegExp.test(email.value);
    if (!isValidEmail) {
      email.className = "invalid";
      emailError.textContent = "I expect an email, darling!";
      emailError.className = "error";
      flag = false;
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
      flag = false;
    } else {
      setNoError(level);
    }
  } else {
    flag = false;
  }

  if (id.value.length === 0) {
    id.className = "invalid";
    idError.textContent = "Cann't be Empty!";
    idError.className = "error";
    flag = false;
  } else {
    const isValidId = idRegExp.test(id.value);
    let isRepeatedId = false;
    students.forEach((student) => {
      if (student.id == studentId) {
        isRepeatedId = true;
      }
    });
    if (!isValidId) {
      id.className = "invalid";
      idError.textContent = "Not valid ID ex:20220527";
      idError.className = "error";
      flag = false;
    } else if (isRepeatedId) {
      id.className = "invalid";
      idError.textContent = "This ID already Exists";
      idError.className = "error";
      flag = false;
    } else {
      id.className = "valid";
      idError.textContent = "";
      idError.className = "error";
    }
  }

  if (!isEmpty(gpa)) {
    if (level.value > 1 && Number(gpa.value[0]) == 0) {
      gpa.className = "invalid";
      gpaError.textContent = "GPA Can't be 0, level is greater than 1";
      gpaError.className = "error";
      flag = false;
    } else {
      setNoError(gpa);
    }
  } else {
    flag = false;
  }

  if (dep.value == "General" && Number(level.value) > 2) {
    depError.textContent = "Can't be General, level is greater than 2";
    depError.className = "error";
    flag = false;
  } else if (Number(level.value) == 1 && dep.value != "General") {
    depError.textContent = "Department should be General, level is 1";
    depError.className = "error";
  } else {
    depError.textContent = "";
    depError.className = "error";
  }

  if (
    !document.getElementById("male").checked &&
    !document.getElementById("female").checked
  ) {
    genderError.textContent = "Must Select a Gender!";
    genderError.className = "error";
    flag = false;
  } else {
    genderError.textContent = "";
    genderError.className = "error";
  }

  if (
    !document.getElementById("active").checked &&
    !document.getElementById("inactive").checked
  ) {
    statusError.textContent = "Must Select a Status!";
    statusError.className = "error";
    flag = false;
  } else {
    statusError.textContent = "";
    statusError.className = "error";
  }

  // validate form before creating

  const gender = document.querySelector('input[name ="gender"]:checked');
  const status_of_student = document.querySelector(
    'input[name ="status"]:checked'
  );

 /* if (!flag) {
    return;
  }

  const new_student = new Student(
    fname.value,
    lname.value,
    address.value,
    studentId,
    nationalID.value,
    phone.value,
    landline.value,
    email.value,
    level.value,
    gpa.value,
    dep.value,
    dob.value,
    gender.value,
    status_of_student.value
  );

  // push new_student to the main array students
  students.push(new_student);

  // from array to string
  const s = JSON.stringify(students);

  // push the array as string to LocalStorage
  localStorage.setItem("students", s);
});*/

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
  return false;
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
}})
