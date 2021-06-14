//Selecting Items from the DOM
const loaderAnimationContainer = document.querySelector('#loaderAnimationContainer');
const topNavBar = document.querySelector('.topNavBar');
const bottomNavBar = document.querySelector('.bottomNavBar');
const tweetButton = document.querySelector('.tweetButton');
const accountInfo = document.querySelector('.accountInfo');
const toggleBtn = document.querySelector('#toggle')
const body = document.querySelector('body');

console.log(body);
setTimeout(loaderAnimationStop, 3500);


//Function that stops the loading animation and gets other aspects of the site ready.
function loaderAnimationStop() {
    loaderAnimationContainer.classList.add('hidden');
    setTimeout(() => {
        loaderAnimationContainer.style.display = "none";
        topNavBar.style.display = "flex";
        bottomNavBar.style.display = "flex";
        tweetButton.style.display = 'block';
    }, 800);
}

//Event Listeners
toggleBtn.addEventListener('click', showAccountInfo);
window.addEventListener('click', closeAccountInfo);

//Event Listener Functions
function showAccountInfo(e) {
    accountInfo.classList.add('showing');
    
    
}
function closeAccountInfo(e){
     if ([...accountInfo.classList].includes('showing') && (e.target != accountInfo && (e.target.parentNode != toggleBtn && e.target != toggleBtn))) {
         accountInfo.classList.remove('showing');
     }
}