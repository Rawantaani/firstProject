import React from 'react'
import{Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <div className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
  <h5 className="my-0  font-weight-normal">Company name</h5>
  <nav className="my-2 ms-auto ms-3">
    <Link className="p-2 text-dark" to="/">Features</Link>
    <Link className="p-2 text-dark" to="enterprise">Enterprise</Link>
    <Link className="p-2 text-dark" to="support">Support</Link>
    <Link className="p-2 text-dark" to="pricing">Pricing</Link>
  </nav>
  <Link className="btn btn-outline-primary" href="#">Sign up</Link>
</div>
  )
}

export default Navbar