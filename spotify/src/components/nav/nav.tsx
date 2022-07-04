import React from 'react';
import {HomeIcon, SearchIcon, ViewBoardsIcon, PlusCircleIcon, HeartIcon} from '@heroicons/react/outline';
import NavItem from '../navItem/navItem';

import {NavItemInterface} from '../../interfaces/interfaces';

const activeNavItemClasses: string = 'flex items-center text-white bg-[#282828] mx-2 px-4 py-2 rounded';
const navItemClasses: string = 'flex items-center hover:text-white mx-2 px-4 py-2 rounded duration-300';

const navItems: NavItemInterface[] = [
    {
        label: 'Home',
        classes: `${activeNavItemClasses}`,
        icon: <HomeIcon className="w-6 h-6"/>
    },
    {
        label: 'Search',
        classes: `${navItemClasses}`,
        icon: <SearchIcon className="w-6 h-6"/>
    },
    {
        label: 'Your Library',
        classes: `${navItemClasses} mb-6`,
        icon: <ViewBoardsIcon className="w-6 h-6"/>
    },
    {
        label: 'Create Playlist',
        classes: `${navItemClasses}`,
        icon: <PlusCircleIcon className="w-6 h-6"/>
    },
    {
        label: 'Liked Songs',
        classes: `${navItemClasses}`,
        icon: <HeartIcon className="w-6 h-6"/>
    },
];

const Nav = () => {
    return (
        <nav>
            {navItems.map(({label, classes, icon}) => (
                    <NavItem label={label} classes={classes} icon={icon} key={label} />
                )
            )}
        </nav>
    )
}

export default Nav;