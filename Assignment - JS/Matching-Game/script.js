var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

//Generate Smiley Faces - Left Panel
function generateFaces() {
    //Remvoing Last Child - Left Panel
    while (theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    //Removing Last Child - Right Panel
    while (theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    //Generating Image
    for (var i = 0; i < numberOfFaces; i++) {
        image = document.createElement("img");
        image.src = "smile.png";
        image.style.top = Math.floor(Math.random() * 401) + "px";
        image.style.left = Math.floor(Math.random() * 401) + "px";
        theLeftSide.appendChild(image);
    }
    //Clone Left-Panel to Right-Panel
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    //Generating Game Logic
    //EventHandler for Extra Face
    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;
        generateFaces();
    };
    //EventHandler function for the body
    theBody.onclick = function gameOver() {
        alert("Game Over!");
        location.reload();
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;

    }
};