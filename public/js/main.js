const subUl = document.querySelector("ul.sub"); // on vise le sub menu 
const firstUl = document.querySelector("ul"); 

//firstUl.transition="all 2s"; 
//subUl.style.transition="all 2s";

subUl.style.display="none";  // on le cache;  

const li = document.querySelector("li"); // le premier li; 

li.addEventListener("click", () => {

    let DisplayUlValue = subUl.style.display; 

   if(DisplayUlValue == "none"){
       subUl.style.display = "block"; 

   }else if(DisplayUlValue == "block"){
       subUl.style.display = "none"; 
    }

    /* 
        visibility: visible;
        opacity: 1;
        transition-delay: 0s, 0s;

    */

})
