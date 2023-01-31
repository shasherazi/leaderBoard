import { getScores } from './api.js';

const recentScoresList = document.querySelector('.recent-scores-list');
const inputName = document.querySelector('input[name="name"]');
const inputScore = document.querySelector('input[name="score"]');

const refreshScores = async () => {
  const scores = await getScores();

  recentScoresList.innerHTML = '';

  scores.result.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('recent-score');
    li.innerHTML = `${score.user}: ${score.score}`;
    recentScoresList.appendChild(li);
  });

  // reset input fields
  inputName.value = '';
  inputScore.value = '';
};

export default refreshScores;
