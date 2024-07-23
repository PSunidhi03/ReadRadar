import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const userName = useSelector(state => state.user.user?.name);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recommendations">Recommendations</Link>
        {isAuthenticated ? (
          <>
            <span>Welcome, {userName}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
