// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var frames = document.getElementsByClassName("work-frame");

// When the user clicks on the button, open the modal
// [].forEach.call(frames, function (frame) {
//     frame.onclick = function () {
//         modal.style.display = "block";
//     }
// });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}