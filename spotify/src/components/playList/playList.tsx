import React, { useState } from 'react';

import PlayListCover from '../playListCover/playListCover';
import PlayListInfo from "../playListInfo/playListInfo";
import PlayListContextMenu from '../playListContexMenu/playListContextMenu';

import { PlayListInterface } from '../../interfaces/interfaces';

const PlayList = ({ classes, url, title, description }: PlayListInterface) => {
    const [contextMenuState, setContextMenuState] = useState(false);

    const openContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenuState(true)
    }

    const closeContextMenu = (): void => {
        setContextMenuState(false);
    }

    return (
        <a href="/"
           className={`relative p-4 rounded-md bg-[#181818] hover:bg-[#272727] duration-200 group ${classes}`}
            onContextMenu={ openContextMenu }
        >
            <PlayListCover url={url} />
            <PlayListInfo
                title={title}
                description={description}
            />
            {contextMenuState &&
                <PlayListContextMenu
                    onClose={ closeContextMenu }
                />}
        </a>
    )
}

export default PlayList;