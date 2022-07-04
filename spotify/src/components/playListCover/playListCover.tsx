import React from 'react';

import { ChevronRightIcon } from '@heroicons/react/outline'

const PlayListCover = () => {
    return (
        <div className="relative">
            <img src="https://fakeimg.pl/600/7f1d1d/fff?text=Cover&font=lobster" className="rounded shadow-lg" alt="img" />
            <button
                className="h-10 w-10 bg-[#1cb955] rounded-full shadow-xl absolute right-2 bottom-2 flex justify-center items-center cursor-auto duration-200 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105">
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </div>
    )
}

export default PlayListCover;