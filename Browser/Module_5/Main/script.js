
let CanvasBoard = document.querySelector("canvas");
CanvasBoard.width = window.innerWidth;
CanvasBoard.height = window.innerHeight;
let tool = CanvasBoard.getContext("2d");



// managing the offset while drawing
// console.log( CanvasBoard.getBoundingClientRect());
let movelet = CanvasBoard.getBoundingClientRect().left;
let movetop = CanvasBoard.getBoundingClientRect().top;


// Tool Selection
let rectTool = document.querySelector(".fas.fa-rectangle-wide");
let lineTool = document.querySelector(".fas.fa-grip-lines");
let SelectedTool = "rectTool";
rectTool.addEventListener("click", function(){
    console.log("recTool Selected");
    SelectedTool = "rectTool"
})
lineTool.addEventListener("click", function(){
    console.log("lineTool Selected");
    SelectedTool = "lineTool";
})

// shapes selection
let body = document.querySelector("body");
let iX, iY, fX, fY;
body.addEventListener("mousedown", function(e){
    iX = e.clientX - movelet;
    iY = e.clientY - movetop;
})

body.addEventListener("mouseup", function(e){
    fX = e.clientX - movelet;
    fY = e.clientY - movetop;
    let height = fY - iY;
    let width = fX - iX;
    if( SelectedTool == "rectTool"){
        tool.strokeRect(iX, iY, width, height);
    }else{
        tool.beginPath()
        tool.moveTo(iX, iY);
        tool.lineTo(fX, fY);
        tool.stroke()
    }
})

// Color selection
let ColorContainer = document.querySelector(".color_container");
ColorContainer.addEventListener("click", function(e){
    let ele = e.target;
    if( ele != "color_container"){
        let Select_color = ele.classList.value.split(" ")[1];
        tool.strokeStyle = Select_color;
    }
})




