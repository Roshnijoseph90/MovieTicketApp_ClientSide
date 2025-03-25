import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from '../pages/user/Home';
import LoginPage from '../pages/Shared/LoginPage'
import Signup from '../pages/Shared/SignUp';
import Booking from '../pages/user/Booking';
import Profile from '../pages/user/Profile';
import ErrorPage from '../pages/Shared/ErrorPage';
import ProtectRoute from './ProtectRoute';
import RootLayout from '../layout/RootLayout';
import Movies from '../pages/user/Movies';
import Logout from '../pages/user/Logout';
import Search from '../pages/user/Search';
import MoviesDetails from '../pages/user/MoviesDetails'
import Showtimes from '../pages/user/Showtimes'

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,  // The Home Page
      },
      {
        path: "/login",
        element: <LoginPage />,  // Login Page
      },
      {
        path: "/logout",
        element: <Logout />,  // Logout Page
      },
      {
        path: "/signup",
        element: <Signup />,  // Signup Page
      },
    {
        path: "movies",
        element: <Movies />,  // Movies Page
      },
      {
        path:"/moviesDetails/:movieId",
        element:<MoviesDetails/>
      },
      {
        path:"/showtimes/:movieId",
        element:<Showtimes/>
      },
      
      // Protecting Routes
      {
        element: <ProtectRoute />,  // ProtectRoute for authentication check
        children: [
          {
            path: "profile",
            element: <Profile />,  // Profile Page
          },
          {
            path: "/booking/:movieId/:showtimeId ",  // Changed to lowercase
            element: <Booking/>,  // Book Ticket Page
          },
          {
            path: "payment",
            element: <h1>Payment Page</h1>,  // Payment Page (Placeholder)
          },
          
        ],
      },
    
      {
        path: "/search",  // Route for the Search page
        element: <Search />,  // Search Page
      },
      {
        path: "*",
        element: <ErrorPage home='/' />,  // A 404 page or some error message
      },
    ],
  },
]);
