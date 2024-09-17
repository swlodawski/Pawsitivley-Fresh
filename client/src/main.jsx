import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Reviews from './pages/Reviews.jsx';
import Why from './pages/Why.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
  },
  {
    path: '/about', 
    element: <About />, 
  },
  {
    path: '/products', 
    element: <Products />, 
  },
  { 
    path: '/reviews', 
    element: <Reviews />, 
  },
  {
    path: '/why', 
    element: <Why />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
