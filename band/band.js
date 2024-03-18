let currentIndex = 0;
const texts = [
  "Music Forever!.",
  "The Night is Young.",
  "The Party Never Ends.",
];
const images = document.getElementsByClassName("slide");
function showNextImage() {
  images[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
    images[currentIndex].getElementsByClassName("text")[0].innerText =texts[currentIndex];
  setTimeout(showNextImage, 3000);
}
showNextImage();


// Get the height of the navbar
const navbarHeight = document.querySelector('.nav').offsetHeight;

// Smooth scroll to section, offset by navbar height
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the id of the target section
        const targetElement = document.getElementById(targetId);

        // Scroll to the section, offset by navbar height
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

