import React from 'react'
import './Chat.css';

//imports from material-ui/core
import {Avatar, IconButton} from '@material-ui/core';

//imports from material-ui/icons
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

//image import for avatar
import AyushAvatar from './ayushavatar.jpg';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                  <div className="chat_header_left">
                      <Avatar src={AyushAvatar} />
                      <div className="chatroom_details">
                          <h3 className="chatroom_name">Ayush Gour</h3>
                          <p className="details">last seen, Friday 26 2019 12:56pm</p>
                      </div>
                  </div>
                  <div className="chat_header_right">
                      <IconButton>
                            <SearchOutlinedIcon />
                      </IconButton>

                      <IconButton>
                            <AttachFileIcon />
                      </IconButton>

                      <IconButton>
                            <MoreVertIcon />
                      </IconButton>
                  </div>
            </div>
            <div className="chat_body">

                <p className="message">
                    <span className="name_message">Ayush Gour</span>
                    This is a messages
                    <span className="message_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="message reciever">
                    <span className="name_message">Ayush Gour</span>
                    This is a messages
                    <span className="message_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="message">
                    <span className="name_message">Ayush Gour</span>
                    This is a messages
                    <span className="message_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="message reciever">
                    <span className="name_message">Ayush Gour</span>
                    This is a messages
                    <span className="message_timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

               

            </div>
            <div className="chat_bottom">
                <IconButton>
                    <SentimentSatisfiedOutlinedIcon/>
                </IconButton>
                <form className="form_send">
                <input type="text" placeholder="type a message here"  className="type_message_here"/>
                <button type="submit" className="send_button">send</button>
                </form>
                <IconButton>
                    <MicOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
