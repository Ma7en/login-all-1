

/* start draw 4 */

let d4ball_3 = document.querySelector(".draw4 #ball_3"),
    d4empty_sides_3 = document.querySelector(".draw4 #empty_sides_3"),
    d4pokemon = document.querySelector(".draw4 #pokemon");


d4pokemon.addEventListener("click", () => {
    d4ball_3.classList.toggle("open");
});

/* end draw 4 */

/*
===============================================
===============================================
*/

/* start draw 6 */

let d6light = document.querySelector(".draw6 img"),
    d6butOn = document.querySelector(".draw6 #on"),
    d6butOff = document.querySelector(".draw6 #off");

d6butOn.addEventListener("click", () => {
    d6light.src="img/pic_bulbon.gif";
    d6butOn.style.color = "#f25b54";
});

d6butOff.addEventListener("click", () => {
    d6light.src="img/pic_bulboff.gif";
    d6butOn.style.color = "#000";
});


/* end draw 6 */

/*
===============================================
===============================================
*/

/* start draw 7 */
let d7rot_1_3 = document.querySelector(".draw7 #rot_1_3"),
    d7rot_s_1 = document.querySelector(".draw7 #rot_s_1"),
    d7on_2 = document.querySelector(".draw7 #on_2"),
    d7off_2 = document.querySelector(".draw7 #off_2");

d7on_2.addEventListener("click", () => {
    d7rot_1_3.style.backgroundColor = "#FFEB3B";
    d7rot_1_3.style.zIndex = "5";
    d7rot_s_1.style.backgroundColor = "#FFEB3B";
    d7rot_s_1.style.zIndex = "2";
});

d7off_2.addEventListener("click", () => {
    d7rot_1_3.style.backgroundColor = "#000";
    d7rot_s_1.style.backgroundColor = "#000";
});

/* end draw 7 */

/*
===============================================
===============================================
*/





