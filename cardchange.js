const card1=document.querySelector(".card-one");
const card2=document.querySelector(".card-two");
const card3=document.querySelector(".card-three");

const skipTutorialBtn=document.querySelector("#skip-tutorial");
const next1=document.querySelector("#next-page-btn1");
const next2=document.querySelector("#next-page-btn2");
const next3=document.querySelector("#next-page-btn3");


function skipTutorial(){
    card1.classList.add("invisible");
    card2.classList.add("invisible");
    card3.classList.add("invisible");

}
function nextPageOne(){
    card1.classList.add("invisible");
}
function nextPageTwo(){
    card2.classList.add("invisible");
}
function nextPageThree(){
    card3.classList.add("invisible");
}
