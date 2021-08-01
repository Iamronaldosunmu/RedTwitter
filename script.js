// TODO:After Jamb please make sure to style the Light mode(or theme) properly, it looks terrible right now.



//Selecting Elements from the DOM
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
const tweetsContainer = document.querySelector('.tweetsContainer');
const tweets = tweetsContainer.querySelectorAll('.tweet');
const navTwitterImage = document.querySelector('.navTwitterImage.navTwitterImage--icon');
const navSearch = document.querySelector('.navTwitterImage.navTwitterImage--search');
const navText = document.querySelector('.navTwitterImage.navTwitterImage--text');
const messagesContainer = document.querySelector('.messagesContainer');
const notificationsContainer = document.querySelector('.notificationsContainer');
const allButton = document.getElementById('all');
const mentionsButton = document.getElementById('mentions');
const slider = document.querySelector('.sliderContainer .slider');
const notificationsBody = document.querySelector('.notificationsBody');
const retweetButtons = document.querySelectorAll('.section--retweet .tweetInteractionSectionButton');
const likeButtons = document.querySelectorAll('.section--like .tweetInteractionSectionButton');

console.log(retweetButtons, likeButtons);

// Selected Items that will be refernenced in later sections
let selectedNotifiactionsNavButton = allButton;
let selectedTheme = lightingOptionButtonOn;
let selectedBottomNavButton = homeBtn;
setTimeout(loaderAnimationStop, 3500);

const arrayOfThingsToChangeInTheme = [body, topNavBar, bottomNavBar, accountInfo, lightsOutContainer, lightsOutPopUp, tweetsContainer];


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
        tweetsContainer.style.display = 'block';
    }, 800);
}

//Event Listeners
toggleBtn.addEventListener('click', showAccountInfo);
window.addEventListener('click', closeSideBar);
bottomNavBar.addEventListener('click', toggleSelectedClass);
lightingBtn.addEventListener('click', changeLighting);
closeLightsOutPopUp.addEventListener('click', closeLightingSection);
lightsOutContainer.addEventListener('click', selectaButton );
allButton.addEventListener('click', selectANotificationsNavButton);
mentionsButton.addEventListener('click', selectANotificationsNavButton);
for (item of retweetButtons) {
    item.addEventListener('click', (e) => {
        let icon = item.querySelector(".tweetInteractionSectionIcon");
        icon.classList.toggle('clicked');
        console.log(icon.classList);
    })
}
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
    let clickedEl = '';
    
    if ([...e.target.classList].includes('navBarIconContainer') || [...e.target.parentNode.classList].includes('navBarIconContainer')) {
        if ([...e.target.classList].includes('navBarIconContainer')){
        clickedEl = e.target;
    }
    else if ([...e.target.parentNode.classList].includes('navBarIconContainer')){
        clickedEl = e.target.parentNode;
    }}
    if (clickedEl) {
        if (clickedEl == selectedBottomNavButton) {
            return false;
        }
        else{

            selectedBottomNavButton.classList.toggle('selected');
            selectedBottomNavButton.classList.toggle('normal');

            clickedEl.classList.toggle('selected');
            clickedEl.classList.toggle('normal');

            changeBodyTo(clickedEl);
            selectedBottomNavButton = clickedEl;
           
        }
    }
}


function closeLightingSection(e) {
    if ([...lightsOutPopUp.classList].includes('visible') && e.target == closeLightsOutPopUp){
closeLightsPopUp();
    }
}
function selectaButton(e) {
    let clickedEl = '';
    if ([...e.target.classList].includes('lightingOptionButton')  || [...e.target.parentNode.classList].includes('lightingOptionButton')){
        if ([...e.target.parentNode.classList].includes('lightingOptionButton')){
            clickedEl = e.target.parentNode;
        }
        else if ([...e.target.classList].includes('lightingOptionButton')) {
            clickedEl = e.target;
        }
    }
    if (clickedEl) {
        if (clickedEl == selectedTheme) {
            return false;
        }
        else {
        
            selectedTheme.classList.remove('selected');
            clickedEl.classList.add('selected');
            selectedTheme = clickedEl;
            arrayOfThingsToChangeInTheme.forEach(item => {
                item.classList.toggle('lightTheme');
            })

        }
    }
}

function changeBodyTo(nextDisplay) {
    if (nextDisplay == homeBtn) {
        navText.style.display = 'none';
        navSearch.style.display = 'none';
        messagesContainer.style.display = 'none';
        tweetsContainer.style.display = 'block';
        navTwitterImage.style.display = 'block';
        notificationsContainer.style.display = 'none';
    }
    else if (nextDisplay == searchBtn) {
        tweetsContainer.style.display = 'none';
        navTwitterImage.style.display = 'none';
        navText.style.display = 'none';
        messagesContainer.style.display = 'none';
        navSearch.value="";
        navSearch.style.display = 'block';
        navSearch.setAttribute('placeholder', 'Search RedTwitter');
        notificationsContainer.style.display = 'none';


    }
    else if (nextDisplay == messageBtn) {
        tweetsContainer.style.display = 'none';
        navTwitterImage.style.display = 'none';
        navText.style.display = 'none';
        navSearch.value="";
        navSearch.style.display = 'block';
        messagesContainer.style.display = 'block';
       navSearch.setAttribute('placeholder', 'Search for people and groups');
       notificationsContainer.style.display = 'none';

    }
    else if (nextDisplay == notificationBtn) {
        navSearch.style.display = 'none';
        messagesContainer.style.display = 'none';
        navTwitterImage.style.display = 'none';
        tweetsContainer.style.display = 'none';
        navText.style.display = 'block';
       notificationsContainer.style.display = 'block';
    }
}

function selectANotificationsNavButton(e) {
    if (this == selectedNotifiactionsNavButton) {
        return false;
    }
    else {
        if (this == allButton) {
            mentionsButton.classList.remove('selected');
            slider.style.transform = 'translateX(0)';
            this.classList.add('selected');
            selectedNotifiactionsNavButton = this;
            notificationsBody.classList.remove('toggled');
        }
        else if (this == mentionsButton) {
            allButton.classList.remove('selected');
            slider.style.transform = 'translateX(100%)';
            this.classList.add('selected');
            selectedNotifiactionsNavButton = this;
            notificationsBody.classList.add('toggled');
        }
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

