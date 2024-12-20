import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header className="flex justify-between p-4 align-center bg-[#3535351a] h-16">
        <div>
          <h1 className="text-2xl font-semibold">
            Readers
            <span className="text-2xl font-semibold text-[#f84525]">Wing</span>{' '}
          </h1>
        </div>
        <nav className="flex gap-10 text-2xl font-semibold">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/products">Products</Link>
          <Link to="/useReducer">UseReducer</Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
