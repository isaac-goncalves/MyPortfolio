import React, { useState } from 'react'
import styles from "./styles.module.scss";


function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState([])

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
        <div>GTP chat</div>
        <div className={styles.messages_contaniner}>
          <div className={styles.human_message}>Bom dia chat</div>
          <div className={styles.ai_message}>Boa tarde humano</div>
          {
            messages.map((message) => {
              return (<>
                <div key={message.id} className={styles.human_message}>{message.message}</div>
                <div className={styles.human_message_timestamp}>{message.time.toLocaleTimeString()}</div>
              </>
              )
            })
          }
        </div>
        <div>
          <form onSubmit={handleNewMessage}>
            <input
              value={input}
              onChange={handleChange}
              name='text'
              className={styles.input}
              placeholder="Digite sua mensagem"
            ></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default index