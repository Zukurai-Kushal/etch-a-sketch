let gridSize = 16;
const container = document.querySelector(".container");
const clearButton = document.querySelector("#clear");
const resizeButton = document.querySelector("#resize");

function createGrid(gridSize){
    for (let i=0; i<gridSize; i++){
        let divRow = document.createElement("div");
        divRow.classList.add("row");
        for (let j=0; j<gridSize; j++){
            let sketchElement = document.createElement("div");
            sketchElement.classList.add("sketch-element");
            divRow.appendChild(sketchElement);
        }
        container.appendChild(divRow);
    }
}

function removeGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

container.addEventListener("mouseover", (e)=>{
    if(e.target.classList.contains("sketch-element")){
        e.target.style.background = "grey";
    }
});

clearButton.addEventListener("click", ()=>{
    removeGrid();
    createGrid(gridSize);
});

resizeButton.addEventListener("click", ()=>{
    let userInput = +prompt("Input grid size (Max is 100):");
    if(userInput > 0 && userInput <=100){
        gridSize = userInput;
        removeGrid();
        createGrid(gridSize);
    }else{
        alert("Invalid Input!");
    }
})

createGrid(gridSize);


// let divElement = document.createElement("div");
// container.appendChild(divElement);