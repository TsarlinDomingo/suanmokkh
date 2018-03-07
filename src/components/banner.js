import React from 'react';

const Banner = () => {

  return (
    <nav className="navbar navbar-toggleable-md" role="navigation">

      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-brand">
        <div className="icon">
          <div className="triangle"/>
        </div>
        <div className="title">Suan Mokkh</div>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">TOPIC</li>
          <li className="nav-item">TRACK LENGTH</li>
        </ul>
      </div>

      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

    </nav>
  )

}

export default Banner;
