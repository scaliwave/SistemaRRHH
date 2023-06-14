
import "../styles/Chatbot.css"


export function ChatBot() {

  const ActiveBot = () =>{
    console.log("click");
     window.open('http://t.me/Labsofbot', '_blank', 'width=600,height=600');
  }

  return (
    <div  className="chatbot">
      <div className='imagen'>
        <img id="imgBot" src="/chatbot.png" width="70px" height="70px" onClick={ActiveBot}/>
      </div>
      <div>
        <h3 className='mensaje'>Contáctanos</h3>
      </div>
    </div>
  );
}
