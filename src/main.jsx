import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import "@fortawesome/fontawesome-free/css/all.min.css";
import SmoothScrollProvider from "./utils/SmoothScrollProvider.jsx"
import './config/global.jsx'
import App from './App.jsx'
import store from './store/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </SmoothScrollProvider>
    </BrowserRouter>
  </StrictMode>
)