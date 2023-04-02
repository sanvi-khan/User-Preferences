//finding element..
const selectedColor = document.querySelector("#color");
const selectedSize = document.querySelector("#size");
const para = document.querySelector("p");
const button = document.querySelector("button");

//add vent listener..
selectedColor.addEventListener("change", (e) => {
    let color = e.target.value;
    para.style.backgroundColor = color
    let setColor = localStorage.setItem("color", color)
    
})
let getColor=localStorage.getItem("color");
if(getColor){
    selectedColor.value = getColor;
    para.style.backgroundColor = getColor;  
}
selectedSize.addEventListener("change", (e) => {
    let size = e.target.value;
    para.style.fontSize = size;
    let setSize = localStorage.setItem("size", size)
})

let getSize = localStorage.getItem("size")
if (getSize) {
    selectedSize.value = getSize;
    para.style.fontSize = getSize;
}
button.addEventListener("click", () => {
    localStorage.clear();
    selectedColor.value="red";
    selectedSize.value="12px"
    para.style.fontSize="12px"
    para.style.backgroundColor="red"
})

