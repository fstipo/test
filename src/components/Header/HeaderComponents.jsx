import React from 'react'

export const MenuToggler = ({ children, togglerType, sidebarType }) => {
    return (
        <>
            <div className={`${togglerType}-toggler`} >
                <button type="button" className="menu-toggler" data-toggle={`sidebar-${sidebarType}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <h1>A</h1>
            </div >
            {children}
        </>
    )
}

export const ProfileDropdown = ({ name, icon }) => {
    return (
        <a className="dropdown-item d-flex align-items-center" href="#">{name}<i className={`fa fa-${icon} fa-fw ms-auto text-gray-400 f-s-16`}></i></a>
    )
}

