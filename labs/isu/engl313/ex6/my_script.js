function alertDemo() {
    alert("This could be a popup ad that displays after 5 seconds and disrupts your reading of the website. Annoying, isn't it?");
}

function confirmDemo() {
    confirm("Do you really want to do that?");
}

function welcome() {
    var person = prompt("Please enter your name", "First Last");
    if (person != null) {
        document.getElementById("main").innerHTML =
        "Hello " + person + "! Ready to learn about JavaScript?";
        document.getElementById("examples").style.display = "block";
    }
}

function dateDemo() {
    var d = new Date();
    var y = d.getFullYear();
    year = document.createTextNode(" - " + y);
    document.getElementById("dateHolder").appendChild(year);
}

function timeoutDemo() {
    setTimeout(alertDemo, 5000);
}

function yesAction() {
    document.getElementById("content").style.display = "block";
}

function noAction() {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
}