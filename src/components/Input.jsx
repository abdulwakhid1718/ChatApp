import React from 'react'

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder='Tulis sesuatu..'/>
      <div className="send">
        <i class="bi bi-images"></i>
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <i class="bi bi-paperclip"></i>
        </label>
        <button>
         <i class="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  )
}

export default Input