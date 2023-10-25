//Your JavaScript goes in here
const slider = document.getElementById('blur-slider');
const image = document.getElementById('testimage');
const span = document.getElementById('slider-value');
const openPageButton = document.getElementById("openPageButton");
function openNav() {
    document.getElementById("mySidepanel").style.width = "500px";
    document.getElementById("mySidepanel").style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}
console.log(openPageButton)
//diasble the button
openPageButton.disabled = true;
slider.addEventListener('input', function() {
    const blurValue = this.value;

    if (blurValue < -1) {
        // Apply a blur filter with increasing intensity as the slider value decreases
        const blurIntensity = Math.abs(blurValue * 2);
        image.style.filter = `blur(${blurIntensity}px)`;
    } else if (blurValue >= -1 && blurValue <= 1) {
        // Clear the filter
        image.style.filter = 'none';
        openPageButton.disabled = false; // Enable the button
    } else {
        // Apply a blur filter with increasing intensity as the slider value increases
        const blurIntensity = Math.abs(blurValue * 2);
        image.style.filter = `blur(${blurIntensity}px)`;
        openPageButton.disabled = true; // Disable the button
    }

    // Update the text span with the current blur value
    span.textContent = blurValue;
});

openPageButton.addEventListener("click", function() {
    const blurValue = parseFloat(slider.value); // Convert slider value to a number

    if (blurValue >= -1 && blurValue <= 1) {
        // Only navigate to the new page if the slider value is in the allowed values
        const newPageURL = "section2.html";
        window.location.href = newPageURL;
    }
});
