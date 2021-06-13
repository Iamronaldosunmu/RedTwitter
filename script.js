const loaderAnimationContainer = document.querySelector('#loaderAnimationContainer');
const topNavBar = document.querySelector('.topNavBar');
const bottomNavBar = document.querySelector('.bottomNavBar');
setTimeout(loaderAnimationStop, 3500);

function loaderAnimationStop() {
    loaderAnimationContainer.classList.add('hidden');
    setTimeout(() => {
        loaderAnimationContainer.style.display = "none";
        topNavBar.style.display = "flex";
        bottomNavBar.style.display = "flex";
    }, 800);
}

