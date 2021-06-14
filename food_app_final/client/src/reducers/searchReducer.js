import { SONGS_ARRAY, SEARCH_QUERY } from '../types';

const initialState = {
    search_query: '',
    songs: [],
    loading: true,
    lastSearches: [],
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SONGS_ARRAY:
            return {
                ...state,
                songs: action.payload,
                loading: false
            };

        case SEARCH_QUERY:
            console.log('123 reduser');
            action.payload == "" ? state.lastSearches : state.lastSearches.unshift(action.payload); //empty qury dosent get saved in the array of searches
            state.lastSearches = state.lastSearches.slice(0, 5);
            return {
                ...state,
                search_query: action.payload,
                loading: true,
                lastSearches: [...state.lastSearches]
            };

        default:
            return state;
    }
};