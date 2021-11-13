
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
    let fontstyleinput = element.classList[1].split("-")[1];
    // console.log(fontstyleinput);
    if(fontstyleinput == 'bold' || fontstyleinput == 'italic' || fontstyleinput == 'underline'){
        let CellAddress = addressInput.value;
        let CellObj = getridcid(CellAddress);
        let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
        
        if(fontstyleinput == "bold"){
            Cell.style.fontWeight = "bold";
        }
        if(fontstyleinput == "italic"){
            Cell.style.fontStyle = "italic";
        }
        if(fontstyleinput == "underline"){
            Cell.style.textDecoration = "underline";
        }
        
    }
    
})

// ...................Alignment Container....................
let AlignmentInput = document.querySelector(".alignment_container");

AlignmentInput.addEventListener("click", function(e){
    let element = e.target;
    // console.log(element);
    let alignInput = element.classList[1].split("-")[2];
    // console.log(alignInput);
    if(alignInput == 'right' || alignInput == 'left' || alignInput == 'center' || alignInput == 'justify'){
        let CellAddress = addressInput.value;
        let CellObj = getridcid(CellAddress);
        let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
        
        Cell.style.textAlign = alignInput;
        
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
    console.log()
    let CellAddress = addressInput.value;
    let CellObj = getridcid(CellAddress);
    let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`);
    
    Cell.style.backgroundColor = backgroundclr;

})

