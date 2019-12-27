/*Author krishna kakade 
Twitter :-https://twitter.com/krishna_9918
Mail:-krishnakakade77@gmail.com
*/
window.addEventListener('load',()=>{
const sounds =document.querySelectorAll(".sound");
const pads =document.querySelectorAll('.pads div');
 
const visual=document.querySelector(".visual");
const colors=[
    "green",
    "ivory",
    "khaki",
    "lime",
    "maroon",
    "midnightblue",
    "firebrick"
];
console.log(sounds[0]);
//i am going with the sounds here
pads.forEach((pads,index) => {
    pads.addEventListener('click',function(){
        sounds[index].currentTime=0;
        sounds[index].play();
        createBuuble(index);
});
});


//makes bubbles
const createBuuble =(index) =>{
 const bubble  =document.createElement("div");
 visual .appendChild(bubble);
 bubble.style.backgroundColor=colors[index];
 bubble.style.animation=`jump 1s ease`;
 bubble.addEventListener("animationed",function(){
 
visual.removeChild(this);
});
};
});
