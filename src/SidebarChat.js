import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';

import db from './firebase'

import './SidebarChat.css'

function SidebarChat({ id, name, addNewChat }) {

    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const creatChat = () => {
        const roomName = prompt('Please, enter name for chat')

        if (roomName) {
            //DO SOME DATASE STUFF...
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar 
                src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
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
