//Add Student JS
const email = document.getElementById("email");
const emailError = email.nextElementSibling;
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const fname = document.getElementById("fname");
let fnameError;
if (!fname.hasAttribute("readonly")) {
  fnameError = fname.nextElementSibling;
}

const lname = document.getElementById("lname");
const nameRegExp = /^[a-zA-Z]+$/;
let lnameError;
if (!lname.hasAttribute("readonly")) {
  lnameError = lname.nextElementSibling;
}

const address = document.getElementById("address");
let addressError = address.nextElementSibling;

const idPrefix = document.getElementById("id-prefix");
const id = document.getElementById("id");
const idRegExp = /^([0-9]{6})$/;
let studentId;
let idError;
if (!id.hasAttribute("readonly")) {
  idError = document.getElementById("id-div").nextElementSibling;
}

const nationalID = document.getElementById("nationalID");
const nationalIdRegExp =
  /^([0-9]{1})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{3})$/;
let nationalIdError;
if (!nationalID.hasAttribute("readonly")) {
  nationalIdError = nationalID.nextElementSibling;
}

const phone = document.getElementById("phone");
phone.placeholder = "ex:01113653431";
let phoneError = phone.nextElementSibling;
const phoneRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

const landline = document.getElementById("landline");
landline.placeholder = "ex:2037453659";
let landlineError = landline.nextElementSibling;
const landlineRegExp = /^\+?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;

const level = document.getElementById("level");
const previousLevel = level.value;
let levelError = level.nextElementSibling;
const levelRegExp = /^([1-4]{1})$/;

const gpa = document.getElementById("gpa");
let gpaError = gpa.nextElementSibling;
const gpaRegExp = /^(?:[0-3](?:\.[0-9]{1,2})?|4(?:\.00?)?)$/;

const dep = document.getElementById("dep-input");
let depError;
if (!dep.hasAttribute("readonly")) {
  depError = document.getElementById("dep-error");
}

const dob = document.getElementById("dob");
let dobError = dob.nextElementSibling;

const genderM = document.getElementById("male");
const genderF = document.getElementById("female");
let genderError = document.getElementById("gender-error");
let statusError = document.getElementById("status-error");

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
  const isValidEmail = emailRegExp.test(email.value);

  if (isValidEmail) {
    setNoError(email);
  } else {
    email.className = "invalid";
    emailError.textContent = "Not a valid Email. ex: yousefeldaly@gmail.com!";
    emailError.className = "error";
  }
});

fname.addEventListener("input", () => {
  const isValidFname = nameRegExp.test(fname.value);

  if (isValidFname) {
    setNoError(fname);
  } else {
    fname.className = "invalid";
    fnameError.textContent = "Cann't have numbers of special charachters!";
    fnameError.className = "error";
  }
});

lname.addEventListener("input", () => {
  const isValidLname = nameRegExp.test(lname.value);

  if (isValidLname) {
    setNoError(lname);
  } else {
    lname.className = "invalid";
    lnameError.textContent = "Cann't have numbers of special charachters!";
    lnameError.className = "error";
  }
});

phone.addEventListener("input", () => {
  const isValidPhone = phoneRegExp.test(phone.value);

  if (isValidPhone) {
    setNoError(phone);
  } else {
    phone.className = "invalid";
    phoneError.textContent = "Should be 11 numbers ex:01113653431";
    phoneError.className = "error";
  }
});

landline.addEventListener("input", () => {
  //landline.value = landline.value.replace(/\D/g, '');

  const isValidLandline = landlineRegExp.test(landline.value);
  if (isValidLandline) {
    setNoError(landline);
  } else {
    landline.className = "invalid";
    landlineError.textContent =
      "Not a valid format ex: 0237451264 (10 numbers)";
    landlineError.className = "error";
  }
});

nationalID.addEventListener("input", () => {
  const isValidnationalId = nationalIdRegExp.test(nationalID.value);

  if (isValidnationalId) {
    setNoError(nationalID);
  } else {
    nationalID.className = "invalid";
    nationalIdError.textContent =
      "Not a valid ID ex: 30305032100056 (14 numbers)";
    nationalIdError.className = "error";
  }
});

level.addEventListener("input", () => {
  const isValidLevel = levelRegExp.test(level.value);

  if (isValidLevel) {
    setNoError(level);
    if (fname.hasAttribute("readonly")) {
      const setDep = document.getElementById("set-dep");
      const setDep2 = document.getElementById("set-dep2");
      if (level.value >= 3) {
        let studentId = Number(id.value);
        let studentLevel = level.value;
        setDep.innerHTML = "";
        const editDepartmentUrl =
          "/edit_student/edit_department/" + studentId + "/" + studentLevel;
        const link = document.createElement("a");
        link.setAttribute("href", editDepartmentUrl);
        link.setAttribute("class", "assignDep");
        link.textContent = "Assign Department";

        setDep.appendChild(link);
        setDep.style.display = "block";
        setDep2.style.display = "none";
      } else {
        setDep2.style.display = "none";
        setDep.style.display = "none";
      }
    }
  } else {
    level.className = "invalid";
    levelError.textContent = "Not valid level! From 1 to 4";
    levelError.className = "error";
  }
});

id.addEventListener("input", () => {
  const isValidId = idRegExp.test(id.value);
  studentId = idPrefix.value + id.value;

  if (!isValidId) {
    id.className = "invalid";
    idError.textContent = "(8 Numbers) Ex: 20220527";
    idError.className = "error";
  } else {
    id.className = "valid";
    idError.textContent = "";
    idError.className = "error";
  }
});

gpa.addEventListener("input", () => {
  const isValidGpa = gpaRegExp.test(gpa.value);

  const gpaNum = parseFloat(gpa.value);

  if (isValidGpa) {
    setNoError(gpa);
  } else {
    if (gpaNum > 4) {
      gpa.className = "invalid";
      gpaError.textContent = "GPA can't be greater than 4";
      gpaError.className = "error";
    }
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
        "Not a valid ID ex: 30305032100056 (14 numbers)";
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
      landlineError.textContent =
        "Not a valid format ex: 0237451264 (10 numbers)";
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

    if (!isValidId) {
      if (idError != null) {
        id.className = "invalid";
        idError.textContent = "Not valid ID Ex:20220527";
        idError.className = "error";
        flag = false;
      }
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
    if (depError != null) {
      depError.textContent = "Can't be General, level is greater than 2";
      depError.className = "error";
      flag = false;
    }
  } else if (Number(level.value) <= 2 && dep.value != "General") {
    if (depError != null) {
      depError.textContent =
        "Department should be General, level is not compatible";
      depError.className = "error";
    } else {
      levelError.textContent =
        "Department is not General can't have this level!";
      levelError.className = "error";
    }
    flag = false;
  } else {
    if (depError != null) {
      depError.textContent = "";
      depError.className = "error";
    }
  }
  if (genderM != null && genderF != null) {
    if (!genderM.checked && !genderF.checked) {
      genderError.textContent = "Must Select a Gender!";
      genderError.className = "error";
      flag = false;
    } else {
      genderError.textContent = "";
      genderError.className = "error";
    }
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

  if (flag == true) {
    console.log("All good");
    form.submit();
  }
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
    if (nameError != null) {
      nameError.textContent = "";
      nameError.className = "error";
    }
  }
  return true;
}

function setNoError(field) {
  const fieldError = field.nextElementSibling;
  if (fieldError != null) {
    field.className = "valid";
    fieldError.textContent = "";
    fieldError.className = "error";
  }
}
