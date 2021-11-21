import React from 'react';
import {RepositoryList} from './components/listBookStorage'
import {Provider} from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store ={store}>
      <h1>Page</h1>
      <RepositoryList/>
    </Provider>
  );
}

export default App;
