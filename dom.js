console.log("test");

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const section = document.querySelector("section");

const addBlockBtn = document.querySelector("button:first-child");
const RemoveMDWGC = document.querySelector("button:nth-child(2)");
const RemoveChildWGC = document.querySelector("button:last-child");

// this code was given
addBlockBtn.addEventListener("click", addBlock);

function addBlock() {
  section.innerHTML += `<div style="display: flex;padding: 20px;margin: 10px;justify-content: space-around;background-color: green;">
<button>Change Colour</button>
<div style="width: 50px;height: 50px;background-color: red;"></div>
</div>`;

  // scrapping the section Element
  let items = section.querySelectorAll("*");
  items.forEach((item) => {
    // checking and selecting the button element in the section start here
    if (item.tagName == "BUTTON") {
      // adding a click event listener to the button element
      item.addEventListener("click", () => {
        // adding random number generator
        let num = Math.floor(Math.random() * 7);
        let parentDiv = item.parentElement;
        let sisDiv = item.nextElementSibling;
        parentDiv.style.backgroundColor = colors[num];
        sisDiv.style.backgroundColor = colors[(num += 1)];

        // for parent div green background
        parentDiv.addEventListener("click", () => {
          console.log("Parent clicked");
          // checking for the red sister div start here
        });

        // checking for the red div end here
        sisDiv.addEventListener("click", () => {
          let num = Math.floor(Math.random() * 7);
          parentDiv.style.backgroundColor = colors[num];
          sisDiv.style.backgroundColor = colors[(num += 1)];
          // checking for the red sister div start here
        });
      });
    }
  });
  //ends here
}
// scrapping section

//Remove mother div with a given color
RemoveMDWGC.addEventListener("click", () => {
  const userColor = prompt("Enter Color");
  mainColor = userColor.toLowerCase();
  //  console.log(mainColor);
  // return all the children section
  // scarpe section
  const all = section.querySelectorAll("div");
  all.forEach((item) => {
    if ((item.innerHTML.length = 1)) {
      if (item.style.backgroundColor == mainColor) {
        item.remove();
      }
    }
  });
});

//remove child with a given color
RemoveChildWGC.addEventListener("click", () => {
  const userColor = prompt("Enter Color");
  mainColor = userColor.toLowerCase();
  // console.log(mainColor);
  // scarpe section
  const all = section.querySelectorAll("div");
  all.forEach((item) => {
    if (item.innerHTML.length < 1) {
      if (item.style.backgroundColor == mainColor) {
        item.remove();
      }
    }
  });

});

/*
HOMEPLAY
Run the code above, Study and understand the code block above both the html and js file and complete the following:
Write a code that:
1) the "Add Block" button adds a new block inside the section using the addBlock function already provided.
2) when you click the "change color button", it changes the colour of its mother div and its sister div respectively to any random color of either RED, ORANAGE, YELLOW, GREEN, BLUE, INDIGO and VIOLET
3) The color of the mother div and the color of the child div must never be the same)
4) If you click the child div or block, only the colour of its mother div changes
5) If you click the mother div, the colour of all the child divs or block in all the mothers div becomes the same
6) Write a function for the "Remove a Mother div with a given colour" button that removes any mother with a specified colour from the DOM
7) Write a function for the "Remove a child div with a given colour" button that removes any mother div from the DOM whose child div has a specified colour from the DOM
NOTE AGAIN: DO NOT WRITE ANYTHING IN THE HTML DOCUMENT OR ADJUST WHAT HAS BEEN WRITTEN ALREADY IN THE JS FILE, JUST ADD MORE CODE TO THE JS FILE ONLY AND EVERYTHING YOU DO MUST BE IN THE JS FILE ALONE
*/
