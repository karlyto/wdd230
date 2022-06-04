// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const list = document.querySelector("ul");

// button.addEventListener("click", () => {
//     const items = favchap.value;
//     favchap.value = "";

//     const listElement = document.createElement("li");
//     const listText = document.createElement("span");
//     const listButton = document.createElement("button")

//     listElement.textContent = items;
//     listButton.textContent = "❌";

//     listElement.appendChild(listButton);
//     listElement.appendChild(listText)
//     list.appendChild(listElement);
    
//     listButton.addEventListener("click",() => {
//         list.removeChild(listElement);
//     });

//     input.focus();
// });

const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
    if (input.value != "") {

    let newlistElement = document.createElement("li");
    let deleteButton = document.createElement("button");

    newlistElement.textContent = input.value;
    deleteButton.textContent = "❌"
    input.value = "";

    newlistElement.appendChild(deleteButton);
    list.appendChild(newlistElement);

    input.focus();
    
    deleteButton.addEventListener("click",() => 
    list.removeChild(newlistElement));

}
   
});