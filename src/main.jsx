import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { TravelProvider } from './context/TravelContext';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <TravelProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TravelProvider>
    </Provider>
  </React.StrictMode>
);
