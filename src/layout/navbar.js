import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-danger">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Telefonski imenik</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>        
            <Link className="btn btn-outline-light m-2" to="/adduser">Add User</Link>         
        </div>
        </nav>

    </div>
  )
}
