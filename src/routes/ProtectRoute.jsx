import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const ProtectRoute = () => {
  const [isUserAuth, setIsUserAuth] = useState(true);  // Replace this with your actual authentication check
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuth) {
      // Redirect to login page if user is not authenticated
      navigate('/login');
    }
  }, [isUserAuth, navigate]);

  // If the user is authenticated, render the child components (via Outlet)
  if (!isUserAuth) {
    return null; // Or a loading indicator, etc.
  }

  return <Outlet />;
};

export default ProtectRoute;
