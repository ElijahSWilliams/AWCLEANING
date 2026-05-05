import "./Chatbot.css";
import { useState } from "react";

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); 
  const {isOpen, setIsOpen} = useState();

  //
  const sendMessage = async () => {
    // ❌ prevent empty messages
    if (!input.trim()) return;

    const userMessage = input; // Store user message

    //display user message immediately
    setMessages((prev) => [...prev, { role: "User", text: userMessage }]); //take old messages 'prev' and add new message to end of array

    setInput(""); // Clear input field

    try {
      //send user message to backend
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }), //backend expects JSON with 'message' key containing user message
      });

      if (!res.ok) {
        // if response is not ok, throw error to be caught below
        throw new Error("Server error. Try Again later.");
      }

      const data = await res.json(); //get response from backend, which should contain 'reply' key with chatbot's response

      setMessages((prev) => [...prev, { role: "Bot", text: data.reply }]); //add chatbot's response to messages array, which will trigger re-render and display the new message in the UI
    } catch (err) {
      console.error("Error:", err);

      //show error message in chat if something fails
      setMessages((prev) => [
        ...prev,
        {
          role: "Bot",
          text: "Something went wrong. Please try again.",
        },
      ]);
    }
  };

  return ( 
    <div className="chatbot__view">  
     {/* Chatbot tab */} 
     <button className="chatbot__tab" onClick={() => setIsOpen(!isOpen)}> {/* toggle tab */}
        Chat
        </button>
        
    <div className="chatbot">
      <div> 
        {/* Render messages in UI */}
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role}:</b> {m.text}{" "}
            {/* Show who said what (user or bot) and show the message */}
          </p>
        ))}
      </div>
      <input
        className="chatbot__input"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        } /* Keep input synced with state */
        placeholder="Ask something..."
        onKeyDown={(e) => e.key === "Enter" && sendMessage()} //allow user to press Enter to send message
      />
      <button onClick={sendMessage} className="chatbot__send-btn">
        Send
      </button>{" "}
      {/* When clicked, run everything above */}
    </div> 
    </div>
  );
}

export default Chatbot;
