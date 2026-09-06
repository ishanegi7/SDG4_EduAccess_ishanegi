function showAlert(courseName) {
    alert("Opening free study materials for: " + courseName);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you! Your resource request has been submitted successfully.");
    this.reset();
});
