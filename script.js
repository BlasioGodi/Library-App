
/*
function openForm() {
    document.getElementById("popup").style.display = "block";
}

function closeForm() {
    document.getElementById("popup").style.display = "none";
} */

function toggle() {
    var blur = getElementById('blur');
    blur.classList.toggle('active');
    var popup = getElementById('popup');
    popup.classList.toggle('active');
}
