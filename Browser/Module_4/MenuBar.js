
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