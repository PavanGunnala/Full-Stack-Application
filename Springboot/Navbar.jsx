import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-3">
                    <nav className={'bg-dark'}>
                        <Link to={'/'} className={'px-2 text-white' }>Home</Link>
                        <Link to={'/register'} className={'px-2 text-white' }>Register</Link>
                        <Link to={'/login'} className={'px-2 text-white' }>Login</Link>
                        <Link to={'/about'} className={'px-2 text-white' }>About Us</Link>
                        <Link to={'/contact'} className={'px-2 text-white' }>Contact Us</Link>
                        <Link to={'/employees'} className={'px-2 text-white' }>Employees</Link>
                        <Link to={'/update'} className={'px-2 text-white' }>Update</Link>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;