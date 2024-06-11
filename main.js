let form = document.querySelector("form");
let input = document.querySelectorAll(`input:not(input[type="submit"])`)
let regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//when the user clicks the submit button on the form we will cehck each input
//if the input is empty we will display the error massage
form.addEventListener("submit",(e)=>{
    input.forEach((el)=>{
        if(el.value == ""){
            e.preventDefault()
            el.nextElementSibling.style.display = "block";
            el.placeholder = "email@example/com";
        }else if( !el.value.match(regx)){
            e.preventDefault()
            el.nextElementSibling.style.display = "block";
        }
    })
})

// now we want the reverse to happen which is if the error massage is displayed
//and the user is going to fix the error it should disapper
input.forEach((el)=>{
    el.addEventListener("focus",()=>{
        el.nextElementSibling.style.display = "none";
        el.placeholder = "Your email address"
    })
})

function allErrorGone(){
    for(let i  = 0 ; i < error.length ; i++){
        if(getComputedStyle(error[i]).display != 'none'){
            return false;
        }
    }
    return true;
}