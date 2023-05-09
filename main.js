//Const container
const container = document.getElementById("container");
console.log("Ciao");

//const button
const button = document.getElementById("button");
console.log("Button");

//create click button
button.addEventListener("click",
    function() {
       button.innerHTML = `Let's go`;
       
       for (let i = 0; i < 100; i++){
        const newSquare =  createSquare();
        container.append(newSquare);
        }

    
    }
)



//FUNZIONI
function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    return square;
}


