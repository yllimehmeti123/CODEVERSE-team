
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// OPEN AND CLOSE MENU

menuButton.addEventListener("click", function() {
    navigation.classList.toggle("show");
});

// CLOSE MENU WHEN A LINK IS CLICKED

const links = document.querySelectorAll("#navigation a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navigation.classList.remove("show");
    });
});

// WELCOME MESSAGE

console.log("Welcome to CodeVerse!");
