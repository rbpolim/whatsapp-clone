import React, { useState, useEffect } from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons'
import MicIcon from '@material-ui/icons/Mic'

import './Chat.css'

function Chat() {

    const [seed, setSeed] = useState("")
    const [input, setInput] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        
        e.preventDefault()
        console.log(input);
        setInput('')
    }

    return (
        <div className="chat">
            
            <div className="chat__header">
                <Avatar
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                />

                <div className="chat__headerInfo">
                    <h3>Chat name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${ true && 'chat__reciever'}`}>
                    <span className="chat__name">Rodrigo Polim</span>
                    Hey guys!!
                    <span className="chat__timestamp">3:52</span>
                </p>
                
                <p className="chat__message">Hey guys!!
                
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                        type="text" 
                        placeholder="Type a message"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button 
                        type="submit"
                        onClick={sendMessage}
                    >
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat
