import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';

import './Sidebar.css'

function SidebarChat() {

    const [seed, setSeed] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <div className="sidebarChat">
            <Avatar 
                src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
            />
            <div className="sidebarChat__info">
                <h2>Fulano</h2>
                <p>Last message...</p>
            </div>

        </div>
    )
}

export default SidebarChat
