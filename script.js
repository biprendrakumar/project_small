const box=document.querySelector(".small-box");
const btn=document.querySelector("#btn");
let smallbox=true;
btn.addEventListener("click",function(){
    // box.classList.remove("small-box");
    // box.classList.add("big-box");
    if(smallbox===true){
        box.classList.remove("small-box");
    box.classList.add("big-box");
    smallbox=false;
    }else{
        box.classList.remove("big-box");
    box.classList.add("small-box");
    smallbox=true;
    }

})