// Function to toggle the theme
function toggleTheme() {
  const body = document.body;
  const toggleCheckbox = document.querySelector('.theme-switch__checkbox');

  if (toggleCheckbox.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
}
// Add event listener to the toggle checkbox
const toggleCheckbox = document.querySelector('.theme-switch__checkbox');
toggleCheckbox.addEventListener('change', toggleTheme);

// Function to start auto typing
var typed = new Typed('.auto-type', {
    strings: ['A FullStack Developer', 'A Dedicated Learner' , 'Collegian' , 'A DSA Enthusiast'],
    typeSpeed: 100,
    backSpeed : 50,
    loop : true,
  });
  document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.querySelector('.about-button');
    const projectsButton = document.querySelector('.projects-button');
    const blogsButton = document.querySelector('.blogs-button');
    const contactButton = document.querySelector('.contact-button');
    const contentContainer = document.querySelector('.content-container');
    
    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(content => {
          contentContainer.innerHTML = content;
        })
        .catch(error => console.error('Error loading content:', error));
    }

    aboutButton.addEventListener('click', function () {
      loadContent('about.html');
    });

    projectsButton.addEventListener('click', function () {
      loadContent('projects.html');
    });

    blogsButton.addEventListener('click', function () {
      loadContent('blogs.html');
    });
    contactButton.addEventListener('click', function () {
      loadContent('contact.html');
    });
  });

