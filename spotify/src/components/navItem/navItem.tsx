import React from 'react';

import {NavItemInterface} from '../../interfaces/interfaces';

const NavItem = ({ label, classes, icon }: NavItemInterface) => {
    return (
        <a href="/" className={classes}>
            {icon}
            <span className="ml-4 text-sm font-semibold">{label}</span>
        </a>
    )
}

export default NavItem;