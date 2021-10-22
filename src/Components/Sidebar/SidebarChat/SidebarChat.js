import React from 'react'
import './SidebarChat.css';

//material ui imports
import {Avatar} from '@material-ui/core';


function SidebarChat({avatar, idName, LastMessage}) {
    return (
        <div className="sidebar_chat">
            <div className="sidebar_chat_left">
                     <Avatar src={avatar}/>
            </div>
            <div className="sidebar_chat_right">
                    <h2 className="name">{idName}</h2>
                    <p className="last_message">{LastMessage}</p>
            </div>
        </div>
    )
}

export default SidebarChat
