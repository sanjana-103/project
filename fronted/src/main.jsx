import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import FoodContextProvider from './context/FoodContext'; // ✅ Import the provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FoodContextProvider> {/* ✅ Wrap App inside context */}
        <App />
      </FoodContextProvider>
    </BrowserRouter>
  </StrictMode>
);
