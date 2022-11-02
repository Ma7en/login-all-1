


/*  
===============================================
===============================================
*/

/* start login 1 */

let login1 = document.querySelector(".login-1")
let L1signUpButton = login1.querySelector('#signUp');
let L1signInButton = login1.querySelector('#signIn');
let L1container = login1.querySelector('#container');

L1signUpButton.addEventListener('click', () => {
    L1container.classList.add("right-panel-active");
});

L1signInButton.addEventListener('click', () => {
    L1container.classList.remove("right-panel-active");
});




/* end login 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start login 2 */
let L2login = document.querySelector(".login-2 #login");
let L2register = document.querySelector(".login-2 #register");
let L2btnLogin = document.querySelector(".login-2 .button-box .login");
let L2btnRegister = document.querySelector(".login-2 .button-box .rigister");


L2btnRegister.addEventListener("click", () => {
    L2login.style.left = "-400px";
    L2register.style.left = "50px";
    L2btnLogin.classList.remove("active");
    L2btnRegister.classList.add("active");
});

L2btnLogin.addEventListener("click", () => {
    L2login.style.left = "50px";
    L2register.style.left = "450px";
    L2btnLogin.classList.add("active");
    L2btnRegister.classList.remove("active");
});


/* end login 2 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start login 3 */

let login3 = document.querySelector(".login-3");
let L3RegisterLink = login3.querySelector(".go-to-register");
let L3LoginLink = login3.querySelector(".go-to-login");
let L3Form = login3.querySelector(".form-container");

L3RegisterLink.addEventListener("click", () => {
    L3Form.classList.add("rotate");
});

L3LoginLink.addEventListener("click", () => {
    L3Form.classList.remove("rotate");
});




/* end login 3 */

/*  
===============================================
===============================================
*/




/*  
===============================================
===============================================
*/

/* start login 4 */

let login4 = document.querySelector(".login-4");
let L4Pass_Field = login4.querySelector(".password");
let L4Show_btn = login4.querySelector(".show");

L4Show_btn.addEventListener("click", () => {
    if(L4Pass_Field.type === "password") {
        L4Pass_Field.type = "text";
        L4Show_btn.textContent = "Hide";
        L4Show_btn.style.color = "#3498db";
    } else {
        L4Pass_Field.type = "password";
        L4Show_btn.textContent = "Show";
        L4Show_btn.style.color = "#222";
    }
});


/* end login 4 */

/*  
===============================================
===============================================
*/

/* start login 5 */

const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});

function moveSlider() {
    let index = this.dataset.value;

    let currentImage = document.querySelector(`.img-${index}`);
    images.forEach((img) => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
});

/* end login 5 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start login 6 */



/* end login 6 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start login 7 */



/* end login 7 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start login 8 */



/* end login 8 */

/*  
===============================================
===============================================
*/

