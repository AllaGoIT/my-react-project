import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import PropTypes from 'prop-types';
// Імпорт стилів нормалізації
import "modern-normalize";
import { FaBeer } from 'react-icons/fa';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
