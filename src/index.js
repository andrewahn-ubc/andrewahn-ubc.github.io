import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrightnessContextProvider } from './Context/BrightnessContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrightnessContextProvider>
            <App />
        </BrightnessContextProvider>
    </React.StrictMode>
);


