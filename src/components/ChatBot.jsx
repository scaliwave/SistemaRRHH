import chatbot from '/public/chatbot.png'
import "../styles/Chatbot.css"


export function ChatBot() {
  return (
    <div className='chatbot'>
      <div className='imagen'>
        <img src={chatbot} width="70px" height="70px"/>
      </div>
      <div>
        <h3 className='mensaje'>Contáctanos</h3>
      </div>
    </div>
  );
}
