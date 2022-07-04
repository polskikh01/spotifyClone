import React from 'react';

import { FooterItemInterface } from '../../interfaces/interfaces';

const footerItems: FooterItemInterface[] = [
    {
        label: "Cookies"
    },
    {
        label: "Privacy"
    }
]

const FooterItem = () => {
    return (
        <ul>
            {footerItems.map(({label}) => (
                <li key={label}>
                    <a href="/" className="text-[11px] hover:underline py-2">{label}</a>
                </li>
            ))}
        </ul>
    )
}

export default FooterItem;