var lis = document.querySelectorAll("li");

lis.addEventListener("mouseover", function() {
    lis.style.color = "grey";
});

lis.addEventListener("mouseout", function() {
    lis.style.color = "black";
});