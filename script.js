// TODO:After Jamb please make sure to style the Light mode(or theme) properly, it looks terrible right now.



//Selecting Elements from the DOM
const trendingSearchesContainer = document.querySelector('.trendingSearchesContainer');
const navTwitterStarImage = document.querySelector('.navTwitterStarImage');
const followMeSection = document.querySelector('.followMeSection');
const closeFollowMeSection = document.querySelector('.closeFollowMeSection')
const newTweetInputContainer = document.querySelector('.newTweetInputContainer');
const closeNewTweetInputContainer = document.querySelector('.closeNewTweetInputContainer');
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
const tweetInputSubmitButton = document.querySelector('.tweetInputSubmitButton');
const tweetInput = document.querySelector('.tweetInput');
const originalTweet = document.querySelector('.tweet').cloneNode(true);
const redLikeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweetInteractionSectionIcon red"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg>';
const plainLikeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweetInteractionSectionIcon"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>';
const homeBtnEventParameter = {target: document.querySelector('.navBarIconContainer .homeBtn')};
const tweetOptions = document.querySelectorAll('.tweetOptions');

console.log(retweetButtons, likeButtons);

// Selected Items that will be refernenced in later sections
let selectedNotifiactionsNavButton = allButton;
let selectedTheme = lightingOptionButtonOn;
let selectedBottomNavButton = homeBtn;
setTimeout(loaderAnimationStop, 3500);

const arrayOfThingsToChangeInTheme = [body, topNavBar, bottomNavBar, accountInfo, lightsOutContainer, lightsOutPopUp, tweetsContainer, notificationsBody, messagesContainer, trendingSearchesContainer, followMeSection];


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
        newTweetInputContainer.style.display = 'block';
        closeNewTweetInputContainer.style.display = 'block';
        closeNewTweetInputContainer.style.zIndex = '-5';
        followMeSection.style.display = 'block';
        closeFollowMeSection.style.display = 'block';
        closeFollowMeSection.style.zIndex = '-5';
    }, 800);
}

//Event Listeners
navTwitterStarImage.addEventListener('click', showFollowMeSection);
closeFollowMeSection.addEventListener('click', removeCloseFollowMeSection);
closeNewTweetInputContainer.addEventListener('click', removeNewTweetInput)
tweetButton.addEventListener('click', showNewTweetInput); //TODO: Create the function
toggleBtn.addEventListener('click', showAccountInfo);
window.addEventListener('click', closeSideBar);
bottomNavBar.addEventListener('click', toggleSelectedClass);
lightingBtn.addEventListener('click', changeLighting);
closeLightsOutPopUp.addEventListener('click', closeLightingSection);
lightsOutContainer.addEventListener('click', selectaButton );
allButton.addEventListener('click', selectANotificationsNavButton);
mentionsButton.addEventListener('click', selectANotificationsNavButton);
tweetInputSubmitButton.addEventListener('click', handleSubmit);
for (let retweetButton of retweetButtons) {
    retweetButton.addEventListener('click', retweetClicked);
}
for (let likeButton of likeButtons) {
    likeButton.addEventListener('click', likeClicked);
}
for (let tweetOption of tweetOptions) {
    tweetOption.addEventListener('click', showFollowMeSection);
}
//Event Listener Functions
function likeClicked(e){
    let likeNo = this.nextElementSibling;
    likeNo.classList.toggle('clicked');
    let tweetInteractionSectionButton = this;
    tweetInteractionSectionButton.classList.toggle('clicked');
    tweetInteractionSectionButton.innerHTML = [...tweetInteractionSectionButton.classList].includes('clicked') ? redLikeIcon : plainLikeIcon;

    // tweetInteractionSectionButton.innerHTML = [...tweetInteractionSectionButton.classList].includes('clicked') ? redLikeIcon : plainLikeIcon;


    if ([...tweetInteractionSectionButton.classList].includes('clicked')){
        likeNo.innerText = +likeNo.innerText + 1;
    }
    else {
        likeNo.innerText = +likeNo.innerText - 1;
    }
}
function retweetClicked(e) {
    this.querySelector('.tweetInteractionSectionIcon').classList.toggle('clicked');
    let retweetNo = this.nextElementSibling;
    retweetNo.classList.toggle('clicked');
    
    if ([...this.querySelector('.tweetInteractionSectionIcon').classList].includes('clicked')){
        retweetNo.innerText = +retweetNo.innerText + 1;
    }
    else {
        retweetNo.innerText = +retweetNo.innerText - 1;
    }

    
}
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
        trendingSearchesContainer.style.display = 'none';
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
        trendingSearchesContainer.style.display = 'block';

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
        trendingSearchesContainer.style.display = 'none';

    }
    else if (nextDisplay == notificationBtn) {
        navSearch.style.display = 'none';
        messagesContainer.style.display = 'none';
        navTwitterImage.style.display = 'none';
        tweetsContainer.style.display = 'none';
        navText.style.display = 'block';
       notificationsContainer.style.display = 'block';
       trendingSearchesContainer.style.display = 'none';
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
function showNewTweetInput(e) {
    closeNewTweetInputContainer.style.zIndex = '4';
    newTweetInputContainer.classList.add('visible');
    closeNewTweetInputContainer.classList.add('visible');
    tweetInput.focus();
    tweetInputSubmitButton.disabled = false;
}
function showFollowMeSection(e) {
    closeFollowMeSection.style.zIndex = '4';
    followMeSection.classList.add('visible');
    closeFollowMeSection.classList.add('visible');
}
function removeNewTweetInput(e) {
    newTweetInputContainer.classList.remove('visible');
    closeNewTweetInputContainer.classList.remove('visible');
    setTimeout( () => {
        closeNewTweetInputContainer.style.zIndex = '-5';
    }, 500);
}
function removeCloseFollowMeSection (e) {
    followMeSection.classList.remove('visible');
    closeFollowMeSection.classList.remove('visible');
    setTimeout( () => {
        closeFollowMeSection.style.zIndex = '-5';
    }, 500);
}
function handleSubmit(e) {
    e.preventDefault();
    const tweetContent = tweetInput.value;
    tweetInput.value = '';
    removeNewTweetInput();
    tweetInputSubmitButton.disabled = true;
    const tweetObject = new Tweet(tweetContent, 0, 0, 0);
    const tweet = tweetObject.returnTweetElement();
    tweetsContainer.insertBefore(tweet, tweetsContainer.firstChild);
    changeBodyTo(homeBtn);
    toggleSelectedClass(homeBtnEventParameter);
    

}
// TODO: Style the tweet input container and handle the event to make it show when the tweetButton is clicked.

class Tweet {
    constructor(content, commentNo, retweetNo, likeNo) {
        this.content = content;
        this.commentNo = commentNo;
        this.retweetNo = retweetNo;
        this.likeNo = likeNo;
    }
    returnTweetElement () {
        const {content, commentNo, retweetNo, likeNo} = this;
        // const originalTweet = document.querySelector('.tweet'); 
        const tweet = originalTweet.cloneNode(true);
        const likeButton = tweet.querySelector('.section--like .tweetInteractionSectionButton');
        likeButton.addEventListener('click', likeClicked);
        const tweetOption = tweet.querySelector('.tweetOption');
        tweetOption.addEventListener('clicke', showFollowMeSection);
        const retweetButton = tweet.querySelector('.section--retweet .tweetInteractionSectionButton');
        retweetButton.addEventListener('click', retweetClicked);
        const tweetContent = tweet.querySelector('.tweetContentText');
        tweetContent.innerText = content;
        const tweetCommentNo = tweet.querySelector('.commentNo');
        tweetCommentNo.innerText = commentNo;
        const tweetRetweetNo = tweet.querySelector('.retweetNo');
        tweetRetweetNo.innerText = retweetNo;
        const tweetLikeNo = tweet.querySelector('.likeNo');
        tweetLikeNo.innerText = likeNo;

        return tweet;

    }
}
//TODO: Implement Light mode for the follow me section pop up . DONE .
//TODO: Note that the loop for the tweet option buttons may be slowing down the code . DONE .
//TODO: Make the options button on all the tweet to open the follow me section . DONE .
//TODO: Style the tweets that will appear in the notifications container
//TODO: Implement Infinite Scroll in the tweets Container
//TODO: Implement Filter on the trending Searches and the current messages whenever something is typed into the input field
//TODO: Try to ensure that the layout looks good on all devices
//TODO: Don't forget the layout problem on bigger screens
