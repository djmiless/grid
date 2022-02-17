const target = document.querySelector(".target");
const target1 = document.querySelector(".fly-in");
// const aside1 = document.queryselector(".aside");

//target1.style.display = "none";
//target1.style.transform = "translateX(-100%)";



target1.addEventListener("click", function(){

 
  target1.style.transform = "translateX(-100%)";
})


target.addEventListener("click", function(){
    //target1.style.display = "";
    target1.style.transform = "translateX(0%)";
  })

