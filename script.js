const tweetList = document.getElementById('tweet-list')

eventListeners();


function eventListeners(){
    document.querySelector('#form').addEventListener('submit', newTweet);

    tweetList.addEventListener('click', removeTweet); 

    document.addEventListener('DOMContentLoaded',LocalStorageOnLoad);
}




function newTweet(event){
    event.preventDefault();

    const tweet = document.getElementById('tweet').value;

const removebtn = document.createElement('a');
removebtn.classList = 'remove-tweet';
removebtn.textContent = 'X';


 const li = document.createElement('li');
    li.textContent=tweet;


    li.appendChild(removebtn);
    tweetList.appendChild(li);

    addTweetLocalStorage(tweet);

    alert('Tweet Added');
    this.reset();

}
function removeTweet(event){
if(event.target.classList.contains('remove-tweet'))
{
event.target.parentElement.remove();
}


removeTweetLocalStorage(event.target.parentElement.textContent);

}


function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();
   tweets.push(tweet);
   localStorage.setItem('tweets', JSON.stringify(tweets));
    }
    function getTweetsFromStorage(){
        let tweets;
        const tweetsLS=localStorage.getItem('tweets');
        if(tweetsLS===null){
        tweets=[];
    }else{
        tweets=JSON.parse(tweetsLS);
    }
    return tweets;
}
function LocalStorageOnLoad(){
let tweets = getTweetsFromStorage();
tweets.forEach(function(tweet)
{
 
const removebtn = document.createElement('a');
removebtn.classList = 'remove-tweet';
removebtn.textContent = 'X';


 const li = document.createElement('li');
    li.textContent=tweet;


    li.appendChild(removebtn);
    tweetList.appendChild(li);   
})
}
function removeTweetLocalStorage(tweet){

  let tweets = getTweetsFromStorage()
  const tweetDelete = tweet.substring(0, tweet.length-1);
  tweets.forEach(function(tweetLS, index){
      if(tweetDelete===tweetLS){
        tweets.splice(index, 1);
      }
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
}