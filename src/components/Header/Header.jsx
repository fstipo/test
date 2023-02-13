import React from 'react'
import { MenuToggler } from './HeaderComponents'
import { ProfileDropdown } from './HeaderComponents'

const Header = () => {
    return (
        <header id="header" className="app-header">
            {/* <!-- BEGIN mobile-toggler --> */}
            <MenuToggler togglerType="mobile" sidebarType="mobile" />
            <MenuToggler togglerType="desktop" sidebarType="minify">
                <a href="#" className="brand-logo">
                    <img src="assets/img/logo.png" alt="" height="20" />
                </a>
            </MenuToggler>
            {/* <!-- BEGIN menu --> */}
            <div className="menu">
                <form className="menu-search">
                </form>
                <div className="menu-item dropdown">
                    <a href="#" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
                        <div className="menu-img online">
                            <div className="d-flex align-items-center justify-content-center w-100 h-100 bg-gray-800 text-gray-300 rounded-circle overflow-hidden">
                                <i className="fa fa-user fa-2x mb-n3"></i>
                            </div>
                        </div>
                        <div className="menu-text">username@account.com</div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end me-lg-3">
                        <ProfileDropdown name="Edit Profile" icon="user-circle" />
                        <ProfileDropdown name="Settings" icon="wrench" />
                        <div className="dropdown-divider"></div>
                        <ProfileDropdown name="Log Out" icon="toggle-off" />
                    </div>
                </div>
            </div>
            {/* <!-- END menu --> */}
        </header>
    )
}

export default Header