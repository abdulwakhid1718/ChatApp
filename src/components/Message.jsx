import React from 'react';
import ImgProfil from "../assets/img/profil.jpg"


const Message = () => {
  return (
    <div className="message">
      <div className="messageInfo">
        <img src={ImgProfil} alt="Profile" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Message;
