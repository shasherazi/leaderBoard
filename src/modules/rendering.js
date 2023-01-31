import { uploadScore } from './api.js';
import refreshScores from './utils.js';

const inputName = document.querySelector('input[name="name"]');
const inputScore = document.querySelector('input[name="score"]');
const submitButton = document.querySelector('.submit-button');
const refreshButton = document.querySelector('.refresh-button');

submitButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = inputName.value;
  const score = inputScore.value;
  await uploadScore(name, score);
  refreshScores();
});

refreshButton.addEventListener('click', (e) => {
  e.preventDefault();
  refreshScores();
});
