import { StrictMode } from 'react';
import ReactDOM from 'react-dom'; // Ensure this is imported from 'react-dom', not 'react-dom/client'
import './index.css';
import App from './App.jsx';

// Correct usage of ReactDOM.render
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root') // This should be the second argument
);