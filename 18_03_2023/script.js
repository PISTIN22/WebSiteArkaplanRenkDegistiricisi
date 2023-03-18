console.log("sa");
// HTML element'leri için değişken tanımlama
var cl1 = document.querySelector("#c1");
var cl2 = document.querySelector("#c2");
var body = document.querySelector("body");
var colorCodes = document.querySelector("#ColorCodes");

function setRadiant() {
    // renk değişikliğini yapan fonksiyon
    console.log("color1 :", cl1.value);
    console.log("color2 :", cl2.value);
    body.style.background = "linear-gradient(to right," + cl1.value + ", " + cl2.value + ")";
    colorCodes.textContent = "";
    colorCodes.textContent ="Sol: "+ cl1.value + " Sağ: " + cl2.value;
}
window.addEventListener("load", setRadiant);
cl1.addEventListener("input", setRadiant)
cl2.addEventListener("input", setRadiant)