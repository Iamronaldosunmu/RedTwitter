//Selecting Elements from the DOM
const accountInfo = document.querySelector('.accountInfo');
const allButton = document.getElementById('all');
const body = document.querySelector('body');
const bottomNavBar = document.querySelector('.bottomNavBar');
const cloneOfMessagesContainer = document.createElement('div');
const cloneOfTrendContainer = document.createElement('div');
const closeAccountInfoBtn = document.querySelector('.closeAccountInfo');
const closeFollowMeSection = document.querySelector('.closeFollowMeSection')
const closeLightsOutPopUp = document.querySelector('.closeLightsOutPopUp');
const closeNewTweetInputContainer = document.querySelector('.closeNewTweetInputContainer');
const cssLoader = document.querySelector('.cssLoader');
const followMeSection = document.querySelector('.followMeSection');
const homeBtn = document.querySelector('.navBarIconContainer.homeBtn');
const homeBtnEventParameter = {target: document.querySelector('.navBarIconContainer .homeBtn')};
const lightingBtn = document.querySelector('.lightingButton');
const lightingOptionButtonOff = document.querySelector('.off');
const lightingOptionButtonOn = document.querySelector('.on');
const lightsOutContainer = document.querySelector('.lightsOutPopUpContainer');
const lightsOutPopUp = document.querySelector('.lightsOutPopUp');
const likeButtons = document.querySelectorAll('.section--like .tweetInteractionSectionButton');
const loaderAnimationContainer = document.querySelector('#loaderAnimationContainer');
const mentionsButton = document.getElementById('mentions');
const messageBtn = document.querySelector('.navBarIconContainer.messageBtn');
const messagesContainer = document.querySelector('.messagesContainer');
const messagesContainerInnerHTML = messagesContainer.innerHTML;
const navInput = document.querySelector('input.navTwitterImage.navTwitterImage--search');
const navSearch = document.querySelector('.navTwitterImage.navTwitterImage--search');
const navText = document.querySelector('.navTwitterImage.navTwitterImage--text');
const navTwitterImage = document.querySelector('.navTwitterImage.navTwitterImage--icon');
const navTwitterStarImage = document.querySelector('.navTwitterStarImage');
const newTweetInputContainer = document.querySelector('.newTweetInputContainer');
const notificationBtn = document.querySelector('.navBarIconContainer.notificationBtn');
const notificationsBody = document.querySelector('.notificationsBody');
const notificationsContainer = document.querySelector('.notificationsContainer');
const originalTweet = document.querySelector('.tweet').cloneNode(true);
const originalTweetWithPicture = document.querySelector('.tweet.tweet--image');
const originalTweetWithLink = document.querySelector('.tweet.tweet--link');
const originalTweetWithQuotedTweet = document.querySelector('.tweet.tweet--quote');
const plainLikeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweetInteractionSectionIcon"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>';
const redLikeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true" class="tweetInteractionSectionIcon red"><g><path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg>';
const retweetButtons = document.querySelectorAll('.section--retweet .tweetInteractionSectionButton');
const searchBtn = document.querySelector('.navBarIconContainer.searchBtn');
const shareButtons = document.querySelectorAll('.section--share .tweetInteractionSectionButton');
const slider = document.querySelector('.sliderContainer .slider');
const toggleBtn = document.querySelector('#toggle')
const topNavBar = document.querySelector('.topNavBar');
const trendContainer = document.querySelector('.trendContainer');
const trendContainerInnerHTML = trendContainer.innerHTML;
const trendingSearchesContainer = document.querySelector('.trendingSearchesContainer');
const tweetButton = document.querySelector('.tweetButton');
const tweetInput = document.querySelector('.tweetInput');
const tweetInputSubmitButton = document.querySelector('.tweetInputSubmitButton');
const tweetOptions = document.querySelectorAll('.tweetOptions');
const tweetsContainer = document.querySelector('.tweetsContainer');
const tweets = tweetsContainer.querySelectorAll('.tweet');
cloneOfTrendContainer.innerHTML = trendContainerInnerHTML;
cloneOfMessagesContainer.innerHTML = messagesContainerInnerHTML;

// The tweet Class
class Tweet {
    constructor(userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl) {
        this.userDisplayName = userDisplayName;
        this.userName = userName
        this.content = content;
        this.commentNo = commentNo;
        this.retweetNo = retweetNo;
        this.likeNo = likeNo;
        this.userImageUrl = userImageUrl;
    }
    returnTweetElement () {
        const {userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl} = this;
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
        const userImage = tweet.querySelector('.userImage');
        userImage.setAttribute('src', userImageUrl);
        const tweetUserDisplayName = tweet.querySelector('.displayName');
        tweetUserDisplayName.innerText = userDisplayName;
        const tweetUserName = tweet.querySelector('.userName');
        tweetUserName.innerText = userName;

        return tweet;

    }
}
// Polymorphism Of the Tweets Class
class TweetWithPicture extends Tweet{
    constructor(userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl, imageUrl){
        super(userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl);
        this.imageUrl = imageUrl;
    }

    returnTweetElement () {
        const {userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl, imageUrl} = this;
        const tweet = originalTweetWithPicture.cloneNode(true);
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
        const userImage = tweet.querySelector('.userImage');
        userImage.setAttribute('src', userImageUrl);
        const tweetImage = tweet.querySelector('.tweetMediaImage img');
        tweetImage.setAttribute('src', imageUrl);
        const tweetUserDisplayName = tweet.querySelector('.displayName');
        tweetUserDisplayName.innerText = userDisplayName;
        const tweetUserName = tweet.querySelector('.userName');
        tweetUserName.innerText = userName;

        
        return tweet;

    }
}

class TweetWithLink extends Tweet{
    constructor(userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl, imageUrl, websiteUrl, websiteDescription){
        super(userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl);
        this.imageUrl = imageUrl;
        this.websiteUrl = websiteUrl;
        this.websiteDescription= websiteDescription;
    }

    returnTweetElement () {
        const {userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl, imageUrl, websiteUrl, websiteDescription} = this;
        const tweet = originalTweetWithLink.cloneNode(true);
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
        const userImage = tweet.querySelector('.userImage');
        userImage.setAttribute('src', userImageUrl);
        const tweetLinkImage = tweet.querySelector('.linkImagePicture');
        tweetLinkImage.setAttribute('src', imageUrl);
        const tweetLinkPreview = tweet.querySelector('.linkPreview');
        tweetLinkPreview.innerText = websiteDescription
        const tweetUserDisplayName = tweet.querySelector('.displayName');
        tweetUserDisplayName.innerText = userDisplayName;
        const tweetUserName = tweet.querySelector('.userName');
        tweetUserName.innerText = userName;
        const tweetWebsiteUrl = tweet.querySelector('.url');
        tweetWebsiteUrl.innerText = websiteUrl;
        const linkContainer = tweet.querySelector('.linkSection');
        linkContainer.setAttribute('href', 'https://' + websiteUrl);

        if(imageUrl =='images/cloudEngineeringForBeginners.jpeg') {
            tweet.querySelector('.linkImage').style.borderLeft = '2px solid rgb(186 186 199)';
            tweet.querySelector('.linkImage').style.borderRight = '2px solid rgb(186 186 199)';
            tweet.querySelector('.linkSection').style.borderTop = '2px solid rgb(186 186 199)';

        }
       
        
        return tweet;

    }
}

class TweetWithQuotedTweet extends Tweet{
    constructor(userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl, quotedTweet) {
        super(userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl);
        this.quotedTweet = quotedTweet;
    }
    returnTweetElement () {
        const {userDisplayName, userName, content, commentNo, retweetNo, likeNo, userImageUrl, quotedTweet} = this;
        // const originalTweet = document.querySelector('.tweet'); 
        const tweet = originalTweetWithQuotedTweet.cloneNode(true);
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
        const userImage = tweet.querySelector('.userImage');
        userImage.setAttribute('src', userImageUrl);
        const tweetUserDisplayName = tweet.querySelector('.displayName');
        tweetUserDisplayName.innerText = userDisplayName;
        const tweetUserName = tweet.querySelector('.userName');
        tweetUserName.innerText = userName;

        const quotedTweetImage = tweet.querySelector('.quotedTweetImage');
        quotedTweetImage.setAttribute('src', quotedTweet.userImageUrl);
        const quotedTweetDisplayName = tweet.querySelector('.quotedTweet .displayName');
        quotedTweetDisplayName.innerText = quotedTweet.userDisplayName;
        const quotedTweetUserName = tweet.querySelector('.quotedTweet .userName');
        quotedTweetUserName.innerText = quotedTweet.userName;
        const quotedTweetText = tweet.querySelector('.quotedTweetText');
        quotedTweetText.innerText = quotedTweet.content;


        return tweet;

    }
}
// The tweet objects variable
const tweetObjects = [
    new Tweet("Ronald😝", "@IamRonald05", "Stop acting surprised when good things happen to you... \n You're a good person and you deserve it.", 5, 6, 7, 'images/ws_3D_Abstract_Art_1680x1050.webp'),
   new TweetWithPicture("Ronald😝", "@IamRonald05", "Castle and Castle is one of the best Nigerian series on Netflix right now", 5, 6, 7, 'images/ws_3D_Abstract_Art_1680x1050.webp', 'images/castleandcastle.jpg'),
   new Tweet("Ezra 'God' Olubi", "@0x", "I can't believe there's a twitter space discussing being a fraudster vs working in tech. How did we get here?", 34, 331, 728, 'images/EzraOlubi.jpg'),
   new Tweet("kofo", "@yoruba_dev", "Haven't taken a selfie in days fam", 9, 15, 30, 'images/kofodev.jpg'),
   new Tweet("Adora✨", "@AdoraNwodu", "The new Microsoft building in Ikoy is so beautiful. Took a tour today 😍😍 ", 5, 6, 7, 'images/AdoraNwodu.jpg'),
   new Tweet("Ronald😝", "@IamRonald05", "You are not dumb. Coding takes practice. And after paractice, it still doesn't work.", 5, 6, 7, 'images/ws_3D_Abstract_Art_1680x1050.webp'),
   new Tweet("Polysaccharide Patriach", "@bigbrutha_", "Chike's 'out of love' sounded this good since?", 1, 1, 1, 'images/PolysacharidePatriach.jpg'),
   new Tweet("JasonNjoku", "@JasonNjoku", "Its amazing that raising $1m+ for <20-person startups in Nigeria isn't really a big deal in tech today. \n What at time to be in tech. \n Glories upon glories 🇳🇬 ✊", 5, 6, 7, 'images/jasonNjoku.jpg'),
   new Tweet("Ronald😝", "@IamRonald05", "Note that this project is only a front-end clone (not linked to a database), so all the tweets are only visible in your browser", 5, 222, 324, 'images/ws_3D_Abstract_Art_1680x1050.webp'),
   new Tweet("kofo", "@yoruba_dev", "Ladies will 'I'm a foodie' you to death, only to barely finish one plate of pasta at Ikeja restaurants", 9, 15, 30, 'images/kofodev.jpg'),
   new Tweet("Atarah, the Figmama", "@Aderinsola_O", "Do I have to start getting used to people advertising under my tweets?💀💀💀", 13, 2, 10, 'images/atara.jpg'),
   new Tweet("Ronald😝", "@IamRonald05", "Squid game but for boiling egg, if the egg no boil well or skin peels while removing shell. \n You're dead", 5, 6, 7, 'images/ws_3D_Abstract_Art_1680x1050.webp'),
   new TweetWithLink("Adora✨", "@AdoraNwodu", "Thank you all for supporting my book 'Cloud Engineering for Beginners' \n \n  Our 11 day old book is ranking as the best selling computer science beginners book out of Africa today 🚀😭 \n \n Keep supporting, we are changing lives", 2, 29, 133, 'images/AdoraNwodu.jpg', 'images/cloudEngineeringForBeginners.jpeg', 'adorahack.selar.co', 'Pre Order Cloud Engineering for beginners by Adora Nwodu on Selar.co'),
   new TweetWithQuotedTweet("ZARA(isaaczara.near)", "@isaaczara_", "Y'all comparing tech and juju😅? \n We all know how it will end. \n Lmao😂", 1, 1, 2, 'images/ZaraDesign.jpg', new Tweet("Polysaccharide Patriach", "@bigbrutha_", "1. I think we overrate how much yahoo money is \n 2. I think we underrate how much tech money is", 5, 6, 7, 'images/PolysacharidePatriach.jpg') ),
   new TweetWithQuotedTweet("Ronald😝", "@IamRonald05", "There seems to be a disconnect", 1, 1, 2, 'images/ws_3D_Abstract_Art_1680x1050.webp', new Tweet("Someone was here", "@bigbrutha_", "Has anyone figured out a way to say 'y'all sound crazy' in a professional setting?", 5, 6, 7, 'images/luluProfilePic.jpg') ),
   new Tweet("Ronald😝", "@IamRonald05", "Unpopular opinion: Money Heist is the best series on Netflix.", 5, 6, 7, 'images/ws_3D_Abstract_Art_1680x1050.webp'),
   new TweetWithLink("TechCrunch", "@TechCrunch", "Eden Life raises $1.4M seed to provide home services to busy Africans", 87, 42, 175, 'images/techCrunch.png', 'images/edenlife.jpeg', 'techcrunch.com', 'Pre Order Cloud Engineering for beginners by Adora Nwodu on Selar.co'),
   new TweetWithLink("DEV Community", "@ThePracticalDev", "1. filter \n 2. map \n 3. find \n 4. forEach \n 5. some \n 6. every \n 7. Reduce", 1, 17, 71, 'images/devImage.jpg', 'images/devarraymethods.jpeg', 'dev.to/mcube25/7-javascript-array-methods-you-should-know-7mf', 'Arrays are one of the most common things a programmer uses or is likely to come across in a project...'),
   new Tweet("Ronald😝", "@IamRonald05", "Learn from those who are ahead of you. \n \n Teach those who are behind you.", 5, 6, 7, 'images/ws_3D_Abstract_Art_1680x1050.webp'),
]


// Selected Items that will be refernenced in later sections
let selectedNotifiactionsNavButton = allButton;
let selectedTheme = lightingOptionButtonOn;
let selectedBottomNavButton = homeBtn;
setTimeout(loaderAnimationStop, 7500);

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
allButton.addEventListener('click', selectANotificationsNavButton);
bottomNavBar.addEventListener('click', toggleSelectedClass);
closeFollowMeSection.addEventListener('click', removeCloseFollowMeSection);
closeLightsOutPopUp.addEventListener('click', closeLightingSection);
closeNewTweetInputContainer.addEventListener('click', removeNewTweetInput)
lightingBtn.addEventListener('click', changeLighting);
lightsOutContainer.addEventListener('click', selectaButton );
likeButtons.forEach(likeButton => likeButton.addEventListener('click', likeClicked));
mentionsButton.addEventListener('click', selectANotificationsNavButton);
navInput.addEventListener('input', filter);
navTwitterStarImage.addEventListener('click', showFollowMeSection);
retweetButtons.forEach(retweetButton => retweetButton.addEventListener('click', retweetClicked));
shareButtons.forEach(shareButton => shareButton.addEventListener('click', redirect));
toggleBtn.addEventListener('click', showAccountInfo);
tweetButton.addEventListener('click', showNewTweetInput);
tweetInputSubmitButton.addEventListener('click', handleSubmit);
tweetOptions.forEach(tweetOption => tweetOption.addEventListener('click', showFollowMeSection));
window.addEventListener('click', closeSideBar);
window.addEventListener('scroll', infiniteScrollFunction);
window.addEventListener('touchmove', infiniteScrollFunction); //Scroll event listener for mobile devices
//Event Listener Functions
function likeClicked(e){
    let likeNo = this.nextElementSibling;
    likeNo.classList.toggle('clicked');
    let tweetInteractionSectionButton = this;
    tweetInteractionSectionButton.classList.toggle('clicked');
    tweetInteractionSectionButton.innerHTML = [...tweetInteractionSectionButton.classList].includes('clicked') ? redLikeIcon : plainLikeIcon;
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
        window.location.href = 'https://iamronaldosunmu.github.io/RedTwitter';
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
    const tweetObject = new Tweet("Ronald😝", "@IamRonald05", tweetContent, 0, 0, 0, 'images/ws_3D_Abstract_Art_1680x1050.webp');
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

            const tweet = new Tweet("Ronald😝", "@IamRonald05", "All the tweets I prepared for this project have been exhausted, I have set up infinite scroll so more tweets will appear if you keep scrolling down. Kindly scroll up please.", 12, 32, 4, 'images/ws_3D_Abstract_Art_1680x1050.webp');
            tweetsContainer.insertBefore(tweet.returnTweetElement(), cssLoader.parentElement);
        }
        
    }
}

function infiniteScrollFunction ( ) {
    if (selectedBottomNavButton == homeBtn){const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 100) {
        showLoading();
    }}
}

//TODO: Try to ensure that the layout looks good on all devices
//TODO: Don't forget the layout problem on bigger screens
//TODO: Refactor the code e.g Sort the variables alphabetically
//TODO: Don't forget to put the actual link of the red twitter page for the sharing option
