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
const cssLoader = document.querySelector('.cssLoader');
const navInput = document.querySelector('input.navTwitterImage.navTwitterImage--search');
const trendContainer = document.querySelector('.trendContainer');
const cloneOfTrendContainer = document.createElement('div');
const trendContainerInnerHTML = trendContainer.innerHTML;
cloneOfTrendContainer.innerHTML = trendContainerInnerHTML;
const cloneOfMessagesContainer = document.createElement('div');
const messagesContainerInnerHTML = messagesContainer.innerHTML;
cloneOfMessagesContainer.innerHTML = messagesContainerInnerHTML;
const shareButtons = document.querySelectorAll('.section--share .tweetInteractionSectionButton');

// The tweet Class
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
        const shareButton = tweet.querySelector('.section--share .tweetInteractionSectionButton');
        shareButton.addEventListener('click', redirect);
        const tweetOption = tweet.querySelector('.tweetOptions');
        tweetOption.addEventListener('click', showFollowMeSection);
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
// The tweet objects variable
const tweetObjects = [
    new Tweet("This is the tweet Content", 5, 6, 7),
    new Tweet("I once heard a story of a young man that wanted nothing but money in life", 5, 6, 7),
    new Tweet("I necer subscribe to guys on the internet looking for the fame and clout they veber deserve", 5, 6, 7),
    new Tweet("Burna Boy >>>> Davido", 5, 6, 7),
    new Tweet("Overthinking no fit solve problem, make another man no come chop my sweat", 5, 6, 7),
    new Tweet("This is the tweet Content", 5, 6, 7),
    new Tweet("This should not be printed on the first scroll", 1, 2, 3)
];


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
shareButtons.forEach(shareButton => shareButton.addEventListener('click', redirect));
navInput.addEventListener('input', filter);
window.addEventListener('scroll', infiniteScrollFunction);
navTwitterStarImage.addEventListener('click', showFollowMeSection);
closeFollowMeSection.addEventListener('click', removeCloseFollowMeSection);
closeNewTweetInputContainer.addEventListener('click', removeNewTweetInput)
tweetButton.addEventListener('click', showNewTweetInput);
toggleBtn.addEventListener('click', showAccountInfo);
window.addEventListener('click', closeSideBar);
bottomNavBar.addEventListener('click', toggleSelectedClass);
lightingBtn.addEventListener('click', changeLighting);
closeLightsOutPopUp.addEventListener('click', closeLightingSection);
lightsOutContainer.addEventListener('click', selectaButton );
allButton.addEventListener('click', selectANotificationsNavButton);
mentionsButton.addEventListener('click', selectANotificationsNavButton);
tweetInputSubmitButton.addEventListener('click', handleSubmit);
retweetButtons.forEach(retweetButton => retweetButton.addEventListener('click', retweetClicked));
likeButtons.forEach(likeButton => likeButton.addEventListener('click', likeClicked));
tweetOptions.forEach(tweetOption => tweetOption.addEventListener('click', showFollowMeSection));
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
function redirect() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: document.location.href
          })
    }
    else {
        window.location.href = 'https://twitter.com/Iamronald05';
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
        if (trendContainer.innerHTML.trim() == '') {
            trendContainer.innerHTML = trendContainerInnerHTML;
        }
        if (messagesContainer.innerHTML.trim() == '') {
            messagesContainer.innerHTML = messagesContainerInnerHTML;
        }
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
        if (messagesContainer.innerHTML.trim() == '') {
            messagesContainer.innerHTML = messagesContainerInnerHTML;
        }

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
        if (trendContainer.innerHTML.trim() == '') {
            trendContainer.innerHTML = trendContainerInnerHTML;
        }
    }
    else if (nextDisplay == notificationBtn) {
        navSearch.style.display = 'none';
        messagesContainer.style.display = 'none';
        navTwitterImage.style.display = 'none';
        tweetsContainer.style.display = 'none';
        navText.style.display = 'block';
        notificationsContainer.style.display = 'block';
        trendingSearchesContainer.style.display = 'none';
        if (trendContainer.innerHTML.trim() == '') {
            trendContainer.innerHTML = trendContainerInnerHTML;
        }
        if (messagesContainer.innerHTML.trim() == '') {
            messagesContainer.innerHTML = messagesContainerInnerHTML;
        }
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
    window.scrollTo(0, 0);
}
function reRender (container, searchValue) {
    cloneOfTrendContainer.innerHTML = trendContainerInnerHTML;
    cloneOfMessagesContainer.innerHTML = messagesContainerInnerHTML;
    if (container == trendContainer) {
        let trends = cloneOfTrendContainer.querySelectorAll('.trend');
        filteredTrends = [...trends].filter( (trend) => {
            let accountName = trend.querySelector('.trendHeader .accountName').innerText.trim().toLowerCase();
            let trendBody = trend.querySelector('.trendBody').innerText.trim().toLowerCase();
            arrayToSearch = [accountName, trendBody];
            searchFunction = (element) => element.includes(searchValue.toLowerCase()); 
            return arrayToSearch.some(searchFunction);
        });
        let filteredTrendsContainer = document.createElement('div');
        filteredTrends.forEach(
            trend => filteredTrendsContainer.appendChild(trend)
        );
        if (filteredTrendsContainer.innerHTML == trendContainer.innerHTML) {
            return false;
        }
        else if (searchValue === '')
        trendContainer.innerHTML = cloneOfTrendContainer.innerHTML;
        else trendContainer.innerHTML = filteredTrendsContainer.innerHTML;
    }
    if (container == messagesContainer) {
        let chats = cloneOfMessagesContainer.querySelectorAll('.chat');
        filteredChats = [...chats].filter( (chat) => {
            let displayName = chat.querySelector('.chatText .displayName').innerText.trim().toLowerCase();
            let chatText = chat.querySelector('.chatText .lastText').innerText.trim().toLowerCase();
            arrayToSearch = [displayName, chatText];
            searchFunction = (element) => element.includes(searchValue.toLowerCase()); 
            return arrayToSearch.some(searchFunction);
        });
        let filteredMessagesContainer = document.createElement('div');
        filteredChats.forEach(
            chat => filteredMessagesContainer.appendChild(chat)
        );
        if (filteredMessagesContainer.innerHTML == messagesContainer.innerHTML) {
            return false;
        }
        else if (searchValue === '')
        messagesContainer.innerHTML = cloneOfMessagesContainer.innerHTML;
        else messagesContainer.innerHTML = filteredMessagesContainer.innerHTML;
    }

}
function filter(e) {
    const {value} = navInput;
    if (selectedBottomNavButton == searchBtn){
        reRender(trendContainer, value);
    }
    else if (selectedBottomNavButton == messageBtn){
        reRender(messagesContainer, value);
    }
}
function showLoading () {
    cssLoader.classList.add('visible');
    setTimeout(() => {
    cssLoader.classList.remove('visible');
    setTimeout(() => {
        fetchNewTweets(tweetObjects);
    }, 300);
    }, 2200);
}

function fetchNewTweets(arrayOfTweetObjects) {
    const {length} = arrayOfTweetObjects;
    let count = 5;
    if (length) {
        //Remove 5 objects from array if it has more than 5 objects or remove all the elements if it isnt up to 5
        for (let finalIndex = length - 1; (finalIndex > (length - 6)) && !(finalIndex < 0); finalIndex--){
            const tweet = arrayOfTweetObjects.pop().returnTweetElement();
            tweetsContainer.insertBefore(tweet, cssLoader.parentElement);
            count--;
        }
    }
    else {
        for (let i = 0; i < count; i++) {

            const tweet = new Tweet("This is a very recent tweet similar to lorem Ipsum dolor", 12, 32, 4);
            tweetsContainer.insertBefore(tweet.returnTweetElement(), cssLoader.parentElement);
        }
        
    }
}

function infiniteScrollFunction ( ) {
    if (selectedBottomNavButton == homeBtn){const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 3) {
        showLoading();
    }}
}


//TODO: Try to ensure that the layout looks good on all devices
//TODO: Don't forget the layout problem on bigger screens
//TODO: Use the filled svg like button instead of interchanging between the icons, it makes it harder to animate, instead, used the filled svg and animate the stroke and fill properties
//TODO: Refactor the code e.g Sort the variables alphabetically
//TODO: Add dates for the chats