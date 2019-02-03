import axios from 'axios';

const GetSingle = () => {
  const apiPath = `http://localhost:8000/cards/`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(card => {
        resolve(card.data);
      })
      .catch(error => reject(error));
  });
}

const GetAll = () => {
  const apiPath = `http://localhost:8000/cards`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(cards => resolve (cards.data))
      .catch(error => reject(error));
    });
};

const GetAllByDeckId = deckId => {
  const apiPath = `http://localhost:8000/cards/${deckId}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(cards => resolve (cards.data))
      .catch(error => reject(error));
    });
};

const AddCard = input => {
  const apiPath = `http://localhost:8000/cards/`;
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath, {
        deckid: input.deckid,
        question: input.question,
        answer: input.answer,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const DeleteCard = input => {
  const apiPath = `http://localhost:8000/cards/${input}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(apiPath)
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const UpdateCard = (input, id) => {
  const apiPath = `http://localhost:8000/cards/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(apiPath, {
        deckid: input.deckid,
        question: input.question,
        answer: input.answer,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

export default {
  GetSingle,
  GetAll,
  GetAllByDeckId,
  AddCard,
  DeleteCard,
  UpdateCard
};
