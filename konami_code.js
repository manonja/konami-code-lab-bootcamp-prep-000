const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here

// Keep track of index outside of the event handler.
let index = 0;


function triggerKeyDown(key) {
    const keyboardEvent = document.body.addEventListener("keydown", function(key){
      
    });
    ;
  }


// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;
   for (let i = 0, l = codes.length; i < l; i++) {
        triggerKeyDown(codes[i]);
        if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
        
      }

  
}
}
