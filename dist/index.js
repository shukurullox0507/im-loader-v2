"use strict";
const box = document.querySelector('.box');
const loader = document.querySelector('.spinners');
const updateBtn = document.querySelector('.update-picture');
const images = document.querySelectorAll('img');
loader.classList.remove('vanish');
let imagesLoaded = 0;
images.forEach((img) => {
    img.classList.add('vanish');
    img.addEventListener('load', () => {
        imagesLoaded++;
        if (imagesLoaded == 4) {
            images.forEach((img) => {
                loader.classList.add('vanish');
                img.classList.remove('vanish');
            });
        }
    });
});
updateBtn?.addEventListener("click", () => {
    location.reload();
});
