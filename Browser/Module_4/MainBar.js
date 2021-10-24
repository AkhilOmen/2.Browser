
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
    let Cell = document.querySelector(`.grid .cell[rid = '${CellObj.rid}'][cid = '${CellObj.cid}']`)
    
    // Cell.style.fontfamily = "sans-serif";

})