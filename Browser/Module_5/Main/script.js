let CanvasBoard = document.querySelector("canvas");
CanvasBoard.width = window.innerWidth;
CanvasBoard.height = window.innerHeight;
let tool = CanvasBoard.getContext("2d");


// managing the offset while drawing
// console.log( CanvasBoard.getBoundingClientRect());
let moveleft = CanvasBoard.getBoundingClientRect().left;
let movetop = CanvasBoard.getBoundingClientRect().top;


// Tool Selection

// .............................................Shape_container.................................
let ShapeContainer = document.querySelector(".shape_tool");
let ShapeToolSelected = "false";
ShapeContainer.addEventListener("click", function(){
    if( ShapeToolSelected == "false"){
        ShapeToolSelected = "true"
    }else if( ShapeToolSelected == "true"){
        ShapeToolSelected = "false";
    }
})

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

// ...........Shapes Selection
let body = document.querySelector("body");
let iX, iY, fX, fY;
body.addEventListener("mousedown", function(e){
    iX = e.clientX - moveleft;
    iY = e.clientY - movetop;
    
})
body.addEventListener("mouseup", function(e){
    fX = e.clientX - moveleft;
    fY = e.clientY - movetop;
    let height = fY - iY;
    let width = fX - iX;
    if( SelectedTool == "rectTool" && ShapeToolSelected == "true"){
        tool.strokeRect(iX, iY, width, height);
    }else if( SelectedTool == "lineTool" && ShapeToolSelected == "true"){
        tool.beginPath()
        tool.moveTo(iX, iY);
        tool.lineTo(fX, fY);
        tool.stroke()
    }
    
})

//.......................Color selection
let ColorContainer = document.querySelector(".color_container");
ColorContainer.addEventListener("click", function(e){
    let ele = e.target;
    if( ele != "color_container"){
        let Select_color = ele.classList.value.split(" ")[1];
        tool.strokeStyle = Select_color;
    }
})

//...................................................Pensil Container..........................
let PensileContainer = document.querySelector(".pensil");
let PensileToolSelected = "false";
PensileContainer.addEventListener("click", function(e){
    if( PensileToolSelected == "false"){
        PensileToolSelected = "true";
    }else if(PensileToolSelected == "true"){
        PensileToolSelected = "false";
    }
})

let i1X, i1Y, f1X, f1Y;
let PensileMode = "false";
body.addEventListener("mousedown", function(e){
    PensileMode = "true";
    i1X = e.clientX - moveleft;
    i1Y = e.clientY - movetop;
    // tool.beginPath();
})
body.addEventListener("mouseup", function(){
    PensileMode = "false";
})
body.addEventListener("mousemove", function(e){
    if( PensileMode == "true" && PensileToolSelected == "true" ){
        f1X = e.clientX - moveleft;
        f1Y = e.clientY - movetop;
        tool.beginPath();
        tool.moveTo(i1X, i1Y);
        tool.lineTo(f1X, f1Y);
        tool.stroke();
        i1X = f1X;
        i1Y = f1Y;
    }
})




