var main = document.querySelector('.main');
var email = document.getElementById('email');
var output = document.getElementById('output');
var warning = document.getElementById('warning')
const slice = document.getElementById('btn');

const open=document.getElementById("open");
const close=document.getElementById("close");
const container=document.getElementById("container");

open.addEventListener('click',()=>{
    container.classList.add('active');
})

close.addEventListener('click',()=>{
    container.classList.remove('active');
})

function negativeCase(){
    warning.style.visibility="visible";
    warning.style.color="coral";
    warning.innerHTML="Enter a valid email"
    main.style.backgroundColor="#ff7c000d";
    slice.setAttribute('disabled','true');
    output.style.backgroundColor="#e88b1029";
    output.value="";
};

function positiveCase(){
    warning.style.visibility="hidden";
    main.style.backgroundColor="#7ba0af0d";
    slice.removeAttribute('disabled');
    output.style.backgroundColor="#3af9290a";
}


function checkStringOnMail(e){
    let data=e.target.value.toString();
    let len = data.length;
    if(data.includes('@')&&data.includes('.') && len > 5 && data[len - 1]!="."){
        positiveCase()
    }else{
        negativeCase()
    }
};

email.addEventListener('keyup',(e)=>{
    checkStringOnMail(e);
})

email.addEventListener('change',(e)=>{
    checkStringOnMail(e);
})

function slicer(){
    var str = email.value;
    var count = 0;
    for (let i=0;i<str.length;i+=1){
        if (str[i]=="@"){
            count+=1;
        }
    }
    if(str == null || str === "" || count>1) {
        negativeCase();
    }else{
        positiveCase();
        try{
            eel.sliceEmail(str)(callback);
        }catch{
            let [user_name,domain_name]=str.split('@');
                console.log([user_name,domain_name]);
                output.value=`user name : ${user_name}    domain name : ${domain_name}`;
                output.style.backgroundColor="#3af9290a";
        }  
    }
}

function callback([user_name,domain_name]){
    console.log([user_name,domain_name]);
    output.value=`User name : ${user_name}    Domain name : ${domain_name}`;
    output.style.backgroundColor="#d4f9290a";
}

slice.addEventListener('click',(e)=>{
    e.preventDefault();
    slicer();
})

