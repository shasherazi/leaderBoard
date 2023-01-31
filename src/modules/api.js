const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const id = 'e9Bi19uY3UWMPTgMd3lv';

const uploadScore = async (user, score) => {
  const response = await fetch(`${url}games/${id}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await response.json();
  return data;
};

const getScores = async () => {
  const response = await fetch(`${url}games/${id}/scores/`);
  const data = await response.json();
  return data;
};

export { uploadScore, getScores };