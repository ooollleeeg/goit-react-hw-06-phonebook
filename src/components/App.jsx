import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import PhoneBook from './PhoneBook/PhoneBook';

import { store, persistor } from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PhoneBook />
      </PersistGate>
    </Provider>
  );
}

export default App;
