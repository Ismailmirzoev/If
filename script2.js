let h1 = document.getElementById("h1");
let inf1 = localStorage.getItem("Name");
let inf2 = localStorage.getItem("Surname");
h1.innerHTML = `Привет ${inf1} ${inf2}`;