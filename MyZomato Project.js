function display(selectedId) {
    document.getElementById("sectionHeader").style.display = "none";
    document.getElementById("sectionNavbar").style.display = "none";

    document.getElementById(selectedId).style.display = "block";
}