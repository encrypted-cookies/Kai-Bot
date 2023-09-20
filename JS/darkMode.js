let btnText = document.getElementById("btn");
function change() {
   let btn = document.body;
   btn.classList.toggle("darkMode");
   if (btnText.innerHTML === "Normal Mode") {
      btnText.innerHTML = "Dark Mode!";
   } else {
      btnText.innerHTML = "Normal Mode";
   }}
