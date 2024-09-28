      document.addEventListener('DOMContentLoaded', function () {
          // Get the close button and the banner
          const closeBannerBtn = document.getElementById('close-banner');
          const popupBanner = document.getElementById('popup-banner');

          // Add an event listener to the close button to hide the banner when clicked
          closeBannerBtn.addEventListener('click', function () {
              popupBanner.style.display = 'none';  // Hide the banner
          });
      });

    document.addEventListener('DOMContentLoaded', function () {
      const themeToggle = document.getElementById('theme-toggle');
      const sunIcon = document.querySelector('.bi-sun');
      const moonIcon = document.querySelector('.bi-moon');
      const heroVideo = document.getElementById('hero-video'); // Video element
      const heroImg = document.getElementById('hero-img');     // Image element
      const heroImage2 = document.getElementById('hero-image-2'); // Image element for the second hero section
  
      const lightModeVideo = 'assets/img/light.mp4';            // Default light mode video
      const darkModeVideo = 'assets/img/dark.mp4';              // Default dark mode video
      const lightNoBlink = 'assets/img/lightnoblink.png';       // Light mode no blink image
      const darkNoBlink = 'assets/img/noblink.png';             // Dark mode no blink image
      const lightSleepMode = 'assets/img/lightsleep.png';       // Light sleep mode image
      const darkSleepMode = 'assets/img/darksleep.png';         // Dark sleep mode image
  
      const lightStraightVideo = 'assets/img/lightstraight.mp4';       // Light straight face video
      const darkStraightVideo = 'assets/img/straight.mp4';             // Dark straight face video
      const lightStraightNoBlink = 'assets/img/lightstraightnoblink.png';  // Light straight face no blink image
      const darkStraightNoBlink = 'assets/img/straightnoblink.png';        // Dark straight face no blink image
      const lightStraightSleep = 'assets/img/lightstraightsleep.png';      // Light straight face sleep image
      const darkStraightSleep = 'assets/img/straightsleep.png';            // Dark straight face sleep image
  
      const lightSadVideo = 'assets/img/lightsad.mp4';            // Light sad face video
      const darkSadVideo = 'assets/img/sad.mp4';                  // Dark sad face video
      const lightSadNoBlink = 'assets/img/lightsadnoblink.png';    // Light sad face no blink image
      const darkSadNoBlink = 'assets/img/sadnoblink.png';          // Dark sad face no blink image
      const lightSadSleep = 'assets/img/lightsadsleep.png';        // Light sad face sleep image
      const darkSadSleep = 'assets/img/sadsleep.png';              // Dark sad face sleep image
  
      const lightModeImage2 = 'assets/img/blue.png';           // Light mode image for second hero section
      const darkModeImage2 = 'assets/img/pic9.png';            // Dark mode image for second hero section
  
      let currentEyeState = 'blink';  // Default eye state
      let currentExpressionState = 'smile';  // Default expression state
  
      // Helper function to manage button selection
      function setActive(buttonGroup, selectedButton) {
        buttonGroup.forEach(btn => btn.classList.remove('active')); // Deselect all buttons
        selectedButton.classList.add('active'); // Highlight the clicked button
      }
  
      // Function to update media (video/image) based on the selected state
      function updateMedia() {
        const isLightMode = document.body.classList.contains('light-mode');
        if (currentEyeState === 'blink') {
          if (currentExpressionState === 'smile') {
            heroVideo.src = isLightMode ? lightModeVideo : darkModeVideo;
          } else if (currentExpressionState === 'straight-face') {
            heroVideo.src = isLightMode ? lightStraightVideo : darkStraightVideo;
          } else if (currentExpressionState === 'frown') {
            heroVideo.src = isLightMode ? lightSadVideo : darkSadVideo;
          }
          heroVideo.style.display = 'block';
          heroImg.style.display = 'none';
        } else if (currentEyeState === 'no-blink') {
          if (currentExpressionState === 'smile') {
            heroImg.src = isLightMode ? lightNoBlink : darkNoBlink;
          } else if (currentExpressionState === 'straight-face') {
            heroImg.src = isLightMode ? lightStraightNoBlink : darkStraightNoBlink;
          } else if (currentExpressionState === 'frown') {
            heroImg.src = isLightMode ? lightSadNoBlink : darkSadNoBlink;
          }
          heroVideo.style.display = 'none';
          heroImg.style.display = 'block';
        } else if (currentEyeState === 'sleep') {
          if (currentExpressionState === 'smile') {
            heroImg.src = isLightMode ? lightSleepMode : darkSleepMode;
          } else if (currentExpressionState === 'straight-face') {
            heroImg.src = isLightMode ? lightStraightSleep : darkStraightSleep;
          } else if (currentExpressionState === 'frown') {
            heroImg.src = isLightMode ? lightSadSleep : darkSadSleep;
          }
          heroVideo.style.display = 'none';
          heroImg.style.display = 'block';
        }
      }
  
// Theme toggle functionality
themeToggle.addEventListener('click', function () {
  if (document.body.classList.contains('light-mode')) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    sunIcon.style.opacity = '0';
    moonIcon.style.opacity = '1';
    heroImage2.src = darkModeImage2;   // Switch to dark mode image for second hero section
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    sunIcon.style.opacity = '1';
    moonIcon.style.opacity = '0';
    heroImage2.src = lightModeImage2;  // Switch to light mode image for second hero section
    localStorage.setItem('theme', 'light');
  }
  updateMedia();  // Update the media when theme changes
});

// On page load, apply the saved theme and video/image
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
  sunIcon.style.opacity = '1';
  moonIcon.style.opacity = '0';
  heroImage2.src = lightModeImage2;   // Set light mode image for second hero section on load
} else if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
  sunIcon.style.opacity = '0';
  moonIcon.style.opacity = '1';
  heroImage2.src = darkModeImage2;    // Set dark mode image for second hero section on load
}
updateMedia();  // Ensure the media matches the saved theme


  
      // Add the animation controls arrow and nav bar (hidden initially)
      const arrow = document.createElement('div');
      arrow.id = 'easter-egg-arrow';
      arrow.innerHTML = '<i class="bi bi-arrow-left-circle blinking"></i>';
      document.body.appendChild(arrow);
  
      const navBar = document.createElement('div');
      navBar.id = 'easter-egg-nav';
      navBar.style.display = 'none'; // Initially hidden
      navBar.innerHTML = `
        <div id="easter-egg-nav">
          <h5>Animation Controls</h5>
          <br>
          <div class="button-container"> <!-- Container for both button rows -->
            <!-- First row for blinking/sleeping buttons -->
            <div class="button-row">
              <button id="blink" class="btn btn-primary active"><i class="bi bi-eye"></i></button> 
              <button id="no-blink" class="btn btn-primary"><i class="bi bi-eye-slash"></i></button> 
              <button id="sleep" class="btn btn-primary"><i class="bi bi-moon"></i></button>
            </div>

            <!-- Second row for expression buttons -->
            <div class="button-row">
              <button id="smile" class="btn btn-info active"><i class="bi bi-emoji-smile"></i></button>  
              <button id="straight-face" class="btn btn-info"><i class="bi bi-emoji-neutral"></i></button> 
              <button id="frown" class="btn btn-info"><i class="bi bi-emoji-frown"></i></button> 
            </div>
          </div>

          <!-- Directly inside the main container -->
          <div class="spacer"></div>
          <button id="close-controls" class="btn btn-secondary"><i class="bi bi-x-circle"></i></button>
        </div>
        
      `;
      document.body.appendChild(navBar);



  
      // Show/hide the animation controls on arrow click
      document.getElementById('easter-egg-arrow').addEventListener('click', function () {
        const nav = document.getElementById('easter-egg-nav');
        nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
      });
  
      // Close controls button
      document.getElementById('close-controls').addEventListener('click', function (event) {
        event.preventDefault();
        document.getElementById('easter-egg-nav').style.display = 'none';
      });
  
      // Track the currently selected buttons for top and bottom groups
      const eyeButtons = [document.getElementById('blink'), document.getElementById('no-blink'), document.getElementById('sleep')];
      const expressionButtons = [document.getElementById('smile'), document.getElementById('straight-face'), document.getElementById('frown')];
  
      // Add functionality to switch between eye states
      eyeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
          setActive(eyeButtons, btn); // Highlight the selected eye state
          currentEyeState = btn.id; // Update current eye state
          updateMedia(); // Update media based on the new        updateMedia(); // Update media based on the new eye state
      });
    });

    // Add functionality to switch between expressions
    expressionButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        setActive(expressionButtons, btn); // Highlight the selected expression state
        currentExpressionState = btn.id; // Update current expression state
        updateMedia(); // Update media based on the new expression state
      });
    });

    // Initialize default selections
    setActive(eyeButtons, document.getElementById('blink'));  // Default to Blink on load
    setActive(expressionButtons, document.getElementById('smile'));  // Default to Smile on load

    // Ensure the correct media is displayed based on saved theme on page load
    updateMedia(); // Update the media on page load based on the saved theme and initial states
  });





  document.addEventListener('DOMContentLoaded', function () {
    const statsLink = document.getElementById('stats-link');

    // Function to reset and reload the counters
    function reloadStatsCounters() {
        // Select all the counter elements
        const counters = document.querySelectorAll('.purecounter');

        // Reset the counters to 0 before starting the animation again
        counters.forEach(counter => {
            counter.textContent = '0'; // Reset the text content to '0'
        });

        // Manually reinitialize PureCounter to count up again
        if (typeof PureCounter !== 'undefined') {
            // Re-initialize PureCounter
            new PureCounter({
                selector: '.purecounter', // Selector to ensure PureCounter acts on the correct elements
                start: 0,
                duration: 2,  // Duration of the counter animation
                once: false   // Ensure the counter is animated multiple times, not just once
            });
        }
    }

    // Add click event listener to the "Stats" link
    statsLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        reloadStatsCounters(); // Call the function to reset and reload the counters

        // Scroll to the stats section smoothly
        document.querySelector('#stats').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Get the close button and other animation control buttons
  const closeControlsBtn = document.getElementById('close-controls');
  const allControlButtons = document.querySelectorAll('#easter-egg-nav .btn'); // Select all buttons inside the animation controls

  // Add event listener to each control button
  allControlButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      // Check if it's not the close button
      if (button !== closeControlsBtn) {
        // Scroll to the top smoothly
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });

  // Close controls button functionality
  closeControlsBtn.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('easter-egg-nav').style.display = 'none';
  });
});
