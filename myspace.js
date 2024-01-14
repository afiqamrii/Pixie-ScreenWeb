// Add these JavaScript functions to your existing file or create a new one

// Function to toggle QR icon display
function toggleQRIcon() {
    var qrIcon = document.querySelector('.qr-icon');
    qrIcon.classList.toggle('show');
}

// Add an event listener to the QR icon for toggling
document.querySelector('.qr-icon').addEventListener('click', toggleQRIcon);
// left right button for poster

window.onload = function() {
    var scrollAmount = 600;

    var container1 = document.querySelector('.firstRow .row_posters');
    var leftButton1 = document.getElementById('leftButton');
    var rightButton1 = document.getElementById('rightBtn');

    // Initially hide the left buttons
    leftButton1.style.display = 'none';

    function scrollLeft(e, container, scrollAmount) {
        e.preventDefault();
        container.scrollTo({
            left: container.scrollLeft - scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollRight(e, container, scrollAmount) {
        e.preventDefault();
        container.scrollTo({
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    }

    function checkScroll(container, leftButton) {
        // If at the start, hide the left button
        if (container.scrollLeft <= 1) {
            leftButton.style.display = 'none';
        } else {
            // Show the left button when scrolling
            leftButton.style.display = 'block';
        }
    }

    leftButton1.addEventListener('click', function(e) {
        scrollLeft(e, container1, scrollAmount);
    });

    rightButton1.addEventListener('click', function(e) {
        scrollRight(e, container1, scrollAmount);
    });

    container1.addEventListener('scroll', function() {
        checkScroll(container1, leftButton1);
    });
}

// Function to toggle between continue and pause icons
function togglePlayPause() {
    var continueIcon = document.getElementById('continue-icon');
    var pauseIcon = document.getElementById('pause-icon');

    // Toggle visibility of continue and pause icons
    continueIcon.style.display = continueIcon.style.display === 'none' ? 'block' : 'none';
    pauseIcon.style.display = pauseIcon.style.display === 'none' ? 'block' : 'none';

    // Add your logic for playing/pausing the video here
    // For example, you can use the HTML5 video element and its play/pause methods
    // var videoElement = document.getElementById('your-video-element-id');
    // videoElement.paused ? videoElement.play() : videoElement.pause();
}

// Add an event listener to the continue icon for toggling play/pause
document.getElementById('continue-icon').addEventListener('click', togglePlayPause);

// You can also add similar logic to pause the video when the pause icon is clicked
// document.getElementById('pause-icon').addEventListener('click', togglePlayPause);



