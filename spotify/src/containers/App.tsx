import React from 'react';

import Sidebar from '../components/sidebar/sidebar';
import Header from '../components/header/header';
import Main from '../components/main/main';
import Registration from '../components/registration/registration';
import SidebarOverlay from '../components/sidebarOverlay/sidebarOverlay';

const App = () => {
    return (
        <>
            <div className="flex flex-grow overflow-auto">
                <Sidebar/>
                <SidebarOverlay/>
                <div className="flex-1 overflow-auto">
                    <Header/>
                    <Main/>
                </div>
            </div>
            <Registration/>
        </>
    );
}

export default App;
