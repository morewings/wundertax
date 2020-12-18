import React from 'react';
import createStoreProvider from './../../store/createStoreProvider';
import context from './context';
import reducer, { initialState } from './reducer';

export const Provider = createStoreProvider({
  initialState,
  reducer,
  context,
});

const withLibraryProvider = WrappedComponent => props => (
  <Provider>
    <WrappedComponent {...props} />
  </Provider>
);

export default withLibraryProvider;
