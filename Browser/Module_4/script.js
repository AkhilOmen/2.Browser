
// ..........................Creat Top Row...............
let topRow = document.querySelector(".top_row");
for(let i = 0; i < 26; i++){
    let div = document.createElement("div")
    div.setAttribute("class", "cell");
    div.textContent = String.fromCharCode(65+i);
    topRow.appendChild(div);
}

//............................Creat Left Column...........
let leftcol = document.querySelector(".left_col");
for( let i = 1; i <= 100; i++){
    let div = document.createElement("div");
    div.setAttribute("class", "cell");
    div.textContent = i;
    leftcol.appendChild(div);
} 

//............................Grid.....................
let grid = document.querySelector(".grid");
for(let i = 1; i <= 100; i++){

    let row = document.createElement("div");
    row.setAttribute("class", "row");

    for(let j = 0; j < 26; j++){
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        // div.textContent =  + i;
        div.setAttribute("contentEditable", "true");
        div.setAttribute("rid", i);
        div.setAttribute("cid", String.fromCharCode(65+j));
        row.appendChild(div);
    }

    grid.appendChild(row);
}

// ....................formula_bar.......................
let allgridcell = document.querySelectorAll(".grid .cell");
let addressInput = document.querySelector(".address_input");
for(let i = 0; i < allgridcell.length; i++){
    
    
    allgridcell[i].addEventListener("click", function(e){
        
        let PreviousAddress = addressInput.value;
        let PCell;
        if( PreviousAddress != ""){
            let PObj = getridcid(PreviousAddress);
            let rid_P = PObj.rid;
            let cid_P = PObj.cid;
            
            PCell = document.querySelector(`.grid .cell[rid='${rid_P}'][cid= '${cid_P}']`);
            PCell.style.border = "0.01px solid rgb(207, 205, 205)";
        }

        let rid = allgridcell[i].getAttribute("rid");
        let cid = allgridcell[i].getAttribute("cid");
        // alert(cid + rid);
        addressInput.value = cid+rid;
        let cCell = allgridcell[i];
        cCell.style.border = "2px solid rgb(51, 102, 153)";
        
    })
}

let firstcell = document.querySelector(".grid .cell[rid='1'][cid='A']") ;
firstcell.click();
firstcell.focus();

function getridcid(address){

    let cid = address.charAt(0);
    let rid = Number(address.slice(1));

    return{
        rid: rid,
        cid: cid
    }
}
