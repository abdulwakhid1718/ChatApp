import React from 'react'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <div className="userInfo">
                <img className='imgUser' src="" alt="" />
                <span>Jane</span>
            </div>
            <div className="chatIcons">
                <i class="bi bi-camera-video-fill"></i>
            </div>
        </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat