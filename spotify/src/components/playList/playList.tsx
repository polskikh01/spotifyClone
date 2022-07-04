import React from 'react';

import PlayListCover from '../playListCover/playListCover';
import PlayListInfo from "../playListInfo/playListInfo";
import PlayListContextMenu from '../playListContexMenu/playListContextMenu';

const PlayList = () => {
    return (
        <a href="/"
           className="relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group">
            <PlayListCover />
            <PlayListInfo
                title='Playlist Title'
                description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, odit.'
            />
            <PlayListContextMenu />
        </a>
    )
}

export default PlayList;