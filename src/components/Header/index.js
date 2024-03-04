import React from "react";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="img"
            width={200}
          />
          <div className="header--nav">
            <a href="#">Home</a>
            <a href="#">Popular</a>
            <a href="#">Top Rated</a>
            <a href="#"></a>
          </div>
          <div className="header--search">
            <input type="text" />
            <button>search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
