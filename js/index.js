const date = new Date();

let yearDate = date.getFullYear();

let copyRight = "© Copyright";

let myQuery = document.querySelector(".copy-right");

myQuery.textContent = copyRight + " " + yearDate + " UltimateKaycee";
