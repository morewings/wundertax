import { createContext, useContext } from 'react';

const LibraryContext = createContext({});

export const useLibraryContext = () => useContext(LibraryContext);

export default LibraryContext;
