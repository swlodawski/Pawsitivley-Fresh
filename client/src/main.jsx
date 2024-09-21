import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Products from './pages/Product/Products.jsx';
import Reviews from './pages/Review/Reviews.jsx';
import Why from './pages/Why/Why.jsx';
import Login from './pages/Login/Login.jsx';
import Signup from './pages/Signup/Signup.jsx';

import './index.css';

// import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
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
      {
        path: '/login', 
        element: <Login />, 
      },
      {
          path: '/signup', 
          element: <Signup />, 
      },
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
