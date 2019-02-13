import axios from 'axios';

const GetAuthClientId = id => {
  const apiPath = `http://localhost:8000/userauth/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .get(apiPath)
      .then(clientid => {
        resolve(clientid.data);
      })
      .catch(error => reject(error));
  });
}

const AddAuthClientId = input => {
  const apiPath = `http://localhost:8000/userauth/`;
  return new Promise((resolve, reject) => {
    axios
      .post(apiPath, {
        authid: input.clientid
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

const UpdateAuthId = (input, id) => {
  const apiPath = `http://localhost:8000/userauth/${id}`;
  return new Promise((resolve, reject) => {
    axios
      .put(apiPath, {
        authid: input.clientid
      })
      .then(response => resolve (response))
      .catch(error => reject(error));
  });
}

export default {
  GetAuthClientId,
  AddAuthClientId,
  UpdateAuthId,
};