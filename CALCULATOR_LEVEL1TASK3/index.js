let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

let clickSound = new Audio('click.mp3'); 

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    clickSound.play(); 

    
    e.target.classList.add("button-pressed");
    setTimeout(() => {
      e.target.classList.remove("button-pressed");
    }, 150);

    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
        input.value = string; 
      } catch {
        input.value = "Error"; 
      }
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === "DEL") {
      string = string.substring(0, string.length - 1); 
      input.value = string;
    } else {
      string += e.target.innerHTML; 
      input.value = string; 
    }
  });
});
