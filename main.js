var typed = new Typed(".text", {
    strings:["Frontend Developer","Python Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// learnmore button 

document.getElementById("learn-more-button").addEventListener("click", function() {
    var contentDiv = document.getElementById("content");
    if (contentDiv.style.display === "none") {
        contentDiv.style.display = "block";
    } else {
        contentDiv.style.display = "none";
    }
});


