import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store} from './store/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //provider makes redux store avaliable to all components of app, hence, APP is wrapped
  // <Provider store={store}>
    // {/* persistGate stores the state of application in store before rerendering the app, this allows us to refresh page without logging out */}
    // <PersistGate loading = {null} persistor = {persistor}>
      <App/>
    // </PersistGate>
  // </Provider>
  );

