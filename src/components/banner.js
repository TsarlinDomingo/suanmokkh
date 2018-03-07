import React from 'react';

const Banner = () => {

  return (
    <nav className="navbar" role="navigation">

      <div className="navbar-brand">
        <div className="icon">
          <div className="triangle"/>
        </div>
        <div className="title">Suan Mokkh</div>
      </div>

      <div className="navbar-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">TOPIC</li>
          <li className="nav-item">TRACK LENGTH</li>
        </ul>
      </div>

      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="search keyword..."/>
      </form>

    </nav>
  )

}

export default Banner;
