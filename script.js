//DOM elements targetting the terrarium image and the draggable elements
dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

//displayCandy function puhshing new candy type to local candy array

/*DRY code . Not recommended to use this code
function displayCandy() {
  let candy = ["jellybeans"];

  function addCandy(candyType) {
    candy.push(candyType);
  }
  addCandy("gumdrops");
}

displayCandy();
console.log(candy);
*/

// **dragElement Closures**

// passing terrariumElement to dragElement function with default position set to 0 that will be updated by the onpointerdown event handler within the closure to each element (elements on top script)
// Each element will be populated so the set post values will keep track of current location of the element
function dragElement(terrariumElement) {
  //set 4 positions for the terrarium element
  let post1 = 0,
    post2 = 0,
    post3 = 0,
    post4 = 0;

  //webAPI event handler. Activates when button is pushed or draggable element is touched accessible on both web and mobile
  terrariumElement.onpointerdown = pointerDrag;

  //pointerDrag function will keep track of the current position of the element
  //preventDefault will prevent the default action of the element to be triggered
  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);

    //initial click position for post3 and post4
    post3 = e.clientX;
    post4 = e.clientY;

    // when the mouse moves, start the drag
    document.onpointermove = elementDrag;
    // when the mouse is lifted, stop the drag
    document.onpointerup = stopElementDrag;
  }

  //elementDrag function will keep track of the current position of the element and calcuate new current position
  function elementDrag(e) {
    //post1 = x position of the element - the x position of the mouse
    post1 = post3 - e.clientX;

    //post2 = x position of the element - the x position of the mouse
    post2 = post4 - e.clientY;

    //resetting the post3 and post4 to current location of Y-axis mouse
    post3 = e.clientX;
    post4 = e.clientY;
    console.log(post1, post2, post3, post4);

    //set the new position of the element
    terrariumElement.style.top = terrariumElement.offsetTop - post2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - post1 + "px";
  }

  //stopElementDrag function will stop the drag event from happening
  function stopElementDrag() {
    // stop calculating when mouse is released and remove event listeners by setting values to null
    document.onpointerup = null;
    document.onpointermove = null;
  }
}
