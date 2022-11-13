import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const params = `?client_id=${id}?client_secret=${sec}`;

const getProfile = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}${params}`)
    .then((response) => response.data)
    .catch(handleError);
};

const getRepos = (username) => {
  return axios
    .get(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
    .then((response) => response.data)
    .catch(handleError);
};

const getStarCount = (repos) => repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);

const calculateScore = (profile, repos) => {
  const followers = profile.followers;
  const totalStars = getStarCount(repos);
  return (followers * 3) + totalStars;
};

const handleError = (error) => console.error(error);

const getUserData = (username) => {
  return Promise.all([getProfile(username), getRepos(username)]).then(
    ([ profile, repos ]) => ({
      profile,
      score: calculateScore(profile, repos),
    })
  );
};

const sortPlayers = (players) => {
  return players.sort((a, b) => b.score - a.score)
}

export const makeBattle = (players) => {
  return Promise.all(players.map(getUserData))
    .then(sortPlayers)
    .catch(handleError);
}

export const fetchPopularRepos = (language) => {
  return axios
    .get(
      `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
    .then((response) => response.data.items)
    .catch(handleError);
};
