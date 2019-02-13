import axios from 'axios';
import moment from 'moment';

const GetSingle = id => {
  const apiPath = `http://localhost:8000/decks/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(deck => {
        resolve(deck.data);
      })
      .catch(error => reject(error));
  });
}

const GetSingleForEdit = id => {
  console.log('Decks.js');
  const apiPath = `http://localhost:8000/decks/edit/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(deck => {
        resolve(deck.data);
      })
      .catch(error => reject(error));
  });
}

const GetAll = () => {
  const apiPath = `http://localhost:8000/decks`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(decks => resolve (decks.data))
      .catch(error => reject(error));
    });
};

const AddDeck = input => {
  const apiPath = `http://localhost:8000/decks/`;
  // gets current date as `2018-01-24`
  const currentDate = moment().format('YYYY-MM-DD');
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath, {
        name: input.name,
        category: input.category,
        publicdeck: input.publicdeck,
        deckcreatorid: input.deckcreatorid,
        datecreated: currentDate,
        datelastmodified: currentDate,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const DeleteDeck = input => {
  const apiPath = `http://localhost:8000/decks/${input}`;
  return new Promise((resolve, reject) => {
    axios
      .delete(apiPath)
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const UpdateDeck = (input, id) => {
  const apiPath = `http://localhost:8000/decks/edit/${id}`;
  // gets current date as `2018-01-24`
  console.log('updatedeck')
  const currentDate = moment().format('YYYY-MM-DD');
  return new Promise((resolve, reject) => {
    axios
      .put(apiPath, {
        name: input.name,
        category: input.category,
        publicdeck: input.publicdeck,
        deckcreatorid: input.deckcreatorid,
        datecreated: input.datecreated,
        datelastmodified: currentDate,
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

export default {
  GetSingle, GetSingleForEdit, GetAll, AddDeck, DeleteDeck, UpdateDeck
};
