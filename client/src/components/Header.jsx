import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar bg-body-tertiary">
    <div className="container-fluid justify-content-end">
    
      <Link className="btn btn-outline-success me-2 same-size-btn" type="button" to="/sign-up">
          SignUp
        </Link>
        <Link className="btn btn-outline-success me-2 same-size-btn" type="button" to="/sign-in">
          SignIn
        </Link>
    </div>
  </nav>
  )
}

export default Header
