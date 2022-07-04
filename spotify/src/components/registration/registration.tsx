import React from 'react';

import Button from '../button/button';

const Registration = () => {
    return (
        <a href="/"
           className="bg-gradient-to-r from-[#af2896] to-[#509bf5] text-white py-4 px-8 flex justify-between items-center flex-wrap gap-x-6 gap-y-2">
            <div>
                <p className="text-xs uppercase tracking-wider mb-1">Preview of Spotify</p>
                <p className="leading-6 text-[14px] tracking-wide">Sign up to get unlimited songs and podcasts with
                    occasional
                    ads. No credit card needed.</p>
            </div>
            <Button styles="bg-white text-[#2c77d0] text-[14px]" text="Sign up free" />
        </a>
    )
}

export default Registration;