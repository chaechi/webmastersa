
/* LOADING */

document.addEventListener("DOMContentLoaded", function () {
    var loader = document.getElementById("preloader");
    if (loader) {
      window.addEventListener("load", function () {
        loader.style.display = "none";
      });
    }
});


// Show or hide the "Back to Top" button based on scroll position
// backToTop.js

function initializeBackToTopButton() {
    var backToTopButton = document.getElementById("back-to-top");
    var hideTimeout;
  
    if (backToTopButton) {
      // Show/hide the back-to-top button on scroll
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          backToTopButton.style.display = "flex";
          resetHideTimeout();
        } else {
          backToTopButton.style.display = "none";
        }
      });
  
      // Smooth scroll back to top when the button is clicked
      backToTopButton.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
  
      function resetHideTimeout() {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        hideTimeout = setTimeout(function () {
          backToTopButton.style.display = "none";
        }, 5000); // Adjust the time (3000 ms = 3 seconds) as needed
      }
    }
  }
  // Initialize the back-to-top button on page load
window.addEventListener("load", initializeBackToTopButton);

  



/* Background text change on scroll */

document.addEventListener("DOMContentLoaded", () => {
    const mainText1 = document.querySelector(".display-3");


    document.addEventListener("scroll", function () {
        let value = window.scrollY;

        mainText1.style.marginTop = value + "px";


    })

});

/*Meet out team prevent card flip when scrolling */
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".chefSection .card");
    if (cards.length > 0) {
        function handleScroll() {
            cards.forEach((card) => {
                card.classList.add("no-flip");
            });
            setTimeout(() => {
                cards.forEach((card) => {
                    card.classList.remove("no-flip");
                });
            }, 500);
        }

        document.addEventListener("scroll", handleScroll);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    function animateCounters(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Perform animations
                const statsSection = document.querySelector(".stats-section");
                const skillSection = document.querySelector("#section4");
                const circlesSection = document.querySelector("#section4");

                if (statsSection) {
                    // Stats section animations
                    let valueDisplays = document.querySelectorAll(".stat-number");
                    valueDisplays.forEach((valueDisplay) => {
                        let startValue = 0;
                        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
                        let duration = Math.floor(4000 / endValue);
                        let counter = setInterval(function () {
                            startValue += 1;
                            valueDisplay.textContent = startValue;
                            if (startValue == endValue) {
                                clearInterval(counter);
                            }
                        }, duration);
                    });
                }

                if (skillSection) {
                    // Skill bar animations
                    const skills = document.querySelectorAll('.skill');
                    skills.forEach(skill => {
                        const percent = skill.getAttribute('data-percent');
                        const skillBarFill = skill.querySelector('.skill-bar-fill');
                        skillBarFill.style.width = percent + '%';
                    });
                }

                if (circlesSection) {
                    // Circular percentage bars
                    const circles = document.querySelectorAll('.circle');
                    circles.forEach(circle => {
                        const percent = circle.querySelector('.inner-circle').getAttribute('data-percent');
                        circle.style.background = `conic-gradient(from 0deg, #ff5e00, #00ffff ${percent}%, #333 ${percent}%)`;
                    });
                }

                // Unobserve after animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }

    let observerOptions = { threshold: 0.5 };
    let observer = new IntersectionObserver(animateCounters, observerOptions);

    let sections = document.querySelectorAll(".stats-section, #section4");
    sections.forEach(section => observer.observe(section));
});




document.addEventListener('DOMContentLoaded', function () {
    // Trigger animations on tab show
    $('#workTabs a').on('shown.bs.tab', function (event) {
        let target = $(event.target).attr("data-bs-target"); // Get the target tab content
        if (target === '#from-middle') {
            $('.animate-middle').css('animation', 'from-middle 1s ease forwards');
        } else if (target === '#from-bottom') {
            $('.animate-bottom').css('animation', 'from-bottom 1s ease forwards');
        } else if (target === '#from-right') {
            $('.animate-right').css('animation', 'from-right 1s ease forwards');
        } else if (target === '#from-left') {
            $('.animate-left').css('animation', 'from-left 1s ease forwards');
        }
    });

    // Trigger initial tab animation
    let activeTab = $('#workTabs .active').attr("data-bs-target");
    if (activeTab === '#from-middle') {
        $('.animate-middle').css('animation', 'from-middle 1s ease forwards');
    } else if (activeTab === '#from-bottom') {
        $('.animate-bottom').css('animation', 'from-bottom 1s ease forwards');
    } else if (activeTab === '#from-right') {
        $('.animate-right').css('animation', 'from-right 1s ease forwards');
    } else if (activeTab === '#from-left') {
        $('.animate-left').css('animation', 'from-left 1s ease forwards');
    }
});

/*dark mode light mode changer */

document.addEventListener('DOMContentLoaded', function () {
    // Get the checkbox and html element
    const checkbox = document.getElementById('checkbox');
    const label = document.getElementById('change-mode-label-id');

    const htmlElement = document.documentElement;

    // Function to toggle theme based on checkbox state
    function toggleTheme() {
        if (checkbox.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            label.textContent = 'Dark Mode'; // Change text for dark mode
        } else {
            htmlElement.removeAttribute('data-bs-theme');

            label.textContent = 'Light Mode';
        }
    }

    // Initialize theme based on the current checkbox state
    toggleTheme();

    // Add event listener for checkbox change
    checkbox.addEventListener('change', function () {
        toggleTheme();
    });
});