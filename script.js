//Selecting Items from the DOM
const loaderAnimationContainer = document.querySelector('#loaderAnimationContainer');
const topNavBar = document.querySelector('.topNavBar');
const bottomNavBar = document.querySelector('.bottomNavBar');
const tweetButton = document.querySelector('.tweetButton');
const accountInfo = document.querySelector('.accountInfo');
const closeAccountInfoBtn = document.querySelector('.closeAccountInfo');
const toggleBtn = document.querySelector('#toggle')
const body = document.querySelector('body');
const homeBtn = document.querySelector('.navBarIconContainer.homeBtn');
const searchBtn = document.querySelector('.navBarIconContainer.searchBtn');
const notificationBtn = document.querySelector('.navBarIconContainer.notificationBtn');
const messageBtn = document.querySelector('.navBarIconContainer.messageBtn');
const lightingBtn = document.querySelector('.lightingButton');
const lightsOutPopUp = document.querySelector('.lightsOutPopUp');
const closeLightsOutPopUp = document.querySelector('.closeLightsOutPopUp');
const lightingOptionButtonOn = document.querySelector('.on');
const lightingOptionButtonOff = document.querySelector('.off');
const lightsOutContainer = document.querySelector('.lightsOutPopUpContainer');
setTimeout(loaderAnimationStop, 3500);

console.log(lightingOptionButtonOn, lightingOptionButtonOff);

let bottomNavBarIcons = [homeBtn, searchBtn, notificationBtn, messageBtn];

//Function that stops the loading animation and gets other aspects of the site ready.
function loaderAnimationStop() {
    loaderAnimationContainer.classList.add('hidden');
    setTimeout(() => {
        loaderAnimationContainer.style.display = "none";
        topNavBar.style.display = "flex";
        bottomNavBar.style.display = "flex";
        tweetButton.style.display = 'block';
        lightsOutPopUp.style.display = 'block';
        closeLightsOutPopUp.style.display = 'block';
    }, 800);
}

//Event Listeners
toggleBtn.addEventListener('click', showAccountInfo);
window.addEventListener('click', closeSideBar);
bottomNavBar.addEventListener('click', toggleSelectedClass);
lightingBtn.addEventListener('click', changeLighting);
closeLightsOutPopUp.addEventListener('click', closeLightingSection);
//Event Listener Functions
function showAccountInfo(e) {
    accountInfo.classList.add('showing');
    closeAccountInfoBtn.classList.add('visible');
    
    
}
function closeSideBar(e){
    
     if ([...accountInfo.classList].includes('showing') && e.target == closeAccountInfoBtn) {
         closeAccountInfo();
         
     }
}
function toggleSelectedClass(e){
    if ([...e.target.classList].includes('navBarIconContainer')){
        let icon = e.target;
        icon.classList.toggle('selected');
        icon.classList.toggle('normal');
        console.log('toggled');
        unselectOthers(icon);
    }
    else if ([...e.target.parentNode.classList].includes('navBarIconContainer')){
        let icon = e.target.parentNode;
        icon.classList.toggle('selected');
        icon.classList.toggle('normal');
        unselectOthers(icon);
        
        console.log('toggled', icon.classList);
    }
}
/*TODO: Rather than deselecting all of the other elements that were clicked, 
it will be better to have a current selected element and change that selected element 
every time one of the icons in the bottom nav bar is clicked, this way when it is time
to start creating pages and the likes, the process will be seamless. */
/*FIXME: When an Icon is clicked, It can still be deselected even though no other Item is selected 
which means that we will have a situation where there are no clicked Icons
 */
function unselectOthers(icon) {
    bottomNavBarIcons.forEach((currentIcon) => {
        if (icon != currentIcon){
            if ([...currentIcon.classList].includes('selected')){
                currentIcon.classList.toggle('selected');
                currentIcon.classList.toggle('normal');
            }
        }
    })
}
function closeLightingSection(e) {
    if ([...lightsOutPopUp.classList].includes('visible') && e.target == closeLightsOutPopUp){
closeLightsPopUp();
    }
}

function changeLighting(e) {
    closeAccountInfo();
    setTimeout(openLightsPopUp, 200);
    
}
function closeAccountInfo() {
    accountInfo.classList.remove('showing');
    closeAccountInfoBtn.classList.remove('visible');
}
function openLightsPopUp() {
    lightsOutPopUp.classList.add('visible');
    closeLightsOutPopUp.classList.add('visible');
}
function closeLightsPopUp() {
    lightsOutPopUp.classList.remove('visible');
    closeLightsOutPopUp.classList.remove('visible');
}