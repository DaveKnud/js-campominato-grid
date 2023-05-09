//Const container
const container = document.getElementById("container");
console.log("Ciao");

//const button
const button = document.getElementById("button");
console.log("Button");

//create click button
button.addEventListener("click",
    function() {
       button.classList.add("inactive");
       
       for (let i = 0; i < 100; i++){
        const square = createNewSquare ("div","square");
        container.append(square);
        }

        newSquare.addEventListener("click",
            function(){
                newSquare.classList.add("blue-square");
            }
        )


    }
)



//FUNZIONI
function createNewSquare(tagToAdd , classToAdd) {
    const newSquare = document.createElement(tagToAdd);
    newSquare.classList.add(classToAdd);
    return newSquare;
}


