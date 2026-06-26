import { useState } from "react";
import "./FloatingAI.css";
import { getAIResponse } from "../ai/aiEngine";

function FloatingAI() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [open, setOpen] = useState(false);

    const [messages, setMessages] = useState([
        {
            sender: "TUDO",
            text: `👋 Hello ${user?.fullName || "Traveler"}!

Welcome back to TravelMate.

I'm TUDO AI, your personal travel companion.

I can help you with:

✈ Flight Booking
🚆 Train Booking
🚌 Bus Booking
🏨 Hotel Suggestions
🌍 Travel Destinations
💰 Budget Planning
🌦 Weather Updates
📦 Holiday Packages

How can I help you today?`
        }
    ]);

    const [input, setInput] = useState("");

    const sendMessage = () => {

        if (input.trim() === "") return;

        const userMessage = {
            sender: user?.fullName || "You",
            text: input
        };

        const botMessage = {
            sender: "TUDO",
            text: getAIResponse(input)
        };

        setMessages((prev) => [...prev, userMessage, botMessage]);

        setInput("");

    };

    return (

        <>

            <button
                className="chat-button"
                onClick={() => setOpen(!open)}
            >
                🤖
            </button>

            {

                open && (

                    <div className="chat-box">

                        <div className="chat-header">

                            🤖 TUDO AI

                            <p style={{
                                fontSize: "12px",
                                marginTop: "5px",
                                fontWeight: "normal"
                            }}>
                                Your Personal Travel Companion
                            </p>

                        </div>

                        <div className="chat-body">

                            {

                                messages.map((msg, index) => (

                                    <div
                                        key={index}
                                        className={msg.sender === "TUDO" ? "ai-msg" : "user-msg"}
                                    >

                                        <strong>{msg.sender}</strong>

                                        <br />

                                        {msg.text}

                                    </div>

                                ))

                            }

                        </div>

                        <div className="chat-footer">

                            <input
                                type="text"
                                placeholder="Ask TUDO anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                }}
                            />

                            <button onClick={sendMessage}>
                                Send
                            </button>

                        </div>

                    </div>

                )

            }

        </>

    );

}

export default FloatingAI;