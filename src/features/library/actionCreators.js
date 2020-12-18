import { useEffect } from 'react';
import {
  GET_AUTHORS,
  GET_BOOKS,
  GET_MAGAZINES,
} from './actionTypes';
import { useLibraryContext } from './context';

const useSetLibraryData = ({ books, magazines, authors }) => {
  const { dispatch } = useLibraryContext();
  useEffect(() => {
    dispatch({
      type: GET_AUTHORS,
      payload: authors,
    });
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
    dispatch({
      type: GET_MAGAZINES,
      payload: magazines,
    });
  }, [dispatch])
};

export default useSetLibraryData;
