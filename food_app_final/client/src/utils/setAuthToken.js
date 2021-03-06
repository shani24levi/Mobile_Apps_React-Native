import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['x-auth-token'] = token;
    return token;
  }
  else {
    //if the token isnt ther so Delete auth header
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;



