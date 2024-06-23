import React from "react";

function ChatbotMsg({ content, loc }) {
  return <div className={`chatbotMsg ${loc}`}>{content}</div>;
}

export default ChatbotMsg;
