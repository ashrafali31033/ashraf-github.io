function toggleBio() {
    const bio = document.getElementById('bio');
    if (bio.innerHTML === "Hello! I'm John Doe, a web developer with a passion for creating interactive applications.") {
        bio.innerHTML = "I have experience in HTML, CSS, JavaScript, and various frameworks. I love to learn new technologies and improve my skills.";
    } else {
        bio.innerHTML = "Hello! I'm John Doe, a web developer with a passion for creating interactive applications.";
    }
}