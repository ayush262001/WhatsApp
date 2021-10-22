import React from 'react'
import './Sidebar.css';
import SidebarChat from './SidebarChat/SidebarChat';

//imported icons
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

//imports from material-ui/core
import {Avatar, IconButton} from '@material-ui/core';

//imported ayush avatars
import Ayush from './ayushavatar.jpg';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_header_left">
                    <Avatar src={Ayush} />      
                </div>
                <div className="sidebar_header_right">
                      
                      <IconButton>
                          <DonutLargeIcon />
                      </IconButton>

                      <IconButton>
                          <ChatIcon />
                      </IconButton>

                      <IconButton>
                          <MoreVertIcon />
                      </IconButton>

                </div>
            </div>
            <div className="sidebar_search">
                <SearchIcon />
                    <input placeholder="search or start a new chat" className="inputBox" type="text" />
            </div>

            <div className="sidebar_chat_Container">
                <SidebarChat avatar={Ayush} idName={`Ayush Gour`} LastMessage={`How are you doing ?`} />
                <SidebarChat avatar={Ayush} idName={`Ayush Gour`} LastMessage={`How are you doing ?`} />
                <SidebarChat avatar={Ayush} idName={`Ayush Gour`} LastMessage={`How are you doing ?`} />
                <SidebarChat avatar={Ayush} idName={`Ayush Gour`} LastMessage={`How are you doing ?`} />
                <SidebarChat avatar={Ayush} idName={`Ayush Gour`} LastMessage={`How are you doing ?`} />
                <SidebarChat avatar={Ayush} idName={`Ayush Gour`} LastMessage={`How are you doing ?`} />
            </div>
        </div>
    )
}

export default Sidebar
