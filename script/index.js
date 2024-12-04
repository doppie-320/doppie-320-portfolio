window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const parallaxImg = document.querySelector('#parallax-fg');
    const parallaxBg = document.querySelector('#header-sect');
  
    // Adjust the parallax speed factor (e.g., 0.5 for half speed)
    const speedFactor = -0.2;
    const bgSpeedFactor = 0.015;
  
    // Update the image position relative to scroll
    parallaxImg.style.transform = `translateY(${scrollTop * speedFactor}px) translateX(-50%)`;
    parallaxBg.style.setProperty('--bgScroll', `${(scrollTop * bgSpeedFactor) - 10}%`);

    var blurAmt = ((10-0)/(700-100))*(scrollTop - 100);
    if(blurAmt<0) {
        blurAmt = 0;
    }
    parallaxImg.style.filter = `blur(${blurAmt}px)`;
});