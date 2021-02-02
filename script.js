const progressBar = document.getElementsByClassName
('progress-bar')[0]
/* create variable for interval */
var loadingProgress = setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    // Get max attribute
    const max = parseFloat(progressBar.getAttribute('max')) || 0;
    if(width > 100 || (max > 0 && max < width)){ // Check if loaded 100% or incrementing to max attribute
        clearInterval(loadingProgress);
    }
    else{
        progressBar.style.setProperty('--width', width + .1);
        // Add percent loaded to progress bar
        progressBar.setAttribute('data-label',width+'%');
    }
}, 20)