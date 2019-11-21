var button = document.querySelector("button");
// var isGrey = false;


// button.addEventListener("click", function() {
//     if (isGrey) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "grey";
//     }
//     isGrey = !isGrey;
// });

button.addEventListener("click", function() {
    document.body.classList.toggle("grey");
});