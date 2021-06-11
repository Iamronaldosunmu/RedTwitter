const loaderAnimationContainer = document.querySelector('#loaderAnimationContainer');
console.log(loaderAnimationContainer);
setTimeout(loaderAnimationStop, 3500);

function loaderAnimationStop() {
    loaderAnimationContainer.classList.add('hidden');
    setTimeout(() => {
        loaderAnimationContainer.style.display = "none";
    }, 800);
}