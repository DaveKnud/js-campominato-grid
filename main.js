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
        const newSquare = createNewCol ("div","square");
        container.append(newSquare);
        }

        newSquare.addEventListener("click",
        function(){
        newSquare.classList.add("blue-square");
        }
)   }
)

//FUNZIONI

    //Create new element
    function createNewCol(tagToAdd , classToAdd) {
        const newCol = document.createElement(tagToAdd);
        newCol.classList.add(classToAdd);
        return newCol;
    }

    //create random number
    function generaNumeroRandom(min , max) {
        const numeroRandom =  Math.floor(Math.random() * (max - min)) + min;
        return numeroRandom;
    }


