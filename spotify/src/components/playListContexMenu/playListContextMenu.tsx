import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline'

const PlayListContextMenu = () => {
    return (
        <ul className="absolute top-9 left-9 bg-[#282828] text-[#eaeaea] text-sm divide-y divide-[#3e3e3e] p-1 rounded shadow-xl cursor-default whitespace-nowrap z-10 hidden group-hover:block">
            <li>
                <button
                    className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">Add
                    to Your Library
                </button>
            </li>
            <li className="relative">
                <button
                    className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
                    Share
                    <ChevronRightIcon className="w-4 h-4" />
                </button>
                <ul className="absolute top-0 left-full bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default">
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