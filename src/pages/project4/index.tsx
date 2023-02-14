/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import styles from "./styles.module.scss";
import { AiOutlineSend } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/Io';
import Image from 'next/image';


function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  const handleChange = e => {
    setInput(e.target.value);
  };

  function handleNewMessage(e) {

    e.preventDefault();

    console.log(input)

    const newmessage = {
      id: 1,
      message: input,
      type: 'human',
      time: new Date()
    }
    setMessages([...messages, newmessage])
    setInput('')
    console.log(messages)
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.messages_container}>
          <div className={styles.header}>
            <div className={styles.goback}>
            <IoIosArrowBack size={30}  />
            </div>
            <div className={styles.avatar}>
            <Image
              src="/showdomilhao-logo.png"
              alt="Picture of the author" 
              width={40}
              height={40}
            />
          </div>
          <p>
            GTP chat
          </p>
        </div>
        <div className={styles.messages_wrapper}>
          <div className={styles.human_message}>
            <div >Bom dia chat</div>
            <div className={styles.message_timestamp}>11:34:45</div>
          </div>
          <div className={styles.ai_message}>
            <div >Boa tarde humano</div>
            <div className={styles.message_timestamp}>11:34:45</div>
          </div>
          {
            messages.map((message) => {
              return (<>
                <div className={styles.human_message}>
                  <div key={message.id} >{message.message}</div>
                  <div className={styles.message_timestamp}>{message.time.toLocaleTimeString()}</div>
                </div>
              </>
              )
            })
          }
        </div>
        <form onSubmit={handleNewMessage}>
          <div className={styles.form_container}>
            <input
              value={input}
              onChange={handleChange}
              name='text'
              className={styles.input}
              placeholder="Digite sua mensagem"
            >
            </input>
            <span
              onClick={handleNewMessage}
            >
              <AiOutlineSend
                size={30}
              />
            </span>
          </div>
        </form>
      </div>
      <div>
      </div>
    </div>
    </div >
  )
}

export default index