
//select form and input element
var username = document.querySelector("#fullname");
var email = document.querySelector("#email");
var pass = document.querySelector("#password");
var confiPass = document.querySelector("#confirm-pass");
var form = document.querySelector("form");
//function to show the error message
function showError(input, mess) {
    let parent = input.parentElement;
    let small = parent.querySelector("small");

    parent.classList.add("error");
    small.innerText = mess;
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector("small");

    parent.classList.remove("error");
    small.innerText = ' ';
}

function checkEmpty(listInput) {
    let isEmptyValue = true;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value){
            isEmptyValue = false;
            showError(input, "Không được bỏ trống!");
        }else{
            showSuccess(input);
        }
    });
    return isEmptyValue;
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkEmpty([username, email, pass, confiPass]);
})


// Ẩn hiện password
//Nhập pass vào ô input:
// Hiện pass + mắt bth: click icon thì pass hiện
// Ẩn pass() + mắt có chéo: click icon mắt thì pass ẩn
{/* <i class="fa-solid fa-eye-slash"></i> */}


// function showHidePass() {
//     let password = document.getElementById("password");
//     let 
//     if(password.type == "text"){
//         password.type == "password";
//      }else{
//         password.type == "text";
//      }
// }
// var input_check = document.querySelector(".inp_check");
// input_check.addEventListener('click', function () {
//     let pass_word = document.getElementById("password");
//     // let confir_passs = document.getElementById("confirm_pass");
//     if(pass_word .type === "password"){
//         pass_word .type === "text";
//      }else{
//         pass_word .type === "password";
//      }
// })

// toggle password
const pass_word = document.getElementById("password");
const eyebtn = document.getElementById("eye-pass");

let isPassVisible = false;
function showHidePass(){
    isPassVisible = !isPassVisible;
    pass_word.type = isPassVisible ? "text" : "password";
    eyebtn.classList.toggle("fa-regular fa-eye-slash");
}
eyebtn.addEventListener('click',showHidePass);

// toggle confirm password
// const confirmPass = document.getElementById("confirm_pass");
// const eyeConfirmbtn = document.getElementById("eye-confi-pass");

// let isPassWordVisible = false;
// function showHidePassConfirm(){
//     isPassWordVisible = !isPassWordVisible;
//     confirmPass.type = isPassWordVisible ? "text" : "password";
//     eyeConfirmbtn.classList.toggle("fa-regular fa-eye-slash");
// }
// eyeConfirmbtn.addEventListener('click',showHidePassConfirm);