import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; // Import your CSS file for styling

function Home() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="home-container">
      <header>
        <h1>Welcome to Our Beautiful Home Page</h1>
      </header>
      <main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor
          aliquam quam, vel vestibulum arcu fermentum ut. Suspendisse
          ullamcorper elit auctor justo convallis, a fermentum libero venenatis.
          Sed vitae tincidunt tellus.
        </p>
        <p>
          Integer nec justo vel metus fringilla volutpat. Quisque eu velit
          vitae purus vehicula hendrerit. Vivamus commodo euismod libero, ac
          fringilla eros luctus sed. Donec vel sapien eget justo tincidunt
          consequat.
        </p>
        <button onClick={logout}>
          <Link to="/">Logout</Link>
        </button>
      </main>
      <footer>
        <p>&copy; 2023 Your Company Name</p>
      </footer>
    </div>
  );
}

export default Home;
