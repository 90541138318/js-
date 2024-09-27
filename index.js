const body = document.getElementsByTagName("body")[0]

//body.style.backgroundColor= "red"
function changecolor(name) {
    body.style.backgroundColor = name
}

changecolor("blue")
function randomColor() {
    const red = Math.round(Math.random() * 256)
    const green = Math.round(Math.random() * 256)
    const blue = Math.round(Math.random() * 256)
   
  
    const color = `rgb(${red} , ${green} , ${blue})`
    body.style.backgroundColor = color;

randomColor()

}