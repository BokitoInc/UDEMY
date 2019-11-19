var lis = document.querySelectorAll("li");

for (var i; i < lis.length; i++;) {
    lis[i].addEventListener("mouseover", function() {
        this.style.color = "grey";
    });

    lis[i].addEventListener("mouseout", function() {
        this.style.color = "black";
    });

}

// lis.addEventListener("mouseout", function() {
//     lis.style.color = "black";
// });