import axios from 'axios';


const GetDecksByUserId = id => {
  const apiPath = `http://localhost:8000/userdeckpairing/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(decks => {
        resolve(decks.data);
      })
      .catch(error => reject(error));
  });
}

export default {
  GetDecksByUserId,
};
