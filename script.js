let mode=document.querySelector("#toggle");
let currMode= "light"; //dark

mode.addEventListener("click", ()=>{
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body","ton").style.backgroundColor="#6a6a6bff";
    }
    else{
        currMode="light";
    document.querySelector("body").style.backgroundColor="white";

}
})