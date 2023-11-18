import React from 'react'
import Categories from './Categories'
import styles from "./navbar.module.css"


const Navbar = () => {
  return (
    <nav className="navbar sticky-top bg-white border-bottom ">
    <div className="container py-1 py-sm-2">
        <div className='d-flex align-items-center'>
            <img alt='logo' src='https://booking.webestica.com/assets/images/logo.svg' height={40}/>
            <div className='d-none align-items-center ms-4 btn p-0 border-0 d-sm-flex'>
                <span><i class="bi bi-list fs-3"/></span>
                <span className='d-none d-sm-flex'>Menu</span>
            </div>
        </div>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row justify-items-center d-none d-lg-flex">
            <li className="nav-item dropdown p-3">
                <a className="nav-link m-0 p-0 dropdown-toggle position-relative fw-semibold" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Listings
                </a>
                <ul className="dropdown-menu position-absolute border-0 shadow p-2">
                    <li><a className="dropdown-item" href="#!">About</a></li>
                    <li><a className="dropdown-item" href="#!">Contact</a></li>
                    <li><a className="dropdown-item" href="#!">our Team</a></li>
                    <li><a className="dropdown-item" href="#!">Authentication</a></li>
                    <li><a className="dropdown-item" href="#!">Blog</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown p-3">
                <a className="nav-link m-0 p-0 dropdown-toggle position-relative fw-semibold" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                </a>
                <ul className="dropdown-menu position-absolute border-0 shadow p-2">
                    <li><a className="dropdown-item" href="#!">Hotel</a></li>
                    <li><a className="dropdown-item" href="#!">Flight</a></li>
                    <li><a className="dropdown-item" href="#!">Tour</a></li>
                    <li><a className="dropdown-item" href="#!">Cab</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown p-3">
                <a className="nav-link m-0 p-0 dropdown-toggle position-relative fw-semibold" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Accounts
                </a>
                <ul className="dropdown-menu position-absolute border-0 shadow p-2">
                    <li><a className="dropdown-item" href="#!">User Profile</a></li>
                    <li><a className="dropdown-item" href="#!">Agent Dashboard</a></li>
                    <li><a className="dropdown-item" href="#!">Tour</a></li>
                    <li><a className="dropdown-item" href="#!">Master Admin</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown p-3">
                <a className="nav-link m-0 p-0 dropdown-toggle position-relative fw-semibold" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots"/>
                </a>
                <ul className="dropdown-menu position-absolute border-0 shadow p-2">
                    <li><a className="dropdown-item" href="#!">User Profile</a></li>
                    <li><a className="dropdown-item" href="#!">Agent Dashboard</a></li>
                    <li><a className="dropdown-item" href="#!">Tour</a></li>
                    <li><a className="dropdown-item" href="#!">Master Admin</a></li>
                </ul>
            </li>
        </ul>
        <div className='d-flex justify-content-center'>
        <div className='d-flex align-items-center ms-4 btn p-0 border-0 d-sm-none'>
            <span><i class="bi bi-list fs-3"/></span>
        </div>
            <Categories/>
            <button className={`${styles.notification} btn ms-3`}>
            <i className="bi bi-bell"/>
            </button>
            <img className='rounded-3 ms-4' src='https://booking.webestica.com/assets/images/avatar/01.jpg' width={40}  height={40} alt='profileImg'/>
        </div>
    </div>
</nav>
  )
}

export default Navbar