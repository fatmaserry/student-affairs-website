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