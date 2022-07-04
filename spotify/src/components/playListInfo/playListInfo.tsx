import React from 'react';

import { PlayListInfoInterface } from '../../interfaces/interfaces';

const PlayListInfo = ({title, description}: PlayListInfoInterface) => {
    return (
        <>
            <h3 className="mt-4 mb-1 font-semibold tracking-wide capitalize">{title}</h3>
            <p className="text-sm text-[#b3b3b3] line-clamp-2">{description}</p>
        </>
    )
}

export default PlayListInfo;