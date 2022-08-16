import { Fragment } from 'react';
import {Link, Outlet} from 'react-router-dom';
import './nav-styles.scss';
const Nav = () => {
    return (
        <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/home'>
                <div className='logo'>My Logo</div>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/sign-in'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
        </Fragment>
    )
}

export default Nav;