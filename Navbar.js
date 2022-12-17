import React from 'react';
import PropTypes from 'prop-types';
 import { Link } from 'react-router-dom';

export default function Navbar(props) { 
  return (
    
    <nav className={`navbar navbar-expand lg navbar-${props.mode} bg-${props.mode}`}> 
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.Abouttext}</Link>
          </li>
          
        </ul>

        <div className="d-flex">
        <div class="p-3 mb-2 bg-primary text-white mx-2" onClick={()=>{props.ToggleMode('primary')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
<div class="p-3 mb-2 bg-secondary text-white mx-2" onClick={()=>{props.ToggleMode('secondary')}} style={{height:'30px', width:'30px', cursor:'pointer'}} ></div>
<div class="p-3 mb-2 bg-success text-white mx-2" onClick={()=>{props.ToggleMode('success')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>
<div class="p-3 mb-2 bg-danger text-white mx-2" onClick={()=>{props.ToggleMode('danger')}} style={{height:'30px', width:'30px', cursor:'pointer'}}></div>

        </div>
      

        <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>     
  <input className="form-check-input" type="checkbox" onClick={()=>{props.ToggleMode('null')}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlfor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
      </div>
    </div>
  </nav>
  
)}


Navbar.propTypes={
    title: PropTypes.string,
  Abouttext:PropTypes.string
  }

// Greeting.defaultProps = {        //   ctrl+k+c in vs code
//    name: 'Stranger'
//  };



