function changeBackgroundColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
document.getElementById("colorButton").addEventListener("click", changeBackgroundColor);
document.getElementById("nameInput").addEventListener("input", function() {
    const name = this.value.trim();
    document.getElementById("greeting").textContent = name ?'Hello,name':"Hello, Guest";
});