const sliderWrapper = document.querySelector(".portfolio-sliders");
const slides = document.querySelectorAll('.slide');
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const pagination = document.querySelector(".pagination");
let totalSlides = slides.length;
let currentIndex  = 0;

// Function to update the slider position
function updateSliderPosition() {
    const offset = -currentIndex * 300;
    sliderWrapper.style.transform = `translateX(${offset}px)`;
    updatePagination();

    if(currentIndex === 0){
        previous.style.color = "#9f9f9f";
        next.style.color = "#000000";
    }else if(currentIndex === 3){
        previous.style.color = "#000000";
        next.style.color = "#9f9f9f";
    }else{
        previous.style.color = "#000000";
        next.style.color = "#000000";
    }

    
}


previous.addEventListener('click', function() {
    // Move to the previous slide, ensuring we don't go out of bounds
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    } 
});

next.addEventListener('click', function() {
    // Move to the next slide, ensuring we don't go out of bounds
    if (currentIndex < totalSlides - 3) {
        currentIndex++;
        updateSliderPosition();
    }
});

for( let i = 0; i < totalSlides - 2; i++){
    const bullet = document.createElement('div');
    bullet.classList.add("pagination-border");
    bullet.dataset.index = i;
    pagination.appendChild(bullet);
}

function updatePagination(){
    const bullets = document.querySelectorAll('.pagination-border');
    bullets.forEach(bullet => bullet.classList.remove('active'));

    // Calculate the active bullet index based on the currentIndex
    const activeBulletIndex = Math.floor(currentIndex);
    if(activeBulletIndex >= 0 && activeBulletIndex < bullets.length){
        bullets[activeBulletIndex].classList.add('active');
    }
}

updateSliderPosition()