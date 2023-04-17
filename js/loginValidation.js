

const userid=document.getElementById("userid");
const password= document.getElementById("password");
const form= document.getElementById("loginform");



form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();
    if((password.parentElement.classList.contains("success"))&&(userid.parentElement.classList.contains("success"))){
    checkAccount();
    if((password.parentElement.classList.contains("success"))&&(userid.parentElement.classList.contains("success"))){
        location.replace("index.html");
    }
}
    
});

const checkAccount=()=>{
    const useridvalue=userid.value.trim();
    const passwordvalue=password.value.trim();
if(localStorage.getItem(String(useridvalue))== null){
    seterror(userid,"Please enter correct user id");
    seterror(password,"");
}
else{
    setsuccess(userid);
    if(localStorage.getItem(String(useridvalue))!=passwordvalue){
        seterror(password,"Please enter correct password");
    }
    else{
        setsuccess(password);
    }
}
}

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

    if(useridvalue===''){
        seterror(userid,"Please enter user id");
    }
    else{
    if(/^\d*\.?\d*$/.test(useridvalue)){
        setsuccess(userid);
    }else{
        seterror(userid,"enter numbers for user id");
    }
    if(useridvalue.length<6){
        seterror(userid,"enter 6 digits for user id");
    }
    
}

    if(passwordvalue === '') {
        seterror(password, "Password is required");
    } else if (passwordvalue.length < 8 ) {
        seterror(password, 'Password must be at least 8 character.')
    } else {
        setsuccess(password);
    }

    
    /*console.log(password.parentElement.classList);
    console.log(userid.parentElement.classList);*/

};