window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const parallaxImg = document.querySelector('#parallax-fg');
  
    // Adjust the parallax speed factor (e.g., 0.5 for half speed)
    const speedFactor = -0.2;
  
    // Update the image position relative to scroll
    parallaxImg.style.transform = `translateY(${scrollTop * speedFactor}px) translateX(-50%)`;

    var blurAmt = ((10-0)/(700-100))*(scrollTop - 100);
    if(blurAmt<0) {
        blurAmt = 0;
    }
    parallaxImg.style.filter = `blur(${blurAmt}px)`;
});