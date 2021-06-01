import { SONGS_ARRAY, SEARCH_QUERY } from '../types';
const CLIENT_ID = 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE';

// https://api.soundcloud.com/tracks/?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE&q=brono

export const fatchSongsByQury = (song_name) => async (dispatch) => {
  // goes to some API
  const result = await (
    await fetch(`https://api.soundcloud.com/tracks/?client_id=${CLIENT_ID}&q=${song_name}`)
  ).json();
  console.log(result.length);
  dispatch({ type: SONGS_ARRAY, payload: result });
};

//returns the input
export const setSearchQury = (search_query) => dispatch => {
  console.log('123 action');
  dispatch({
    type: SEARCH_QUERY,
    payload: search_query
  });
};

