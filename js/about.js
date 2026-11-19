console.log("Welcome to CodeVerse!");

const navigation = document.getElementById("navigation");

const links = document.querySelectorAll("#navigation a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("show");

    });

});
