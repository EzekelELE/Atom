
var path = document.querySelectorAll("path"),
    circle = document.querySelectorAll("circle"),
    svg = document.querySelectorAll("svg");

    var i = 0;
path.forEach(element => {
    element.setAttribute("style", "stroke-dasharray:" + element.getTotalLength() + "; stroke-dashoffset: "+ element.getTotalLength() + "; stroke-dashoffset: "+ 0  );
    console.log(element.getTotalLength());
    
    i++;
});

svg.forEach(element => {
    if (i%2 == 0) {
        element.setAttribute("style", "transform: rotateZ(" + 45 * i + "deg"+ ")");
    }else{
        element.setAttribute("style", "transform: rotateZ(" + -45 * i + "deg"+ ")");
    }
    
    i++;

});




var main = document.querySelector(".main");

main.addEventListener("click", anim);

function anim(){
    main.removeEventListener("click", anim);
    path.forEach(element => {
        if (element.classList.contains("path-animation-closed")) {
            element.classList.remove("path-animation-closed");
            element.classList.add("path-animation-opened");
        }else{
            element.classList.remove("path-animation-opened");
            element.classList.add("path-animation-closed");
        }
        
    });

    circle.forEach(element=>{
        element.classList.add("circle-animation");
    });
}


main.addEventListener("animationend",function(){
    main.addEventListener("click", anim);
    // path.forEach(element => {
    //   element.classList.remove("path-animation");
    // });

    circle.forEach(element=>{
        element.classList.remove("circle-animation");
    });
});