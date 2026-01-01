import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const RippleEffect = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      document.body.appendChild(ripple);

      ripple.style.left = `${e.clientX - ripple.offsetWidth / 2}px`;
      ripple.style.top = `${e.clientY - ripple.offsetHeight / 2}px`;

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RippleEffect />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)