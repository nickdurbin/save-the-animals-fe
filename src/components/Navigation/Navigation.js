import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const signedIn = localStorage.getItem('token')
    
    const signOut = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('isOrg')
        localStorage.removeItem('username')
    }

    return (
        <div className="Nav">
            <div className="Logo">
                <img alt="Logo"/>
            </div>
            <div className="NavLinks">
                {!signedIn && <Link to="/signup">
                    Register
                </Link>}
                {!signedIn && <Link to="/login">
                    Login
                </Link>}
                {signedIn && <Link to="/campaigns">
                    Campaigns
                </Link>}
                {signedIn && <Link to="/login" onClick={() => signOut()}>
                    Logout
                </Link>}
            </div>
        </div>
    );
};

export default Navigation;