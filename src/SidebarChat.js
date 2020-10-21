import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';

import './SidebarChat.css'

function SidebarChat({ addNewChat }) {

    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const creatChat = () => {
        const chatName = prompt('Please, enter name for chat')

        if (chatName) {
            //DO SOME DATASE STUFF...

        }
    }

    return !addNewChat ? (

        <div className="sidebarChat">
            <Avatar 
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sidebarChat__info">
                <h2>Fulano</h2>
                <p>Last message...</p>
            </div>
        </div>

    ) : (

        <div 
            className="sidebarChat"
            onClick={creatChat}
        >
            <h2>Add new chat</h2>    
        </div>

    )
}

export default SidebarChat
