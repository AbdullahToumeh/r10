import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import store from './redux/store';
import client from './config/api';

import RootStackNavigator from './navigation/RootStackNavigator';

const App = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <RootStackNavigator />
    </Provider>
  </ApolloProvider>
);


export default App;
