import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MenuIcon } from '@heroicons/react/outline';

import Button from '../button/button';

const Header = () => {
    return (
        <header
            className="bg-[#070707] flex-1 flex justify-between items-center py-[10px] px-[13px] sm:px-[32px] sticky top-0 z-10">
            <div className="flex">
                <a href="#sidebar" className="mr-[8px] text-[#969696] p-1 -ml-1.5 inline-block lg:hidden">
                    <MenuIcon className="w-6 h-6"/>
                </a>
                <a href="/" className="mr-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronLeftIcon className="w-6 h-6"/>
                </a>
                <a href="/" className="ml-[8px] text-[#969696] p-1 cursor-not-allowed">
                    <ChevronRightIcon className="w-6 h-6"/>
                </a>
            </div>
            <div>
                <Button styles="text-white" text="Sign Up" />
                <Button styles="bg-white text-[#2e2e2e]" text="Log In" />
            </div>
        </header>
    )
}

export default Header;