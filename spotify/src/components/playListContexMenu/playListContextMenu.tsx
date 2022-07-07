import React, { useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline'

import { PlayListContextMenuInterface } from '../../interfaces/interfaces';

const PlayListContextMenu = ({ onClose }: PlayListContextMenuInterface) => {
    useEffect(() => {
        document.addEventListener('mousedown', onClose);

        return () => {
            document.removeEventListener('mousedown', onClose)
        }
    })

    return (
        <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10">
            <li>
                <button
                    className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add
                    to Your Library
                </button>
            </li>
            <li className="relative">
                <button
                    className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center peer">
                    Share
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
                <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default invisible peer-hover:visible hover:visible">
                    <li>
                        <button
                            className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Copy
                            link to playlist
                        </button>
                    </li>
                    <li>
                        <button
                            className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Embed
                            playlist
                        </button>
                    </li>
                </ul>
            </li>
            <li>
                <button
                    className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">About
                    recommendations
                </button>
            </li>
            <li>
                <button
                    className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Open
                    in Desktop app
                </button>
            </li>
        </ul>
    )
}

export default PlayListContextMenu;