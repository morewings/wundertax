import {
  GET_AUTHORS,
  GET_BOOKS,
  GET_MAGAZINES,
} from './actionTypes';

export const initialState = {
  authors: [],
  books: [],
  magazines: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS: {
      const authors = action.payload;
      return {
        ...state,
        authors,
      };
    }
    case GET_BOOKS: {
      const books = action.payload;
      return {
        ...state,
        books,
      };
    }
    case GET_MAGAZINES: {
      const magazines = action.payload;
      return {
        ...state,
        magazines,
      };
    }
    default:
      return state;
  }
};

export default reducer;
