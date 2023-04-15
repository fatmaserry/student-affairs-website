const userid=document.getElementById("userid");
const password= document.getElementById("password");

form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();
});

const seterror= (element,message)=>{
    const inputcontrol=element.parentElement;
    const errordisplay=inputcontrol.querySelector('.error');

    errordisplay.innerText=message;
    inputcontrol.classList.add('error');
    inputcontrol.classList.remove('success');
};

const setsuccess= element=>{
    const inputcontrol=element.parentElement;
    const errordisplay=inputcontrol.querySelector('.error');

    errordisplay.innerText='';
    inputcontrol.classList.add('success');
    inputcontrol.classList.remove('error');
};

const validateInputs= ()=> {
    const useridvalue=userid.value.trim();
    const passwordvalue=password.value.trim();

    if(useridvalue===''|| !isNaN(useridvalue)){
        seterror(userid,"Please enter user id");
    }
    else{
        setsuccess(userid);
    }

    if(passwordvalue === '') {
        seterror(password, "Password is required");
    } else if (passwordvalue.length < 8 ) {
        seterror(password, 'Password must be at least 8 character.')
    } else {
        setsuccess(password);
    }

};