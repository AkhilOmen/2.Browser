
// ....................Font_Size_Change............................
let fontsizeInput = document.querySelector(".font_size_input");
fontsizeInput.addEventListener("change", function(){
    let Changedfontsize = fontsizeInput.value;
    let CellAddress = addressInput.value;
    let CellObj = getridcid(CellAddress);
    let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`)
    
    Cell.style.fontSize = Changedfontsize+"px";
    
});

// ....................Font_family_Change.....................
let fontfamilyInput = document.querySelector(".font_family_input");
fontfamilyInput.addEventListener("change", function(){
    let ChangedfontFamily = fontfamilyInput.value;
    let CellAddress = addressInput.value;
    let CellObj = getridcid(CellAddress);
    let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
    
    Cell.style.fontFamily = ChangedfontFamily;
    
})

// .........................Font_Style Container...............
let fontstyleInput = document.querySelector(".style_container");
let activatebold = false;
let activateitalic = false;
let activateunderline = false;

fontstyleInput = document.addEventListener("click", function(e){
    let element = e.target;
    // console.log(element);
    let fontstyleinput = element.classList[2];
    // console.log(fontstyleinput);
    if(fontstyleinput == 'bold' || fontstyleinput == 'italic' || fontstyleinput == 'underline'){
        let CellAddress = addressInput.value;
        let CellObj = getridcid(CellAddress);
        let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
        
        if(fontstyleinput == "bold"){
            if(activatebold == false){
                Cell.style.fontWeight = "bold";
                activatebold = true;
                element.classList.add("selected");
            }else{
                Cell.style.fontWeight = "normal";
                activatebold = false;
                element.classList.remove("selected");
            }
        }
        if(fontstyleinput == "italic"){
            if(activateitalic == false){
                Cell.style.fontStyle = "italic";
                activateitalic = true;
                element.classList.add("selected");
            }else{
                Cell.style.fontStyle = "normal";
                activateitalic = false;
                element.classList.remove("selected");
            }
        }
        if(fontstyleinput == "underline"){
            if(activateunderline == false){
                Cell.style.textDecoration = "underline";
                activateunderline = true;
                element.classList.add("selected");
            }else{
                Cell.style.textDecoration = "none";
                activateunderline = false;
                element.classList.remove("selected");
            }
        }
        
    }
    
})

// ...................Alignment Container....................
let AlignmentInput = document.querySelector(".alignment_container");
let AllAlignmentInput = document.querySelectorAll(".alignment_container div i")
let alignleftActive = false;
let alignrightActive = false;
let aligncenterActive = false;
let alignjustifyActive = false;
// console.log(AlignmentInput);
AlignmentInput.addEventListener("click", function(e){
    let element = e.target;
    // console.log(element);
    let alignInput = element.classList[2];
    // console.log(alignInput);
    if(alignInput == 'right' || alignInput == 'left' || alignInput == 'center' || alignInput == 'justify'){
        let CellAddress = addressInput.value;
        let CellObj = getridcid(CellAddress);
        let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
        
        
        if(alignInput == "left"){
            
            if( alignleftActive == false){
                for( let i = 0; i < AllAlignmentInput.length; i++ ){
                    AllAlignmentInput[i].classList.remove("selected")
                }
                Cell.style.textAlign = alignInput;
                alignleftActive = true;
                alignrightActive = false;
                aligncenterActive = false;
                alignjustifyActive = false;
                element.classList.add("selected");
            }else{
                Cell.style.textAlign = "left";
                alignleftActive = false;
                element.classList.remove("selected");
            }
            
        }
        
        if(alignInput == "right"){
            
            if( alignrightActive == false){
                for( let i = 0; i < AllAlignmentInput.length; i++ ){
                    AllAlignmentInput[i].classList.remove("selected")
                }
                Cell.style.textAlign = alignInput;
                alignrightActive = true;
                alignleftActive = false;
                aligncenterActive = false;
                alignjustifyActive = false;
                element.classList.add("selected");
            }else{
                Cell.style.textAlign = "left";
                alignrightActive = false;
                element.classList.remove("selected");
            }
            
        }
        
        if(alignInput == "center"){
            
            if( aligncenterActive == false){
                for( let i = 0; i < AllAlignmentInput.length; i++ ){
                    AllAlignmentInput[i].classList.remove("selected")
                }
                Cell.style.textAlign = alignInput;
                aligncenterActive = true;
                alignleftActive = false;
                alignrightActive = false;
                alignjustifyActive = false;
                element.classList.add("selected");
            }else{
                Cell.style.textAlign = "left";
                aligncenterActive = false;
                element.classList.remove("selected");
            }
            
        }
        
        if(alignInput == "justify"){
            
            if( alignjustifyActive == false){
                for( let i = 0; i < AllAlignmentInput.length; i++ ){
                    AllAlignmentInput[i].classList.remove("selected")
                }
                Cell.style.textAlign = alignInput;
                alignjustifyActive = true;
                alignleftActive = false;
                alignrightActive = false;
                aligncenterActive = false;
                element.classList.add("selected");
            }else{
                Cell.style.textAlign = "left";
                alignjustifyActive = false;
                element.classList.remove("selected");
            }
            
        }
        

    }

})

// .................................... Color Container.......................................
// ...................font color
let textcolorInput = document.querySelector(".fa-tint");
let hiddentextcolorInput = document.querySelector(".font_color_input");

textcolorInput.addEventListener("click", function(){
    hiddentextcolorInput.click();
})

hiddentextcolorInput.addEventListener("change", function(e){
    let fontcolor = hiddentextcolorInput.value;
    // console.log(fontcolor);
    let CellAddress = addressInput.value;
    let CellObj = getridcid(CellAddress);
    let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
    
    Cell.style.color = fontcolor;
})

//...............................BackGround color
let backgroundInput = document.querySelector(".fa-fill-drip");
let hiddenbackgroundInput = document.querySelector(".background_color_input");

backgroundInput.addEventListener("click", function(){
    hiddenbackgroundInput.click();
})

hiddenbackgroundInput.addEventListener("change", function(){
    let backgroundclr = hiddenbackgroundInput.value;
    let CellAddress = addressInput.value;
    let CellObj = getridcid(CellAddress);
    let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
    
    Cell.style.backgroundColor = backgroundclr;

})

