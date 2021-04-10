/* Javascript function to switch between show and hide for the dropdown*/ 


let dropHome = () => { let toggle = document.getElementById("home-btn"); 
let content = document.getElementById("drop-content"); 
toggle.addEventListener("click", ()=> { content.classList.toggle("hide"); }); };



