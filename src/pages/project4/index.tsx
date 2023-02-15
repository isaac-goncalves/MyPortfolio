/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { AiOutlineSend } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { format } from 'date-fns';
import Image from 'next/image';

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    async function getSessionId() {
      const result = await fetch('http://localhost:3030/session', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      const data = await result.json()
      console.log("SessionId gotten from backend is: " + data.sessionId)
      setSessionId(data.sessionId)
    }

    getSessionId()

  }, [])

  const handleChange = e => {
    setInput(e.target.value);
  };

  async function handleNewMessage(e) {

    e.preventDefault();

    const newmessage = {
      message: input,
      type: 'human',
      time: new Date()
    }
    setMessages([...messages, newmessage])
    setInput('')

    handleNewMessageFromBot(input)

  }

  async function handleNewMessageFromBot(message) {
    const result = await fetch('http://localhost:3030/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: input,
        sessionId: sessionId
      })
    })

    const data = await result.json()

    console.log(data.message)

    const newmessage2 = {
      message: data.message,
      type: 'ai',
      time: new Date()
    }
    setMessages([...messages, newmessage2])
    
    console.log(messages)

    console.log("Requested!!")
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.messages_container}>
          <div className={styles.header}>
            <div className={styles.goback}>
              <IoIosArrowBack size={30} />
            </div>
            <Image
              className={styles.avatar}
              src="/showdomilhao-logo.png"
              alt="Picture of the author"
              width={40}
              height={40}
            />
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
                if (message.type === 'ai') {
                  return (<>
                    <div key={message.id} className={styles.ai_message}>
                      <div  >{message.message}</div>
                      <div className={styles.message_timestamp}>{format(message.time, 'h:mm a')}</div>
                    </div>
                  </>
                  )
                }
                else {
                  return (<>
                    <div key={message.id} className={styles.human_message}>
                      <div  >{message.message}</div>
                      <div className={styles.message_timestamp}>{format(message.time, 'h:mm a')}</div>
                    </div>
                  </>
                  )
                }
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