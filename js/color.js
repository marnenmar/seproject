function setColors(doc, mainColor, secondColor, thirdColor) {
    doc.getElementById("header").style.backgroundColor = mainColor;
    doc.getElementById("all-content").style.backgroundColor = mainColor;
    changeColorElements(doc.getElementsByClassName("button"), secondColor);
    changeColorElements(doc.getElementsByClassName("form-button"), thirdColor);
    changeColorElements(doc.getElementsByClassName("opc"), mainColor);
	changeColorElements(doc.getElementsByClassName("selected-button"), mainColor);
	changeColorElements(doc.getElementsByClassName("tr-header"), thirdColor);
}

function changeColorElements(array,color) {
    for (i = 0; i < array.length; i++) {
        array[i].style.backgroundColor = color;
    }    
}