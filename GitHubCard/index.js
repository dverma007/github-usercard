import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/dverma007')
.then((res)=> {
  console.log(res);
})
.catch((err) => {
  console.error(err);
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const card =document.querySelector('.cards');

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
 const {imageURL, name, login, location, githubaddress, followers, following, bio} = gitObj

function userCard(gitObj) {
  //Instantiate (Create) the Elements
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const usersUserName = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userGitHubPage = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  //Step 2:  Setup the classes
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  usersUserName.classList.add('users');

  //Step3:  Add any content
  userImg.src = gitObj.imageURL;
  usersName.textContent = gitObj.name;
  usersUserName.textContent = gitObj.login;
  userLocation.textContent = gitObj.location;
  userProfile.textContent = gitObj.profile;
  userGitHubPage.textContent = gitObj.githubaddress;
  userFollowers.textContent = gitObj.followers;
  userFollowing.textContent = gitObj.following;
  userBio.textContent = gitObj.bio;

// Step 4:  Layout the HTML
card.appendChild(userImg);
card.appendChild(cardInfo);
cardInfo.appendChild(usersName);
cardInfo.appendChild(usersUserName);
cardInfo.appendChild(userLocation);
cardInfo.appendChild(userLocation);
cardInfo.appendChild(userProfile);
userProfile.appendChild(userGitHubPage)
cardInfo.appendChild(userFollowers);
cardInfo.appendChild(userFollowing);
cardInfo.appendChild(userBio);

}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
