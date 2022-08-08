
// CLICKING THE BUTTON WILL BE DISPLAYED ON INPUT FIELD

function view(num){
    document.querySelector('input').value+=num;
}



// ADDING EVENT LISTENERS TO LISTEN FOR CLICKS

let input='';
document.getElementById("equal").addEventListener("click", button);
document.getElementById("CE").addEventListener("click",clear);




// COMPUTING LOGIC

function button(){
    input=eval(document.querySelector("input").value);
    document.querySelector("input").value=input;
}



// TO CLEAR THE INPUT

function clear(){
    input='';
    document.querySelector("input").value=input;

}





// function colorChange(){
//     document.querySelector("button").style.backgroundColor="brown";
// }

// let string='';
// let buttons=document.querySelectorAll("button");
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{

//     } )
// })

// let buttons=Array.from(document.querySelectorAll("button"));
// buttons.map(button => {
//     button.addEventListener("click", (e)=>{
//         switch(e.target.innerText){
//             default:
//                 document.querySelector("input").innerText += e.target.innerText;
//         }
//     });
// });




