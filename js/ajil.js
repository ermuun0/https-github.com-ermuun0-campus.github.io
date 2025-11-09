const links = document.querySelectorAll(".openLink");
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("closeModal");

links.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // stop the link from navigating
        modal.style.display = "block"; // show modal
        console.log("hello")
    });
});

closeModal.addEventListener("click", function() {
    modal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
});




